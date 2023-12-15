<?php
// Verifica si la solicitud es POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Recupera los datos del formulario
    $nombre = $_POST["firstName"];
    $apellidos = $_POST["lastName"];
    $telefono = $_POST["phonenumber"];
    $usuario = $_POST["username"];
    $email = $_POST["email"];
    $provincia = $_POST["province"];
    $canton = $_POST["canton"];
    $distrito = $_POST["district"];
    $direccion = $_POST["address"];
    $metodopago = $_POST["paymentMethod"];
    $nomtarjeta = $_POST["cc-name"]; // Nombre en la tarjeta
    $numtarjeta = $_POST["cc-number"]; // Número de tarjeta de crédito
    $vencimiento = $_POST["cc-expiration"]; // Fecha de vencimiento
    $cvv = $_POST["cc-cvv"]; // CVV

    // Realiza la validación de campos obligatorios
    if (empty($nombre) || empty($apellidos) || empty($telefono) || empty($usuario) || empty($provincia) || empty($canton) || empty($distrito) || empty($direccion) || empty($metodopago)) {
        echo "Todos los campos son obligatorios. Por favor, complete el formulario correctamente.";
        exit;
    }

    // Validación adicional para la opción de pago "Sinpe"
    if ($metodopago === "Sinpe") {
        if (empty($_FILES["paymentFile"]["name"])) {
            echo "Debe cargar un archivo para la opción de pago 'Sinpe'.";
            exit;
        }
    } else {
        // Validación para tarjeta de crédito o débito
        if (empty($nomtarjeta) || empty($numtarjeta) || empty($vencimiento) || empty($cvv)) {
            echo "Todos los campos de tarjeta son obligatorios cuando se selecciona 'Tarjeta de crédito o débito'.";
            exit;
        }
    }

    // Validación de formato de correo electrónico
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Dirección de correo electrónico no válida. Por favor, ingrese una dirección válida.";
        exit;
    }

    // Validación de formato de número de tarjeta de crédito (puedes realizar una validación más estricta)
    if ($metodopago !== "Sinpe" && !preg_match("/^[0-9]+$/", $numtarjeta)) {
        echo "Número de tarjeta de crédito no válido. Por favor, ingrese un número válido.";
        exit;
    }

    // Conexión a la base de datos MySQL (debes ajustar los datos de conexión)
    $servername = "localhost"; // Cambia esto a la dirección de tu servidor MySQL
    $username = "gil"; // Nombre de usuario MySQL
    $password = "nosequeponer"; // Contraseña del usuario MySQL
    $database = "pedidos"; // Nombre de la base de datos que creaste

    // Crea una conexión
    $conn = mysqli_connect($servername, $username, $password, $database);

    // Verifica la conexión
    if (!$conn) {
        die("Error de conexión: " . mysqli_connect_error());
    }

    // Verifica si el nombre de usuario ya existe en la base de datos
    $username_check_sql = "SELECT COUNT(*) FROM pedidos WHERE usuario = '$usuario'";
    $result = mysqli_query($conn, $username_check_sql);
    if (!$result) {
        echo "Error: " . $username_check_sql . "<br>" . mysqli_error($conn);
        exit;
    }

    $row = mysqli_fetch_array($result, MYSQLI_NUM);
    if ($row[0] > 0) {
        // El nombre de usuario ya está en uso, muestra un mensaje de error
        echo "El nombre de usuario que escogiste ya está siendo usado por otra persona. Por favor, elija otro.";
        exit;
    }

    // Prepara la consulta SQL para insertar los datos en la base de datos (debes ajustarla según tu estructura de tabla)
    $sql = "INSERT INTO pedidos (nombre, apellidos, telefono, usuario, email, provincia, canton, distrito, direccion, metodopago, nomtarjeta, numtarjeta, vencimiento, cvv)
    VALUES ('$nombre', '$apellidos', '$telefono', '$usuario', '$email', '$provincia', '$canton', '$distrito', '$direccion', '$metodopago', '$nomtarjeta', '$numtarjeta', '$vencimiento', '$cvv');
    ";

    // Ejecuta la consulta
    if (mysqli_query($conn, $sql)) {
        // Redirige al usuario a "confirmado.html" después de la inserción exitosa
        header("Location: confirmado.html");
        exit;
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    // Cierra la conexión
    mysqli_close($conn);
} else {
    // Si la solicitud no es POST, muestra un mensaje de error
    echo "Acceso no autorizado.";
}
?>
