function produceDrivingRange(blockRange) {
	return function(tripStart, tripEnd){
		const end = parseInt(tripEnd, 10);
		const start = parseInt(tripStart, 10);
		const tripDistance = (end - start)
		const outOfRange = (tripDistance - blockRange)
		const withinRange = (blockRange - tripDistance)
		if (tripDistance > blockRange) {
			return `${outOfRange} blocks out of range`
		} else{
			return `within range by ${withinRange}`
		};

	};
}

function produceTipCalculator(billBeforeTip) {
	return function(tipPercentage) {
		return billBeforeTip * tipPercentage;
	};
}

function createDriver() {
	let driverId = 0;
	return class {
		constructor(name) {
			this.name = name;
			this.id = ++driverId;
		}
	};
}
