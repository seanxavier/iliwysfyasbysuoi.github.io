

$(document).ready(function(){


})

function SendEmail(){
    var subject = $("#emailsubject").val();
    var body = $("#emailbody").val();
    window.location = `mailto:sean.xaviernieva@gmail.com?subject=${subject}&body=${body}`;
}


