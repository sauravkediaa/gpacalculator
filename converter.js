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
    document.getElementById('showConvertedCGPA').innerHTML = `${convertedCGPA.toFixed(2)}`;
}

const resetForm = () => {
    // Reset all input fields to empty
    document.getElementById('original').value = '';
    document.getElementById('newScale').value = '';
    document.getElementById('currentGPA').value = '';

    // Clear the displayed converted CGPA
    document.getElementById('showConvertedCGPA').innerHTML = '';
}

// Function to handle keydown event on input fields
function handleEnterKeyPress(event) {
    if (event.keyCode === 13) {
        if (event.target.closest('nav')) { // Check if the target element is within <nav>
            return; //return if true
        }

        event.preventDefault(); // Prevent default action of Enter key
        cgpaConverter(); // Call calc function to calculate
    }
}

// Function to handle keydown event globally for Escape key
function handleEscapeKeyPress(event) {
    if (event.keyCode === 27) {
        event.preventDefault();
        resetForm();

    }
}


// Add global event listener for Escape key press
document.addEventListener('keydown', handleEscapeKeyPress);
document.addEventListener('keydown', handleEnterKeyPress);