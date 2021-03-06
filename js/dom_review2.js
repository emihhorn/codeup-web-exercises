// ================= Review, pt deux =================

/*
    TODO: When a list item inside of .data-example-container is clicked,
     -return its data-value attribute value to the element with an id of #show-data-attr
*/
$('.data-example-container').children().click(function (){
   let dataAttr = $(this).val($("data-value")).attr("data-value");
   $("#show-data-attr").text(dataAttr)
console.log(dataAttr)

})
/*
    TODO: When a list item inside of .data-example-container is double clicked,
     -return its text value to the all elements with a class of .show-list-item-text
 */
{
    function returnTextValue() {
        let dataValues = $(this).text();
        return $(".show-list-item-text").text(dataValues);
    }

    $(".data-example-container li").dblclick(returnTextValue);

}
/*

});
    TODO: When an immediate child element of the parent with an id of #hover-container is hovered
     -change the child's text to 'You are hovering here!' and
     -add a border to the child.
     -Be sure to reset the text and border upon hovering out

 */
$('#hover-container').children().hover(
    function() {
        $(this).text('You are hovering here!').css("border", "teal solid 1px");
    },
  function() {
            $(this).text(location.reload());
        }
    );




// $('#hover-container').children().bind('mouseover', function (){
//     $(this).text('You are hovering here!').css("border", "teal solid 1px");
//
// });
/*

    TODO: When an element with the class of .background-color-change is clicked,
     -cycle between background-colors of 'red', 'blue', 'green', and back to the default
     -the colors should change in the above order
     -only affect one element at a time

 */
let counter = 0
$(".background-color-change").click(function () {
    // console.log($(this));
    counter++;
    if (counter === 4) {
        counter = 0
    }
    // console.log(counter);
    if (counter === 0) {
        $(this).css("background-color", "")
    }
    if (counter === 1) {
        $(this).css("background-color", "red")
    }
    if (counter === 2) {
        $(this).css("background-color", "blue")
    }
    if (counter === 3) {
        $(this).css("background-color", "green")
    }
});
/*

    TODO: When a user enters a string (and only a string) into the input of id #input,
     -concatenate that string to what is already in the element with an id of #output
     -when the user double clicks the element with an id #output
     -the string resets to its original text

*/

$('#concat-string').click(function (e) {
    e.preventDefault();
    let $userInput = $('#input').val();
    // console.log(userInput);
    $('#output').text($('#output').text() + $userInput);

    $('#output').dblclick(function () {
        $('#output').text("Concat String:");
    })
});
// console.log(userInput);
// adds a text box
// let value;
// $('.data-example-container').on('dblclick', 'li', function () {
//     value = $(this).text();
//     $(this).text("");
//     $("<input type='text'>").appendTo(this).focus();
// });
