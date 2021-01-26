//  AQUÍ SE DEFINEN LAS 3 SECCIONES PRINCIPALES DEL PROGRAMA:

//PLANTILLA DEL MENÚ PRINCIPAL
const menu_window = (`
    
        <div class="row">

        <!--Inicio del panel lateral-->
        <div class="left_panel-container col-3 pe-0 ps-0">

            <div class="fila_lateral d-flex align-items-center">
                <figure class="lateral_panel-icon">
                    <img src="./assets/user_icon.png" alt="UsrImage">
                </figure>
                <label>Usuario</label>
            </div>

            <div class="fila_lateral d-flex align-items-center">
                <figure class="lateral_panel-icon">
                    <img src="./assets/settings_icon.png" alt="Ajustes">
                </figure>
                <label>Ajustes</label>                
            </div>

            <div class="fila_lateral d-flex align-items-center">
                <figure class="lateral_panel-icon">
                    <img src="./assets/users_icon.png" alt="Empleados">
                </figure>
                <label>Usuarios/empleados</label>
            </div>

            <div class="fila_lateral d-flex align-items-center">
                <figure class="lateral_panel-icon">
                    <img src="./assets/logout_icon.png" alt="Logout">
                </figure>
                <label>Cerrar sesión</label>
            </div>

        </div>


        <div class="col main_menu-container">

            <div class="row">
                <div class="col text-center">
                    <figure class="menu_button">
                        <img src="./assets/shopping_car.png" alt="">
                    </figure>
                    <a class="main_buttons-title">Vender</a> 
                </div>
            <div class="col text-center">
                <figure class="menu_button">
                    <img src="./assets/info_icon.png" alt="">
                </figure>                  
                <a class="main_buttons-title">Resumen <br>de<br>Ventas</a>    
            </div>                
            </div>
            
            <div class="row">
            <div class="col text-center">
                <figure class="menu_button">
                    <img src="./assets/inventory_checked.png" alt="">
                </figure>
                <a class="main_buttons-title">Inventario</a> 
            </div>
            <div class="col">
                <img class="main_logo" src="./assets/logo.png" alt="">
            </div>
            </div>

        </div>



        
        </div>
    
`)