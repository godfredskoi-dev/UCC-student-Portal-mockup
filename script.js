window.addEventListener('DOMContentLoaded', () =>{
const table1 = document.getElementById('firstSem');
const creditCell = table1.querySelectorAll('.creditCell');
const pointCell = table1.querySelectorAll('.pointCell');
   let totalCredits = 0;
   creditCell.forEach(cell =>{
    totalCredits += parseFloat(cell.textContent) || 0;
   });
   //console.log('Calculated Total Credits:', totalCredits)
 
    const totalCredits1 = document.getElementById('totalCredits1');
    totalCredits1.textContent = totalCredits;


   let totalPoints= 0;
   pointCell.forEach(cell =>{
    totalPoints += parseFloat(cell.textContent) || 0;
   });
   //console.log('Calculated Total Points:', totalPoints)
 
    const TotalPoints1 = document.getElementById('TotalPoints1');
    TotalPoints1.textContent = totalPoints;

    const table2 =document.getElementById('secondSem');
    const creditCell2 = table2.querySelectorAll('.creditCell2');
    const pointCell2 = table2.querySelectorAll('.pointCell2');

     let secondSemCredits = 0;
   creditCell2.forEach(cell =>{
    secondSemCredits += parseFloat(cell.textContent) || 0;
   });
   //console.log('Calculated Total Credits:', secondSemCredits)
 
    const totalCredits2 = document.getElementById('totalCredits2');
    totalCredits2.textContent = secondSemCredits;

       let secondSemPoints = 0;
   pointCell2.forEach(cell =>{
    secondSemPoints += parseFloat(cell.textContent) || 0;
   });
    //console.log('Calculated Total Credits:', secondSemPoints)
 
    const TotalPoints2 = document.getElementById('TotalPoints2');
    TotalPoints2.textContent = secondSemPoints;

    
// --- Semester 1 GPA ---
const gpa1 = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
document.getElementById('gpa1').textContent = gpa1;

// For Semester 1 standalone summary, CGPA is equal to Sem 1 GPA
document.getElementById('cgpa1').textContent = gpa1;


// --- Semester 2 GPA & Overall CGPA ---
const gpa2 = secondSemCredits > 0 ? (secondSemPoints / secondSemCredits).toFixed(2) : '0.00';
document.getElementById('gpa2').textContent = gpa2;

// Overall CGPA combining both semesters
const totalCreditsAll = totalCredits + secondSemCredits;
const totalPointsAll = totalPoints + secondSemPoints;
const overallCgpa = totalCreditsAll > 0 ? (totalPointsAll / totalCreditsAll).toFixed(2) : '0.00';

document.getElementById('cgpa2').textContent = overallCgpa;


const cgpaDisplay = document.getElementById('cgpaDisplay');
cgpaDisplay.textContent= overallCgpa;

const creditsDisplay = document.getElementById('creditsDisplay');
creditsDisplay.textContent= totalCreditsAll;
});

const signOut = document.getElementById('signOut');
  
if(signOut){
    signOut.addEventListener('click', function(e){
        e.preventDefault();

    const userConfirmed = confirm('Are you sure you want to log out?');
     if(userConfirmed){
          setTimeout(function(){
             window.location.href = 'index.html';
        }, 1500);
       
     }
     

});
}