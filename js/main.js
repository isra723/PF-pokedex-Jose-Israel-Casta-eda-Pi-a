const pokemones = [
    {
        name: "Bulbasaur",
        img: "../assets/001. Bulbasaur.jpg",
        hideimg: "../assets/001.png",
        number: 1
    },
    {
        name: "Ivysaur",
        img: "../assets/002. Ivysaur.jpg",
        hideimg: "../assets/002.png",
        number: 2
    },
    {
        name: "Venusaur",
        img: "../assets/003. Venusaur.jpg",
        hideimg: "../assets/003.png",
        number: 3
    },
    {
        name: "Charmander",
        img: "../assets/004. Charmander.jpg",
        hideimg: "../assets/004.png",
        number: 4
    },
    {
        name: "Charmeleon",
        img: "../assets/005. Charmeleon.jpg",
        hideimg: "../assets/005.png",
        number: 5
    },
    {
        name: "Charizard",
        img: "../assets/006. Charizard.jpg",
        hideimg: "../assets/006.png",
        number: 6
    },
    {
        name: "Squirtle",
        img: "../assets/007. Squirtle.jpg",
        hideimg: "../assets/007.png",
        number: 7
    },
    {
        name: "Wartortle",
        img: "../assets/008. Wartortle.jpg",
        hideimg: "../assets/008.png",
        number: 8
    },
    {
        name: "Blastoise",
        img: "../assets/009. Blastoise.jpg",
        hideimg: "../assets/009.png",
        number: 9
    },
    {
        name: "Caterpie",
        img: "../assets/010. Caterpie.jpg",
        hideimg: "../assets/010.png",
        number: 10
    },
    {
        name: "Metapod",
        img: "../assets/011. Metapod.jpg",
        hideimg: "../assets/011.png",
        number: 11
    },
    {
        name: "Butterfree",
        img: "../assets/012. Butterfree.jpg",
        hideimg: "../assets/012.png",
        number: 12
    },
    {
        name: "Weedle",
        img: "../assets/013. Weedle.jpg",
        hideimg: "../assets/013.png",
        number: 13
    },
    {
        name: "Kakuna",
        img: "../assets/014. Kakuna.jpg",
        hideimg: "../assets/014.png",
        number: 14
    },
    {
        name: "Beedrill",
        img: "../assets/015. Beedrill.jpg",
        hideimg: "../assets/015.png",
        number: 15
    },
    {
        name: "Pidgey",
        img: "../assets/016. Pidgey.jpg",
        hideimg: "../assets/016.png",
        number: 16
    },
    {
        name: "Pidgeotto",
        img: "../assets/017. Pidgeotto.jpg",
        hideimg: "../assets/017.png",
        number: 17
    },
    {
        name: "Pidgeot",
        img: "../assets/018. Pidgeot.jpg",
        hideimg: "../assets/018.png",
        number: 18
    },
    {
        name: "Rattata",
        img: "../assets/019. Rattata.jpg",
        hideimg: "../assets/019.png",
        number: 19
    },
    {
        name: "Raticate",
        img: "../assets/020. Raticate.jpg",
        hideimg: "../assets/020.png",
        number: 20
    },
    {
        name: "Spearow",
        img: "../assets/021. Spearow.jpg",
        hideimg: "../assets/021.png",
        number: 21
    },
    {
        name: "Fearow",
        img: "../assets/022. Fearow.jpg",
        hideimg: "../assets/022.png",
        number: 22
    },
    {
        name: "Ekans",
        img: "../assets/023. Ekans.jpg",
        hideimg: "../assets/023.png",
        number: 23
    },
    {
        name: "Abrok",
        img: "../assets/024. Abrok.jpg",
        hideimg: "../assets/024.png",
        number: 24
    },
    {
        name: "Pikachu",
        img: "../assets/025. Pikachi.jpg",
        hideimg: "../assets/025.png",
        number: 25
    },
    {
        name: "Raichu",
        img: "../assets/026. Raichu.jpg",
        hideimg: "../assets/026.png",
        number: 26
    },
    {
        name: "Sandshrew",
        img: "../assets/027. Sandshrew.jpg",
        hideimg: "../assets/027.png",
        number: 27
    },
    {
        name: "Sandshlash",
        img: "../assets/028. Sandshlash.jpg",
        hideimg: "../assets/028.png",
        number: 28
    },
    {
        name: "Nidoran",
        img: "../assets/029. Nidoran.jpg",
        hideimg: "../assets/029.png",
        number: 29
    },
    {
        name: "Nidorina",
        img: "../assets/030. Nidorina.jpg",
        hideimg: "../assets/030.png",
        number: 30
    },
    {
        name: "Nidoqueen",
        img: "../assets/031. Nidoqueen.jpg",
        hideimg: "../assets/031.png",
        number: 31
    },
    {
        name: "Nidoran",
        img: "../assets/032. Nidoran.jpg",
        hideimg: "../assets/032.png",
        number: 32
    },
    {
        name: "Nidorino",
        img: "../assets/033. Nidorino.jpg",
        hideimg: "../assets/033.png",
        number: 33
    },
    {
        name: "Nidoking",
        img: "../assets/034. Nidoking.jpg",
        hideimg: "../assets/034.png",
        number: 34
    },
    {
        name: "Clefairy",
        img: "../assets/035. Clefairy.jpg",
        hideimg: "../assets/035.png",
        number: 35
    },
    {
        name: "Clefable",
        img: "../assets/036. Clefable.jpg",
        hideimg: "../assets/036.png",
        number: 36
    },
    {
        name: "Vulpix",
        img: "../assets/037. Vulpix.jpg",
        hideimg: "../assets/037.png",
        number: 37
    },
    {
        name: "Ninetails",
        img: "../assets/038. Ninetails.jpg",
        hideimg: "../assets/038.png",
        number: 38
    },
    {
        name: "Jigglypuff",
        img: "../assets/039. Jigglypuff.jpg",
        hideimg: "../assets/039.png",
        number: 39
    },
    {
        name: "Wigglytpuff",
        img: "../assets/040. Wigglytpuff.jpg",
        hideimg: "../assets/040.png",
        number: 40
    },
    {
        name: "Zubat",
        img: "../assets/041. Zubat.jpg",
        hideimg: "../assets/041.png",
        number: 41
    },
    {
        name: "Golbat",
        img: "../assets/042. Golbat.jpg",
        hideimg: "../assets/042.png",
        number: 42
    },
    {
        name: "Oddish",
        img: "../assets/043. Oddish.jpg",
        hideimg: "../assets/043.png",
        number: 43
    },
    {
        name: "Gloom",
        img: "../assets/044. Gloom.jpg",
        hideimg: "../assets/044.png",
        number: 44
    },
    {
        name: "Vileplume",
        img: "../assets/045. Vileplume.jpg",
        hideimg: "../assets/045.png",
        number: 45
    },
    {
        name: "Paras",
        img: "../assets/046. Paras.jpg",
        hideimg: "../assets/046.png",
        number: 46
    },
    {
        name: "Parasect",
        img: "../assets/047. Parasect.jpg",
        hideimg: "../assets/047.png",
        number: 47
    },
    {
        name: "Venonat",
        img: "../assets/048. Venonat.jpg",
        hideimg: "../assets/048.png",
        number: 48
    },
    {
        name: "Venomoth",
        img: "../assets/049. Venomoth.jpg",
        hideimg: "../assets/049.png",
        number: 49
    },
    {
        name: "Digglett",
        img: "../assets/050. Digglett.jpg",
        hideimg: "../assets/050.png",
        number: 50
    },
    {
        name: "Dugtrio",
        img: "../assets/051. Dugtrio.jpg",
        hideimg: "../assets/051.png",
        number: 51
    },
    {
        name: "Meowth",
        img: "../assets/052. Meowth.jpg",
        hideimg: "../assets/052.png",
        number: 52
    },
    {
        name: "Persian",
        img: "../assets/053. Persian.jpg",
        hideimg: "../assets/053.png",
        number: 53
    },
    {
        name: "Psyduck",
        img: "../assets/054. Psyduck.jpg",
        hideimg: "../assets/054.png",
        number: 54
    },
    {
        name: "Psyduck",
        img: "../assets/055. Golduck.jpg",
        hideimg: "../assets/055.png",
        number: 55
    },
    {
        name: "Mankey",
        img: "../assets/056. Mankey.jpg",
        hideimg: "../assets/056.png",
        number: 56
    },
    {
        name: "Primeape",
        img: "../assets/057. Primeape.jpg",
        hideimg: "../assets/057.png",
        number: 57
    },
    {
        name: "Growlithe",
        img: "../assets/058. Growlithe.jpg",
        hideimg: "../assets/058.png",
        number: 58
    },
    {
        name: "Arcanine",
        img: "../assets/059. Arcanine.jpg",
        hideimg: "../assets/059.png",
        number: 59
    },
    {
        name: "Poliwag",
        img: "../assets/060. Poliwag.jpg",
        hideimg: "../assets/060.png",
        number: 60
    },
    {
        name: "Poliwhirl",
        img: "../assets/061. Poliwhirl.jpg",
        hideimg: "../assets/061.png",
        number: 61
    },
    {
        name: "Poliwrath",
        img: "../assets/062. Poliwrath.jpg",
        hideimg: "../assets/062.png",
        number: 62
    },
    {
        name: "Abra",
        img: "../assets/063. Abra.jpg",
        hideimg: "../assets/063.png",
        number: 63
    },
    {
        name: "Kadabra",
        img: "../assets/064. Kadabra.jpg",
        hideimg: "../assets/064.png",
        number: 64
    },
    {
        name: "Alakazam",
        img: "../assets/065. Alakazam.jpg",
        hideimg: "../assets/065.png",
        number: 65
    },
    {
        name: "Machop",
        img: "../assets/066. Machop.jpg",
        hideimg: "../assets/066.png",
        number: 66
    },
    {
        name: "Machoke",
        img: "../assets/067. Machoke.jpg",
        hideimg: "../assets/067.png",
        number: 67
    },
    {
        name: "Machamp",
        img: "../assets/068. Machamp.jpg",
        hideimg: "../assets/068.png",
        number: 68
    },
    {
        name: "Bellsprout",
        img: "../assets/069. Bellsprout.jpg",
        hideimg: "../assets/069.png",
        number: 69
    },
    {
        name: "Weepinbell",
        img: "../assets/070. Weepinbell.jpg",
        hideimg: "../assets/070.png",
        number: 70
    },
    {
        name: "Victreebel",
        img: "../assets/071. Victreebel.jpg",
        hideimg: "../assets/071.png",
        number: 71
    },
    {
        name: "Tentacool",
        img: "../assets/072. Tentacool.jpg",
        hideimg: "../assets/072.png",
        number: 72
    },
    {
        name: "Tentacruel",
        img: "../assets/073. Tentacruel.jpg",
        hideimg: "../assets/073.png",
        number: 73
    },
    {
        name: "Geodude",
        img: "../assets/074. Geodude.jpg",
        hideimg: "../assets/074.png",
        number: 74
    },
    {
        name: "Graveler",
        img: "../assets/075. Graveler.jpg",
        hideimg: "../assets/075.png",
        number: 75
    },
    {
        name: "Golem",
        img: "../assets/076. Golem.jpg",
        hideimg: "../assets/076.png",
        number: 76
    },
    {
        name: "Ponyta",
        img: "../assets/077. Ponyta.jpg",
        hideimg: "../assets/077.png",
        number: 77
    },
    {
        name: "Rapidash",
        img: "../assets/078. Rapidash.jpg",
        hideimg: "../assets/078.png",
        number: 78
    },
    {
        name: "Slowpoke",
        img: "../assets/079. Slowpoke.jpg",
        hideimg: "../assets/079.png",
        number: 79
    },
    {
        name: "Slowbro",
        img: "../assets/080. Slowbro.jpg",
        hideimg: "../assets/080.png",
        number: 80
    },
    {
        name: "Magnemite",
        img: "../assets/081. Magnemite.jpg",
        hideimg: "../assets/081.png",
        number: 81
    },
    {
        name: "Magneton",
        img: "../assets/082. Magneton.jpg",
        hideimg: "../assets/082.png",
        number: 82
    },
    {
        name: "Farfetch'd",
        img: "../assets/083. Farfetch'd.jpg",
        hideimg: "../assets/083.png",
        number: 83
    },
    {
        name: "Doduo",
        img: "../assets/084. Doduo.jpg",
        hideimg: "../assets/084.png",
        number: 84
    },
    {
        name: "Dodrio",
        img: "../assets/085. Dodrio.jpg",
        hideimg: "../assets/085.png",
        number: 85
    },
    {
        name: "Seel",
        img: "../assets/086. Seel.jpg",
        hideimg: "../assets/086.png",
        number: 86
    },
    {
        name: "Dewgong",
        img: "../assets/087. Dewgong.jpg",
        hideimg: "../assets/087.png",
        number: 87
    },
    {
        name: "Grimmer",
        img: "../assets/088. Grimmer.jpg",
        hideimg: "../assets/088.png",
        number: 88
    },
    {
        name: "Muk",
        img: "../assets/089. Muk.jpg",
        hideimg: "../assets/089.png",
        number: 89
    },
    {
        name: "Shellder",
        img: "../assets/090. Shellder.jpg",
        hideimg: "../assets/090.png",
        number: 90
    },
    {
        name: "Cloyster",
        img: "../assets/091. Cloyster.jpg",
        hideimg: "../assets/091.png",
        number: 91
    },
    {
        name: "Gastly",
        img: "../assets/092. Gastly.jpg",
        hideimg: "../assets/092.png",
        number: 92
    },
    {
        name: "Haunter",
        img: "../assets/093. Haunter.jpg",
        hideimg: "../assets/093.png",
        number: 93
    },
    {
        name: "Gengar",
        img: "../assets/094. Gengar.jpg",
        hideimg: "../assets/094.png",
        number: 94
    },
    {
        name: "Onix",
        img: "../assets/095. Onix.jpg",
        hideimg: "../assets/095.png",
        number: 95
    },
    {
        name: "Drowzee",
        img: "../assets/096. Drowzee.jpg",
        hideimg: "../assets/096.png",
        number: 96
    },
    {
        name: "Hypno",
        img: "../assets/097. Hypno.jpg",
        hideimg: "../assets/097.png",
        number: 97
    },
    {
        name: "Krabby",
        img: "../assets/098. Krabby.jpg",
        hideimg: "../assets/098.png",
        number: 98
    },
    {
        name: "Kingler",
        img: "../assets/099. Kingler.jpg",
        hideimg: "../assets/099.png",
        number: 99
    },
    {
        name: "Voltorb",
        img: "../assets/100. Voltorb.jpg",
        hideimg: "../assets/100.png",
        number: 100
    },
    {
        name: "Electrode",
        img: "../assets/101. Electrode.jpg",
        hideimg: "../assets/101.png",
        number: 101
    },
    {
        name: "Exeggcute",
        img: "../assets/102. Exeggcute.jpg",
        hideimg: "../assets/103.png",
        number: 102
    },
    {
        name: "Exeggutor",
        img: "../assets/103. Exeggutor.jpg",
        hideimg: "../assets/103.png",
        number: 103
    },
    {
        name: "Cubone",
        img: "../assets/104. Cubone.jpg",
        hideimg: "../assets/104.png",
        number: 104
    },
    {
        name: "Marowak",
        img: "../assets/105. Marowak.jpg",
        hideimg: "../assets/105.png",
        number: 105
    },
    {
        name: "Hitmonlee",
        img: "../assets/106. Hitmonlee.jpg",
        hideimg: "../assets/106.png",
        number: 106
    },
    {
        name: "Hitmonchan",
        img: "../assets/107. Hitmonchan.jpg",
        hideimg: "../assets/107.png",
        number: 107
    },
    {
        name: "Lickitung",
        img: "../assets/108. Lickitung.jpg",
        hideimg: "../assets/108.png",
        number: 108
    },
    {
        name: "Koffing",
        img: "../assets/109. Koffing.jpg",
        hideimg: "../assets/109.png",
        number: 109
    },
    {
        name: "Weezing",
        img: "../assets/110. Weezing.jpg",
        hideimg: "../assets/110.png",
        number: 110
    },
    {
        name: "Rhyhorn",
        img: "../assets/111. Rhyhorn.jpg",
        hideimg: "../assets/111.png",
        number: 111
    },
    {
        name: "Rhydon",
        img: "../assets/112. Rhydon.jpg",
        hideimg: "../assets/112.png",
        number: 112
    },
    {
        name: "Chansey",
        img: "../assets/113. Chansey.jpg",
        hideimg: "../assets/113.png",
        number: 113
    },
    {
        name: "Tanglea",
        img: "../assets/114. Tanglea.jpg",
        hideimg: "../assets/114.png",
        number: 114
    },
    {
        name: "Kangaskhan",
        img: "../assets/115. Kangaskhan.jpg",
        hideimg: "../assets/115.png",
        number: 115
    },
    {
        name: "Horsea",
        img: "../assets/116. Horsea.jpg",
        hideimg: "../assets/116.png",
        number: 116
    },
    {
        name: "Seadra",
        img: "../assets/117. Seadra.jpg",
        hideimg: "../assets/117.png",
        number: 117
    },
    {
        name: "Goldeen",
        img: "../assets/118. Goldeen.jpg",
        hideimg: "../assets/118.png",
        number: 118
    },
    {
        name: "Seaking",
        img: "../assets/119. Seaking.jpg",
        hideimg: "../assets/119.png",
        number: 119
    },
    {
        name: "Staryu",
        img: "../assets/120. Staryu.jpg",
        hideimg: "../assets/120.png",
        number: 120
    },
    {
        name: "Starmie",
        img: "../assets/121. Starmie.jpg",
        hideimg: "../assets/121.png",
        number: 121
    },
    {
        name: "Mr. Mime",
        img: "../assets/122. Mr. Mime.jpg",
        hideimg: "../assets/122.png",
        number: 122
    },
    {
        name: "Scyther",
        img: "../assets/123. Scyther.jpg",
        hideimg: "../assets/123.png",
        number: 123
    },
    {
        name: "Jynx",
        img: "../assets/124. Jynx.jpg",
        hideimg: "../assets/124.png",
        number: 124
    },
    {
        name: "Electabuzz",
        img: "../assets/125. Electabuzz.jpg",
        hideimg: "../assets/125.png",
        number: 125
    },
    {
        name: "Magmar",
        img: "../assets/126. Magmar.jpg",
        hideimg: "../assets/126.png",
        number: 126
    },
    {
        name: "Pinsir",
        img: "../assets/127. Pinsir.jpg",
        hideimg: "../assets/127.png",
        number: 127
    },
    {
        name: "Tauros",
        img: "../assets/128. Tauros.jpg",
        hideimg: "../assets/128.png",
        number: 128
    },
    {
        name: "Magikarp",
        img: "../assets/129. Magikarp.jpg",
        hideimg: "../assets/129.png",
        number: 129
    },
    {
        name: "Gyarados",
        img: "../assets/130. Gyarados.jpg",
        hideimg: "../assets/130.png",
        number: 130
    },
    {
        name: "Lapras",
        img: "../assets/131. Lapras.jpg",
        hideimg: "../assets/131.png",
        number: 131
    },
    {
        name: "Ditto",
        img: "../assets/132. Ditto.jpg",
        hideimg: "../assets/132.png",
        number: 132
    },
    {
        name: "Eevee",
        img: "../assets/133. Eevee.jpg",
        hideimg: "../assets/133.png",
        number: 133
    },
    {
        name: "Vaporeon",
        img: "../assets/134. Vaporeon.jpg",
        hideimg: "../assets/134.png",
        number: 134
    },
    {
        name: "Jolteon",
        img: "../assets/135. Jolteon.jpg",
        hideimg: "../assets/135.png",
        number: 135
    },
    {
        name: "Flareon",
        img: "../assets/136. Flareon.jpg",
        hideimg: "../assets/136.png",
        number: 136
    },
    {
        name: "Porygon",
        img: "../assets/137. Porygon.jpg",
        hideimg: "../assets/137.png",
        number: 137
    },
    {
        name: "Omanyte",
        img: "../assets/138. Omanyte.jpg",
        hideimg: "../assets/138.png",
        number: 138
    },
    {
        name: "Omastar",
        img: "../assets/139. Omastar.jpg",
        hideimg: "../assets/139.png",
        number: 139
    },
    {
        name: "Kabuto",
        img: "../assets/140. Kabuto.jpg",
        hideimg: "../assets/140.png",
        number: 140
    },
    {
        name: "Kabutops",
        img: "../assets/141. Kabutops.jpg",
        hideimg: "../assets/141.png",
        number: 141
    },
    {
        name: "Aerodactyl",
        img: "../assets/142. Aerodactyl.jpg",
        hideimg: "../assets/142.png",
        number: 142
    },
    {
        name: "Snorlax",
        img: "../assets/143. Snorlax.jpg",
        hideimg: "../assets/143.png",
        number: 143
    },
    {
        name: "Articuno",
        img: "../assets/144. Articuno.jpg",
        hideimg: "../assets/144.png",
        number: 144
    },
    {
        name: "Zapdos",
        img: "../assets/145. Zapdos.jpg",
        hideimg: "../assets/145.png",
        number: 145
    },
    {
        name: "Moltres",
        img: "../assets/146. Moltres.jpg",
        hideimg: "../assets/146.png",
        number: 146
    },
    {
        name: "Dratini",
        img: "../assets/147. Dratini.jpg",
        hideimg: "../assets/147.png",
        number: 147
    },
    {
        name: "Dragonair",
        img: "../assets/148. Dragonair.jpg",
        hideimg: "../assets/148.png",
        number: 148
    },
    {
        name: "Dragonite",
        img: "../assets/149. Dragonite.jpg",
        hideimg: "../assets/149.png",
        number: 149
    },
    {
        name: "Mewtwo",
        img: "../assets/150. Mewtwo.jpg",
        hideimg: "../assets/150.png",
        number: 150
    },
    {
        name: "Mew",
        img: "../assets/151. Mew.jpg",
        hideimg: "../assets/151.png",
        number: 151
    }
]

