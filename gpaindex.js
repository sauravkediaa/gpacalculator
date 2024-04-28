const calc = () => {
    let sub1 = 'x';
    let sub2 = 'x';
    let sub3 = 'x';
    let sub4 = 'x';
    let sub5 = 'x';
    let sub6 = 'x';
    let sub7 = 'x';
    let sub8 = 'x';
    let sub9 = 'x';
    let sub10 = 'x';

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

    sub1 = document.getElementById('sub1').value;
    sub2 = document.getElementById('sub2').value;
    sub3 = document.getElementById('sub3').value;
    sub4 = document.getElementById('sub4').value;
    sub5 = document.getElementById('sub5').value;
    sub6 = document.getElementById('sub6').value;
    sub7 = document.getElementById('sub7').value;
    sub8 = document.getElementById('sub8').value;
    sub9 = document.getElementById('sub9').value;
    sub10 = document.getElementById('sub10').value;

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

    let totalCred = 0;
    let gradeScr = 0;

    //alert(totalCred);
    if (sub1 != 'grade') {
        totalCred += parseFloat(crd1);
        if (sub1 == 'S') {
            gradeScr += (parseFloat(crd1 * 10));
        }
        else if (sub1 == 'A') {
            gradeScr = gradeScr + (parseFloat(crd1 * 9));
        }
        else if (sub1 == 'B') {
            gradeScr = gradeScr + (parseFloat(crd1 * 8));
        }
        else if (sub1 == 'C') {
            gradeScr = gradeScr + (parseFloat(crd1 * 7));
        }
        else if (sub1 == 'D') {
            gradeScr = gradeScr + (parseFloat(crd1 * 6));
        }
        else if (sub1 == 'E') {
            gradeScr = gradeScr + (parseFloat(crd1 * 5));
        }
        else {
            gradeScr = gradeScr + (parseFloat(crd1 * 0));
        }
    }
    if (sub2 != 'grade') {
        totalCred += parseFloat(crd2);
        if (sub2 == 'S') {
            gradeScr = gradeScr + (parseFloat(crd2 * 10));
        }
        else if (sub2 == 'A') {
            gradeScr = gradeScr + (parseFloat(crd2 * 9));
        }
        else if (sub2 == 'B') {
            gradeScr = gradeScr + (parseFloat(crd2 * 8));
        }
        else if (sub2 == 'C') {
            gradeScr = gradeScr + (parseFloat(crd2 * 7));
        }
        else if (sub2 == 'D') {
            gradeScr = gradeScr + (parseFloat(crd2 * 6));
        }
        else if (sub2 == 'E') {
            gradeScr = gradeScr + (parseFloat(crd2 * 5));
        }
        else {
            gradeScr = gradeScr + (parseFloat(crd2 * 0));
        }
    }


    if (sub4 != 'grade') {
        totalCred += parseFloat(crd4);
        if (sub4 == 'S') {
            gradeScr = gradeScr + (parseFloat(crd4 * 10));
        }
        else if (sub4 == 'A') {
            gradeScr = gradeScr + (parseFloat(crd4 * 9));
        }
        else if (sub4 == 'B') {
            gradeScr = gradeScr + (parseFloat(crd4 * 8));
        }
        else if (sub4 == 'C') {
            gradeScr = gradeScr + (parseFloat(crd4 * 7));
        }
        else if (sub4 == 'D') {
            gradeScr = gradeScr + (parseFloat(crd4 * 6));
        }
        else if (sub4 == 'E') {
            gradeScr = gradeScr + (parseFloat(crd4 * 5));
        }
        else {
            gradeScr = gradeScr + (parseFloat(crd4 * 0));
        }
    }
    if (sub3 != 'grade') {
        totalCred += parseFloat(crd3);
        if (sub3 == 'S') {
            gradeScr = gradeScr + (parseFloat(crd3 * 10));
        }
        else if (sub3 == 'A') {
            gradeScr = gradeScr + (parseFloat(crd3 * 9));
        }
        else if (sub3 == 'B') {
            gradeScr = gradeScr + (parseFloat(crd3 * 8));
        }
        else if (sub3 == 'C') {
            gradeScr = gradeScr + (parseFloat(crd3 * 7));
        }
        else if (sub3 == 'D') {
            gradeScr = gradeScr + (parseFloat(crd3 * 6));
        }
        else if (sub3 == 'E') {
            gradeScr = gradeScr + (parseFloat(crd3 * 5));
        }
        else {
            gradeScr = gradeScr + (parseFloat(crd3 * 0));
        }
    }
    if (sub5 != 'grade') {
        totalCred += parseFloat(crd5);
        if (sub5 == 'S') {
            gradeScr = gradeScr + (parseFloat(crd5 * 10));
        }
        else if (sub5 == 'A') {
            gradeScr = gradeScr + (parseFloat(crd5 * 9));
        }
        else if (sub5 == 'B') {
            gradeScr = gradeScr + (parseFloat(crd5 * 8));
        }
        else if (sub5 == 'C') {
            gradeScr = gradeScr + (parseFloat(crd5 * 7));
        }
        else if (sub5 == 'D') {
            gradeScr = gradeScr + (parseFloat(crd5 * 6));
        }
        else if (sub5 == 'E') {
            gradeScr = gradeScr + (parseFloat(crd5 * 5));
        }
        else {
            gradeScr = gradeScr + (parseFloat(crd5 * 0));
        }
    }
    if (sub6 != 'grade') {
        totalCred += parseFloat(crd6);
        if (sub6 == 'S') {
            gradeScr = gradeScr + (parseFloat(crd6 * 10));
        }
        else if (sub6 == 'A') {
            gradeScr = gradeScr + (parseFloat(crd6 * 9));
        }
        else if (sub6 == 'B') {
            gradeScr = gradeScr + (parseFloat(crd6 * 8));
        }
        else if (sub6 == 'C') {
            gradeScr = gradeScr + (parseFloat(crd6 * 7));
        }
        else if (sub6 == 'D') {
            gradeScr = gradeScr + (parseFloat(crd6 * 6));
        }
        else if (sub6 == 'E') {
            gradeScr = gradeScr + (parseFloat(crd6 * 5));
        }
        else {
            gradeScr = gradeScr + (parseFloat(crd6 * 0));
        }
    }


    if (sub7 != 'grade') {
        totalCred += parseFloat(crd7);
        if (sub7 == 'S') {
            gradeScr = gradeScr + (parseFloat(crd7 * 10));
        }
        else if (sub7 == 'A') {
            gradeScr = gradeScr + (parseFloat(crd7 * 9));
        }
        else if (sub7 == 'B') {
            gradeScr = gradeScr + (parseFloat(crd7 * 8));
        }
        else if (sub7 == 'C') {
            gradeScr = gradeScr + (parseFloat(crd7 * 7));
        }
        else if (sub7 == 'D') {
            gradeScr = gradeScr + (parseFloat(crd7 * 6));
        }
        else if (sub7 == 'E') {
            gradeScr = gradeScr + (parseFloat(crd7 * 5));
        }
        else {
            gradeScr = gradeScr + (parseFloat(crd7 * 0));
        }
    }

    if (sub8 != 'grade') {
        totalCred += parseFloat(crd8);
        if (sub8 == 'S') {
            gradeScr = gradeScr + (parseFloat(crd8 * 10));
        }
        else if (sub8 == 'A') {
            gradeScr = gradeScr + (parseFloat(crd8 * 9));
        }
        else if (sub8 == 'B') {
            gradeScr = gradeScr + (parseFloat(crd8 * 8));
        }
        else if (sub8 == 'C') {
            gradeScr = gradeScr + (parseFloat(crd8 * 7));
        }
        else if (sub8 == 'D') {
            gradeScr = gradeScr + (parseFloat(crd8 * 6));
        }
        else if (sub8 == 'E') {
            gradeScr = gradeScr + (parseFloat(crd8 * 5));
        }
        else {
            gradeScr = gradeScr + (parseFloat(crd8 * 0));
        }
    }

    if (sub9 != 'grade') {
        totalCred += parseFloat(crd9);
        if (sub9 == 'S') {
            gradeScr = gradeScr + (parseFloat(crd9 * 10));
        }
        else if (sub9 == 'A') {
            gradeScr = gradeScr + (parseFloat(crd9 * 9));
        }
        else if (sub9 == 'B') {
            gradeScr = gradeScr + (parseFloat(crd9 * 8));
        }
        else if (sub9 == 'C') {
            gradeScr = gradeScr + (parseFloat(crd9 * 7));
        }
        else if (sub9 == 'D') {
            gradeScr = gradeScr + (parseFloat(crd9 * 6));
        }
        else if (sub9 == 'E') {
            gradeScr = gradeScr + (parseFloat(crd9 * 5));
        }
        else {
            gradeScr = gradeScr + (parseFloat(crd9 * 0));
        }
    }

    if (sub10 != 'grade') {
        totalCred += parseFloat(crd10);
        if (sub10 == 'S') {
            gradeScr = gradeScr + (parseFloat(crd10 * 10));
        }
        else if (sub10 == 'A') {
            gradeScr = gradeScr + (parseFloat(crd10 * 9));
        }
        else if (sub10 == 'B') {
            gradeScr = gradeScr + (parseFloat(crd10 * 8));
        }
        else if (sub10 == 'C') {
            gradeScr = gradeScr + (parseFloat(crd10 * 7));
        }
        else if (sub10 == 'D') {
            gradeScr = gradeScr + (parseFloat(crd10 * 6));
        }
        else if (sub10 == 'E') {
            gradeScr = gradeScr + (parseFloat(crd10 * 5));
        }
        else {
            gradeScr = gradeScr + (parseFloat(crd10 * 0));
        }
    }

    let gpa = (gradeScr / totalCred);
    document.getElementById('showGPA').innerHTML = `<big><big>${gpa.toFixed(2)}</big></big>`;
    document.getElementById('showCred').innerHTML = `<big><big>${totalCred}</big></big>`;
}

