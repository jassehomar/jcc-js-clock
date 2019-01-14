let currentDate = new Date();

console.log(currentDate.getDate());

let dayOfTheWeek = {

    0: 'Sunday',
    1: 'Saturday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Saturday',
};

let timeTogglerButton = document.querySelector('.button');

let counter = 0;

// let greeting = 'Morning';


let timerId = setInterval(() => {

    let currentDate = new Date();

    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentSecond = currentDate.getSeconds();

    console.log(`current time is ${currentHour < 10 ? '0' + currentHour: currentHour }:${currentMinute < 10 ? '0' + currentMinute : currentMinute}:${currentSecond < 10 ? '0' + currentSecond: currentSecond}`);

    let currentTime = `${currentHour < 10 ? '0' + currentHour: currentHour }:${currentMinute < 10 ? '0' + currentMinute : currentMinute}:${currentSecond < 10 ? '0' + currentSecond: currentSecond}`;
    
    let greeting = currentHour >= 17 ? 'Evening' : ( currentHour >= 12 ) ? 'Afternoon' : 'Morning';  
    document.querySelector('.greeting').innerHTML = greeting;

    document.querySelector('.current-time').innerHTML = currentTime;

    counter++;
    
    counter == 60 ? clearInterval(timerId) : '';

}, 1000);

let togglerClasses = timeTogglerButton.classList;

timeTogglerButton.addEventListener('click', (event) => {
    console.log(timeTogglerButton.classList);
    Array.from(togglerClasses).includes('level-item') ? alert('yes') : alert('no');
});


