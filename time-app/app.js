var time = require('time');
exports.handler = async (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("Australia/Melobourne");
    callback(null, {
        statusCode: '200',
        body: 'The time in Melbourne Australia is: ' + currentTime.toString(),
    });
};