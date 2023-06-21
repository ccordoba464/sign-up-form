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
    } else {
      passwordOneInput.classList.remove("error");
      passwordTwoInput.classList.remove("error");
    }
  });
});
