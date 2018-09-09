<?php

/* @var $this \yii\web\View */
/* @var $content string */


use yii\helpers\Html;
use yii\widgets\ActiveForm;
use app\assets\AppAsset;
use app\models\Login;

AppAsset::register($this);

$login = new Login();
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>
<header>
    <div class="container">
        <div class="row">
            <nav class="navbar navbar-expand-lg navbar-light col-12">
                <a class="navbar-brand" href="<?= \yii\helpers\Url::home()?>">Система учета отпусков</a>
                <button class="navbar-toggler menu" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse div" id="navbarSupportedContent">
                    <?php if(Yii::$app->user->isGuest):?>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="<?= \yii\helpers\Url::to('/register')?>">Регистрация<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="<?= \yii\helpers\Url::to('/login')?>">Войти<span class="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    <?php else:?>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="<?= \yii\helpers\Url::to('/logout')?>">Выход(<?= Yii::$app->user->identity->username?>)<span class="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    <?php
                    endif;
                    ?>
                </div>
            </nav>
        </div>
    </div>
</header>
    <div class="container">
        <?= $content ?>
    </div>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
