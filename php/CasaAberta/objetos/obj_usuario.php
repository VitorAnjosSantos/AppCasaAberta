<?php
    header('Access-Control-Allow-Origin: *');
    //header("Access-Control-Allow-Headers: Content-Type");
    //header('Content-Type: application/json');

    require_once("./obj_conexao_bd.php");

    $conexao = AbreConexaoBD();

    // receber os parâmetros via POST
    $email = $_POST["email"];
    $senha = md5($_POST["senha"]);

    $sql = "SELECT id, nome FROM tb_usuario
             WHERE email = '$email'
               AND senha = '$senha'";
    
    $resultado = mysqli_query($conexao, $sql);

    if (mysqli_num_rows($resultado) > 0) {
        $usuario = mysqli_fetch_assoc($resultado);
        echo '{ "sucesso": true, "usuario": { "id": '.$usuario["id"].', "nome": "'.$usuario["nome"].'" } }';
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