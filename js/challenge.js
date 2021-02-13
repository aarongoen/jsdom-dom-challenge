let counter = document.querySelector('#counter').innerText
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const heart = document.querySelector('#heart')
const pause = document.querySelector('#pause')


let i = -1;
let ticker = setInterval(incrementTimer, 1000);
function incrementTimer() {
    i++;
    document.querySelector('#counter').innerText = i;
}
incrementTimer();

    plus.addEventListener('click', function increment() {
        i++;
    document.querySelector('#counter').innerText = i;
    });

    minus.addEventListener('click', function decrement() {
        i--;
    document.querySelector('#counter').innerText = i;
});

