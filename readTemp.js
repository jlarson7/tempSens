const sensor = require('ds18b20-raspi');
const delay = require('delay');
// round temperature reading to 1 digit
while(1){
	var tempC = sensor.readSimpleC(1);
	console.log(`${tempC} degC`);
	await delay(2000);
}
 
// round temperature reading to 1 digit
sensor.readSimpleC(1, (err, temp) => {
    if (err) {
        console.log(err);
    } else {
    console.log(`${temp} degC`);
    }
});