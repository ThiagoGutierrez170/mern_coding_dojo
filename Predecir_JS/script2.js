//4. Explora el comportamiento de JavaScript cuando se manipulan propiedades de un objeto inmutable.
    //el resultado sera luis, 29
    //ya que object.freeze bloquea el contenido para que no se pueda realizar cambios
    const datos = Object.freeze({ nombre: 'Luis', edad: 29 });
    
    datos.edad = 30;
    
    console.log(datos.edad);