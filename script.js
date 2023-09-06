// script.js

/* Funciones del heroe AOS */
document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    /**
     * Animation on scroll function and init
     */
    function aos_init() {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', () => {
      aos_init();
    });
  
});

/* Preguntas del quiz */

let currentQuestion = 1;
let correctAnswers = 0;

const mathQuestions = [
    {
        question: "¿Cuánto es 5 + 3?",
        options: ["7", "8", "9", "10"],
        correct: "b"
    },
    {
        question: "¿Cuál es el resultado de 12 - 6?",
        options: ["4", "5", "6", "7"],
        correct: "c"
    },
    {
        question: "Si tienes 15 manzanas y das 7, ¿cuántas te quedan?",
        options: ["5", "6", "7", "8"],
        correct: "d"
    },
    {
        question: "¿Cuánto es 3 * 4?",
        options: ["9", "10", "11", "12"],
        correct: "d"
    },
    {
        question: "Si un rectángulo tiene un ancho de 8 unidades y un largo de 12 unidades, ¿cuál es su área?",
        options: ["20", "48", "64", "96"],
        correct: "d"
    },
    {
        question: "¿Cuál es la mitad de 40?",
        options: ["10", "15", "20", "25"],
        correct: "c"
    },
    {
        question: "¿Cuál es el resultado de 25 / 5?",
        options: ["3", "4", "5", "6"],
        correct: "c"
    },
    {
        question: "Si un tren viaja a una velocidad de 80 km/h durante 4 horas, ¿cuántos kilómetros recorre?",
        options: ["160", "240", "320", "400"],
        correct: "c"
    },
    {
        question: "Si 3x + 7 = 22, ¿cuál es el valor de x?",
        options: ["3", "5", "7", "9"],
        correct: "b"
    },
    {
        question: "Si un cubo tiene una arista de longitud 6 cm, ¿cuál es su volumen?",
        options: ["36", "72", "108", "216"],
        correct: "d"
    },
    {
        question: "¿Cuál es el resultado de 18 + 14?",
        options: ["28", "31", "32", "33"],
        correct: "c"
    },
    {
        question: "¿Cuántas caras tiene un cubo?",
        options: ["4", "6", "8", "12"],
        correct: "b"
    },
    {
        question: "Si un triángulo tiene un ángulo de 90 grados, ¿cómo se llama?",
        options: ["Rectángulo", "Isósceles", "Equilátero", "Escaleno"],
        correct: "a"
    },
    {
        question: "¿Cuál es el número siguiente en la serie: 2, 4, 6, 8, ...?",
        options: ["10", "12", "14", "16"],
        correct: "a"
    },
    {
        question: "Si un cuadrado tiene un lado de 5 cm, ¿cuál es su perímetro?",
        options: ["15", "20", "25", "30"],
        correct: "b"
    },
    {
        question: "¿Cuál es el valor de π (pi) aproximado?",
        options: ["3.14", "2.71", "1.62", "4.20"],
        correct: "a"
    },
    {
        question: "¿Cuál es el número primo más pequeño?",
        options: ["1", "2", "3", "4"],
        correct: "b"
    },
    {
        question: "Si 2x = 10, ¿cuál es el valor de x?",
        options: ["3", "4", "5", "6"],
        correct: "c"
    },
    {
        question: "¿Cuántos lados tiene un hexágono?",
        options: ["4", "5", "6", "7"],
        correct: "c"
    },
    {
        question: "Si un reloj marca las 3 en punto, ¿qué ángulo hay entre las manecillas?",
        options: ["0 grados", "45 grados", "90 grados", "180 grados"],
        correct: "c"
    }
];


