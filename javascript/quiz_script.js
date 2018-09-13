const markup = ` <div class="grid">
<div class="cv__box cv__image">
    <div class="cv__image--wrapper">
        <!-- <img src="/image/person.png" alt="person photo" class="cv__image--image"> -->
        <div class="cv__image--image"></div>
    </div>
</div>

<div class="cv__box cv__name">
    <h1 class="cv__name--name">John <br> Smith</h1>
    <!-- <h1 class="cv__name--surname">Smith</h1> -->
    <h2 class="cv__name--job">Web Developer</h2>
</div>

<div class="cv__box cv__contact">
    <h2 class="cv__contact--contact">Contact</h2>
    
    <div class="cv__contact--item">
        <div class="cv__contact--icon">
            <svg>
                <use xlink:href="image/sprite.svg#icon-mail2"></use>
            </svg>
        </div>
        <div class="cv__contact--info">johnsmith@company.com</div>
    </div>

    <div class="cv__contact--item">
        <div class="cv__contact--icon">
            <svg>
                <use xlink:href="image/sprite.svg#icon-phone"></use>
            </svg>
        </div>
        <div class="cv__contact--info">+62 0819090168930</div>
    </div>

    <div class="cv__contact--item">
        <div class="cv__contact--icon">
            <svg>
                <use xlink:href="image/sprite.svg#icon-home"></use>
            </svg>
        </div>
        <div class="cv__contact--info">Merkid, Yogyakarta</div>
    </div>

    <div class="cv__contact--item">
        <div class="cv__contact--icon">
            <svg>
                <use xlink:href="image/sprite.svg#icon-sphere"></use>
            </svg>
        </div>
        <div class="cv__contact--info">www.jhonmrongos.com</div>
    </div>
    
</div>

<div class="cv__box cv__hobbies">
    <h2 class="cv__hobbies--hobbies">Hobbies</h2>

    <div class="cv__hobbies--row">
        <div class="cv__hobbies--item">
            <div class="cv__hobbies--icon">
                <svg>
                    <use xlink:href="image/sprite.svg#icon-airplane"></use>
                </svg>
            </div>
            <div class="cv__hobbies--info">Travel</div>
        </div>

        <div class="cv__hobbies--item">
            <div class="cv__hobbies--icon">
                <svg>
                    <use xlink:href="image/sprite.svg#icon-book"></use>
                </svg>
            </div>
            <div class="cv__hobbies--info">Reading</div>
        </div>
    </div>

    <div class="cv__hobbies--row">
        <div class="cv__hobbies--item">
            <div class="cv__hobbies--icon">
                <svg>
                    <use xlink:href="image/sprite.svg#icon-music"></use>
                </svg>
            </div>
            <div class="cv__hobbies--info">Music</div>
        </div>

        <div class="cv__hobbies--item">
            <div class="cv__hobbies--icon">
                <svg>
                    <use xlink:href="image/sprite.svg#icon-pencil"></use>
                </svg>
            </div>
            <div class="cv__hobbies--info">Writing</div>
        </div>
    </div>

    <div class="cv__hobbies--row">
          <span class="cv__hobbies--item">Twitter : @Johndoe</span>  
          <span class="cv__hobbies--item">Facebook : John Doe</span>  
    </div>
</div>

<div class="cv__box cv__profile">
    <div class="white_header">
        <svg class="white_header__icon">
            <use xlink:href="image/sprite.svg#icon-user"></use>
        </svg>
        <h2 class="white_header__header">Profile</h2>
    </div>

    <p class="cv__profile--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iusto commodi fuga molestias hic laudantium, libero, necessitatibus quis qui dignissimos culpa, eligendi repudiandae voluptatibus. Sunt, aut. Atque molestiae necessitatibus officia nemo eius delectus rerum, fugiat placeat minus praesentium!</p>
    <p class="cv__profile--text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quasi odio nulla ipsum saepe, maxime non laborum cumque dolorum similique? Reiciendis facere, consequatur ab harum ratione est ipsam iste sed!</p>
</div>

<div class="cv__box cv__education">

    <div class="white_header">
        <svg class="white_header__icon">
            <use xlink:href="image/sprite.svg#icon-education"></use>
        </svg>
        <h2 class="white_header__header">Education</h2>
    </div>

    <div class="cv__education--timeline">
        <h3>University of YT</h3>
        <h4>Bachelor in Technology Information</h4>
        <h5>2011 - 2014</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, aliquid? Quibusdam, laudantium cumque in fuga deserunt magni officia voluptate natus facere recusandae.</p>

        <h3>University of GK</h3>
        <h4>Master in Technology Information</h4>
        <h5>2014 - 2016</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatibus odio at corporis nesciunt! Asperiores enim numquam maxime, dicta eveniet commodi aliquam?</p>
    </div>
</div>

<div class="cv__box cv__experience">
    <div class="white_header">
        <svg class="white_header__icon">
            <use xlink:href="image/sprite.svg#icon-display"></use>
        </svg>
        <h2 class="white_header__header">Experience</h2>
    </div>

    <div class="cv__education--timeline">
        <h3>Dugab Yk.co</h3>
        <h4>Junior Web Developer</h4>
        <h5>2016</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, aliquid? Quibusdam, laudantium cumque in fuga deserunt magni officia voluptate natus facere recusandae.</p>
    </div>
</div>

<div class="cv__box cv__skills">
    <div class="white_header">
        <svg class="white_header__icon">
            <use xlink:href="image/sprite.svg#icon-cog"></use>
        </svg>
        <h2 class="white_header__header">Skills</h2>
    </div>

    <div class="cv__skills--grid">
        <div class="cv__skills--item">
            <div class="cv__skills--chart" data-percent="25">25%</div>
            <span>Java</span>
        </div>

        <div class="cv__skills--item">
            <div class="cv__skills--chart" data-percent="55">55%</div>
            <span>Php</span>
        </div>

        <div class="cv__skills--item">
            <div class="cv__skills--chart" data-percent="50">50%</div>
            <span>C#</span>
        </div>

        <div class="cv__skills--item">
            <div class="cv__skills--chart" data-percent="70">70%</div>
            <span>HTML5</span>
        </div>

        <div class="cv__skills--item">
            <div class="cv__skills--chart" data-percent="85">85%</div>
            <span>Css</span>
        </div>

        <div class="cv__skills--item">
            <div class="cv__skills--chart" data-percent="90">90%</div>
            <span>Swift</span>
        </div>                
    </div>
</div>
</div>`;


