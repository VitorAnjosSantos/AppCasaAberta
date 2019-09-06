<?php
    header('Access-Control-Allow-Origin: *');
    //header("Access-Control-Allow-Headers: Content-Type");
    //header('Content-Type: application/json');

    require_once("./obj_conexao_bd.php");

    $conexao = AbreConexaoBD();

    $sql = "SELECT nome, descricao FROM tb_evento";
    
    $resultado = mysqli_query($conexao, $sql);

    //echo "[";

    $eventos = [];

    while($linha = mysqli_fetch_assoc($resultado)) {
        $evento = json_decode('{ "nome": "' . $linha["nome"] . '", "descricao": "' . $linha["descricao"] . '"}');
        array_push($eventos, $evento);
        //echo '{ "nome": "' . $linha["nome"] . '", "descricao": "' . $linha["descricao"] . '"},';
    }

    //echo "]";

    echo json_encode($eventos);

    mysqli_close($conexao);

    /*
        [
            { nome: "Git", descricao: "Git Hub no mercado" },
            { nome: "Git 2", descricao: "Git Hub no mercado 2" },
            { nome: "Git 3", descricao: "Git Hub no mercado 3" }
        ]
    */
?>