const spanishQuestions = [
    {
        question: "¿Cuál es el antónimo de 'amigo'?",
        options: ["Enemigo", "Familia", "Compañero", "Vecino"],
        correct: "a"
    },
    {
        question: "¿Cómo se escribe 'casa' en inglés?",
        options: ["House", "Car", "Tree", "Book"],
        correct: "a"
    },
    {
        question: "¿Cuál es el plural de 'gato'?",
        options: ["Gatas", "Gatos", "Gatitos", "Gatoss"],
        correct: "b"
    },
    {
        question: "¿Cuál es el femenino de 'príncipe'?",
        options: ["Princesa", "Reina", "Dama", "Noble"],
        correct: "a"
    },
    {
        question: "¿Cuál es la primera letra del abecedario?",
        options: ["A", "B", "C", "D"],
        correct: "a"
    },
    {
        question: "Si una palabra lleva tilde en la última sílaba, ¿cómo se llama?",
        options: ["Aguda", "Llana", "Esdrújula", "Sobreesdrújula"],
        correct: "a"
    },
    {
        question: "¿Cuál es el significado de la palabra 'amplio'?",
        options: ["Pequeño", "Estrecho", "Grande", "Alto"],
        correct: "c"
    },
    {
        question: "¿Cuál es el género de la palabra 'flor'?",
        options: ["Femenino", "Masculino", "Neutro", "No tiene género"],
        correct: "a"
    },
    {
        question: "Si una oración termina con un signo de exclamación, ¿qué tipo de oración es?",
        options: ["Declarativa", "Interrogativa", "Exclamativa", "Imperativa"],
        correct: "c"
    },
    {
        question: "¿Cuál es el pretérito perfecto simple del verbo 'cantar'?",
        options: ["Canta", "Cantaré", "Canté", "Cantante"],
        correct: "c"
    },
    {
        question: "¿Qué palabra lleva tilde en la penúltima sílaba?",
        options: ["Árbol", "Casa", "Reloj", "Jugar"],
        correct: "a"
    },
    {
        question: "Si alguien escribe poesía, ¿qué hace?",
        options: ["Pinta", "Canta", "Escribe", "Baila"],
        correct: "c"
    },
    {
        question: "Si un verbo está en infinitivo, ¿cómo termina?",
        options: ["-ar", "-endo", "-nte", "-ble"],
        correct: "a"
    },
    {
        question: "¿Cuál es el sinónimo de 'alegre'?",
        options: ["Triste", "Contento", "Enojado", "Cansado"],
        correct: "b"
    },
    {
        question: "Si alguien escribe cuentos, ¿qué hace?",
        options: ["Dibuja", "Canta", "Escribe", "Cocina"],
        correct: "c"
    },
    {
        question: "¿Cuál es el plural de 'niño'?",
        options: ["Niñoes", "Niñitos", "Niños", "Niñidos"],
        correct: "c"
    },
    {
        question: "¿Cuál es el antónimo de 'frío'?",
        options: ["Caliente", "Mojado", "Lejano", "Rápido"],
        correct: "a"
    },
    {
        question: "Si alguien fabrica muebles, ¿qué hace?",
        options: ["Escribe", "Canta", "Habla", "Hace"],
        correct: "d"
    },
    {
        question: "¿Cuál es el antónimo de 'rápido'?",
        options: ["Lento", "Duro", "Bajo", "Gris"],
        correct: "a"
    },
    {
        question: "Si alguien cultiva plantas, ¿qué hace?",
        options: ["Escribe", "Canta", "Cosecha", "Planta"],
        correct: "d"
    }
];

/* Quiz */

let selectedQuestions = [];

// Función para iniciar el quiz
function startQuiz() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    correctAnswers = 0;
    currentQuestion = 1;

    // Seleccionar preguntas aleatorias
    const selectedMathQuestions = getRandomQuestions(mathQuestions, 3);
    const selectedSpanishQuestions = getRandomQuestions(spanishQuestions, 2);
    selectedQuestions = [
        selectedSpanishQuestions[0],
        selectedMathQuestions[0],
        selectedMathQuestions[1],
        selectedSpanishQuestions[1],
        selectedMathQuestions[2]
    ];

    showQuestion(currentQuestion);
}

