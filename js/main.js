const pokemones = [
    {
        name: "Bulbasaur",
        img: "../assets001. Bulbasaur.jpg",
        number: 1
    },
    {
        name: "Ivysaur",
        img: "../assets/002. Ivysaur.jpg",
        number: 2
    },
    {
        name: "Venusaur",
        img: "../assets/003. Venusaur.jpg",
        number: 3
    },
    {
        name: "Charmander",
        img: "../assets/004. Charmander.jpg",
        number: 4
    },
    {
        name: "Charmeleon",
        img: "../assets/005. Charmeleon.jpg",
        number: 5
    },
    {
        name: "Charizard",
        img: "../assets/006. Charizard.jpg",
        number: 6
    },
    {
        name: "Squirtle",
        img: "../assets/007. Squirtle.jpg",
        number: 7
    },
    {
        name: "Wartortle",
        img: "../assets/008. Wartortle.jpg",
        number: 8
    },
    {
        name: "Blastoise",
        img: "../assets/009. Blastoise.jpg",
        number: 9
    },
    {
        name: "Caterpie",
        img: "../assets/010. Caterpie.jpg",
        number: 10
    },
    {
        name: "Metapod",
        img: "../assets/011. Metapod.jpg",
        number: 11
    },
    {
        name: "Butterfree",
        img: "../assets/012. Butterfree.jpg",
        number: 12
    },
    {
        name: "Weedle",
        img: "../assets/013. Weedle.jpg",
        number: 13
    },
    {
        name: "Kakuna",
        img: "../assets/014. Kakuna.jpg",
        number: 14
    },
    {
        name: "Beedrill",
        img: "../assets/015. Beedrill.jpg",
        number: 15
    },
    {
        name: "Pidgey",
        img: "../assets/016. Pidgey.jpg",
        number: 16
    },
    {
        name: "Pidgeotto",
        img: "../assets/017. Pidgeotto.jpg",
        number: 17
    },
    {
        name: "Pidgeot",
        img: "../assets/018. Pidgeot.jpg",
        number: 18
    },
    {
        name: "Pidgeot",
        img: "../assets/018. Pidgeot.jpg",
        number: 18
    },
    {
        name: "Rattata",
        img: "../assets/019. Rattata.jpg",
        number: 19
    },
    {
        name: "Raticate",
        img: "../assets/020. Raticate.jpg",
        number: 20
    },
    {
        name: "Spearow",
        img: "../assets/021. Spearow.jpg",
        number: 21
    },
    {
        name: "Fearow",
        img: "../assets/022. Fearow.jpg",
        number: 22
    },
    {
        name: "Ekans",
        img: "../assets/023. Ekans.jpg",
        number: 23
    },
    {
        name: "Abrok",
        img: "../assets/024. Abrok.jpg",
        number: 24
    },
    {
        name: "Pikachu",
        img: "../assets/025. Pikachi.jpg",
        number: 25
    },
    {
        name: "Raichu",
        img: "../assets/026. Raichu.jpg",
        number: 26
    },
    {
        name: "Sandshrew",
        img: "../assets/027. Sandshrew.jpg",
        number: 27
    },
    {
        name: "Sandshlash",
        img: "../assets/028. Sandshlash.jpg",
        number: 28
    },
    {
        name: "Nidoran",
        img: "../assets/029. Nidoran.jpg",
        number: 29
    },
    {
        name: "Nidorina",
        img: "../assets/030. Nidorina.jpg",
        number: 30
    },
    {
        name: "Nidoqueen",
        img: "../assets/031. Nidoqueen.jpg",
        number: 31
    },
    {
        name: "Nidoran",
        img: "../assets/032. Nidoran.jpg",
        number: 32
    },
    {
        name: "Nidorino",
        img: "../assets/033. Nidorino.jpg",
        number: 33
    },
    {
        name: "Nidoking",
        img: "../assets/034. Nidoking.jpg",
        number: 34
    },
    {
        name: "Clefairy",
        img: "../assets/035. Clefairy.jpg",
        number: 35
    },
    {
        name: "Clefable",
        img: "../assets/036. Clefable.jpg",
        number: 36
    },
    {
        name: "Vulpix",
        img: "../assets/037. Vulpix.jpg",
        number: 37
    },
    {
        name: "Ninetails",
        img: "../assets/038. Ninetails.jpg",
        number: 38
    },
    {
        name: "Jigglypuff",
        img: "../assets/039. Jigglypuff.jpg",
        number: 39
    },
    {
        name: "Wigglytpuff",
        img: "../assets/040. Wigglytpuff.jpg",
        number: 40
    },
    {
        name: "Zubat",
        img: "../assets/041. Zubat.jpg",
        number: 41
    },
    {
        name: "Golbat",
        img: "../assets/042. Golbat.jpg",
        number: 42
    },
    {
        name: "Oddish",
        img: "../assets/043. Oddish.jpg",
        number: 43
    },
    {
        name: "Gloom",
        img: "../assets/044. Gloom.jpg",
        number: 44
    },
    {
        name: "Vileplume",
        img: "../assets/045. Vileplume.jpg",
        number: 45
    },
    {
        name: "Paras",
        img: "../assets/046. Paras.jpg",
        number: 46
    },
    {
        name: "Parasect",
        img: "../assets/047. Parasect.jpg",
        number: 47
    },
    {
        name: "Venonat",
        img: "../assets/048. Venonat.jpg",
        number: 48
    },
    {
        name: "Venomoth",
        img: "../assets/049. Venomoth.jpg",
        number: 49
    },
    {
        name: "Digglett",
        img: "../assets/050. Digglett.jpg",
        number: 50
    },
    {
        name: "Dugtrio",
        img: "../assets/051. Dugtrio.jpg",
        number: 51
    },
    {
        name: "Meowth",
        img: "../assets/052. Meowth.jpg",
        number: 52
    },
    {
        name: "Persian",
        img: "../assets/053. Persian.jpg",
        number: 53
    },
    {
        name: "Psyduck",
        img: "../assets/054. Psyduck.jpg",
        number: 54
    },
    {
        name: "Psyduck",
        img: "../assets/055. Golduck.jpg",
        number: 55
    },
    {
        name: "Mankey",
        img: "../assets/056. Mankey.jpg",
        number: 56
    },
    {
        name: "Primeape",
        img: "../assets/057. Primeape.jpg",
        number: 57
    },
    {
        name: "Growlithe",
        img: "../assets/058. Growlithe.jpg",
        number: 58
    },
    {
        name: "Arcanine",
        img: "../assets/059. Arcanine.jpg",
        number: 59
    },
    {
        name: "Poliwag",
        img: "../assets/060. Poliwag.jpg",
        number: 60
    },
    {
        name: "Poliwhirl",
        img: "../assets/061. Poliwhirl.jpg",
        number: 61
    },
    {
        name: "Poliwrath",
        img: "../assets/062. Poliwrath.jpg",
        number: 62
    },
    {
        name: "Abra",
        img: "../assets/063. Abra.jpg",
        number: 63
    },
    {
        name: "Kadabra",
        img: "../assets/064. Kadabra.jpg",
        number: 64
    },
    {
        name: "Alakazam",
        img: "../assets/065. Alakazam.jpg",
        number: 65
    },
    {
        name: "Machop",
        img: "../assets/066. Machop.jpg",
        number: 66
    },
    {
        name: "Machoke",
        img: "../assets/067. Machoke.jpg",
        number: 67
    },
    {
        name: "Machamp",
        img: "../assets/068. Machamp.jpg",
        number: 68
    },
    {
        name: "Bellsprout",
        img: "../assets/069. Bellsprout.jpg",
        number: 69
    },
    {
        name: "Weepinbell",
        img: "../assets/070. Weepinbell.jpg",
        number: 70
    },
    {
        name: "Victreebel",
        img: "../assets/071. Victreebel.jpg",
        number: 71
    },
    {
        name: "Tentacool",
        img: "../assets/072. Tentacool.jpg",
        number: 72
    },
    {
        name: "Tentacruel",
        img: "../assets/073. Tentacruel.jpg",
        number: 73
    },
    {
        name: "Geodude",
        img: "../assets/074. Geodude.jpg",
        number: 74
    },
    {
        name: "Graveler",
        img: "../assets/075. Graveler.jpg",
        number: 75
    },
    {
        name: "Golem",
        img: "../assets/076. Golem.jpg",
        number: 76
    },
    {
        name: "Ponyta",
        img: "../assets/077. Ponyta.jpg",
        number: 77
    },
    {
        name: "Rapidash",
        img: "../assets/078. Rapidash.jpg",
        number: 78
    },
    {
        name: "Slowpoke",
        img: "../assets/079. Slowpoke.jpg",
        number: 79
    },
    {
        name: "Slowbro",
        img: "../assets/080. Slowbro.jpg",
        number: 80
    },
    {
        name: "Magnemite",
        img: "../assets/081. Magnemite.jpg",
        number: 81
    },
    {
        name: "Magneton",
        img: "../assets/082. Magneton.jpg",
        number: 82
    },
    {
        name: "Farfetch'd",
        img: "../assets/083. Farfetch'd.jpg",
        number: 83
    },
    {
        name: "Doduo",
        img: "../assets/084. Doduo.jpg",
        number: 84
    },
    {
        name: "Dodrio",
        img: "../assets/085. Dodrio.jpg",
        number: 85
    },
    {
        name: "Seel",
        img: "../assets/086. Seel.jpg",
        number: 86
    },
    {
        name: "Dewgong",
        img: "../assets/087. Dewgong.jpg",
        number: 87
    },
    {
        name: "Grimmer",
        img: "../assets/088. Grimmer.jpg",
        number: 88
    },
    {
        name: "Muk",
        img: "../assets/089. Muk.jpg",
        number: 89
    },
    {
        name: "Shellder",
        img: "../assets/090. Shelder.jpg",
        number: 90
    },
    {
        name: "Cloyster",
        img: "../assets/091. Cloyster.jpg",
        number: 91
    },
    {
        name: "Gastly",
        img: "../assets/092. Gastly.jpg",
        number: 92
    },
    {
        name: "Haunter",
        img: "../assets/093. Haunter.jpg",
        number: 93
    },
    {
        name: "Gengar",
        img: "../assets/094. Gengar.jpg",
        number: 94
    },
    {
        name: "Onix",
        img: "../assets/095. Onix.jpg",
        number: 95
    },
    {
        name: "Drowzee",
        img: "../assets/096. Drowzee.jpg",
        number: 96
    },
    {
        name: "Hypno",
        img: "../assets/097. Hypno.jpg",
        number: 97
    },
    {
        name: "Krabby",
        img: "../assets/098. Krabby.jpg",
        number: 98
    },
    {
        name: "Kingler",
        img: "../assets/099. Kingler.jpg",
        number: 99
    },
    {
        name: "Voltorb",
        img: "../assets/100. Voltorb.jpg",
        number: 100
    },
    {
        name: "Electrode",
        img: "../assets/101. Electrode.jpg",
        number: 101
    },
    {
        name: "Exeggcute",
        img: "../assets/102. Exeggcute.jpg",
        number: 102
    },
    {
        name: "Exeggutor",
        img: "../assets/103. Exeggutor.jpg",
        number: 103
    },
]

