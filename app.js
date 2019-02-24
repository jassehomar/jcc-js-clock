let currentDate = new Date();

let timeTogglerButton = document.querySelector(".button");

let acceptToShowTimeButton = document.querySelector(".yes-show-time");

let rejectToShowTimeButton = document.querySelector(".no-show-time");

let timerBox = document.querySelector(".box");

let digitalClock = document.querySelector(".current-time");

let showHidenElements = document.querySelectorAll(".hide");

let timeFormatToggler = document.querySelector(".select");

// let alarmSetter = document.querySelector(".alarm-setter");
let setAlarmButton = document.querySelector(".set-alarm");

let alarm = "";

let togglerClasses = timeTogglerButton.classList;

let timeFormat = "twentyfourhours";

/* alarmSetter.addEventListener("click", event => {
  event.preventDefault();
  alert("you clicked the alarm setter button");
}); */
setAlarmButton.addEventListener("click", event => {
  event.preventDefault();
  let alarmHour = document.querySelector("select[name=hour]").value;
  let alarmMinutes = document.querySelector("select[name=minute]").value;
  let alarmSeconds = document.querySelector("select[name=second]").value;
  alarm = `${alarmHour}:${alarmMinutes}:${alarmSeconds}`;
  // alert(`you set the alarm to ${alarmHour}:${alarmMinutes}:${alarmSeconds}`);
});
let timerId = setInterval(() => {
  let currentDate = new Date();

  let currentHour = currentDate.getHours();
  let currentMinute = currentDate.getMinutes();
  let currentSecond = currentDate.getSeconds();

  let timeFormatSymbol = currentHour >= 12 ? "PM" : "AM";

  let currentTime = "";

  if (timeFormat == "twentyfourhours") {
    let formattedHour = currentHour < 10 ? "0" + currentHour : currentHour;

    let formattedMinutes =
      currentMinute < 10 ? "0" + currentMinute : currentMinute;

    let formattedSeconds =
      currentSecond < 10 ? "0" + currentSecond : currentSecond;

    currentTime = `${formattedHour}:${formattedMinutes}:${formattedSeconds}
                 `;
  } else {
    currentTime = `
                   ${currentHour > 12 ? currentHour - 12 : currentHour}:${
      currentMinute < 10 ? "0" + currentMinute : currentMinute
    }:${currentSecond < 10 ? "0" + currentSecond : currentSecond} 
                    ${timeFormatSymbol}
                 `;
  }

  let greeting =
    currentHour >= 17 ? "Evening" : currentHour >= 12 ? "Afternoon" : "Morning";

  document.querySelector(".greeting").innerHTML = greeting;
  console.log(currentTime.trim(), alarm);
  digitalClock.innerHTML = currentTime;
  let audioStarted = 1;
  let audio = new Audio("alarm.mp3");
  if (currentTime.trim() == alarm && audioStarted == 1) {
    audioStarted = 0;

    alarmRingConter = 0;
    audio.play();
    audio.onended = function() {
      // alert("The audio has ended");
      alarmRingConter++;

      audio.currentTime = 0;
      audio.play();
      if (alarmRingConter == 3) {
        audio.currentTime = 0;
        audio.pause();
      }
    };
    /* let alarmId = setInterval(() => {
      console.log(alarmId);
      audio.play();
      alarmRingConter++;
      console.log(alarmRingConter);
      if (alarmRingConter == 5) {
        clearInterval(alarmId);
        // audio.pause();
        // audio.currentTime = 0;
      }
    }, 0); */
  }
}, 1000);

timeTogglerButton.addEventListener("click", event => {
  document.querySelector(".welcome").style.display = "none";

  showHidenElements.forEach(element => {
    element.classList.replace("hide", "show");
  });

  timeTogglerButton.innerHTML = "Hide Digital Clock";

  if (timeTogglerButton.classList.contains("clock-shown")) {
    timeTogglerButton.innerHTML = "Show Digital Clock";

    showHidenElements.forEach(element => {
      element.classList.replace("show", "hide");
    });
  }

  timeTogglerButton.classList.toggle("clock-shown");
});

acceptToShowTimeButton.addEventListener("click", event => {
  document.querySelector(".welcome").style.display = "none";

  showHidenElements.forEach(element => {
    element.classList.replace("hide", "show");
  });

  timeTogglerButton.innerHTML = "Hide Digital Clock";
  timeTogglerButton.classList.add("clock-shown");
});

timeFormatToggler.addEventListener("change", event => {
  timeFormat = event.target.value == "12" ? "twelvehours" : "twentyfourhours";
});

rejectToShowTimeButton.addEventListener("click", event => {
  document.querySelector(".welcome").style.display = "none";
});