// Función para obtener preguntas aleatorias
function getRandomQuestions(allQuestions, numQuestions) {
    const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, numQuestions);
}

// Función para mostrar una pregunta
function showQuestion(questionNumber) {
    const questionDiv = document.querySelector('.question');
    const questionData = selectedQuestions[questionNumber - 1];

    let optionsHTML = '';
    questionData.options.forEach((option, index) => {
        optionsHTML += `<button class="btn btn-outline-secondary btn-lg px-4 text-white border-white" onclick="selectOption(this)" data-question="${questionNumber}" data-option="${getOptionLetter(index)}">${option}</button>`;
    });

    const nextButtonText = questionNumber < selectedQuestions.length ? 'Siguiente' : 'Terminar';

    questionDiv.innerHTML = `
        <h1>Pregunta ${questionNumber}:</h1>
        <p>${questionData.question}</p>
        <div class="options-container">
            ${optionsHTML}
        </div>
        <div class="btn-container">
            <button class="btn-next" ${nextButtonText === 'Terminar' ? `onclick="showResults()"` : `onclick="nextQuestion(${questionNumber})"`}>${nextButtonText}</button>
        </div>
        <p id="result${questionNumber}"></p>
    `;

    updateProgressBar();
}

// Función para seleccionar una opción
function selectOption(button) {
    const questionNumber = button.getAttribute('data-question');
    const selectedOption = button.getAttribute('data-option');

    const options = document.querySelectorAll(`[data-question="${questionNumber}"]`);
    options.forEach(option => {
        option.classList.remove('selected');
    });

    button.classList.add('selected');
}

// Función para avanzar a la siguiente pregunta
function nextQuestion(questionNumber) {
    const selectedOption = document.querySelector(`[data-question="${questionNumber}"].selected`);
    if (selectedOption) {
        const answer = selectedOption.getAttribute('data-option');
        if (answer === selectedQuestions[questionNumber - 1].correct) {
            document.getElementById(`result${questionNumber}`).textContent = '¡Correcto!';
            correctAnswers++;
        } else {
            document.getElementById(`result${questionNumber}`).textContent = 'Incorrecto';
        }
        currentQuestion++;
        if (currentQuestion <= selectedQuestions.length) {
            showQuestion(currentQuestion);
        } else {
            showResults();
        }
        updateProgressBar();
    }
}

