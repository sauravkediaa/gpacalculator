const cgpaCalculator = () => {
    let crd1 = '0';
    let crd2 = '0';
    let crd3 = '0';
    let crd4 = '0';
    let crd5 = '0';
    let crd6 = '0';
    let crd7 = '0';
    let crd8 = '0';
    let crd9 = '0';
    let crd10 = '0';

    let gpa1 = '0';
    let gpa2 = '0';
    let gpa3 = '0';
    let gpa4 = '0';
    let gpa5 = '0';
    let gpa6 = '0';
    let gpa7 = '0';
    let gpa8 = '0';
    let gpa9 = '0';
    let gpa10 = '0';

    crd1 = document.getElementById('crd1').value;
    crd2 = document.getElementById('crd2').value;
    crd3 = document.getElementById('crd3').value;
    crd4 = document.getElementById('crd4').value;
    crd5 = document.getElementById('crd5').value;
    crd6 = document.getElementById('crd6').value;
    crd7 = document.getElementById('crd7').value;
    crd8 = document.getElementById('crd8').value;
    crd9 = document.getElementById('crd9').value;
    crd10 = document.getElementById('crd10').value;

    gpa1 = document.getElementById('gpa1').value;
    gpa2 = document.getElementById('gpa2').value;
    gpa3 = document.getElementById('gpa3').value;
    gpa4 = document.getElementById('gpa4').value;
    gpa5 = document.getElementById('gpa5').value;
    gpa6 = document.getElementById('gpa6').value;
    gpa7 = document.getElementById('gpa7').value;
    gpa8 = document.getElementById('gpa8').value;
    gpa9 = document.getElementById('gpa9').value;
    gpa10 = document.getElementById('gpa10').value;

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
    if (crd9) {
        totalCred += parseFloat(crd9);
        product += parseFloat(crd9) * parseFloat(gpa9);
    }if (crd10) {
        totalCred += parseFloat(crd10);
        product += parseFloat(crd10) * parseFloat(gpa10);
    }


    let cgpa = product / totalCred;
    document.getElementById('showCGPA').innerHTML = `<strong>${cgpa.toFixed(2)}</strong>`;
    document.getElementById('showCred').innerHTML = `<strong>${totalCred}</strong>`;
}


const resetForm = () => {
    // Reset all input fields to empty
    document.getElementById('crd1').value = '';
    document.getElementById('crd2').value = '';
    document.getElementById('crd3').value = '';
    document.getElementById('crd4').value = '';
    document.getElementById('crd5').value = '';
    document.getElementById('crd6').value = '';
    document.getElementById('crd7').value = '';
    document.getElementById('crd8').value = '';
    document.getElementById('crd9').value = '';
    document.getElementById('crd10').value = '';


    document.getElementById('gpa1').value = '';
    document.getElementById('gpa2').value = '';
    document.getElementById('gpa3').value = '';
    document.getElementById('gpa4').value = '';
    document.getElementById('gpa5').value = '';
    document.getElementById('gpa6').value = '';
    document.getElementById('gpa7').value = '';
    document.getElementById('gpa8').value = '';
    document.getElementById('gpa9').value = '';
    document.getElementById('gpa10').value = '';

    // Clear the displayed converted CGPA
    document.getElementById('showCGPA').innerHTML = '';
    document.getElementById('showCred').innerHTML = '';
}