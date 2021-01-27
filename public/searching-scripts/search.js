function ballback_activate_search(){
//trayendo inputs para predicciones
const prediction_input = document.getElementById("prediction_input");
prediction_input.addEventListener("keyup", iterar_medicamentos)



const comienza_con = function (busqueda_value, medicamento_nombre){
    if (busqueda_value == ""){

    } else {
        return medicamento_nombre.toUpperCase().startsWith(busqueda_value.toUpperCase()) //Comparando input con medicamentos.nombre   
    }

}


//Se ejecuta al pulsar una tecla, actualiza el valor del input y lo compara con la base de datos.
function iterar_medicamentos(){
    let pred_num = 1;

    for (var l = 1; l < 4; l++){ //Limpiando resultados de la pulsación anterior. {loop}
    let prediction_number = document.querySelector(`.prediction_${l}`)
    prediction_number.innerHTML = ("")
    }

    for (var i = 0; i < medicamentos.length; i++){
        

        
        
        let contenido = (`${medicamentos[i].nombre} Precio: $${medicamentos[i].precio}`) //Nombre y Precio / Producto.
        let nombre_a_comparar = (medicamentos[i].nombre).toUpperCase()
        
        
        if (comienza_con( prediction_input.value, nombre_a_comparar)){            
            let prediction_number = document.querySelector(`.prediction_${pred_num++}`) //<li> para mostrar producto
            
            if (pred_num <= 4){
                prediction_number.innerHTML = contenido                
            }

        } 
            


    }


}
}

