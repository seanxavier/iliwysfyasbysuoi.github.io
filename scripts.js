

$(document).ready(function(){


})

function SendEmail(){
    var subject = $("#emailsubject").val();
    var body = $("#emailbody").val();
    alert(subject + body);


    window.location = `mailto:sean.xaviernieva@gmail.com?subject=${subject}&body=${body}`;
}


