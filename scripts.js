const firstelement = document.getElementById("First");
const secondelement = document.getElementById("second");
const res = document.getElementById("result");
let eventtt = document.getElementById("Submit");

function show() {
    var value1 = firstelement.value;
    var value2 = secondelement.value;

    var number1 = parseFloat(value1);
    var number2 = parseFloat(value2);

    if (isNaN(number1) || isNaN(number2)) {
        res.innerHTML = "Please enter valid numbers.";
    } else if (number1 > number2) {
        res.innerHTML = number1;
    } else if (number1 < number2) {
        res.innerHTML = number2;
    } else {
        res.innerHTML = "Equal";
    }
}

eventtt.addEventListener('click', show);


const grade=document.getElementById("grade");
const find =document.getElementById("find");
var view = document.getElementById("view");
function showgrade()
{
 const g=parseInt(grade.value);
 if(g>=80)
 {
    view.innerHTML="A+";
 }
 else if(g>=70)
    {
       view.innerHTML="A";
    }
  else   if(g>=60)
        {
           view.innerHTML="A-";
        }
       else if(g>=40)
            {
               view.innerHTML="B";
            }
           else
                {
                   view.innerHTML="Fail";
                }


}
find.addEventListener('click',showgrade);