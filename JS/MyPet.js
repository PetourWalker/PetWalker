var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("openModalBtn2");
var span2 = document.getElementsByClassName("close2")[0];
var agregar2 = document.getElementsByClassName("buttonAgre")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

btn2.onclick = function() {
    modal2.style.display = "block";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}


document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const edad = document.getElementById("edad").value;
    const raza = document.getElementById("raza").value;

    const outputMessage = `Nombre: ${firstName} <br><br> Edad: ${edad} <br><br> Raza: ${raza}`;

    document.getElementById("output").innerHTML = outputMessage;

    document.getElementById("nameForm").reset();

});
agregar2.onclick = function() {
    modal2.style.display = "none";
}





document.getElementById("button2").addEventListener("click", function() {
    document.getElementById("info2").style.display = "block";
    document.getElementById("info3").style.display = "none";
    document.getElementById("info4").style.display = "none";
    document.getElementById("info5").style.display = "none";

});

document.getElementById("button3").addEventListener("click", function() {
    document.getElementById("info2").style.display = "none";
    document.getElementById("info3").style.display = "block";
    document.getElementById("info4").style.display = "none";
    document.getElementById("info5").style.display = "none";

});

document.getElementById("button4").addEventListener("click", function() {
    document.getElementById("info2").style.display = "none";
    document.getElementById("info3").style.display = "none";
    document.getElementById("info4").style.display = "block";
    document.getElementById("info5").style.display = "none";

});

document.getElementById("button5").addEventListener("click", function() {
    document.getElementById("info2").style.display = "none";
    document.getElementById("info3").style.display = "none";
    document.getElementById("info4").style.display = "none";
    document.getElementById("info5").style.display = "block";


});

const button = document.getElementById('toggleButton');
let cambiado = false;

button.addEventListener('click', () => {
    if (cambiado) {
        button.classList.remove('cambiado');
        button.classList.add('ButReser');
        button.textContent = "Tomar Reserva";
    } else {
        button.classList.remove('ButReser');
        button.classList.add('cambiado');
        button.textContent = "Cancelar Reserva";

    }
    cambiado = !cambiado;
});