const resetForm = () => {
    // Reset all input fields to empty
    sub1 = document.getElementById('sub1').value = 'grade';
    sub2 = document.getElementById('sub2').value = 'grade';
    sub3 = document.getElementById('sub3').value = 'grade';
    sub4 = document.getElementById('sub4').value = 'grade';
    sub5 = document.getElementById('sub5').value = 'grade';
    sub6 = document.getElementById('sub6').value = 'grade';
    sub7 = document.getElementById('sub7').value = 'grade';
    sub8 = document.getElementById('sub8').value = 'grade';
    sub9 = document.getElementById('sub9').value = 'grade';
    sub10 = document.getElementById('sub10').value = 'grade';

    crd1 = document.getElementById('crd1').value = '';
    crd2 = document.getElementById('crd2').value = '';
    crd3 = document.getElementById('crd3').value = '';
    crd4 = document.getElementById('crd4').value = '';
    crd5 = document.getElementById('crd5').value = '';
    crd6 = document.getElementById('crd6').value = '';
    document.getElementById('crd7').value = '';
    document.getElementById('crd8').value = '';
    document.getElementById('crd9').value = '';
    document.getElementById('crd10').value = '';

    // Clear the displayed converted CGPA
    document.getElementById('showCGPA').innerHTML = '';
    document.getElementById('showCred').innerHTML = '';
}