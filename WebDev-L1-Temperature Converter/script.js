
const temperatureInput = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", function () {
    const temperature = parseFloat(temperatureInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    if (temperatureInput.value.trim() === "" || !Number.isFinite(temperature)) {
        result.textContent = "Please enter a valid temperature.";
        return;
    }

    // Convert the input temperature to Celsius first
    let celsius;
    if (temperatureInput.value.trim() === "" || !Number.isFinite(temperature)) {
    result.textContent = "Please enter a valid temperature.";
    return;
}
if (
    (from === "C" && temperature < -273.15) ||
    (from === "F" && temperature < -459.67) ||
    (from === "K" && temperature < 0)
) {
    result.textContent = "Temperature cannot be below absolute zero.";
    return;
}

    if (from === "C") {
        celsius = temperature;
    } else if (from === "F") {
        celsius = (temperature - 32) * 5 / 9;
    } else {
        celsius = temperature - 273.15;
    }

    // Convert Celsius to the selected output unit
    let converted;

    if (to === "C") {
        converted = celsius;
    } else if (to === "F") {
        converted = (celsius * 9 / 5) + 32;
    } else {
        converted = celsius + 273.15;
    }

    result.textContent =
        `${temperature}°${from} = ${converted.toFixed(2)}°${to}`;
});

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function () {
    temperatureInput.value = "";
    fromUnit.value = "C";
    toUnit.value = "F";
    result.textContent = "Result will appear here";
});
