var temp = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var sum = 0; // Global variable

function AvgTemp()
{
    for (var i = 0 ; i < temp.length ; i++)
    {
        sum = sum + temp[i];
    }
}

AvgTemp();
var calculate = sum / temp.length;
console.log("The average temperature is " + calculate + " degrees Celsius");