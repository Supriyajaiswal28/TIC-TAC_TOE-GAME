let input=document.getElementById('input');

function reset(){
    window.location.reload();
}
function getData(id){
   input.value += id;
}
function deleteElement(id){
    document.getElementById('input').value = input.value.slice(0,-1)
}
function output(id){
    document.getElementById('input').value = eval(input.value)
    // input.value=eval(input);
}