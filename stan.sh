git add .

echo 'Enter le message du commit :'
read commitMessage

git commit -m "$commitMessage"

git push 

read