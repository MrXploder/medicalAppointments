<?php
// Headers HTML para prevenir que el navegador guarde en caché el contenido de la pagina
Header('Content-type: text/javascript');
Header('Expires: Sun, 01 Jan 2014 00:00:00 GMT');
Header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
Header("Cache-Control: post-check=0, pre-check=0", false);
Header("Pragma: no-cache");
// Notificar solamente errores de ejecución
error_reporting(E_ERROR);

require $_SERVER['DOCUMENT_ROOT'].'/server/functions/sanitizeInput.php';
require $_SERVER['DOCUMENT_ROOT'].'/server/enviroment.php';

/* THIS WORKAROUND IS MADE TO PATCH THE NEED FOR "PUT", "DELETE" AND "HEAD"
METHODS NOT IMPLEMENTED IN PHPDESKTOP A.K.A MONGOOSE SERVER.

HEAD, OPTIONS AND GET REQUESTS ARE MAPPED TO A GET REQUEST.
PUT, DELETE AND POST ARE MAPPED TO A POST REQUEST.

THE FRONTEND MUST SEND A CUSTOM HEADER WITH THE DESIRED METHOD
*/
if(isset($_SERVER["HTTP_X_HTTP_METHOD_OVERRIDE"])){
	$_SERVER["REQUEST_METHOD"] = $_SERVER["HTTP_X_HTTP_METHOD_OVERRIDE"];
}

