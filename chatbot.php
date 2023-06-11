<?php

include('config.php');


if(isset($_GET['message'])) {
    $message = $_GET['message'];
    $sql = "SELECT response FROM messages WHERE message = ? LIMIT 1";
    $smt = $dba->prepare($sql);
    $smt->bindValue(1, $message, PDO::PARAM_STR);
    $smt->execute();
    $row = $smt->fetch(PDO::FETCH_ASSOC);
    if($row !== false) {
        $result = ['response_message' => $row['response']];
        echo json_encode($result);
    } else {
        echo json_encode(['response_message' => 'What!']);
    }
}
