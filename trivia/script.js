// Verify answer for multiple choice question
document.addEventListener("DOMContentLoaded", function () {
  // Correct Answers
  let corrects = document.querySelectorAll(".correct");
  for (let i = 0; i < corrects.length; i++) {
    corrects[i].addEventListener("click", function () {
      corrects[i].style.backgroundColor = "green";
      document.getElementById(corrects[i].classList[1] + "-status").innerHTML =
        "Correct!";
    });
  }

  // Wrong answers
  let wrongs = document.querySelectorAll(".wrong");
  for (let i = 0; i < wrongs.length; i++) {
    wrongs[i].addEventListener("click", function () {
      wrongs[i].style.backgroundColor = "red";
      document.getElementById(wrongs[i].classList[1] + "-status").innerHTML =
        "Incorrect!";
    });
  }
});

// Open-ended
document.querySelector("#submitBtn").addEventListener("click", function () {
  let input = document.querySelector("#response");
  if (input.value.toLowerCase() === "hydrogen") {
    input.style.backgroundColor = "green";
    document.querySelector("#q3-status").innerHTML = "Correct!";
  } else {
    input.style.backgroundColor = "red";
    document.querySelector("#q3-status").innerHTML = "Incorrect";
  }
});
