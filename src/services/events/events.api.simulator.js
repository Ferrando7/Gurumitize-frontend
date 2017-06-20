
//https://stackoverflow.com/questions/10593337/is-there-any-way-to-create-mongodb-like-id-strings-without-mongodb
const ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) => s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h));

let events = [
    {
        "_id": "56df0ee733c74ce68724c433",
        "id": "771405216",
        "title": "Python Event",
        "year": "Research group",
        "location": "Leipziger Strasse 45",
        "date":'2017-10-15T23:00:00.000Z',
        "date2":'2017-10-15T23:00:00.000Z',
        "time":"21:20",
        "time2":"23:45",
        "mpaa_rating": "PG-13",
        "runtime": 109,
        "critics_consensus": "",
        "release_dates": {
            "theater": "2016-02-05"
        },
        "ratings": {
            "critics_rating": "Rotten",
            "critics_score": 7,
            "audience_rating": "Upright",
            "audience_score": 66
        },
        "synopsis": "Event for solving questions about python",
        "posters": {
            "thumbnail": "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
            "profile": "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
            "detailed": "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
            "original": "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg"
        },
        "actors": [
            {
                "characters": [
                    "Travis Parker"
                ],
                "id": "351527935",
                "name": "Benjamin Walker"
            },
            {
                "characters": [
                    "Liz"
                ],
                "id": "771435801",
                "name": "Noree Victoria"
            },
            {
                "characters": [
                    "Katie"
                ],
                "id": "771796214",
                "name": "Lou Lou Safran"
            },
            {
                "characters": [
                    "Jesse"
                ],
                "id": "771496784",
                "name": "Vance Griswold"
            },
            {
                "characters": [
                    "Alice Vandt"
                ],
                "id": "771687957",
                "name": "Marty Stonerock"
            }
        ],
        "alternate_ids": {
            "imdb": "3797868"
        },
        "links": {
            "self": "//api.rottentomatoes.com/api/public/v1.0/movies/771405216.json",
            "alternate": "//www.rottentomatoes.com/m/the_choice/",
            "cast": "//api.rottentomatoes.com/api/public/v1.0/movies/771405216/cast.json",
            "reviews": "//api.rottentomatoes.com/api/public/v1.0/movies/771405216/reviews.json",
            "similar": "//api.rottentomatoes.com/api/public/v1.0/movies/771405216/similar.json"
        }
    },
    {
        "_id": "56df0ee733c74ce68724c434",
        "id": "771321699",
        "title": "Java meeting",
        "year": "The java group",
        "location": "Oldesloer Strasse 50",
        "date":'2017-12-15T23:00:00.000Z',
        "date2":'2017-10-15T23:00:00.000Z',
        "time":"21:20",
        "time2":"23:45",
        "mpaa_rating": "PG-13",
        "runtime": 136,
        "critics_consensus": "",
        "release_dates": {
            "theater": "2015-12-18"
        },
        "ratings": {
            "critics_rating": "Certified Fresh",
            "critics_score": 92,
            "audience_rating": "Upright",
            "audience_score": 90
        },
        "synopsis": "Is java the most used lenguage around the world? We will see",
        "posters": {
            "thumbnail": "http://resizing.flixster.com/6xF9PyshnlqT6g4OU9xVQFLnr9g=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/20/33/11203306_ori.jpg",
            "profile": "http://resizing.flixster.com/6xF9PyshnlqT6g4OU9xVQFLnr9g=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/20/33/11203306_ori.jpg",
            "detailed": "http://resizing.flixster.com/6xF9PyshnlqT6g4OU9xVQFLnr9g=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/20/33/11203306_ori.jpg",
            "original": "http://resizing.flixster.com/6xF9PyshnlqT6g4OU9xVQFLnr9g=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/20/33/11203306_ori.jpg"
        },
        "actors": [
            {
                "characters": [
                    "Han Solo"
                ],
                "id": "162661579",
                "name": "Harrison Ford"
            },
            {
                "characters": [
                    "Luke Skywalker"
                ],
                "id": "162665747",
                "name": "Mark Hamill"
            },
            {
                "characters": [
                    "Princess Leia"
                ],
                "id": "162663355",
                "name": "Carrie Fisher"
            },
            {
                "characters": [
                    "Chewbacca"
                ],
                "id": "425838884",
                "name": "Peter Mayhew"
            },
            {
                "characters": [
                    "R2-D2"
                ],
                "id": "418638213",
                "name": "Kenny Baker"
            }
        ],
        "alternate_ids": {
            "imdb": "2488496"
        },
        "links": {
            "self": "//api.rottentomatoes.com/api/public/v1.0/movies/771321699.json",
            "alternate": "//www.rottentomatoes.com/m/star_wars_episode_vii_the_force_awakens/",
            "cast": "//api.rottentomatoes.com/api/public/v1.0/movies/771321699/cast.json",
            "reviews": "//api.rottentomatoes.com/api/public/v1.0/movies/771321699/reviews.json",
            "similar": "//api.rottentomatoes.com/api/public/v1.0/movies/771321699/similar.json"
        }
    },
    {
        "_id": "56df0ee733c74ce68724c435",
        "id": "771379020",
        "title": "The Angular Reunion",
        "year": "Angular/react group",
        "location": "Rudolstaedter Strasse 33",
        "date":'2017-09-15T23:00:00.000Z',
        "date2":'2017-10-15T23:00:00.000Z',
        "time":"21:20",
        "time2":"23:45",
        "mpaa_rating": "R",
        "runtime": 156,
        "critics_consensus": "",
        "release_dates": {
            "theater": "2015-12-25"
        },
        "ratings": {
            "critics_rating": "Certified Fresh",
            "critics_score": 82,
            "audience_rating": "Upright",
            "audience_score": 86
        },
        "synopsis": "Proves that angular is way much better than react. Angular 1  React 0",
        "posters": {
            "thumbnail": "http://resizing.flixster.com/uvN0TdOZWOZwM6mMe903tVFVyHI=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/20/35/11203523_ori.jpg",
            "profile": "http://resizing.flixster.com/uvN0TdOZWOZwM6mMe903tVFVyHI=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/20/35/11203523_ori.jpg",
            "detailed": "http://resizing.flixster.com/uvN0TdOZWOZwM6mMe903tVFVyHI=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/20/35/11203523_ori.jpg",
            "original": "http://resizing.flixster.com/uvN0TdOZWOZwM6mMe903tVFVyHI=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/20/35/11203523_ori.jpg"
        },
        "actors": [
            {
                "characters": [
                    "Hugh Glass"
                ],
                "id": "162659161",
                "name": "Leonardo DiCaprio"
            },
            {
                "characters": [
                    "John Fitzgerald"
                ],
                "id": "391527059",
                "name": "Tom Hardy"
            },
            {
                "characters": [
                    "Andrew Henry"
                ],
                "id": "770702167",
                "name": "Domhnall Gleeson"
            },
            {
                "characters": [
                    "Jim Bridger"
                ],
                "id": "770791291",
                "name": "Will Poulter"
            },
            {
                "characters": [
                    "Hawk"
                ],
                "id": "771746382",
                "name": "Forrest Goodluck"
            }
        ],
        "alternate_ids": {
            "imdb": "1663202"
        },
        "links": {
            "self": "//api.rottentomatoes.com/api/public/v1.0/movies/771379020.json",
            "alternate": "//www.rottentomatoes.com/m/the_revenant_2015/",
            "cast": "//api.rottentomatoes.com/api/public/v1.0/movies/771379020/cast.json",
            "reviews": "//api.rottentomatoes.com/api/public/v1.0/movies/771379020/reviews.json",
            "similar": "//api.rottentomatoes.com/api/public/v1.0/movies/771379020/similar.json"
        }
    },
    {
        "_id": "56df0ee733c74ce68724c440",
        "id": "771306093",
        "title": "Imperative vs functional programing",
        "year": "Which one is better group",
        "location": "Brandenburgische Strasse 3",
        "date":'2017-12-15T23:00:00.000Z',
        "date2":'2017-10-15T23:00:00.000Z',
        "time":"21:20",
        "time2":"23:45",
        "mpaa_rating": "PG",
        "runtime": 100,
        "critics_consensus": "",
        "release_dates": {
            "theater": "2015-11-25",
            "dvd": "2016-02-23"
        },
        "ratings": {
            "critics_rating": "Certified Fresh",
            "critics_score": 77,
            "audience_rating": "Upright",
            "audience_score": 69
        },
        "synopsis": "Which one is better? Each side will fight if it's needed",
        "posters": {
            "thumbnail": "http://resizing.flixster.com/QPxjgHkOs9puYxQDL5P-WA65ONc=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/20/70/11207072_ori.jpg",
            "profile": "http://resizing.flixster.com/QPxjgHkOs9puYxQDL5P-WA65ONc=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/20/70/11207072_ori.jpg",
            "detailed": "http://resizing.flixster.com/QPxjgHkOs9puYxQDL5P-WA65ONc=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/20/70/11207072_ori.jpg",
            "original": "http://resizing.flixster.com/QPxjgHkOs9puYxQDL5P-WA65ONc=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/20/70/11207072_ori.jpg"
        },
        "actors": [
            {
                "characters": [
                    "Arlo"
                ],
                "id": "770829316",
                "name": "Raymond Ochoa"
            },
            {
                "characters": [
                    "Poppa"
                ],
                "id": "162653065",
                "name": "Jeffrey Wright"
            },
            {
                "characters": [
                    "Momma"
                ],
                "id": "162654734",
                "name": "Frances McDormand"
            },
            {
                "characters": [
                    "Thunderclap"
                ],
                "id": "162652352",
                "name": "Steve Zahn"
            },
            {
                "characters": [
                    "Nash"
                ],
                "id": "326392926",
                "name": "A.J. Buckley"
            }
        ],
        "alternate_ids": {
            "imdb": "1979388"
        },
        "links": {
            "self": "//api.rottentomatoes.com/api/public/v1.0/movies/771306093.json",
            "alternate": "//www.rottentomatoes.com/m/the_good_dinosaur/",
            "cast": "//api.rottentomatoes.com/api/public/v1.0/movies/771306093/cast.json",
            "reviews": "//api.rottentomatoes.com/api/public/v1.0/movies/771306093/reviews.json",
            "similar": "//api.rottentomatoes.com/api/public/v1.0/movies/771306093/similar.json"
        }
    }
];

