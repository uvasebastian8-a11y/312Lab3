$(document).ready(function() {
    
    // MEMBER 1: Home Page Hero Animation
    $("#hero-box").hide().fadeIn(2000);

    // MEMBER 2: Innovations Page Highlighting
    $("#highlight-btn").on("click", function() {
        $(".innovation-card").toggleClass("border-primary shadow-lg");
        
        // Toggle button text logic
        if ($(this).text() === "Focus on Tech") {
            $(this).text("Reset View").removeClass("btn-success").addClass("btn-primary");
        } else {
            $(this).text("Focus on Tech").removeClass("btn-primary").addClass("btn-success");
        }
    });

    // MEMBER 1 & 2: About Page Bio Toggles
    $(".info-btn").on("click", function() {
        $(this).next(".bio-text").slideToggle();
    });

});