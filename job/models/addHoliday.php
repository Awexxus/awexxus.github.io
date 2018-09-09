<?php
/**
 * Created by PhpStorm.
 * User: Victoria
 * Date: 07.09.2018
 * Time: 12:37
 */

namespace app\models;

use Yii;
use yii\base\Model;

class addHoliday extends Model
{
    public $id_parent;
    public $username;
    public $lastname;
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
    //Собственная валидация даты начала отпуска
    public function validateDateNow($attribute, $params){
        $in_time = $this->time_in;
        $currentDate = date("Y-m-d");
        $result = $in_time <= $currentDate;
        if($result){
            $this->addError($attribute, 'Дата начала не может быть раньше следующего дня текущей даты');
        }
    }
    //Собственная валидация даты начала и даты конца
    public function validateDateTime($attribute, $params){
        $in = $this->time_in;
        $out = $this->time_out;
        $result = $in<=$out;
        if(!$result){
            $this->addError($attribute, 'Дата окончания не может быть меньше или равна дате начала');
        }
    }
    //Собственная валидация совпадения чисел отпуска
    public function validateYourDate($attribute, $params){
        //если юзер администратор, то он может редактировать как угодно отпуска
        if(Yii::$app->user->identity->status == 0){
            $yourholiday = Holiday::find()->where(['id_parent' => Yii::$app->user->identity->id])->all();
            $id = (int) Yii::$app->request->get('id');
            foreach ($yourholiday as $item){
                //Проверка если начало отпуска из бд больше начала теущего и начало отпуска из бд меньше конца текущего, или,  если начало текущего больше начала отпуска из бд и начало отпуска текущего меньше конца отпуска из бд
                if(($item['time_in'] >= $this->time_in && $item['time_in'] <= $this->time_out)||($this->time_in >= $item['time_in'] &&  $this->time_in<= $item['time_out'] )){
                    //Если при редактировании ид отпусков совпадают, то неучитывать редактируемый
                    if($item['id'] !== $id){
                        $this->addError($attribute, 'Отпуск пересекается с вашим отпуском с: '.$item['time_in'].' по: '.$item['time_out']);
                    }
                }
            }
        }else{
            return true;
        }
    }
    //Добавляем запись
    public function addholiday(){
        $holiday = new Holiday();
        $holiday->id_parent = Yii::$app->user->identity->id;
        $holiday->username = Yii::$app->user->identity->username;
        $holiday->lastname = Yii::$app->user->identity->lastname;
        $holiday->time_in = $this->time_in;
        $holiday->time_out = $this->time_out;
        return $holiday->save();
    }

}