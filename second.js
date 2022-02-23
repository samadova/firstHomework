function myFunction(vozrast) {
    if(vozrast<=6) {
        return console.log("mladenec")
    }else if(vozrast<=12) {
        return console.log("rebenok")
    }else if(vozrast<=18) {
        return console.log("podrostok")
    }else if(vozrast<=30) {
        return console.log("molodoy")
    }else if(vozrast<=50) {
        return console.log("vzrosliy")
    }else if(vozrast<=75) {
        return console.log("starik")
    }else if(vozrast<=100) {
        return console.log("dolgojitel")
    }
}
myFunction(9)