let a=[]
function tao_mang(){
    for(let i=0;i<20;i++){
        x = (Math.random()*100)+10;
        a[i]=x;
    }
}

function sap_tang(){
    if(x='sap xep tang dan'){
        a.sort()
    }else{
        a.sort(callbackFn(a,b))
    }
}
function sap_giam(){
   let b =a.sap_tang();
   b.reverse();
}

document.getElementById('arrayx').textContent = a.tao_mang();

