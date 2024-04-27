const calc = () => {
  let totalCred = 0;
  let gradeScr = 0;

  // Loop through all subject rows
  document.querySelectorAll('table tr').forEach((row, index) => {
    if (index > 0) { // Skip header row
      const subject = row.querySelector('input[type="text"]').value;
      const grade = row.querySelector('select').value;
      const credits = parseFloat(row.querySelector('input[type="number"]').value);

      if (grade !== 'grade' && !isNaN(credits) && credits > 0) {
        totalCred += credits;
        switch (grade) {
          case 'S':
            gradeScr += credits * 10;
            break;
          case 'A':
            gradeScr += credits * 9;
            break;
          case 'B':
            gradeScr += credits * 8;
            break;
          case 'C':
            gradeScr += credits * 7;
            break;
          case 'D':
            gradeScr += credits * 6;
            break;
          case 'E':
            gradeScr += credits * 5;
            break;
          case 'F':
            gradeScr += credits * 0;
            break;
        }
      }
    }
  });

  const gpa = gradeScr / totalCred;
  document.getElementById('showGPA').innerHTML = `<big><big>${gpa.toFixed(2)}</big></big>`;
  document.getElementById('showCred').innerHTML = `<big><big>${totalCred}</big></big>`;
}

const resetForm = () => {
  document.querySelectorAll('table tr').forEach((row, index) => {
    if (index > 0) { // Skip header row
      row.querySelector('input[type="text"]').value = '';
      row.querySelector('select').value = 'grade';
      row.querySelector('input[type="number"]').value = '';
    }
  });

  document.getElementById('showGPA').innerHTML = '';
  document.getElementById('showCred').innerHTML = '';
}

const addSubject = () => {
  const table = document.querySelector('table');
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td id="line"><input type="text" placeholder="Subject" /></td>
    <td id="line">
      <select class="grade-select">
        <option value="grade">Grade</option>
        <option value="S">S</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
      </select>
    </td>
    <td id="line"><input type="number" placeholder="Credit" /></td>
  `;
  table.appendChild(newRow);
};
