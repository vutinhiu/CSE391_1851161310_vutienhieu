$(document).ready(function () {
    $("#text").keypress(function () { 
        var x = $("#text").val();
        $(".active").text(x);
              
    });
    $("#btn-change").click(function () { 
        var sValue = $("select").val();
        switch(parseInt(sValue)){
            case 1:
                $("p").removeClass();
                $("p").addClass("s1");
                break;
            case 2:
                $("p").removeClass();
                $("p").addClass("s2");
                break;
            case 3:
                $("p").removeClass();
                $("p").addClass("s3");
                break;
            case 4:
                $("p").removeClass();
                $("p").addClass("s4");
                break;
        }
    });

    $("#btn-new").click(function () { 
        $("p").removeClass("active");
        var $new = $("<p/>")   
                 .addClass("active")  
                 .html("<p></p>");

        $("#story").append($new);     
        $('#text').val('').change()
        
        
    });
});