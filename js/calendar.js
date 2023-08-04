let date = new Date();
let currYear = date.getFullYear(),
  currMonth = date.getMonth();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const currDate = document.querySelector(".month_this");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".month_move");

const renderCalendar = () => {
  currDate.innerHTML = `${months[currMonth]} ${currYear}`;
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let liTag = "";
  for (let i = 1; i <= lastDateofMonth; i++) {
    liTag += `<li>${i}</li>`;
  }

  daysTag.innerHTML = liTag;

  prevNextIcon.forEach((icon) => {
    icon.addEventListener("click", () => {
      currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

      renderCalendar();
    });
  });

  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class = "hide">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class = "hide">${i - lastDayofMonth + 1}</li>`;
  }
};
renderCalendar();
