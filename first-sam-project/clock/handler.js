const moment = require("moment");
const momentTimezone = require("moment-timezone");

exports.clock = async (event) => {
  console.log("Clock function run!");

  const message = moment().format();

  const response = {
    statusCode: 200,
    body: JSON.stringify(message),
  };

  return response;
};

exports.timeZoneClock = async (event) => {
  console.log("timeZoneClock function run!");
  let timeZone = event.queryStringParameters && event.queryStringParameters.tz;

  let time = moment().format();

  if (timeZone !== null) {
    time = moment.tz(timeZone).format();
  } else {
    timeZone = "GMT 0";
  }

  const message = `The time in ${timeZone} is ${time}`;

  const response = {
    statusCode: 200,
    body: JSON.stringify(message),
  };

  return response;
};
