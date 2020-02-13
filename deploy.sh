npm run build

cd happy_birthday_mao

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/SnailSword/happy_birthday_mao.git master:gh-pages
