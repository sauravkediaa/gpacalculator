const cgpaCalculator = () => {
    let crd1 = '0';
    let crd2 = '0';
    let crd3 = '0';
    let crd4 = '0';
    let crd5 = '0';
    let crd6 = '0';
    let crd7 = '0';
    let crd8 = '0';

    let gpa1 = '0';
    let gpa2 = '0';
    let gpa3 = '0';
    let gpa4 = '0';
    let gpa5 = '0';
    let gpa6 = '0';
    let gpa7 = '0';
    let gpa8 = '0';

    crd1 = document.getElementById('crd1').value;
    crd2 = document.getElementById('crd2').value;
    crd3 = document.getElementById('crd3').value;
    crd4 = document.getElementById('crd4').value;
    crd5 = document.getElementById('crd5').value;
    crd6 = document.getElementById('crd6').value;
    crd7 = document.getElementById('crd7').value;
    crd8 = document.getElementById('crd8').value;

    gpa1 = document.getElementById('gpa1').value;
    gpa2 = document.getElementById('gpa2').value;
    gpa3 = document.getElementById('gpa3').value;
    gpa4 = document.getElementById('gpa4').value;
    gpa5 = document.getElementById('gpa5').value;
    gpa6 = document.getElementById('gpa6').value;
    gpa7 = document.getElementById('gpa7').value;
    gpa8 = document.getElementById('gpa8').value;

    let totalCred = 0;
    let product = 0;

    // let cgpa = cred*gpa/total_creds

    //alert(totalCred);
    if (crd1) {
        totalCred += parseFloat(crd1);
        product += parseFloat(crd1) * parseFloat(gpa1);
    }
    if (crd2) {
        totalCred += parseFloat(crd2);
        product += parseFloat(crd2) * parseFloat(gpa2);
    }

    if (crd3) {
        totalCred += parseFloat(crd3);
        product += parseFloat(crd3) * parseFloat(gpa3);
    }

    if (crd4) {
        totalCred += parseFloat(crd4);
        product += parseFloat(crd4) * parseFloat(gpa4);
    }

    if (crd5) {
        totalCred += parseFloat(crd5);
        product += parseFloat(crd5) * parseFloat(gpa5);
    }
    if (crd6) {
        totalCred += parseFloat(crd6);
        product += parseFloat(crd6) * parseFloat(gpa6);
    }
    if (crd7) {
        totalCred += parseFloat(crd7);
        product += parseFloat(crd7) * parseFloat(gpa7);
    }
    if (crd8) {
        totalCred += parseFloat(crd8);
        product += parseFloat(crd8) * parseFloat(gpa8);
    }


    let cgpa = product / totalCred;
    document.getElementById('showCGPA').innerHTML = `${cgpa.toFixed(2)}`;
    document.getElementById('showCred').innerHTML = `${totalCred}`;
}


const resetForm = () => {
    // Reset all input fields to empty
    crd1 = document.getElementById('crd1').value = '';
    crd2 = document.getElementById('crd2').value = '';
    crd3 = document.getElementById('crd3').value = '';
    crd4 = document.getElementById('crd4').value = '';
    crd5 = document.getElementById('crd5').value = '';
    crd6 = document.getElementById('crd6').value = '';
    crd7 = document.getElementById('crd7').value = '';
    crd8 = document.getElementById('crd8').value = '';

    gpa1 = document.getElementById('gpa1').value = '';
    gpa2 = document.getElementById('gpa2').value = '';
    gpa3 = document.getElementById('gpa3').value = '';
    gpa4 = document.getElementById('gpa4').value = '';
    gpa5 = document.getElementById('gpa5').value = '';
    gpa6 = document.getElementById('gpa6').value = '';
    gpa7 = document.getElementById('gpa7').value = '';
    gpa8 = document.getElementById('gpa8').value = '';


    // Clear the displayed converted CGPA
    document.getElementById('showCGPA').innerHTML = '';
    document.getElementById('showCred').innerHTML = '';
}


// Function to handle keydown event on input fields
function handleEnterKeyPress(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); // Prevent default action of Enter key
        cgpaCalculator(); // Call calc function to calculate

        // Scroll to the bottom of the screen
        window.scrollTo({
            top: document.body.scrollHeight - window.innerHeight,
            behavior: 'smooth' // Add smooth scrolling behavior if desired
        });
    }
}

// Function to handle keydown event globally for Escape key
function handleEscapeKeyPress(event) {
    if (event.keyCode === 27) {
        event.preventDefault();
        resetForm();

        // Scroll to the top of the screen
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Add smooth scrolling behavior if desired
        });
    }
}


// Add global event listener for Escape key press
document.addEventListener('keydown', handleEscapeKeyPress);
document.addEventListener('keydown', handleEnterKeyPress);