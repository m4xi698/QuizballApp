const questions = [
    {
        text: "Wann wurde Ihre erste Hornhauttransplantation durchgeführt?",
        options: ["1888", "1905", "1912", "1942"]
    },
    {
        text: "Welches Tier ist das größte auf der Erde?",
        options: ["Elefant", "Blauwal", "Giraffe", "Krokodil"]
    },
    {
        text: "Wie viele Kontinente gibt es auf der Erde?",
        options: ["5", "6", "7", "8"]
    },
    {
        text: "Welche Farbe hat der Himmel?",
        options: ["Rot", "Gelb", "Blau", "Grün"]
    },
    {
        text: "Wie viele Beine hat eine Spinne?",
        options: ["6", "8", "10", "12"]
    }
];

let currentQuestionIndex = 0;
let usedQuestions = [];

function getRandomQuestionIndex() {
    let index;
    do {
        index = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(index));
    usedQuestions.push(index);
    return index;
}

function resetOptionStyles() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.remove('hovered');
        option.style.backgroundColor = '';
        option.style.color = '';
    });
}

function loadQuestion() {
    if (usedQuestions.length === questions.length) {
        alert("Alle Quiz sind fertig！");
        return;
    }
    
    const currentQuestionIndex = getRandomQuestionIndex();
    const question = questions[currentQuestionIndex];
    
    let questionCounter = parseInt(localStorage.getItem('questionCounter')) || 0;
    questionCounter++;
    localStorage.setItem('questionCounter', questionCounter);
    
    document.getElementById('question-number').textContent = questionCounter
    document.getElementById('question-text').textContent = question.text;

    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.textContent = question.options[index];
        option.onclick = () => {
            resetOptionStyles();
            localStorage.setItem('questionCounter', questionCounter);
            setTimeout(function() {
                window.location.href = 'field.html';
            }, 2000);
        };
    });
}

function resetQuestionCounter() {
    localStorage.setItem('questionCounter', 0);
}

document.getElementById('exit-button').onclick = () => {
    window.close();
};

if (!localStorage.getItem('questionCounter')) {
    localStorage.setItem('questionCounter', 0);
}

loadQuestion();

/*
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
              alert("Alle Quiz sind fertig！");
          }
      };
  });
}

document.getElementById('exit-button').onclick = () => {
  window.close();
};

loadQuestion();

*/