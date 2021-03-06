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
		$id = sanitizeInput($_GET["id"]);
		if(empty($id)){
			$payLoad = $db->query("SELECT `appointments`.*, `patients`.`full_name` AS patient_name, `doctors`.`full_name` AS doctor_name FROM `appointments` INNER JOIN `patients` ON `appointments`.`patient_id` = `patients`.`id` INNER JOIN `doctors` ON `appointments`.`doctor_id` = `doctors`.`id`")->fetchAll(PDO::FETCH_ASSOC);
		}
		else if(!empty($id)){
			$payLoad = $db->query("SELECT `appointments`.*, `patients`.`full_name` AS patient_name, `doctors`.`full_name` AS doctor_name FROM `appointments` INNER JOIN `patients` ON `appointments`.`patient_id` = `patients`.`id` INNER JOIN `doctors` ON `appointments`.`doctor_id` = `doctors`.`id` WHERE `appointment`.`id` = $id")->fetchAll(PDO::FETCH_ASSOC)[0];	
		}
		else{
			throw new Exception(400);
		}

		if(!empty($payLoad)){
			http_response_code(200); /* OK */ 
			echo json_encode($payLoad, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK);
			exit();
		}
		else{
			throw new Exception(400);
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
				throw new Exception(500);
			}
		}
		else{
			throw new Exception(400);
		}
	}
	else if($_SERVER["REQUEST_METHOD"] === "PUT"){
		$putdata = file_get_contents("php://input");
		if(!empty($putdata)){
			$request = json_decode($putdata, true);
			$updateQuery = $db->update("appointments", [
				"comes_from" 				=> $request["comes_from"],
				"date"			 				=> $request["date"],
				"doctor_id"  				=> $request["doctor_id"],
				"notes"      				=> $request["notes"],
				"patient_id" 				=> $request["patient_id"],
				"procedure_perform" => $request["procedure_perform"],
				"reason"						=> $request["reason"],
				"status"						=> $request["status"],
				"time"							=> $request["time"],
			],[
				"appointments.id" => $request["id"]
			]);

			if($updateQuery->rowCount() > 0){
				$id = $request["id"];
				$payLoad = $db->query("SELECT `appointments`.*, `patients`.`full_name` AS patient_name, `doctors`.`full_name` AS doctor_name FROM `appointments` INNER JOIN `patients` ON `appointments`.`patient_id` = `patients`.`id` INNER JOIN `doctors` ON `appointments`.`doctor_id` = `doctors`.`id` WHERE `appointments`.`id` = $id")->fetchAll(PDO::FETCH_ASSOC)[0];	
				http_response_code(202); /* Accepted */
				echo json_encode($payLoad, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK);
				exit();
			}
			else{
				throw new Exception(500);
			}
		}
		else{
			throw new Exception(400);
		}
	}
	else if($_SERVER["REQUEST_METHOD"] === "DELETE"){
		if(!empty($_GET["id"])){
			$id = $_GET["id"];
			$deleteQuery = $db->delete("appointments", ["id" => $id]);
			if($deleteQuery->rowCount() > 0){
				http_response_code(200);
				exit();
			}
			else{
				throw new Exception(404);
			}
		}
		else{
			throw new Exception(404);
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