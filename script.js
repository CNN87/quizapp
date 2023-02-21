let questions = [
    {
        question: "Was sind die Attribute Armors",
        answer_1: "Szepter und Apfel",
        answer_2: "Goldkettchen und Porche",
        answer_3: "Sichel und Axt",
        answer_4: "Pfeil und Bogen",
        right_answer: 4,
    },
    {
        question: "Über welche Künstlerin wurde wegen Ihres fleischkleides diskutiert?",
        answer_1: "Lady GAGA",
        answer_2: "Rihanna",
        answer_3: "Madonna",
        answer_4: "Heid Klum",
        right_answer: 1,
    },
    {
        question: "Was bedeutet Metamorphose",
        answer_1: "Transformation",
        answer_2: "Glaube",
        answer_3: "Datenverarbeitung",
        answer_4: "Wertsteigerung",
        right_answer: 1,
    },
    {
        question: "Welche Art von Skelett haben Menschen?",
        answer_1: "Exoskelett",
        answer_2: "Estherskelett",
        answer_3: "Exitskelett",
        answer_4: "Endoskelett",
        right_answer: 4,
    },
    {
        question: "Welche Märchenfigur au Tausendundeine Nacht hat eine Wunderlampe",
        answer_1: "Sindbad",
        answer_2: "Ali Baba",
        answer_3: "Salomo",
        answer_4: "Aladin",
        right_answer: 4,
    }
];
let rightQuestions = 0;
let currentQuestion = 0;
let audio_success = new Audio('audio/success.mp3');
let audio_fail = new Audio('audio/wong.mp3');

function init(){
    document.getElementById('allQuestions').innerHTML = questions.length;

    showQuestion()
}

function showQuestion(){

    if (currentQuestion >= questions.length ) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display:none';
        
        document.getElementById('amountOfQuestion').innerHTML = questions.length;
        document.getElementById('amountOfRight').innerHTML = rightQuestions;
        document.getElementById('headerImage').src = 'img/troph.png';
        
    }else{

        let percent = (currentQuestion +1)/ questions.length ;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%;`;

        let question = questions[currentQuestion];
        document.getElementById('currentNumber').innerHTML = currentQuestion +1;
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }

}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idofRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']){
        document.getElementById(selection).parentNode.classList.add('bg-success');
        audio_success.play();
        rightQuestions++;
    }else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idofRightAnswer).parentNode.classList.add('bg-success');
        
        audio_fail.play();
    }
    document.getElementById('nextButton').disabled = false;
    

}

function nextQuestion(){
    currentQuestion++;
    document.getElementById('nextButton').disabled = true;
    resetAnswerButtons();
    
    showQuestion();
}

function resetAnswerButtons(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame(){
    document.getElementById('headerImage').src = 'img/question.jpg';
    document.getElementById('questionBody').style = '';
    document.getElementById('endScreen').style = 'display:none';
    rightQuestions = 0;
    currentQuestion = 0;

    init();
}

