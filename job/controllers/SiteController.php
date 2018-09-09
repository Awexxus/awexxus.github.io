<?php

namespace app\controllers;

use app\models\Block;
use app\models\Delete;
use app\models\Login;
use app\models\Register;
use Yii;
use yii\web\Controller;
use app\models\Holiday;
use app\models\addHoliday;
use app\models\Edit;



class SiteController extends Controller
{

    public function actionIndex()
    {
        //Если пользователь не гость
        if(!Yii::$app->user->isGuest){
            //получаем id текущего пользователя
            $userId = Yii::$app->user->identity->getId();
            //Ищем все отпуски в бд
            $allHolidays = Holiday::find()->all();
            //Ищем отпуски по ид текущего пользователя
            $holidayId = Holiday::find()->where(['id_parent' => $userId])->all();
        }
        return $this->render('index', compact(['holidayId', 'allHolidays']));
    }

    public function actionLogin(){
        //Если пользователь не гость, переадресация на главную
        if(!(Yii::$app->user->isGuest)) {
            return $this->goHome();
        }
            //Создаем модель
            $login = new Login();
            //Получаем данные через пост
            $user = Yii::$app->request->post('Login');
            //Если данные отправлены
            if ($user) {
                //записываем их в модель
                $login->attributes = $user;
                //Если валидация пройдена
                if ($login->validate()) {
                    //Записываем пользователя в сессию
                    Yii::$app->user->login($login->getEmail());
                    return $this->goHome();
                }
            }
            return $this->render('login', compact('login'));

    }
    public function actionLogout()
    {
        //Удаляем пользователя из сессии
        Yii::$app->user->logout();

        return $this->goHome();
    }

    public function actionRegister(){
        //модель регистрации
        $model = new Register();
        //получаем данные
        $user = Yii::$app->request->post('Register');
        //Если данные переданы
        if($user){
            //Записываем данные в модель
            $model->attributes = $user;
            //валидация
            if($model->validate()){
                //запись
                $model->register();
                return $this->render('success');
            }else{
                return $this->render('error');
            }
        }
        return $this->render('register', compact('model'));
    }
    public function actionError(){
        return $this->render('error');
    }

    public function actionAddholiday(){
        //Проверяем
        if(!Yii::$app->user->isGuest){
            //Модель
            $model = new addHoliday();
            //Все отпуска
            $allHoliday = Holiday::find()->orderBy(['id_parent'=>SORT_ASC])->all();
            //Получаем данные
            $date = Yii::$app->request->post('addHoliday');
            //Если данные получены
            if($date){
                //Записываем в модель
                $model->attributes = $date;
                //Проходим валидацию
                if ($model->validate()) {
                    //Запись в бд
                    $model->addholiday();
                    return $this->render('success_add');
                }

            }
            return $this->render('addholiday', compact('model','allHoliday'));
        }
    }
    public function actionBlock(){
        //Создаем модель
        $model = new Block();
        //получаем id переданный гет
        $id = Yii::$app->request->get('id');
        //Проверка если пользователь не гость и пользователь имеет статус админа
        if(!Yii::$app->user->isGuest && Yii::$app->user->identity->status == 1){
            //Блокируем редактирование и удаление
            $model->block($id);
            return $this->goHome();
        }
        else{
            return $this->render('error');
        }
    }

    public function actionEdit(){
        //Если пользователь не гость
        if(!Yii::$app->user->isGuest) {
            //создаем модель
            $model = new Edit();
            //получаем ид
            $id = Yii::$app->request->get('id');
            //Все отпуска
            $allHoliday = Holiday::find()->orderBy(['id_parent' => SORT_ASC])->all();
            //ищем запись в бд
            $holiday = Holiday::find()->where(['id' => $id])->one();
            //получаем новые данные
            $date = Yii::$app->request->post('Edit');
            //Если ид пользователя равно ид пользователя, который создавал запись , и запись не заблокирована, или пользователь админ
            if(((Yii::$app->user->identity->id == $holiday['id_parent']) && $holiday['block']==0) || Yii::$app->user->identity->status == 1){
                    //Если данные переданы
                    if ($date) {
                        //записываем в модель
                        $model->attributes = $date;
                        //Если прошли валидацию
                        if ($model->validate()) {
                            //Редактируем
                            $model->editholiday($id);
                            return $this->render('success_edit');
                        }
                    }
                    //олучаем все отпуска для вида
                    return $this->render('edit', compact(['model', 'holiday', 'allHoliday']));
                } else {
                    return $this->render('error');
                }
            }
        else{
            return $this->render ('error');
        }
    }

    public function actionDelete(){
        //Если пользователь не гость
        if(!Yii::$app->user->isGuest){
            //Создаем модель
            $model= new Delete();
            //Получаем ид
            $id = Yii::$app->request->get('id');
            //Ищем запись в бд
            $holiday = Holiday::find()->where(['id' => $id])->one();
            //Если ид пользователя равно ид пользователя, который создавал запись, или пользователь админ
            if((Yii::$app->user->identity->id == $holiday['id_parent']) || Yii::$app->user->identity->status == 1){
                //Обращаемся к функции в модели delete  и удаляем запись
                $model->delete($id);
                return $this->render('success_edit');
            }else{
                return $this->render ('error');
            }
        }else{
            return $this->render ('error');
        }
    }
}
