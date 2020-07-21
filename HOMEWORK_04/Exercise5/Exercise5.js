$(document).ready(function () {
    var color = [
        "red",
        "blue",
        "gray",
        "black",
        "green",
        "pink",
        "orange",
        "yellow",
    ];

    var randoma = Math.floor(Math.random() * color.length);
    $("#navigation").children().css("background-color", color[randoma]);
    
    $("#navigation").children().hover(function () {
        var random = Math.floor(Math.random() * color.length);
        var randomx = Math.floor(Math.random() * (300-100) + 100)
        $(this).css("background-color", color[random]);
        $(this).css("transition", "height 2s");
        $(this).css("height", randomx + "px");
        
    
            
        }, function () {
            $(this).css("background-color", color[randoma]);
            $(this).css("transition", "height 2s");
            $(this).css("height", "50px");
        }
    );
});