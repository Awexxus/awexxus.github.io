<?php
/**
 * Created by PhpStorm.
 * User: Victoria
 * Date: 08.09.2018
 * Time: 11:41
 */

namespace app\models;


use yii\base\Model;

class Delete extends Model
{
    public function delete($id){
        $holiday = Holiday::find()->where(['id'=>$id])->one();
        $holiday->delete();
    }

}