// Timer
let timer;
function startTimer() {
  clearInterval(timer);
  let minutes = document.getElementById("minutes").value;
  let time = minutes * 60;
  const display = document.getElementById("timeDisplay");

  timer = setInterval(() => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    display.textContent = `${min}:${sec < 10 ? "0" : ""}${sec}`;
    time--;

    if (time < 0) {
      clearInterval(timer);
      display.textContent = "Time’s up! ☕";
    }
  }, 1000);
}

// Affirmation
const affirmations = [
  "You're doing enough.",
  "You're amazing.",
  "Take a nap and rest — you deserve it.",
  "You're stronger than you think.",
  "It’s okay to take things slow.",
  "You’re worthy of love and care.",
  "Be gentle with yourself.",
  "You’re doing your best, and that’s enough.",
  "Your feelings are valid.",
  "Rest is productive too.",
  "You’ve already come so far.",
  "You don’t need to have it all figured out.",
  "You’re allowed to take a break.",
  "You make a difference.",
  "One step at a time is still progress.",
  "You are loved, just as you are.",
  "It’s okay to ask for help.",
  "You’re not alone in this.",
  "You’re more capable than you realize.",
  "Celebrate the small wins.",
  "It’s okay to say no.",
  "You matter."
];

function giveAffirmation() {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  document.getElementById("affirmationOutput").textContent =
    affirmations[randomIndex];
}