// Función para mostrar los resultados
function showResults() {
    const questionDiv = document.querySelector('.question');
    if (currentQuestion <= selectedQuestions.length) {
        const selectedOption = document.querySelector(`[data-question="${currentQuestion}"].selected`);
        if (selectedOption) {
            const answer = selectedOption.getAttribute('data-option');
            if (answer === selectedQuestions[currentQuestion - 1].correct) {
                correctAnswers++;
            }
        }
    }

    let resultMessage = '';
    let buttonText = '';
    let courseButton = '';

    if (correctAnswers === 0) {
        resultMessage = `
            <p>No obtuviste ninguna respuesta correcta.</p>
            <p>Si en este diagnóstico no te fue tan bien, no te preocupes; nosotros te ayudamos a prepararte para el examen de admisión de la UCR, UNA y TEC en nuestro curso en línea.</p>
            <p>¡No pierdas la oportunidad!</p>
        `;
    } else if (correctAnswers === 1) {
        resultMessage = `
            <p>Solo acertaste 1 respuesta de 5.</p>
            <p>Si en este diagnóstico no te fue tan bien, no te preocupes; nosotros te ayudamos a prepararte para el examen de admisión de la UCR, UNA y TEC en nuestro curso en línea.</p>
            <p>¡No pierdas la oportunidad!</p>
        `;
    } else if (correctAnswers === 2) {
        resultMessage = `
            <p>Has acertado 2 preguntas de 5.</p>
            <p>Si en este diagnóstico no te fue tan bien, no te preocupes; nosotros te ayudamos a prepararte para el examen de admisión de la UCR, UNA y TEC en nuestro curso en línea.</p>
            <p>¡No pierdas la oportunidad!</p>
        `;
    } else if (correctAnswers === 3) {
        resultMessage = `
            <p>Has acertado 3 preguntas de 5.</p>
            <p>No ha estado nada mal, pero se puede obtener un mejor resultado. Nosotros te ayudamos a reforzar tus habilidades para el examen de admisión de la UCR, UNA y TEC en nuestro curso en línea.</p>
            <p>¡No pierdas la oportunidad!</p>
        `;
    } else if (correctAnswers === 4) {
        resultMessage = `
            <p>Has acertado 4 preguntas de 5.</p>
            <p>Muy bien, la mayoría de los ejercicios fueron acertados. Podemos reforzar algunas de tus habilidades y técnicas en Razonamiento Lógico Matemático y Razonamiento Lingüístico Verbal.</p>
            <p>¡No pierdas la oportunidad!</p>
        `;
    } else if (correctAnswers === 5) {
        resultMessage = `
            <p>Has acertado todas las preguntas.</p>
            <p>Tu habilidad y destreza es excelente. Nosotros te ayudamos a mantener y potenciar ese don que tienes, para eso puedes matricular nuestro curso de preparación para el examen de admisión.</p>
            <p>¡No pierdas la oportunidad!</p>
        `;
    }

    if (correctAnswers >= 0) {
        buttonText = `
            <a href="cursos.html" class="btn btn-outline-secondary btn-lg px-4 text-white border-white">Matricular el curso</a>
            <button class="btn btn-outline-secondary btn-lg px-4 text-white border-white" style="margin-left: 10px;" onclick="startQuiz()">Intentar otro quiz</button>
        `;
    } else {
        buttonText = `
            <button class="btn btn-outline-secondary btn-lg px-4 text-white border-white" onclick="startQuiz()">Intentar otro quiz</button>
        `;
    }

    questionDiv.innerHTML = `
        <h1>Resultados:</h1>
        ${resultMessage}
        <div class="btn-container">
            ${buttonText}
        </div>
    `;

    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = '100%';
    progressBar.setAttribute('aria-valuenow', 100);
}

// Función para obtener la letra de opción
function getOptionLetter(index) {
    return ['a', 'b', 'c', 'd'][index];
}

// Función para actualizar la barra de progreso
function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const progressPercent = (currentQuestion - 1) / selectedQuestions.length * 100;
    progressBar.style.width = `${progressPercent}%`;
    progressBar.setAttribute('aria-valuenow', progressPercent);
}

// Evento al cargar la ventana
window.onload = function () {
    const btnStart = document.querySelector('.btn-start');
    btnStart.addEventListener('click', startQuiz);
};






/* Botones de obtener de la tienda */
$(document).ready(function () {
  // Abrir modal de detalles al hacer clic en botones "Obtener"
  $('.btn-obtener').click(function () {
    $('#modalDetails').modal('show');
  });
});













