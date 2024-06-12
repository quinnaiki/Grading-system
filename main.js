// function total(){
//     var one = Number(document.getElementById("first").value)
//     var two = Number(document.getElementById("second").value)
//     var three = (one + two)
//     document.getElementById("total").value = three
// }

function calc() {
    var one = Number(document.getElementById("math").value)
    var two = Number(document.getElementById("pes").value)
    var three = Number(document.getElementById("pet").value)
    var four = one + two + three
    document.getElementById("total").value = four
}
function calcs() {
    var one = Number(document.getElementById("English").value)
    var two = Number(document.getElementById("cat").value)
    var three = Number(document.getElementById("dog").value)
    var four = one + two + three
    document.getElementById("tot").value = four
}
function calcz() {
    var one = Number(document.getElementById("Physics").value)
    var two = Number(document.getElementById("motion").value)
    var three = Number(document.getElementById("tension").value)
    var four = one + two + three
    document.getElementById("tote").value = four
}
function calcd() {
    var one = Number(document.getElementById("Chemistry").value)
    var two = Number(document.getElementById("organic").value)
    var three = Number(document.getElementById("water").value)
    var four = one + two + three
    document.getElementById("tota").value = four
}
function calcb() {
    var one = Number(document.getElementById("Biology").value)
    var two = Number(document.getElementById("ani").value)
    var three = Number(document.getElementById("pla").value)
    var four = one + two + three
    document.getElementById("bio").value = four
}
function average(){
    var one = Number(document.getElementById("total").value);
    var two  = Number(document.getElementById("tot").value);
    var three = Number(document.getElementById('tote').value);
    var four = Number(document.getElementById('tota').value);
    var five = Number(document.getElementById('bio').value);
    const originalNumber = 100;
    const percentage = ( one + two + three + four+ five);
    const result = (percentage/500)*originalNumber;
    const resultAsString =result + '%';
    document.getElementById('avera').value = resultAsString
}
if(100 < resultAsString > 80){
    document.getElementByIde(message)
}
if(79 <resultAsString > 70){
    prompt('Very Good B2')
}
if(69 < resultAsString > 60){
    prompt('Good B3')
}
if(59 < resultAsString > 50){
    prompt('Credit C4')
}
if(49 < resultAsString > 40){
    prompt('Pass D7')
}
if(39 < resultAsString > 0){
    promt('Fail F9')
}
