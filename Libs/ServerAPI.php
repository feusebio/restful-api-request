<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of CustojustoAPI
 *
 * @author Filipe Eusébio
 */
class CustojustoAPI {
    
   private $URL, $Resposta, $objSaida, $Data;
   private static $BaseUrl, $Token, $HeaderAuth;

   function __construct(){
       self::_initParams();
   }
   
   static private function _initParams(){
       self::$BaseUrl    = "https://apidev.custojusto.pt/v0";
       self::$Token      = 'K9qxONFmQJXXgx1vIyjc';
       self::$HeaderAuth = 'Token token='.self::$Token;
   }
   /**
    * 
    * @return Array
    */
   private function getGeneric(){
       $response = \Httpful\Request::get(self::$BaseUrl.$this->URL)
        ->expectsJson()
        ->withXTrivialHeader('DEV')
        ->addHeader('Authorization', self::$HeaderAuth)
        ->send();
        return $response->body;
   }

   private function postGeneric(){
       $response = \Httpful\Request::post(self::$BaseUrl.$this->URL) 
        ->uri(self::$BaseUrl.$this->URL)
        ->sendsJson()                           
        ->addHeader('Authorization', self::$HeaderAuth)
        ->body($this->Data)             
        ->send();
        return $response->body;
   }
   private function putGeneric(){
       $response = \Httpful\Request::put(self::$BaseUrl.$this->URL) 
        ->uri(self::$BaseUrl.$this->URL)
        ->sendsJson()                           
        ->addHeader('Authorization', self::$HeaderAuth)
        ->body($this->Data)             
        ->send();
        return $response;
   }
   private function deleteGeneric(){
       $response = \Httpful\Request::delete(self::$BaseUrl.$this->URL) 
        ->uri(self::$BaseUrl.$this->URL)
        ->addHeader('Authorization', self::$HeaderAuth)
        ->send();
        return $response->body;
   }
   private function postMime($file){
       $response = \Httpful\Request::post(self::$BaseUrl.$this->URL) 
        ->uri(self::$BaseUrl.$this->URL)
        ->addHeader('Authorization', self::$HeaderAuth)
        ->sendsType(Httpful\Mime::FORM)
        ->attach($file)
        ->send();
        return $response->body;
   }
   
   /**
    * Obter dados por GET, especificar URL parcial e o nome de saída do objecto
    * @param string $url URL parcial Ex: /regions
    * @param string $objecto Nome do conteudo Ex: regions
    * @return array
    */
   public function getURL($url,$objecto) {
       $this->URL      = $url;
       $resposta = $this->getGeneric();
       return $resposta;
   }
   /**
    * Adicionar ou alterar dados
    * @param string $url
    * @param string $method Usado para POST ou PUT
    * @param json/array $data
    * @return array
    */
   // TODO: FALTA o UPDATE
   public function addURL($url,$method = 'POST',$data){
       $this->Data = $data;
       $this->URL      = $url;
       $resposta = $this->postGeneric();
       return $resposta;
   }
   
   public function updateURL($url,$method = 'PUT',$data){
       $this->Data = $data;
       $this->URL      = $url;
       $resposta = $this->putGeneric();
       return $resposta;
   }
   
   /**
    * Eliminar entradas, fornecer Prefixo URL
    * @param string $url Prefixo URL
    * @return array/objecto
    */
   public function delURL($url){
       $this->URL      = $url;
       $resposta = $this->deleteGeneric();
       return $resposta;
   }
   public function postMimeURL($url,$file){
       $this->URL      = $url;
       $resposta = $this->postMime($file);
       return $resposta;
   }
}
