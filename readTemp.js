const sensor = require('ds18b20-raspi');
 
// round temperature reading to 1 digit
const tempC = sensor.readSimpleC(1);
console.log(`${tempC} degC`);
 
// round temperature reading to 1 digit
sensor.readSimpleC(1, (err, temp) => {
    if (err) {
        console.log(err);
    } else {
    console.log(`${temp} degC`);
    }
});