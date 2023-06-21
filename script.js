document.addEventListener("DOMContentLoaded", function () {
  const passwordOneInput = document.getElementById("passwordOne");
  const passwordTwoInput = document.getElementById("passwordTwo");
  const submitButton = document.getElementById("submit-button");

  submitButton.addEventListener("click", e => {
    e.preventDefault();

    let passwordOne = passwordOneInput.value;
    let passwordTwo = passwordTwoInput.value;

    if (passwordOne !== passwordTwo) {
      passwordOneInput.classList.add("error");
      passwordTwoInput.classList.add("error");
      console.log("test");
    } else {
      passwordOneInput.classList.remove("error");
      passwordTwoInput.classList.remove("error");
      console.log("test1");
    }
  });
});
