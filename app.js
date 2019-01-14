let currentDate = new Date();

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

let acceptToShowTimeButton = document.querySelector('.yes-show-time');

let rejectToShowTimeButton = document.querySelector('.no-show-time');

let timerBox = document.querySelector('.box');

let digitalClock = document.querySelector('.current-time');

let showHidenElements = document.querySelectorAll('.hide');

let timeFormatToggler = document.querySelector('.select');

let togglerClasses = timeTogglerButton.classList;

let counter = 0;

let timeFormat = 'twentyfourhours';


let timerId = setInterval(() => {

    let currentDate = new Date();

    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentSecond = currentDate.getSeconds();

    let timeFormatSymbol = currentHour >= 12 ? 'PM' : 'AM';

    let currentTime = '';
    // displayTime();
    //console.log(timeFormat);
    if(timeFormat == 'twentyfourhours'){
         currentTime = `${currentHour < 10 ? '0' + currentHour: currentHour }:${currentMinute < 10 ? '0' + currentMinute : currentMinute}:${currentSecond < 10 ? '0' + currentSecond: currentSecond}`;
    }else{
        currentTime  = `${currentHour > 12 ? currentHour - 12 : currentHour }:${currentMinute < 10 ? '0' + currentMinute : currentMinute}:${currentSecond < 10 ? '0' + currentSecond: currentSecond} ${timeFormatSymbol}`;
    }
     
     
    let greeting = currentHour >= 17 ? 'Evening' : ( currentHour >= 12 ) ? 'Afternoon' : 'Morning';  
    
    document.querySelector('.greeting').innerHTML = greeting;

    digitalClock.innerHTML = currentTime;

    counter++;
    
    // counter == 60 ? clearInterval(timerId) : '';

}, 500);



timeTogglerButton.addEventListener('click', (event) => {
    
    document.querySelector('.welcome').style.display = 'none';
    
    //console.log(timeTogglerButton.classList);
    // Array.from(togglerClasses).includes('level-item') ? alert('yes') : alert('no');
    
    showHidenElements.forEach(element => {
        
        //console.log(element);
        
        element.classList.replace('hide', 'show');
       
    });
    
    timeTogglerButton.innerHTML = 'Hide Digital Clock';

    if( timeTogglerButton.classList.contains('clock-shown') ){
        
        timeTogglerButton.innerHTML = 'Show Digital Clock';

        showHidenElements.forEach(element => {
        
            element.classList.replace('show', 'hide');
        });
        //clearInterval(timerId);
    }

    timeTogglerButton.classList.toggle('clock-shown');
    
   
});

acceptToShowTimeButton.addEventListener('click', (event) => {
    
    document.querySelector('.welcome').style.display = 'none';
    
    //console.log(timeTogglerButton.classList);
    // Array.from(togglerClasses).includes('level-item') ? alert('yes') : alert('no');
    
    showHidenElements.forEach(element => {
        
        element.classList.replace('hide', 'show');
    
    });

    timeTogglerButton.innerHTML = 'Hide Digital Clock';
    timeTogglerButton.classList.add('clock-shown');
   
    
});

timeFormatToggler.addEventListener('change', (event) => {
    
    timeFormat = event.target.value == '12' ? 'twelvehours' : 'twentyfourhours'; 

});

rejectToShowTimeButton.addEventListener('click', (event) => {
    
    document.querySelector('.welcome').style.display = 'none'; 
   
});

