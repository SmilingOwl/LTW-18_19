<?php
    include_once('../includes/session.php');
    include_once('../database/access_database.php');
    include_once('../database/access_for_likes.php');
    
    if(isset($_SESSION['user_id'])) {
        $user_id = $_SESSION['user_id'];
        $users_id = $user_id;
        $stories = get_saved_stories_by_user($user_id);
        $user = get_user($users_id);
    }
    
    include_once('../templates/common/header.php');
    include_once('../templates/favorites/scripts.php');
    include_once('../templates/common/upper_header.php');
    include_once('../templates/favorites/close_header.php');
    if(!isset($_SESSION['user_id']))
        echo "<h3> Login to check your favorite stories!</h3>";
    else if(sizeof($stories) == 0)
        echo "<h3> You don't have any favorite stories!</h3>";
    else
        include_once('../templates/show_stories.php');
    include_once('../templates/common/footer.php');
?>