'use strict';

const express = require('express');
const cors = require('cors');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(cors());

app.get('/movies', (req, res) => {
  let json = {
    "results": [
        {
            "popularity": 116.483,
            "vote_count": 478,
            "video": false,
            "poster_path": "/1DPUFG6QnGqzpvEaDEv7TaepycM.jpg",
            "id": 458897,
            "adult": false,
            "backdrop_path": "/a0xTB1vBxMGt6LGG4N7k1wO9lfL.jpg",
            "original_language": "en",
            "original_title": "Charlie's Angels",
            "genre_ids": [
                28,
                12,
                35
            ],
            "title": "Charlie's Angels",
            "vote_average": 6.4,
            "overview": "When a systems engineer blows the whistle on a dangerous technology, Charlie's Angels from across the globe are called into action, putting their lives on the line to protect society.",
            "release_date": "2019-11-14"
        },
        {
            "popularity": 101.121,
            "vote_count": 25,
            "video": false,
            "poster_path": "/4U7hpTK0XTQBKT5X60bKmJd05ha.jpg",
            "id": 570670,
            "adult": false,
            "backdrop_path": "/q5t01d3MBFFsjwRjoS61LxXEEOr.jpg",
            "original_language": "en",
            "original_title": "The Invisible Man",
            "genre_ids": [
                27,
                9648,
                878,
                53
            ],
            "title": "The Invisible Man",
            "vote_average": 7.8,
            "overview": "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
            "release_date": "2020-02-26"
        },
        {
            "popularity": 71.175,
            "vote_count": 491,
            "video": false,
            "poster_path": "/5eNiYMu2GXCtNlDwMcJqKGVwyoX.jpg",
            "id": 448119,
            "adult": false,
            "backdrop_path": "/lG802rseTZcN9mtLsQPVfApEVzM.jpg",
            "original_language": "en",
            "original_title": "Dolittle",
            "genre_ids": [
                12,
                35,
                14,
                10751
            ],
            "title": "Dolittle",
            "vote_average": 6.4,
            "overview": "After losing his wife seven years earlier, the eccentric Dr. John Dolittle, famed doctor and veterinarian of Queen Victoria’s England, hermits himself away behind the high walls of Dolittle Manor with only his menagerie of exotic animals for company. But when the young queen falls gravely ill, a reluctant Dolittle is forced to set sail on an epic adventure to a mythical island in search of a cure, regaining his wit and courage as he crosses old adversaries and discovers wondrous creatures.",
            "release_date": "2020-01-01"
        },
        {
            "popularity": 56.143,
            "vote_count": 21,
            "video": false,
            "poster_path": "/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
            "id": 338762,
            "adult": false,
            "backdrop_path": "/ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg",
            "original_language": "en",
            "original_title": "Bloodshot",
            "genre_ids": [
                28,
                18,
                14,
                878
            ],
            "title": "Bloodshot",
            "vote_average": 6.2,
            "overview": "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine - Bloodshot. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
            "release_date": "2020-02-20"
        },
        {
            "popularity": 54.814,
            "vote_count": 24,
            "video": false,
            "poster_path": "/tIpGQ9uuII7QVFF0GHCFTJFfXve.jpg",
            "id": 555974,
            "adult": false,
            "backdrop_path": "/rpGYHowXtjw37UxdwO1ZcK5E8IN.jpg",
            "original_language": "en",
            "original_title": "Brahms: The Boy II",
            "genre_ids": [
                27,
                9648,
                53
            ],
            "title": "Brahms: The Boy II",
            "vote_average": 6,
            "overview": "After a family moves into the Heelshire Mansion, their young son soon makes friends with a life-like doll called Brahms.",
            "release_date": "2020-02-20"
        },
        {
            "popularity": 53.683,
            "vote_count": 9,
            "video": false,
            "poster_path": "/3VqDLgKLfNYSQYEGC5sjGhcPhn7.jpg",
            "id": 508439,
            "adult": false,
            "backdrop_path": "/bcT8CaBIj086WVD7K529h78eujb.jpg",
            "original_language": "en",
            "original_title": "Onward",
            "genre_ids": [
                12,
                16,
                35,
                14,
                10751
            ],
            "title": "Onward",
            "vote_average": 8,
            "overview": "In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.",
            "release_date": "2020-02-29"
        },
        {
            "popularity": 52.913,
            "vote_count": 148,
            "video": false,
            "poster_path": "/67AVxH8SM5gDUoPFCGfeUg1TuEs.jpg",
            "id": 552178,
            "adult": false,
            "backdrop_path": "/4ZSlTfkHtgTTupCaLbseXQQzZha.jpg",
            "original_language": "en",
            "original_title": "Dark Waters",
            "genre_ids": [
                18
            ],
            "title": "Dark Waters",
            "vote_average": 7.4,
            "overview": "A tenacious attorney uncovers a dark secret that connects a growing number of unexplained deaths due to one of the world's largest corporations. In the process, he risks everything — his future, his family, and his own life — to expose the truth.",
            "release_date": "2019-11-22"
        },
        {
            "popularity": 43.588,
            "vote_count": 3,
            "video": false,
            "poster_path": "/uSO5koo1Af2iBEUkfYt6bqsy7Vr.jpg",
            "id": 457335,
            "adult": false,
            "backdrop_path": "/lEolXbxv14PdZFTw7jZMJQn4lMK.jpg",
            "original_language": "en",
            "original_title": "Guns Akimbo",
            "genre_ids": [
                28,
                35
            ],
            "title": "Guns Akimbo",
            "vote_average": 8.3,
            "overview": "An ordinary guy suddenly finds himself forced to fight a gladiator-like battle for a dark website that streams the violence for viewers. Miles must fight heavily armed Nix and also save his kidnapped ex-girlfriend.",
            "release_date": "2020-02-27"
        },
        {
            "popularity": 32.8,
            "vote_count": 143,
            "video": false,
            "poster_path": "/jNvlqNDnXH8aqBeiBxNNP0wWWO3.jpg",
            "id": 522369,
            "adult": false,
            "backdrop_path": "/yjCW0qLgmyBUuv3KwRkuwy6yfmv.jpg",
            "original_language": "en",
            "original_title": "Sorry We Missed You",
            "genre_ids": [
                18
            ],
            "title": "Sorry We Missed You",
            "vote_average": 7.6,
            "overview": "From the Director of I Daniel Blake (Ken Loach) comes another hard hitting dose of reality. Ricky and his family have been fighting an uphill struggle against debt since the 2008 financial crash. An opportunity to wrestle back some independence appears with a shiny new van and the chance to run a franchise as a self-employed delivery driver. It's hard work, and his wife's job as a carer is no easier. The family unit is strong but when both are pulled in different directions everything comes to breaking point.",
            "release_date": "2019-10-04"
        },
        {
            "popularity": 31.508,
            "vote_count": 271,
            "video": false,
            "poster_path": "/p9vCAVhDK375XyobVcKqzqzsUHE.jpg",
            "id": 501907,
            "adult": false,
            "backdrop_path": "/w0tJot6O0UtLVBRIPAdg3dQ2oNO.jpg",
            "original_language": "en",
            "original_title": "A Beautiful Day in the Neighborhood",
            "genre_ids": [
                18
            ],
            "title": "A Beautiful Day in the Neighborhood",
            "vote_average": 7.3,
            "overview": "An award-winning cynical journalist, Lloyd Vogel, begrudgingly accepts an assignment to write an Esquire profile piece on the beloved television icon Fred Rogers. After his encounter with Rogers, Vogel's perspective on life is transformed.",
            "release_date": "2019-11-22"
        },
        {
            "popularity": 31.115,
            "vote_count": 110,
            "video": false,
            "poster_path": "/coANk5hxXAAAygxIj69YRoyWMvz.jpg",
            "id": 536743,
            "adult": false,
            "backdrop_path": "/MmDgXMjZhD7rSH74mPrQj3uZaI.jpg",
            "original_language": "en",
            "original_title": "Queen & Slim",
            "genre_ids": [
                80,
                18,
                10749
            ],
            "title": "Queen & Slim",
            "vote_average": 7.4,
            "overview": "While on a forgettable first date together in Ohio, a black man and a black woman are pulled over for a minor traffic infraction. The situation escalates, with sudden and tragic results, when the man kills the police officer in self-defense. Terrified and in fear for their lives, the man, a retail employee, and the woman, a criminal defense lawyer, are forced to go on the run. But the incident is captured on video and goes viral, and the couple unwittingly become a symbol of trauma, terror, grief and pain for people across the country.",
            "release_date": "2019-11-27"
        },
        {
            "popularity": 30.293,
            "vote_count": 304,
            "video": false,
            "poster_path": "/3NTEMlG5mQdIAlKDl3AJG0rX29Z.jpg",
            "id": 531428,
            "adult": false,
            "backdrop_path": "/joXf2ToDZjVMBxWrzijQ3V9cC8p.jpg",
            "original_language": "fr",
            "original_title": "Portrait de la jeune fille en feu",
            "genre_ids": [
                18,
                10749
            ],
            "title": "Portrait of a Lady on Fire",
            "vote_average": 8.3,
            "overview": "On an isolated island in Brittany at the end of the eighteenth century, a female painter is obliged to paint a wedding portrait of a young woman.",
            "release_date": "2019-06-17"
        },
        {
            "popularity": 22.403,
            "vote_count": 182,
            "video": false,
            "poster_path": "/zQGzAoYF6lXDN3L9hxBecQRZIwB.jpg",
            "id": 522212,
            "adult": false,
            "backdrop_path": "/zNqsGEWHlXwFw8wod0HDkgrvsl8.jpg",
            "original_language": "en",
            "original_title": "Just Mercy",
            "genre_ids": [
                18,
                36
            ],
            "title": "Just Mercy",
            "vote_average": 8.2,
            "overview": "The powerful true story of Harvard-educated lawyer Bryan Stevenson, who goes to Alabama to defend the disenfranchised and wrongly condemned — including Walter McMillian, a man sentenced to death despite evidence proving his innocence. Bryan fights tirelessly for Walter with the system stacked against them.",
            "release_date": "2019-12-25"
        },
        {
            "popularity": 22.215,
            "vote_count": 12,
            "video": false,
            "poster_path": "/cdqZqIcWt0Ne2Io2OA9iWqqMuCA.jpg",
            "id": 589049,
            "adult": false,
            "backdrop_path": "/kU5qE5b6ksL3osaqKCUlMS08Ays.jpg",
            "original_language": "en",
            "original_title": "The Photograph",
            "genre_ids": [
                18,
                10749
            ],
            "title": "The Photograph",
            "vote_average": 6.8,
            "overview": "When famed photographer Christina Eames dies unexpectedly, she leaves her estranged daughter, Mae, hurt, angry and full of questions. When Mae finds a photograph tucked away in a safe-deposit box, she soon finds herself delving into her mother's early life -- an investigation that leads to an unexpected romance with a rising journalist.",
            "release_date": "2020-02-14"
        },
        {
            "popularity": 19.953,
            "vote_count": 0,
            "video": false,
            "poster_path": "/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg",
            "id": 520763,
            "adult": false,
            "backdrop_path": "/55W4OmZx1tH73KOtYHMJU7uGpy0.jpg",
            "original_language": "en",
            "original_title": "A Quiet Place Part II",
            "genre_ids": [
                18,
                878,
                53
            ],
            "title": "A Quiet Place Part II",
            "vote_average": 0,
            "overview": "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.",
            "release_date": "2020-03-18"
        },
        {
            "popularity": 18.86,
            "vote_count": 218,
            "video": false,
            "poster_path": "/jlHL2BH176JApGiLnNQLQgdjMFd.jpg",
            "id": 443791,
            "adult": false,
            "backdrop_path": "/fYPiQewg7ogbzro2XcCTACSB2KC.jpg",
            "original_language": "en",
            "original_title": "Underwater",
            "genre_ids": [
                27,
                878,
                53
            ],
            "title": "Underwater",
            "vote_average": 6.1,
            "overview": "After an earthquake destroys their underwater station, six researchers must navigate two miles along the dangerous, unknown depths of the ocean floor to make it to safety in a race against time.",
            "release_date": "2020-01-08"
        },
        {
            "popularity": 18.384,
            "vote_count": 1,
            "video": false,
            "poster_path": "/aSAhc0cUxMYyfwtgvC5k5ZQg0zW.jpg",
            "id": 590575,
            "adult": false,
            "backdrop_path": "/5GVUS4NcSawRsunfVwFSImlL3tY.jpg",
            "original_language": "en",
            "original_title": "Beneath Us",
            "genre_ids": [
                18,
                27,
                53
            ],
            "title": "Beneath Us",
            "vote_average": 9,
            "overview": "The American Dream becomes a nightmare for a group of undocumented day laborers hired by a wealthy couple. What they expect to be their biggest payday turns into a terrifying fight for survival.",
            "release_date": "2020-03-06"
        },
        {
            "popularity": 18.041,
            "vote_count": 309,
            "video": false,
            "poster_path": "/iqJhHjD6k6T07waELjMKDpQJUP.jpg",
            "id": 491283,
            "adult": false,
            "backdrop_path": "/hJXxDoCwchAuJ4K3gwtno2chgr8.jpg",
            "original_language": "en",
            "original_title": "Judy",
            "genre_ids": [
                18
            ],
            "title": "Judy",
            "vote_average": 6.9,
            "overview": "Winter 1968 and showbiz legend Judy Garland arrives in Swinging London to perform a five-week sold-out run at The Talk of the Town. It is 30 years since she shot to global stardom in The Wizard of Oz, but if her voice has weakened, its dramatic intensity has only grown. As she prepares for the show, battles with management, charms musicians and reminisces with friends and adoring fans, her wit and warmth shine through. Even her dreams of love seem undimmed as she embarks on a whirlwind romance with Mickey Deans, her soon-to-be fifth husband.",
            "release_date": "2019-09-27"
        },
        {
            "popularity": 17.392,
            "vote_count": 0,
            "video": false,
            "poster_path": "/dWkt2dC0tYm2ZhxuEotXQaNeH7X.jpg",
            "id": 585244,
            "adult": false,
            "backdrop_path": "/rMkheZl9Zi2auEQp877cOWUTCKs.jpg",
            "original_language": "en",
            "original_title": "I Still Believe",
            "genre_ids": [
                18,
                10402
            ],
            "title": "I Still Believe",
            "vote_average": 0,
            "overview": "The true-life story of Christian music star Jeremy Camp and his journey of love and loss that looks to prove there is always hope.",
            "release_date": "2020-03-12"
        },
        {
            "popularity": 16.444,
            "vote_count": 0,
            "video": false,
            "poster_path": "/mOvS65RUUibISMFLuy5iMJLODgX.jpg",
            "id": 514847,
            "adult": false,
            "backdrop_path": "/4MNaZCQI8dSeIQlhMxkjxqPrCvg.jpg",
            "original_language": "en",
            "original_title": "The Hunt",
            "genre_ids": [
                28,
                27,
                53
            ],
            "title": "The Hunt",
            "vote_average": 0,
            "overview": "Twelve strangers wake up in a clearing. They don't know where they are, or how they got there. They don't know they've been chosen - for a very specific purpose - The Hunt.",
            "release_date": "2020-03-13"
        }
    ],
    "page": 1,
    "total_results": 253,
    "dates": {
        "maximum": "2020-03-23",
        "minimum": "2020-03-06"
    },
    "total_pages": 13
}
  res.send(json);
});

app.get('/movies/:id', (req, res) => { 
  res.send('Movie details');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);