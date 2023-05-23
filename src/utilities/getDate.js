export function getDate() {
    // Obtener la fecha actual
    var fecha_actual = new Date();
  
    // Arrays para mapear los nombres de los meses y días en inglés
    var meses = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    var dias = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
  
    // Obtener el día, mes y año de la fecha actual
    var dia = fecha_actual.getDate();
    var mes = meses[fecha_actual.getMonth()];
    var año = fecha_actual.getFullYear();
  
    // Construir la fecha formateada
    var fecha_formateada = `${mes} ${dia} , ${año}`;
  
    // Devolver la fecha formateada
    return fecha_formateada;
}
  
  