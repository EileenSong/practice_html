


let time = 30; // 게임시간
let gameInterval; // 인터벌id

let score =0; //게임점수
let scoreSpan = document.getElementById("score"); //점수
let timeSpan = document.getElementById("time"); //시간
let mole = document.getElementById("mole");//두더지

function randomPosition(){
    let x = Math.floor(Math.random() * 500); //500px이내 x 위치
    let y = Math.floor(Math.random() * 500); //500px이내 y 위치
    mole.style.left = x + "px";
    // 자바스크립 탬플릿 리터럴 - 숫자1 옆에 왼쪽에 있는 // 문자열 결합해서 사용할 때 쓰는 것
    // 변수 맵핑하면 텍스트랑 인식하여 결합시키는것
    mole.style.top = `${y}px`; 

}

// 두더지 나타나는 함수
function showMole(){
    randomPosition();
    mole.style.display = 'block';
    setTimeout(hideMole, 1000); // 1초 뒤에 사라지게
}
function hideMole(){mole.style.display = 'none';}

//score, span
mole.addEventListener('click', function(){
    score++;
    scoreSpan.innerText = score;
    hideMole();
});

gameInterval = setInterval(showMole, 2000);

let timeInterval = setInterval(function(){
    time--;
    timeSpan.innerText = time;
    if(time <0){
        clearInterval(gameInterval);
        clearInterval(timeInterval);
        alert(`게임 오버!! 당신의 점수는 ${score}점 입니다`);
    }
}, 1000); // 1초마다 감소되도록

