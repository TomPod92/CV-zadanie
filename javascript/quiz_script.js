let currentQuestion = 0;
let score = 0;
const allQuestions = [
    {
        "question": "What JS stands for?",
        "option1": "JavaScript",
        "option2": "JustSomething",
        "answer": "1"
    },

    {
        "question": "Was that easy?",
        "option1": "No",
        "option2": "Yes",
        "answer": "2"
    },

    {
        "question": "Would you like to see the CV?",
        "option1": "Sure",
        "option2": "Nope",
        "answer": "1"
    }
];

const numberOfQuestions = allQuestions.length;

const container = document.querySelector('.question_container');
const text = document.querySelector('.question__text');
const answer1 = document.querySelector('.question__answer--first');
const answer2 = document.querySelector('.question__answer--second');
const button = document.querySelector('.question__button');
const fail = document.querySelector('.fail');
const reload = document.querySelector('.fail__button');

// insert current question text and answers to corresponding DOM elements
loadQuestion = (questionIndex) => {
    const q = allQuestions[questionIndex];

    text.textContent = q.question;
    answer1.textContent = q.option1;
    answer2.textContent = q.option2;
    //button.textContent = `Pytanie ${currentQuestion + 1}/${numberOfQuestions}`;
};

// load next question from array
loadNextQuestion = () => {
    let selectedOption = document.querySelector('input[type=radio]:checked');

    // check if an option was selected
    if(!selectedOption) {
        alert('Select one option.');
    } else {
        // get answer from selected box
        let yourAnswer = selectedOption.value;

        // check if the answer is correct
        if(allQuestions[currentQuestion].answer === yourAnswer) score+=1;
        
        // uncheck radio box and increment question index
        selectedOption.checked = false;
        currentQuestion++;

        // check if that was the last question
        if(currentQuestion === numberOfQuestions) {
            
            // check if all answers were correct
            if(score === 3) {
                //wyswietlic CV
                alert('twoje CV');
                currentQuestion = 0;
            } else {
                //wyswietlic plansze z reloadem
                currentQuestion = 0;
                document.querySelector('.question__container').style.display = "none";
                fail.style.display = "flex";
                //alert('sprobuj jeszcze raz');
            }
        }

        // if it wasnt the last question then render next question from the array
        loadQuestion(currentQuestion);
    }
};


button.addEventListener('click', loadNextQuestion);
//reload.addEventListener('click', );

loadQuestion(currentQuestion);
