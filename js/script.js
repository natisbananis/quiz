/* global $ */
var quiz = function() {
    var self = this;
    this.init = function() {
        self._bindEvents();
    
}

this.correctAnswers = [{
    question: 1, 
    answer: 'Y'
}, {
    question: 2,
    answer: 'Y'
}, { 
    question: 3,
    answer: 'Y'
},{
    question: 4, 
    answer: 'Y'
},]

this._pickAnswer = function($answer, $answers) {
    $answers.find('.quiz-answer').removeClass('active');
    $answer.addClass('active');
}
this.calcResult = function() {
    var numberOfCorrectAnswers = 0;
    $('ul[data-quiz-question]').each(function(i) {
        var $this = $(this),
        chosenAnswer = $this.find('.quiz-answer.active').data('quiz-answer'),
        correctAnswer;
        
    for(var j = 0; j < self.correctAnswers.length; j++) {
    if (a.question == $this.data('quiz-question')) {
        correctAnswer = a.answer;
    }
  }
    
    if (chosenAnswer == correctAnswer) {
        numberOfCorrectAnswers++;
    }
    
    $this.find('.quiz-answer.active').addClass('correct'); 
   } else {
      $this.find('quiz-answer[data-quiz-answer="' + correctAnswer + )
      $this.find('quiz-answer.active').addClass('incorrect');
  }
    

//$(document).ready(function() {
    //$("button").click(function() {
       // var name = $("#name").val();
        //var techPlacement = "TBD";
        //var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
       // var q1Result = $("#question1").val();
       // var q2Result = $("#question2").val();
       // var q3Result = $("#question3").val();
       // var totalScore;
    //});
    
    //function question1(input) {
    //  if (input === 'red') {
     //   return 1; 
  //  } else if (input === 'green') {
        //return 2;
  //  } else if (input === 'yellow') {
        //return 3;
  //  } else if (input === 'blue') {
       // return 4;
        
//}
   // function question2(input) {
      //  if (input === 'war') {
       //     return 1;
       // } else if (input === 'loneliness') {
        //    return 2;
       // } else if (input === 'spiders') { 
        //    return 3;
       // } else if (input === 'people') {
           // return 4;
      //  }
   // }
    
   // function question3(input) { 
    //    if (input === 'Bruno Mars') {
       //         return 1;
       // } else if (input === 'Ariana Grande') {
       //         return 2;
       // } else if (input === 'Cardi B') {
       //         return 3;
      //  } else if (input === 'Ed Sheeran') {
       //         return 4;
      //  }
            
   // function question4(input) {
      //  if (input === 'super strength') {
          //      return 1; 
      //  } else if (input === 'ability to change size') {
        //        return 2;
       // } else if (input === 'turn green') {
          //      return 3;
       // } else if (input === 'read minds') {
      //          return 4; 
      //  }
            
   // function totalScore(score1, score2, score3, score4) {
        
      //  var result = score1 + score2 + score3 + score4; 
        //    if (result > 16 )
        
  //  }   
            
            
            
   // });
