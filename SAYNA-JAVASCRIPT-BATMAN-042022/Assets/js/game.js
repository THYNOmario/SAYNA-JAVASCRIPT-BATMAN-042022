// batman slider
let masqueBatman = document.getElementById('masque-batman');

let i = 0
let image1 = [
    { source: 'url(Assets/Illustrations/Home/Batslider1.png)' },
    { source: 'url(Assets/Illustrations/Home/Batslider2.png)' },
    { source: 'url(Assets/Illustrations/Home/Batslider3.png)' },
    { source: 'url(Assets/Illustrations/Home/Batslider4.png)' },
    { source: 'url(Assets/Illustrations/Home/Batslider5.png)' },
    { source: 'url(Assets/Illustrations/Home/Batslider6.png)' },
    { source: 'url(Assets/Illustrations/Home/Batslider7.png)' },
    { source: 'url(Assets/Illustrations/Home/Batslider8.png)' },
    { source: 'url(Assets/Illustrations/Home/Batslider9.png)' },
]

setInterval(changeImage1, 3000)

function changeImage1() {
    masqueBatman.style.backgroundImage = image1[i].source
    i += 1
    if (i >= image1.length - 1) {
        i = 0
    }
}


// image des batman/mechant avec l'effet survol
let imageBatmanHover = document.querySelectorAll('.image-batman-hover')
let description = document.getElementsByClassName('description')

for (let i = 0; i < imageBatmanHover.length; i++) {
    imageBatmanHover[i].addEventListener('mouseover', () => {
        description[i].classList.add('d-flex')
    })
    imageBatmanHover[i].addEventListener('mouseleave', () => {
        description[i].classList.remove('d-flex')
    })
}


// multimedia
let myImage = document.getElementById('myImage')
let imageMiniatureFilm = document.getElementById('imageMiniatureFilm')
let typeFilm = document.getElementById('typeFilm')
let titreFilm = document.getElementById('titreFilm')
let imdbFilm = document.getElementById('imdbFilm')
let descriptionFilm = document.getElementById('descriptionFilm')

// button next/previous
let fleches = document.querySelectorAll('.fleches')

let section1 = [{
        type: 'ACTION, ADVENTURE',
        titre: "Batman Begins",
        IMDB: "IMDB:8.2",
        descriptionFilm: `Le jeune Bruce Wayne assiste impuissant au meurtre de ses parents. Profond??ment traumatis??, il grandit obnubil?? par un d??sir de vengeance. La Ligue des ombres, une secte de guerriers ninja dirig??e par Ra's al Ghul, se chargera de son entra??nement. De retour chez lui ?? Gotham, avec l'aide de son majordome Alfred Pennyworth, Bruce Wayne se lance alors dans la lutte contre le crime sous le nom de Batman.`,
        image: 'Assets/Illustrations/Home/Bathome9_ba.png',
    },


    {
        type: 'ACTION, ADVENTURE',
        titre: "The Dark Knight",
        IMDB: "IMDB:9",
        descriptionFilm: `Batman aborde une phase d??cisive dans sa guerre contre le crime. Avec l'aide du lieutenant de police Jim Gordon et du nouveau procureur Harvey Dent, il entreprend de d??manteler les derni??res organisations criminelles qui infestent les rues de la ville. L'association s'av??re efficace, mais le trio se heurte bient??t ?? un nouveau g??nie du crime qui r??pand la terreur et le chaos dans Gotham : le Joker.`,
        image: 'Assets/Illustrations/Home/Bathome10_slide_ba.png',
    },


    {
        type: 'ACTION, ADVENTURE',
        titre: "The Dark Knight Rises",
        IMDB: "IMDB:8.4",
        descriptionFilm: `Huit ans ont pass?? depuis que Batman a disparu, passant du statut de h??ros ?? celui de fugitif. Le ?? Chevalier Noir ?? a tout sacrifi?? pour le mieux. Pendant un certain temps, le mensonge a l'effet escompt?? : la criminalit?? de Gotham City est presque ??limin??e par le commissaire James Gordon avec l'unit?? anticrime d'Harvey Dent. Mais l'arriv??e ?? Gotham de Bane, un terroriste masqu??, chamboule l'ordre ??tabli et pousse Bruce ?? sortir de l'exil qu'il s'est impos??`,
        image: 'Assets/Illustrations/Home/Bathome11_slide_ba.png',
    },
]


