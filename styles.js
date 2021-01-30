
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

