function getCurrentDayOfWeek() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  return dayOfWeek;
}

function getCurrentUTCTime() {
  const currentDate = new Date();
  const hours = currentDate.getUTCHours().toString().padStart(2, "0");
  const minutes = currentDate.getUTCMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getUTCSeconds().toString().padStart(2, "0");
  const milliseconds = currentDate.getUTCMilliseconds().toString().padStart(3, "0");
  return `${hours}:${minutes}:${seconds}.${milliseconds} UTC`;
}

document.addEventListener("DOMContentLoaded", function () {
  const slackUserNameElement = document.querySelector('[data-testid="slackUserName"]');
  const currentDayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
  const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

  slackUserNameElement.textContent = "ojelvia"; 

  // Update Current Day of the Week
  currentDayOfWeekElement.textContent = getCurrentDayOfWeek();

  // Update Current UTC Time
  currentUTCTimeElement.textContent = getCurrentUTCTime();
});

