// FAQ MODULE
$(document).ready(function() { 
    var $accordion = $('.accordion');

    // Initially hide all accordion content
    $accordion.find('.accordion_content').hide();
    // Initially display the accordion content with .expanded class
    $accordion.find('.accordion_group.expanded .accordion_content').show();

    $accordion.find('.accordion_header').click(function(){

        // Hide the displayed sibling accordion content so only one appears at a time
       $accordion.find(".accordion_header").not(this).parent(".accordion_group.expanded").removeClass('expanded').children('.accordion_content').stop(true,true).slideUp();

        if(!$(this).parent('.accordion_group').hasClass('expanded')){
            // Display the accordion content if it is not displayed
            $(this).parent(".accordion_group").addClass('expanded').children('.accordion_content').stop(true,true).slideDown();
        }
        else{
            // Hide the accordion content if it is displayed
            $(this).parent(".accordion_group").removeClass('expanded').children('.accordion_content').stop(true,true).slideUp();
        }
    });
});


// Well Module Close
 
$("#well .close").click(function(){
    $(this).parent("#well").fadeOut();
});

// Tabber Module
$(document).ready(function(){
    // Hide all panes initially except for the first 'active' one
    $(".custom-tabber-wrap .tab-pane").not(".active").hide();
    
    // Loop through all the tabber panes
    $('.custom-tabber-wrap .tabber-content .tab-pane').each(function(i, el){
       
       // Set the ID
       $(el).attr("id", "tab-" + i);
       
    });
    
    // Loop through all the tabber anchors
    $(".custom-tabber-wrap .tabber-tabs a").each(function(i, el){
        
        // Set HREF Using the Index
        $(el).attr("href", "#tab-" + i);
        
        // Variable for the Pane ID based on the HREF
        var ID = $(el).attr("href");
    
        // Click Function
        $(this).click(function(e){
    		
            // Prevent default functionality of the anchor
    		e.preventDefault();
    
            // If the parent LI does not have the active class
    		if(!$(this).parent().hasClass("active")){
                
                // Give the parent LI the active state styles and hide all other panes
    			$(this).parent().addClass("active").siblings().removeClass("active");
                
                // Fade in the corresponding pane and hide all other panes
    			$(ID).fadeIn().siblings().hide();
    		}
    	});
    
    });
});    