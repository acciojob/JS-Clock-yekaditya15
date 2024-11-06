function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
  const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;
  const minuteDeg = minutes * 6 + (seconds / 60) * 6;
  const secondDeg = seconds * 6;
  
  document.querySelector('.hour-hand').style.transform = `rotate(${hourDeg}deg)`;
  document.querySelector('.min-hand').style.transform = `rotate(${minuteDeg}deg)`;
  document.querySelector('.second-hand').style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
