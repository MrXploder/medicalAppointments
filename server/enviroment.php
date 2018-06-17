<?php
/*DO NOT MODIFY THIS FILE BECAUSE IS POPULATED AUTOMATICALLY WITH GRUNT */

define('envSHA', '68e05c47eca387a1be061570d0b8d11fe329dee9');
define('envShortSHA', '68e05c4');
define('envAuthor', '"MrXploder"');
define('envLastCommitTime', '"2018-06-16 06:30:25 -0400"');
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