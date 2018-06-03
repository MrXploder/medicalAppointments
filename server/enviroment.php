<?php
/*DO NOT MODIFY THIS FILE BECAUSE IS POPULATED AUTOMATICALLY WITH GRUNT */

define('envSHA', '0955fd7daa3a8e30a817a5edd975c44b11e059d6');
define('envShortSHA', '0955fd7');
define('envAuthor', '"MrXploder"');
define('envLastCommitTime', '"2018-06-02 20:39:27 -0400"');
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