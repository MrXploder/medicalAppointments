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

if(isset($_SERVER["HTTP_X_HTTP_METHOD_OVERRIDE"])){
	$_SERVER["REQUEST_METHOD"] = $_SERVER["HTTP_X_HTTP_METHOD_OVERRIDE"];
}
//METHODS///////////////////////////////////////////////////////
try{
	if($_SERVER['REQUEST_METHOD'] === 'GET'){
		$id = sanitizeInput($_GET["id"]);
		if(empty($id)){
			$payLoad = $db->select("patients", "*");
		}
		else if(!empty($id)){
			$payLoad = $db->select("patients", "*", array("patients.id" => $id, "LIMIT" => 1))[0];
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
			$insertQuery = $db->insert("patients", $request);
			if($insertQuery->rowCount() > 0){
				http_response_code(201); /* Created */
				exit();
			}
			else{
				http_response_code(500); /*Internal Server Error*/
				exit();
			}
		}
	}
	else if($_SERVER["REQUEST_METHOD"] === 'PUT'){
		$putdata = file_get_contents("php://input");
		if(!empty($putdata)){
			$request = json_decode($putdata, true);
			$updateQuery = $db->update("patients", $request, [
				"patients.id" => $request["id"]
			]);

			if($updateQuery->rowCount() > 0){
				http_response_code(202); /* Accepted */
				exit();
			}
			else{
				http_response_code(500); /*Internal Server Error*/
				exit();
			}
		}
	}
	else if($_SERVER["REQUEST_METHOD"] === 'DELETE'){
		if(!empty($_GET["id"])){
			$id = $_GET["id"];
			$deleteQuery = $db->delete("patients", ["id" => $id]);
			if($deleteQuery->rowCount() > 0){
				http_response_code(200);
				exit();
			}
			else{
				http_response_code(404);
				exit();
			}
		}
		else{
			http_response_code(404);
			exit();
		}
	}
}
catch(PDOException $e){
	Header("X-Error-Message: ".$e->getMessage());
	http_response_code(500); /*Internal Server Error*/
	exit();
}
?> 