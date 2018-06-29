<?php
/*DO NOT MODIFY THIS FILE BECAUSE IS POPULATED AUTOMATICALLY WITH GRUNT */

define('envSHA', '1a942b6f73a25112f9e7b4bde6f904b34ea46f87');
define('envShortSHA', '1a942b6');
define('envAuthor', '"MrXploder"');
define('envLastCommitTime', '"2018-06-28 05:39:08 -0400"');
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