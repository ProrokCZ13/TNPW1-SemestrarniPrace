let cookie = document.getElementById('cookie');
let counter = document.getElementById('counter');
let buttonOne = document.getElementById('autoClick');
let buttonFour = document.getElementById('doubleClick');


let cookies = 0;
let cookieIncrease = 1;

cookie.onclick = () => {
    cookies=cookies + cookieIncrease;
    counter.innerText = "Snakes: " + cookies;
};

const doubleClick = () =>{
  if(cookies >= 10){
    cookies = cookie - 10;
    double += 1;
  }
}
buttonFour.onclick = doubleClick;

let autoclickerInterval;

const autoClick = () => {
  if(cookies >= 1000){
    cookies = cookies - 1000;
    autoclickerInterval = setInterval(() => {
        cookies++;
        counter.innerText = "Snakes: " + cookies;
    }, 1000)
  }
}
buttonOne.onclick = autoClick;


