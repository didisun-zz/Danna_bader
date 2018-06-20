


$(document).ready(function(){
    $("ul.nav li a").click(function(){
        var headline = $(this).text();
        $("#headline").text(headline);
        var page = $(this).attr("href");
        var currentPage = $("#html-box");
        currentPage.fadeOut(null, function(){
            //currentPage.load("content/" + page + ".html");
            currentPage.fadeIn(500);
        });
             currentPage.fadeOut(null, function(){
            currentPage.load("content/" + page + ".html");
           // currentPage.fadeIn(500);
        });
        // promise().fadeIn("content/" + page + ".html");
       // $("#text-box").load("content/" + page + ".html");
        return false;
    });
});


/*
$(document).ready(function(){
    $("ul.nav li a").click(function(){
        var page = $(this).attr("href");
        $("#text-box").load("content/" + page + ".html");
        return false;
    });
});
*/
