<?php
    include_once('../includes/session.php');
    include_once('../database/connection.php');
    include_once('../database/access_database.php');
    include_once('../database/access_for_likes.php');
    
    $users_id = $_SESSION['user_id'];
    $stories = get_all_stories($users_id);
    $user = get_user($users_id);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Stories Website</title>
    <meta charset="utf-8">
    <link href="../css/style.css" rel="stylesheet">
    <link href="../css/comments.css" rel="stylesheet">
    <link href="../css/layout.css" rel="stylesheet">
    <link href="../css/icons.css" rel="stylesheet">
    <script src="../scripts/add_favorite.js" defer></script>
    <script src="../scripts/update_likes.js" defer></script>
    <script src="../scripts/show_menu.js" defer></script>
    <script src="../scripts/show_comments.js" defer></script>
    <script src="../scripts/show_add_story.js" defer></script>
    <script src="../scripts/search_engine.js" defer></script>
</head>
<body>
    <header>
    <?php include_once('../templates/common/upper_header.php'); ?>
        <h1> Home Page </h1>
    </header>
    <span class="add_story"><img src="../icons/add_icon.png" alt="Add story"> </span>
    <input type="hidden" name="user_id" value="<?=$users_id?>">
    <header id="filter_stories">
            <label>Search: <input type="text" name="search_box" value=""></label>
    </header>

<?php 
    include_once('../templates/show_stories.php');
    include_once('../templates/common/footer.php');
?>