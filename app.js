$(document).ready(function () {
    document.formulario.costoNeto.value = "$ 0.-";
    document.formulario.costoTotal.value = "$ 0.-";

    $("#formulario").validate({

        submitHandler: function (form) {


            let valorCostoNeto = $("#costoNeto").val();
            let valorCostoTotal = $("#costoTotal").val();

            let valorNeto = 0;
            let valorLavadoExt = "";
            if ($("#lavadoExterior").is(":checked")) {
                valorLavadoExt = "SI";
                valorNeto += 7000;
            } else {
                valorLavadoExt = "NO";
            }
            let valorLavadoMot = "";
            if ($("#lavadoMotor").is(":checked")) {
                valorLavadoMot = "SI";
                valorNeto += 5000;
            } else {
                valorLavadoMot = "NO";
            }
            let impuesto = valorNeto * 0.19;
            let totalPagar = valorNeto + impuesto;

            //    if (confirm(mensaje)) 
            {

                form.reset();
            }
        },
    });
});

function costo() {
    if ($("#lavadoExterior").is(":checked") && $("#lavadoMotor").is(":checked")) {//cambio 1 === no es para eso, es && (AND)
        document.formulario.costoNeto.value = "$ 12.000.-";
        document.formulario.costoTotal.value = $; { Math.round(120001.19) };
        document.formulario.costoTotal.value = `${Math.round(12000 * 1.19)}`;
    }
    else {
        if ($("#lavadoExterior").is(":checked")) {
            document.formulario.costoNeto.value = "$ 7.000.-";
            document.formulario.costoTotal.value = $; { Math.round(70001.19) };//ERROR
            document.formulario.costoTotal.value = `${Math.round(7000 * 1.19)}`;
        }
        else {
            if ($("#lavadoMotor").is(":checked")) {
                document.formulario.costoNeto.value = "$ 5.000.-";
                document.formulario.costoTotal.value = $; { Math.round(5000 * 1.19) };//ERROR
                document.formulario.costoTotal.value = `${Math.round(5000 * 1.19)}`;
            }
            else {
                //Simplificar
                document.formulario.costoNeto.value = "$ 0.-";
                document.formulario.costoTotal.value = "$ 0.-";
            }
        }
    }
}