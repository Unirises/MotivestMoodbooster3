$(document).ready(function() {


    if ($(window).width() < 481) {
        $(".background").css({ "background-image": "none", "background-color": "#D12E2D" });
    } else {
        $('#d_pc').addClass('d-none');
        $('#gameMB').removeClass('d-none');
    }

    $('#endButton').click(function() {
        $('#thankyou_page').addClass('d-none');
        $('#form_game').removeClass('d-none');
    });

    var i = 0;
    // music 
    function correct() {
        var myAudio = new Audio("assets/music/right_answer.mp3");
        myAudio.play();
    }

    function wrong() {
        var myAudio = new Audio("assets/music/wrong_answer.wav");
        myAudio.play();
    }


    var musicStatus = 'off'

    $('#page_musicBtn').click(function() {
        if (musicStatus == 'on') {
            offMusic();
        } else {
            onMusic();
        }
    });

    $('#page2_musicBtn').click(function() {
        if (musicStatus == 'on') {
            offMusic();
        } else {
            onMusic();
        }
    });
    $('#mechanics_musicBtn').click(function() {
        if (musicStatus == 'on') {
            offMusic();
        } else {
            onMusic();
        }
    });
    $('#gameplay_music').click(function() {
        if (musicStatus == 'on') {
            offMusic();
        } else {
            onMusic();
        }
    });

    $('#correct_musicBtn_2').click(function() {
        if (musicStatus == 'on') {
            offMusic();
        } else {
            onMusic();
        }
    })
    $('#correct_musicBtn').click(function() {
        if (musicStatus == 'on') {
            offMusic();
        } else {
            onMusic();
        }
    });
    $('#product_musicBtn').click(function() {
        if (musicStatus == 'on') {
            offMusic();
        } else {
            onMusic();
        }
    });
    $('#thankyou_musicBtn').click(function() {
        if (musicStatus == 'on') {
            offMusic();
        } else {
            onMusic();
        }
    });

    function onMusic() {
        musicStatus = "on";
        $("#music_bg")[0].play();
        $("#music_bg")[0].volume = 0.2;
        $("#music_bg")[0].loop = true;
        $("#page_musicBtn").attr('src', 'assets/img/btn/music.png');
        $('#page2_musicBtn').attr('src', 'assets/img/btn/music.png');
        $('#mechanics_musicBtn').attr('src', 'assets/img/btn/music.png');
        $('#gameplay_music').attr('src', 'assets/img/btn/music.png');
        $('#correct_musicBtn').attr('src', 'assets/img/btn/music.png');
        $('#correct_musicBtn_2').attr('src', 'assets/img/btn/music.png');
        $('#product_musicBtn').attr('src', 'assets/img/btn/music.png');
        $('#thankyou_musicBtn').attr('src', 'assets/img/btn/music.png');
    }

    function offMusic() {
        $("#music_bg")[0].pause();
        musicStatus = "off";
        $('#page_musicBtn').attr('src', 'assets/img/btn/offmusic.png');
        $('#page2_musicBtn').attr('src', 'assets/img/btn/offmusic.png');
        $('#mechanics_musicBtn').attr('src', 'assets/img/btn/offmusic.png');
        $('#gameplay_music').attr('src', 'assets/img/btn/offmusic.png');
        $('#correct_musicBtn').attr('src', 'assets/img/btn/offmusic.png');
        $('#correct_musicBtn_2').attr('src', 'assets/img/btn/offmusic.png');
        $('#product_musicBtn').attr('src', 'assets/img/btn/offmusic.png');
        $('#thankyou_musicBtn').attr('src', 'assets/img/btn/offmusic.png');
    }

    $('#correct_homeBtn').click(function() {
        backHome('correct', 'page1');
        $("#confetti_music")[0].pause();
        $("#confetti_music")[0].currentTime = 0;
    })

    $('#gameplay_homeBtn').click(function() {
        backHome('gameplay', 'page1');
    })

    $('#mechanics_homeBtn').click(function() {
        backHome('mechanics', 'page1');
    })
    $('#page2_homeBtn').click(function() {
        backHome('page2', 'page1');
    })

    $('#product_homeBtn').click(function() {
        backHome('product_page', 'page1');
    })
    $('#ans_homeBtn').click(function() {
        backHome('ansview', 'page1');
    })
    $('#thankyou_homeBtn').click(function() {
        backHome('thankyou_page', 'page1');
    })




    function backHome(current, show) {
        $('#' + current).addClass('d-none');
        $('#' + show).removeClass('d-none');
        i = 0;
        generate(i);
        $('.background').css('background-image', 'url(assets/img/bg1.png)');
    }




















    $('#passcodeBtn').click(function() {
        if ($('#passcode').val() == "MoodBooster") {
            $('#login').addClass('d-none');
            $('#form_game').removeClass('d-none');
        } else {
            alert('wrong passcode');
        }
    });


    $('#proceed_game').click(function() {
        $('#form_game').addClass('d-none');
        $('#page1').removeClass('d-none');
        $("#music_bg")[0].play();
        $("#music_bg")[0].volume = 0.2;
        $("#music_bg")[0].loop = true;
        $('.background').css('background-image', 'url(assets/img/bg1.png)');
    });

    $('#start_game').click(function() {
        $('#page1').addClass('d-none');
        $('#page2').removeClass('d-none');
        $('.background').css('background-image', 'url(assets/img/bg2.png)');
    });

    $('#play_page2').click(function() {
        $('#page2').addClass('d-none');
        $('#mechanics').removeClass('d-none');
        $('.background').css('background-image', 'url(assets/img/bg3.png)');
    });

    $('#start_game_mechanics').click(function() {
        $('#mechanics').addClass('d-none');
        $('#gameplay').removeClass('d-none');
        $('.background').css('background-image', 'url(assets/img/backBg.png)');
    });

    $('#f_clue').hide();

    function generate(index) {
        $("#answer1").attr('src', question[index].p1);
        $("#answer2").attr('src', question[index].p2);
        $("#answer3").attr('src', question[index].p3);
        $("#answer4").attr('src', question[index].p4);
        $('#clue').text(question[index].clue);
    }


    generate(i);

    checkAnswer();


    $('#nextQuestionAns').click(function() {
        const a = question.length - 1;
        if (a != i) {
            i++;
            $('#ansview').addClass('d-none');
            $('#gameplay').removeClass('d-none');
            generate(i);
            $('.background').css('background-image', 'url(assets/img/backBg.png)');
        } else {
            $("#confetti_music")[0].play();
            $("#confetti_music")[0].volume = 0.2;
            $('#correct').removeClass('d-none');
            $('#ansview').addClass('d-none');
            $('.background').css('background-image', 'url(assets/img/backBg.png)');
        }
    })

    function checkAnswer() {
        $('#input_answer').keypress(function(e) {
            var key = e.which;
            if (key == 13) // the enter key code
            {
                const a = question.length - 1;
                if (a != i) {

                    if ($(this).val().toUpperCase() == question[i].answer1 || $(this).val().toUpperCase() == question[i].answer2 || $(this).val().toUpperCase() == question[i].answer3 || $(this).val().toUpperCase() == question[i].answer4 || $(this).val().toUpperCase() == question[i].answer5 || $(this).val().toUpperCase() == question[i].answer6) {


                        $('#ans_change').text(question[i].answer);
                        $('#gameplay').addClass('d-none');
                        $('#ansview').removeClass('d-none');
                        $(this).val('');
                        correct();
                        $('.background').css('background-image', 'url(assets/img/ans_bg.png)');
                    } else {
                        wrong();
                        $(this).val('');
                    }
                } else {
                    if ($(this).val().toUpperCase() == question[i].answer1 || $(this).val().toUpperCase() == question[i].answer2 || $(this).val().toUpperCase() == question[i].answer3 || $(this).val().toUpperCase() == question[i].answer4 || $(this).val().toUpperCase() == question[i].answer5 || $(this).val().toUpperCase() == question[i].answer6) {

                        $('#ans_change').text(question[i].answer);
                        $('#gameplay').addClass('d-none');
                        $('#ansview').removeClass('d-none');
                        $(this).val('');
                        $('.background').css('background-image', 'url(assets/img/ans_bg.png)');
                        correct();

                    } else {
                        wrong();
                        $(this).val('');
                    }
                }
                return false;
            }
        });

    }

    $('#gameplay_next_skip').click(function() {
        $('#gameplay').addClass('d-none');
        $('#ansview').removeClass('d-none');
        $('#ans_change').text(question[i].answer);
        $('.background').css('background-image', 'url(assets/img/ans_bg.png)');
        wrong();
    })




    // Button

    $('#nextCongrats').click(function() {
        $('#correct').addClass('d-none');
        $('#product_page').removeClass('d-none');
        $("#confetti_music")[0].pause();
        $("#confetti_music")[0].currentTime = 0;
        $('.background').css('background-image', 'url(assets/img/bg2.png)');
    });

    $('#nextProduct').click(function() {
        $('#product_page').addClass('d-none');
        $('#thankyou_page').removeClass('d-none');
    });

    // Clue Btn
    $('#cluetBtn').click(function() {
        $('#f_clue').slideToggle();
    })

    var confettiSettings = { target: 'my-canvas' };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
});