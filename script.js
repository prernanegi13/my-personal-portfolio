// window onload event

// function load()
// {
//     alert("Welcome to Prerna Negi portfolio")
// }


//  window resize function.....
 function resize()
 {
    alert("you haved resized your window");
 }


//  form validation 
 function validation ()
 {
    let username = document.getElementById("inputname").value;
    let email= document.getElementById("inputEmail").value;
    let contact = document.getElementById("inputContact").value;
    let add = document.getElementById("inputAddress").value;
    let city = document.getElementById("inputCity").value;
    let state = document.getElementById("inputState").value;

    if(username==""||email==""||contact==""||add==""||city==""||state=="")
        {
            alert("All Field are mandatory");
            return false;
        }

        else if(contact.length>10 || contact.length<10)
        {
        alert("contact number should be of 10 digits only") 
        return false
        }

        else if(isNaN(contact))
            {
            alert("only numbers are allowed ! please enter valid number") 
            return false
            }
        else
        {
            true;
        }
 } 
  

// form function of keyup to change letter case and background color
 
function keyupName()
{
    let a=document.getElementById("inputname");
    a.value=a.value.toUpperCase();
    a.style.background="white";
}

function keyupEmail()
{
    let b=document.getElementById("inputEmail");
    b.value=b.value.toUpperCase();
    b.style.background="white";
}

function keyupAdd()
{
    let c=document.getElementById("inputAddress")
    c.value=c.value.toUpperCase();
    c.style.background="white";
}

function keyupCity()
{
    let d=document.getElementById("inputCity")
    d.value=d.value.toUpperCase();
    d.style.background="white";
}

function keyupCont()
{
    let e=document.getElementById("inputContact")
    e.style.background="white";
}

// form function of keydown to change background color

function keydoName()
{
    let a=document.getElementById("inputname");
    a.style.background="yellow";
}

function keydoEmail()
{
    let b=document.getElementById("inputEmail");
    b.style.background="yellow";
}


function keydoAdd()
{
    let c=document.getElementById("inputAddress")
    c.style.background="yellow";
}

function keydoCity()
{
    let d=document.getElementById("inputCity")
    d.style.background="yellow";
}

function keydocont()
{
    let e=document.getElementById("")
    e.style.background="yellow";
}

function git()
{
    alert("request is processing")
}

function resume()
{
    alert("wait few minutes");
}

// mouseover function for projects preview

function mouseover1()
{
    document.getElementById("proone").style.background="green";
}

function mouseout1()
{
    document.getElementById("proone").style.background="#0d6efd"
}

function mouseover2()
{
    document.getElementById("protwo").style.background="green";
}

function mouseout2()
{
    document.getElementById("protwo").style.background="#0d6efd"
}


function mouseover3()
{
    document.getElementById("prothree").style.background="green";
}

function mouseout3()
{
    document.getElementById("prothree").style.background="#0d6efd"
}


function mouseover4()
{    
  document.getElementById("profour").style.background="green";
}


function mouseout4()
{
   document.getElementById("profour").style.background="#0d6efd"
}




 function mouseover5()
 {    
   document.getElementById("profive").style.background="green";
 }


 function mouseout5()
 {
    document.getElementById("profive").style.background="#0d6efd"
 }

 function mouseover6()
 {    
   document.getElementById("prosix").style.background="green";
 }


 function mouseout6()
 {
    document.getElementById("prosix").style.background="#0d6efd"
 }

  


