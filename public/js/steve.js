$(document).ready(function(){
    





    $('#btn4').click(function(){
        var code = $("#p4").val();

        $.post('/steve', {code: code}, function(result){
            if(result != "null")
                $(".err").html(result);
            else{
                // window.location.href = "/p3/"+code;
                window.location.replace("/End/"+code);
            }

        })


    })







    
});