let pkm = Math.floor(Math.random() * 150);
const otroPkm = document.getElementById("otroPkm")
const imggues = document.getElementById("img-gues")
const inputAdv = document.getElementById("input-adv")
const btnAdv = document.getElementById("btnAdv")
const form = document.getElementById("form-elem")
const colect = document.getElementById("colection-sec")
let key = "numbres"
let newnumber = pokemones[pkm].number
const storedArray = localStorage.getItem(key)
const array = storedArray ? JSON.parse(storedArray) : []


imggues.innerHTML += `<img src="${pokemones[pkm].hideimg}" class="styl-imgg" alt="${pokemones[pkm].name}">`
console.log("Pista: " + pokemones[pkm].name)

let arrayCol = JSON.parse(localStorage.getItem(key))

arrayCol.forEach(elem => {
    colect.innerHTML += `<img src="${pokemones[elem - 1].img}">`
    colect.classList.add("hov")
})

btnAdv.addEventListener("click", () => {
    if (pokemones[pkm].name.toLowerCase() == inputAdv.value.toLowerCase()) {
        imggues.innerHTML = `<img src="${pokemones[pkm].img}" alt="${pokemones[pkm].name}">`
        imggues.classList.add("adivinado")
        imggues.classList.remove("wrong")
        array.push(newnumber)
        localStorage.setItem(key, JSON.stringify(array))
    } else {
        imggues.classList.add("wrong")
    }
})

otroPkm.addEventListener("click", () => {
    location.reload()
})


//colect.innerHTML += localStorage.getItem(key)
//console.log(localStorage.getItem(key))