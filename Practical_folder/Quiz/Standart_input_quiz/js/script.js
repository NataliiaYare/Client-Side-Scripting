let questions = [
  "Q1: What is the capital city of Scotland?",
  "Q2: What is the capital city of Ireland?",
  "Q3: What is the capital city of Peru?",
];

function setQuestions() {
  for (var i = 0; i < questions.length; i++) {
    document.getElementById("q" + i).innerHTML = questions[i];
  }
}

function checkAnswers() {
  let ansQ0 = document.getElementById("aq0").value;
  let ansQ1 = document.getElementById("aq1").value;
  let ansQ2 = document.getElementById("aq2").value;

  let counter = 0;

  if (ansQ0.toLowerCase() === "edinburgh") {
    counter++;
    document.getElementById("q0").style.backgroundColor = "green";
    document.getElementById("q0").innerHTML =
      "Correct, the capital city of Scotland is Edinburgh";
  } else {
    document.getElementById("q0").style.backgroundColor = "red";
    document.getElementById("q0").innerHTML =
      "Incoorrect, the capital city of Scotland is Edinburgh";
  }

  if (ansQ1.toLowerCase() === "dublin") {
    counter++;
    document.getElementById("q1").style.backgroundColor = "green";
    document.getElementById("q1").innerHTML =
      "Correct, the capital city of Ireland is Dublin";
  } else {
    document.getElementById("q1").style.backgroundColor = "red";
    document.getElementById("q1").innerHTML =
      "Incoorrect, the capital city of Ireland is Dublin";
  }

  if (ansQ2.toLowerCase() === "lima") {
    counter++;
    document.getElementById("q2").style.backgroundColor = "green";
    document.getElementById("q2").innerHTML =
      "Correct, the capital city of Peru is Lima";
  } else {
    document.getElementById("q2").style.backgroundColor = "red";
    document.getElementById("q2").innerHTML =
      "Incoorrect, the capital city of Peru is Lima";
  }

  document.getElementById("score").innerHTML = "Score: " + counter;
}
