document.write("JS DATATYPES" + "<br>");
var num = 100;
var str = "Ihtisham"
var bole = 10 < 7;
var job = null;
document.write(typeof (num) + '\n');
document.write(typeof (str) + '\n');
document.write(typeof (bole) + '\n');
document.write(typeof (job) + '\n');

document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("Loops");
//looping constructs
for (i = 0; i < 10; i++) {
    for (j = 0; j < i; j++) {

        document.write('*');
    }
    document.write("<br>");
}
var i = 0;
var a = 0;
var b = 0;
while (a < 10) {
    while (b < a) {
        document.write("1");
        b++;
    }
    a++;
    document.write("<br>");
}

//conditional statements
document.write("<br>");
document.write("Conditional Statements");
document.write("<br>");

var testNum = -1;
if (testNum < 0)
    document.write("Negative");
else if (testNum > 0)
    document.write("Positive");
else
    document.write("Zero");

document.write('<br>');

var ch = 2;
var num2 = 20;
switch (ch) {
    case 1: document.write(10 + 2); break;
    case 2: document.write(10 - 2); break;
}

//functions
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("Functions");
function add(a, b) {
    var c = a + b;
    return c;
}
document.write("<br>");
var result = add(ch, num);
document.write(result);

// string functions : split and slice
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("String Functions");
var str1 = "Ghousia College Of Engineering";
var str2 = str1.slice(0, 8);
document.write("<br>");
document.write(str1);
document.write("<br>");
document.write(str2);

var str3 = str1.split(" ");
document.write("<br>");
document.write(str3);

document.write("<br>");
document.write(str1.length);

document.write("<br>");
document.write(str1.toUpperCase());

document.write("<br>");
document.write(str1.toLocaleLowerCase());