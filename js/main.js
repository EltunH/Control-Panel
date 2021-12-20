

function loginSistem(){
    var changdeDiv = document.getElementById("chg")
    var mainDiv = document.getElementById("main")

    var w = document.getElementById("w").value
    var h = document.getElementById("h").value
    var bgColor = document.getElementById("bgColor").value
    var bodyColor = document.getElementById("body").value
    var br = document.getElementById("br").value
    var bgPhoto = document.getElementById("bgPhoto").value
    var bgpSize = document.getElementById("bgpSize").value
    var margin = document.getElementById("margin").value
    var sizeWitdh = document.getElementById("scWidth").value
    var sizeHeight = document.getElementById("scHeight").value
    var sizeMargin = document.getElementById("scMargin").value
    var sizeBradius = document.getElementById("scBradius").value
    var sizePositionTop = document.getElementById("scPositionTop").value
    var sizePositionLeft = document.getElementById("scPositionLeft").value
    var positionTop = document.getElementById("positionTop").value
    var positionLeft = document.getElementById("positionLeft").value

    mainDiv.style.background = bodyColor

    changdeDiv.style.width = w + sizeWitdh
    changdeDiv.style.height = h + sizeHeight
    changdeDiv.style.background = bgColor
    changdeDiv.style.borderRadius = br + sizeBradius
    changdeDiv.style.backgroundImage = "url("+bgPhoto+" )"
    changdeDiv.style.backgroundSize = bgpSize 
    changdeDiv.style.marginLeft = margin + sizeMargin
    changdeDiv.style.top = positionTop + sizePositionTop
    changdeDiv.style.left = positionLeft + sizePositionLeft
    
    

}