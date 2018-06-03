<?php
/*DO NOT MODIFY THIS FILE BECAUSE IS POPULATED AUTOMATICALLY WITH GRUNT */

define('envSHA', '6430836d4bf4d8dd6e45c003c718a2ac40a44050');
define('envShortSHA', '6430836');
define('envAuthor', '"MrXploder"');
define('envLastCommitTime', '"2018-06-03 02:24:49 -0400"');
define('envBranch', 'master');

/************************************************************************/

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