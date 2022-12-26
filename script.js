var random;
let t;
let myTimer;
let myScore = 0;
let inputTime = 0;
let is_time_up = false;
let is_startBtn_clicked = false;

reset();

$(".word").click(function () {
  if (is_startBtn_clicked && !is_time_up) {
    newWord();
  }
});

$(".hint").click(function () {
  $.getJSON("./EoMword.json", function (data) {
    var hint = data.data[random].note;
    $("#hint").text(hint);
  });
});

function getRandom() {
  random = Math.floor(Math.random() * 44999);
}

//產生新詞
function newWord() {
  $("#hint").text("");
  $.getJSON("./EoMword.json", function (data) {
    getRandom();
    var answer = data.data[random].title;
    $("#word").text(answer);
  });
}

$("#startBtn").click(start);
$("#reset").click(reset);
$("#correctBtn").click(addOnePoint);

function start() {
  inputTime = $("#inputText").val();
  if (inputTime <= 0) {
    $("#second").text("時間需大於 0！");
    $("#second").show();
  } else {
    is_startBtn_clicked = true;
    myScore = 0;
    $("#second").text(inputTime);
    myTimer = setInterval(minusOneSecond, 1000);
    $("#second").show();
    $("#startBtn").hide();
    $("#scoreboard").show();
    $("#reset").show();
    $("#word").show();
    $("#hint").show();
    $("#inputText").val(null);
    $("#inputText").hide();
  }
}

function minusOneSecond() {
  if (inputTime > 0) {
    inputTime--;
    $("#second").text(inputTime);
  } else {
    clearInterval(myTimer);
    second.innerText = "Time's up!";
    is_time_up = true;
  }
}

function addOnePoint() {
  if (!is_time_up) {
    myScore++;
    score.innerText = myScore;
  }
}

function reset() {
  $("#second").hide();
  $("#startBtn").show();
  $("#scoreboard").hide();
  $("#reset").hide();
  $("#word").hide();
  $("#hint").hide();
  $("#inputText").show();
  myScore = 0;
  score.innerText = myScore;
  is_time_up = false;
  is_startBtn_clicked = false;
  newWord();
  //原本是按 Start 才 newWord，但是每次顯示之後都要先跑一下才會換新的詞，所以改成reset時就先換好詞
}
