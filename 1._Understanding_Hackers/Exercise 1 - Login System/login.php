<?php 
print "0";

if( isset($_POST["email"]) 
&& isset($_POST["password"]) 
&& strlen($_POST["password"]) >= 8 
&& filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    print "1";
    
    $email = $_POST["email"];
    $password = $_POST["password"];
    
    try{
        require_once './database.php';
        print "2";
        
        $query = $connection->prepare('SELECT * FROM users WHERE email = :email AND password = :password');
        
        $query->bindValue(':email', $email);
        $query->bindValue(':password', $password);
        $query->execute();
        print "4";

            $users = $query->fetchAll();

            $log = $connection->prepare('INSERT INTO login_attempts(user_email, timestamp, success) VALUES(:email, DATETIME("now"), :success)');

            $log->bindValue(':email', $email);
            echo count($users);
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
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="base__division">
    <div class="main__division">
        <div class="main__division--forms">
            <form method="POST" action="login.php" class="form__login">
                <input type="text" placeholder="Email" name="email" class="email">
                <input type="password" placeholder="Password" name="password" class="password">
                <input type="submit" value="Submit">
            </form>
        </div>
        <div class="main__division--datas">
            <div class="datas__wrapper">
                <h2>Login</h2>
                <p>Web Security - Exercise</p>
            </div>
        </div>
    </div>
    </div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="./script.js"></script>
</body>
</html>
