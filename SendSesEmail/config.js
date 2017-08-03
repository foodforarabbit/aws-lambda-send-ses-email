"use strict";

var config = {
    "templateBucket" : "lambda-ses-email-template",
    "templateKey" : "Templates/Template.html",
    "targetAddress" : "contact@silkorb.com",
    "fromAddress": "Jekyll Contact Form <jekyll@silkorb.com>",
    "defaultSubject" : "Email From {{name}}"
}

module.exports = config
