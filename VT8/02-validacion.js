/* 
Para proporcionar seguridad a la hora de enviar datos a través de un formulario, no solo es necesario
elegir los mejores <input> para que el usuario introduzca los datos, sino también comprobar que esos datos
enviados son correcots.

Para ello usaremos diferentes técncias de validación mediante JavaScript que realizaremos antes del
envío del formulario o mientras se introduce la información en él
*/

// Estructura de un formulario para validación:
/*

<form action="URL" methor="POST" name="Validado" onsubmit="return validarForm()"></form>

<script type="javascript">
    function validarForm() {
        valor = document.getElementById("campo").value;
        if (valor == null || valor.lenght == 0){
        alert ("El campo no puede esta vacío");
        return false;
        }
    }
</script>

*/