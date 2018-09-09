<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model app\models\LoginForm */

use yii\bootstrap\ActiveForm;

$this->title = 'Регистрация';
?>

<?php
    $form = ActiveForm::begin(['class' => 'form-horizontal'])

?>
<?= $form->field($model, 'username')->textInput(['autofocus'=>true])->label('Имя')?>
<?= $form->field($model, 'lastname')->textInput()->label('Фамилия')?>
<?= $form->field($model, 'email')->textInput()->label('Email')?>
<?= $form->field($model, 'password')->passwordInput()->label('Пароль')?>
<div>
    <button type="submit" class="btn btn-success">Регистрация</button>
</div>
<?php
    ActiveForm::end();
?>
