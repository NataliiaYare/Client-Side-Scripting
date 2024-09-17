let counter = 0;

const activeUsers = [
  { username: "minion", password: "123" },
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" },
  { username: "user4", password: "password4" },
];

function check() {
  let getUser = document.getElementById("user").value;
  let getPassword = document.getElementById("password").value;

  // variable to track if a valid user is found
  let userFound = false;

  for (let i = 0; i < activeUsers.length; i++) {
    if (
      activeUsers[i].username === getUser &&
      activeUsers[i].password === getPassword
    ) {
      userFound = true;
      document.getElementById("feedback").innerHTML = `Access: Granted &#1004;`;
      document.getElementById("feedback").style.color = "green";

      setTimeout(() => {
        window.location.href = "./accessGrated.html";
      }, 3000);
      break;
    }
  }
  if (!userFound) {
    counter++;
    document.getElementById(
      "feedback"
    ).innerHTML = `Access: Denied. Try again &#1008;`;
    document.getElementById("feedback").style.color = "red";
  }
  if (counter === 3) {
    document.getElementById(
      "feedback"
    ).innerHTML = `Access: Denied Contact Admin &#10071; &#10071;`;
    document.getElementById("feedback").style.color = "red";
    document.getElementById("user").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("butt").disabled = true;
  }
}
