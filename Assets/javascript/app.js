
$(document).ready(function () {
var audio = new Audio('Assets/images/theme.mp3')
var audio2 = new Audio('Assets/images/Victory.mp3')
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var image1 = new Image();
image1.src = "Assets/images/image1.jpg";
var image2 = new Image();
image2.src = "Assets/images/image2.png";
var image3 = new Image();
image3.src = "Assets/images/image3.jpg";
var image4 = new Image();
image4.src = "Assets/images/image4.jpg";
var image5 = new Image()
image5.src = "Assets/images/image5.jpg";


selected = false;
$(".ques").hide();
var startbutton = $("<button>")
$(startbutton).addClass("sbutton");
$(startbutton).text("Click to start");
$(".gamecontainer").append(startbutton)
$(startbutton).on("click", function(){
    $(startbutton).hide();
    GameStart();
    $(".ques").show();
});

   function GameStart(){
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    selected = false;
        audio.load();
        audio.play();
        
       Stage1();
       console.log('test');
   }
   function Stage1(){
    
    qanda = $("<div>")
    var time22 = $("<h2> Time left: <p id = timer>30</h2></p>")
    $(".gamecontainer").prepend(time22);
    timeleft = 30;
    $(".gamecontainer").prepend("<h1>Leauge of Legends Trivia!</h1>");
    console.log("Stage1");
   var stage1 = $("<div>");
   $(stage1).addClass("questions");
   var question1 = "What team won the Season 1 World Championship?";
   var answers1 =  ["Fnatic","Team Solo Mid","Counter Logic Gaming","SKT T1"]
   answer = "Fnatic";
   $(stage1).text(question1);
   $(qanda).append(stage1);
   $(".gamecontainer").append(qanda);
   
    for(i = 0; i<answers1.length; i++){
        
        var q1 = $("<div>");
        $(q1).addClass("answers")
        $(q1).attr("name", answers1[i]);
        $(q1).append(answers1[i]);
        $(qanda).append(q1);
        
    }
    $('.answers').on( 'mouseenter mouseleave', function() {
        $(this).toggleClass('answersH');
     }
  );
    $(".answers").on("click", function(){
        var name = $(this).attr("name");
        selected = true;
            if($(this).attr("name") == "Fnatic"){
               
                correct ++;
                $(".gamecontainer").html('');
                var win = $("<div>")
               $(win).append("<h2>Correct! Fnatic was the team that won Season 1 in 2011</h2>");
               $(win).append(image1); 
             
               $(".gamecontainer").append(win)
               stop();
               var timerz = setInterval(timez, 1000);
               secs = 4
               function timez(){
                   secs --;
                   console.log(secs);
                   if(secs == 0){
                       $(".gamecontainer").html('');
                       console.log("reset");
                       Stage2();
                       clearInterval(timerz);
                   }
               }
               
            }
            else{
                
                incorrect ++;
                $(".gamecontainer").html('');
         var win = $("<div>")
        $(win).append("<h2>Incorrect! " + name + " did not win Season 1, Fnatic was the team that won Season 1 in 2011</h2>");
        $(win).append(image1); 
      
        $(".gamecontainer").append(win)
        stop();
        var timerz = setInterval(timez, 1000);
        secs = 4
        function timez(){
            secs --;
            console.log(secs);
            if(secs == 0){
                $(".gamecontainer").html('');
                console.log("reset");
                Stage2();
                clearInterval(timerz);
            }
        }
        
               
            }
    });
  

        var timer = setInterval(function(){
        timeleft--;
        document.getElementById("timer").textContent = timeleft;
        console.log(timeleft);
        if(selected == false){
        
        if(timeleft <= 0){
            unanswered ++;
            console.log("end");
         $(".gamecontainer").html('');
         var win = $("<div>")
        $(win).append("<h2>Times UP! Fnatic was the team that won Season 1 in 2011</h2>");
        $(win).append(image1); 
      
        $(".gamecontainer").append(win)
        stop();
        var timerz = setInterval(timez, 1000);
        secs = 4
        function timez(){
            secs --;
            console.log(secs);
            if(secs == 0){
                $(".gamecontainer").html('');
                console.log("reset");
                Stage2();
                clearInterval(timerz);
            }
        }
        
        
        }
                
        }
        else{
            
        }
        
        if(timeleft <= 0)
            clearInterval(timer);
        },1000);
        function stop() {
            clearInterval(timer);
        }
   
        console.log(timeleft);
        
    
   
  
   }










   
   function Stage2(){
    selected = false;
    qanda = $("<div>")
    var time22 = $("<h2> Time left: <p id = timer>30</h2></p>")
    $(".gamecontainer").prepend(time22);
    timeleft = 30;
    $(".gamecontainer").prepend("<h1>Leauge of Legends Trivia!</h1>");
    console.log("Stage2");
   var stage1 = $("<div>");
   $(stage1).addClass("questions");
   var question1 = "Who is the most decorated EU player?";
   var answers1 =  ["Cyanide","YellOwStaR","xPeke","Rekkles"]
   answer = "YellOwStaR";
   $(stage1).text(question1);
   $(qanda).append(stage1);
   $(".gamecontainer").append(qanda);
   
    for(i = 0; i<answers1.length; i++){
        
        var q1 = $("<div>");
        $(q1).addClass("answers")
        $(q1).attr("name", answers1[i]);
        $(q1).append(answers1[i]);
        $(qanda).append(q1);
        
    }
    $('.answers').on( 'mouseenter mouseleave', function() {
        $(this).toggleClass('answersH');
     }
  );
    $(".answers").on("click", function(){
        var name = $(this).attr("name");
        selected = true;
            if($(this).attr("name") == answer){
               
                correct ++;
                
                $(".gamecontainer").html('');
                var win = $("<div>")
               $(win).append("<h2>Correct! YellOwStaR has won 5 trophies! Making him the most decorated</h2>");
               $(win).append(image2); 
             
               $(".gamecontainer").append(win)
               stop();
               var timerz = setInterval(timez, 1000);
               secs = 4
               function timez(){
                   secs --;
                   console.log(secs);
                   if(secs == 0){
                       $(".gamecontainer").html('');
                       console.log("reset");
                       Stage3();
                       clearInterval(timerz);
                   }
               }
               
            }
            else{
                
                incorrect ++;
                $(".gamecontainer").html('');
         var win = $("<div>")
        $(win).append("<h2>Incorrect! " + name + " is not the most decorated. YellOwStaR is and has won 5 trophies! Making him the most decorated</h2>");
        $(win).append(image2); 
      
        $(".gamecontainer").append(win)
        stop();
        var timerz = setInterval(timez, 1000);
        secs = 4
        function timez(){
            secs --;
            console.log(secs);
            if(secs == 0){
                $(".gamecontainer").html('');
                console.log("reset");
                Stage3();
                clearInterval(timerz);
            }
        }
        
               
            }
    });
  

        var timer = setInterval(function(){
        timeleft--;
        document.getElementById("timer").textContent = timeleft;
        console.log(timeleft);
        if(selected == false){
        
        if(timeleft <= 0){
            unanswered ++;
            console.log("end");
         $(".gamecontainer").html('');
         var win = $("<div>")
        $(win).append("<h2>Times UP! YellOwStaR has won 5 trophies! Making him the most decorated</h2>");
        $(win).append(image2); 
      
        $(".gamecontainer").append(win)
        stop();
        var timerz = setInterval(timez, 1000);
        secs = 4
        function timez(){
            secs --;
            console.log(secs);
            if(secs == 0){
                $(".gamecontainer").html('');
                console.log("reset");
                
                Stage3();
                clearInterval(timerz);
            }
        }
        
        
        }
                
        }
        else{
            
        }
        
        if(timeleft <= 0)
            clearInterval(timer);
        },1000);
        function stop() {
            clearInterval(timer);
        }

        
    
   
 
   }








   function Stage3(){
    selected = false;
    qanda = $("<div>")
    var time22 = $("<h2> Time left: <p id = timer>30</h2></p>")
    $(".gamecontainer").prepend(time22);
    timeleft = 30;
    $(".gamecontainer").prepend("<h1>Leauge of Legends Trivia!</h1>");
    console.log("Stage3");
   var stage1 = $("<div>");
   $(stage1).addClass("questions");
   var question1 = "Who has the most all time kills in the NA LCS?";
   var answers1 =  ["Bjergsen","Doublelift","Pobelter","Hashinshin"]
   answer = "Bjergsen";
   $(stage1).text(question1);
   $(qanda).append(stage1);
   $(".gamecontainer").append(qanda);
   
    for(i = 0; i<answers1.length; i++){
        
        var q1 = $("<div>");
        $(q1).addClass("answers")
        $(q1).attr("name", answers1[i]);
        $(q1).append(answers1[i]);
        $(qanda).append(q1);
        
    }
    $('.answers').on( 'mouseenter mouseleave', function() {
        $(this).toggleClass('answersH');
     }
  );
    $(".answers").on("click", function(){
        var name = $(this).attr("name");
        selected = true;
            if($(this).attr("name") == answer){
               
                correct ++;
                
                $(".gamecontainer").html('');
                var win = $("<div>")
               $(win).append("<h2>Correct! Bjergsen has the most kills of all time in NA!</h2>");
               $(win).append(image3); 
             
               $(".gamecontainer").append(win)
               stop();
               var timerz = setInterval(timez, 1000);
               secs = 4
               function timez(){
                   secs --;
                   console.log(secs);
                   if(secs == 0){
                       $(".gamecontainer").html('');
                       console.log("reset");
                       Stage4();
                       clearInterval(timerz);
                   }
               }
               
            }
            else{
                
                incorrect ++;
                $(".gamecontainer").html('');
         var win = $("<div>")
        $(win).append("<h2>Incorrect! " + name + " does not have the most kills. Bjergsen has the most kills of all time in NA!</h2>");
        $(win).append(image3); 
      
        $(".gamecontainer").append(win)
        stop();
        var timerz = setInterval(timez, 1000);
        secs = 4
        function timez(){
            secs --;
            console.log(secs);
            if(secs == 0){
                $(".gamecontainer").html('');
                console.log("reset");
                Stage4();
                clearInterval(timerz);
            }
        }
        
               
            }
    });
  

        var timer = setInterval(function(){
        timeleft--;
        document.getElementById("timer").textContent = timeleft;
        console.log(timeleft);
        if(selected == false){
        
        if(timeleft <= 0){
            unanswered ++;
            console.log("end");
         $(".gamecontainer").html('');
         var win = $("<div>")
        $(win).append("<h2>Times UP! Bjergsen has the most kills of all time in NA!</h2>");
        $(win).append(image3); 
      
        $(".gamecontainer").append(win)
        stop();
        var timerz = setInterval(timez, 1000);
        secs = 4
        function timez(){
            secs --;
            console.log(secs);
            if(secs == 0){
                $(".gamecontainer").html('');
                console.log("reset");
                
                Stage4();
                clearInterval(timerz);
            }
        }
        
        
        }
                
        }
        else{
            
        }
        
        if(timeleft <= 0)
            clearInterval(timer);
        },1000);
        function stop() {
            clearInterval(timer);
        }

        
    
   
 
   }




   function Stage4(){
    selected = false;
    qanda = $("<div>")
    var time22 = $("<h2> Time left: <p id = timer>30</h2></p>")
    $(".gamecontainer").prepend(time22);
    timeleft = 30;
    $(".gamecontainer").prepend("<h1>Leauge of Legends Trivia!</h1>");
    console.log("Stage4");
   var stage1 = $("<div>");
   $(stage1).addClass("questions");
   var question1 = "Who is the most recent victor of the NA LCS?";
   var answers1 =  ["Team Solo Mid","Cloud 9","Team Liqud","Counter Logic Gaming"]
   answer = "Team Liqud";
   $(stage1).text(question1);
   $(qanda).append(stage1);
   $(".gamecontainer").append(qanda);
   
    for(i = 0; i<answers1.length; i++){
        
        var q1 = $("<div>");
        $(q1).addClass("answers")
        $(q1).attr("name", answers1[i]);
        $(q1).append(answers1[i]);
        $(qanda).append(q1);
        
    }
    $('.answers').on( 'mouseenter mouseleave', function() {
        $(this).toggleClass('answersH');
     }
  );
    $(".answers").on("click", function(){
        var name = $(this).attr("name");
        selected = true;
            if($(this).attr("name") == answer){
               
                correct ++;
                
                $(".gamecontainer").html('');
                var win = $("<div>")
               $(win).append("<h2>Correct! Team Liquid won Spring 2018.</h2>");
               $(win).append(image4); 
             
               $(".gamecontainer").append(win)
               stop();
               var timerz = setInterval(timez, 1000);
               secs = 4
               function timez(){
                   secs --;
                   console.log(secs);
                   if(secs == 0){
                       $(".gamecontainer").html('');
                       console.log("reset");
                       Stage5();
                       clearInterval(timerz);
                   }
               }
               
            }
            else{
                
                incorrect ++;
                $(".gamecontainer").html('');
         var win = $("<div>")
        $(win).append("<h2>Incorrect! " + name + " did not win NA LCS. Team Liquid won Spring 2018.</h2>");
        $(win).append(image4); 
      
        $(".gamecontainer").append(win)
        stop();
        var timerz = setInterval(timez, 1000);
        secs = 4
        function timez(){
            secs --;
            console.log(secs);
            if(secs == 0){
                $(".gamecontainer").html('');
                console.log("reset");
                Stage5();
                clearInterval(timerz);
            }
        }
        
               
            }
    });
  

        var timer = setInterval(function(){
        timeleft--;
        document.getElementById("timer").textContent = timeleft;
        console.log(timeleft);
        if(selected == false){
        
        if(timeleft <= 0){
            unanswered ++;
            console.log("end");
         $(".gamecontainer").html('');
         var win = $("<div>")
        $(win).append("<h2>Times UP! Team Liquid won Spring 2018.</h2>");
        $(win).append(image4); 
      
        $(".gamecontainer").append(win)
        stop();
        var timerz = setInterval(timez, 1000);
        secs = 4
        function timez(){
            secs --;
            console.log(secs);
            if(secs == 0){
                $(".gamecontainer").html('');
                console.log("reset");
                
                Stage5();
                clearInterval(timerz);
            }
        }
        
        
        }
                
        }
        else{
            
        }
        
        if(timeleft <= 0)
            clearInterval(timer);
        },1000);
        function stop() {
            clearInterval(timer);
        }

        
    
   
 
   }







   function Stage5(){
    selected = false;
    qanda = $("<div>")
    var time22 = $("<h2> Time left: <p id = timer>30</h2></p>")
    $(".gamecontainer").prepend(time22);
    timeleft = 30;
    $(".gamecontainer").prepend("<h1>Leauge of Legends Trivia!</h1>");
    console.log("Stage5");
   var stage1 = $("<div>");
   $(stage1).addClass("questions");
   var question1 = "What team does Faker play for?";
   var answers1 =  ["E.G","Curse","Team Solo Mid","SKT T1"]
   answer = "SKT T1";
   $(stage1).text(question1);
   $(qanda).append(stage1);
   $(".gamecontainer").append(qanda);
   
    for(i = 0; i<answers1.length; i++){
        
        var q1 = $("<div>");
        $(q1).addClass("answers")
        $(q1).attr("name", answers1[i]);
        $(q1).append(answers1[i]);
        $(qanda).append(q1);
        
    }
    $('.answers').on( 'mouseenter mouseleave', function() {
        $(this).toggleClass('answersH');
     }
  );
    $(".answers").on("click", function(){
        var name = $(this).attr("name");
        selected = true;
            if($(this).attr("name") == answer){
               
                correct ++;
                
                $(".gamecontainer").html('');
                var win = $("<div>")
               $(win).append("<h2>Correct! Faker plays for SKT T1.</h2>");
               $(win).append(image5); 
             
               $(".gamecontainer").append(win)
               stop();
               var timerz = setInterval(timez, 1000);
               secs = 4
               function timez(){
                   secs --;
                   console.log(secs);
                   if(secs == 0){
                       $(".gamecontainer").html('');
                       console.log("reset");
                       endgame();
                       clearInterval(timerz);
                   }
               }
               
            }
            else{
                
                incorrect ++;
                $(".gamecontainer").html('');
         var win = $("<div>")
        $(win).append("<h2>Incorrect! " + name + " is not the team Faker plays for. Faker plays for SKT T1.</h2>");
        $(win).append(image5); 
      
        $(".gamecontainer").append(win)
        stop();
        var timerz = setInterval(timez, 1000);
        secs = 4
        function timez(){
            secs --;
            console.log(secs);
            if(secs == 0){
                $(".gamecontainer").html('');
                console.log("reset");
                endgame();
                clearInterval(timerz);
            }
        }
        
               
            }
    });
  

        var timer = setInterval(function(){
        timeleft--;
        document.getElementById("timer").textContent = timeleft;
        console.log(timeleft);
        if(selected == false){
        
        if(timeleft <= 0){
            unanswered ++;
            console.log("end");
         $(".gamecontainer").html('');
         var win = $("<div>")
        $(win).append("<h2>Times UP! Faker plays for SKT T1.</h2>");
        $(win).append(image5); 
      
        $(".gamecontainer").append(win)
        stop();
        var timerz = setInterval(timez, 1000);
        secs = 4
        function timez(){
            secs --;
            console.log(secs);
            if(secs == 0){
                $(".gamecontainer").html('');
                console.log("reset");
                
                endgame();
                clearInterval(timerz);
            }
        }
        
        
        }
                
        }
        else{
            
        }
        
        if(timeleft <= 0)
            clearInterval(timer);
        },1000);
        function stop() {
            clearInterval(timer);
        }

        
    
   
 
   }

   function endgame(){
       audio.pause();
       audio2.load();
    audio2.play();
       
        
        
        $(".gamecontainer").prepend("<h1>Leauge of Legends Trivia!</h1>");
        $(".gamecontainer").append("<h3>Complete! This is how you did!<h3>");
        $(".gamecontainer").append("<h2>Correct answers: " + correct + "<h2>");
        $(".gamecontainer").append("<h2>Incorrect answers: " + incorrect + "<h2>");
        $(".gamecontainer").append("<h2>Unanswered: " + unanswered + "<h2>");
       playagainbutton = $("<button>")
       $(playagainbutton).addClass("playagainbutton");
       $(playagainbutton).on( 'mouseenter mouseleave', function() {
        $(this).toggleClass('playagainbuttonhuge');
     });
        $(playagainbutton).text("Play again?");
       $(".gamecontainer").append(playagainbutton);
       $(playagainbutton).on("click", function(){
           $(this).hide();
           $(".gamecontainer").html('');
           audio2.pause();
           GameStart();
       })
       
       
   }


   
 
 
});