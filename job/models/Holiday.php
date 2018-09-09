<?php
/**
 * Created by PhpStorm.
 * User: Victoria
 * Date: 07.09.2018
 * Time: 11:38
 */

namespace app\models;


use yii\db\ActiveRecord;

class Holiday extends ActiveRecord
{
    static public function tableName(){
        return 'holiday';
    }

    public function getUser(){
        return $this->hasOne(User::className(),['id_parent', 'id']);
    }
}