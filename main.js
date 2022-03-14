//랜덤번호 지정
//유저가 번호를 입력한다
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 < 유저번호 DOWN!!!!!!!!
//랜덤번호가 > 유저번호 UP!!!!!!!!
//Reset버튼을 누르면 게임이 리셋된다
//5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다.

let computerNumber = 0;
let resultArea = document.getElementById("result-Area");
let chanceArea = document.getElementById("chance-Area");
let userInput = document.getElementById("user-Input");
let playButton = document.getElementById("play-Button");
let resetButton = document.getElementById("reset-Button");
let chances = 5;
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus",function(){
  userInput.value = ''
})

function RandomPick() {
  computerNumber = Math.floor(Math.random() * 100 + 1);
  console.log(computerNumber);
}
function play() {
  let userValue = userInput.value;
  if (history.includes((userValue))) {
    resultArea.textContent = "같은 수를 입력해서 좀비가 경고합니다!";
    
  }else{
  chances--;
  chanceArea.textContent = `남은 기회 : ${chances}`;
  if (userValue == computerNumber) {
    resultArea.textContent = `맞췄습니다!`;
    playButton.disabled = true;
    return;
  }
  if (chances == 0) {
    playButton.disabled = true;
    return;
  }
  if (userValue > computerNumber) {
    resultArea.textContent = "DOWN!"
    history.push(userValue)
    console.log(history)
  } else if (userValue < computerNumber) {
    resultArea.textContent = "DOWN!"
    history.push(userValue)
    console.log(history)
  }
}
}
function reset(){
    chances = 5;
    resultArea.textContent = '결과가 나온다'
    chanceArea.textContent = `남은 기회 : ${chances}`;
    playButton.disabled = false;
}
RandomPick();
