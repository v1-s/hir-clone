var somethings_json = localStorage.getItem("log");
var logs = JSON.parse(somethings_json);

// if (logs === null || logs === undefined) {
//     // Handle the case where logs is null or undefined
//     console.warn("logs variable is null or undefined"); // Or log a more specific message
//   } else if (logs.log === "yes") {
//     location.assign("/signin.html"); // Redirect to signin.html
//   }
  

if(localStorage.getItem("cart") === null)
{
    localStorage.setItem("cart", JSON.stringify([]));
}

var e1 = document.getElementById("signIn");
function jump()
{
    var p = document.getElementById("passReset");
    p.style.display = "none";
    e1.style.display = "";
}

function change1()   /* signIn to signUp Change*/
{
    e1.style.display = "none";
    var e2 = document.getElementById("signUp");
    e2.style.display = "";
}

function change2()   /* signIn to forgot Password Change*/
{

    e1.style.display = "none";
    var ele = document.getElementById("passReset");
    ele.style.display = "";
}

function change3()   /* signUp to SignIn Change*/
{
    var ele = document.getElementById("signUp");
    ele.style.display = "none";
    e1.style.display ="";
}

function signUpData(e)
{
    e.preventDefault();

    var emailSup = document.getElementById("emailSup").value;
    var passSup = document.getElementById("passSup").value;
    var rePassSup = document.getElementById("rePassSup").value;

    if(emailSup == "")
    {var e2 = document.getElementById("e2");
    e2.innerText = "Please specify your email."
    e2.style.color = "red"
    e2.style.fontWeight = "bold";}

    if(passSup == "")
    {var p2 = document.getElementById("p2");
    p2.innerText = "Please specify your password."
    p2.style.color = "red"
    p2.style.fontWeight = "bold";}

    if(rePassSup == "")
    {var p3 = document.getElementById("p3");
    p3.innerText = "Please specify your confirm password."
    p3.style.color = "red"
    p3.style.fontWeight = "bold";}
    
    if(passSup == rePassSup)
    {
        const logs = {
            log : "yes"
        }
        localStorage.setItem("log", JSON.stringify(logs));
        var cart_json = localStorage.getItem("cart");
        var cart = JSON.parse(cart_json);
        cart.push([emailSup, passSup, rePassSup]);
        localStorage.setItem("cart",JSON.stringify(cart));
        if(passSup !="" && rePassSup != "")goToHome();

    }
    else
    {
        alert("MisMatch");
        
    }
}

function signInData(e)
{
    e.preventDefault();

    var emailSin = document.getElementById("emailSin").value;
    var passSin = document.getElementById("passSin").value;

    var rec_cart_json = localStorage.getItem("cart");
    var saved = JSON.parse(rec_cart_json);

    var e1 = document.getElementById("e1");
    if(emailSin == "")
    { 
        e1.innerText = "Please specify your email."
        e1.style.color = "red"
        e1.style.fontWeight = "bold";
    }

    var p1 = document.getElementById("p1");
    if(passSin == "")
    {
        p1.innerText = "Please specify your password."
        p1.style.color = "red"
        p1.style.fontWeight = "bold";
    }

    var found = 0;
    for(var i=0; i<saved.length; i++)
    {
        if( (saved[i][0] === emailSin) && (saved[i][1] == passSin) )
        {
            found = 1;
            const logs = {
                log : "yes"
            }
            localStorage.setItem("log", JSON.stringify(logs));
            goToHome();
            break;
            
        }
    }
    if(found == 0)
    {
        alert("Invalid User!");
    }

}

function passReset(e)
{
    e.preventDefault();

    var emailpass = document.getElementById("emailpass").value;

    var rec_cart_json = localStorage.getItem("cart");
    var saved = JSON.parse(rec_cart_json);

    var found = 0;
    for(var i=0; i<saved.length; i++)
    {
        if( (saved[i][0] === emailpass))
        {
            found = 1;
            break;
        }
    }
    if(found == 0)
    {
        alert("Not even registered!");
    }

    if(emailpass === "")
    {
        var fp = document.getElementById("fp");
        fp.innerText = "Please specify your email."
        fp.style.color = "red"
        fp.style.fontWeight = "bold";
    }

}


document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('grid').style.display = 'none';
  });

  const signInForm = document.getElementById("signIn");
  const signUpForm = document.getElementById("signUp");
  
  signInForm.style.display = "block";
  signUpForm.style.display = "none";
  
  function showSignInForm() {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
  }
  
  function showSignUpForm() {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
  }
  
  document.getElementById("signInLink").addEventListener("click", showSignInForm);
  document.getElementById("signUpLink").addEventListener("click", showSignUpForm);
  
  // ...