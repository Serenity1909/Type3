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
                <img class="persoDiscu" src="/img/pose_question.jpg" alt="">
                <p class="discu">Selon vous, qu’est-ce que l’enseignement de type 3 et ses spécificités ?</p>
              </div>
    
              <div class="discussion d ">
                <p class="discu d">Selon moi, l’enseignement de type 3 concerne les enfants atteints de troubles du comportement et de la personnalité mais 
                cela reste très vaste. En effet, les origines de ces troubles sont très diverses et donc il y a beaucoup de diversité au niveau des personnalités 
                (un enfant peut avoir un trouble de la personnalité -> il existe deux versants : névrosé ou psychotique). Le type 3 permet de détecter ce qui posera 
                problème à l’enfant et ainsi trouver des aménagements adéquats selon le trouble.</p>
                <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="">
              </div>`;
      break;

    case 2:
      lecon.innerHTML = `
              <div class="discussion">
                <img class="persoDiscu" src="/img/pose_question.jpg" alt="">
                <p class="discu">Pouvez-vous dresser un profil type d’un élève devant aller dans ce type d’enseignement ?</p>
              </div>
      
              <div class="discussion d ">
                <p class="discu d">On pourrait aller dans le stéréotype du profil type mais ça serait une erreur. On peut avoir des enfants avec un problème d’attention
                 ou un problème DYS et à cause de cela, il va réagir et développer un trouble du comportement. On oublie souvent d’aller chercher ailleurs.
                  Selon moi, dresser un profil rentre dans les stéréotypes. Il n’y a donc pas de profil type.</p>
                <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="">
              </div>`;
      break;

    case 3:
      lecon.innerHTML = `
              <div class="discussion">
                <img class="persoDiscu" src="/img/pose_question.jpg" alt="">
                <p class="discu">Pouvez-vous nous donner des pistes d’accompagnement ? 
                (Relationnel-social-psychologique-pédagogique-institutionnel)
                </p>
              </div>
      
              <div class="discussion d ">
                <p class="discu d">Pour un enfant, la majeure partie du temps sera de travailler la confiance et l’estime car les enfants ont un sac à dos assez lourd car 
                ils n’ont pas pu rentrer dans le moule de l’enseignement « ordinaire ».  Ils arrivent donc blessé par leur parcours et il est donc essentiel de les aider 
                à identifier leurs points forts et leurs qualités. <br> <br>

                Pour l’adulte (intervenant), il doit être conscient des blessures de l’enfant et il doit comprendre le comportement de celui-ci. Il doit prendre du recul 
                en pensant au vécu de l’enfant (Souvent, les enfants ont une carapace pour tenir l’autre à distance et ainsi ne plus souffrir). Certains enfants ont besoin 
                de prendre du temps pour aller vers l’autre et oser faire confiance. Pour gagner cette confiance, les limites sont importantes car les enfants sentiront un 
                cadre qui équivaut à être en sécurité pour eux. Il est également important de ne pas tomber dans l’hyper bienveillance</p>
                <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="">
              </div>`;
      break;

    case 4:
      lecon.innerHTML = `
            <div class="discussion">
              <img class="persoDiscu" src="/img/pose_question.jpg" alt="">
              <p class="discu">Quels conseils pourriez-vous donner afin de détecter des signaux chez un élève orienté type 3 ?</p>
            </div>
    
            <div class="discussion d ">
              <p class="discu d">Il existe deux formes d’opposition, il y a l’active (l’enfant est rebelle par rapport au travail) ou la passive
               (l’enfant qui ne va pas se faire entendre, qui va tenter de se faire oublier et ne va pas se mettre dans les apprentissages car cela 
                sera trop dur pour lui).</p>
              <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="">
            </div>`;
      break;

    case 5:
      lecon.innerHTML = `
            <div class="discussion">
              <img class="persoDiscu" src="/img/pose_question.jpg" alt="">
              <p class="discu">Comment vérifier que nos constatations sur cet élève soient correctes ?</p>
            </div>
    
            <div class="discussion d ">
              <p class="discu d">Avec l’aide du PMS qui lui est le spécialiste. Il faut d’abord en parler et expliquer les observations 
              et si le CPMS pense qu’il est nécessaire de faire un test, ils le feront et délivrerons une attestation.</p>
              <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="">
            </div>`;
      break;

    case 6:
      lecon.innerHTML = `
            <div class="discussion">
              <img class="persoDiscu" src="/img/pose_question.jpg" alt="">
              <p class="discu">Selon vous, quand et qui peut dépister le trouble ?</p>
            </div>
    
            <div class="discussion d ">
              <p class="discu d">Le Centre PMS sinon un pédopsychiatre et cela peut être n’importe quand. Il est important de savoir que les 
              parents ne sont pas obligés de suivre l’avis du PMS.</p>
              <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="">
            </div>`;
      break;

    case 7:
      lecon.innerHTML = `
            <div class="discussion">
              <img class="persoDiscu" src="/img/pose_question.jpg" alt="">
              <p class="discu">Citez-moi une situation dans laquelle vous avez pu identifier un/des signaux d’alertes concernant les troubles de 
              l’enseignement de type 3.</p>
            </div>
    
            <div class="discussion d ">
              <p class="discu d">Si je prends le trouble du Spectre de l’autisme, c’est un enfant qui rencontrera des difficultés avec le regard, 
              la relation peut l’angoisser, c’est un enfant qui va s’isoler plus facilement. Les rituels sont très importants. Il rencontrera des 
              difficultés à gérer la frustration et les imprévus. Il rencontrera aussi des difficultés à ressentir de l’empathie. L‘adulte peut se 
              sentir objet c’est-à-dire qu’il peut jouer avec l’adulte mais ne rentrera pas en relation avec lui. L’adulte lui permet juste de jouer.</p>
              <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="">
            </div>`;
      break;

    case 8:
      lecon.innerHTML = `
            <div class="discussion">
              <img class="persoDiscu" src="/img/pose_question.jpg" alt="">
              <p class="discu">Quels sont les aménagements possibles pour ce type d’enseignement ?</p>
            </div>
    
            <div class="discussion d ">
              <p class="discu d">Les aménagements doivent être visibles et claires (règles claires, routines) pour amener un sentiment de sécurité. 
              Tous les aménagements qui permettront à l’enfant d’être reconnu pour ce qu’il est (il est important de différencier la personne de l’action 
                et donc quand on sanctionne, nous devons expliquer qu’on punit pour l’action et non la personne en elle-même).</p>
              <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="">
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
                <img class="persoDiscu" src="/img/pose_question.jpg" alt="">
                <p class="discu">Pouvez-vous vous présenter en quelques lignes ainsi que votre parcours ?</p>
              </div>

               <div class="discussion d">
                <p class="discu d">Je m’appelle Stéphanie et je suis psychologue depuis 15 ans à l’école Abbé Jean Baptise Hermand à Omezée. J’ai directement commencé 
                à travailler dans cette école. J’avais également une première perception de ce type d’enseignement grâce à ma maman qui a réalisé toute sa carrière 
                là-bas. Une fois sur le terrain, j’ai appris à connaitre cet enseignement au fur et à mesure des années mais aussi grâce aux diverses rencontres            
                ( PMS, équipe pluridisciplinaire). J’ai également suivi des formations.</p>
                <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="">
              </div>`;
      break;

    case 1:
      lecon.innerHTML = `
              <div class="discussion">
                <img class="persoDiscu" src="/img/pose_question.jpg" alt="">
                <p class="discu">Selon vous, qu’est-ce que l’enseignement de type 3 et ses spécificités ?</p>
              </div>
    
              <div class="discussion d ">
                <p class="discu d">Selon moi, l’enseignement de type 3 concerne les enfants atteints de troubles du comportement et de la personnalité mais 
                cela reste très vaste. En effet, les origines de ces troubles sont très diverses et donc il y a beaucoup de diversité au niveau des personnalités 
                (un enfant peut avoir un trouble de la personnalité -> il existe deux versants : névrosé ou psychotique). Le type 3 permet de détecter ce qui posera 
                problème à l’enfant et ainsi trouver des aménagements adéquats selon le trouble.</p>
                <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="">
              </div>`;
      break;

    case 2:
      lecon.innerHTML = `
              <div class="discussion">
                <img class="persoDiscu" src="/img/pose_question.jpg" alt="">
                <p class="discu">Pouvez-vous dresser un profil type d’un élève devant aller dans ce type d’enseignement ?</p>
              </div>
      
              <div class="discussion d ">
                <p class="discu d">On pourrait aller dans le stéréotype du profil type mais ça serait une erreur. On peut avoir des enfants avec un problème d’attention
                  ou un problème DYS et à cause de cela, il va réagir et développer un trouble du comportement. On oublie souvent d’aller chercher ailleurs.
                  Selon moi, dresser un profil rentre dans les stéréotypes. Il n’y a donc pas de profil type.</p>
                <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="">
              </div>`;
      break;

    case 3:
      lecon.innerHTML = `
              <div class="discussion">
                <img class="persoDiscu" src="/img/pose_question.jpg" alt="">
                <p class="discu">Pouvez-vous nous donner des pistes d’accompagnement ? 
                (Relationnel-social-psychologique-pédagogique-institutionnel)
                </p>
              </div>
      
              <div class="discussion d ">
                <p class="discu d">Pour un enfant, la majeure partie du temps sera de travailler la confiance et l’estime car les enfants ont un sac à dos assez lourd car 
                ils n’ont pas pu rentrer dans le moule de l’enseignement « ordinaire ».  Ils arrivent donc blessé par leur parcours et il est donc essentiel de les aider 
                à identifier leurs points forts et leurs qualités. <br> <br>

                Pour l’adulte (intervenant), il doit être conscient des blessures de l’enfant et il doit comprendre le comportement de celui-ci. Il doit prendre du recul 
                en pensant au vécu de l’enfant (Souvent, les enfants ont une carapace pour tenir l’autre à distance et ainsi ne plus souffrir). Certains enfants ont besoin 
                de prendre du temps pour aller vers l’autre et oser faire confiance. Pour gagner cette confiance, les limites sont importantes car les enfants sentiront un 
                cadre qui équivaut à être en sécurité pour eux. Il est également important de ne pas tomber dans l’hyper bienveillance</p>
                <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="">
              </div>`;
      break;

    case 4:
      lecon.innerHTML = `
            <div class="discussion">
              <img class="persoDiscu" src="/img/pose_question.jpg" alt="">
              <p class="discu">Quels conseils pourriez-vous donner afin de détecter des signaux chez un élève orienté type 3 ?</p>
            </div>
    
            <div class="discussion d ">
              <p class="discu d">Il existe deux formes d’opposition, il y a l’active (l’enfant est rebelle par rapport au travail) ou la passive
                (l’enfant qui ne va pas se faire entendre, qui va tenter de se faire oublier et ne va pas se mettre dans les apprentissages car cela 
                sera trop dur pour lui).</p>
              <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="">
            </div>`;
      break;

    case 5:
      lecon.innerHTML = `
            <div class="discussion">
              <img class="persoDiscu" src="/img/pose_question.jpg" alt="">
              <p class="discu">Comment vérifier que nos constatations sur cet élève soient correctes ?</p>
            </div>
    
            <div class="discussion d ">
              <p class="discu d">Avec l’aide du PMS qui lui est le spécialiste. Il faut d’abord en parler et expliquer les observations 
              et si le CPMS pense qu’il est nécessaire de faire un test, ils le feront et délivrerons une attestation.</p>
              <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="">
            </div>`;
      break;

    case 6:
      lecon.innerHTML = `
            <div class="discussion">
              <img class="persoDiscu" src="/img/pose_question.jpg" alt="">
              <p class="discu">Selon vous, quand et qui peut dépister le trouble ?</p>
            </div>
    
            <div class="discussion d ">
              <p class="discu d">Le Centre PMS sinon un pédopsychiatre et cela peut être n’importe quand. Il est important de savoir que les 
              parents ne sont pas obligés de suivre l’avis du PMS.</p>
              <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="">
            </div>`;
      break;

    case 7:
      lecon.innerHTML = `
            <div class="discussion">
              <img class="persoDiscu" src="/img/pose_question.jpg" alt="">
              <p class="discu">Citez-moi une situation dans laquelle vous avez pu identifier un/des signaux d’alertes concernant les troubles de 
              l’enseignement de type 3.</p>
            </div>
    
            <div class="discussion d ">
              <p class="discu d">Si je prends le trouble du Spectre de l’autisme, c’est un enfant qui rencontrera des difficultés avec le regard, 
              la relation peut l’angoisser, c’est un enfant qui va s’isoler plus facilement. Les rituels sont très importants. Il rencontrera des 
              difficultés à gérer la frustration et les imprévus. Il rencontrera aussi des difficultés à ressentir de l’empathie. L‘adulte peut se 
              sentir objet c’est-à-dire qu’il peut jouer avec l’adulte mais ne rentrera pas en relation avec lui. L’adulte lui permet juste de jouer.</p>
              <img class="persoDiscu d" src="./img/reponse_question.jpg" alt="">
            </div>`;
      break;
  }
});
