function setCookie(name, value, days) {
  const date = new Date();

  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name} = ${value}; expires = ${date.toUTCString()}; path = /`;
}

//  add event listener to handel form submission

document
  .getElementById("signUpForm")
  .addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    setCookie(name, name, 7);

    alert(`Cookie Set Name: ${name}, Value: ${email} `);
  });
