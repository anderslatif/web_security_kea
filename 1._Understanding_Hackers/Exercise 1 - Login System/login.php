<?php 

    if( isset($_POST["email"]) 
        && isset($_POST["password"]) 
        && strlen($_POST["password"]) >= 8 
        && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {

    $email = $_POST["email"];
    $password = $_POST["password"];

        try{
            require_once './database.php';

            $query = $connection->prepare('SELECT * FROM users WHERE email = :email AND password = :password');

            $query->bindValue(':email', $email);
            $query->bindValue(':password', $password);
            $query->execute();

            $users = $query->fetchAll();

            $log = $connection->prepare('INSERT INTO login_attempts(user_email, timestamp, success) VALUES(:email, DATETIME("now"), :success)');

            $log->bindValue(':email', $email);
            $log->bindValue(':success', count($users));
            $log->execute();

        } catch( PDOException $e) {
              echo '{"status":"err","message":"cannot connect to database"}';
              exit();  
        }
    }


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form method="POST" action="login.php" >
        <input type="text" placeholder="Email" name="email">
        <input type="password" placeholder="Password" name="password">
        <input type="submit" value="Submit">
    </form>
</body>
</html>
