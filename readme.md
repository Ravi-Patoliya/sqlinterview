echo "# sqlinterview" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/funkeylook9/sqlinterview.git
  git push -u origin main


  SQL QUERY===
  select  * from users 
left join orders on users.id  = orders.created_by 


*able to get order data by user only

authentication done