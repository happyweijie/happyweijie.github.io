// Verify answer for multiple choice question
let questions = document.querySelectorAll(".question");

questions.forEach(question => {
  // Options
  let options = question.querySelectorAll(".option");

  options.forEach(option => {
    option.addEventListener("click", () => {
      // Reset all option colors
      options.forEach(opt => {
        opt.style.backgroundColor = "";
      });

      // Correct or wrong answer
      if (option.classList.contains("correct")) {
        option.style.backgroundColor = "green";
        question.querySelector(".status").innerHTML = "Correct!";

        // Disable all options after selection
        options.forEach(opt => {
          opt.disabled = true;
        });
      } else {
        option.style.backgroundColor = "red";
        question.querySelector(".status").innerHTML = "Incorrect!";
      }
    });
  });
});

// Open-ended
document.querySelector("#submitBtn").addEventListener("click", () => {
  let input = document.querySelector("#response");
  if (input.value.toLowerCase() === "hydrogen") {
    input.style.backgroundColor = "green";
    document.querySelector("#q3-status").innerHTML = "Correct!";

    input.disabled = true;
    document.querySelector("#submitBtn").disabled = true;
  } else {
    input.style.backgroundColor = "red";
    document.querySelector("#q3-status").innerHTML = "Incorrect";
  }
});
