
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

const controller ={
    getHome: function(req,res){
        res.render("home", {});
    },

    getAureliasFoot: function(req, res){
        var code = req.params.code;

        if(code.toUpperCase() == "WAP PUNANI DASANI XXX")
            res.render("aureliasfoot", {});
        else{
            res.redirect("/Cryptogram");
        }
    },
    postAureliasFoot: function(req, res){
        var code = req.body.code;

        var err = ["uhmm nice try but no", "try aGAIN", "wag kang manghula!!!", "maling mali talaga sorry", "mali pero wag ka susuko", 'mali, kaya mo yan'];
        console.log(code);

        if(code == 10){
            res.send("null");
        }else{
            var i = getRandomInt(4);
            res.send(err[getRandomInt(4)]);
        }

    
    },


    getCryptogram: function(req,res){
        res.render("cryptogram", {});
    },
    postCryptogram: function(req, res){
        var code = req.body.code;
        var err = ["uhmm nice try but no", "try aGAIN", "wag kang manghula!!!", "maling mali talaga sorry", "mali pero wag ka susuko", 'mali, kaya mo yan'];

        if(code.toUpperCase() == "WAP PUNANI DASANI XXX"){
            res.send("null");
        }else{
            var i = getRandomInt(4);
            res.send(err[getRandomInt(4)]);
        }



    },

    getNonogram: function(req,res){

        var code = req.params.code;

        if(code == "10")
            res.render("nonogram");
        else{
            res.redirect("/Aurelias-Foot-Fetish/WAP%20PUNANI%20DASANI%20XXX");
        }
    },
    postNonogram: function(req, res){
        var code = req.body.code;
        var err = ["uhmm nice try but no", "try aGAIN", "wag kang manghula!!!", "maling mali talaga sorry", "mali pero wag ka susuko", 'mali, kaya mo yan'];

        if(code.toUpperCase() == "CAPRICORN"){
            res.send("null");
        }else{
            var i = getRandomInt(4);
            res.send(err[getRandomInt(4)]);
        }



    },

    getSteve: function(req,res){

        var code = req.params.code;

        if(code.toUpperCase() == "CAPRICORN")
            res.render("steve");
        else{
            res.redirect("/Nonogram-hmmmmm/10");
        }
    },
    postSteve: function(req, res){
        var code = req.body.code;
        var err = ["uhmm nice try but no", "try aGAIN", "wag kang manghula!!!", "maling mali talaga sorry", "mali pero wag ka susuko", 'mali, kaya mo yan'];

        console.log(code)
        if(code.toUpperCase() == "STEVEHARVEY_NBC"){
            res.send("null");
        }else{
            var i = getRandomInt(4);
            res.send(err[getRandomInt(4)]);
        }
    },

    getEnd: function(req,res){

        var code = req.params.code;

        if(code.toUpperCase() == "STEVEHARVEY_NBC")
            res.render("end");
        else{
            res.redirect("/Steve-AntiCheatTextHere/Capricorn");
        }
    }
    

}

module.exports = controller;