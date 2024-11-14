
function generate(){
let res = document.getElementById('res')
var x = Math.random()
var x=(x*100000)+1;
let y=(Math.floor(x));
document.getElementById('res').innerHTML = `
 ${y}`
}