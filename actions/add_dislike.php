<?php
    include_once('../database/connection.php');
    include_once('../database/access_for_likes.php');

    $user_id = $_POST['user_id'];
    $story_id = $_POST['story_id'];

    $dislikes = add_dislike_to_story($user_id, $story_id);

    echo json_encode(count($dislikes));
?>