

document.addEventListener("DOMContentLoaded", () => {
  const allDates = document.querySelectorAll(".date");

  let events = JSON.parse(localStorage.getItem("calendar-events")) || {};


  allDates.forEach(dateEl => {
    const day = dateEl.querySelector("h2").textContent;
    if (events[day]) {
      dateEl.classList.add("active");
      dateEl.querySelector(".circle").style.display = "block";
    } else {
      dateEl.querySelector(".circle").style.display = "none";
    }
  });
});

function edit(element) {
  const day = element.querySelector("h2").textContent;
  let events = JSON.parse(localStorage.getItem("calendar-events")) || {};

  let note = prompt("Enter your event for day " + day + " (leave empty to delete):", events[day] || "");

  if (note === null) return;

  if (note.trim() === "") {
    delete events[day];
    element.classList.remove("active");
    element.querySelector(".circle").style.display = "none";
  } else {
    events[day] = note.trim();
    element.classList.add("active");
    element.querySelector(".circle").style.display = "block";
  }

  localStorage.setItem("calendar-events", JSON.stringify(events));
}


function remove(element) {
  element.parentElement.parentElement.classList.remove("active");
  element.parentElement.style.display = "none";

  const day = element.parentElement.parentElement.querySelector("h2").textContent;
  let events = JSON.parse(localStorage.getItem("calendar-events")) || {};
  delete events[day];
  localStorage.setItem("calendar-events", JSON.stringify(events));
}


