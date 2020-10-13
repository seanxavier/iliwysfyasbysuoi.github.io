$(document).ready(function(){
    





    $('#btn1').click(function(){
        var code = $("#p1").val();

        $.post('/cryptogram', {code: code}, function(result){
            if(result != "null")
                $(".err").html(result);
            else{
                // window.location.href = "/p3/"+code;
                window.location.replace("/Aurelias-Foot-Fetish/"+code);
            }

        })


    })







    
});
