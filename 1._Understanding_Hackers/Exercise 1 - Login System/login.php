<?php 
    
    $email = $_POST["email"];
    $password = $_POST["password"];

    if( isset($email) 
        && isset($password) 
        && strlen($password) >= 8 
        && filter_var($email, FILTER_VALIDATE_EMAIL)) {

        try{
            require_once './database.php';

            $query = $connection->prepare('SELECT * FROM users WHERE email = :email AND password = :password');

            $query->bindValue(':email', $email);
            $query->bindValue(':password', $password);
            $query->execute();

            $users = $query->fetchAll();

            $log = $connection->prepare('INSERT INTO login_attempts(user_email, timestamp, success) VALUES(:email, now, :success)');

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
    
</body>
</html>
