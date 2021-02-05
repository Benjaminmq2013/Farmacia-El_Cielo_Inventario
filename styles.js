
function callback_ventas_estilos(){
    const logout_icon = document.getElementById("logout_icon")
    const btn_logout = document.querySelector(".btn_logout")
    //btn_logout.addEventListener("onmouseover", cambiar_icono_logout)
    btn_logout.onmouseover = icono_rojo_logout;
    btn_logout.onmouseout = icono_blanco_logout;
    
    function icono_rojo_logout(){
        logout_icon.src="./assets/logout_white-icon.png"
    }
    
    function icono_blanco_logout(){
        logout_icon.src="./assets/logout_icon.png"
    }
}


function estilizar_tabla(){
    const btn_cerrar_venta_container = document.querySelector(".btn_cerrar_venta-container")
    btn_cerrar_venta_container.classList.remove("mt-4")
}

function estilizar_tabla_margin(){
    const realizar_venta_btn = document.getElementById("realizar_venta_btn")
    const btn_cerrar_venta_container = document.querySelector(".btn_cerrar_venta-container")
    realizar_venta_btn.addEventListener("click", ()=>{
        btn_cerrar_venta_container.classList.add("mt-4")

    })
}