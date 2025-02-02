export default {
    name: "Projects",
    data() {
        return {
            // Liste des projets
            projects: [
                {
                    title: "OcoinGourmand",
                    languages: ["HTML/CSS", "JavaScript", "PHP"],
                    type: "Stage",
                    description:
                        "Durant mon stage de deuxième année de BTS, j'ai créé un site vitrine pour la pâtisserie O'coin Gourmand à Bellgarde. \n" +
                        "J'ai donc créé le design du site en rapport avec l'identité de l'entreprise, les clients peuvent réserver un produit directement sur le site, \n " +
                        "Les employés peuvent se connecter sur le site grâce à des identifiants pour avoir accès à la gestion des commandes.",
                    url:"https://github.com/qldwin/OcoinGourmand",
                },
                {
                    title: "OneManga",
                    languages: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
                    type: "Cours",
                    description:
                        "Nous devions nous mettre en équipe pour créer un site vitrine avec le thème de notre choix, dans notre cas nous avions pris les mangas. \n" +
                        "Nous étions donc deux sur ce projet et nous nous sommes partagés les tâches, chaque semaine nous devions remplir un cahier des charges en ajoutant de nouvelles fonctionnalités. \n" +
                        "Le projet contient donc une gestion utilisateurs et une gestion des paniers.",
                    url:"https://github.com/Bts-Sio-CCI/OneAnime",
                },
                {
                    title: "Portfolio",
                    languages: ["HTML/CSS", "JavaScript", "VueJS/ViteJS"],
                    type: "Personnel",
                    description:
                        "La version 1 de mon portfolio a d'abord été un projet dant le cadre de ma formation, puis ce portfolio qui est la version 2 est devenu un projet personnel. \n" +
                        "J'ai refait mon portfolio pour repartir sur de bonnes bases et ainsi mettre les compétences que j'ai apprises à l'épreuve. \n" +
                        "En utilisant le framework VueJS grâce à ViteJS que j'ai appris à utiliser sur le tas, j'ai pu m'améliorer rapidement et efficacement.",
                    url:"https://github.com/qldwin/Portfolio",
                },
                {
                    title: "Burgbad Projet",
                    languages: ["Visual Basic", "SQLServer"],
                    type: "Stage",
                    description:
                        "Comme projet pour mon stage de première année de BTS, j'ai développé un logiciel de gestion de devis pour l'entreprise Burgbad France. \n" +
                        "Le devis se fait automatiquement grâce à des formulaires que l'employé remplit au préalable directement sur le logiciel, en sélectionnant directement le client, les produits et la quantité.",
                },
                {
                    title: "Plugins Minecraft",
                    languages: ["Java"],
                    type: "Personnel",
                    description:
                        "Sur le jeu vidéo Minecraft, il est possible que la communauté crée des extensions (plugins) pour le jeu afin de modifier le comportement du gameplay et des joueurs. \n" +
                        "Je me suis donc amusé à créer des plugins pour certains serveurs Minecraft, dont la gestion des joueurs et la gestion de mini-jeux, \n" +
                        "Pour augmenter l'expérience de jeu et ainsi divertir les joueurs au sein du serveur.",
                },
                // Ajoutez d'autres projets ici
            ],
        };
    },
};
