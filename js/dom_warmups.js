// const body = document.body
// body.append("hello world", "Goodbye World")
//
// const div = document.createElement('div')
//
// div.innerText("Hi again")
// div.textContent = ("3x a charm")
// body.append(div)
//
// const div = document.querySelector('div')
//
// console.log(div.textContent)
// console.log(div.innerText)
//
// div.innerHTML = "<strong>Hello World 2</strong>"

const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")


spanBye.remove()

spanHi.setAttribute("id","NewID")

$("add-btn").click("click", function (){
    let $inputVal = $("number").val();
    console.log($inputVal);
    let $spanVal = $("sum-output").text();
    console.log($spanVal);
    let $addSpans = parseInt($inputVal) + parseInt($spanVal);
    console.log($addSpans);
    $("#sum-output").text($addSpans);
})

