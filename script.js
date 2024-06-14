let nbBonneReponse = 0;
let questionActuelle = 0;
var booleenChoix = true;

let departements = [
	{ dep : "Ain"                                        , code : "01" , region : "Auvergne-Rhône-Alpes"      },
	{ dep : "Aisne"                                      , code : "02" , region : "Hauts-de-France"           },
	{ dep : "Allier"                                     , code : "03" , region : "Auvergne-Rhône-Alpes"      },
	{ dep : "Alpes-de-Haute-Provence"                    , code : "04" , region : "Provence-Alpes-Côte d'Azur"},
	{ dep : "Hautes-Alpes"                               , code : "05" , region : "Provence-Alpes-Côte d'Azur"},
	{ dep : "Alpes-Maritimes"                            , code : "06" , region : "Provence-Alpes-Côte d'Azur"},
	{ dep : "Ardèche"                                    , code : "07" , region : "Auvergne-Rhône-Alpes"      },
	{ dep : "Ardennes"                                   , code : "08" , region : "Grand Est"                 },
	{ dep : "Ariège"                                     , code : "09" , region : "Occitanie"                 },
	{ dep : "Aube"                                       , code : "10" , region : "Grand Est"                 },
	{ dep : "Aude"                                       , code : "11" , region : "Occitanie"                 },
	{ dep : "Aveyron"                                    , code : "12" , region : "Occitanie"                 },
	{ dep : "Bouches-du-Rhône"                           , code : "13" , region : "Provence-Alpes-Côte d'Azur"},
	{ dep : "Calvados"                                   , code : "14" , region : "Normandie"                 },
	{ dep : "Cantal"                                     , code : "15" , region : "Auvergne-Rhône-Alpes"      },
	{ dep : "Charente"                                   , code : "16" , region : "Nouvelle-Aquitaine"        },
	{ dep : "Charente-Maritime"                          , code : "17" , region : "Nouvelle-Aquitaine"        },
	{ dep : "Cher"                                       , code : "18" , region : "Centre-Val de Loire"       },
	{ dep : "Corrèze"                                    , code : "19" , region : "Nouvelle-Aquitaine"        },
	{ dep : "Corse-du-Sud"                               , code : "2A" , region : "Corse"                     },
	{ dep : "Haute-Corse"                                , code : "2B" , region : "Corse"                     },
	{ dep : "Côte-d'Or"                                  , code : "21" , region : "Bourgogne-Franche-Comté"   },
	{ dep : "Côtes-d'Armor"                              , code : "22" , region : "Bretagne"                  },
	{ dep : "Creuse"                                     , code : "23" , region : "Nouvelle-Aquitaine"        },
	{ dep : "Dordogne"                                   , code : "24" , region : "Nouvelle-Aquitaine"        },
	{ dep : "Doubs"                                      , code : "25" , region : "Bourgogne-Franche-Comté"   },
	{ dep : "Drôme"                                      , code : "26" , region : "Auvergne-Rhône-Alpes"      },
	{ dep : "Eure"                                       , code : "27" , region : "Normandie"                 },
	{ dep : "Eure-et-Loir"                               , code : "28" , region : "Centre-Val de Loire"       },
	{ dep : "Finistère"                                  , code : "29" , region : "Bretagne"                  },
	{ dep : "Gard"                                       , code : "30" , region : "Occitanie"                 },
	{ dep : "Haute-Garonne"                              , code : "31" , region : "Occitanie"                 },
	{ dep : "Gers"                                       , code : "32" , region : "Occitanie"                 },
	{ dep : "Gironde"                                    , code : "33" , region : "Nouvelle-Aquitaine"        },
	{ dep : "Hérault"                                    , code : "34" , region : "Occitanie"                 },
	{ dep : "Ille-et-Vilaine"                            , code : "35" , region : "Bretagne"                  },
	{ dep : "Indre"                                      , code : "36" , region : "Centre-Val de Loire"       },
	{ dep : "Indre-et-Loire"                             , code : "37" , region : "Centre-Val de Loire"       },
	{ dep : "Isère"                                      , code : "38" , region : "Auvergne-Rhône-Alpes"      },
	{ dep : "Jura"                                       , code : "39" , region : "Bourgogne-Franche-Comté"   },
	{ dep : "Landes"                                     , code : "40" , region : "Nouvelle-Aquitaine"        },
	{ dep : "Loir-et-Cher"                               , code : "41" , region : "Centre-Val de Loire"       },
	{ dep : "Loire"                                      , code : "42" , region : "Auvergne-Rhône-Alpes"      },
	{ dep : "Haute-Loire"                                , code : "43" , region : "Auvergne-Rhône-Alpes"      },
	{ dep : "Loire-Atlantique"                           , code : "44" , region : "Pays de la Loire"          },
	{ dep : "Loiret"                                     , code : "45" , region : "Centre-Val de Loire"       },
	{ dep : "Lot"                                        , code : "46" , region : "Occitanie"                 },
	{ dep : "Lot-et-Garonne"                             , code : "47" , region : "Nouvelle-Aquitaine"        },
	{ dep : "Lozère"                                     , code : "48" , region : "Occitanie"                 },
	{ dep : "Maine-et-Loire"                             , code : "49" , region : "Pays de la Loire"          },
	{ dep : "Manche"                                     , code : "50" , region : "Normandie"                 },
	{ dep : "Marne"                                      , code : "51" , region : "Grand Est"                 },
	{ dep : "Haute-Marne"                                , code : "52" , region : "Grand Est"                 },
	{ dep : "Mayenne"                                    , code : "53" , region : "Pays de la Loire"          },
	{ dep : "Meurthe-et-Moselle"                         , code : "54" , region : "Grand Est"                 },
	{ dep : "Meuse"                                      , code : "55" , region : "Grand Est"                 },
	{ dep : "Morbihan"                                   , code : "56" , region : "Bretagne"                  },
	{ dep : "Moselle"                                    , code : "57" , region : "Grand Est"                 },
	{ dep : "Nièvre"                                     , code : "58" , region : "Bourgogne-Franche-Comté"   },
	{ dep : "Nord"                                       , code : "59" , region : "Hauts-de-France"           },
	{ dep : "Oise"                                       , code : "60" , region : "Hauts-de-France"           },
	{ dep : "Orne"                                       , code : "61" , region : "Normandie"                 },
	{ dep : "Pas-de-Calais"                              , code : "62" , region : "Hauts-de-France"           },
	{ dep : "Puy-de-Dôme"                                , code : "63" , region : "Auvergne-Rhône-Alpes"      },
	{ dep : "Pyrénées-Atlantiques"                       , code : "64" , region : "Nouvelle-Aquitaine"        },
	{ dep : "Hautes-Pyrénées"                            , code : "65" , region : "Occitanie"                 },
	{ dep : "Pyrénées-Orientales"                        , code : "66" , region : "Occitanie"                 },
	{ dep : "Bas-Rhin"                                   , code : "67" , region : "Grand Est"                 },
	{ dep : "Haut-Rhin"                                  , code : "68" , region : "Grand Est"                 },
	{ dep : "Rhône"                                      , code : "69" , region : "Auvergne-Rhône-Alpes"      },
	{ dep : "Haute-Saône"                                , code : "70" , region : "Bourgogne-Franche-Comté"   },
	{ dep : "Saône-et-Loire"                             , code : "71" , region : "Bourgogne-Franche-Comté"   },
	{ dep : "Sarthe"                                     , code : "72" , region : "Pays de la Loire"          },
	{ dep : "Savoie"                                     , code : "73" , region : "Auvergne-Rhône-Alpes"      },
	{ dep : "Haute-Savoie"                               , code : "74" , region : "Auvergne-Rhône-Alpes"      },
	{ dep : "Paris"                                      , code : "75" , region : "Île-de-France"             },
	{ dep : "Seine-Maritime"                             , code : "76" , region : "Normandie"                 },
	{ dep : "Seine-et-Marne"                             , code : "77" , region : "Île-de-France"             },
	{ dep : "Yvelines"                                   , code : "78" , region : "Île-de-France"             },
	{ dep : "Deux-Sèvres"                                , code : "79" , region : "Nouvelle-Aquitaine"        },
	{ dep : "Somme"                                      , code : "80" , region : "Hauts-de-France"           },
	{ dep : "Tarn"                                       , code : "81" , region : "Occitanie"                 },
	{ dep : "Tarn-et-Garonne"                            , code : "82" , region : "Occitanie"                 },
	{ dep : "Var"                                        , code : "83" , region : "Provence-Alpes-Côte d'Azur"},
	{ dep : "Vaucluse"                                   , code : "84" , region : "Provence-Alpes-Côte d'Azur"},
	{ dep : "Vendée"                                     , code : "85" , region : "Pays de la Loire"          },
	{ dep : "Vienne"                                     , code : "86" , region : "Nouvelle-Aquitaine"        },
	{ dep : "Haute-Vienne"                               , code : "87" , region : "Nouvelle-Aquitaine"        },
	{ dep : "Vosges"                                     , code : "88" , region : "Grand Est"                 },
	{ dep : "Yonne"                                      , code : "89" , region : "Bourgogne-Franche-Comté"   },
	{ dep : "Territoire de Belfort"                      , code : "90" , region : "Bourgogne-Franche-Comté"   },
	{ dep : "Essonne"                                    , code : "91" , region : "Île-de-France"             },
	{ dep : "Hauts-de-Seine"                             , code : "92" , region : "Île-de-France"             },
	{ dep : "Seine-Saint-Denis"                          , code : "93" , region : "Île-de-France"             },
	{ dep : "Val-de-Marne"                               , code : "94" , region : "Île-de-France"             },
	{ dep : "Val-d'Oise"                                 , code : "95" , region : "Île-de-France"             },
	{ dep : "Guadeloupe"                                 , code : "971", region : "Outre-mer"                 },
	{ dep : "Martinique"                                 , code : "972", region : "Outre-mer"                 },
	{ dep : "Guyane"                                     , code : "973", region : "Outre-mer"                 },
	{ dep : "La Réunion"                                 , code : "974", region : "Outre-mer"                 },
	{ dep : "Saint-Pierre-et-Miquelon"                   , code : "975", region : "Outre-mer"                 },
	{ dep : "Mayotte"                                    , code : "976", region : "Outre-mer"                 },
	{ dep : "Saint-Barthélemy"                           , code : "977", region : "Outre-mer"                 },
	{ dep : "Saint-Martin"                               , code : "978", region : "Outre-mer"                 },
	{ dep : "Terres australes et antarctiques françaises", code : "984", region : "Outre-mer"                 },
	{ dep : "Wallis-et-Futuna"                           , code : "986", region : "Outre-mer"                 },
	{ dep : "Polynésie française"                        , code : "987", region : "Outre-mer"                 },
	{ dep : "Nouvelle Calédonie"                         , code : "988", region : "Outre-mer"                 },
	{ dep : "Île de Clipperton "                         , code : "989", region : "Outre-mer"                 } ];

