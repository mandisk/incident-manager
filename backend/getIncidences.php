<?php 
 
$server = "db566323319.db.1and1.com";
$user = "dbo566323319";
$pass = "vorndran123456";
$bd = "db566323319";
 
//Creamos la conexión
$conexion = mysqli_connect($server, $user, $pass,$bd) 
or die("Ha sucedido un error inexperado en la conexion de la base de datos");
 
//generamos la consulta
$sql = "SELECT `in`.`idIncidence`, `in`.`name`, `in`.`description`, `in`.`idPriority`, `in`.`author`, `in`.`date`, `st`.`idStateName` FROM `Incidences` AS `in` INNER JOIN (SELECT `st1`.`idState`, `st1`.`idStateName` FROM `States` AS `st1` INNER JOIN (SELECT `idState`, MAX(`version`) AS `version` FROM `States` GROUP BY `idState`) AS `st2` WHERE `st1`.`idState` = `st2`.`idState` AND `st1`.`version`=`st2`.`version`) AS `st` WHERE `in`.`idState` = `st`.`idState` ORDER BY `in`.`idPriority` ";
mysqli_set_charset($conexion, "utf8"); //formato de datos utf8
 
if(!$result = mysqli_query($conexion, $sql)) die();
 
$incidences = array(); //creamos un array
 
while($row = mysqli_fetch_array($result)) 
{ 
    $idIncidence=$row['idIncidence'];
    $name=$row['name'];
    $description=$row['description'];
    $idPriority=$row['idPriority'];
    $author=$row['author'];
    $date=$row['date'];
    $idStateName=$row['idStateName'];
  
    $incidences[] = array('idIncidence'=> $idIncidence, 'name'=> $name, 'description'=> $description, 'idPriority'=>$idPriority, 'author'=>$author, 'date'=>$date,'idStateName'=>$idStateName);
 
}
    
//desconectamos la base de datos
$close = mysqli_close($conexion) 
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
  
 
//Creamos el JSON

$json_string = json_encode(array('incidences'=>$incidences));
echo $json_string;
 
//Si queremos crear un archivo json, sería de esta forma:
/*
$file = 'clientes.json';
file_put_contents($file, $json_string);
*/
    
 
?>