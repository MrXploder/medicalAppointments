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
		$requestDate = DateTimeImmutable::createFromFormat('m/Y', sanitizeInput($_GET["date"]));
		$startDate   = $requestDate->modify("First day of this month")->format("d/m/Y");
		$endDate     = $requestDate->modify("Last day of this month")->format("d/m/Y");
		$codes 			 = array(
			"21-01-001" => array("total" => 0, "beneficiario" => 0, "a-cerrada" => 0, "a-abierta" => 0, "urgencia" => 0),
			"21-01-002" => array("total" => 0, "beneficiario" => 0, "a-cerrada" => 0, "a-abierta" => 0, "urgencia" => 0),
			"21-01-003" => array("total" => 0, "beneficiario" => 0, "a-cerrada" => 0, "a-abierta" => 0, "urgencia" => 0),
			"21-05-001" => array("total" => 0, "beneficiario" => 0, "a-cerrada" => 0, "a-abierta" => 0, "urgencia" => 0),
			"21-05-002" => array("total" => 0, "beneficiario" => 0, "a-cerrada" => 0, "a-abierta" => 0, "urgencia" => 0),
			"21-05-003" => array("total" => 0, "beneficiario" => 0, "a-cerrada" => 0, "a-abierta" => 0, "urgencia" => 0),
			"21-05-004" => array("total" => 0, "beneficiario" => 0, "a-cerrada" => 0, "a-abierta" => 0, "urgencia" => 0),
			"21-05-005" => array("total" => 0, "beneficiario" => 0, "a-cerrada" => 0, "a-abierta" => 0, "urgencia" => 0),
			"21-05-006" => array("total" => 0, "beneficiario" => 0, "a-cerrada" => 0, "a-abierta" => 0, "urgencia" => 0),
			"21-05-007" => array("total" => 0, "beneficiario" => 0, "a-cerrada" => 0, "a-abierta" => 0, "urgencia" => 0),
			"21-05-008" => array("total" => 0, "beneficiario" => 0, "a-cerrada" => 0, "a-abierta" => 0, "urgencia" => 0),
			"21-05-009" => array("total" => 0, "beneficiario" => 0, "a-cerrada" => 0, "a-abierta" => 0, "urgencia" => 0),
			"21-05-010" => array("total" => 0, "beneficiario" => 0, "a-cerrada" => 0, "a-abierta" => 0, "urgencia" => 0),
			"21-05-011" => array("total" => 0, "beneficiario" => 0, "a-cerrada" => 0, "a-abierta" => 0, "urgencia" => 0),
			"21-05-012" => array("total" => 0, "beneficiario" => 0, "a-cerrada" => 0, "a-abierta" => 0, "urgencia" => 0),
			"21-05-013" => array("total" => 0, "beneficiario" => 0, "a-cerrada" => 0, "a-abierta" => 0, "urgencia" => 0),
			"106002" 		=> array("total" => 0, "beneficiario" => 0, "a-cerrada" => 0, "a-abierta" => 0, "urgencia" => 0),
		);
		$data = $db->select("appointments", "*", ["status" => "done"]);
		print_r($data);
		foreach($data as $item){
			echo $item["diagnosis_code"];
		}
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