function fuerza(){
    var ms = parseInt(document.getElementById("ms").value);
    var ex1 = Math.pow(10,30)
    var ms1 = ms*ex1
    var ex2 =  Math.pow(10,28)
    var mt = 5.98*ex2
    var mul = ms1*mt
    var ex3 = Math.pow(10,9)
    var r = 149.6*ex3
    var r1 = Math.pow(r,2)
    var ex4 = Math.pow(10,-11)
    var g = 6.67*ex4
    var ec = g*(mul/r1)
    document.getElementById('fu').innerHTML=ec
}
