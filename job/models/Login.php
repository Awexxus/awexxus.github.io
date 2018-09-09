<?php
/**
 * Created by PhpStorm.
 * User: Victoria
 * Date: 06.09.2018
 * Time: 18:17
 */

namespace app\models;


use yii\base\Model;

class Login extends Model
{
    public $email;
    public $password;

    public function rules()
    {
        return [
            [['email', 'password'], 'required'],
            ['email', 'email'],
            ['password', 'validatePassword']
        ];
    }
    //валидация из бд
    public function validatePassword($attribute, $params){
        $user = $this->getEmail();//ищем пользователя в бд
        if(!$user || ($user->password!= sha1($this->password))){ //проверяем пароли
            //если error
            $this->addError($attribute, 'Email или пароль введены неверно');
        }
    }

    public function getEmail(){
        return User::findOne(['email'=>$this->email]);
    }
}