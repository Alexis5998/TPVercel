4 : npx vercel --version

5 : npx vercel login \ 
    npx vercel \ 
    https://tpvercel.vercel.app

6 : npx vercel --prod

7 : npx vercel list

8 : npx vercel ls tpvercel

9 : npx vercel inspect https://tpvercel.vercel.app
Permet de récuper des informations sur un deploiement soit par l'url de déploiement unique, soit le domaine de production

10 : Une variable d'environnement est une valeur dynamique qui peut etre utilisée par plusieur spricesus en meme temps.

11 : npx vercel env add \ 
name : plain \ 
value : https://tpvercel.vercel.app

12 : npx vercel env ls

13 : Un secret est une variable d'environnement mais quand on liste les variables d'environnement, les valeurs des secrets ne sont pas affichés. \ 
On peux y mettre des mots de passe, ils ne seront visible de personne.

15 : npx vercel secret add mynewsecret 123blabla

16 : Les trois environnements : Production, Preview, Development. \ 
Ca depend du moment où on compte l'utiliser

18 : https://tpvercelgit.vercel.app/

19 : Une pull request est l'action qui consiste à demander au détenteur du dépot original de prendre en compte les modifications que l'on a fait. \ 
Vercel a automatique deployé la pull request. Et ils nous donne tdeux liens, un pour voir le rendu avant merge et un autre avec des information sur la branche, le texte du commit, ...

20 : Vercel réalise une sorte d'historique à chaque commit pour voir les mofications réalisées. \ 
Quand il détecte un merge, il pousse sur les branches production et preview.
