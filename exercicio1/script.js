
function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    //var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
      //BOM DIA
      img.scr = 'manha.png'
      document.body.style.background = '#f4ebe1'  
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = "#bbbac0"
    } else {
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#042e47'
    }
}