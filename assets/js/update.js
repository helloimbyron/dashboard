
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

runScripts();
modifyText();
