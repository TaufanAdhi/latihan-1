const button = document.querySelector('button');

button.addEventListener('click', ()=> {

    document.body.style.backgroundColor = 'blue';

})

button.addEventListener('dblclick', ()=> {

    document.body.style.backgroundColor = 'white';

})


//mengacak warna  

const acakBut = document.createElement('button');
const textBut = document.createTextNode('acak warna');
acakBut.appendChild(textBut);
acakBut.setAttribute('type', 'button');
button.after(acakBut);


acakBut.addEventListener('click', function(e){
    let r,g,b;
    let a = true;
    let c = 0;
    while(a && c < 3){       
        let mat = Math.random();
        if( mat <= 0.255){
            if(c === 0){
                r = Math.round(mat * 1000)
                
            }else if(c === 1){
                g = Math.round(mat * 1000)
                
            }else {
                b = Math.round(mat * 1000)
                a = false
            } 
            c++      
        }   
    } 
    
    console.log(r,g,b)

    document.body.style.backgroundColor = `rgb(${r},${g},${b}`;   
});


// mengubah warna dengan range 


const rangeR = document.querySelectorAll('#range');
const par = document.querySelectorAll('#p');

for(var i = 0; i < 3;i++){

    rangeR[i].oninput = function(){

        let r = range[0].value
        let g = range[1].value
        let b = range[2].value

        par[0].innerHTML = r;
        par[1].innerHTML = g;
        par[2].innerHTML = b;
        
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`
    }



}










