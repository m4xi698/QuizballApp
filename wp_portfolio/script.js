const questions = [
  {
      text: "Wann wurde Ihre erste Hornhauttransplantation durchgeführt?",
      options: ["1888", "1905", "1912", "1942"]
  },
  {
      text: "？",
      options: ["Option A", "Option B", "Option C", "Option D"]
  },
  {
      text: "?",
      options: ["Option A", "Option B", "Option C", "Option D"]
  },
  {
      text: "?",
      options: ["Option A", "Option B", "Option C", "Option D"]
  },
  {
      text: "?",
      options: ["Option A", "Option B", "Option C", "Option D"]
  }
];

let currentQuestionIndex = 0;

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById('question-number').textContent = currentQuestionIndex + 1;
  document.getElementById('question-text').textContent = question.text;

  const options = document.querySelectorAll('.option');
  options.forEach((option, index) => {
      option.textContent = question.options[index];
      option.onclick = () => {
          currentQuestionIndex++;
          if (currentQuestionIndex < questions.length) {
              loadQuestion();
          } else {
              alert("クイズが終了しました！");
          }
      };
  });
}

document.getElementById('exit-button').onclick = () => {
  window.close(); // または、他の終了方法を実装
};

loadQuestion();
