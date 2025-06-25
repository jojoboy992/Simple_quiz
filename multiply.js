let form = document.getElementById("form");
let span = document.getElementById("span")
let span_1 = document.getElementById("span_1");
let span_2 = document.getElementById("span_2");
let scoreElement = document.getElementById("span_3");
let input = document.getElementById("input");
let btn = document.getElementById("btn");

let score = 0;
scoreElement.innerText = score;

function updateQuestion() {
    let num1 = Math.ceil(Math.random() * 10);
    let num2 = Math.ceil(Math.random() * 10);
    span_1.innerText = num1;
    span_2.innerText = num2;
    return num1 * num2;
}

let correct_answer = updateQuestion();

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let input_value = Number(input.value);
    if (input_value == correct_answer) {
        span.innerText = "Correct!"
        span.style.color = "green"
        score++;
    }else{
        span.innerText = "Wrong!"
        span.style.color = "red"
    }

    scoreElement.innerText = score;
    correct_answer = updateQuestion();
    input.value = "";
});
