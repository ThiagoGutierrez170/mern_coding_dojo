import { useState, useCallback } from 'react';

// Definimos el hook personalizado useLoginForm
const useLoginForm = (initialValues = { username: '', password: '' }) => {
  const [valores, setValores] = useState(initialValues);
  const [errores, setErrores] = useState({});

  const validar = (nombre, valor) => {
    let error;

    if (nombre === 'username' && !valor) {
      error = 'El nombre de usuario es requerido';
    } else if (nombre === 'password' && !valor) {
      error = 'La contraseña es requerida';
    }

    return error;
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    const error = validar(name, value);

    setValores((prevValores) => ({
      ...prevValores,
      [name]: value,
    }));

    setErrores((prevErrores) => ({
      ...prevErrores,
      [name]: error,
    }));

  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const nuevosErrores = {};

    Object.keys(valores).forEach((nombre) => {
      const error = validar(nombre, valores[nombre]);
      if (error) {
        nuevosErrores[nombre] = error;
      }
    });

    if (Object.keys(nuevosErrores).length === 0) {
      console.log('Enviando formulario:', valores);
    } else {
      setErrores(nuevosErrores);
    }

  }, [valores]);

  return [valores, errores, handleChange, handleSubmit];
};

export default useLoginForm;
