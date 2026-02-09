//include it here all the ids
const title = document.getElementById("title");
const Nameinput = document.getElementById("Nameinput");
const ageinput = document.getElementById("ageinput");
const output = document.getElementById("output");

//query
const description = document.querySelector("#description");
const btnclick = document.querySelector("#btnclick");

//event handler
btnclick.addEventListener("click", function(){
    btnclick.textContent = "clicked!";

    let name = Nameinput.value;
    let age = Number(ageinput.value);

    output.innerHTML = '<p style="color:black;">Your Name is: ' + name + '</p>';
    //loose equality 
    if(age >= 18){
        output.innerHTML += '<p style="color:green;">You are an adult.</p>';
    } else {
        output.innerHTML += '<p style="color:red;">You are a minor!!!.</p>';
    }

    //Strict equality
    if(age === 18){
        output.innerHTML += '<p style="color:green;">You are exactly 18 years old.</p>';
    } else {
        output.innerHTML += '<p style="color:red;">You are not exactly 18 years old.</p>';
    }

    if(name != ""){
        output.innerHTML += "<p style = 'color:black;'> Hello ,"+ name + " i am "+ age +" years old" + " </p>"
    }else{
        output.innerHTML +=  '<p style="color:red;">Please Enter Your Name!.</p>';
        
    }
});
