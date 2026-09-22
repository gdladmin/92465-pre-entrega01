// ==========================================
// MI PRIMER SCRIPT INTERACTIVO
// PRÉSTAMO SISTEMA FRANCÉS
// TASA FIJA ANUAL: 35%
// PLAZO MÁXIMO: 48 MESES
// MONTO MÁXIMO: $10.000.000
// ==========================================

//  Declaracion de constantes

const tasaAnual = 0.35;
const tasaMensual = (1 + tasaAnual) ** (1 / 12) - 1;
const plazoMaximo = 48;
const montoMaximo = 10000000;

//  pide datos al usuario

const nombre = prompt("Ingrese su nombre:");

const montoPrestamo = Number(
  prompt("Ingrese el monto del préstamo: máximo $10.000.000"),
);

const cantidadMeses = parseInt(
  prompt("Ingrese el plazo en meses (máximo 48):"),
);

// valida datos ingresados

if (
  isNaN(montoPrestamo) ||
  isNaN(cantidadMeses) ||
  montoPrestamo < 1 ||
  montoPrestamo > montoMaximo ||
  cantidadMeses < 1 ||
  cantidadMeses > plazoMaximo
) {
  alert("Error: plazo o monto inválido.");
  console.log("Error: plazo o monto inválido.");
} else {
  // pasa validacion y continua con el calculo.

  const factorCapitalizacion = (1 + tasaMensual) ** cantidadMeses;

  const cuotaFija =
    (montoPrestamo * (tasaMensual * factorCapitalizacion)) /
    (factorCapitalizacion - 1);

  // variables let para el calculo de cada cuota

  let saldoPendiente = montoPrestamo;
  let interesesTotales = 0;

  //  iteracion por las cuotas

  for (let numeroCuota = 1; numeroCuota <= cantidadMeses; numeroCuota++) {
    const intereses = saldoPendiente * tasaMensual;
    const amortizacion = cuotaFija - intereses;
    saldoPendiente = saldoPendiente - amortizacion;
    interesesTotales = interesesTotales + intereses;
  }

  // Resumen final del préstamo
  const totalaPagar = cuotaFija * cantidadMeses;

  console.log("---------resumen del préstamo-------------------");

  console.log("Nombre: " + nombre);

  console.log("Monto del préstamo: $" + montoPrestamo.toFixed(2));
  console.log("Plazo: " + cantidadMeses + " meses");
  console.log(
    "Tasa de interés mensual: " + (tasaMensual * 100).toFixed(2) + "%",
  );
  console.log("Cuota mensual: $" + cuotaFija.toFixed(2));
  console.log("Intereses totales: $" + interesesTotales.toFixed(2));
  console.log("Costo total del prestamo: $" + totalaPagar.toFixed(2));

  console.log("==========================================");

  // Muestra un mensaje de alerta con el resumen del préstamo
  alert(
    "Hola " +
      nombre +
      "\n\n" +
      "Resumen del Préstamo - Sistema Francés\n\n" +
      "Monto: $" +
      montoPrestamo.toFixed(2) +
      "\n\n" +
      "Plazo: " +
      cantidadMeses +
      " meses \n\n" +
      "Cuota mensual: $" +
      cuotaFija.toFixed(2) +
      "\n\n" +
      "intereses totales: $" +
      interesesTotales.toFixed(2) +
      "\n\n" +
      "Costo total del préstamo: $" +
      totalaPagar.toFixed(2),
  );
}
