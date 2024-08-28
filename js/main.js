const otroPkm = document.getElementById("otroPkm")
const imggues = document.getElementById("img-gues")
const inputAdv = document.getElementById("input-adv")
const btnAdv = document.getElementById("btnAdv")
const form = document.getElementById("form-elem")
const colect = document.getElementById("colection-sec")
const free = document.getElementById("freePkm")
const equipo = document.getElementById("equipo")
const team = document.getElementById("team")
let pkm = Math.floor(Math.random() * 151)

//manejando local storage
let key = "numbres"
const array = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : []
let arrayCol = JSON.parse(localStorage.getItem(key))

if (arrayCol !== null) {
    arrayCol.forEach(elem => {
        colect.innerHTML += `<img src="${pokemones[elem - 1].img}" alt="${pokemones[elem - 1].name}">`
        colect.classList.add("hov")
    })
} else {
    arrayCol = []
}

//colocando la imagen del pokemon con un estilo que hace que se vea obscuro
imggues.innerHTML += `<img src="${pokemones[pkm].hideimg}" class="styl-imgg" alt="${pokemones[pkm].name}">`
console.log("Pista: " + pokemones[pkm].name)


if(arrayCol.length != 0){
    equipo.innerHTML += `<div class="form-elem">
    <h2>Crea tu equipo pokemon</h2>
<p>Da clic a las imagenes de tus poquemones adivinados</p>
</div>`
}


colect.addEventListener("click", async (e) =>{
    let api = "https://pokeapi.co/api/v2/pokemon/" + (e.target.alt.toLowerCase())
    if(e.target.tagName == 'IMG' && team.childElementCount < 11){
        team.innerHTML += `<div id="imgTeam" class="imgTeam"><img src="${e.target.src}" class="" alt="${e.target.alt}"></div>`
       try{
        await fetch(api).then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud')
            }
            return response.json()
        })
        .then(datos => {
             team.innerHTML += `<div id="teamdata">
             <p><strong>Nombre:</strong> ${e.target.alt}</p>
             <p><strong>Puntos de salud base:</strong> ${datos.stats[0].base_stat}</p>
             <p><strong>Ataque base:</strong> ${datos.stats[1].base_stat}</p>
             <p><strong>Defensa base:</strong> ${datos.stats[2].base_stat}</p>
             </div>`
        })
       }catch(error){
            console.error("Hubo un problema con la solicitud", error)
       }
    }
})

btnAdv.addEventListener("click", () => {
    if (pokemones[pkm].name.toLowerCase() == inputAdv.value.toLowerCase()) {
        Swal.fire({
            backdrop: `url("https://media.tenor.com/yQMy_kCmmVIAAAAj/rizyox.gif")`,
            position: "top",
            iconHtml: "<img src='https://i.gifer.com/origin/06/068c8f36ce4e0216bcc86ccc2e2401a0_w200.gif'>",
            title: "Adivinaste el pokémon!",
            showConfirmButton: false,
            timer: 2000
          });
        imggues.innerHTML = `<img src="${pokemones[pkm].img}" alt="${pokemones[pkm].name}">`
        imggues.classList.add("adivinado")
        imggues.classList.remove("wrong")
        array.push(pokemones[pkm].number)
        localStorage.setItem(key, JSON.stringify(array))
    } else {
        imggues.classList.add("wrong")
    }
})

otroPkm.addEventListener("click", () => {
    location.reload()
})

free.addEventListener("click", () => {
    console.log("pokemones liberados")
    localStorage.clear()
    location.reload()
})