"use strict"

$(document).ready(function (){
    alert("Can you guess the name of this Movie?")
})


// document.getElementById("movieStatement").style.background = "palevioletred";

var texts = Array.from(document.getElementsByClassName("filler-text"));

texts.forEach(function (text) {
    text.style.color = "palevioletred";
});

// document.getElementById("dolor").innerHTML = ";)";



// $('.codeup').css('border', '1px solid red');
//
// $('li').css('font-size', '20px');

// alert($("first-heading").html("text"));
//
// alert($("second-heading").html("text"));

// alert(document.getElementById("first-heading".innerHTML));
// alert($("second-heading").html())

// $("li").css("font-size", "20px");

// $("h1").css("background-color", "blue");
// $("p").css("background-color", "pink");
// $("li").css("background-color", "teal");


// alert($('h1').html());//or .text

// $("h1").each(function (){
//     alert($(this).html())
// });
//
// $('h1, p, li').css({"background-color": "turquoise"});






$('h1').click(
    function() {
        $(this).css('background-color', '#F439A1');
    }
);

$('p').dblclick(
    function() {
        $(this).css('font-size', '18px');
    }
);

$('li').hover(
    function() {
        $('li').css('color', 'red');
    },
    function() {
        $('li').css('color', 'teal');
    }
);
