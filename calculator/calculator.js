function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('res').value;
    try {
       var num2 = eval(num1.replace('x', '*'));
       document.getElementById('res').value = num2;
    } catch {
       document.getElementById('res').value = 'Error';
    }
 }
function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
}
function Back(){
   var inp = document.getElementById('res');
   inp.value = inp.value.slice(0, -1);
}
