<h1 align="center"><b>THE SHOPPIES - Movie Awards</b></h1>

<h3 align="center"><b>Frontend Developer
Intern Challenge - Fall 2021</b></h3>


<h4 align="center"> A single page React.js/Express app to track movie nominations.</h4>
<h2 align="center"><b><a href="http://grace-chung-the-shoppies.herokuapp.com/">
 LIVE DEMO </a></b></h2>
<br>  

<h2><b><ins>BUILT WITH</ins></b></h2>

* React.js
* JavaScript
* Node.js
* Express
* HTML5
* CSS3
* FontAwesome
* OMDB API
* React Router DOM

<br>

<h2><b><ins>FEATURES</ins></b></h2>

<h3>Nominate Movies</h3>

![Search](https://imgur.com/FRqx40n.gif)
![Nominate](https://imgur.com/QrN6Q31.gif)

<h3>Remove Nominees</h3>

![Remove](https://imgur.com/B6iJtbK.gif)

<h3>Pagination</h3>

![Pagination](https://imgur.com/jqqYaEn.gif)

<h3>No Search Results & Loading Animation</h3>

![NoResults](https://imgur.com/zSlsJPj.gif)

<h3>Responsiveness</h3>

![Resp1](https://imgur.com/3CA42lv.gif)
![Resp2](https://imgur.com/zBfFVID.gif)


<hr>

<h3><b><ins>Technical Requirements</ins></b></h3>

* Search OMDB and display the results (movies only)
    * Each search result should list at least its title, year of release and a button to nominate
that film.
    * Updates to the search terms and update the result list
    * Nomination button is disabled if search result has already been nominated

* Add movies from the search results to nomination list
* List of films already nominated
* Removal of a nominee from the nomination list
* Displays a banner when the user has 5 nominations

<h3><b><ins>Extra Features</ins></b></h3>

* Landing page
* Search result pagination - previous, next buttons
* Loading animation for search results
* Animation for star when nominated
* Option to clear search bar 
* Search results display additional info: plot, starring actors, ratings and directors
* Banner is displayed when there are no results/error messages
* UI Responsiveness


<h3><b><ins>Developer Notes</ins></b></h3>

* While everything can be done with just the frontend, 
I decided to implement an express server to hide the OMDB's API Key
for security and for best practices.
* Handled duplicate movies api results (ie. pokemon)
* Was going for a simplistic UI, although it would've been nice to implement more subtle animations, 
I kept it at a minimum to prevent the UI feeling chaotic.
* I decided to only show search results when user presses enter in the search bar, rather than show a list of results each time
the user presses a key to reduce the number of pings to the API

<h3><b><ins>Next Steps</ins></b></h3>

* Add a filter for search results and sort them by most recent year or rating
* Implement local storage to save nominations
* Infinite scrolling to render more results instead of pagination