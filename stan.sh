git add .

echo "saisissez le message de commit"
read messageCommit

git commit -m "$messageCommit"

git push

read