export default class EventsAPISimulator {
    constructor(){}

    static getEventsAsync () {
        return new Promise((resolve, reject) => {
            // We call resolve(...) when what we were doing made async successful, and reject(...) when it failed.
            // In this example, we use setTimeout(...) to simulate async code.
            // In reality, you will probably be using something like XHR or an HTML5 API.
            setTimeout(function(){
                let response = { data: [...events] };
                resolve(response); // Yay! Everything went well!
            }, 250);
        });

    };


    static getEventByIdAsync (id) {
        return new Promise((resolve, reject) => {
            // We call resolve(...) when what we were doing made async successful, and reject(...) when it failed.
            // In this example, we use setTimeout(...) to simulate async code.
            // In reality, you will probably be using something like XHR or an HTML5 API.
            setTimeout(function(){

                let event = {};
                let eventIndex = events.map(event => event['_id']).indexOf(id);
                if (eventIndex > -1) event = events[eventIndex];

                let response = { data: Object.assign({},event)};
                resolve(response); // Yay! Everything went well!
            }, 250);
        });

    };

    static createEvent (event) {
        return new Promise((resolve, reject) => {
            // We call resolve(...) when what we were doing made async successful, and reject(...) when it failed.
            // In this example, we use setTimeout(...) to simulate async code.
            // In reality, you will probably be using something like XHR or an HTML5 API.
            setTimeout(function(){

                let _event  = Object.assign({},event, {'_id': ObjectId()});
                events.push(_event);

                let response = { data: _event };
                resolve(response); // Yay! Everything went well!
            }, 250);
        });


    };

    static deleteEvent (id) {
        return new Promise((resolve, reject) => {
            // We call resolve(...) when what we were doing made async successful, and reject(...) when it failed.
            // In this example, we use setTimeout(...) to simulate async code.
            // In reality, you will probably be using something like XHR or an HTML5 API.
            setTimeout(function(){

                let eventIndex = events.map(event => event['_id']).indexOf(id);
                events.splice(eventIndex,1); //Mutation


                let response = { status: 200 };
                resolve(response); // Yay! Everything went well!
            }, 250);
        });

    };

    static updateEvent (event) {
        return new Promise((resolve, reject) => {
            // We call resolve(...) when what we were doing made async successful, and reject(...) when it failed.
            // In this example, we use setTimeout(...) to simulate async code.
            // In reality, you will probably be using something like XHR or an HTML5 API.
            setTimeout(function(){

                let eventIndex = events.map(_event => _event['_id']).indexOf(event['_id']);
                events[eventIndex] =  Object.assign({},events[eventIndex], event);

                let response = { data: events[eventIndex] };
                resolve(response); // Yay! Everything went well!
            }, 250);
        });

    };


}



