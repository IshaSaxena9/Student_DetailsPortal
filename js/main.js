"use strict";

let batch = "UCA2017";
function getStudentDetails() {
    document.getElementById("username").innerHTML = batch;
}

function ins()
{
    document.getElementById("btn1").style.display="block";
    document.getElementById("btn2").style.display="none";
    document.getElementById("btn3").style.display="none";

    document.getElementById("b0").style.display="none";    
    document.getElementById("b1").style.display="none";
    document.getElementById("b2").style.display="none";
    document.getElementById("b3").style.display="none";
    document.getElementById("b4").style.display="none";
    document.getElementById("b5").style.display="none";
    document.getElementById("b6").style.display="none";
    document.getElementById("b7").style.display="none";
    document.getElementById("b8").style.display="none";
    for(var i=9;i<=ctr;i++)
        document.getElementById("b"+i).style.display="none";  

    document.getElementById("s2").style.display="none";
    document.getElementById("a0").style.display="none";    
    document.getElementById("a1").style.display="none";
    document.getElementById("a2").style.display="none";
    document.getElementById("a3").style.display="none";
    document.getElementById("a4").style.display="none";
    document.getElementById("a5").style.display="none";
    document.getElementById("a6").style.display="none";
    document.getElementById("a7").style.display="none";
    document.getElementById("a8").style.display="none";
    for(var i=9;i<=ctr;i++)
    document.getElementById("a"+i).style.display="none";  

}
var ctr=8;
function sub1()
{
    var oforms=document.forms[0];
    var table=document.getElementById("t");
    var w=oforms.elements["name"].value;
    var x=oforms.elements["roll"].value;
    var y=oforms.elements["year"].value;
    var z=oforms.elements["str"].value;
    if(w==""||x==""||y==""||z=="")
    { 
        document.getElementById("q").style.display="block";
        document.getElementById("q").innerHTML="ERROR! Empty cell(s) found"; }
    else
   {
     document.getElementById("q").style.display="none";
     ctr=ctr+1;
     var row=table.insertRow(ctr);
     var cell1=row.insertCell(0);
     var cell2=row.insertCell(1);
     var cell3=row.insertCell(2);
     var cell4=row.insertCell(3);
     var cell5=row.insertCell(4);
     var c5=document.createElement("input");
     c5.type="radio";
     c5.name="delete";
     c5.id="a"+ctr;
     c5.style.display="none";
     var cell6=row.insertCell(5);
     var c6=document.createElement("input");
     c6.type="checkbox";
     c6.id="b"+ctr;
     c6.style.display="none";
     cell1.innerHTML=w; 
     cell2.innerHTML=x;
     cell3.innerHTML=y;
     cell4.innerHTML=z;
     cell5.appendChild(c5);
     cell6.appendChild(c6);
   }
   oforms.elements["name"].value="";
   oforms.elements["roll"].value="";
   oforms.elements["year"].value="";
   oforms.elements["str"].value="";   
}
function del()
{
    document.getElementById("btn1").style.display="none";
    document.getElementById("btn3").style.display="none";
    document.getElementById("btn2").style.display="block";
    document.getElementById("q").style.display="none";
}
function delOne()
{
    document.getElementById("sm").style.display="none";  
    document.getElementById("b0").style.display="none";    
    document.getElementById("b1").style.display="none";
    document.getElementById("b2").style.display="none";
    document.getElementById("b3").style.display="none";
    document.getElementById("b4").style.display="none";
    document.getElementById("b5").style.display="none";
    document.getElementById("b6").style.display="none";
    document.getElementById("b7").style.display="none";
    document.getElementById("b8").style.display="none";
    for(var i=9;i<=ctr;i++)
        document.getElementById("b"+i).style.display="none";  

    document.getElementById("s2").style.display="block";
    document.getElementById("a0").style.display="block";    
    document.getElementById("a1").style.display="block";
    document.getElementById("a2").style.display="block";
    document.getElementById("a3").style.display="block";
    document.getElementById("a4").style.display="block";
    document.getElementById("a5").style.display="block";
    document.getElementById("a6").style.display="block";
    document.getElementById("a7").style.display="block";
    document.getElementById("a8").style.display="block";
    for(var i=9;i<=ctr;i++)
    document.getElementById("a"+i).style.display="block";  
}
function sub2()
{
    var flag=0;
    var table=document.getElementById("t");
    var ct=table.rows.length;
    for(var i=ct;i-->0;)
    {
        var row=table.rows[i];
        var x=row.getElementsByTagName("input");
        for(var xi=x.length;xi-->0;)
        {
            var inp=x[xi];
            if((inp.type==="radio")&&(inp.checked==true))
            {
                row.parentNode.removeChild(row);
                flag=1;
                document.getElementById("m").style.display="none";
                break;
            }
        }
    }
    if(flag==0)
    {
        document.getElementById("m").innerHTML="ERROR! No Record(s) selected";
        document.getElementById("m").style.display="block";
    }
}
function delMan()
{
    
    document.getElementById("s2").style.display="none";
    document.getElementById("a0").style.display="none";    
    document.getElementById("a1").style.display="none";
    document.getElementById("a2").style.display="none";
    document.getElementById("a3").style.display="none";
    document.getElementById("a4").style.display="none";
    document.getElementById("a5").style.display="none";
    document.getElementById("a6").style.display="none";
    document.getElementById("a7").style.display="none";
    document.getElementById("a8").style.display="none";
    for(var i=9;i<=ctr;i++)
    document.getElementById("a"+i).style.display="none";  

    document.getElementById("sm").style.display="block";
    document.getElementById("b0").style.display="block";    
    document.getElementById("b1").style.display="block";
    document.getElementById("b2").style.display="block";
    document.getElementById("b3").style.display="block";
    document.getElementById("b4").style.display="block";
    document.getElementById("b5").style.display="block";
    document.getElementById("b6").style.display="block";
    document.getElementById("b7").style.display="block";
    document.getElementById("b8").style.display="block";
    for(var i=9;i<=ctr;i++)
    document.getElementById("b"+i).style.display="block";  
}
function sub3()
{
    var flag=0;
    var table=document.getElementById("t");
    var ct=table.rows.length;
    for(var i=ct;i-->0;)
    {
        var row=table.rows[i];
        var x=row.getElementsByTagName("input");
        for(var xi=x.length;xi-->0;)
        {
            var inp=x[xi];
            if((inp.type==="checkbox")&&(inp.checked==true))
            {
                row.parentNode.removeChild(row);
                flag=1;
                document.getElementById("n").style.display="none";
            }
        }
    }
    if(flag==0)
    {
        document.getElementById("n").innerHTML="ERROR! No Record(s) selected";
        document.getElementById("n").style.display="block";
    }
}
function upd()
{
    document.getElementById("btn1").style.display="none";
    document.getElementById("btn2").style.display="none";
    document.getElementById("btn3").style.display="block";

    document.getElementById("a0").style.display="block";    
    document.getElementById("a1").style.display="block";
    document.getElementById("a2").style.display="block";
    document.getElementById("a3").style.display="block";
    document.getElementById("a4").style.display="block";
    document.getElementById("a5").style.display="block";
    document.getElementById("a6").style.display="block";
    document.getElementById("a7").style.display="block";
    document.getElementById("a8").style.display="block";
    for(var i=9;i<=ctr;i++)
    document.getElementById("a"+i).style.display="block";  
    
    document.getElementById("sm").style.display="none";  
    document.getElementById("b0").style.display="none";    
    document.getElementById("b1").style.display="none";
    document.getElementById("b2").style.display="none";
    document.getElementById("b3").style.display="none";
    document.getElementById("b4").style.display="none";
    document.getElementById("b5").style.display="none";
    document.getElementById("b6").style.display="none";
    document.getElementById("b7").style.display="none";
    document.getElementById("b8").style.display="none";
    for(var i=9;i<=ctr;i++)
        document.getElementById("b"+i).style.display="none";  
}
function nxt()
{
    document.getElementById("er").style.display="block";
    document.getElementById("next").style.display="none";
}
function f1()
{
    document.getElementById("edp").style.display="block";    
    document.getElementById("ert").style.display="block";
    document.getElementById("ern").style.display="none";
}
function f2()
{
    document.getElementById("edp").style.display="block";
    document.getElementById("ert").style.display="none";
    document.getElementById("ern").style.display="block";
}
function sub4()
{
    var y;
    var oforms=document.forms[0];
    var table=document.getElementById("t");
    if((document.getElementById("er1").checked==true)||(document.getElementById("er4").checked==true))
    {
        y=oforms.elements["edit1"].value;
        oforms.elements["edit1"].value="";
    }
    else if((document.getElementById("er2").checked==true)||(document.getElementById("er3").checked==true))
    {
       y=oforms.elements["edit2"].value;
       oforms.elements["edit2"].value="";
    }
    var flag=0;
    if(y=="")
   {
        document.getElementById("l").innerHTML="Please fill a value";
        document.getElementById("l").style.display="block"; 
   }
    var ct=table.rows.length;
    for(var i=ct;i-->0;)
    {
        var row=table.rows[i];
        var x=row.getElementsByTagName("input");
        for(var xi=x.length;xi-->0;)
        {
            var inp=x[xi];
            if((inp.type==="radio")&&(inp.checked==true))
            {
                if(document.getElementById("er1").checked==true)
                   {  row.cells[0].innerHTML=y; }      
                else if(document.getElementById("er2").checked==true)
                   {  row.cells[1].innerHTML=y; }
                else if(document.getElementById("er3").checked==true)
                   {  row.cells[2].innerHTML=y; }
                else if(document.getElementById("er4").checked==true)
                   {  row.cells[3].innerHTML=y; }      
                flag=1;
                document.getElementById("o").style.display="none";
                break;
            }
        }
    }
    if(flag==0)
    {
        document.getElementById("o").innerHTML="ERROR! Please select a record";
        document.getElementById("o").style.display="block";
        document.getElementById("l").style.display="none";        
    }
}
var s= () => { return 10+15; }
["a", "b"].map(function (name) {
    return name + "!";
});