//METHODS///////////////////////////////////////////////////////
try{
	if($_SERVER['REQUEST_METHOD'] === 'GET'){
		$toSend = array("data" => [], "meta" => []);
		$requestDate  = DateTimeImmutable::createFromFormat('m/Y', sanitizeInput($_GET["date"]));
		$startDate    = $requestDate->modify("First day of this month");
		$endDate      = $requestDate->modify("Last day of this month");
		$payLoad  	  = array(
			"21-01-001" => array("code" => "21-01-001", "codeText" => "Infiltración local medicamentos (bursas, tendones, yuxta articular)", "total" => 0, "beneficiario" => 0, "a_cerrada" => 0, "a_abierta" => 0, "urgencia" => 0),
			"21-01-002" => array("code" => "21-01-002", "codeText" => "Procedimiento para exploraciones radiológicas (incluye maniobra e inyección del medio de contraste)", "total" => 0, "beneficiario" => 0, "a_cerrada" => 0, "a_abierta" => 0, "urgencia" => 0),
			"21-01-003" => array("code" => "21-01-003", "codeText" => "Movilización articular bajo anestesia general", "total" => 0, "beneficiario" => 0, "a_cerrada" => 0, "a_abierta" => 0, "urgencia" => 0),
			"21-05-001" => array("code" => "21-05-001", "codeText" => "Calzón corto de yeso", "total" => 0, "beneficiario" => 0, "a_cerrada" => 0, "a_abierta" => 0, "urgencia" => 0),
			"21-05-002" => array("code" => "21-05-002", "codeText" => "Corbata de schantz", "total" => 0, "beneficiario" => 0, "a_cerrada" => 0, "a_abierta" => 0, "urgencia" => 0),
			"21-05-003" => array("code" => "21-05-003", "codeText" => "Minerva de yeso", "total" => 0, "beneficiario" => 0, "a_cerrada" => 0, "a_abierta" => 0, "urgencia" => 0),
			"21-05-004" => array("code" => "21-05-004", "codeText" => "Rodillera, bota larga o corta de yeso", "total" => 0, "beneficiario" => 0, "a_cerrada" => 0, "a_abierta" => 0, "urgencia" => 0),
			"21-05-005" => array("code" => "21-05-005", "codeText" => "Velpeau", "total" => 0, "beneficiario" => 0, "a_cerrada" => 0, "a_abierta" => 0, "urgencia" => 0),
			"21-05-006" => array("code" => "21-05-006", "codeText" => "Yeso antebraquial c/s ferula digital", "total" => 0, "beneficiario" => 0, "a_cerrada" => 0, "a_abierta" => 0, "urgencia" => 0),
			"21-05-007" => array("code" => "21-05-007", "codeText" => "Yeso braquicarpiano", "total" => 0, "beneficiario" => 0, "a_cerrada" => 0, "a_abierta" => 0, "urgencia" => 0),
			"21-05-008" => array("code" => "21-05-008", "codeText" => "Yeso pelvipedio bilateral", "total" => 0, "beneficiario" => 0, "a_cerrada" => 0, "a_abierta" => 0, "urgencia" => 0),
			"21-05-009" => array("code" => "21-05-009", "codeText" => "Yeso pelvipedio unilateral", "total" => 0, "beneficiario" => 0, "a_cerrada" => 0, "a_abierta" => 0, "urgencia" => 0),
			"21-05-010" => array("code" => "21-05-010", "codeText" => "Yeso toracobraqueal", "total" => 0, "beneficiario" => 0, "a_cerrada" => 0, "a_abierta" => 0, "urgencia" => 0),
			"21-05-011" => array("code" => "21-05-011", "codeText" => "Corsets de milwaukee o similares (incluye la toma de molde)", "total" => 0, "beneficiario" => 0, "a_cerrada" => 0, "a_abierta" => 0, "urgencia" => 0),
			"21-05-012" => array("code" => "21-05-012", "codeText" => "Corsets de risser o similares", "total" => 0, "beneficiario" => 0, "a_cerrada" => 0, "a_abierta" => 0, "urgencia" => 0),
			"21-05-013" => array("code" => "21-05-013", "codeText" => "Corsets de yeso simple (tipo watson jones)", "total" => 0, "beneficiario" => 0, "a_cerrada" => 0, "a_abierta" => 0, "urgencia" => 0),
			"106002" 		=> array("code" => "106002",    "codeText" => "Curaciones simples ambulatorias", "total" => 0, "beneficiario" => 0, "a_cerrada" => 0, "a_abierta" => 0, "urgencia" => 0),
			"000000000" => array("code" => "000000000", "codeText" => "Retiro de yeso cerrado, valva abierta o mod. de yeso", "total" => 0, "beneficiario" => 0, "a_cerrada" => 0, "a_abierta" => 0, "urgencia" => 0),
			"111111111" => array("code" => "111111111", "codeText" => "Consultas Policlinico", "total" => 0),
		);
		$data  = $db->select("appointments", "*", ["status" => "done"]);
		$extra = $db->select("policlinic", "*");

		foreach($extra as $item){
			$itemDate = DateTime::createFromFormat("d/m/Y", $item["date"]);

			if($itemDate >= $startDate && $itemDate <= $endDate){
				$payLoad["111111111"]["total"] += $item["amount"];
			}
		}

		unset($item);
		// print_r($data);
		foreach($data as $item){
			$itemDate = DateTime::createFromFormat("d/m/Y", $item["date"]);
			if($itemDate >= $startDate && $itemDate <= $endDate){
				$payLoad[$item["process_code"]]["total"]++;

				switch($item["membership"]){
					case "Fonasa A":
					case "Fonasa B":
					case "Fonasa C":
					case "Fonasa D": {
						$payLoad[$item["process_code"]]["beneficiario"]++;
						break;
					}
				}

				switch($item["comes_from"]){
					case "UPC"          :
					case "Cirugia"      :
					case "Medicina"     :
					case "Pediatria"    :
					case "Pensionado"   :
					case "Ginecologia"  :
					case "Traumatologia":
						$payLoad[$item["process_code"]]["a_cerrada"]++;
						break;
        	case "Otro"						 :
        	case "Control"         :
					case "CAE Adulto"      :
          case "CAE Pediatrico"  :
        	case "Pabellon de Yeso":
        		$payLoad[$item["process_code"]]["a_abierta"]++;
        		break;
        	case "Unidad de Emergencia Hospitalaria" :
        		$payLoad[$item["process_code"]]["urgencia"]++;
        		break;
				}
			}
		}

		// print_r($payLoad);

		foreach($payLoad as $key => $value){
			array_push($toSend["data"], $value);
		}
		http_response_code(200); /* OK */
		echo json_encode($toSend, JSON_UNESCAPED_UNICODE);
	}
}
catch(PDOException $e){
	Header("X-Error-Message: ".$e->getMessage());
	http_response_code(500); /*Internal Server Error*/
}
catch(Exception $e){
	http_response_code($e->getMessage());
}
finally{
	exit();
}
?>