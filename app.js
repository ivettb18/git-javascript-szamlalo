//Alapérték felvétele
let count = 0;

//Gombo és egyéb elemek eltárolása változókba
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
//const decrease = document.getElementById("decrease");
//const reset = document.getElementById("reset");
//const increase = document.getElementById("increase");

//Ciklussal végiglépkedek az eltárolt gombokon amelyeken rajta van a btn class
btns.forEach((btn)=>{

    //Az össze gomb közül amelyeket bejárok a ciklussal, azt kattintom meg, amelyik az aktuális ciklusfutáskor jön a sorba(első ciklusfutás -> 0. indexű gomb (decrease) stb...)
    btn.addEventListener("click", (e)=>{

        //Az éppen aktuálisan megkattintott gombon milyen class/classok vannak
        const style = e.currentTarget.classList;

        //Az aktuálisan megkattintott gombok classai közül tartalmazza a decrease classt
        if(style.contains("decrease")){

            //Csökkentjük az alapértéket
            count--;
        // ... "increase classt"    
        } else if(style.contains("increase")){

            //Növeljük az alapértéket
            count++;
        //Ha ezek közül egyik sem, akkor marad a "reset" class
        }else{

            //Visszaállítjuk
            count = 0;
        }


        //Színek hozzáadása spanhez
        if (count > 0){
            value.style.color = "green";
        } else if (count < 0){
            value.style.color = "red";
        } else{
            value.style.color = "black";
        }


        value.textContent = count;

    })


})














/*Egyszerű, lusta módszer
increase.addEventListener("click", ()=>{

    //Növelem az alapértékem 1-el
    count++;
    //Megnézem, hogy az alapértékem nagyobb-e mint 0
    if(count > 0){

        //Ha nagyobb, hozzáadok egy zöld keretet
        value.style.color = "green";

    }

    //Majd az alapértékem aktuális értékét beállítom a value id-val ellátott spannek
    value.textContent = count;

})

decrease.addEventListener("click", ()=>{

    //Csökkentem az alapértékem 1-el
    count--;
    //Megnézem, hogy az alapértékem nagyobb-e mint 0
    if(count < 0){

        //Ha kisebb, hozzáadok egy piros keretet
        value.style.color = "red";
        
    }

    //Majd az alapértékem aktuális értékét beállítom a value id-val ellátott spannek
    value.textContent = count;

})

reset.addEventListener("click", ()=>{

    //Az alapértéket visszaállítjuk nullára
    count = 0;
    
    //Visszaállítom az alap betűszínt
    value.style.color = "black";

    //Majd az alapártékem aktuális értékét beállítom a value id-val ellátott spannek
    value.textContent = count;

})*/