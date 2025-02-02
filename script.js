const scoreElement = document.querySelector('.score');
if (userAnswer === correctAnswer) {
  
  scoreElement.classList.add('score-correct');
  scoreElement.classList.remove('score-wrong');
} else {
  
  scoreElement.classList.add('score-wrong');
  scoreElement.classList.remove('score-correct');
}