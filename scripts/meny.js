// $(document).ready(generateMenu);
$(document).ready(function() {
    generateMenu();
    addSearch();
});


function generateMenu() {
    //create an ul list in receptmeny
    $("#receptmeny .contentarea").append("<ul id='menu-list'></ul>");
    //variable for all the posts
    var postElements = $(".post");
    //go through all the elements
    postElements.each(function () {
        //find all the h4 in posts
        var h4Element = $(this).find("h4");
        //the text from the elements
        var h4Text = h4Element.text();
        //variable to do lowercases and remove commas and whitespaces
        var h4Id = h4Text.toLowerCase().replace(/\s/g, "-").replace(/,/g, "");
        //add attribute to all the h4id
        h4Element.attr("id", h4Id);
        //variable for all the listitems
        var listItem = $("<li></li>");
        //variable for the anchor items with attributes such as href # and id. and text h4text
        var anchorItem = $("<a></a>").attr("href", "#" + h4Id).text(h4Text);
        //append the anchoritem to listitem
        listItem.append(anchorItem);
        //append the listitem to menulist
        $("#menu-list").append(listItem);
    });
}

function addSearch() {
    //create search container
    var searchField = $("<div id='search-container'></div>");
    //create input w id and placeholdertext
    var searchInput = $("<input type='text' id='search-input' placeholder='Sök recept'>");
    //append input to field
    searchField.append(searchInput);
    //place search before content
    $("#content").before(searchField);
}

