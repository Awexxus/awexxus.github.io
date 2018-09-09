<?php

/* @var $this yii\web\View */
use yii\widgets\ActiveForm;
$this->title = 'Редактировать отпуск';
use yii\helpers\Url;
?>
<div class="container">
    <div class="row">
        <div class="col-3">
        <div>
            <h1><?= $holiday['username'];?></h1> <h1><?= $holiday['lastname'];?></h1>
        </div>
        <?php
        $form = ActiveForm::begin(['class' => 'form-horizontal'])
        ?>
        <?= $form->field($model, 'time_in')->input('date', ['value'=> $holiday['time_in']])->label('Дата начала') ?>
        <?= $form->field($model, 'time_out')->input('date',['value'=> $holiday['time_out']])->label('Дата окончания')?>
        <div>
            <button type="submit" class="btn btn-success">Редактировать отпуск</button>
        </div>
        <?php
        ActiveForm::end();
        ?>
        </div>
        <div class="col-7 ml-auto">
            <table>
            <thead>
            <tr>
                <td>Статус</td>
                <td>Сотрудник</td>
                <td>Начало</td>
                <td>Конец</td>
            </tr>
            </thead>
            <tbody>
            <?php foreach ($allHoliday as $holidayAll):?>
                <tr>
                    <?php if($holidayAll['block'] == 0 ):?>
                        <td><span class="badge badge-pill badge-danger">Добавлен</span></td>
                    <?php else:?>
                        <td><span class="badge badge-pill badge-success">Утвержден</span></td>
                    <?php endif;?>
                    <td><?= $holidayAll['username'].' '.$holidayAll['lastname']?></td><td><?=$holidayAll['time_in']?></td><td><?=$holidayAll['time_out']?></td>
                </tr>
            <?php endforeach?>
            </tbody>
            </table>
        </div>
    </div>
</div>
