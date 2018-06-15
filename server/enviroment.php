<?php
/*DO NOT MODIFY THIS FILE BECAUSE IS POPULATED AUTOMATICALLY WITH GRUNT */

define('envSHA', 'b1b72ed9bcb7e00dac3d12797c25c87cf265f427');
define('envShortSHA', 'b1b72ed');
define('envAuthor', '"MrXploder"');
define('envLastCommitTime', '"2018-06-13 16:50:05 -0400"');
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