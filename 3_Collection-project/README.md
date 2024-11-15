# The Collection

- Type of Challenge: `consolidation`
- Duration: `1 day`
- Team challenge: `Solo`
- Deployment strategy: `netlify`

## The challenge

The goal of this project will be to summarize our current knowledge of :

- HTML and CSS
- Responsive design
- Javascript Basics
- The DOM

to create a collection of items. 
This project will be split up in two parts.

---

### What are we going to craft?

Especially since the Covid outbreak, we're all using streaming services such as Spotify, Netflix, Disney+, or even Popcorn Time. We book our holidays on internet with AirBnb, we play games through elaborate clients such as Steam, we care about meaningful reviews on Rotten Tomatoes or IMDB, we can even shop NFTs on online platforms like we would in an art gallery, and many other things...

The common denominator of all those services they all feature a unified stream of content, a **collection** of some sort. In this challenge we are going to split up the work in two parts to try to replicate this.

## Gathering some information

Your first mission will be to gather a list *(Array)* of things you like, could be anything, some examples :

- Music
- Video games
- Movies or series
- Books
- Paintings
- Football players (like those old Panini collectables)
- Recipes


Once you chose **one** of the topics above (or anything else that suits you), it is time to think of items *(Objects)* to put in your collection. You have to come up with **at least 10**  items.

For each of these item you'll have to find relevant information about it *(Properties)*. For example if you make a movie collection, you could come up with :

- The movie title
- Its release date
- Its director
- Some cast members
- A (or multiple) genre(s)
- A short description of the movie
- A link to the trailer
- A picture

You'll need **at least 5 properties** for each object in your Array!


## Translate this to javascript

Once the above step is done, 

Create a `const collection` in your file and structure your data as in the following example.

Something like this would be a good starting point:
```javascript
const collection = [
  {
    name: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    releaseYear: 1994,
    picture: 'link/to/a/picture',
    genre: ['Crime', 'Drama'],
    cast: ['John Travolta', 'Samuel L Jackson', 'Uma Thurman', 'Amanda Plummer']
  },

  // ...
]
```

## 🌱 Must haves

### Translate this into HTML

You'll have to create a card for each object with javascript and populate it with the properties from that same object.

Make your own design, using grid and/or flex techniques, and create the corresponding HTML skeleton and css file (no frameworks).

Once this is done, you'll have to display your collection in a nice, **responsive** way into your html body.

The layout should somewhat look like this

![Desktop version](collection_desktop.png)

![Desktop version](collection_mobile.png)

![Desktop version](collection_card.png)

If you need some inspiration, check out the websites cited in the introduction, or have a look at Behance or Dribble.

## 🌼 Nice to haves

Move your `const collection`from your script.js to a new file called `collection.js` and Import that collection into your script file.

Now that we are aware of events let's pimp our collection and add some interactivity. For example: When hovering on the card, it should increase that card in size and create a darker background over everything else.

Add some filtering: Searchbar that will filter the cards on title names.