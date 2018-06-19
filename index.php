<?php require $_SERVER['DOCUMENT_ROOT'].'/server/enviroment.php'; ?>
<?php
  /*backup sqlite db at startup*/
  if(constant("envBranch") != "development") copy((string)$_SERVER['DOCUMENT_ROOT']."/medicalapointments.db", (string)$_SERVER['DOCUMENT_ROOT']."/databasebackup/bk".date("d-m-Y H-i-s").".db");
?>
<!DOCTYPE html>
<html ng-app="angularApp" ng-controller="mainController as mc" ng-strict-di>
<head>
  <title>MeddApp</title>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <?php
  if(constant("envBranch") == "development"){
    $globsJS = ["{/src/vendor/*.js}", "{/src/module/*.js}", "{/src/directive/**/*.js}", "{/src/filter/**/*.js}", "{/src/factory/**/*.js}", "{/src/module/route/**/*.js}", "{/src/module/modal/**/*.js}"];

    $files = glob("{/css/*.css}",GLOB_BRACE);
    for($i = 0; $i < count($files); $i++){
      echo '<link rel="stylesheet" href="..'.$files[$i].'?v='.constant("envSHA").'">', PHP_EOL;
    }
    unset($i);

    foreach($globsJS as $glob){
      $files = glob($glob,GLOB_BRACE);
      for($i = 0; $i < count($files); $i++){
        echo '<script src="..'.$files[$i].'?v='.constant("envSHA").'"></script>', PHP_EOL;
      }
      unset($i);
    }
  }
  else if(constant("envBranch") == "master"){
    echo '<link rel="stylesheet" href="../dist/'.constant('envSHA').'.min.css">', PHP_EOL;
    echo '<script src="../dist/'.constant('envSHA').'.min.obs.js"></script>', PHP_EOL;
  }
  ?>
</head>
<body ondragstart="return false;" ondrop="return false;">
  <header>
    <ul id="login-side-nav" class="side-nav fixed">
      <li>
        <div class="user-view grey darken-3">
          <a><img class="circle" src="img/avatardefault.png"></a>
          <br>
        </div>
      </li>
      <ng-form name="lg">
        <li>
          <div input-field class="container row">
            <i class="fas fa-user-tie prefix"></i>
            <label class="active">Nombre de Usuario</label>
            <input type="text" id="loginUserName" ng-model="mc.form.nick_name" placeholder=" " required>
          </div>
        </li>
        <li>
          <div input-field class="container row">
            <i class="fas fa-key prefix"></i>
            <label >Contraseña</label>
            <input type="password" id="loginUserPass" ng-model="mc.form.pass" autocomplete="new-password" placeholder=" " required>
          </div>
        </li>
        <li>
          <div class="container">
            <a class="btn btn-block waves-effect waves-light blue" ng-click="mc.logIn()" ng-disabled="!lg.$valid">LogIn</a>
          </div>
        </li>
      </ng-form>
    </ul>
    <ul id="apps-side-nav" class="side-nav fixed grey darken-4">
      <li>
        <div class="user-view">
          <div class="background">
            <img src="img/sidenav-background.jpg">
          </div>
          <a><img class="circle center" ng-src="img/avatar{{$storage.currentUser.id}}.png"></a>
          <br>
        </div>
      </li>
      <!-- <li ng-class="$location.url() == '/newAppointment' && 'grey'"><a href="#!/newAppointment" ng-class="$location.url() == '/newAppointment' ? 'black-text':'white-text'"><i class="fas fa-notes-medical fa-2x" ng-class="$location.url() == '/newAppointment' ? 'black-text':'white-text'"></i>Nuevo Turno</a></li> -->
      <li ng-class="$location.url() == '/patientControlList' && 'grey'"><a href="#!/patientControlList" ng-class="$location.url() == '/patientControlList' ? 'black-text':'white-text'"><i class="fas fa-clipboard-list fa-2x" ng-class="$location.url() == '/patientControlList' ? 'black-text':'white-text'"></i>Usuarios en Control</a></li>
      <li ng-class="$location.url() == '/dailyStatistics' && 'grey'"><a href="#!/dailyStatistics" ng-class="$location.url() == '/dailyStatistics' ? 'black-text':'white-text'"><i class="fas fa-calendar-alt fa-2x" ng-class="$location.url() == '/dailyStatistics' ? 'black-text':'white-text'"></i>Estadística Diaria</a></li>
      <li ng-class="$location.url() == '/monthlyReport' && 'grey'"><a href="#!/monthlyReport" ng-class="$location.url() == '/monthlyReport' ? 'black-text':'white-text'"><i class="fas fa-bug fa-2x" ng-class="$location.url() == '/monthlyReport' ? 'black-text':'white-text'"></i>Estadística Mensual</a></li>
      <li><div class="divider"></div></li>
      <li ng-class="$location.url() == '/manageDoctors' && 'grey'"><a href="#!/manageDoctors" ng-class="$location.url() == '/manageDoctors' ? 'black-text':'white-text'"><i class="fas fa-user-md fa-2x" ng-class="$location.url() == '/manageDoctors' ? 'black-text':'white-text'"></i>Administrar Medicos</a></li>
      <li ng-class="$location.url() == '/managePatients' && 'grey'"><a href="#!/managePatients" ng-class="$location.url() == '/managePatients' ? 'black-text':'white-text'"><i class="fas fa-user fa-2x" ng-class="$location.url() == '/managePatients' ? 'black-text':'white-text'"></i>Administrar Usuarios</a></li>
      <li ng-class="$location.url() == '/manageOperators' && 'grey'"><a href="#!/manageOperators" ng-class="$location.url() == '/manageOperators' ? 'black-text':'white-text'"><i class="fas fa-user-tie fa-2x" ng-class="$location.url() == '/manageOperators' ? 'black-text':'white-text'"></i>Administrar Operadores</a></li>
      <li><div class="divider"></div></li>
      <li><a href="#!/exit" class="white-text"><i class="fas fa-sign-out-alt fa-2x white-text"></i>LogOut</a></li>
    </ul>
    <a class="btn-floating btn-large btn-flat waves-effect waves-light button-collapse hide-on-med-and-up" data-activates="apps-side-nav"><i class="fas fa-plus"></i></a>
    
  </header>
  <main>
    <div class="row">
      <div class="col l12 s12">
        <ng-include src="'/src/module/include/loader/template.html'" ng-show="mc.isRouteLoading"></ng-include>
        <ng-view ng-show="!mc.isRouteLoading"></ng-view>
      </div>
    </div>
  </main>
  <footer class="footer grey darken-4" style="padding-top: 10px; padding-bottom: 10px;">
    <div class="container">
      <div class="footer-copyright left">
        <a class="grey-text text-lighten-4" href="mailto: l.arancibiaf@gmail.com">© <?php echo constant("envAuthor") ?></a><br>
        <a class="grey-text text-lighten-4" href="/phpliteadmin.php">PHPLiteAdmin</a>
      </div>
      <div class="footer-copyright right">
        <a class="grey-text text-lighten-4" href="#!/">BuildNo: <?php echo constant("envShortSHA") ?></a><br>
        <a class="grey-text text-lighten-4" href="#!/">PoweredBy: AngularJS 1.6.X</a>
      </div>
    </div>
  </footer>
</body>
</html>