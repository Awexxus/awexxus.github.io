<?php
/**
 * Created by PhpStorm.
 * User: Victoria
 * Date: 06.09.2018
 * Time: 15:19
 */

namespace app\models;

use yii\base\Model;

class Register extends Model
{
    public $email;
    public $username;
    public $lastname;
    public $password;

    //правила валидации
    public function rules()
    {
        return [
            [['email', 'password', 'username', 'lastname'], 'required'],
            ['email', 'email'],
            ['email', 'unique', 'targetClass' => 'app\models\User'],
            ['password', 'string', 'min'=>2, 'max'=>15]
        ];
    }

    //запись нового пользователя
    public function register(){
        $user = new User();
        $user->email = $this->email;
        $user->username = $this->username;
        $user->lastname = $this->lastname;
        $user->password = sha1($this->password);
        return $user->save();
    }

}