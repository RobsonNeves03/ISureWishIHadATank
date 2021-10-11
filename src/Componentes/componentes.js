import React from 'react'
import './componentes.css';
import './Texts'
import { panzeri, panzerii, panzeriii, panzeriv, panzerv } from './Texts';

let cont = 1
function bttnLeft(){
    var image = document.getElementById("1");
    var tito = document.getElementById("nomeTnk")
    var dTxt = document.getElementById("descText")
    cont = cont - 1;
    if (cont === 0){
        cont = 5
        image.src = ("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDVYILkvHL3I%2Fmaxresdefault.jpg&f=1&nofb=1");
        tito.innerHTML = ("Panzerkampfwagen V")
        dTxt.innerHTML = (panzerv)
    }
    else if (cont === 1){
        image.src = ("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EbAjRoCiRJEFfkTA9Kyi5QHaFj%26pid%3DApi&f=1")
        tito.innerHTML = ("Panzerkampfwagen I")
        dTxt.innerHTML = (panzeri)
    }
    else if (cont === 2){
        image.src = ("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flandmarkscout-yw3wirjird.netdna-ssl.com%2Fwp-content%2Fuploads%2F2011%2F12%2FPanzer-II-Frontal-in-Arromanche-By-Phil-Wood.jpg&f=1&nofb=1")
        tito.innerHTML = ("Panzerkampfwagen II")
        dTxt.innerHTML = (panzerii)
    }
    else if (cont === 3){
        image.src = ("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvistapointe.net%2Fimages%2Fpanzer-iii-1.jpg&f=1&nofb=1")
        tito.innerHTML = ("Panzerkampfwagen III")
        dTxt.innerHTML = (panzeriii)
    }
    else if (cont === 4){
        image.src = ("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette3.wikia.nocookie.net%2Ffirearmcentral%2Fimages%2Fc%2Fca%2FPanzerkampfwagen_IV_Ausf._G.jpg%2Frevision%2Flatest%3Fcb%3D20151015104342&f=1&nofb=1")
        tito.innerHTML = ("Panzerkampfwagen IV")
        dTxt.innerHTML = (panzeriv)
    }

    console.log(cont)
}

function bttnRight(){
    var image = document.getElementById("1");
    var tito = document.getElementById("nomeTnk")
    var dTxt = document.getElementById("descText")
    cont = cont + 1;
    if (cont === 2){
        image.src = ("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flandmarkscout-yw3wirjird.netdna-ssl.com%2Fwp-content%2Fuploads%2F2011%2F12%2FPanzer-II-Frontal-in-Arromanche-By-Phil-Wood.jpg&f=1&nofb=1")
        tito.innerHTML = ("Panzerkampfwagen II")
        dTxt.innerHTML = (panzerii)
    }
    else if (cont === 3){
        image.src = ("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvistapointe.net%2Fimages%2Fpanzer-iii-1.jpg&f=1&nofb=1")
        tito.innerHTML = ("Panzerkampfwagen III")
        dTxt.innerHTML = (panzeriii)
    }
    else if (cont === 4){
        image.src = ("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette3.wikia.nocookie.net%2Ffirearmcentral%2Fimages%2Fc%2Fca%2FPanzerkampfwagen_IV_Ausf._G.jpg%2Frevision%2Flatest%3Fcb%3D20151015104342&f=1&nofb=1")
        tito.innerHTML = ("Panzerkampfwagen IV")
        dTxt.innerHTML = (panzeriv)
    }
    else if (cont === 5){
        image.src = ("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDVYILkvHL3I%2Fmaxresdefault.jpg&f=1&nofb=1");
        tito.innerHTML = ("Panzerkampfwagen V")
        dTxt.innerHTML = (panzerv)
    }
    else if(cont === 6){
        cont = 1
        image.src = ("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EbAjRoCiRJEFfkTA9Kyi5QHaFj%26pid%3DApi&f=1")
        tito.innerHTML = ("Panzerkampfwagen I")
        dTxt.innerHTML = (panzeri)
    }

    console.log(cont)
}

const CompBttnLR = () => {
    return(
        <div className = "compBt">
            <div className = "btBox">
                <div className = "bt"><button onClick={bttnLeft}> &lt; </button></div>
                <div className = "bt"><button onClick={bttnRight}> &gt; </button></div>
            </div>
        </div>
    );
}

const FrontPageTextMain = () => {
    return(
        <div className="descText" id = "descText">The Panzer I was a light tank produced in Germany in the 1930s. Its name is short for Panzerkampfwagen I, abbreviated as PzKpfw I. The tank's official German ordnance inventory designation was Sd.Kfz. 101. Design of the Panzer I began in 1932 and mass production began in 1934.</div>
    )
}


export { CompBttnLR, FrontPageTextMain }