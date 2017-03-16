<!doctype html>
<!--MainApp binds to the MainApp angular module in js/Main.js-->
<!--This serves as the root of our application structure-->
<html ng-app="MainApp">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Project CRUD</title>

    <base href="/">
    <link rel="stylesheet" href="assets/css/normalize.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <link rel="stylesheet" href="assets/css/eggly.css">
    <link rel="stylesheet" href="assets/css/animations.css">
<!--    <link rel="stylesheet" href="assets/css/app.css">-->
</head>
<body>
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-3 col-md-2 sidebar" ui-view="nav">
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" ui-view="content"></div>
    </div>
</div>

<!--the order and version of these external libraries matters!-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.13.1/lodash.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.js"></script>
<script src="vendor/angular-ui-router.min.js"></script>

<!--We can include all of our angular modules into our main view-->
<script src="js/MainApp.js"></script>
<script src="js/nav/nav.js"></script>

<script src="js/common/models/accidents-model.js"></script>
<script src="js/common/models/claims-model.js"></script>
<script src="js/common/models/countries-model.js"></script>
<script src="js/common/models/employees-model.js"></script>
<script src="js/common/models/usstates-model.js"></script>

<script src="js/employees/employees.js"></script>
<script src="js/employees/edit/employee-edit.js"></script>
<script src="js/employees/create/employee-create.js"></script>

<script src="js/accidents/accidents.js"></script>
<script src="js/accidents/edit/accident-edit.js"></script>
<script src="js/accidents/create/accident-create.js"></script>

<script src="js/claims/claims.js"></script>
<script src="js/claims/edit/claim-edit.js"></script>
<script src="js/claims/create/claim-create.js"></script>

</body>
</html>