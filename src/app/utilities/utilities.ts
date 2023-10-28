
export function calcularEdad(fecha: Date) {
  const hoy = new Date();
  const cumpleanos = new Date(fecha);
  let edad = hoy.getFullYear() - cumpleanos.getFullYear();
  const m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
  }

  return edad;
}

export function getZip(city:string){
  if(city == 'valencia') {
    return '46023'
  }
  if(city == 'castellon'){
    return '42000'
  }
  if(city == 'alicante'){
    return '41000'
  }
  return 'not found'
}