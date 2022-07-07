Once the server is started,the app will land on the homepage "localhost:3000" which is the default page routing to the users.js file which displays a table with the list of all users fetched from the json placeholder api.

"localhost:300/posts/1" displays the posts data fetched from the api. To access the posts of other users, simply change the userId at the end of the url.
"localhost:300/albums/1" displays the albums data fetched from the api. To access the albums of other users, simply change the userId at the end of the url.
"localhost:3000/about" displays a page which contains some information about me.

I had tried to include the posts and albums data in one single webpage using split screen method but failed to do so, hence I have displayed them in two different webpages.
I had also tried doing the brownie points task, which is making each user clickable. I tried it using <Link> method but it did not work out as expected.
I implemented the app with CSS and Bootstrap ( for the table ) as I was unable to learn materialUI.
