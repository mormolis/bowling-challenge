
function createButtons(number){
  let button ;
  for(let j=0; j<=number; j++){
    button = $("<button name='#pins' value=" + j+ "></button>").text(j);
    $("buttonArea").append(button); 
  }
}
$(document).ready(function () {


  game = new Game();
  
    $(".thead").html(function (i, origText) {
      return origText + "<th class='theader'> Round </th>";
    });
    for (var j = 0; j < game.frames.length; j++) {
      $(".thead").html(function (i, origText) {
        return origText + "<th class='theader"+j+"'>" + (j+1).toString() + "</th>";
      });
    }
  
    $(".fscorer").html(function (i, origText) {
      return origText + "<td class='fscorec'> Score </td>";
    });
    ////
    for (var j = 0; j < game.frames.length; j++) {
      $(".fscorer").html(function (i, origText) {
        // console.log(game.frames);
        return origText + "<td class='fscorec"+j+"'>" + game.frames[j].frameTotal() + "</td>";
      });
    }
  
    $(".rollzeror").html(function (i, origText) {
      return origText + "<td class='rollzeroc'> Roll One Round</td>";
    });
    for (var j = 0; j < game.frames.length; j++) {
      $(".rollzeror").html(function (i, origText) {
        return origText + "<td class='rollzeroc"+j+"'>" + game.frames[j].rolls[0] + "</td>";
      });
    }
  
    $(".rolloner").html(function (i, origText) {
      return origText + "<td class='rollzeroc'> Roll Two Round</td>";
    });
    for (var j = 0; j < game.frames.length; j++) {
      $(".rolloner").html(function (i, origText) {
        return origText + "<td class='rollonec"+j+"'>" + game.frames[j].rolls[1] + "</td>";
      });
    }
  
    $(".bonusone").html(function (i, origText) {
      return origText + "<td class='bonusonec'> Bonus Round 1</td>";
    });
    for (var j = 0; j < 9; j++) {
      $(".bonusone").html(function (i, origText) {
        return origText + "<td class='bonusonec"+j+"'>" + game.frames[j].bonus[0] + "</td>";
      });
    }
    $(".bonustwo").html(function (i, origText) {
      return origText + "<td class='bonustwoc'> Bonus Round 2</td>";
    });
    for (var j = 0; j < 9; j++) {
      $(".bonustwo").html(function (i, origText) {
        return origText + "<td class='bonustwoc"+j+"'>" + game.frames[j].bonus[1] + "</td>";
      });
    }

  function updatePage(){
    for (var j = 0; j < 9; j++) {
      $(".fscorec"+j).text(game.frames[j].frameTotal());
      $(".rollzeroc"+j).text(game.frames[j].rolls[0]);
      $(".rollonec"+j).text(game.frames[j].rolls[1]);
      $(".bonusonec"+j).text(game.frames[j].bonus[0]);
      $(".bonustwoc"+j).text(game.frames[j].bonus[1]);
      
    }
    $("#totalScore").text(game.totalScore());
  }
  
  createButtons(10);
  
    
  $("button").click(function () {
    $("#error").text("");
    try{
      if (game.currentFrame().hasStrike()){
        $('#jff').html('<img class="jff" src="images/lebostrike.gif" />');
  
      } else if (parseInt($(this).val()) === 0){
        $('#jff').html('<img class="jff" src="images/lebogutter.gif" />');
      } else if(game.currentFrame().hasSpare()){
        $('#jff').html('<img class="jff" src="images/lebospare.gif" />');

      }else  {
        $('#jff').html('<img class="jff" src="images/leboplay.gif" />');
      }

      game.throwBall(parseInt($(this).val()));
      
    } catch(e) {
      if (!e.message.startsWith("Game")){
        $('#jff').html('<img class="jff" src="images/rules.gif" />');
      } else {
        $('#jff').html('<img class="jff" src="images/biglebowskidream.jpg" />');
      }
      
      $("#error").text(e.message);
    }
    
    updatePage();
  });



});