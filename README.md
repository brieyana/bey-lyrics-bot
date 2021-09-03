# **Beyonc&eacute; Lyrics Bot**

## **Overview**
The *Beyonc&eacute; Lyrics Bot* is a Twitter bot that posts lyrics from a randomly chosen Beyonc&eacute; song. I created this bot because I am a *huge* Beyonc&eacute; fan and I think that her musical genius should be shared with the world&mdash;the world being Twitter in this case. I've also always wanted to create a bot so I figured this would be the perfect project. (This is the first project that I have ever completed alone so I'm quite proud of it!)

You can check out the bot on [Twitter](https://twitter.com/beylyricsbot). Feel free to [follow&#32;me](https://twitter.com/BrieTheDev) as well!

## **Features**
The Beyonce Lyrics Bot only utilizes one feature of the Twitter API, which is posting tweets on an account. Currently I have no plans to add any other features to the bot as they would feel unnecessary.

## **API Reference**
To create this bot, I used the [Musix&#32;Match&#32;API](https://developer.musixmatch.com) to retrieve albums, tracks, and lyrics, and the [Twitter&#32;API](https://twitter.com) to post the lyrics onto a Twitter account. I also used [random-number-csprng](https://www.npmjs.com/package/random-number-csprng) to generate secure, random numbers for a better range of song choice.

## **Usage**
### **Prerequisites**
To use the source code, you must have two accounts:
- A Twitter Developer account
- A Musixmatch Developer account

With these accounts you will have access to the necessary resources available on both applications for this program to work as intended.

### **Steps**
1. Download the source code using **git pull** https://github.com/brieyana/bey-lyrics-bot in your computer's terminal.
2. In the project's directory, use **npm install** through the terminal to install the necessary packages.
3. Create a *.env* file to store the information of your Twitter and Musixmatch credentials.
    - For it to work correctly, the names of the variables in the *.env* file must match the ones in the *index.js* file.
4. Change the **artist_id** information in the *index.js* file to the artist ID of your choice, based on the Musixmatch API.
5. All done! You have now completely configured the program to create your own Twitter bot! Now use **node index.js** to run the program and check out what your bot tweeted!





