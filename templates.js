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
                        <img id="forward_arrow-sell" src="./assets/forward_signal.png">
                    </figure>
                    <a class="main_buttons-title">Vender</a> 
                </div>
            <div class="col text-center">
                <figure class="menu_button">
                    <img id="info_image" src="./assets/info_icon.png" alt="">
                    <img id="forward_arrow-info" src="./assets/forward_signal.png">
                </figure>                  
                <a class="main_buttons-title">Resumen <br>de<br>Ventas</a>    
            </div>                
            </div>
            
            <div class="row">
            <div class="col text-center">
                <figure class="menu_button">
                    <img id="inventory_image" src="./assets/inventory_checked.png" alt="">
                    <img id="forward_arrow-inventory" src="./assets/forward_signal.png">
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
                            <input id="prediction_input" type="text" class="form-control dropdown-toggle" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" data-bs-toggle="dropdown" aria-expanded="false" autocomplete="off">
                            <button class="btn btn-outline-secondary btn_add_product" type="button" id="button-addon1">+ Agregar</button>
                            <ul class="recomendaciones_drop dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="prediction_1 dropdown-item" href="#">...</a></li>
                                <li><a class="prediction_2 dropdown-item" href="#"></a></li>
                                <li><a class="prediction_3 dropdown-item" href="#"></a></li>
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

                      <tbody class="tabla_comprando-body">
                       
                        
                      </tbody>

                      <tfoot>
                        <tr>
                          <th scope="row">Total:</th>
                          <td></td>
                          <td>--</td>
                          <td>$99.99</td>
                        </tr>
                      </tfoot>

                    </table>
                  </div>

                  <div class="btn_cerrar_venta-container container d-flex mt-4">
                    <button id="realizar_venta_btn" type="button text-center" class="btn btn-primary">Realizar Venta</button>

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



//Creando todos los atributos para la tabla
let compra_number= 1;
let compra_name = "";
let compra_details= "";
let compra_price= 0;
let compra_cantidad= 1.00;

function callback_construir_tabla(){
  const comprar_producto_tabla = (`  
    <th scope="row">${compra_number}</th>
    <td>${compra_name}</td>
    <td>${compra_details}</td>
    <td>${compra_price}</td>
    <td>${compra_cantidad}</td>  
  `)
  //Llamando a la función construir tabla para añadir el innerHTML en el "body" de la tabla. (Origen en search.js)
  if (compra_name == ""){

  }else{
    agregar_tabla(comprar_producto_tabla); 
    prediction_input.value = ("");
    compra_name = "";
    compra_number++
  }

}











const inventory_window=(`

  <div class="row">

  <!--Inicio del panel lateral-->
  <div class="left_panel-container col-3 pe-0 ps-0">

      <div class="fila_lateral d-flex align-items-center">
          <figure class="lateral_panel-icon">
              <img src="./assets/packages_icon.png" alt="">
          </figure>
          <label>Existencias</label>
      </div>

      <div class="fila_lateral d-flex align-items-center">
        <figure class="lateral_panel-icon">
            <img src="./assets/plus_icon-orange.png" alt="">
        </figure>
        <label>Crear Producto</label>
      </div>

    <div class="fila_lateral d-flex align-items-center">
      <figure class="lateral_panel-icon">
          <img src="./assets/offer.png" alt="">
      </figure>
      <label>Crear Ofertas</label>
    </div>

    <div class="fila_lateral d-flex align-items-center">
      <figure class="lateral_panel-icon">
          <img src="./assets/chart_icon.png" alt="">
      </figure>
      <label>Estadísticas</label>
    </div>

      

      

  </div>


  <div class="col inventory_container">

      
    <h2 class="text-center mt-4">Existencias</h2>

    <div class="container inventory_input-container mt-4">
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Buscar</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
      </div>
    </div>
    

    <div class="container table_container mt-2">
      <div class="table-responsive">
        <table class="table">

          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Código</th>
              <th scope="col">$Compra</th>
              <th scope="col">$Venta</th>
              
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              
            </tr>

            <tr>
              <th scope="row">2</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              
            </tr>

            <tr>
              <th scope="row">3</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>



  </div>
`)

