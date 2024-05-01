let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let labels = document.querySelectorAll('label');

let getREs = document.querySelector(".get");

let dayError = document.querySelector(".day-error");
let monthError = document.querySelector(".month-error");
let yearError = document.querySelector(".year-error");

let ye = document.querySelector(".ye");
let mo = document.querySelector(".mo");
let da = document.querySelector(".da");
getREs.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (day.value > 31 || day.value < 1) {
        day.style.borderColor = "red";
        dayError.innerHTML = "Must be between 1 and 31";
    } else {
        dayError.innerHTML = "";
        day.style.borderColor = "purple";
    }

    if (year.value > 2024 || year.value <= 0 || year.value === "") {
        year.style.borderColor = "red";
        yearError.innerHTML = "Must be in the past";
    } else {
        yearError.innerHTML = "";
        year.style.borderColor = "purple";
    }

    if (month.value > 12 || month.value <= 0) {
        month.style.borderColor = "red";
        monthError.innerHTML = "Must be between 1 and 12";
    } else {
        monthError.innerHTML = "";
        month.style.borderColor = "purple";
    }

    let isValidDate = new Date(year.value, month.value - 1, day.value).getDate() === parseInt(day.value);
    if (!isValidDate) {
        day.style.borderColor = "red";
        dayError.innerHTML = "Must be a valid day";
    }

    const currentDate = new Date();
    const birthDate = new Date(year.value, month.value - 1, day.value);
    
    // Calculate the difference in years
    let ageInYears = currentDate.getFullYear() - birthDate.getFullYear();

    // Check if the birthday hasn't occurred yet this year
    if (currentDate.getMonth() < birthDate.getMonth() || 
        (currentDate.getMonth() === birthDate.getMonth() && 
         currentDate.getDate() < birthDate.getDate())) {
        ageInYears--;
    }

    // Calculate the difference in months
    let ageInMonths = currentDate.getMonth() - birthDate.getMonth();
    if (ageInMonths < 0) {
        ageInMonths += 12;
    }

    // Calculate the difference in days
    let ageInDays = currentDate.getDate() - birthDate.getDate();
    if (ageInDays < 0) {
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
        ageInDays += lastMonth.getDate();
    }

    ye.innerHTML = ageInYears;
    mo.innerHTML = ageInMonths;
    da.innerHTML = ageInDays
});
