var score1 = +prompt("enter your marks1");
var score2 = +prompt("enter your marks2");
var score3 = +prompt("enter your marks3");
var total = score1+score2+score3;
alert(total);
var percent = total/300*100;
alert(percent);

var grade
if (percent >= 90) {
    grade = 'A';
} else if (percent >= 80) {
    grade = 'B';
} else if (percent >= 70) {
    grade = 'C';
} else if (percent >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}
alert(grade);
