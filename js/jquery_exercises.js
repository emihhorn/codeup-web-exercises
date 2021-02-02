"use strict"

$(document).ready(function (){
    alert("Can you guess the name of this Movie?")
})

// $('.codeup').css('border', '1px solid red');
//
// $('li').css('font-size', '20px');

// alert($("first-heading").html("text"));
//
// alert($("second-heading").html("text"));

// alert(document.getElementById("first-heading".innerHTML));
// alert($("second-heading").html())

$("li").css("font-size", "20px");

// $("h1").css("background-color", "blue");
// $("p").css("background-color", "pink");
// $("li").css("background-color", "teal");


// alert($('h1').html());//or .text

$("h1").each(function (){
    alert($(this).html())
});

$('h1, p, li').css({"background-color": "blue"});
