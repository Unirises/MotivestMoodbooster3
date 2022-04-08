<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <title>MoodBooster</title>
</head>


<body class="background">
    <audio src="assets/music/bg.mp3" id="music_bg"></audio>
    <audio src="assets/music/confetti.mp3" id="confetti_music"></audio>
    <div class="full-height" style="display: flex;
  justify-content: center;
  align-items: center;" id="d_pc">
        <label class="h3 text-center" style="color:white;">USE A COMPUTER FOR BETTER EXPERIENCE</label>
    </div>
    <div class="full-height d-none" id="gameMB">
        
        <?php include 'pages/page1.php'; ?>
        <?php include 'pages/page2.php'; ?>
        <?php include 'pages/mechanics.php'; ?>
        <?php include 'pages/gameplay.php'; ?>
        <?php include 'pages/ansView_page.php'; ?>
        <?php include 'pages/correct.php'; ?>
        <?php include 'pages/product_page.php'; ?>
        <?php include 'pages/thank_you.php'; ?>
        <?php include 'pages/form_game.php'; ?>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <!-- <script src="assets/js/jquery.animate.css.min.js"></script> -->
    <script src="assets/js/confetti.js"></script>
    <script src="assets/js/question.js"></script>
    <script src="assets/js/moodbooster.js"></script>
</body>

</html>