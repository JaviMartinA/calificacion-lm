<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style/style.css">
    <script src="scripts/scripttodo.js"></script>
    <script src="scripts/scriptalumno.js"></script>
    <script src="scripts/creditos.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web notas alumnos</title>
</head>
<body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    <h1 class="text-center">Notas alumnos de DAM 1</h1>
    <form class="form-inline">
        <input type="button" value="Mostrar alumnos" onclick="llamar1()" class="btn btn-primary me-md-2">
        <label class="my-1 mr-2" for="inlineFormCustomSelectPref"></label>
        <select id="select" class="custom-select mr-sm-2" id="inlineFormCustomSelectPref" >
            <option label="Javier Martín Arroyo">0</option>
            <option label="Iván González Gordo">1</option>
            <option label="Javier Sánchez Carrizo">2</option>
            <option label="Javier Gutiérrez Gutiérrez">3</option>
            <option label="Sergio Camino Saiz">4</option>
            <option label="Carlos Ruiz Castillo">5</option>
            <option label="Carmelo Escribano">6</option>
            <option label="Kiko Rivera">7</option>
            <input type="button" value="Mostrar alumno seleccionado" onclick="llamar2()" class="btn btn-primary me-md-2">
        </select>
    </form>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Programación</th>
                <th>Sistemas Informáticos</th>
                <th>Base de Datos</th>
                <th>Lenguaje de Marcas</th>
                <th>FOL</th>
                <th>Entornos de Desarrollo</th>
                <th>Nota media</th>
            </tr>
        </thead>
        <tbody id="body"></tbody>
    </table>
    <div id="boton"></div>  
</body>
</html>