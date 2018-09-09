<?php
/**
 * Created by PhpStorm.
 * User: Victoria
 * Date: 07.09.2018
 * Time: 17:05
 */

namespace app\models;


use yii\models\addsHoliday;

class Edit extends addHoliday
{
    public $id;
    public $time_in;
    public $time_out;

    public function rules()
    {
        return [
            [['time_in', 'time_out'], 'required'],
            [ 'time_in', 'validateDateNow'],
            [ 'time_out', 'validateDateTime'],
            ['time_out', 'validateYourDate'],

        ];
    }

    public function editholiday($id){
        $holiday = Holiday::find()->where(['id' => $id])->one();
        $holiday->time_in = $this->time_in;
        $holiday->time_out = $this->time_out;
        return $holiday->save();
    }
}