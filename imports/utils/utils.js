
export function format(number, omitDecimals) {
	if(omitDecimals) {
	  return regEx(Math.round(number));
	} else {
	  return regEx(Math.round(number * 100) / 100);   
	}
}

function regEx(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}