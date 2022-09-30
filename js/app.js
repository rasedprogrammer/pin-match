function getPin() {
	const pin = generatePin();
	const pinString = pin + "";
	if (pinString.length === 4) {
		return pin;
	} else {
		// console.log("Pin 3 digit not found", pin);
		return getPin();
	}
}
function generatePin() {
	const random = Math.round(Math.random() * 10000);
	return random;
}
document.getElementById("generate-pin").addEventListener("click", function () {
	const pin = getPin();
	// console.log(pin);
	const displayPinField = document.getElementById("display-pin");
	displayPinField.value = pin;
});
document.getElementById("calculator").addEventListener("click", function () {
	const number = event.target.innerText;
	const typedNumbersField = document.getElementById("typed-numbers");
	const previousNumberType = typedNumbersField.value;
	if (isNaN(number)) {
		if (number === "C") {
			typedNumbersField.value = "";
		} else if (number === "<") {
			const digists = previousNumberType.split("");
			digists.pop();
			const remainingDigists = digists.join("");
			typedNumbersField.value = remainingDigists;
		}
	} else {
		const newNumberType = previousNumberType + number;
		typedNumbersField.value = newNumberType;
	}
});
document.getElementById("verify-pin").addEventListener("click", function () {
	const displayPinField = document.getElementById("display-pin");
	const currentPin = displayPinField.value;

	const typedNumbersField = document.getElementById("typed-numbers");
	const currentTypedNumber = typedNumbersField.value;

	const pinSuccessMassage = document.getElementById("pin-success");
	const pinFailureMassage = document.getElementById("pin-failure");

	if (currentTypedNumber === currentPin) {
		pinSuccessMassage.style.display = "block";
		pinFailureMassage.style.display = "none";
	} else {
		pinFailureMassage.style.display = "block";
		pinSuccessMassage.style.display = "none";
	}
});
