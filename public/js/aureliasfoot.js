$(document).ready(function(){
    





    $('#btn2').click(function(){
        var code = $("#p2").val();

        $.post('/aurelias-foot', {code: code}, function(result){
            if(result != "null")
                $(".err").html(result);
            else{
                // window.location.href = "/p3/"+code;
                window.location.replace("/Nonogram-hmmmmm/"+code);
            }

        })


    })

    $('#no').click(function(){
        $(this).remove();
        $("#no-text").html(`You have <span class="bg-yellow fc-black">NO</span> choice but to proceed !! -->`);

    })







    
});
