
let htmlQuiz = document.getElementById("htmlQuiz")
let cssQuiz = document.getElementById("cssQuiz")
let javascriptQuiz = document.getElementById("javascriptQuiz")

function quiz1(){
    window.location.assign("quiz.html")
}
htmlQuiz.addEventListener("click",quiz1)
cssQuiz.addEventListener("click",quiz1)
javascriptQuiz.addEventListener("click",quiz1)

