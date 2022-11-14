function fuerzalun(){
    var ml = parseInt(document.getElementById("ml").value);
    var ex1 = Math.pow(10,22)
    var ml1 = ml*ex1
    var ex2 =  Math.pow(10,28)
    var mt = 5.98*ex2
    var mul = ml1*mt
    var ex3 = Math.pow(10,6)
    var r = 384.4*ex3
    var r1 = Math.pow(r,2)
    var ex4 = Math.pow(10,-11)
    var g = 6.67*ex4
    var ec = g*(mul/r1)
    document.getElementById('funl').innerHTML=ec
}