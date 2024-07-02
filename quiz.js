let htmlQuiz = [
    {
        que: "1. who is making web Standards?",
        opt1: "Google",
        opt2: "Microsoft",
        opt3: "World wide web",
        opt4: "Mozrella",
        ans: "World wide web"

    },
    {
        que: "2. What is the abbrevation of HTML?",
        opt1: "Hyper Text Markup Language",
        opt2: "Hyper Info Markup Language",
        opt3: "Hyper test Markup Language",
        opt4: "Hyper Tend Markup Language",
        ans: "Hyper Text Markup Language"
    },

    {
        que: "3.How many heading tags in HTML?",
        opt1: "1",
        opt2: "2",
        opt3: "4",
        opt4: "6",
        ans: "6"
    }
]

let questionCount = 0;
let score = 0;

let question = document.getElementById("question")
let option_1 = document.getElementById("option1")
let option_2 = document.getElementById("option2")
let option_3 = document.getElementById("option3")
let option_4 = document.getElementById("option4")

let value_1 = document.getElementById("val_1")
let value_2 = document.getElementById("val_2")
let value_3 = document.getElementById("val_3")
let value_4 = document.getElementById("val_4")

let answer = document.getElementsByName("answer")


function renderQuestion() {
    question.innerHTML = htmlQuiz[questionCount].que
    option_1.value = htmlQuiz[questionCount].opt1
    option_2.value = htmlQuiz[questionCount].opt2
    option_3.value = htmlQuiz[questionCount].opt3
    option_4.value = htmlQuiz[questionCount].opt4

    value_1.innerHTML = htmlQuiz[questionCount].opt1
    value_2.innerHTML = htmlQuiz[questionCount].opt2
    value_3.innerHTML = htmlQuiz[questionCount].opt3
    value_4.innerHTML = htmlQuiz[questionCount].opt4

}
renderQuestion()

let nextBtn = document.getElementById("next")

function deselect() {
    for (let i = 0; i < answer.length; i++) {
        answer[i].checked = false;
    }
}

function next() {

    let checkans = false

    // scoring
    for (let i = 0; i < answer.length; i++) {
        if (answer[i].checked) {
            checkans = true

            if (answer[i].value == htmlQuiz[questionCount].ans) {
                score++
                console.log(score)
            }

        }
    }
if(checkans == false){
    alert("Please select any option")
}

    else if (questionCount < htmlQuiz.length - 1) {
        questionCount++
        deselect()
        renderQuestion()
    }

}
nextBtn.addEventListener("click", next)


