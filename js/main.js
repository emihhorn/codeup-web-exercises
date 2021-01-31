"use strict"

function renderCoffee(coffee) {

    var html = '<div class="coffee card shadow-sm p-1 bg-transparent rounded">';
    html += '<div class="card-body">' + '<h2 class="card-title">' + coffee.name + '</h2>';
    html += '<h5 class="card-text">' + coffee.roast + ' roast' + '</h5>';
    html += '</div>';
    html += '</div>';

    return html;

}

function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (selectedRoast === 'all') {
            filteredCoffees.push(coffee);
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addACoffee(e) {
    e.preventDefault();
    var coffee = {
        id: coffees.length + 1,
        name: document.getElementById('new-name').value,
        roast: document.getElementById('new-roast').value
    };

    coffees.push(coffee);
    updateCoffees(e);
    document.getElementById("new-name").value = "";

}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Luna Latte', roast: 'light'},
    {id: 2, name: 'Java Joe', roast: 'light'},
    {id: 3, name: 'Cupdate', roast: 'light'},
    {id: 4, name: 'The BOM', roast: 'dark'},
    {id: 5, name: 'Owl City', roast: 'medium'},
    {id: 6, name: 'ourterHTM', roast: 'medium'},
    {id: 7, name: 'Ecma Script', roast: 'medium'},
    {id: 8, name: 'Cold Brew', roast: 'dark'},
    {id: 9, name: 'Master Disaster', roast: 'dark'},
    {id: 10, name: 'Taste of IFFE ', roast: 'dark'},
    {id: 11, name: 'Full Stack', roast: 'dark'},
    {id: 12, name: 'InnerHTML', roast: 'dark'},
    {id: 13, name: 'CSS Grid', roast: 'dark'},
    {id: 14, name: 'SQL ', roast: 'dark'},
    {id: 15, name: 'IntelliJoe', roast: 'dark'},
    {id: 16, name: 'jQuery', roast: 'dark'},
    {id: 17, name: 'The DOM', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var submitNewButton = document.querySelector('#submitNew');


tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

submitNewButton.addEventListener('click', addACoffee);