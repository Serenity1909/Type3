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
                <p class="discu d">Je trouve que le type 3 est très vaste parce que tu as les troubles du comportement plus « physique » 
                comme l’hyperactivité, ceux ayant [besoin d’un cadre],... Puis, il y a tous ce qui est psychologique où tu as le trouble du 
                spectre de l’autisme, les enfants psychotiques, les TDA. En bref, tous les troubles du comportement qui posent des problèmes 
                dans la société. Tous les DYS, finalement, ne sont pas dans l’enseignement de type 3 mais leurs difficultés font qu’à un moment 
                donné leur comportement n’est plus adapté dans la société. Donc, notre enseignement c’est cela aussi, apprendre à avoir un cadre, 
                apprendre à vivre en société avant de changer d’enseignement.</p>
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
                <p class="discu d">Je trouve que dans notre enseignement, il n’y a pas de profil type parce qu’on a des enfants très différents 
                dans leur trouble. On peut rencontrer des enfants avec des traits autistiques comme des enfants psychotiques, des enfants ayant 
                besoin de cadre ou des enfants hyperactifs. Le seul point commun parmi les enfants c’est le comportement qui est un frein à leur 
                évolution. Dans notre public, nous avons aussi des enfants ayant une intelligence plutôt élevée, correcte voire en-dessous de la moyenne.</p>
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
                <p class="discu d">Pour les jeunes enseignants, nous disons souvent qu’ils ne sont pas là pour être aimé. Dans un premier temps, 
                le jeune enseignant sera souvent en conflit avec certains enfants car ils ont besoin de voir les limites de l’adulte, ils ont besoin 
                de voir si le cadre sera mis pour qu’ils puissent se sentir en sécurité. L’adulte ne doit rien lâcher et surtout garder le cadre cohérent
                 qu’il a instauré. Il faut être intransigeant au début car cela va rassurer l’enfant et il va se sentir en sécurité.</p>
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
              <p class="discu d">Dans mon entourage, je pose toujours la question, s’il y a des problèmes de comportement à l’école, « A quel 
              point l’enfant en souffre quand il rentre ? ». Parce que si ce sont des enfants qui ont quelques soucis à l’école parce qu’ils 
              sont plus actifs, etc.. et quand ils rentrent ils continuent leur vie pour moi ce n’est pas un problème. Mais quand l’enfant rentre 
              et qu’il traine ça c’est qu’il est temps de se poser des questions. Car cela veut dire que c’est profond.</p>
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
              <p class="discu d">On peut se tourner vers le CPMS, les thérapeutes ou des spécialistes.</p>
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
              <p class="discu d">Le CMPS peut t’orienter vers un neuro, un pédopsychiatre. Ça peut se faire à tout moment mais cela prend du temps 
              d’avoir un rendez-vous. En ce qui concerne les DYS, les logopèdes peuvent dépister le trouble.</p>
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
              <p class="discu d">Au début de ma carrière, j’ai eu un enfant qui, niveau comportement, ne me posait aucun problème en classe. Au point, 
              qu’en réunion, je demandais ce qu’il faisant dans le type 3. En fait, cet enfant était dans l’inhibition, il ne créait pas de lien, 
              n’exprimait rien. Cependant, il était complétement différent chez lui (beaucoup plus de colère,etc…). 
              J’ai eu un autre enfant qui était très intelligent mais dès qu’on n’allait pas dans son sens ou qu’il était frustré, il perdait
               pied, son regard allait partout. C’est comme cela que j’ai vu qu’il avait des traits autistiques.</p>
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
              <p class="discu d">Dans notre enseignement, ce qui est, selon moi, essentiel c’est de travailler la gestion des sentiments, 
              le langage pour savoir s’exprimer de manière adéquate, le relationnel, la confiance, et leur donner de bonnes valeurs de vie. 
              En bref, on fait quasiment que du fonctionnel car ça leur permettra d’apprendre à adapter leur comportement à n’importe quelle 
              situation. Instaurer des séances de relaxation, de massages, … ils se sentiront mieux dans leur peau et donc mieux avec les autres.</p>
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
                <p class="discu d">Je m’appelle Céline, j’ai 41 ans. J’ai fait l’école Normale à Gosselies dans la section primaire. 
                J’ai travaillé 6 mois à L’Heureux Abri en type 3. Puis, je suis arrivée à Omezée et cela fait 20 ans que j’y suis. J’ai 
                commencé ces études pour travailler dans le spécialisé. Je n’ai jamais travaillé dans l’ordinaire. Je voulais absolument 
                travailler avec des personnes différentes ou ayant un handicap. J’avais même hésité à entamer des études en ergothérapie.</p>
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
                <p class="discu d">Je trouve que le type 3 est très vaste parce que tu as les troubles du comportement plus « physique » 
                comme l’hyperactivité, ceux ayant [besoin d’un cadre],... Puis, il y a tous ce qui est psychologique où tu as le trouble du 
                spectre de l’autisme, les enfants psychotiques, les TDA. En bref, tous les troubles du comportement qui posent des problèmes 
                dans la société. Tous les DYS, finalement, ne sont pas dans l’enseignement de type 3 mais leurs difficultés font qu’à un moment 
                donné leur comportement n’est plus adapté dans la société. Donc, notre enseignement c’est cela aussi, apprendre à avoir un cadre, 
                apprendre à vivre en société avant de changer d’enseignement.</p>
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
                <p class="discu d">Je trouve que dans notre enseignement, il n’y a pas de profil type parce qu’on a des enfants très différents 
                dans leur trouble. On peut rencontrer des enfants avec des traits autistiques comme des enfants psychotiques, des enfants ayant 
                besoin de cadre ou des enfants hyperactifs. Le seul point commun parmi les enfants c’est le comportement qui est un frein à leur 
                évolution. Dans notre public, nous avons aussi des enfants ayant une intelligence plutôt élevée, correcte voire en-dessous de la moyenne.</p>
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
                <p class="discu d">Pour les jeunes enseignants, nous disons souvent qu’ils ne sont pas là pour être aimé. Dans un premier temps, 
                le jeune enseignant sera souvent en conflit avec certains enfants car ils ont besoin de voir les limites de l’adulte, ils ont besoin 
                de voir si le cadre sera mis pour qu’ils puissent se sentir en sécurité. L’adulte ne doit rien lâcher et surtout garder le cadre cohérent
                 qu’il a instauré. Il faut être intransigeant au début car cela va rassurer l’enfant et il va se sentir en sécurité.</p>
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
              <p class="discu d">Dans mon entourage, je pose toujours la question, s’il y a des problèmes de comportement à l’école, « A quel 
              point l’enfant en souffre quand il rentre ? ». Parce que si ce sont des enfants qui ont quelques soucis à l’école parce qu’ils 
              sont plus actifs, etc.. et quand ils rentrent ils continuent leur vie pour moi ce n’est pas un problème. Mais quand l’enfant rentre 
              et qu’il traine ça c’est qu’il est temps de se poser des questions. Car cela veut dire que c’est profond.</p>
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
              <p class="discu d">On peut se tourner vers le CPMS, les thérapeutes ou des spécialistes.</p>
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
              <p class="discu d">Le CMPS peut t’orienter vers un neuro, un pédopsychiatre. Ça peut se faire à tout moment mais cela prend du temps 
              d’avoir un rendez-vous. En ce qui concerne les DYS, les logopèdes peuvent dépister le trouble.</p>
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
              <p class="discu d">Au début de ma carrière, j’ai eu un enfant qui, niveau comportement, ne me posait aucun problème en classe. Au point, 
              qu’en réunion, je demandais ce qu’il faisant dans le type 3. En fait, cet enfant était dans l’inhibition, il ne créait pas de lien, 
              n’exprimait rien. Cependant, il était complétement différent chez lui (beaucoup plus de colère,etc…). 
              J’ai eu un autre enfant qui était très intelligent mais dès qu’on n’allait pas dans son sens ou qu’il était frustré, il perdait
               pied, son regard allait partout. C’est comme cela que j’ai vu qu’il avait des traits autistiques.</p>
              <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="" height="100%">
            </div>`;
      break;
  }
});
