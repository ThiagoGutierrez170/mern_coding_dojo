const estadoInicial = {
    nombre: '',
    errorNombre: '',
    edad: '',
    errorEdad: '',
    seHaEnviado: false
  };
  
const reducer = (estado, accion) => {
    switch (accion.tipo) {
      case 'ESTABLECER_VALOR_NOMBRE':
        return {
          ...estado,
          nombre: accion.valor,
          errorNombre: ''  // Borramos el error si el usuario ingresa algo válido
        };
      case 'ESTABLECER_ERROR_NOMBRE':
        return {
          ...estado,
          errorNombre: accion.valor  // Establecemos el error en el campo nombre
        };
      case 'ESTABLECER_VALOR_EDAD':
        return {
          ...estado,
          edad: accion.valor,
          errorEdad: ''  // Borramos el error si el usuario ingresa algo válido
        };
      case 'ESTABLECER_ERROR_EDAD':
        return {
          ...estado,
          errorEdad: accion.valor  // Establecemos el error en el campo edad
        };
      case 'ESTABLECER_SE_HA_ENVIADO':
        return {
          ...estado,
          seHaEnviado: accion.valor  // Indicamos si el formulario ha sido enviado con éxito
        };
      default:
        return estado;
    }
  };
  export { estadoInicial, reducer };