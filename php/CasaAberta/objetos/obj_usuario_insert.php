<?php
    header('Access-Control-Allow-Origin: *');
    //header("Access-Control-Allow-Headers: Content-Type");
    //header('Content-Type: application/json');

    require_once("./obj_conexao_bd.php");

    $conexao = AbreConexaoBD();

    // receber os parâmetros via POST
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $senha = md5($_POST["senha"]);

    $sql = "INSERT INTO tb_usuario (nome, email, senha) VALUES ('$nome', '$email', '$senha')";
    
    if (mysqli_query($conexao, $sql)) {
        $id = mysqli_insert_id($conexao);
        echo '{ "sucesso": true, "usuario": { "id": '.$id.', "nome": "'.$nome.'", "email": "'.$email.'" } }';
    } else {
        echo '{ "sucesso": false, "usuario": "" }';
    }

    /*
        {
            "sucesso": true,
            "dados": {
                "id": 10,
                "nome: "Usuario CasaAberta"
            }
        }
    */
?>