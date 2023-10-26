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
        //append the anchoritem to listitem
        listItem.append(anchorItem);
        //append the listitem to menulist
        $(".menu-list").append(listItem);
    });
}


function addSlider() {
    // create a div element for the slider
    var sliderDiv = $("<div id='sliderOn'></div>");

    // create and append the first radio button w label
    var radioOne = $("<input type='radio' id='option1' name='option' value='option1' />");
    var labelOne = $("<label for='option1'>Smooth navigering</label>");
    // create and append the second radio button w label
    var radioTwo = $("<input type='radio' id='option2' name='option' value='option2' />");
    var labelTwo = $("<label for='option2'>Vanlig navigering</label><br>");
    //append all this to the sliderdiv
    sliderDiv.append(radioOne, labelOne, radioTwo, labelTwo);

    // append the slider div to the header area
    $("#header").append(sliderDiv);
    //style the slider
    $('#sliderOn').css({ "background-color": "#c09f99", "padding": "6px", "color": "white" });
    //style the label
    $('label').css({ "margin-right": "15px", "margin-left": "5px" });
    // eventlistener on option
    $("input[name='option']").on("change", function() {
        if ($(this).val() === "option1") {
            //run function
            smoothCriminal();
        } else if ($(this).val() === "option2") {
            //turn off click for option 2
            console.log("Option 2 is selected");
            $('a[href^="#"]').off('click');
        }
    });
}

//smooth scroll function
function smoothCriminal() {
    console.log("Option 1 is selected");
        //animate ease function on link
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        //get href on the click
        var href = $(this).attr('href');
        //scroll to that element w animate and ease.
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 'ease');
    });
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
    $("#search-container").css({ "text-align": "center", "padding-bottom": "40px" });

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
