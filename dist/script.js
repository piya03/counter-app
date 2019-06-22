const counter = document.querySelector(".counter");
const addCounter = document.querySelector("#addCounter");
const minusCounter = document.querySelector("#minusCounter");
let count = 0;

addCounter.addEventListener("click", incrementCount);
minusCounter.addEventListener("click", decrementCount);

function incrementCount() {
  count++;
  counter.innerHTML = count;
  if (counter.innerHTML > "0") {
    counter.style.color = "green";
  } else if(counter.innerHTML === "0") {
    counter.style.color = "gray";
  }

  counter.animate([{ opacity: ".3" }, { opacity: "1" }], {
    duration: 500,
    fill: "forwards"
  });
}
function decrementCount() {
  count--;
  counter.innerHTML = count;
  if (counter.innerHTML < "0") {
    counter.style.color = "red";
  } else if(counter.innerHTML === "0") {
    counter.style.color = "white";
  }

  counter.animate([{ opacity: ".3" }, { opacity: "1" }], {
    duration: 500,
    fill: "forwards"
  });
}