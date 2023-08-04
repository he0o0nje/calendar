const date = new Date();
const currYear = date.getFullYear(),
  currMonth = date.getMonth() + 1;
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
const daysTag = document.querySelector('#tbl_month');

const renderCalendar = () => {
  currDate.innerHTML = `${months[currMonth]} ${currYear}`;
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let tbTag = ''; 
  for (let i = 1; i <= lastDateofMonth; i++) {
    tbTag += `<tr>
    <td class="sun"><a>${i}</a></td>
</tr>`;}
daysTag.innerHTML = tbTag;
};
renderCalendar();