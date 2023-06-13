const Icons = (icon) => { /*La funcion Icons toma un parametro llamado icon, 
que presenta la condicion climatica*/ 

    switch (icon) { /*La declaracion switch evalua el valor de icon
    */
        case 'Thunderstorm': /*Cada caso representa una condicion climatica
        especifica*/
            icon='icons/thunderstorms-rain.svg' /*Se asigna la ruta del icono
            y se imprime un mensaje que indica la condicion climatica correspondiente*/
            console.log("TORMENTA") 
            break;    
        case 'Drizzle':
            icon='icons/drizzle.svg'
            console.log('LLOVIZNA');
            break;
        case 'Rain':
            icon='icons/rain.svg'
            console.log('LLUVIA');
            break;
        case 'Snow':
            icon='icons/snowy.svg'
            console.log('NIEVE');
            break;                        
        case 'Clear':
            icon='icons/clear-day.svg'
            console.log('LIMPIO');
            break;
        case 'Atmosphere':
            icon='icons/weather.svg'
            console.log('ATMOSFERA');
            break;  
        case 'Clouds':
            icon='icons/fog.svg'
            console.log('NUBES');
            break;  
        case 'Fog':
            icon='icons/fog.svg'
            console.log('NUBES');
            break;    
        case 'Haze':
            icon='icons/haze.svg'
            console.log('BRUMAS');
            break;   
        case 'Smoke':
            icon='icons/smoke.svg'
            console.log('HUMO');
            break;      
        default:
            icon='icons/clear-day.svg' /*Si ninguna de las condiciones conincide 
            se le asigna la ruta*/
            console.log('LIMPIO');   /*Se imprime un mensaje de que esta limpio*/
    }
  return icon /*Finalmente, la funcion devuelve el valor de icon*/
}

export default Icons /*Indica que la funcion Icons es la exportacion predeterminada del
archivo en el que se encuentra*/