/* Mostrará en el carrito únicamente el paquete seleccionado de la tienda y aplicará descuento */
$(document).ready(function() {
// Variable para almacenar el contenido del carrito
var carrito = [];

// Variable para almacenar el código promocional canjeado
var codigoPromocional = "";

// Variable para indicar si se seleccionó el paquete "Acceso básico"
var accesoBasicoSeleccionado = false;

// Evento de clic en el botón "Obtener" de cualquier paquete
$(".btn-obtener").click(function() {
    var paqueteIndex = $(this).index(".btn-obtener");
    agregarPaqueteAlCarrito(paqueteIndex);

    // Verificar si se seleccionó el paquete "Acceso básico"
    if (paqueteIndex === 0) {
        accesoBasicoSeleccionado = true;
    }
});

// Función para validar el código promocional
function validarCodigoPromocional(codigoIngresado) {
    if (accesoBasicoSeleccionado) {
        // Si se seleccionó "Acceso básico", no se permite código promocional
        return null;
    } else if (codigoIngresado === "desc5") {
        return 0.05; // Descuento del 5%
    } else if (codigoIngresado === "desc10") {
        return 0.1; // Descuento del 10%
    } else if (codigoIngresado === "desc15") {
        return 0.15; // Descuento del 15%
    } else if (codigoIngresado === "desc20") {
        return 0.2; // Descuento del 20%
    } else if (codigoIngresado === "desc25") {
        return 0.25; // Descuento del 25%
    } else if (codigoIngresado === "desc30") {
        return 0.3; // Descuento del 30%
    } else if (codigoIngresado === "desc35") {
        return 0.35; // Descuento del 35%
    } else {
        return null; // Código promocional no válido
    }
}

// Evento de clic en el botón "Canjear"
$("#btnCanjear").click(function() {
    var codigoIngresado = $("#codigoPromocional").val();
    var descuentoPorcentaje = validarCodigoPromocional(codigoIngresado);

    if (descuentoPorcentaje !== null) {
        // Si se aplica el descuento, oculta el mensaje de error
        $("#codigoPromocionalError").hide();
        aplicarDescuento("Descuento", "Se aplicó correctamente", descuentoPorcentaje);
    } else {
        // Si el código no es válido, muestra el mensaje de error en rojo
        $("#codigoPromocionalError").show();
    }
});

// Evento que se ejecuta cuando se cierra el modal
$('#modalDetails').on('hidden.bs.modal', function () {
    // Reiniciar el carrito, el código promocional y la variable de acceso básico al cerrar el modal
    carrito = [];
    codigoPromocional = "";
    accesoBasicoSeleccionado = false;
    actualizarCarrito();

    // Limpiar el campo de entrada de texto
    $("#codigoPromocional").val("");

    // Ocultar la alerta de Código promocional no válido
    $("#codigoPromocionalError").hide();
});

// Función para agregar un paquete al carrito
function agregarPaqueteAlCarrito(paqueteIndex) {
    // Obtener información del paquete seleccionado
    var paquetes = [
    {
        nombre: "Acceso básico",
        descripcion: "Acceso a las prácticas, quices y exámenes simulacro de la plataforma",
        precio: 10000
    },
    {
        nombre: "Curso estándar",
        descripcion: "Acceso a las clases del curso y a la plataforma",
        precio: 45000
    },
    {
        nombre: "Curso premium",
        descripcion: "Acceso completo a todos los beneficios que ofrecemos en clases, del curso y la plataforma",
        precio: 55000
    }
    ];

    // Agregar el paquete al carrito
    carrito.push(paquetes[paqueteIndex]);

    // Actualizar el contenido del carrito
    actualizarCarrito();
}

// Función para aplicar un descuento al carrito
function aplicarDescuento(nombre, descripcion, descuentoPorcentaje) {
    // Calcular el descuento en función del porcentaje
    var descuentoColones = calcularTotalCarrito() * descuentoPorcentaje

    // Actualizar el total del carrito con el descuento en colones
    var totalConDescuento = calcularTotalCarrito() - descuentoColones;

    // Formatear los valores con un punto en medio de las centenas y las unidades de millar
    var descuentoColonesFormatted = descuentoColones.toLocaleString();
    var totalConDescuentoFormatted = totalConDescuento.toLocaleString();

    // Actualizar el contenido del carrito con el descuento
    var carritoHTML = '<ul class="list-group mb-3">';
    for (var i = 0; i < carrito.length; i++) {
    carritoHTML += '<li class="list-group-item d-flex justify-content-between lh-sm border-primary">';
    carritoHTML += '<div>';
    carritoHTML += '<h6 class="my-0">' + carrito[i].nombre + '</h6>';
    carritoHTML += '<small class="text-body-secondary">' + carrito[i].descripcion + '</small>';
    carritoHTML += '</div>';
    carritoHTML += '<span class="text-body-secondary">₡' + carrito[i].precio.toLocaleString() + '</span>';
    carritoHTML += '</li>';
    }

    // Agregar el descuento al carrito
    carritoHTML += '<li class="list-group-item d-flex justify-content-between bg-body-tertiary border-primary">';
    carritoHTML += '<div class="text-success">';
    carritoHTML += '<h6 class="my-0">' + nombre + '</h6>';
    carritoHTML += '<small>' + descripcion + '</small>';
    carritoHTML += '</div>';
    carritoHTML += '<span class="text-success">₡' + descuentoColonesFormatted + '</span>';
    carritoHTML += '</li>';

    carritoHTML += '<li class="list-group-item d-flex justify-content-between border-primary">';
    carritoHTML += '<span>Total (CRC)</span>';
    carritoHTML += '<strong>₡' + totalConDescuentoFormatted + '</strong>';
    carritoHTML += '</li>';
    carritoHTML += '</ul>';

    // Actualizar el contenido del carrito en la página
    $(".list-group").html(carritoHTML);

    // Almacenar el código promocional canjeado
    codigoPromocional = codigoIngresado;

    // Limpiar el campo de entrada de texto
    $("#codigoPromocional").val("");
}

// Función para calcular el total del carrito
function calcularTotalCarrito() {
    var total = 0;
    // Calcular el total en función de los elementos en el carrito
    for (var i = 0; i < carrito.length; i++) {
    total += carrito[i].precio;
    }
    return total;
}

// Función para actualizar el contenido del carrito
function actualizarCarrito() {
    var total = calcularTotalCarrito();
    var carritoHTML = '<ul class="list-group mb-3">';
    for (var i = 0; i < carrito.length; i++) {
    carritoHTML += '<li class="list-group-item d-flex justify-content-between lh-sm border-primary">';
    carritoHTML += '<div>';
    carritoHTML += '<h6 class="my-0">' + carrito[i].nombre + '</h6>';
    carritoHTML += '<small class="text-body-secondary">' + carrito[i].descripcion + '</small>';
    carritoHTML += '</div>';
    carritoHTML += '<span class="text-body-secondary">₡' + carrito[i].precio.toLocaleString() + '</span>';
    carritoHTML += '</li>';
    }

    // Verificar si se ha aplicado un descuento
    if (codigoPromocional !== "") {
    // Agregar el descuento al carrito
    carritoHTML += '<li class="list-group-item d-flex justify-content-between bg-body-tertiary">';
    carritoHTML += '<div class="text-success">';
    carritoHTML += '<h6 class="my-0">' + "Descuento" + '</h6>';
    carritoHTML += '<small>' + "Se aplicó correctamente" + '</small>';
    carritoHTML += '</div>';
    carritoHTML += '<span class="text-success">₡' + descuentoColones + '</span>';
    carritoHTML += '</li>';
    }

    carritoHTML += '<li class="list-group-item d-flex justify-content-between border-primary">';
    carritoHTML += '<span>Total (CRC)</span>';
    carritoHTML += '<strong>₡' + total.toLocaleString() + '</strong>';
    carritoHTML += '</li>';
    carritoHTML += '</ul>';

    // Actualizar el contenido del carrito en la página
    $(".list-group").html(carritoHTML);
}
});













// Evento para detectar cuando se selecciona la opción "Tarjeta de crédito o débito"
$("#creditdebit").change(function() {
    if ($(this).is(":checked")) {
        $("#tarjetaPayment").show();
        $("#sinpePayment").hide();
        $("#paypalPayment").hide();
    }
});

// Evento para detectar cuando se selecciona la opción "Sinpe, depósito o transferencia"
$("#sinpe").change(function() {
    if ($(this).is(":checked")) {
        $("#tarjetaPayment").hide();
        $("#sinpePayment").show();
        $("#paypalPayment").hide();
    }
});

// Evento para detectar cuando se selecciona la opción "PayPal"
$("#paypal").change(function() {
    if ($(this).is(":checked")) {
        $("#tarjetaPayment").hide();
        $("#sinpePayment").hide();
        $("#paypalPayment").show();
    }
});














/* Validación y el comportamiento de envío de formulario */
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()