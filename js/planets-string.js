(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

 planetsArray = planetsString.split("|");

    console.log(planetsArray);
//// Convert planetsString to an array, and save
    var planetsWithBreaks = planetsArray.join("<br>");

    document.getElementsByTagName("body")[0].innerHTML = planetsWithBreaks

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?


     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var listPlanets = planetsString.split("|");
    var brlistPlanets = "<ul>" + "<li>" + listPlanets.join("</li><li>") + "</li>" + "</ul>";
    console.log(listPlanets);
    console.log(brlistPlanets);
    // var namesString = "Joe,Bob,Sally";
    // console.log(namesString);
    // // Joe,Bob,Sally

    // var namesAsArray = namesString.split(",");
    // console.log(namesAsArray);
    // // ["Joe", "Bob", "Sally"]

    // namesAsArray.sort();
    // console.log(namesAsArray);

    // var arrayNames = namesAsArray.join(",");
    // console.log(arrayNames);
    // // Joe,Bob,Sally


})();