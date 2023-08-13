document.addEventListener("DOMContentLoaded", function() {
    const Rstar = document.getElementById("Rstar");
    const RstarValue = document.getElementById("Rstar-value");
    
    Rstar.addEventListener("input", function() {
        RstarValue.textContent = Rstar.value;
        calculateDrakeEquation();
    });
    
    // Repeat the above for each variable in the Drake Equation
});

function calculateDrakeEquation() {
    // Get values from all sliders
    const RstarValue = parseFloat(document.getElementById("Rstar").value);
    // ... Fetch values for all other variables ...

    const N = RstarValue;  // The multiplication with other values is commented out for now.

    document.getElementById("result").textContent = "Estimated civilizations: " + N;
}
