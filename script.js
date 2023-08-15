document.addEventListener("DOMContentLoaded", function() {
    const components = ["Rstar", "fp", "ne", "fl", "fi", "fc", "L"];

    components.forEach(component => {
        const slider = document.getElementById(component);
        const valueSpan = document.getElementById(`${component}-value`);

        // Immediate function to show the initial value on page load
        valueSpan.textContent = slider.value;

        slider.addEventListener("input", function() {
            valueSpan.textContent = slider.value;
            calculateDrakeEquation();
        });
    });
});

function calculateDrakeEquation() {
    const RstarValue = parseFloat(document.getElementById("Rstar").value);
    const fpValue = parseFloat(document.getElementById("fp").value);
    const neValue = parseFloat(document.getElementById("ne").value);
    const flValue = parseFloat(document.getElementById("fl").value);
    const fiValue = parseFloat(document.getElementById("fi").value);
    const fcValue = parseFloat(document.getElementById("fc").value);
    const LValue = parseFloat(document.getElementById("L").value);

    const N = RstarValue * fpValue * neValue * flValue * fiValue * fcValue * LValue;

    document.getElementById("result").textContent = "Estimated civilizations: " + N.toFixed(2); // .toFixed(2) will ensure you display only two decimal places

    const lightsContainer = document.getElementById("lightsContainer");
    lightsContainer.innerHTML = ""; // clear previous lights

    for(let i = 0; i < N; i++) {
        const light = document.createElement("div");
        light.classList.add("light");
        
        // Randomly position the light within the container
        light.style.top = `${Math.random() * 100}%`;
        light.style.left = `${Math.random() * 100}%`;

        lightsContainer.appendChild(light);
}

}
