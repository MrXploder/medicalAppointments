<?php
/*DO NOT MODIFY THIS FILE BECAUSE IS POPULATED AUTOMATICALLY WITH GRUNT */

define('envSHA', '414f9d46845234218446bdbe7956dff7ad96299d');
define('envShortSHA', '414f9d4');
define('envAuthor', '"Luis"');
define('envLastCommitTime', '"2019-09-23 02:31:24 -0300"');
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