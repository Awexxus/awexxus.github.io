<?php
/**
 * Created by PhpStorm.
 * User: Victoria
 * Date: 07.09.2018
 * Time: 17:58
 */

namespace app\models;


use yii\base\Model;

class Block extends Model
{
    public function block($id){
    $holiday = Holiday::find()->where(['id' => $id])->one();
    if($holiday->block == 1){
    $holiday->block = 0;
    }
    else{
        $holiday->block = 1;
    }
    $holiday->save();
    }

}