let quizData = [];


function melangerListe(liste) {
	// Copier la liste pour ne pas modifier l'original
	let listeMelangee = liste.slice();

	for (let i = listeMelangee.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[listeMelangee[i], listeMelangee[j]] = [listeMelangee[j], listeMelangee[i]];
	}

	return listeMelangee;
}

function genererNombreEntierAleatoire(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function nettoyerChaine(chaine) {
	// Convertir en minuscules
	let chaineNettoyee = chaine.toLowerCase();

	// Supprimer les accents
	chaineNettoyee = chaineNettoyee.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

	// Garder seulement les caractères alphabétiques
	chaineNettoyee = chaineNettoyee.replace(/[^a-z]/g, '');

	return chaineNettoyee;
}

function nettoyerNumero(numero) {
	// Supprimer les espaces et convertir en minuscules
	let numeroNettoyee = numero.replace(/\s/g, '').toUpperCase();

	// Supprimer les accents
	numeroNettoyee = numeroNettoyee.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

	// Supprimer les zéros au début de la chaîne
	numeroNettoyee = numeroNettoyee.replace(/^0+/, '');

	// Supprimer tous les caractères sauf les chiffres, 'a' et 'b'
	numeroNettoyee = numeroNettoyee.replace(/[^0-9ab]/g, '');
codeADep
	return numeroNettoyee;
}

function depACode(dep) {
	return departements.find(code => code.dep === dep).code;
}

function codeADep(code) {
	return departements.find(dep => dep.code === code).dep;
}

function depARegion(dep) {
	return departements.find(region => region.dep === dep).region;
}

function codeARegion(code) {
	return departements.find(region => region.code === code).region;
}

function chargerQuestion() {
	const questionElement = document.getElementById("question");
	const listeChoix = document.getElementById("choix");

	questionElement.textContent = quizData[questionActuelle].question;
	listeChoix.innerHTML = "";

	if (booleenChoix) {
		quizData[questionActuelle].choix.forEach((choix, index) => {
			const elementChoix = document.createElement("div");
			elementChoix.classList.add("choix");
			elementChoix.textContent = choix;
			elementChoix.onclick = () => verifierReponse(index);
			listeChoix.appendChild(elementChoix);
		});
	} else {
		listeChoix.onclick = () => verifierReponse(index);
	}
}

function compterOccurences(tableau, element) {
	let occurences = 0;
	for (let i = 0; i < tableau.length; i++) {
		if (tableau[i] === element) {
			occurences++;
		}
	}
	return occurences;
}

function verifierReponse(index) {
	var reponseUtilisateur;

	if (modeSelectionne == "numeroADepartement") {
		if (booleenChoix) {
			reponseUtilisateur = nettoyerChaine(quizData[questionActuelle].choix[index]);
		} else {
			reponseUtilisateur = nettoyerChaine(document.getElementById("entreeUtilisateur").value);
		}
		const bonneReponse = quizData[questionActuelle].bonneReponse;
		const bonneReponseNettoyee = nettoyerChaine(quizData[questionActuelle].bonneReponse);

		document.getElementById('entreeUtilisateur').value = '';


		if (reponseUtilisateur == bonneReponseNettoyee) {
			document.getElementById("bonne-mauvaise-reponse").innerHTML = "Bonne réponse !";
			document.getElementById("affichage-reponse").innerHTML = "Le département ayant pour code " + depACode(bonneReponse) + " est bien " + bonneReponse;
			nbBonneReponse++;
		} else {
			document.getElementById("bonne-mauvaise-reponse").innerHTML = "Mauvaise réponse !";
			document.getElementById("affichage-reponse").innerHTML = "Le département ayant pour code " + depACode(bonneReponse) + " était " + bonneReponse;
		}
	}

	if (modeSelectionne == "departementANumero") {
		if (booleenChoix) {
			reponseUtilisateur = nettoyerNumero(quizData[questionActuelle].choix[index]);
		} else {
			reponseUtilisateur = nettoyerNumero(document.getElementById("entreeUtilisateur").value);
		}
		const bonneReponse = quizData[questionActuelle].bonneReponse;
		const bonneReponseNettoyee = nettoyerNumero(quizData[questionActuelle].bonneReponse);

		document.getElementById('entreeUtilisateur').value = '';

		if (reponseUtilisateur == bonneReponseNettoyee) {
			document.getElementById("bonne-mauvaise-reponse").innerHTML = "Bonne réponse !";
			document.getElementById("affichage-reponse").innerHTML = "Le code de " + codeADep(bonneReponse) + " est bien " + bonneReponse;
			nbBonneReponse++;
		} else {
			document.getElementById("bonne-mauvaise-reponse").innerHTML = "Mauvaise réponse !";
			document.getElementById("affichage-reponse").innerHTML = "Le code de " + codeADep(bonneReponse) + " était " + bonneReponse + '<br>' + "Vous avez répondu " + reponseUtilisateur;
		}
	}

	if (modeSelectionne == "departementARegion" || modeSelectionne == "numeroARegion") {
		if (booleenChoix) {
			reponseUtilisateur = nettoyerChaine(quizData[questionActuelle].choix[index]);
		} else {
			reponseUtilisateur = nettoyerChaine(document.getElementById("entreeUtilisateur").value);
		}
		const bonneReponse = quizData[questionActuelle].bonneReponse;
		const bonneReponseNettoyee = nettoyerChaine(quizData[questionActuelle].bonneReponse);

		document.getElementById('entreeUtilisateur').value = '';

		if (reponseUtilisateur == bonneReponseNettoyee) {
			document.getElementById("bonne-mauvaise-reponse").innerHTML = "Bonne réponse !";
			document.getElementById("affichage-reponse").innerHTML = "La région qu'il fallait trouver est bien " + bonneReponse;
			nbBonneReponse++;
		} else {
			document.getElementById("bonne-mauvaise-reponse").innerHTML = "Mauvaise réponse !";
			document.getElementById("affichage-reponse").innerHTML = "La région qu'il fallait trouver était " + bonneReponse;
		}
	}
	
	document.getElementById("reponse").style.display = 'block';

	document.getElementById('quiz').style.display = 'none';
	afficherNbBonneReponse();

	// Passer à la question suivante
	questionActuelle++;

	// Vérifier s'il reste des questions
	if (questionActuelle < quizData.length) {
		chargerQuestion();
	}
}

function pageFin() {
	document.getElementById("question").style.display = 'none'
	document.getElementById("choix").style.display = 'none'
	document.getElementById("saisie-reponse").style.display = 'none'

	document.getElementById('nbBonneReponse').innerText = "";

	document.getElementById('score-final').innerHTML = `Score final : ${nbBonneReponse} sur ${questionActuelle}`;
	document.getElementById('page-fin').style.display = 'block';
	document.getElementById('score-final').style.display = 'block';

	nbBonneReponse = 0;
	questionActuelle = 0;
	quizData = [];
}

function afficherNbBonneReponse() {
	var overlayNbBonneReponse = document.getElementById('nbBonneReponse');
	if (nbBonneReponse > 1) {
		overlayNbBonneReponse.innerText = `${nbBonneReponse} bonnes réponses sur ${questionActuelle + 1}`;
	}
	else {
		overlayNbBonneReponse.innerText = `${nbBonneReponse} bonne réponse sur ${questionActuelle + 1}`;
	}

	overlayNbBonneReponse.style.display = 'block';
}

var nbQuestions;

let modeSelectionne = document.getElementById("menu-choix-mode").value;


function initialisationQuiz() {
	if (document.getElementById('nombre-questions').value == '' || parseInt(document.getElementById('nombre-questions').value) <= 0) {
		// Mettre un message pour dire les valeures valides
	}
	else {
		document.getElementById('page-acceuil').style.display = 'none';

		if (document.getElementById('nombre-choix').value == '' || parseInt(document.getElementById('nombre-choix').value) < 2) {
			var nbChoix = 4;
			nbChoix = parseInt(nbChoix);
		}
		else {
			if (modeSelectionne == "departementARegion" || modeSelectionne == "numeroARegion") {
				console.log(new Set(departements.map(departement => departement.region)).size);
				if (document.getElementById('nombre-choix').value == '' || parseInt(document.getElementById('nombre-choix').value) > new Set(departements.map(departement => departement.region)).size) {
					var nbChoix = new Set(departements.map(departement => departement.region)).size;
					nbChoix = parseInt(nbChoix);
				}
				else {
					var nbChoix = document.getElementById('nombre-choix').value;
					nbChoix = parseInt(nbChoix);
				}
			} else {
				if (document.getElementById('nombre-choix').value == '' || parseInt(document.getElementById('nombre-choix').value) > 20) {
					var nbChoix = 20;
					nbChoix = parseInt(nbChoix);
				}
				else {
					var nbChoix = document.getElementById('nombre-choix').value;
					nbChoix = parseInt(nbChoix);
				}
			}
		}

		if (booleenChoix) {
			document.getElementById("saisie-reponse").style.display = 'none';
			document.getElementById("choix").style.display = 'block'
		} else {
			document.getElementById("saisie-reponse").style.display = 'block';
			document.getElementById("choix").style.display = 'none'
		}

		document.getElementById("question").style.display = 'block'
		


		var nbQuest = document.getElementById('nombre-questions').value;
		nbQuest = parseInt(nbQuest);

		nbQuestions = nbQuest;

		var toutesLesReponses = [];

		if (modeSelectionne == "numeroADepartement") {
			for (let i = 0; i < nbQuestions; i++) {
				let nbOccurenceMax = Math.ceil(nbQuestions / departements.length);
				let question = "Quel département a comme code postal ";
			
				let reponseCode;
				do {
					reponseCode = departements[genererNombreEntierAleatoire(0, departements.length)].code;
				} while (compterOccurences(toutesLesReponses, reponseCode) >= nbOccurenceMax);
				toutesLesReponses.push(reponseCode);

				let reponseDep = codeADep(reponseCode);
				question += reponseCode + " ?";

				let tabChoix = [];
				tabChoix[0] = reponseDep;
				for (let j = 1; j < nbChoix; j++) {
					let nouvelleOption;
					do {
						let aleatoire = genererNombreEntierAleatoire(0, departements.length);
						console.log(aleatoire);
						nouvelleOption = departements[aleatoire].dep;
					} while (compterOccurences(tabChoix, nouvelleOption) >= nbOccurenceMax);
					tabChoix[j] = nouvelleOption;
				}
				tabChoix = melangerListe(tabChoix);
				quizData[i] = { question: question, choix: tabChoix, bonneReponse: reponseDep };
			}
		}

		if (modeSelectionne == "departementANumero") {
			for (let i = 0; i < nbQuestions; i++) {
				let nbOccurenceMax = Math.ceil(nbQuestions / departements.length);
				let question = "Quel est le code postal correspondant à ";
			
				let reponseDep;
				do {
					reponseDep = departements[genererNombreEntierAleatoire(0, departements.length)].dep;
				} while (compterOccurences(toutesLesReponses, reponseDep) >= nbOccurenceMax);
				toutesLesReponses.push(reponseDep);

				let reponseCode = depACode(reponseDep);
				question += reponseDep + " ?";

				let tabChoix = [];
				tabChoix[0] = reponseCode;
				for (let j = 1; j < nbChoix; j++) {
					let nouvelleOption;
					do {
						nouvelleOption = departements[genererNombreEntierAleatoire(0, departements.length)].code;
					} while (compterOccurences(tabChoix, nouvelleOption) >= nbOccurenceMax);
					tabChoix[j] = nouvelleOption;
				}
				tabChoix = melangerListe(tabChoix);
				quizData[i] = { question: question, choix: tabChoix, bonneReponse: reponseCode };
			}
		}

		if (modeSelectionne == "departementARegion") {
			for (let i = 0; i < nbQuestions; i++) {
				let nbOccurenceMax = Math.ceil(nbQuestions / new Set(departements.map(departement => departement.region)).size);
				let question = "Quel est la région dans laquelle se situe ";
			
				let reponseDep;
				do {
					reponseDep = departements[genererNombreEntierAleatoire(0, departements.length)].dep;
				} while (compterOccurences(toutesLesReponses, reponseDep) >= nbOccurenceMax);
				toutesLesReponses.push(reponseDep);

				let reponseRegion = depARegion(reponseDep);
				question += reponseDep + " ?";

				let tabChoix = [];
				tabChoix[0] = reponseRegion;
				for (let j = 1; j < nbChoix; j++) {
					let nouvelleOption;
					do {
						nouvelleOption = departements[genererNombreEntierAleatoire(0, departements.length)].region;
					} while (compterOccurences(tabChoix, nouvelleOption) >= nbOccurenceMax);
					tabChoix[j] = nouvelleOption;
				}
				tabChoix = melangerListe(tabChoix);
				quizData[i] = { question: question, choix: tabChoix, bonneReponse: reponseRegion };
			}
		}

		if (modeSelectionne == "numeroARegion") {
			for (let i = 0; i < nbQuestions; i++) {

				let nbOccurenceMax = Math.ceil(nbQuestions / new Set(departements.map(departement => departement.region)).size);
				let question = "Quelle est la région dans laquelle se situe le département numéro ";
			
				let reponseCode;
				do {
					reponseCode = departements[genererNombreEntierAleatoire(0, departements.length)].code;
				} while (compterOccurences(toutesLesReponses, reponseCode) >= nbOccurenceMax);
				toutesLesReponses.push(reponseCode);

				let reponseRegion = codeARegion(reponseCode);
				question += reponseCode + " ?";

				let tabChoix = [];
				tabChoix[0] = reponseRegion;
				for (let j = 1; j < nbChoix; j++) {
					let nouvelleOption;
					do {
						nouvelleOption = departements[genererNombreEntierAleatoire(0, departements.length)].region;
					} while (compterOccurences(tabChoix, nouvelleOption) >= nbOccurenceMax);
					tabChoix[j] = nouvelleOption;
				}
				tabChoix = melangerListe(tabChoix);
				quizData[i] = { question: question, choix: tabChoix, bonneReponse: reponseRegion };
			}
		}

		chargerQuestion();
	}
}

function supprimerQuestionNbProp() {
	// Sélectionnez la case à cocher et le conteneur des éléments liés à la proposition
	var caseChoixSaisie = document.getElementById("case-choix-saisie");
	var conteneurQuestionPropositions = document.getElementById("conteneur-question-propositions");

	// Modifiez la visibilité du conteneur en fonction de l'état de la case à cocher
	conteneurQuestionPropositions.style.display = caseChoixSaisie.checked ? "none" : "block";

	booleenChoix = caseChoixSaisie.checked ? false : true;
}

// Charger la première question
window.onload = document.getElementById('page-acceuil').style.display = 'block', document.getElementById('page-fin').style.display = 'none';