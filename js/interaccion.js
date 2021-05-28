$(function(){


    $("#portfolio").click(function(){
        $("#portfolio").css("background-color","red");
    });

    $("#about-menu").click(function(){
        fetch("paises/copa.html")
            .then(function(response){
                return response.text();
            })
            .then(function(data){
                console.log(data);
                $("#main-content").html(data);
            })
    });

    $("h1").each(function(data){
        console.log(data);
    })





})