 function calculateTip()
{
     var billamt = document.getElementById("billamt").value;
     var serviceQual = document.getElementById("serviceQual").value;
     var intrate = document.getElementById("intrate").value;
    
    
    if(billamt==="" || serviceQual==0 || billamt==0)
        {
            alert("please enter values");
            reture;
        }
    
    else
    {
        document.getElementById("each").style.display="block"; 
    }
    var total=(billamt*serviceQual*intrate)/100;
    //total=Math.round(total);
     document.getElementById("totalTip").style.display="block";
     document.getElementById("tip").innerHTML=total;
}

document.getElementById("totalTip").style.display="none";
document.getElementById("totalTip").style.display="none";

document.getElementById("calculate").onclick=function()
{
    calculateTip();
}
