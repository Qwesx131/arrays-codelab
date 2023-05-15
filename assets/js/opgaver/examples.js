let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');


myExtrasInput.addEventListener("change", addExtra);



function addExtra(event) {
    /* din map kode her... */
    const text = event.target.value;
    myExtras.push(text);
    updateExtras();
}



function updateExtras() {
    
  
    const extrasHTML = myExtras.map(function(extra) {
        return '<li>' + extra + '</li>';
      }).join('');
    
      myExtrasListElement.innerHTML = extrasHTML;
    }


    /* din map kode her... */








