<<<<<<< HEAD
<h1>COMMANDE KEBAB</h1>

<br>
<a href="http://commande-kebab.herokuapp.com/">Demo available here on Heroku</a>

<h3>Techs used: MERN stack, socket.io, axios, bootstrap 4</h3>

<h2>History:</h2>
<p>This project was created for restaurants. I'm actually work in a turkish restaurant called La Mer Egée in NANCY (France), in summertimes it is really difficult to communicate orders correctly to the kitchen due to the amount of clients (the restaurant is pretty famous!). Usually we write orders on littles pieces of paper, and it's fine, but with high activity, we have difficulties to keep them clean and in order. This creates frustation, long time waiting for some clients and in the end, we don't have as good times as we have the rest of the year.</p>

<h2>Scenario:</h2>
<p>The waiter takes the order from the clients using the "new-order" page.</p>
<br>
<p align="center">
  <img src="public/gif/new_order.gif"/>
</p>
<br>
<p> After validating the order is sent to the database and, using socket.io, back to the "order-list" page, where the cooks can see them. The cooks have the possibility to validate each dish from the order separately and when the order is completely finished, they can validate it and send it to the database again.</p>
<br>
<p align="center">
  <img src="public/gif/commande_en_cours.gif"/>
</p>
<br>
<p>Finally the order appears in the "finished-orders" page at the choosen date. You can change date and review old orders. Orders are all stored in the database for now.</p>

<p>In the end, we also have the possibility to edit the menu on the "menu-modification" page if a product is not available.</p>


<h3>Todos:</h3>
<ul>
  <li>Add authentification</li>
  <li>Refactor code</li>
  <li>Write more comments</li>
  <li>...</li>
 </ul>
=======
<h1>Garden Todo</h1>
<br>
<a href="https://gardentodo.herokuapp.com/">Available here on Heroku</a> (loading time is long due to my free plan on heroku...)

<h3 align="center">Techs used: React, Express, Node, MongoDb, Mongoose, <a href="tachyons.io">Tachyons</a></h3>

<h2>History:</h2>
<p>It's a personal side project i started while i was learning React in 2019. I used to be a part of shared garden, mostly with beginners, and they were all the time asking what they could do. So in orders to help, i used to be a "professional" garden few years ago, i've build this app which provide all year round ideas and knowledge about what to do in the garden regarding of the seasonal work.</p>

<h2>Scenario:</h2>
<p>
 <img src="src/demo.gif"/>
</p>
<p>Just type the name of your city, village in France and with the help of Mapbox Geocoding API and DarkSky API the app provide weatherForcast for today and the next 2 days. It also give you a general idea about the weather for the all coming week. Besides that, a list of "todos" is diplayed and each todo related to a specific crops is clickable and show a card wher you can read all the information about it. There is more than 40 crops described with informations about sowing, planting time and growing techniques</p>

<h3>Todos:</h3>
There is still a lot of thingfs which can be done, like displaying past days amount of rain, weather alert, more detailled infos and drawings about crops and more! Feel free to play with it!
>>>>>>> aef49ffcc6d19bf373d639925d9ca1574b4e5ca2
 
