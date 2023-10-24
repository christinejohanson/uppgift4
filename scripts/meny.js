// $(document).ready(generateMenu);
$(document).ready(function() {
    generateMenu();
    addSearch();
    addSlider();
});


function generateMenu() {
    //create an ul list in receptmeny
    $("#receptmeny .contentarea").append("<ul class='menu-list'></ul>");
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
        // anchorItem.animate(ease);
        // anchorItem.animate({"margin-left": '200'}, 'slow');
        //append the anchoritem to listitem
        listItem.append(anchorItem);
        //append the listitem to menulist
        $(".menu-list").append(listItem);


    // var targetId = anchorItem.attr('href');
    // var targetPosition = $(targetId).offset().top;

    // $('html, body').animate({
    //     scrollTop: targetPosition
    // }, 800, 'easeInOutExpo'); // Adjust the duration and easing function as needed for the smooth scroll effect



       
    });
}


function addSlider() {
    // Create a div element for the slider
    var sliderDiv = $("<div id='sliderOn'></div>");

    // Create and append the first radio button
    var radioOne = $("<input type='radio' id='radioOne' name='buttonSelection' />");
    sliderDiv.append(radioOne);

    // Create and append the second radio button
    var radioTwo = $("<input type='radio' id='radioTwo' name='buttonSelection' />");
    sliderDiv.append(radioTwo);

    // Append the slider div to the content area
    $("#content").before(sliderDiv);
}

//add search container and function for that
function addSearch() {
    //create search container
    var searchField = $("<div id='search-container'></div>");
    //create input w id and placeholdertext
    var searchInput = $("<input type='text' class='search-input' placeholder='Sök recept'>");
    //append input to field
    searchField.append(searchInput);
    //place search before content
    $("#content").before(searchField);

    //search function from menulist li
    $('.menu-list li').each(function(){
    $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    //keyup on search input
    $('.search-input').on('keyup', function () {
        var searchTerm = $(this).val().toLowerCase();
        $('.menu-list li').each(function(){
            //if it matches show the results
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
                //else hide the menu list
            } else {
                $(this).hide();
            }   
        });   
    });
}

