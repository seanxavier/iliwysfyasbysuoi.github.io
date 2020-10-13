$(document).ready(function(){
    





    $('#btn3').click(function(){
        var code = $("#p3").val();

        $.post('/nonogram', {code: code}, function(result){
            if(result != "null")
                $(".err").html(result);
            else{
                // window.location.href = "/p3/"+code;
                window.location.replace("/Steve-AntiCheatTextHere/"+code);
            }

        })


    })







    
});
