function inventory_management(){



    //Array para guardar los productos de esta búsqueda
    let inventory_products = [] 
    //Número del array donde guardaremos el producto de la iteración
    let count_save = 0;

    //Funcion para la búsqueda de medicamentos dentro del inventario
    const inventory_search_btn = document.getElementById("inventory_search_input")

    inventory_search_btn.addEventListener("keyup", buscar_medicamentos_inventario)
    function buscar_medicamentos_inventario(event){
        inventory_search_btn.value
        for (let count = 0; count < medicamentos_inventory.length; count++) {
            
            if (comparar_producto_inventario(inventory_search_btn.value, medicamentos_inventory[count].nombre)){
                inventory_products[count_save++] = medicamentos_inventory[count]
                console.log(inventory_products)
            }
        }
    }


    function comparar_producto_inventario(inventory_input, medicamento_nombre){
        if (inventory_input == ""){
            console.log("La búsqueda está vacía")
        } else {
            return medicamento_nombre.toUpperCase().startsWith(inventory_input.toUpperCase()) //Comparando input con medicamentos.nombre   
        }
    }



    // DATOS DE PRODUCTOS PARA EL INVENTARIO
    let inventory_product_number = "1"
    let inventory_product_name = ""
    let inventory_product_$compra = 0;
    let inventory_product_$venta = 0;
    let inventory_product_existencias = 1;

    let medicamentos_inventory = medicamentos //Copia del array para modificarlo.
   
    


    for (let count = 0; count < medicamentos_inventory.length; count++) {
        
        inventory_product_name = medicamentos_inventory[count].nombre;
        inventory_product_$venta = medicamentos_inventory[count].precio;

        callback_guardar_busqueda(inventory_product_name, inventory_product_$venta)
    }

    
}

//Función para guardar los elementos de la búsqueda actual, por defecto guarda todos los disponibles.
function callback_guardar_busqueda(prod_name, prod_$venta ){
    
}












mostrar_inventario()




