/*document.getElementById("btn").addEventListener("click", randomPokemon);

async function randomPokemon(){

    let i = Math.round(Math.random()*900);

    const api = `https://pokeapi.co/api/v2/pokemon/${i}`;

    const resolve = await fetch(api);

    const data = await resolve.json();

    console.log(data);

    const img = document.getElementById("image");

    img.src = data.sprites.front_default;
    img.alt = data.name;
    img.classList.add("image");

    document.getElementById("poke-name").innerHTML= data.name;
}
*/

const btns = document.querySelectorAll(".btn");
let pokeNum = 1;

btns.forEach((btn)=>{

    btn.addEventListener("click", async function(e){
        
        const style = e.currentTarget.classList;

        if(style.contains("random")){
            const i = Math.round(Math.random()*900);

            const api = `https://pokeapi.co/api/v2/pokemon/${i}`;

            const resolve = await fetch(api);

            const data = await resolve.json();

            console.log(data);

            const img = document.getElementById("image");

            img.src = data.sprites.front_default;
            img.alt = data.name;
            img.classList.add("image");

            document.getElementById("poke-name").innerHTML= data.name;
            
           
        }else if(style.contains("next")){
           
            
           

            if(pokeNum<900){
                pokeNum++

                const api = `https://pokeapi.co/api/v2/pokemon/${pokeNum}`;

                const resolve = await fetch(api);

                const data = await resolve.json();

                console.log(data);

                const img = document.getElementById("image");

                img.src = data.sprites.front_default;
                img.alt = data.name;
                img.classList.add("image");

                document.getElementById("poke-name").innerHTML= data.name;
            }
           
        }else{
           

            if(1<pokeNum){
                pokeNum--
                const api = `https://pokeapi.co/api/v2/pokemon/${pokeNum}`;

                const resolve = await fetch(api);

                const data = await resolve.json();

                console.log(data);

                const img = document.getElementById("image");

                img.src = data.sprites.front_default;
                img.alt = data.name;
                img.classList.add("image");

                document.getElementById("poke-name").innerHTML= data.name;
            }
        }
    })
})