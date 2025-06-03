

function edit(element) {
    var event = prompt("enter your special event");
    localStorage.setItem("event", event);
    element.querySelector(".circle").style.display = "block";
    var Date = element.querySelector(".class_");
    var newDate = Date.innerHTML;
    console.log(newDate);
}


