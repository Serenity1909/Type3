const btnS = document.querySelector(".btnSuivant");
const btnP = document.querySelector(".btnPrece");
const lecon = document.querySelector(".lecon");
let i = 0;

btnS.addEventListener("click", () => {
  i++;

  if (i >= 9) {
    i = 8;
  }

  switch (i) {
    case 1:
      lecon.innerHTML = `
              <div class="discussion">
                <img class="persoDiscu" src="/img/pose_question.jpg" alt="" height="100%">
                <p class="discu">Selon vous, qu’est-ce que l’enseignement de type 3 et ses spécificités ?</p>
              </div>
    
              <div class="discussion d ">
                <p class="discu d">L’enseignement de type 3 est, selon moi, un enseignement qui est adapté aux enfants qui ont des difficultés à gérer leurs émotions, leur colère,…</p>
                <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="" height="100%">
              </div>`;
      break;

    case 2:
      lecon.innerHTML = `
              <div class="discussion">
                <img class="persoDiscu" src="/img/pose_question.jpg" alt="" height="100%">
                <p class="discu">Pouvez-vous dresser un profil type d’un élève devant aller dans ce type d’enseignement ?</p>
              </div>
      
              <div class="discussion d ">
                <p class="discu d">Je ne suis pas spécialisé pour les enfants dans l’enseignement de type 3. Maintenant, moi si je devais, 
                à l’extérieur, renseigner une école pour un certain type d’enfants, je dirais qu’on retrouve des enfants qui font régulièrement 
                des colères à la maison, un enfant qui a difficile à mettre des mots sur ses émotions et qui a difficile à les gérer forcément, un 
                enfant qui est en perdition scolaire parce que ses colères perturbent ses apprentissages. Maintenant, il a surement d’autres signes.</p>
                <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="" height="100%">
              </div>`;
      break;

    case 3:
      lecon.innerHTML = `
              <div class="discussion">
                <img class="persoDiscu" src="/img/pose_question.jpg" alt="" height="100%">
                <p class="discu">Pouvez-vous nous donner des pistes d’accompagnement ? 
                (Relationnel-social-psychologique-pédagogique-institutionnel)
                </p>
              </div>
      
              <div class="discussion d ">
                <p class="discu d">Moi, je ne fais pas de différenciation par rapport au type d’enseignement. Je pars du principe que la logopédie 
                doit s’adapter à chaque enfant peu importe son parcours. En revanche, je passerais plus facilement par le jeu ou la manipulation.</p>
                <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="" height="100%">
              </div>`;
      break;

    case 4:
      lecon.innerHTML = `
            <div class="discussion">
              <img class="persoDiscu" src="/img/pose_question.jpg" alt="" height="100%">
              <p class="discu">Quels conseils pourriez-vous donner afin de détecter des signaux chez un élève orienté type 3 ?</p>
            </div>
    
            <div class="discussion d ">
              <p class="discu d">Je conseille surtout d’écouter les enfants. Pour le trouble du spectre de l’autisme, il y a des signaux d’alerte tels 
              que la difficulté à rentrer en relation avec l’autre. 
              Un autre exemple, un enfant avec un DYS peut développer un trouble du comportement parce qu’il n’arrive pas à se faire comprendre.</p>
              <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="" height="100%">
            </div>`;
      break;

    case 5:
      lecon.innerHTML = `
            <div class="discussion">
              <img class="persoDiscu" src="/img/pose_question.jpg" alt="" height="100%">
              <p class="discu">Comment vérifier que nos constatations sur cet élève soient correctes ?</p>
            </div>
    
            <div class="discussion d ">
              <p class="discu d">On peut demander conseil au médecin traitant et puis, se diriger vers un neuropédiatre qui va poser un diagnostic.</p>
              <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="" height="100%">
            </div>`;
      break;

    case 6:
      lecon.innerHTML = `
            <div class="discussion">
              <img class="persoDiscu" src="/img/pose_question.jpg" alt="" height="100%">
              <p class="discu">Selon vous, quand et qui peut dépister le trouble ?</p>
            </div>
    
            <div class="discussion d ">
              <p class="discu d">Cela peut être fait n’importe quand et toutes les personnes côtoyant l’enfant peut émettre des hypothèses mais seul le
               spécialiste peut poser un diagnostic.</p>
              <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="" height="100%">
            </div>`;
      break;

    case 7:
      lecon.innerHTML = `
            <div class="discussion">
              <img class="persoDiscu" src="/img/pose_question.jpg" alt="" height="100%">
              <p class="discu">Citez-moi une situation dans laquelle vous avez pu identifier un/des signaux d’alertes concernant les troubles de 
              l’enseignement de type 3.</p>
            </div>
    
            <div class="discussion d ">
              <p class="discu d">Moi ça sera plus au niveau du type 8 que du type 3 car ils sont déjà dans le type 3 donc je ne dépiste rien.</p>
              <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="" height="100%">
            </div>`;
      break;

    case 8:
      lecon.innerHTML = `
            <div class="discussion">
            <img class="persoDiscu" src="/img/pose_question.jpg" alt="" height="100%">
              <p class="discu">Quels sont les aménagements possibles pour ce type d’enseignement ?</p>
            </div>
    
            <div class="discussion d ">
              <p class="discu d">Personnellement, je pense qu’il faut beaucoup manipuler parce que sans ça, les enfants passent directement par de l’abstrait et 
              cela devient trop compliqué pour eux.</p>
              <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="" height="100%">
            </div>`;
      break;
  }
});

