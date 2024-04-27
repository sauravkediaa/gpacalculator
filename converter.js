const cgpaConverter = () => {
    // Retrieve input values
    const original = parseFloat(document.getElementById('original').value);
    const newScale = parseFloat(document.getElementById('newScale').value);
    const currentGPA = parseFloat(document.getElementById('currentGPA').value);

    // Check if all inputs are valid numbers
    if (isNaN(original) || isNaN(newScale) || isNaN(currentGPA)) {
        alert("Please enter valid numeric values for all fields.");
        // resetForm();
        return; // Exit the function if inputs are invalid
    }

    if (currentGPA > original) {
        alert("Current GPA can not be greater than Original GPA");
        // resetForm();
        return;
    }

    // Calculate conversion factor
    const factor = original / newScale;

    // Calculate converted CGPA
    const convertedCGPA = currentGPA / factor;

    // Display the converted CGPA to the user
    document.getElementById('showConvertedCGPA').innerHTML = `<big><big>${convertedCGPA.toFixed(2)}</big></big>`;
}

const resetForm = () => {
    // Reset all input fields to empty
    document.getElementById('original').value = '';
    document.getElementById('newScale').value = '';
    document.getElementById('currentGPA').value = '';

    // Clear the displayed converted CGPA
    document.getElementById('showConvertedCGPA').innerHTML = '';
}

