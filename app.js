
const countdownElement = document.getElementById('countdown');
const monthsElement = countdownElement.querySelector('#months');
const daysElement = countdownElement.querySelector('#days');
const hoursElement = countdownElement.querySelector('#hours');
const minutesElement = countdownElement.querySelector('#minutes');
const secondsElement = countdownElement.querySelector('#seconds');

// EVENT DATE
const endDate = new Date('2024-05-14 12:00:00');
let secondsLeft = (endDate.getTime() - new Date().getTime()) / 1000;

function updateCountdown() {
  secondsLeft -= 1;

  const months = Math.floor(secondsLeft / (86400 * 30));
  monthsElement.textContent = months < 10 ? '0' + months : months;

  const days = Math.floor((secondsLeft / 86400) % 30);
  daysElement.textContent = days < 10 ? '0' + days : days;

  const hours = Math.floor((secondsLeft % 86400) / 3600);
  hoursElement.textContent = hours < 10 ? '0' + hours : hours;

  const minutes = Math.floor((secondsLeft % 3600) / 60);
  minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;

  const seconds = Math.floor(secondsLeft % 60);
  secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;


  if (secondsLeft <= 0) {
    const countdownContent = document.querySelector('.countdown-content');
    const countdownContentFinal = document.querySelector('.countdown-content-final');
    countdownContent.classList.add('d-none');
    countdownContentFinal.classList.add('d-flex');
  }
}

setInterval(updateCountdown, 1000);