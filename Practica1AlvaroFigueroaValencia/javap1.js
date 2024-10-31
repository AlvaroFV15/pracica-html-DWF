

function bonoHijos()
{

    let radio1 = document.getElementById("radio1");
    let radio1N = document.getElementById("radio1N");
    let radio2 = document.getElementById("radio1");
    let radio2N = document.getElementById("radio1N");
    let a=0;
    let bono = 5;
    if(radioSi.checked)
    {
        document.getElementById("resultado").value = a + bono;
        window.alert("El resultado es: " + value);
    }
    else if(radioNo.checked)
    {
        document.getElementById("resultado").value = a;
        window.alert("El resultado es: " + value);
    }
}
