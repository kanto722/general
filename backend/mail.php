<?php

if ($_POST['name']) {
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    require_once "SendMailSmtpClass.php";
    $mailSMTP = new SendMailSmtpClass('ttformail@yandex.ru', 'QwE12345', 'ssl://smtp.yandex.ru', 465, "UTF-8");

    $from = array(
        "bsb.ru",
        "ttformail@yandex.ru"
    );

    $to = 'slava02.11.1993@yandex.ru';

    $subject = 'Запрос с сайта bsb.ru';
    $message = 'Запрос с сайта bsb.ru<br><br>
                <b>Имя</b> - '.$name.'<br><br>
                <b>Телефон</b> - '.$phone.'<br><br>';

    $result =  $mailSMTP->send($to, $subject, $message, $from);

    if($result === true){
        file_put_contents('smtp_log.txt', date(DATE_RFC822) . " Done" . "\n", FILE_APPEND);
            echo "Done";
    }else{
        file_put_contents('smtp_log.txt', date(DATE_RFC822) . " " . $result . "\n", FILE_APPEND);
            echo "Error: " . $result;
    };
};

?>

<?php