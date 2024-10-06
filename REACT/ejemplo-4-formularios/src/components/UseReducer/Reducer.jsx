// Estado inicial
const estadoInicial = {
    tareas: [],
    control_id: 0 // Contador de ID ascendente
};
  
// Función reductora
function reductorTareas(state, action) {
    switch (action.type) {
        case 'AGREGAR_TAREA':
            return {
                ...state,
                tareas: [...state.tareas, { 
                                            id: state.control_id + 1, // Generar un ID ascendente
                                            texto: action.payload,
                                            completada: false }],
                control_id: state.control_id + 1 // Incrementar el contador de ID
            };
        case 'ELIMINAR_TAREA':
            return {
                ...state,
                tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
            };
        case 'TOGGLE_COMPLETADA':
            return {
                ...state,
                tareas: state.tareas.map((tarea) =>
                    tarea.id === action.payload ? { ...tarea, completada: !tarea.completada } : tarea
                ),
            };
        default:
            return state;
    }
}
  
export { estadoInicial, reductorTareas };
