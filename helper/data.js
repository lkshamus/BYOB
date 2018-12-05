const artists = [
  {
  artist: 'Queen',
  genre: 'Classic Rock',
  albums: [
    {name: 'Queen', year: 1973},
    {name: 'Queen II', year: 1974},
    {name: 'Sheer Heart Attack', year: 1974},
    {name: 'A Night At The Opera', year: 1975},
    {name: 'A Day At The Races', year: 1976},
    {name: 'News Of The World', year: 1977},
    {name: 'Jazz', year: 1979},
    {name: 'The Game', year: 1980},
    {name: 'Flash Gordon', year: 1980},
    {name: 'Hot Space', year: 1982},
    {name: 'The Works', year: 1984},
    {name: 'A Kind Of Magic', year: 1986},
    {name: 'The Miracle', year: 1989},
    {name: 'Innuendo', year: 1991},
    {name: 'Made in Heaven', year: 1995}
  ]},
  {
    artist: 'Michael Buble', 
    genre: 'Jazz', 
    albums: [
      {name: 'Michael Buble', year: 2003},
      {name: 'Its Time',  year: 2005},
      {name: 'Call Me Irresponsible', year: 2007},
      {name: 'Crazy Love', year: 2009},
      {name: 'Christmas', year: 2011}, 
      {name: 'To Be Loved', year: 2013},
      {name: 'Nobody But Me', year: 2016},
      {name: 'Love', year: 2018}
    ]
  }, 
  {
    artist: 'Travis Scott', 
    genre: 'Hip-Hop', 
    albums: [
      {name: 'Rodeo', year: 2015},
      {name: 'Birds in the Trap Sing McKnight',  year: 2016},
      {name: 'Astroworld', year: 2018}
    ]
  }, 
  {
    artist: 'Imagine Dragons', 
    genre: 'Rock', 
    albums: [
      {name: 'Night Visions', year: 2012},
      {name: 'Smoke and Mirrors',  year: 2015},
      {name: 'Evolve', year: 2017}, 
      {name: 'Origins', year: 2018}
    ]
  }, 
    {
    artist: 'Pentatonix', 
    genre: 'Pop', 
    albums: [
      {name: 'PTX, Vols. 1 & 2', year: 2014},
      {name: 'PTX',  year: 2014},
      {name: 'That\'s Christmas to Me', year: 2014}, 
      {name: 'Pentatonix', year: 2015},
      {name: 'A Pentatonix Christmas', year: 2016},
      {name: 'PTX Presents: Top Pop, Vol. I', year: 2018},
      {name: 'Christmas is Here!', year: 2018}
    ]
  }, 
    {
    artist: 'BTS', 
    genre: 'Pop', 
    albums: [
      {name: 'Dark and Wild', year: 2014},
      {name: 'Wake Up',  year: 2014},
      {name: 'Wings', year: 2016}, 
      {name: 'Youth', year: 2016},
      {name: 'Face Yourself', year: 2018},
      {name: 'Love Yourself: Tear', year: 2018}
    ]
  }, 
    {
    artist: 'Drake', 
    genre: 'Hip-Hop', 
    albums: [
      {name: 'Thank me Later', year: 2010},
      {name: 'Take Care',  year: 2011},
      {name: 'Nothing Was the Sames', year: 2013}, 
      {name: 'Views', year: 2016},
      {name: 'Scorpion', year: 2018}
    ]
  }, 
  {
    artist: 'Post Malone', 
    genre: 'Hip-Hop', 
    albums: [
      {name: 'Stoney', year: 2016},
      {name: 'Beerbongs & Bentleys',  year: 2018}
    ]
  },
  {
    artist: 'Halsey', 
    genre: 'Pop', 
    albums: [
      {name: 'Badlands',  year: 2015},
      {name: 'Hopeless Fountain Kingdom', year: 2017}
    ]
  },
  {
    artist: '6ix9ine', 
    genre: 'Hip-Hop', 
    albums: [
      {name: 'Tekashi69',  year: 2017},
      {name: 'Dummy Boy', year: 2018},
      {name: 'DAY69', year: 2018}
    ]
  },
  {
    artist: 'Panic! At The Disco', 
    genre: 'Rock', 
    albums: [
      {name: 'A Fever You Can\'t Sweat Out',  year: 2005},
      {name: 'Pretty. Odd', year: 2008},
      {name: 'Vices And Virtues', year: 2018},
      {name: 'Too Weird to Live, Too Rare to Die!', year: 2013},
      {name: 'Death of a Bachelor', year: 2016},
      {name: 'Pray for the Wicked', year: 2018}
    ]
  },
  {
    artist: 'Cardi B', 
    genre: 'Hip-Hop', 
    albums: [
      {name: 'Invasion of Privacy',  year: 2018}
    ]
  },
  {
    artist: 'Billie Eilish', 
    genre: 'R&B', 
    albums: [
      {name: 'American Teen',  year: 2017},
      {name: 'Suncity', year: 2018}
    ]
  },
  {
  artist: 'Queen',
  genre: 'Classic Rock',
  albums: [
    {name: 'Queen', year: 1973},
    {name: 'Queen II', year: 1974},
    {name: 'Sheer Heart Attack', year: 1974},
    {name: 'A Night At The Opera', year: 1975},
    {name: 'A Day At The Races', year: 1976},
    {name: 'News Of The World', year: 1977},
    {name: 'Jazz', year: 1979}
    ]
  },
  {
  artist: 'Ariana Grande',
  genre: 'Pop',
  albums: [
    {name: 'Yours Truly', year: 2013},
    {name: 'My Everything', year: 2014},
    {name: 'Dangerous Woman', year: 2016},
    {name: 'Thank U, Next', year: 2018},
    {name: 'Sweetener', year: 2018}
    ] 
  },
  {
    artist: 'Khalid',
    genre: 'R&B',
    albums: [
      {name: 'American Teen', year: 2017},
      {name: 'Suncity', year: 2018}
    ]
  },
  {
    artist: 'Mariah Carey',
    genre: 'hip-hop',
    albums: [
      {name: 'Mariah Carey', year: 1990},
      {name: 'Emotions', year: 1991},
      {name: 'Music Box', year: 1993},
      {name: 'Merry Christman', year: 1994},
      {name: 'Daydream', year: 1995},
      {name: 'Butterfly', year: 1997},
      {name: 'Rainbow', year: 1999},
      {name: 'Glitter', year: 2001},
      {name: 'Charmbracelet', year: 2002},
      {name: 'The Remixes', year: 2003},
      {name: 'The Emancipation of Mimi', year: 2005},
      {name: 'E=MC2', year: 2008},
      {name: 'Memoirs of an Imperfect Angel'}
    ]
  },
  {
    artist: 'Lady Gaga',
    genre: 'pop',
    albums: [
      {name: 'The Fame', year: 2008},
      {name: 'The Fame Monster', year: 2009},
      {name: 'The Remix', year: 2010},
      {name: 'Born This Way', year: 2011},
      {name: 'ARTPOP', year: 2013},
      {name: 'Cheek to Cheek', year: 2014},
      {name: 'Joanne', year: 2016},
      {name: 'A Star Is Born', year: 2018}
    ]
  },
  {
    artist: 'XXXTENTACION',
    genre: 'hip-hop',
    albums: [
      {name: 'Revenge', year: 2017},
      {name: '17', year: 2017},
      {name: '?', year: 2018},
      {name: 'SKINS', year: 2018}
    ]
  },
  {
    artist: 'Lauren Daigle',
    genre: 'Christian music',
    albums: [
      {name: 'How Can It Be', year: 2015},
      {name: 'Behold', year: 2016},
      {name: 'Look Up Child', year: 2018}
    ]
  },
  {
    artist: 'Juice WRLD',
    genre: 'Trap music',
    albums: [
      {name: 'Goodbye & Good Riddance', year: 2018},
      {name: 'Wrld on Drugs', year: 2018},
      {name: 'Bury Me Alive', year: 2018}
    ]
  },
  {
    artist: 'Luke Combs',
    genre: 'Country',
    albums: [
      {name: 'This Ones for You', year: 2017}
    ]
  },
  {
    artist: 'Kane Brown',
    genre: 'Country',
    albums: [
      {name: 'Kane Brown', year: 2017},
      {name: 'Experiment', year: 2018}
    ]
  }, 
  {
    artist: 'Dan + Shay',
    genre: 'Country',
    albums: [
      {name: 'Where It All Began', year: 2014},
      {name: 'Obsessed', year: 2016},
      {name: 'Dan + Shay', year: 2018}
    ]
  },
  {
    artist: 'Ella Mai',
    genre: 'hip-hop',
    albums: [
      {name: 'Ella Mai', year: 2018}
    ]
  },
  {
    artist: 'Ed Sheeran',
    genre: 'Pop',
    albums: [
      {name: '+', year: 2011},
      {name: 'x', year: 2014},
      {name: '÷', year: 2017}
    ]
  },
  {
    artist: 'Lil Baby',
    genre: 'Trap music',
    albums: [
      {name: 'Perfect Timing', year: 2017},
      {name: 'Harder Than Hard', year: 2017},
      {name: '2 The Hard Way', year: 2017},
      {name: 'Too Hard', year: 2017},
      {name: 'Harder Than Ever', year: 2018},
      {name: 'Drip Harder', year: 2018},
      {name: 'Street Gossip', year: 2018}
    ]
  }, 
  {
    artist: 'Trans-Siberian Orchestra',
    genre: 'Symphonic metal',
    albums: [
      {name: 'Christmas Eve and Other Stories', year: 1996},
      {name: 'The Christmas Attic', year: 1998},
      {name: 'Beethovens Last Night', year: 2000},
      {name: 'The Lost Christmas Eve', year: 2004},
      {name: 'Night Castle', year: 2009},
      {name: 'Letters From The Labrinth', year: 2015},
      {name: 'The Ghosts of Christmas Eve', year: 2016}
    ]
  },
  {
    artist: 'Eminem',
    genre: 'hip-hop',
    albums: [
      {name: 'The Slim Shady LP', year: 1999},
      {name: 'The Marshall Mathers LP', year: 2000},
      {name: 'The Eminem Show', year: 2002},
      {name: 'Encore', year: 2004},
      {name: 'Eminem Presents The Re-Up', year: 2006},
      {name: 'Relapse', year: 2009},
      {name: 'Recovery', year: 2010},
      {name: 'The Marshall Mathers LP2', year: 2013},
      {name: 'Revival', year: 2017},
      {name: 'Kamikaze', year: 2018}
    ]
  },
  {
    artist: 'Shawn Mendes',
    genre: 'Pop',
    albums: [
      {name: 'Handwritten', year: 2015},
      {name: 'Illuminate', year: 2016},
      {name: 'Shawn Mendes', year: 2018}
    ]
  },
  {
    artist: 'Kodak Black',
    genre: 'Hip-hop',
    albums: [
      {name: 'Project Baby', year: 2013},
      {name: 'Heart of the Projects', year: 2014},
      {name: 'Institution', year: 2015},
      {name: 'Lil Big Pac', year: 2016},
      {name: 'Painting Pictures', year: 2017},
      {name: 'Project Baby 2: All Grown Up', year: 2017},
      {name: 'Heart Break Kodak', year: 2018}
    ]
  }
]

module.exports = artists
