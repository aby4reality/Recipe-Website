function showDetails() {
    var detailsSection = document.getElementById("detailsDiv");
    var ingredientsSection = document.getElementById("ingredientsDiv");
    var instructionSection = document.getElementById("instructionsDiv");
    detailsSection.style.display = "block";
    ingredientsSection.style.display = "none";
    instructionSection.style.display = "none";
    const insTab = document.getElementById("insTab");
    const detailsTab = document.getElementById("detailsTab");
    const ingTab = document.getElementById("ingTab");
    detailsTab.classList.add("active");
    ingTab.classList.remove("active");
    insTab.classList.remove("active");
};
function showIngredients(){
    var detailsSection = document.getElementById("detailsDiv");
    var ingredientsSection = document.getElementById("ingredientsDiv");
    var instructionSection = document.getElementById("instructionsDiv");
    detailsSection.style.display = "none";
    ingredientsSection.style.display = "block";
    instructionSection.style.display = "none";
    const insTab = document.getElementById("insTab");
    const detailsTab = document.getElementById("detailsTab");
    const ingTab = document.getElementById("ingTab");
    detailsTab.classList.remove("active");
    ingTab.classList.add("active");
    insTab.classList.remove("active");
};
function showInstructions() {
    var detailsSection = document.getElementById("detailsDiv");
    var ingredientsSection = document.getElementById("ingredientsDiv");
    var instructionSection = document.getElementById("instructionsDiv");
    detailsSection.style.display = "none";
    ingredientsSection.style.display = "none";
    instructionSection.style.display = "block";
    const insTab = document.getElementById("insTab");
    const detailsTab = document.getElementById("detailsTab");
    const ingTab = document.getElementById("ingTab");
    detailsTab.classList.remove("active");
    ingTab.classList.remove("active");
    insTab.classList.add("active");
};