const passwordInput = document.getElementById("passwordInput");
const strengthText = document.getElementById("strengthText");
const siteSuggestion = document.getElementById("siteSuggestion");
const barFill = document.getElementById("bar-fill");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const strength = getPasswordStrength(password);

  // Reset classes
  barFill.className = "";
  barFill.style.width = strength.percent;

  switch (strength.score) {
    case 0:
      strengthText.textContent = "Weak";
      barFill.classList.add("weak");
      siteSuggestion.textContent = "Avoid using this password.";
      break;
    case 1:
      strengthText.textContent = "Medium";
      barFill.classList.add("medium");
      siteSuggestion.textContent = "Okay for Flipkart, e-commerce sites.";
      break;
    case 2:
      strengthText.textContent = "Strong";
      barFill.classList.add("strong");
      siteSuggestion.textContent = "Safe for Facebook, Instagram, etc.";
      break;
    case 3:
      strengthText.textContent = "Very Strong";
      barFill.classList.add("very-strong");
      siteSuggestion.textContent = "Recommended for Google, Amazon, banking.";
      break;
  }
});

function getPasswordStrength(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[!@#\$%\^\&*\)\(+=._-]/.test(password)) score++;

  let level = Math.min(score, 3);
  let percent = ["25%", "50%", "75%", "100%"][level];

  return { score: level, percent };
}
