function press(value)
{
document.getElementById("display").value += value;
}

function calculate()
{
var exp = document.getElementById("display").value;

try
{
document.getElementById("display").value = eval(exp);
}

catch
{
document.getElementById("display").value = "Error";
}
}

function clearDisplay()
{
document.getElementById("display").value = "";
}