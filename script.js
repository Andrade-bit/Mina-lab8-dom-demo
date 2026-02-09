// Get elements
const form = document.getElementById("demoForm");
const Nameinput = document.getElementById("Nameinput");
const ageinput = document.getElementById("ageinput");
const output = document.getElementById("output");

// Use form submit event instead of button click
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = Nameinput.value.trim();
    const age = Number(ageinput.value);


    output.innerHTML = "";

    // Only proceed if both fields are filled
    if(name && ageinput.value){
        output.innerHTML += `<p style="color:black;">Your Name is: ${name}</p>`;

        if(age >= 18){
            output.innerHTML += `<p style="color:green;">You are an adult.</p>`;
        } else {
            output.innerHTML += `<p style="color:red;">You are a minor!!!</p>`;
        }

        if(age === 18){
            output.innerHTML += `<p style="color:green;">You are exactly 18 years old.</p>`;
        } else {
            output.innerHTML += `<p style="color:red;">You are not exactly 18 years old.</p>`;
        }

        output.innerHTML += `<p style="color:black;">Hello ${name}, I am ${age} years old</p>`;
    }
});
