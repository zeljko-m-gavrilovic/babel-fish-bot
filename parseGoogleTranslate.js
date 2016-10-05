'use strict';
var request = require('request');
//var cheerio = require('cheerio');

//var translationUrl = "http://www.bing.com/translator/api/Dictionary/Lookup?from=en&to=sr-Latn&text=aeroplane";

function translate(word, intoLanguage, callback) {
    var translationUrl = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" + intoLanguage + "&dt=t&q=" + word;
    console.log("translationUrl " + translationUrl);

    var translatedText = "no translation";
    request.get(translationUrl, function(error, response, body) {
        if(error) {
            console.log("there is error " + error);
        }
        
        console.log("before parsing to JSON");
        var jsonResponse = eval(body);
        console.log("after parsing to JSON");

        console.log("body" + body);
        console.log(jsonResponse);
        var translatedText = jsonResponse[0][0][0];
        console.log(translatedText);
        callback(translatedText);
    });
  }
translate("cake", "sr", function(translation) {
    console.log("resulted translation is " + translation);
});
 
