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

//METHODS///////////////////////////////////////////////////////
try{
	if($_SERVER['REQUEST_METHOD'] === 'GET'){
		$id = sanitizeInput($_GET["id"]);
		if(empty($id)){
			$payLoad = $db->query("SELECT `appointments`.*, `patients`.`full_name` AS patient_name, `doctors`.`full_name` AS doctor_name FROM `appointments` INNER JOIN `patients` ON `appointments`.`patient_id` = `patients`.`id` INNER JOIN `doctors` ON `appointments`.`doctor_id` = `doctors`.`id`")->fetchAll(PDO::FETCH_ASSOC);
		}
		else if(!empty($id)){
			$payLoad = $db->select("appointments", "*",[
				"appointments.id" => $id,
				"LIMIT" => 1,
			])[0];	
		}
		else{
			http_response_code(400); /* Bad Request */
			exit();
		}

		if(!empty($payLoad)){
			http_response_code(200); /* OK */ 
			echo json_encode($payLoad, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK);
			exit();
		}
		else{
			http_response_code(400); /* Bad Request */
			exit();
		}
	}
	else if($_SERVER["REQUEST_METHOD"] === 'POST'){
		$postdata = file_get_contents("php://input");
		if(!empty($postdata)){
			$request = json_decode($postdata, true);
			$insertQuery = $db->insert("appointments", array(
				"patient_id" => $request["patient_id"],
				"doctor_id"  => $request["doctor_id"],
				"comes_from" => $request["comes_from"],
				"reason"     => $request["reason"],
				"date"       => $request["date"],
				"time"			 => $request["time"],
			));
			if($insertQuery->rowCount() > 0){
				http_response_code(202); /* Created */
				exit();
			}
			else{
				http_response_code(500); /* Internal Server Error */
				exit();
			}
		}
		else{
			http_response_code(400); /* Bad Request */
		}
	}
}
catch(PDOException $e){
	Header("X-Error-Message: ".$e->getMessage());
	http_response_code(500); /*Internal Server Error*/
	exit();
}
?> 