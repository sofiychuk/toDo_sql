<?php
if(isset($_POST['id']))
{
    $task = $_POST['id'];
    $db = mysqli_connect("localhost", "root", "", "todolist") or die("Не могу соединиться с MySQL.");
    $query = "INSERT INTO `tasks`(`id`, `task`) VALUES(NULL, '$task')";
    mysqli_query($db, $query);

} else {
    $task = 0;
}

/*$query ="SELECT task FROM tasks";
 
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
if($result)
{
    echo "<ul>";
    while ($row = mysqli_fetch_row($result)) {
        echo "<li>$row[0]</li>";
    }
    echo "</ul>";
     
    mysqli_free_result($result);
}
*/
?>
