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
                    <img id="logout_lateral_icon-image" src="./assets/logout_icon.png" alt="Logout">
                </figure>
                <label>Cerrar sesión</label>
            </div>

        </div>


        <div class="col main_menu-container">

            <div class="row">
                <div class="col text-center">
                    <figure class="menu_button">
                        <img id="vender_btn-icon" src="./assets/shopping_car.png" alt="">
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



const venta_window = (`
<div class="vender_menu-container position-relative">
          <div class="row">
            <div class="col-1">
              <figure class="back_button-container mt-4">
                <img src="./assets/back_arrow.png" alt="">
              </figure>

              <div class="logout_container position-absolute bottom-0">
                <button class="btn_logout btn btn-outline-danger">
                  <img id="logout_icon" src="./assets/logout_icon.png" alt="">                      
                  Cerrar Sesión
                </button>
              </div>

            </div>

            <div class="col-11">
              <main class="bg-light pt-5 pb-2">
                <div class="container d-flex justify-content-center">
        
                    <div class="search_wrapper">
                        
                        <div class="input-group mb-3">
                            <input id="prediction_input" type="text" class="form-control dropdown-toggle" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" data-bs-toggle="dropdown" aria-expanded="false">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon1">+ Agregar</button>
                            <ul class="recomendaciones_drop dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="prediction_1 dropdown-item" href="#">Predicción 1...</a></li>
                                <li><a class="prediction_2 dropdown-item" href="#">Predicción 2...</a></li>
                                <li><a class="prediction_3 dropdown-item" href="#">Predicción 3...</a></li>
                            </ul>
                        </div>
        
                    </div>

                    <!--Spinner Activo al descargar la base de datos.-->
                    <div class="custom_spinner-css spinner-border text-primary ms-2 mt-1" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
        
                </div>


                <div class="container">
                  <h2 class="text-center mb-5 mt-4">Resumen de la venta</h2>

                  <div class="table_container container">
                    <table class="table">

                      <thead></thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Producto</th>
                          <th scope="col">Detalles</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Cantidad</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Viagra</td>
                          <td>Problemas erectiles</td>
                          <td>$99.99</td>
                          <td>10.00</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Problemas </td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>1.00</td>
                        </tr>
                      </tbody>

                      <tfoot>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>--</td>
                          <td>$99.99</td>
                        </tr>
                      </tfoot>

                    </table>
                  </div>

                  <div class="btn_cerrar_venta-container container d-flex">
                    <button type="button text-center" class="btn btn-primary">Realizar Venta</button>

                    <div class="printing-advice d-flex align-items-center mb-3">
                      <p class="mb-0">Imprimiendo...</p>
                      <div class="printing-signal spinner-grow text-primary ms-2" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </div>

                  </div>

                  


                </div>

            </div>
          </div>
        </div>

`)