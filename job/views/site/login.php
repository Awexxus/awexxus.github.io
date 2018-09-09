<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model app\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;

$this->title = 'Вход';
$this->params['breadcrumbs'][] = $this->title;
?>
<?php
$form = ActiveForm::begin(['class' => 'form-horizontal'])

?>

<?= $form->field($login, 'email')->textInput()->label('Email')?>
<?= $form->field($login, 'password')->passwordInput()->label('Пароль')?>
    <div>
        <button type="submit" class="btn btn-success">Вход</button>
    </div>
<?php
ActiveForm::end();
?>