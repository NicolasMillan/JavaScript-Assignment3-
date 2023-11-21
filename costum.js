// Developer : Nicolas Millan
// StN: 200533728

let developerText = document.querySelector("#Developer")
let studentText = document.querySelector("#StNumber")
let butonForAutor = document.querySelector("#creatorButton")
let Button = document.querySelector("#finalButton")
let userVinNumber = document.querySelector("#vinNumber")

//=============== Conecting with the API ==============================
// const axios = require('axios');



async function populate(){

    let vinNumberImput = "1GTG6CEN0L1139305"
    // another vin number : KMHDH4AE3GU515410
    const url = 'https://car-api2.p.rapidapi.com/api/vin/'+ userVinNumber.value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8fcad0a341msh1bdbd944f91e44dp13a2d3jsn7c0dfed7e69e',
            'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        
        showcarData(result)//Passing the data to the showcar function
        
    } catch (error) {
        console.error(error);
    }
}
// STEP 3b: Call the populate() function


function showcarData(jsonData){

// ===== Selecting the P elements 
// ==== Car Specifications ========
let CarYear = document.querySelector("#carYear")
let CarMake = document.querySelector("#carMake")
let CarTrim = document.querySelector("#carTrim")

// ==== Enegine Characteristics ====
let CarManufacture = document.querySelector("#carManufacture")
let CarPlantCountry = document.querySelector("#carPlantCountry")
let CarPlantState = document.querySelector("#carPlantState")
let CarEngineConfiguration = document.querySelector("#carEngineConfiguration")
let CarNumberCylinders = document.querySelector("#carNumberCylinders")
let CarPowerKm = document.querySelector("#carPowerKm")
let CarStrokeCycles = document.querySelector("#carStrokeCycles")
let CarValveTrainDesign = document.querySelector("#carValveTrainDesign")


    // ==== Car Specifications ========
    CarYear.textContent = (jsonData.year === null) ? "No Information" : jsonData.year;
    CarMake.textContent = (jsonData.make === null) ? "No Information" : jsonData.make;
    CarTrim.textContent = (jsonData.trim === null) ? "No Information" : jsonData.trim;

    // ==== Enegine Characteristics ====
    CarManufacture.textContent = (jsonData.specs.manufacturer_name === null) ? "No Information" : jsonData.specs.manufacturer_name;
    CarPlantCountry.textContent = (jsonData.specs.plant_country === null) ? "No Information" : jsonData.specs.plant_country;
    // if statement that change from state to city
    CarPlantState.textContent = (jsonData.specs.plant_state === null) ? jsonData.specs.plant_city : jsonData.specs.plant_state;
    CarEngineConfiguration.textContent = (jsonData.specs.engine_configuration === null) ? "No Information" : jsonData.specs.engine_configuration;
    CarNumberCylinders.textContent = (jsonData.specs.engine_number_of_cylinders === null) ? "No Information" : jsonData.specs.engine_number_of_cylinders
    CarPowerKm.textContent = (jsonData.specs.engine_power_kw === null) ? "No Information" : jsonData.specs.engine_power_kw;
    CarStrokeCycles.textContent = (jsonData.specs.engine_stroke_cycles === null) ? "No Information" : jsonData.specs.engine_stroke_cycles;
    CarValveTrainDesign.textContent = (jsonData.specs.valve_train_design === null) ? "No Information" : jsonData.specs.valve_train_design;

}

//=============== Event Listeners ==============================
butonForAutor.addEventListener('click', function showcreator(){
    studentText.textContent = "Developer: Nicolas Millan"
    developerText.textContent = "StNumber: 200533728"
});
Button.addEventListener('click', populate);