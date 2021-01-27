

const main_content = document.getElementById("main_content") //Contenedor principal para menú, ventas y inventario.

//Trayendo botones:
const menu_button = document.getElementById("menu_button")
menu_button.addEventListener("click", mostrar_menu) //Mostrando menú

const ventana_button = document.getElementById("ventana_button", mostrar_ventana)
ventana_button.addEventListener("click", mostrar_ventana)





//Dando contenido al main.

function mostrar_menu(){
    main_content.innerHTML = menu_window;
    
    menu_button.classList.add("active_menu")
    ventana_button.classList.remove("active_menu")


    const vender_btn_icon = document.getElementById("vender_btn-icon")
    vender_btn_icon.addEventListener("click", mostrar_ventana)
}
mostrar_menu()



// Mostrar ventana de Ventas:
function mostrar_ventana(){
    main_content.innerHTML = `` //Reseteando el contenido del contenedor
    main_content.innerHTML = venta_window;
    menu_button.classList.remove("active_menu")
//remover a inventario también
    ventana_button.classList.add("active_menu")

    //Estos callbacks ejecutan los scripts de las funciones para "ventas"
    ballback_activate_search()
    callback_ventas_estilos()

    //Funciones activas de la ventana "ventas"
    const back_button_container = document.querySelector(".back_button-container")
    back_button_container.addEventListener("click", mostrar_menu)
}




