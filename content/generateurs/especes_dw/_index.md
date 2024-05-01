+++
title = 'Dungeon World - De quelle espèce est la personne en face de moi ?'
date = 2024-04-30
layout = "about"
draft = false
+++

## Dungeon World - De quelle espèce est la personne en face de moi ?

En fonction du pourcentage de présence de l'espèce (dans mon monde)

{{< rawhtml >}}

<div>
    <button onclick="generateEspece()">Générer une espèce</button>
    <div id='divE'>
    </div>
</div>

<script>
    const divE = document.getElementById('divE');

    const configEspeces1 = [
        // 0
        {"nom": "nain", "percent": 17},
        {"nom": "demi-elfe", "percent": 17},
        {"nom": "halfelin", "percent": 15},
        // 1
        {"nom": "elfe (forêt/mer)", "percent": 9},
        {"nom": "gnome", "percent": 9},
        {"nom": "lutin", "percent": 9},
        // 2
        {"nom": "kobold (chien-lézard)", "percent": 6},
        {"nom": "orc / orque", "percent": 6},
        // 3
        {"nom": "demi-orque", "percent": 5},
        {"nom": "ogre", "percent": 5},
        // 4
        {"nom": "gobelin", "percent": 2},
    ];
    const configEspeces2 = [
        // 0
        {"nom": "léonin (homme-lion)", "percent": 25},
        {"nom": "cervan (homme-cerf)", "percent": 25},
        // 1
        {"nom": "wolfir (homme-loup)", "percent": 7},
        {"nom": "gnoll (homme-hyène)", "percent": 6},
        {"nom": "minotaure (homme-bovin)", "percent": 6},
        {"nom": "felis (homme-chat)", "percent": 6},
        // 2
        {"nom": "homme-lézard", "percent": 3},
        {"nom": "aasimar (homme-ange)", "percent": 3},
        {"nom": "drakéide (homme-dragon)", "percent": 3},
        {"nom": "nezumis (homme-rats)", "percent": 3},
        {"nom": "centaure (homme-cheval)", "percent": 2},
        {"nom": "triton/sirène (homme-poisson)", "percent": 2},
        {"nom": "géant", "percent": 2},
        {"nom": "hobgobelin (gobelin-géant)", "percent": 2},
        // 3
        {"nom": "élémentaire", "percent": 1},
        {"nom": "génasis (homme-élémentaire)", "percent": 1},
        {"nom": "elfe noir", "percent": 1},
        {"nom": "duergar (nain noir)", "percent": 1},
        {"nom": "svirnebelin (gnome noir)", "percent": 1},
    ];
    const configEspeces3 = [
        // 0
        {"nom": "kargyraa (homme-chien)", "percent": 6},
        {"nom": "aarakocra (homme-oiseau)", "percent": 6},
        {"nom": "satyre (homme-caprin)", "percent": 6},
        {"nom": "gallus (homme-gallinacés)", "percent": 6},
        {"nom": "rapace (homme-rapace)", "percent": 6},
        {"nom": "vulpin (homme-renard)", "percent": 6},
        {"nom": "lumia (homme-colombe/pigeon)", "percent": 5},
        {"nom": "corvum (homme-corbeau)", "percent": 5},
        {"nom": "dragon", "percent": 5},
        {"nom": "licorne", "percent": 5},
        {"nom": "tabaxi (homme-félin (autre que chat))", "percent": 5},
        {"nom": "Yuan Ti (homme-serpent)", "percent": 5},
        {"nom": "jerbeen (souris ayant la taille des nains)", "percent": 5},
        {"nom": "mapach (homme-raton-laveur)", "percent": 5},
        {"nom": "brutacien (homme-grenouille)", "percent": 5},
        // 1
        {"nom": "gif (homme-hippotame)", "percent": 2},
        {"nom": "tiefflin (homme-démon)", "percent": 2},
        {"nom": "automate", "percent": 2},
        {"nom": "vampire", "percent": 2},
        {"nom": "goliath (homme-géant)", "percent": 2},
        {"nom": "locathah (homme-poisson)", "percent": 2},
        {"nom": "chitine (homme-araignée)", "percent": 2},
        {"nom": "locatham (homme-poisson-chat)", "percent": 2},
        // 2
        {"nom": "démon", "percent": 1},
        {"nom": "ange", "percent": 1},
        {"nom": "asherati (homme-sable)", "percent": 1},
    ];

    function generateEspece()
    {
        var especes1 = generateTabEspeces(configEspeces1, "1");
        var especes2 = generateTabEspeces(configEspeces2, "2");
        var especes3 = generateTabEspeces(configEspeces3, "3");

        divE.innerHTML += "La personne en face de vous est un/une : ";

        var d1 = Math.floor(Math.random() * 99); // entre 0 et 99 (soit 100)
        var d2 = Math.floor(Math.random() * 99); // entre 0 et 99 (soit 100)

        console.log("("+d1+", "+d2+")")

        if(d1 < 49) {
            divE.innerHTML += "humain <br/>";
        } else if(d1 < 74) {
            divE.innerHTML += especes1[d2]+"<br/>";
        } else if(d1 < 89) {
            divE.innerHTML += especes2[d2]+"<br/>";
        } else {
            divE.innerHTML += especes3[d2]+"<br/>";
        }

        if(document.getElementById('btnReset') === null) {
            divE.insertAdjacentHTML('afterend', '<button id="btnReset" onclick="resetRes()">Remettre à zero les résultats</button>');
        }
    };

    function generateTabEspeces(config, number) {
        var tab = [];
        var r = 0;

        for (var i=0 ; i<config.length ; i++) {
            for (var j=0 ; j<config[i].percent ; j++) {
                tab[r++] = config[i].nom;
            }
        }

        if (tab.length !== 100) {
            alert("j'ai mal compté tab "+number);
        }

        return tab;
    }

    function resetRes() {
        divE.innerHTML = '';
        document.getElementById('btnReset').remove()
    }
</script>

{{< /rawhtml >}}

----

**[Retour à la page des générateurs]({{< ref "/generateurs" >}})**