for (let place = 0; place < fleches.length; place++) {
    let j = 0
    fleches[place].addEventListener('click', () => {
        if (place == 1) {
            j += 1
            if (j >= section1.length) {
                j = 0
            }
            myImage.src = section1[j].image
            imageMiniatureFilm.src = section1[j].image
            typeFilm.textContent = section1[j].type
            titreFilm.textContent = section1[j].titre
            imdbFilm.textContent = section1[j].IMDB
            descriptionFilm.textContent = section1[j].descriptionFilm
            console.log(j + "next");
        } else {
            j -= 1
            if (j <= -1) {
                j = section1.length - 1
            }
            myImage.src = section1[j].image
            imageMiniatureFilm.src = section1[j].image
            typeFilm.textContent = section1[j].type
            titreFilm.textContent = section1[j].titre
            imdbFilm.textContent = section1[j].IMDB
            descriptionFilm.textContent = section1[j].descriptionFilm
            console.log(j + "previous");
        }
    })
}


// formulaire
let caseComplete = []
let confirmer = document.getElementById('confirmer')
let formulaireARemplir = document.getElementById('formulaireARemplir')
let h1 = document.createElement('h1')
h1.textContent = "MESSAGE RECU"
h1.classList.add('text-center')

confirmer.addEventListener('click', () => {
    formulaireARemplir.innerHTML = h1.outerHTML
})


// citation

const dataCitation = [{
        citation: `Soit on meurt en h??ros, soit on vit assez longtemps pour se voir endosser le r??le du m??chant.`,
        auteur: `The Dark Knight : Le Chevalier Noir `,
        autre: `Harvey Dent (2008)`,
    },
    {
        citation: `Le h??ros peut ??tre en chacun, m??me en celui qui fait une chose aussi simple et rassurante que mettre un manteau sur les ??paules d'un gar??on et ainsi lui faire comprendre que le monde ne s'est pas ??croul??.`,
        auteur: `The Dark Knight Rises`,
        autre: `Batman ?? James Gordon (2012)`,
    },
    {
        citation: `Ah ! Tu crois que l'obscurit?? est ton alli??. Tu n'a fait qu'adopter la p??nombre. Moi je suis n?? dedans, j'ai ??t?? fa??onn?? par elle. Je n'ai d??couvert la lumi??re qu'a l'??ge d'homme, et alors, elle m'a juste paru AVEUGLANTE !`,
        auteur: `The Dark Knight Rises `,
        autre: `Bane ?? Batman (2012)`,
    },
    {
        citation: `- Je vous pr??pare la batmoto monsieur ?
        - En pleine journ??e Alfred ? Pas tr??s subtile.
        - La Lamborghini alors... beaucoup plus subtile.
        `,
        auteur: `The Dark Knight: Le Chevalier Noir `,
        autre: `Alfred et Batman (2008)`,
    },
    {
        citation: `Freeze, t'es givr?? !`,
        auteur: `Batman & Robin `,
        autre: `Batman ?? Mr Freeze (1997)`,
    },
    {
        citation: `La peur est un outil. Cette lumi??re qui d??chire le ciel, ce n???est pas qu???un appel ?? l???aide. C???est un avertissement.`,
        auteur: `Batman`,
        autre: `Batman (2022)`,
    },
    {
        citation: `- Pourquoi tombons nous Bruce ?
        - ???
        - Pour mieux apprendre ?? nous relever.
        `,
        auteur: `Batman Begins `,
        autre: `Thomas Wayne ?? Bruce Wayne 8 ans (2005)`,
    },
    {
        citation: `Des hommes tombent du ciel, les dieux crachent la foudre, des innoncents meurent. C???est comme cela que ??a commence, monsieur. De la fureur, de la fi??vre, un sentiment d???impuissance, qui rend les hommes bien??? cruels.`,
        auteur: `Batman v Superman : l???aube de la justice `,
        autre: `Alfred ?? Batman (2016)`,
    },
    {
        citation: `La seule fa??on raisonnable de vivre en ce bas monde, c'est en dehors des r??gles.`,
        auteur: `The Dark Knight : Le Chevalier Noir`,
        autre: `Le Joker ?? Batman (2008)`,
    }
]

let citation = document.getElementById('citation')
let auteur = document.getElementById('auteur')
let autre = document.getElementById('autre')

let citationPlus = 0
setInterval(citationChange, 3000)

function citationChange() {
    citationPlus += 1
    if (citationPlus >= dataCitation.length - 1) {
        citationPlus = 0
    }
    citation.textContent = dataCitation[citationPlus].citation
    auteur.textContent = dataCitation[citationPlus].auteur
    auteur.textContent = dataCitation[citationPlus].autre
}