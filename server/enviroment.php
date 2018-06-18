<?php
/*DO NOT MODIFY THIS FILE BECAUSE IS POPULATED AUTOMATICALLY WITH GRUNT */

define('envSHA', 'a4e9d8890a67dcf2294b1c188dc6515ba2046a35');
define('envShortSHA', 'a4e9d88');
define('envAuthor', '"MrXploder"');
define('envLastCommitTime', '"2018-06-17 16:52:09 -0400"');
define('envBranch', 'development');

define('hashPrefix', 'elvisIsNotDead');

date_default_timezone_set("America/Santiago");

require $_SERVER['DOCUMENT_ROOT'].'/server/dependencies/Medoo.php';
use Medoo\Medoo;
$db = new Medoo(array(
	'database_type' => 'sqlite',
	'database_file' => $_SERVER['DOCUMENT_ROOT'].'/medicalapointments.db',
	'option'        => array(\PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION)
));

?>