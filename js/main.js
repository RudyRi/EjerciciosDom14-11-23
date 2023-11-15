const getGender = () => {
    const gender = document.querySelector('input[name="radioGroup"]:checked')
    console.log(gender)
}

const validateForm = (event) => {
    event.preventDefault()
    console.log("Formulario trabajando correctamente")
    console.log(event)

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;

    if(fullname === ''){
        alert("Please enter your name")
    }else if (email === ''){
        alert("Please enter your email")
    }else if (gender === ''){
        alert("Please enter your gender")
    }

    const emailRegex = /\S+@\S+\.\S+/
    if(!emailRegex.test(email)){
        alert('Please enter a valid email address')
    }
}