btnP.addEventListener("click", () => {
  i--;

  if (i < 1) {
    i = 0;
  }

  switch (i) {
    case 0:
      lecon.innerHTML = `
              <div class="discussion">
                <img class="persoDiscu" src="/img/pose_question.jpg" alt="" height="100%">
                <p class="discu">Pouvez-vous vous présenter en quelques lignes ainsi que votre parcours ?</p>
              </div>

               <div class="discussion d">
                <p class="discu d">Mérine, 32 ans logopède conventionnée depuis août 2014. Sortie de la Haute Ecole Provinciale Condorcet de Saint-Ghislain. 
                Sortie en juin 2014, j'ai commencé ma pratique en août 2014 avec un remplacement de congé de maternité du côté de Philippeville. Ce remplacement
                 a duré 6 mois. Ma patientèle se composait exclusivement d'enfants vus en école et au cabinet. 
                J'ai ensuite repris un deuxième remplacement à mi-temps du côté de Heer. Cela me permettait de créer en parallèle ma propre patientèle. Ce remplacement 
                a duré 3-4 mois. Ces deux remplacements m'ont permis également de me faire connaitre d'un côté comme de l'autre de chez moi. 
                Après cela, j'ai été engagée dans un centre pluridisciplinaire en tant qu'indépendante. J'y suis restée +/- 3ans. En parallèle, j'ai travaillé en tant 
                que salariée à l'école spécialisée de Marloie type1, 2 et 8 pendant 6 mois pour un remplacement de congé de maternité également. 
                Ma patientèle au centre se composait d'enfants et d'adultes. La fermeture du centre m'a permis de créer avec la psychologue, la neuropsychologue et la 
                psychomotricienne un nouveau centre sur Mariembourg. Le principe restait le même. 
                Après avoir acheté ma maison, j'ai développé ma patientèle du côté de Dinant et j'ai ouvert mon cabinet privé à Morville. 
                J'ai quitté le centre de Mariembourg en 2019 afin de prioriser les patients chez moi.
                Je continue, la journée, de me rendre dans les écoles et notamment à l'école spécialisée d'Omezée type 3.
                En février 2019, j'ai eu la chance d'être engagée à mi-temps au Centre Pms pse de Couvin.
                Depuis, je combine patientèle au cabinet privé et logopède au centre Pms.</p>
                <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="" height="100%">
              </div>`;
      break;

    case 1:
      lecon.innerHTML = `
              <div class="discussion">
                <img class="persoDiscu" src="/img/pose_question.jpg" alt="" height="100%">
                <p class="discu">Selon vous, qu’est-ce que l’enseignement de type 3 et ses spécificités ?</p>
              </div>
    
              <div class="discussion d ">
                <p class="discu d">L’enseignement de type 3 est, selon moi, un enseignement qui est adapté aux enfants qui ont des difficultés à gérer leurs émotions, leur colère,…</p>
                <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="" height="100%">
              </div>`;
      break;

    case 2:
      lecon.innerHTML = `
              <div class="discussion">
                <img class="persoDiscu" src="/img/pose_question.jpg" alt="" height="100%">
                <p class="discu">Pouvez-vous dresser un profil type d’un élève devant aller dans ce type d’enseignement ?</p>
              </div>
      
              <div class="discussion d ">
                <p class="discu d">Je ne suis pas spécialisé pour les enfants dans l’enseignement de type 3. Maintenant, moi si je devais, 
                à l’extérieur, renseigner une école pour un certain type d’enfants, je dirais qu’on retrouve des enfants qui font régulièrement 
                des colères à la maison, un enfant qui a difficile à mettre des mots sur ses émotions et qui a difficile à les gérer forcément, un 
                enfant qui est en perdition scolaire parce que ses colères perturbent ses apprentissages. Maintenant, il a surement d’autres signes.</p>
                <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="" height="100%">
              </div>`;
      break;

    case 3:
      lecon.innerHTML = `
              <div class="discussion">
                <img class="persoDiscu" src="/img/pose_question.jpg" alt="" height="100%">
                <p class="discu">Pouvez-vous nous donner des pistes d’accompagnement ? 
                (Relationnel-social-psychologique-pédagogique-institutionnel)
                </p>
              </div>
      
              <div class="discussion d ">
                <p class="discu d">Moi, je ne fais pas de différenciation par rapport au type d’enseignement. Je pars du principe que la logopédie 
                doit s’adapter à chaque enfant peu importe son parcours. En revanche, je passerais plus facilement par le jeu ou la manipulation.</p>
                <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="" height="100%">
              </div>`;
      break;

    case 4:
      lecon.innerHTML = `
            <div class="discussion">
              <img class="persoDiscu" src="/img/pose_question.jpg" alt="" height="100%">
              <p class="discu">Quels conseils pourriez-vous donner afin de détecter des signaux chez un élève orienté type 3 ?</p>
            </div>
    
            <div class="discussion d ">
              <p class="discu d">Je conseille surtout d’écouter les enfants. Pour le trouble du spectre de l’autisme, il y a des signaux d’alerte tels 
              que la difficulté à rentrer en relation avec l’autre. 
              Un autre exemple, un enfant avec un DYS peut développer un trouble du comportement parce qu’il n’arrive pas à se faire comprendre.</p>
              <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="" height="100%">
            </div>`;
      break;

    case 5:
      lecon.innerHTML = `
            <div class="discussion">
              <img class="persoDiscu" src="/img/pose_question.jpg" alt="" height="100%">
              <p class="discu">Comment vérifier que nos constatations sur cet élève soient correctes ?</p>
            </div>
    
            <div class="discussion d ">
              <p class="discu d">On peut demander conseil au médecin traitant et puis, se diriger vers un neuropédiatre qui va poser un diagnostic.</p>
              <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="" height="100%">
            </div>`;
      break;

    case 6:
      lecon.innerHTML = `
            <div class="discussion">
              <img class="persoDiscu" src="/img/pose_question.jpg" alt="" height="100%">
              <p class="discu">Selon vous, quand et qui peut dépister le trouble ?</p>
            </div>
    
            <div class="discussion d ">
              <p class="discu d">Cela peut être fait n’importe quand et toutes les personnes côtoyant l’enfant peut émettre des hypothèses mais seul le
               spécialiste peut poser un diagnostic.</p>
              <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="" height="100%">
            </div>`;
      break;

    case 7:
      lecon.innerHTML = `
            <div class="discussion">
              <img class="persoDiscu" src="/img/pose_question.jpg" alt="" height="100%">
              <p class="discu">Citez-moi une situation dans laquelle vous avez pu identifier un/des signaux d’alertes concernant les troubles de 
              l’enseignement de type 3.</p>
            </div>
    
            <div class="discussion d ">
              <p class="discu d">Moi ça sera plus au niveau du type 8 que du type 3 car ils sont déjà dans le type 3 donc je ne dépiste rien.</p>
              <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="" height="100%">
            </div>`;
      break;
  }
});
