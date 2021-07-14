function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    

    if (hora < 10) {
        hora = '0' + hora;
    } else if (min < 10) {
        min = '0' + min;
    } else if (seg < 10) {
        seg = '0' + seg;
    } else {

    }

    if ( hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = '/img/manha.jpg'
        document.body.style.background = '#feb408b2'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = '/img/tarde.jpeg'
        document.body.style.background = '#c1a18b'
    } else {
        //BOA NOITE!
        img.src = '/img/noite.jpg'
        document.body.style.background = '#261f25'
    }
    msg.innerHTML = `${hora}:${min}:${seg}`
    
    setInterval(carregar, 1000);
}