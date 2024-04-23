function calculateAge() {
    var birthdate = document.getElementById("birthdate").value;
    var today = new Date();
    var birthDate = new Date(birthdate);
    var ageYears = today.getFullYear() - birthDate.getFullYear();
    var ageMonths = today.getMonth() - birthDate.getMonth();
    var ageDays = today.getDate() - birthDate.getDate();
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }
    
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Clear previous results
    
    var yearPara = document.createElement("p");
    yearPara.textContent = "You are " + ageYears + " years old.";
    resultDiv.appendChild(yearPara);
    
    var monthPara = document.createElement("p");
    monthPara.textContent = "You are " + ageMonths + " months old.";
    resultDiv.appendChild(monthPara);
    
    var dayPara = document.createElement("p");
    dayPara.textContent = "You are " + ageDays + " days old.";
    resultDiv.appendChild(dayPara);
}
