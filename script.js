// function fun(x){
//     document.getElementById('calculator').value +=x;
// }
// function calculate(){
//     try{
//         res = eval(document.getElementById('calculator').value);
//     }
//     catch(Exception){
//         alert('Error');
//         document.getElementById('calculator').value = '';
//     }
//     document.getElementById('calculator').value = res;
// }
// function del(){
//     x = document.getElementById('calculator').value;
//     document.getElementById('calculator').value = x.slice(0,x.length-1);

// }

// ------------------------------------------------------------

function fun(x){
    document.getElementById('inputBox').value +=x;
}

function calculate(){
    try{
        res = eval(document.getElementById('inputBox').value);
    }
    catch(Exception){
        alert('Error! Wrong Operation');
        document.getElementById('inputBox').value = '';
    }
    document.getElementById('inputBox').value = res;
}

function del(){
    x = document.getElementById('inputBox').value;
    document.getElementById('inputBox').value = x.slice(0,x.length-1);
}