// array of questions
let currentQuestion = 0;
let score = 0;
const allQuestions = [
    {
        "question": "What does JS stand for?",
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

const container = document.querySelector('.question__container');
const text = document.querySelector('.question__text');
const answer1 = document.querySelector('.question__answer--first');
const answer2 = document.querySelector('.question__answer--second');
const button = document.querySelector('.question__button');
const fail = document.querySelector('.fail');
const reload = document.querySelector('.fail__button');
const cv = document.querySelector('.grid');

// insert current question text and answers to corresponding DOM elements
loadQuestion = (questionIndex) => {
    //console.log('loaded question');
    const q = allQuestions[questionIndex];

    text.textContent = q.question;
    answer1.textContent = q.option1;
    answer2.textContent = q.option2;
    //button.textContent = `Pytanie ${currentQuestion + 1}/${numberOfQuestions}`;
};

// load next question from array
loadNextQuestion = () => {
    //console.log('clicked');
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
                //alert('twoje CV');
                container.style.display = "none";
                //cv.style.display = "grid";

                // show and animate CV depending on screen width
                let w = window.innerWidth;
                document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
                animateCV(w);
                                
                currentQuestion = 0;
            } else {
                //wyswietlic plansze z reloadem
                currentQuestion = 0;
                container.style.display = "none";
                fail.style.display = "flex";
                //alert('sprobuj jeszcze raz');
            }
        }

        // if it wasnt the last question then render next question from the array
        loadQuestion(currentQuestion);
    }
};

button.addEventListener('click', loadNextQuestion);

loadQuestion(currentQuestion);
//-------------------------------------------------------------------------------------------
animateCV = (screen) => {
    var $box1 = $('.cv__name');
    var $box2 = $('.cv__education');
    var $box3 = $('.cv__contact');
    var $box4 = $('.cv__experience');
    var $box5 = $('.cv__hobbies');
    var $box6 = $('.cv__skills');
    //var short = '0.4vh';
    //var long = '0.8vh';
    displayCharts();
    console.log(screen);
    
    $box1.waypoint(function () {
        console.log('waypoint1!');
        $box1.addClass('animate');
    },{offset: '300'});
    
    $box2.waypoint(function () {
        console.log('waypoint2!');
        $box2.addClass('animate');
    },{offset: '300'});

    $box3.waypoint(function () {
        console.log('waypoint3!');
        $box3.addClass('animate');
    },{offset: '250'});

    $box4.waypoint(function () {
        console.log('waypoint4!');
        $box4.addClass('animate');
    },{offset: '250'});

    $box5.waypoint(function () {
        console.log('waypoint5!');
        $box5.addClass('animate');
    },{offset: '200'});

    $box6.waypoint(function () {
        console.log('waypoint6!');
        $box6.addClass('animate');
    },{offset: '200'});
};

//--------------------------------------------------------------------------------------------
displayCharts = () => {
    var element = document.querySelectorAll('.cv__skills--chart');
        var array = Array.from(element);

        array.forEach((current => {
            new EasyPieChart(current, {
                size: 80,
                barColor:'#FFC935',
                scaleColor: false,
                lineWidth: 8,
                lineCap: 'square',
            });
        }));  
};
