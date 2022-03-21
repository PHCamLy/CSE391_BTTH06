const sap_xep=[];
function tao_mang(){
    const new_array = [];
    for(let i=0; i<Math.floor(Math.random()*11)+10; i++){
        new_array[i]=Math.floor(Math.random()*91)+10;
    }
    document.getElementById('cot_2').innerHTML=new_array;
    sap_xep.length=0;
    for(let j=0;j<new_array.length;j++){
        sap_xep[j]=new_array[j];
    }
}
function tang_dan(){
    sap_xep.sort(function(a, b){return a - b});
    document.getElementById('hang_2').innerHTML=sap_xep;
}
function giam_dan(){
    sap_xep.sort(function(a, b){return b - a});
    document.getElementById('hang_2').innerHTML=sap_xep;
}
function them_pt(){
    sap_xep.splice(document.getElementById('vi_tri').value,0,document.getElementById('gia_tri').value);
    document.getElementById('hang_2').innerHTML=sap_xep;
}