
// Actividad en clase 4.

let runScripts = () => {
  let chart_bars = document.getElementById('chart-bars');
  let icons = document.getElementsByTagName('i');
  let cards = document.getElementsByClassName('card');
};

let modifyText = () => {
  let listOfP = document.getElementsByTagName('p');
  elementP = listOfP[3];
  elementP.innerHTML = 'Dinero Actual';

  let listOfH4 = document.getElementsByTagName('h4');
  elementH4 = listOfH4[0];
  elementH4.innerHTML = '$301k';
};

// Actividad en clase 5.

let updateData1 = () => {

  let data = [{
    title: 'Usuarios actuales',
    value: '3,200'
  },
  {
    title: 'Nuevos clientes',
    value: '4,215'
  },
  {
    title: 'Ventas',
    value: '$121,520'
  }];

  let [ users, clients, sales ] = data;
  let { title: title_users , value: value_users } = users;
  let { title: title_clients , value: value_clients } = clients;
  let { title: title_sales , value: value_sales } = sales;

  let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
  let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
  let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`;

  let listOfElements = document.getElementsByClassName('text-end pt-1');
  let [ , second, third, fourth ] = listOfElements;
  second.innerHTML = message_users;
  third.innerHTML = message_clients;
  fourth.innerHTML = message_sales;

};

let updateData2 = () => {

  let cambios = [
    {
      valor_previo: 250,
      valor_actual: 301,
      mensaje_tiempo: 'que la semana anterior'
    },
    {
      valor_previo: 3510,
      valor_actual: 3200,
      mensaje_tiempo: 'que la semana anterior'
    },
    {
      valor_previo: 3920,
      valor_actual: 4215,
      mensaje_tiempo: 'que ayer'
    },
    {
      valor_previo: 110200,
      valor_actual: 121520,
      mensaje_tiempo: 'que ayer'
    }
  ];

  // Original.
  {
  //   let [ valor_dinero, valor_usuarios, valor_clientes, valor_ventas ] = cambios;
  //   let { valor_previo: dinero_valor_previo, valor_actual: dinero_valor_actual, mensaje_tiempo: dinero_mensaje_tiempo } = valor_dinero;
  //   let { valor_previo: usuarios_valor_previo, valor_actual: usuarios_valor_actual, mensaje_tiempo: usuarios_mensaje_tiempo } = valor_usuarios;
  //   let { valor_previo: clientes_valor_previo, valor_actual: clientes_valor_actual, mensaje_tiempo: clientes_mensaje_tiempo } = valor_clientes;
  //   let { valor_previo: ventas_valor_previo, valor_actual: ventas_valor_actual, mensaje_tiempo: ventas_mensaje_tiempo } = valor_ventas;
  
  //   let dinero_porcentaje = (dinero_valor_actual - dinero_valor_previo) * 100 / dinero_valor_previo;
  //   let usuarios_porcentaje = (usuarios_valor_actual - usuarios_valor_previo) * 100 / usuarios_valor_previo;
  //   let clientes_porcentaje = (clientes_valor_actual - clientes_valor_previo) * 100 / clientes_valor_previo;
  //   let ventas_porcentaje = (ventas_valor_actual - ventas_valor_previo) * 100 / ventas_valor_previo;
  
  //   dinero_porcentaje = Math.round(dinero_porcentaje);
  //   usuarios_porcentaje = Math.round(usuarios_porcentaje);
  //   clientes_porcentaje = Math.round(clientes_porcentaje);
  //   ventas_porcentaje = Math.round(ventas_porcentaje);
  
  //   let dinero_clase = (dinero_porcentaje > 0) ? 'text-success' : 'text-danger';
  //   let usuarios_clase = (usuarios_porcentaje > 0) ? 'text-success' : 'text-danger';
  //   let clientes_clase = (clientes_porcentaje > 0) ? 'text-success' : 'text-danger';
  //   let ventas_clase = (ventas_porcentaje > 0) ? 'text-success' : 'text-danger';
  
  //   dinero_porcentaje = (dinero_porcentaje > 0) ? `+${dinero_porcentaje}%` : `${dinero_porcentaje}%`;
  //   usuarios_porcentaje = (usuarios_porcentaje > 0) ? `+${usuarios_porcentaje}%` : `${usuarios_porcentaje}%`;
  //   clientes_porcentaje = (clientes_porcentaje > 0) ? `+${clientes_porcentaje}%` : `${clientes_porcentaje}%`;
  //   ventas_porcentaje = (ventas_porcentaje > 0) ? `+${ventas_porcentaje}%` : `${ventas_porcentaje}%`;
  
  //   let mensaje_dinero = `<p class="mb-0"><span class="text-sm ${dinero_clase} font-weight-bolder"> ${dinero_porcentaje} </span> ${dinero_mensaje_tiempo} </p>`;
  //   let mensaje_usuarios = `<p class="mb-0"><span class="text-sm ${usuarios_clase} font-weight-bolder"> ${usuarios_porcentaje} </span> ${usuarios_mensaje_tiempo} </p>`;
  //   let mensaje_clientes = `<p class="mb-0"><span class="text-sm ${clientes_clase} font-weight-bolder"> ${clientes_porcentaje} </span> ${clientes_mensaje_tiempo} </p>`;
  //   let mensaje_ventas = `<p class="mb-0"><span class="text-sm ${ventas_clase} font-weight-bolder"> ${ventas_porcentaje} </span> ${ventas_mensaje_tiempo} </p>`;
  
  //   let listaElementos = document.querySelectorAll('.card-footer.p-3');
  //   let [primero, segundo, tercero, cuarto] = listaElementos;
  //   primero.innerHTML = mensaje_dinero;
  //   segundo.innerHTML = mensaje_usuarios;
  //   tercero.innerHTML = mensaje_clientes;
  //   cuarto.innerHTML = mensaje_ventas;
  };

  // Refactorización.
  {
    function convertirPorcentaje(actual, previo) {
      return (actual - previo) * 100 / previo;
    };

    function cambiarClase(porcentaje) {
      const clase = (porcentaje > 0) ? 'text-success' : 'text-danger';
      return clase;
    };

    function cambiarSigno(porcentaje) {
      const signo = (porcentaje > 0) ? `+${porcentaje}%` : `${porcentaje}%`;
      return signo;
    };

    function generarMensaje(clase, porcentaje, mensaje) {
      return `<p class="mb-0"><span class="text-sm ${clase} font-weight-bolder"> ${porcentaje} </span> ${mensaje} </p>`;
    };

    let listaElementos = document.querySelectorAll('.card-footer.p-3');
    let contador = 0;

    for (const objeto of cambios) {
      let { valor_previo, valor_actual, mensaje_tiempo } = objeto;

      let clase = cambiarClase(porcentaje);

      let porcentaje = convertirPorcentaje(valor_actual, valor_previo);
      porcentaje = Math.round(porcentaje);
      porcentaje = cambiarSigno(porcentaje);

      let mensaje = generarMensaje(clase, porcentaje, mensaje_tiempo);

      if (contador < cambios.length) {
        listaElementos[contador].innerHTML = mensaje;
        contador++;
      };
    };
  };



};

runScripts();
modifyText();
updateData1();
updateData2();
