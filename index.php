<?php require $_SERVER['DOCUMENT_ROOT'].'/server/enviroment.php'; ?>
<!DOCTYPE html>
<html ng-app="angularApp" ng-controller="mainController as mc" ng-strict-di>
<head>
  <title>Citas Medicas</title>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <?php
  if(constant("envBranch") == "development"){
    $globsJS = ["{/src/vendor/*.js}", "{/src/module/medd/*.js}", "{/src/directive/**/*.js}", "{/src/filter/**/*.js}", "{/src/factory/**/*.js}", "{/src/module/medd/route/**/*.js}", "{/src/module/medd/modal/**/*.js}"];

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
  <!--<script src='https://www.google.com/recaptcha/api.js'></script>-->
</head>
<body>
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
            <input type="text" id="loginUserName" ng-model="mc.form.name" placeholder=" " required>
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
            <a class="btn waves-effect waves-light blue" ng-click="mc.logIn()" ng-disabled="!lg.$valid">LogIn</a>
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
      <li><a href="#!/newAppointment" class="white-text"><i class="fas fa-notes-medical fa-2x white-text"></i>Nuevo Turno</a></li>
      <li><a href="#!/manageCensus" class="white-text"><i class="fas fa-calendar-alt fa-2x white-text"></i>Censos</a></li>
      <li><div class="divider"></div></li>
      <li><a href="#!/manageMedics" class="white-text"><i class="fas fa-user-md fa-2x white-text"></i>Administrar Medicos</a></li>
      <li><a href="#!/managePatients" class="white-text"><i class="fas fa-user fa-2x white-text"></i>Administrar Pacientes</a></li>
      <li><div class="divider"></div></li>
      <li><a href="#!/exit" class="white-text"><i class="fas fa-sign-out-alt fa-2x white-text"></i>LogOut</a></li>
    </ul>
    <a class="btn-floating btn-large btn-flat waves-effect waves-light button-collapse hide-on-med-and-up" data-activates="apps-side-nav"><i class="fas fa-plus"></i></a>
    
  </header>
  <main>
    <div class="row">
      <div class="col l12 s12">
        <ng-include src="'/src/module/medd/include/loader/template.html'" ng-show="mc.isRouteLoading"></ng-include>
        <ng-view ng-show="!mc.isRouteLoading"></ng-view>
      </div>
    </div>
  </main>
  <footer class="footer grey darken-4" style="padding-top: 10px; padding-bottom: 10px;">
    <div class="container">
      <div class="footer-copyright right">
        <a class="grey-text text-lighten-4" href="mailto: l.arancibiaf@gmail.com">© <?php echo constant("envAuthor") ?> AngularJS Dev</a><br>
        <a class="grey-text text-lighten-4" href="#!/">Compilación: <?php echo constant("envShortSHA") ?></a><br>
        <a class="grey-text text-lighten-4" href="#!/">Modo: <?php echo constant("envBranch") ?></a><br>
        <a class="grey-text text-lighten-4" href="/phpliteadmin.php">PHPLiteAdmin</a>
      </div>
    </div>
  </footer>
</body>
</html>