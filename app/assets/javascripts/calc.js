function calc(){
  a = document.getElementById('a').value;
  b = document.getElementById('b').value;
  c = document.getElementById('c').value;
    var d=0;
    d=Math.pow(b, 2)-4*a*c;
    document.getElementById("result").innerHTML = d;
    var x1=0;
    x1=(-b+Math.sqrt(d))/2*a;
    document.getElementById("x1").innerHTML = x1;
    var x2=0;
    x2=(-b-Math.sqrt(d))/2*a;
    document.getElementById("x2").innerHTML = x2;
     return d;
     return x1;
     return x2;
}
