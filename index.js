/*
to do:
    - check for when track is null
        - if it is null, do not tweet anything
*/


const dotenv = require('dotenv');
const Twitter = require('twitter');
const axios = require('axios');
dotenv.config();

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const musix_api_key = process.env.MUSIX_API_KEY;
const artist_id = 18927;

/**************************************************************** */
class Album {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

class Song {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

const base_url = 'https://api.musixmatch.com/ws/1.1/';

const api_methods = {
    get_albums: `${base_url}artist.albums.get?apikey=${musix_api_key}&artist_id=${artist_id}`,
    get_tracks: `${base_url}album.tracks.get?apikey=${musix_api_key}&album_id=`,
    get_lyrics: `${base_url}track.lyrics.get?apikey=${musix_api_key}&track_id=`
};

let url = api_methods.get_albums;

axios.get(url)
    .then(res => {
        const albums = [];
        const list = res.data.message.body.album_list;

        for (let album of list) {
            let name = album.album.album_name;
            let id = album.album.album_id;
            albums.push(new Album(name, id));
        }

        let album = albums[Math.floor(Math.random() * albums.length)];

        url = api_methods.get_tracks + album.id;

        return axios.get(url);

    })
    .then(res => {
        const track_list = res.data.message.body.track_list;
        let song, name, id, index;

        // check for when track is null

        if (track_list.length === 1) {
            name = track_list[0].track.track_name;
            id = track_list[0].track.track_id;
            song = new Song(name, id);
        }

        else {
            index = Math.floor(Math.random() * track_list.length);
            name = track_list[index].track.track_name;
            id = track_list[index].track.track_id;
            song = new Song(name, id);
        }

        url = api_methods.get_lyrics + song.id;

        return axios.get(url);
    })
    .then(res => {
        const lyrics = res.data.message.body.lyrics;
        let body = lyrics.lyrics_body;
        const stanzas = [];
        let stanza = '';

        for (let char of body) {
            stanza += char;
            if (char == '\n') {
                stanzas.push(stanza);
                stanza = '';
            }
        }

        for (let i = 0; i < stanzas.length; i++) {
            if (stanzas[i] == '\n' && stanzas[i].length == 1) {
                stanzas.splice(i, 1);
            }
        }

        let start = Math.floor(Math.random() * stanzas.length);
        let tweet = stanzas[start] + stanzas[start + 1];
        tweet = tweet.substring(0, tweet.length - 1);

        console.log('success');

        /*
        client.post('statuses/update', { status: tweet }, (err, tweet, res) => {
            if (err)
                throw err;

            console.log(res);
        });
        */
    })
    .catch(err => {
        console.log(err);
    });


