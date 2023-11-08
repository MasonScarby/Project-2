
    let currentQuestion = 0;
    let score = 0;
    const questions = [
        // Store your questions and answers in an array of objects
        {
            question: "What is the capital of France?",
            options: {
                A: "London",
                B: "Berlin",
                C: "Madrid",
                D: "Paris",
            },
            correctAnswer: "D",
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: {
                A: "Earth",
                B: "Mars",
                C: "Jupiter",
                D: "Venus",
            },
            correctAnswer: "B",
        },
        // Add more questions here
    ];

    function loadQuestion() {
        const questionElement = document.getElementById("question");
        const optionAElement = document.getElementById("optionA");
        const optionBElement = document.getElementById("optionB");
        const optionCElement = document.getElementById("optionC");
        const optionDElement = document.getElementById("optionD");
        const submitButton = document.getElementById("submit-button");

        if (currentQuestion < questions.length) {
            const current = questions[currentQuestion];
            questionElement.textContent = current.question;
            optionAElement.textContent = current.options.A;
            optionBElement.textContent = current.options.B;
            optionCElement.textContent = current.options.C;
            optionDElement.textContent = current.options.D;
            // submitButton.disabled = true;
        } else {
            showResult();
        }
    }

    function checkAnswer() {
        const selectedOption = document.querySelector('input[name="option"]:checked');


if (selectedOption) {
    const userAnswer = selectedOption.value;
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (userAnswer === correctAnswer) {
        score++;
    }

    currentQuestion++;
    loadQuestion();
} else {
    console.log("Please select an option before submitting.");
}
}


    function showResult() {
        const resultContainer = document.getElementById("result-container");
        const scoreElement = document.getElementById("score");
        const restartButton = document.getElementById("restart-button");
        const questionContainer = document.getElementById("question-container");

        questionContainer.style.display = "none";
        resultContainer.style.display = "block";
        scoreElement.textContent = `Your Score: ${score}/${questions.length}`;
    }

    function restartQuiz() {
        currentQuestion = 0;
        score = 0;
        loadQuestion();
        const questionContainer = document.getElementById("question-container");
        const resultContainer = document.getElementById("result-container");
        resultContainer.style.display = "none";
        questionContainer.style.display = "block";
    }

    loadQuestion();
