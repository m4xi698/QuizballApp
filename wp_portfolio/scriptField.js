document.addEventListener('DOMContentLoaded', function() {
    const studentScore = document.getElementById('score-students');
    const dozentenScore = document.getElementById('score-dozent');
    const ball = document.getElementById('ball');
    const correctButton = document.getElementById('correct-answer');
    const incorrectButton = document.getElementById('incorrect-answer');
    const goalAnimation = document.getElementById('goal-animation');
    const questionCount = document.getElementById('question-number');
    
    const positions = ['position-l3', 'position-l2', 'position-l1', 'position-c', 'position-r1', 'position-r2', 'position-r3'];
    let currentPosition = parseInt(localStorage.getItem('ballPosition')) || 3; 

    function moveBall(direction) {
        currentPosition += direction;
        if (currentPosition < 0 || currentPosition >= positions.length) {
            
            if (currentPosition < 0) {
                dozentenScore.textContent = parseInt(dozentenScore.textContent) + 1;
                localStorage.setItem('dozentenScore', dozentenScore.textContent);
                showGoalAnimation('Dozent');
            } else {
                studentScore.textContent = parseInt(studentScore.textContent) + 1;
                localStorage.setItem('studentScore', studentScore.textContent);
                showGoalAnimation('Studenten');
            }
           
            currentPosition = 3;
        }
        localStorage.setItem('ballPosition', currentPosition);
        calculateBallPos();
    }

        function calculateBallPos(){
        const newPosition = document.getElementById(positions[currentPosition]);
        const fieldRect = document.querySelector('.football-field').getBoundingClientRect();
        const newRect = newPosition.getBoundingClientRect();

        const leftPercentage = ((newRect.left + newRect.width / 2) - fieldRect.left) / fieldRect.width * 100;
        const topPercentage = ((newRect.top + newRect.height / 2) - fieldRect.top) / fieldRect.height * 100;

        ball.style.left = `${leftPercentage}%`;
        ball.style.top = `${topPercentage}%`;
    }

    function showGoalAnimation(scorer) {
        goalAnimation.textContent = `Tor für ${scorer} !`;
        goalAnimation.classList.remove('hidden');
        goalAnimation.classList.add('show');
        setTimeout(() => {
            goalAnimation.classList.remove('show');
            goalAnimation.classList.add('hidden');
        }, 3000);
    }

    document.getElementById('correct-answer').onclick = () => {
        moveBall(1);
        setTimeout(function() {
            window.location.href = 'game.html';
        }, 2000); 
    };

    document.getElementById('incorrect-answer').onclick = () => {
        moveBall(-1);
        setTimeout(function() {
            window.location.href = 'game.html';
        }, 2000); 
    };

    document.getElementById('exit-button').onclick = () => {
        window.close();
    };
    
    questionCount.textContent = parseInt(localStorage.getItem('questionCounter'))||'1';
    studentScore.textContent = localStorage.getItem('studentScore') || '0';
    dozentenScore.textContent = localStorage.getItem('dozentenScore') || '0';
    calculateBallPos();
});



