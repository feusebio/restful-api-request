<?php
/**
 * Definir Directorias
 */
$RootDir       = '';
$LibsDir       = $RootDir.'Libs';
/**
 * Carregar Bibliotecas
 */
//require_once $LibsDir.'/Underscore.php';    //Tratamento de Arrays e Objectos [OPCIONAL]
require_once 'httpful_autoload.php';        //Pedidos API REST [NECESSARIA]
require_once $LibsDir.'/ServerAPI.php'; //

/**
 * Instanciar Classe Principal para ligação à API CUSTO JUSTO
 */
$service = new CustojustoAPI();

$url      = '/'.$_POST['url'];
$objecto  = $_POST['url'];
$action   = $_POST['action'];

/**
 * Evocar funçoes específicas de operação
 */
switch ($action){
    case 'get-dados'   :
        $resposta = $service->getURL($url,$objecto);
        break;
    case 'add-anuncio' : //$url      = '/entries/12495697';
        $anuncio  = $_POST['objecto_anuncio'];
        $resposta = $service->addURL($url,'POST',$anuncio);
        break;
    case 'alterar-anuncio' :
        $url      = '/'.$_POST['url'];
        $resposta = $service->addURL($url,'POST',$anuncio);
        break;
    case 'ver-anuncio' :
        $url      = '/'.$_POST['url'];
        $resposta = $service->getURL($url,$objecto='nada');
        break;
    case 'eliminar-anuncio' :
        $url      = '/'.$_POST['url'];
        $resposta = $service->delURL($url);
        break;
    case 'adicionar-imagem' :
        $url      = '/'.$_POST['url'];
        $files     = array('file' => 'img/carro.jpg');
        $resposta = $service->postMimeURL($url,$files);
        break;
    default :
        $resposta = $service->getURL($url,$objecto);
        break;
}

/**
 * Devolver dados em JSON
 */
var_dump($resposta);
//echo get_object_vars($resposta['dados']);
echo json_encode($resposta->message);
