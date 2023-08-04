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
      if (currMonth < 0 || currMonth > 11) {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear(); 
        currMonth = date.getMonth(); 
      } else {
        date = new Date();
      }
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

// const memoInput = document.querySelector(".memo-input");
// const addMemoBtn = document.querySelector(".add-memo-btn");
// const memosContainer = document.querySelector(".memos");
// const dayNotes = document.querySelector(".day-notes");
// const noteText = document.querySelector(".note-text");
// const closeNoteBtn = document.querySelector(".close-note-btn");
// const days = document.querySelectorAll(".days li");

// days.forEach((day) => {
//     day.addEventListener("click", () => {
//         dayNotes.style.display = "block";
//     });
// });

// closeNoteBtn.addEventListener("click", () => {
//     dayNotes.style.display = "none";
// });

// addMemoBtn.addEventListener("click", addMemo);

// function addMemo() {
//   const memoInput = document.querySelector(".memo-input");
//   const addMemoBtn = document.querySelector(".add-memo-btn");
//   const memosContainer = document.querySelector(".memos");
  
//   addMemoBtn.addEventListener("click", addMemo);
  
//   function addMemo() {
//       const memoText = memoInput.value.trim();
//       if (memoText === "") {
//           alert("Please enter a memo.");
//           return;
//       }
  
//       const memoItem = document.createElement("div");
//       memoItem.classList.add("memo-item");
//       memoItem.innerHTML = `
//           <span>${memoText}</span>
//           <button class="delete-memo-btn">Delete</button>
//       `;
  
//       memosContainer.appendChild(memoItem);
//       memoInput.value = "";
  
//       const deleteBtn = memoItem.querySelector(".delete-memo-btn");
//       deleteBtn.addEventListener("click", () => {
//           memosContainer.removeChild(memoItem);
//       });
//   }
  
//     const selectedDay = document.querySelector(".selected-day");
//     if (selectedDay) {
//         selectedDay.classList.remove("selected-day");
//     }

//     dayNotes.style.display = "none";


// ... (기존 코드) ...

const dayNotes = document.querySelector(".day-notes");
const noteText = document.querySelector(".note-text");
const closeNoteBtn = document.querySelector(".close-note-btn");
const days = document.querySelectorAll(".days li");

days.forEach((day) => {
    day.addEventListener("click", () => {
        const selectedDay = document.querySelector(".selected-day");
        if (selectedDay) {
            selectedDay.classList.remove("selected-day");
        }
        
        day.classList.add("selected-day");
        noteText.value = ""; // Clear memo text when selecting a new day
        dayNotes.style.display = "block";
    });
});

closeNoteBtn.addEventListener("click", () => {
    const selectedDay = document.querySelector(".selected-day");
    if (selectedDay) {
        selectedDay.classList.remove("selected-day");
    }
    
    dayNotes.style.display = "none";
});

// ... (기존 코드) ...
