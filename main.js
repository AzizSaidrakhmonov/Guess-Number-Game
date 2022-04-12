
let secretNumber = Math.trunc(Math.random()*20)+1;
document.querySelector('.guess-number__inner').textContent = secretNumber;

const checkedButton = document.querySelector('.check');
let score = 20;
let highScore = 0;

checkedButton.addEventListener('click', function(){
        
        const checkedNumber = Number(document.querySelector('.checked-number__input').value);

        if(!checkedNumber){

            document.querySelector('.answer-description').textContent = `🤨 No Number`;
            secretNumber.style.background = 'green'

            
        }

        else if(checkedNumber === secretNumber){
                document.querySelector('.answer-description').textContent = `🥳 Correct!`;
                document.querySelector('.score').textContent = `💯 Score: ${score}`;
                document.querySelector('body').style.background = 'green';

                if(score > highScore){
                    highScore = score;
                    document.querySelector('.high-score').textContent = `🥇 HighScore: ${highScore}`; 
                }
        } 
        
        else if (checkedNumber > secretNumber) {
            if(score > 2){
                document.querySelector('.answer-description').textContent = `😐 Too High!`;
                score = score-2;
                document.querySelector('.score').textContent = `💯 Score: ${score}`;
            } else {
        
                document.querySelector('body').style.background = 'red';

                setTimeout(() => {
                    alert("You lost the game!");
                    document.querySelector('.score').textContent = `💯 Score: ${0}`;
                }, 500);
            }
        } 
        
        else if (checkedNumber < secretNumber) {
            if(score > 2){
                document.querySelector('.answer-description').textContent = `😐 Too Low!`;
                score = score-2;
                document.querySelector('.score').textContent = `💯 Score: ${score}`;
            } else {
                document.querySelector('body').style.background = 'red';

                setTimeout(() => {
                    alert("You lost the game!");
                    document.querySelector('.score').textContent = `💯 Score: ${0}`;
                }, 500);
            }
        }
    })


    document.querySelector('.restart').addEventListener('click', function(){
        score = 20;

        secretNumber = Math.trunc(Math.random()*20)+1;

        document.querySelector('.answer-description').textContent = '🤔 Guess...';
        document.querySelector('.score').textContent = `💯 Score: ${score}`;
        document.querySelector('.guess-number__inner').textContent = "?";

        document.querySelector('.checked-number__input').value = '';

        
        document.querySelector('body').style.background = '#1e152a';

    })

    window.onload = function () {
        score = 20;
        secretNumber = Math.trunc(Math.random()*20)+1;

        document.querySelector('.answer-description').textContent = '🤔 Guess...';
        document.querySelector('.score').textContent = `💯 Score: ${score}`;
        document.querySelector('.guess-number__inner').textContent = "?";

        document.querySelector('.checked-number__input').value = '';

        
        document.querySelector('body').style.background = '#1e152a';
    }

  
