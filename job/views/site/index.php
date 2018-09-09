<?php

/* @var $this yii\web\View */

$this->title = 'Учет отпусков';
use yii\helpers\Url;
?>
<?php if(Yii::$app->user->isGuest):?>
</div>
<section class="main">
    <div class="container">
        <div class="row">
            <div class="title col-12">
                <h1>Как работает система учета:</h1>
            </div>
            <div class="li">
                <ul>
                    <li>Зарегистрируйтесь или войдите.</li>
                    <li>На вкладке "Ваши отпуска" есть ссылка добавить отпуск.</li>
                    <li><i class="fa fa-pencil" aria-hidden="true"></i> - редактирование отпуска, <i class="fa fa-times" aria-hidden="true"></i> - удаление отпуска.</li>
                    <li>Если вы администратор, то: <i class="fa fa-lock" aria-hidden="true"></i> утвердить отпуск, <i class="fa fa-unlock" aria-hidden="true"></i> - отменить.</li>
                    <li>Поиск на вкладке "Все отпуска".</li>
                </ul>
            </div>
        </div>
    </div>
</section>
<?php else:?>
</div>
<section class="main" style="padding-top: 50px">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1><?= Yii::$app->user->identity->lastname?></h1><h2><?= Yii::$app->user->identity->username?></h2>
            </div>
            <nav class="col-12">
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Все отпуска</a>
                    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Ваши отпуска</a>
                </div>
            </nav>
            <div class="tab-content col-12" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class="form-group col-4">
                        <input type="text" class="form-control pull-right" id="search" placeholder="Поиск по таблице">
                    </div>
                    <table id="mytable">
                        <thead>
                            <tr>
                                <td>Статус</td>
                                <td>Сотрудник</td>
                                <td>Начало</td>
                                <td>Конец</td>
                            </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($allHolidays as $holidayAll):?>
                            <tr>
                                <?php if($holidayAll['block'] == 0 ):?>
                                    <td><span class="badge badge-pill badge-danger">Добавлен</span></td>
                                <?php else:?>
                                    <td><span class="badge badge-pill badge-success">Утвержден</span></td>
                                <?php endif;?>
                                <td><?= $holidayAll['username'].' '.$holidayAll['lastname']?></td><td><?=$holidayAll['time_in']?></td><td><?=$holidayAll['time_out']?></td>
                                <?php if((Yii::$app->user->identity->id == $holidayAll['id_parent'] && $holidayAll['block'] == 0) || Yii::$app->user->identity->status == 1):?>
                                    <td><a href="<?= Url::to('/edit/'.$holidayAll['id'])?>"><i class="fa fa-pencil" aria-hidden="true"></i></a></td>
                                    <td><a href="<?= Url::to('/delete/'.$holidayAll['id'])?>" class="delete"><i class="fa fa-times" aria-hidden="true"></i></a></td>
                                <?php endif ?>
                                <?php if($userId = Yii::$app->user->identity->status == 1):?>
                                    <?php if($holidayAll['block'] == 0):?>
                                        <td><a href="<?= Url::to('/block/'.$holidayAll['id'])?>?>"><i class="fa fa-lock" aria-hidden="true"></i></a></td>
                                    <?php else:?>
                                        <td><a href="<?= Url::to('/block/'.$holidayAll['id'])?>"><i class="fa fa-unlock"></i></a></td>
                                    <?php endif;?>
                                <?php endif?>
                            </tr>
                        <?php endforeach?>
                        </tbody>
                    </table>
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <table>
                        <?php foreach ($holidayId as $holiday):?>
                            <?php if($holiday['block'] == 0 ):?>
                                <tr>
                                <td><span class="badge badge-pill badge-danger">Добавлен</span></td>
                            <?php else:?>
                                <td><span class="badge badge-pill badge-success">Утвержден</span></td>
                            <?php endif;?>
                            <td><?= "С : ".$holiday['time_in']?></td><td><?=" По : ".$holiday['time_out'];?></td>
                            <?php if((Yii::$app->user->identity->id == $holiday['id_parent'] && $holiday['block'] == 0) || Yii::$app->user->identity->status == 1):?>
                                <td><a href="<?= Url::to('/edit/'.$holiday['id'])?>"><i class="fa fa-pencil" aria-hidden="true"></i></a></td>
                                <td><a href="<?= Url::to('/delete/'.$holiday['id'])?>" class="delete"><i class="fa fa-times" aria-hidden="true"></i></a></td>
                            <?php endif ?>
                            <?php if($userId = Yii::$app->user->identity->status == 1):?>
                                <?php if($holiday['block'] == 0):?>
                                    <td><a href="<?= Url::to('/block/'.$holiday['id'])?>"><i class="fa fa-lock" aria-hidden="true"></i></a></td>
                                <?php else:?>
                                    <td><a href="<?= Url::to('/block/'.$holiday['id'])?>"><i class="fa fa-unlock"></i></a></td>
                                <?php endif;?>
                            <?php endif?>
                            </tr>
                        <?php endforeach?>
                    </table>
                    <p><a href="/addholiday">Добавить отпуск</a></p>
                </div>
            </div>
        </div>
    </div>
</section>
<?php endif?>
