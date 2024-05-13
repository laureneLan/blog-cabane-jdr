+++
title = 'Générateur de potions*'
date = 2023-01-01
type = 'page'
layout = 'singlepage'
draft = false
ShowBreadCrumbs = true
+++

*bizarres et inatendues  
*à manipuler avec précautions

{{< rawhtml >}}

<div>
    <button onclick="generatePotion()">Générer une potion</button>
    <div id='divP'></div>
</div>

<script>
    const divP = document.getElementById('divP');

    const formeFlacon = [
        ['d\'amphore', 'de topette', 'de tube', 'de bulbe', 'cubique', 'cônique'],
        ['de croissant', 'd\'huillier', 'de flasque', 'de grenouille', '???', 'de polyèdre'],
        ['de gourde', 'de buste', 'de fleur', 'd\'icosaèdre', 'de corne', 'de sablier'],
        ['d\'humanoïde', 'de poisson', 'de losange', 'de bocal à confiture', 'de raisin', 'd\'ellipsoïde'],
        ['de chien', 'de hibou', 'de pyramide', 'de pavé (droit)', 'de crâne', 'sphérique'],
        ['de larme', 'de tour', 'de pomme', 'de fraise', 'de fiole', 'd\'outre']
    ];

    const materielFlacon = ['verre', 'crystal', 'métal', 'peau', 'bois'];

    const couleurPotion = [
        ['albâtre', 'ambre', 'abricot/citrouille/carotte', 'sang', 'os', 'menthe'],
        ['jaune canari', 'capucine (variante de rose)', 'terre', 'cerise', 'transparent', 'cuivre'],
        ['gris colombe', 'azur (bleu électrique)', 'émeraude', 'chair', 'fuchsia', 'noir'],
        ['or', 'indigo', 'encré', 'lapis', 'lavande', 'citron vert'],
        ['taupe', 'moutarde', 'olive', 'opale', 'prune', 'sapin'],
        ['multicolore', 'rose', 'argent', 'bleu ciel', 'glace', 'aubergine']
    ];

    const consistancePotion = [
        ['de compote', 'de pâte', 'de sang', 'de caramel', 'crayeuse', 'de fromage blanc'],
        ['cristallisée', 'sirupeuse', 'de blancs en neige', 'de confit d’oignons', 'de gélatine', 'de colle'],
        ['granuleuse', 'de gruau', 'de crème épaisse', 'de miel', 'visqueuse', 'de guimauve'],
        ['de dentifrice', 'de confiture', 'de mayonnaise', 'de milk-shake', 'de mélasse', 'd\'huile'],
        ['de jus d\'orange (pulpe)', 'de bouillie', 'de pudding', 'de chewing-gum', 'boueuse', 'filamenteuse'],
        ['de ragoût', 'de caoutchouc', 'de chocolat (solide puis fondant)', 'de bonbon', 'd\'eau', 'de yaourt']
    ];

    const bizarreriePotion = [
        ['bouillonne', 'bourdonne', 'est réfrigérée', 'est inerte', 'est fraîche', 'crépite'],
        ['fait des vagues', 'est vaporeuse', 'est effervescente', 'est mousseuse', 'est brumeuse', 'est givrée'],
        ['scintille', 'est luisante', 'brille', 'gargouille', 'gazouille', 'est chaude'],
        ['fredonne', 'semble vivante', 'est extrêmement lourde', 'pulse', 'est réfléchissante', 'ondule'],
        ['tourbillonne', 'est séparée', 'frémit', 'est fumante', 'parle (pas forcément dans une langue connue d\'ailleurs ;) )', 'siffle (comme un serpent)'],
        ['grogne', 'flotte', 'vibre', 'est immobile', 'forme un siphon', 'ronronne']
    ];

    const parfumPotion = [
        ['d\'alcool', 'd\'amande', 'd\'ammoniaque', 'de pomme', 'de bébé', 'de pamplemousse'],
        ['de camphre', 'de bois de cèdre', 'de citron', 'd\'herbe coupée', 'de poisson', 'd\'encens'],
        ['de cuir', 'de malt', 'de terre', 'de médicament', 'de menthe', 'de moisissure'],
        ['de noisette', 'd\'océan', 'de vieux fromage', 'de peinture', 'de sapin', 'de pomme de pin'],
        ['de cheval', 'de pluie', 'de rose', 'de putois', 'de lait aigre', 'de fraise'],
        ['de soufre', 'de thym', 'de fleurs', 'd\'urine', 'de vinaigre', 'de chien mouillé']
    ];

    const goutPotion = [
        ['d\'alcool', 'de banane', 'de sang', 'de beurre', 'de bonbon', 'de cerise'],
        ['de piment', 'de chocolat', 'de noix de coco', 'd\'huître', 'de cuivre', 'de fraise'],
        ['de pétrole brut', 'd\'herbe', 'de pomme', 'd\'ail', 'de gingembre', 'de raisin'],
        ['de miel', 'de fromage', 'de citron', 'de réglisse', 'de churros', 'de lait'],
        ['de pierre', 'de boue', 'de moutarde', 'de oignon', 'de poire', 'de cornichon'],
        ['de prune', 'd\'œuf pourri', 'de savon', 'de larmes', 'de vanille', 'de thé']
    ];

    const qualiteSort = [
        // D'AGRESSION
        [
            ['moquant', 'entravant/attachant', 'aveuglant', 'brûlant', 'suffoquant', 'consumant'],
            ['corrodant', 'écrasant', 'assourdissant', 'détonant', 'désintégrant', 'drainant'],
            ['électrisant', 'affligeant', 'gelant', 'harcelant', 'empalant', 'emprisonnant'],
            ['infectant', 'liquéfiant', 'mutant', 'paralysant', 'pétrifiant', 'perçant'],
            ['empoisonnant', 'martelant', 'déchirant', 'flagellant', 'éclatant', 'coupant/tranchant'],
            ['étouffant', 'étranglant', 'piquant/cinglant', 'rompant', 'tordant', 'flétrissant']
        ],
        // DE DÉFENSE
        [
            ['abjurant', 'absorbant', 'armurant', 'bannissant', 'camouflant', 'dissimulant'],
            ['contre-attaquant (physique)', 'guérissant (poison,maladie)', 'amortissant', 'déviant', 'disparaissant', 'désarmant'],
            ['déguisant', 'dissipant', 'enchevêtrant', 'évadant', 'gardant', 'durcissant'],
            ['soignant (pv)', 'ralentissant', 'revigorant (altération état)', 'raccommodant', 'annulant', 'obscurcissant'],
            ['patrouillant', 'préservant', 'réfléchissant', 'régénérant', 'ressuscitant', 'étanchéifiant'],
            ['isolant', 'abritant', 'protégeant', 'stabilisant', 'tournant/transformant', 'contournant/encerclant']
        ],
        // DE MOBILITÉ
        [
            ['accélérant', 'animant', 'attirant', 'enterrant', 'escaladant', 'rampant'],
            ['insidieusement', 'dansant', 'descendant', 'livrant', 'diminuant', 'enveloppant'],
            ['expandant', 'flottant', 'volant', 'galopant', 'sautant', 'suintant'],
            ['phasant', 'pulsant', 'poursuivant', 'réorganisant', 'repoussant', 'retrouvant'],
            ['renversant/inversant', 'roulant', 'tournant sur lui-même', 'explorant', 'tirant', 'glissant'],
            ['serpentant', 'harcelant', 'essaimant (comme un essaim)', 'téléportant', 'transportant', 'tournoyant']
        ],
        // AUTRE
        [
            ['addictant', 'adhérant', 'ancien', 'noir', 'éclosant', 'bruyant'],
            ['cultivant', 'éblouissant', 'divisant', 'dupliquant', 'évoluant', 'éteignant'],
            ['fusionnant', 'fantomatique', 'saisissant', 'envoûtant', 'gonflant', 'inversant'],
            ['revigorant', 'invisible', 'invulnérable', 'lubrifiant', 'multipliant', 'engourdissant'],
            ['prismatique', 'changeant', 'frissonnant', 'chantant', 'naissant', 'soudain'],
            ['convoquant', 'petit', 'transmutant', 'débloquant', 'vaste', 'murmurant']
        ],
        // DE MENTAL
        [
            ['vengeant', 'éveillant', 'déconcertant', 'apaisant', 'charmant', 'convainquant'],
            ['commandant', 'communiquant', 'séduisant', 'trompant', 'déchiffrant', 'démoralisant'],
            ['dégoûtant', 'dérangeant', 'rêvant', 'enhardissant', 'encodant', 'enrageant'],
            ['prévoyant', 'horrifiant', 'hystérisant', 'intimidant', 'intoxiquant', 'exaspérant'],
            ['hypnotisant', 'lisant l\'esprit', 'moquant', 'pacifiant', 'persuadant', 'révélant'],
            ['révoltant', 'émouvant (tristesse)', 'prédisant l\'avenir', 'donnant à réfléchir', 'terrifiant', 'lassant']
        ],
        // DE PERSONNALITÉ
        [
            ['embrouillé', 'prudent', 'condamnant', 'courtois', 'lâche', 'rusé'],
            ['curieux', 'sournois', 'déloyal', 'envieux', 'érudit', 'volage'],
            ['détestable', 'hautain', 'aidant', 'honorable', 'inexorable', 'irascible'],
            ['jovial', 'léthargique', 'loyal', 'magistral', 'malveillant', 'maniaque'],
            ['mélancolique', 'menaçant', 'mystique', 'obséquieux', 'obstiné', 'sauvage'],
            ['serein', 'splendide', 'subtile', 'vil', 'vorace', 'misérable']
        ]
    ];

    const elementSort = [
        // SOLIDE
        [
            ['ambre', 'écorce', 'os', 'pain', 'soufre', 'bonbon'],
            ['chitine', 'argile', 'cristal', 'chair', 'fleur', 'fruit'],
            ['champignon', 'verre', 'glace', 'fer', 'ivoire', 'feuille'],
            ['mousse', 'obsidienne', 'papier', 'plante', 'racine', 'caoutchouc'],
            ['rouille', 'sel', 'sable', 'soie', 'peau', 'terre'],
            ['pierre', 'sucre', 'épine', 'tissus', 'cire', 'bois']
        ],
        // GAZEUX
        [
            ['cendre', 'blizzard', 'souffle', 'nuage', 'poussière', 'brouillard'],
            ['brume', 'parfum', 'émanation', 'grêle', 'nuageux', 'cyclone'],
            ['encens', 'miasme', 'bruine', 'peste', 'pollen', 'poudre'],
            ['pluie', 'tempête de sable', 'pollution', 'fumée', 'neige', 'suie'],
            ['étincelle', 'épice', 'spore', 'vapeur (eau)', 'puanteur', 'tempête'],
            ['orage', 'tornade', 'vapeur (autre)', 'virevoltant (western)', 'murmure', 'vent']
        ],
        // ABSTRAIT
        [
            ['automne', 'chaos', 'froid', 'ténèbres', 'mort', 'distorsion'],
            ['rêve', 'évolution', 'vie', 'chaleur', 'fantôme', 'gravité'],
            ['croissance', 'harmonie', 'feu', 'lumière', 'foudre', 'mémoire'],
            ['esprit', 'mutation', 'probabilité', 'radiation', 'pourriture', 'ombre'],
            ['âme', 'son', 'printemps', 'étoile', 'stase', 'été'],
            ['soleil', 'lune', 'vitesse', 'vide', 'distorsion', 'hiver']
        ],
        // LIQUIDE
        [
            ['acide', 'bière', 'sang', 'saumure', 'beurre', 'cidre'],
            ['mousse', 'colle', 'miel', 'encre', 'gelée', 'lave'],
            ['confiture', 'mélasse', 'lait', 'vase', 'gruau', 'huile'],
            ['peinture', 'mucosité', 'poison', 'pudding', 'lave', 'mercure'],
            ['résine', 'salive', 'sève', 'boue', 'soupe', 'sirop'],
            ['goudron', 'thé', 'larmes', 'vinaigre', 'eau', 'vin']
        ],
        // ANIMAL
        [
            ['fourmi', 'chauve-souris', 'abeille', 'scarabée', 'papillon', 'mille-pattes'],
            ['cochon d’inde', 'cheval', 'crabe', 'corbeau', 'luciole', 'chien'],
            ['mouche', 'grenouille', 'vache', 'aigle', 'coccinelle', 'sangsue'],
            ['lézard', 'sauterelle', 'asticot', 'renard', 'taupe', 'chat'],
            ['souris/rat', 'perruche', 'oie', 'scorpion', 'serpent', 'cerf'],
            ['mouton', 'escargot', 'moineau', 'araignée', 'écureuil', 'poisson']
        ],
        // OBJET
        [
            ['flèche', 'cloche', 'branche', 'bouton', 'bougie', 'parchemin'],
            ['chaîne', 'griffe', 'pièce de monnaie', 'œuf', 'œil', 'plume'],
            ['cœur', 'chaise', 'crochet', 'clé', 'couteau', 'poumon'],
            ['enclume', 'clou', 'aiguille', 'statue(tte)', 'livre', 'crâne'],
            ['chiffon', 'corde', 'lingot', 'graine', 'terre', 'coquille'],
            ['épée', 'marteau', 'couronne', 'collier', 'dent', 'filet']
        ],
    ];

    const formeSort = [
        // STRUCTURE
        [
            ['autel', 'lit', 'brasero', 'pont', 'charrette', 'panier'],
            ['catapulte', 'char romain', 'maison', 'berceau', 'estrade', '???'],
            ['forge', 'forteresse', 'fontaine', 'jardin', 'porte', 'gibet/potence'],
            ['bibliothèque', 'monolithe', 'four', 'chemin', 'lac', 'cage'],
            ['pupitre', 'navire', 'sanctuaire/temple', 'cercle de pierre', 'trône', 'tour'],
            ['piège', 'arbre', 'cactus', 'tunnel', 'mur', 'lustre']
        ],
        // DYNAMIQUE
        [
            ['arc', 'phare', 'faisceau/rayon', 'explosion', 'fleurir', 'verrou'],
            ['bulle', 'rafale', 'cascade', 'bobine', 'danse', 'éruption'],
            ['pluie', 'charge', 'flamme', 'chute', 'fleuve', 'source'],
            ['regard', 'main', 'lasso', 'boucle', 'bouche', 'pouls'],
            ['rayonnement', 'ondulation', 'encensoir', 'chanson', 'pulvérisation', 'tempête'],
            ['festin', 'tentacule', 'torrent', 'doigt', 'vague', 'mot']
        ],
        // CRÉATURE
        [
            ['tolosses', 'golem', 'scarabée incendiaire', 'cube gélatineux', 'fantôme', 'gobelin'],
            ['vengearbre', 'janus (démon)', 'banshee', 'dragon', 'feu follet', 'hibours'],
            ['lémure', 'chimère', 'basilic', 'élémentaire', 'gargouille', 'hydre'],
            ['kraken', 'minotaure', 'momie', 'pégase', 'squelette', 'goule/zombie'],
            ['loup-garou', 'centaure', 'naga (reptilien)', 'pudding noir', 'tertre errant', 'dryade'],
            ['liane chasseresse', 'molosse infernal', 'ogre', 'razorback', 'gnoll', 'satyre']
        ],
        // OBJET
        [
            ['armure', 'flèche', 'hache', 'bannière', 'cloche', 'ceinture'],
            ['livre', 'bottes', 'robe', 'chaudron', 'casque', 'calice'],
            ['cape', 'collier', 'couronne', 'tambour', 'gants', 'marteau'],
            ['barre', 'corne', 'clé', 'couteau', 'lanterne', 'luth'],
            ['masque', 'miroir', 'filet', 'assiette', 'plume', 'anneau'],
            ['entraves', 'bouclier', 'lance', 'flacon', 'épée', 'roue']
        ],
        // STATIQUE
        [
            ['aura', 'barrière', 'goutte', 'cercle', 'nuage', 'cône'],
            ['cratère', 'cristal', 'cube', 'cylindre', 'disque', 'fissure'],
            ['plan', 'auréole', 'hélice', 'demi-sphère', 'hexagone', 'monticule'],
            ['ovale', 'pentagone', 'fosse/puits', 'silhouette', 'flaque', 'pyramide'],
            ['rectangle', 'contrat', 'sigil', 'sphère', 'carré', 'étoile'],
            ['triangle', 'tube', 'quartier de lune', 'bande', 'zigzag', 'zone']
        ],
        // ANIMALE
        [
            ['loup', 'tatou', 'blaireau', 'ours', 'castor', 'sanglier'],
            ['taureau', 'lynx', 'caméléon/varan', 'crocodile', 'cerf', 'aigle'],
            ['otarie/morse', 'renard', 'chèvre', 'antilope', 'condor/vautour', 'hippopotame'],
            ['cheval/âne', 'méduse', 'pieuvre', 'porc-épic', 'hibou', 'paon'],
            ['kangourou', 'poisson/murène', 'lapin', 'requin/dauphin/orque', 'fennec', 'axolot'],
            ['tigre/lion', 'autruche', 'chiens de prairie', 'pingouin', 'marmotte', 'baleine']
        ]
    ];

    function generatePotion() {
        divP.innerHTML += "<br/>Le flacon, fait de "+randomizer(materielFlacon)+", a une forme "+randomizer(formeFlacon)+".<br/>";
        divP.innerHTML += "La potion qu'il contient est de couleur "+randomizer(couleurPotion)+". Bizarrement, elle "+randomizer(bizarreriePotion)+".<br/>";
        divP.innerHTML += "Lorsque vous l'ouvrez, une odeur "+randomizer(parfumPotion)+" s'en échappe.<br/>";
        divP.innerHTML += "Dans votre bouche, elle a une consistance "+randomizer(consistancePotion)+" et un goût "+randomizer(goutPotion)+".<br/>";

        divP.innerHTML += "Le sort contenu dans la potion : ";

        switch (Math.floor(Math.random() * 4)) {
            case 0: // [Élément] [Qualité]
            divP.innerHTML += "<< "+randomizer(elementSort)+" "+randomizer(qualiteSort)+" >><br/>";
            break;
            case 1: // [Forme] [Qualité]
            divP.innerHTML += "<< "+randomizer(formeSort)+" "+randomizer(qualiteSort)+" >><br/>";
            break;
            case 2: // [Forme] de [Élément]
            divP.innerHTML += "<< "+randomizer(formeSort)+" de "+randomizer(elementSort)+" >><br/>";
            break;
            case 3:// [Forme] de [Élément] [Qualité]
            divP.innerHTML += "<< "+randomizer(formeSort)+" de "+randomizer(elementSort)+" "+randomizer(qualiteSort)+" >><br/>";
            break;
        }

        if(document.getElementById('btnReset') === null) {
            divP.insertAdjacentHTML('afterend', '<br/><button id="btnReset" onclick="resetRes()">Remettre à zero les résultats</button>');
        }
    };

    function randomizer(tab) {
        let res = tab[Math.floor(Math.random() * tab.length)];

        if(Array.isArray(res)){
            return randomizer(res);
        }

        return res;
    }

    function resetRes() {
        divP.innerHTML = '';
        document.getElementById('btnReset').remove()
    }
</script>

{{< /rawhtml >}}
