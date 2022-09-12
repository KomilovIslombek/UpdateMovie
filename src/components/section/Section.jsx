import React from 'react';
import { useContext } from 'react';
import { useRef } from 'react';
import status from '../../images/status.png';
import strawbery from '../../images/strawbery.png';
import { Context } from '../context/Context';
// import data from '../data/movies';
import './Section.css';

const Section = () => {
    const { orders, setOrders } = useContext(Context);
    var movie = [
        {
          "Title": "Patton Oswalt: Annihilation",
          "fulltitle": "Patton Oswalt: Annihilation (2017)",
          "movie_year": 2017,
          "Categories": "Uncategorized",
          "summary": "Patton Oswald, despite a personal tragedy, produces his best standup yet. Focusing on the tribulations of the Trump era and life after the loss of a loved one, Patton Oswald continues his journey to contribute joy to the world.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Patton-Oswalt-Annihilation-Movie-Poster.jpg",
          "imdb_id": "tt7026230",
          "imdb_rating": 7.4,
          "runtime": 66,
          "language": "English",
          "ytid": "4hZi5QaMBFc"
        },
        {
          "Title": "New York Doll",
          "fulltitle": "New York Doll (2005)",
          "movie_year": 2005,
          "Categories": "Documentary|Music",
          "summary": "A recovering alcoholic and recently converted Mormon, Arthur \"Killer\" Kane, of the rock band The New York Dolls, is given a chance at reuniting with his band after 30 years.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/New-York-Doll-Movie-Poster.jpg",
          "imdb_id": "tt0436629",
          "imdb_rating": 7.9,
          "runtime": 75,
          "language": "English",
          "ytid": "jwD04NsnLLg"
        },
        {
          "Title": "Mickey's Magical Christmas: Snowed in at the House of Mouse",
          "fulltitle": "Mickey's Magical Christmas: Snowed in at the House of Mouse (2001)",
          "movie_year": 2001,
          "Categories": "Adventure|Animation|Comedy|Family|Fantasy",
          "summary": "After everyone is snowed in at the House of Mouse, Mickey suggests they throw their own Christmas party. Everyone is happy, except for Donald who just isn't in to the Christmas spirit. So Mickey shows a series of cartoons that show just what Christmas is all about. It features a star studded cast of Disney characters from everyone's favorite animated Disney movies.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Mickeys-Magical-Christmas-Snowed-in-at-the-House-of-Mouse-Movie-Poster.jpg",
          "imdb_id": "tt0300195",
          "imdb_rating": 6.8,
          "runtime": 65,
          "language": "English",
          "ytid": "uCKwHHftrU4"
        },
        {
          "Title": "Mickey's House of Villains",
          "fulltitle": "Mickey's House of Villains (2001)",
          "movie_year": 2001,
          "Categories": "Animation|Comedy|Family|Fantasy|Horror",
          "summary": "The villains from the popular animated Disney films are gathered at the House of Mouse with plans to take over. Soon, the villains take over the house and kick out Mickey, Donald and Goofy. It's all up to Mickey and his friends to overthrow evil and return the House of Mouse to normal--or as close to normal as it get's.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Mickeys-House-of-Villains-Movie-Poster.jpg",
          "imdb_id": "tt0329374",
          "imdb_rating": 6.6,
          "runtime": 0,
          "language": "English",
          "ytid": "JA03ciYt-Ek"
        },
        {
          "Title": "And Then I Go",
          "fulltitle": "And Then I Go (2017)",
          "movie_year": 2017,
          "Categories": "Drama",
          "summary": "In the cruel world of junior high, Edwin suffers in a state of anxiety and alienation alongside his only friend, Flake. Misunderstood by their families and demoralized at school daily, their fury simmers quietly until an idea for vengeance offers them a terrifying release. Based on the acclaimed novel \"Project X\" by Jim Shepard, this unflinching look at adolescence explores how the powerful bonds of childhood friendship and search for belonging can become a matter of life or death.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/And-Then-I-Go-Movie-Poster.jpg",
          "imdb_id": "tt2018111",
          "imdb_rating": 7.6,
          "runtime": 99,
          "language": "English",
          "ytid": "8CdIiD6-iF0"
        },
        {
          "Title": "An Extremely Goofy Movie",
          "fulltitle": "An Extremely Goofy Movie (2000)",
          "movie_year": 2000,
          "Categories": "Animation|Comedy|Family|Sport",
          "summary": "It's a big time in Max's life. He's college bound with his friends and finally free of his embarrassing father as he strives to be a top contender for the X-Games. Unfortunately, Goofy loses his job and learns that he cannot get another job without a college degree. To his son's mortification, Goofy decides to join him in his campus to get that degree. Desperate to distract his father, Max talks him into joining the competing Gamma Fraternity team and introduces him to a wonderful librarian who shares his nostalgic love for 1970's pastimes. Unfortunately, things do not go according to plan as events put this father-son relationship to the test.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/An-Extremely-Goofy-Movie-Movie-Poster.jpg",
          "imdb_id": "tt0208185",
          "imdb_rating": 6.4,
          "runtime": 79,
          "language": "English",
          "ytid": "H8oSvldAGfg"
        },
        {
          "Title": "Peter Rabbit",
          "fulltitle": "Peter Rabbit (2018)",
          "movie_year": 2018,
          "Categories": "Adventure|Animation|Comedy|Family|Fantasy",
          "summary": "Based on the books by Beatrix Potter: Peter Rabbit (James Corden;) his three sisters: Flopsy (Margot Robbie,) Mopsy (Elizabeth Debicki) and Cotton Tail (Daisy Ridley) and their cousin Benjamin (Colin Moody) enjoy their days harassing Mr McGregor in his vegetable garden. Until one day he dies and no one can stop them roaming across his house and lands for a full day or so. However, when one of Mr McGregor's relatives inherits the house and goes to check it out, he finds much more than he bargained for. What ensues, is a battle of wills between the new Mr McGregor and the rabbits. But when he starts to fall in love with Bea (Rose Byrne,) a real lover of all nature, his feelings towards them begin to change. But is it too late?",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Peter-Rabbit-Movie-Poster.jpg",
          "imdb_id": "tt5117670",
          "imdb_rating": 6.6,
          "runtime": 95,
          "language": "English",
          "ytid": "7Pa_Weidt08"
        },
        {
          "Title": "Love Songs",
          "fulltitle": "Love Songs (2007)",
          "movie_year": 2007,
          "Categories": "Uncategorized",
          "summary": "Julie's boyfriend Ismaël lives with her; rather than worry about the time he spends with his colleague Alice, Julie invites Alice to join them. The three walk the streets of Paris, party, read, and sleep together. Sometimes it's lighthearted, sometimes there are jealousies. Then death strikes. In various ways, those left come to terms with the departure and absence of a loved one: showing concern, eating together, attempting new relationships, trying to \"be there\" for the other. Then, the spirit returns and new commitments are possible. The romantic elements of musical comedy play in contrast to the ambivalence of the lyrics and the story.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Love-Songs-Movie-Poster.jpg",
          "imdb_id": "tt0996605",
          "imdb_rating": 7.2,
          "runtime": 91,
          "language": "English",
          "ytid": "s54vpKAFmS0"
        },
        {
          "Title": 89,
          "fulltitle": "89 (2017)",
          "movie_year": 2017,
          "Categories": "Uncategorized",
          "summary": "89 tells the incredible story of one of football's greatest triumphs: when against all odds Arsenal snatched the Championship title from Liverpool at Anfield in the last minute of the last game of the 1988/89 season. It's a universal tale of a band of brothers who, led by a charismatic and deeply respected manager, came together to defy the odds and create history. Mixing archive and previously unseen footage with revealing interviews, insights and memories from the original squad, game officials, famous fans and the people who were there on the night this is the definitive account of a watershed moment in football and a must-watch for any sports fan.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/89-Movie-Poster.jpg",
          "imdb_id": "tt7614404",
          "imdb_rating": 8.1,
          "runtime": 91,
          "language": "English",
          "ytid": "5hfAExhHTMM"
        },
        {
          "Title": "The Foster Boy",
          "fulltitle": "The Foster Boy (2011)",
          "movie_year": 2011,
          "Categories": "Drama",
          "summary": "The illegitimate orphan child, 12-year-old Max, is sold by the local minister for a basket of food to the Bösiger family, who own a mountain farm. Max' initial hope of finally finding a loving home is brutally shattered: The farmer and his wife treat Max like livestock, and their son Jacob humiliates and abuses him. Only the local teacher notices the child suffering on the farm.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/The-Foster-Boy-Movie-Poster.jpg",
          "imdb_id": "tt2057931",
          "imdb_rating": 7.4,
          "runtime": 107,
          "language": "English",
          "ytid": "E9Qv_XVJ-js"
        },
        {
          "Title": "Forever My Girl",
          "fulltitle": "Forever My Girl (2018)",
          "movie_year": 2018,
          "Categories": "Drama|Music|Romance",
          "summary": "After being gone for a decade a country star returns home to the love he left behind.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Forever-My-Girl-Movie-Poster.jpg",
          "imdb_id": "tt4103724",
          "imdb_rating": 6.4,
          "runtime": 108,
          "language": "English",
          "ytid": "3vqcMr1q5Uc"
        },
        {
          "Title": "Tom Segura: Disgraceful",
          "fulltitle": "Tom Segura: Disgraceful (2018)",
          "movie_year": 2018,
          "Categories": "Comedy|Documentary",
          "summary": "Comedian Tom Segura rants about funny things about pop culture and the way of living in 2018.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Tom-Segura-Disgraceful-Movie-Poster.jpg",
          "imdb_id": "tt7379330",
          "imdb_rating": 7.5,
          "runtime": 0,
          "language": "English",
          "ytid": "kYYINJM3lPA"
        },
        {
          "Title": "The Secret Rules of Modern Living: Algorithms",
          "fulltitle": "The Secret Rules of Modern Living: Algorithms (2015)",
          "movie_year": 2015,
          "Categories": "Documentary",
          "summary": "Professor Marcus du Sautoy demystifies the hidden world of algorithms and reveals where these 2,000-year-old problem solvers came from, how they work, and what they have achieved.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/The-Secret-Rules-of-Modern-Living-Algorithms-Movie-Poster.jpg",
          "imdb_id": "tt5818010",
          "imdb_rating": 7.5,
          "runtime": 58,
          "language": "English",
          "ytid": "hpyxmT6KSvw"
        },
        {
          "Title": "Secrets in the Fall",
          "fulltitle": "Secrets in the Fall (2015)",
          "movie_year": 2015,
          "Categories": "Family",
          "summary": "Nothing is impossible for a group of young campers, friends and enemies alike, on a weekend retreat at Camp Pinnacle. But what starts as an exciting wilderness adventure turns into trouble when a young camper goes missing and the rest of the group must set out to find him. The campers are forced to overcome their differences and band together to re-claim their weekend and make it out of the woods before dark!",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Secrets-in-the-Fall-Movie-Poster.jpg",
          "imdb_id": "tt2522908",
          "imdb_rating": 7.3,
          "runtime": 0,
          "language": "English",
          "ytid": "eMVw1pHVMAw"
        },
        {
          "Title": "Silent Night",
          "fulltitle": "Silent Night (2017)",
          "movie_year": 2017,
          "Categories": "Comedy|Drama",
          "summary": "Adam unexpectedly visits his family house at Christmas after a few years of working abroad. No family member knows about his secret plans and the real reasons of his visit.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Silent-Night-Movie-Poster.jpg",
          "imdb_id": "tt7133554",
          "imdb_rating": 7.5,
          "runtime": 100,
          "language": "English",
          "ytid": "cA6BUYVkQoE"
        },
        {
          "Title": "Suicide Squad: Hell to Pay",
          "fulltitle": "Suicide Squad: Hell to Pay (2018)",
          "movie_year": 2018,
          "Categories": "Action|Animation",
          "summary": "Task Force X targets a powerful mystical object that they will risk their lives to steal.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Suicide-Squad-Hell-to-Pay-Movie-Poster.jpg",
          "imdb_id": "tt7167602",
          "imdb_rating": 7.2,
          "runtime": 86,
          "language": "English",
          "ytid": "EPZZvk-wbGE"
        },
        {
          "Title": "Wildling",
          "fulltitle": "Wildling (2018)",
          "movie_year": 2018,
          "Categories": "Fantasy|Horror",
          "summary": "Anna spends her entire childhood under the care of a mysterious man she only knows as Daddy. He keeps her locked in an attic making her fear the Wildling, a child-eating monster that roams the outside. At age 16, Anna is freed by small-town sheriff Ellen Cooper who helps her start a new life as a normal teenager. But as Anna's body begins to blossom, her childhood nightmares return with a vengeance, leading to the conclusion of a terrifying secret.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Wildling-Movie-Poster.jpg",
          "imdb_id": "tt5085924",
          "imdb_rating": 6.1,
          "runtime": 92,
          "language": "English",
          "ytid": "eyl1Wf90AgY"
        },
        {
          "Title": "The Humanity Bureau",
          "fulltitle": "The Humanity Bureau (2017)",
          "movie_year": 2017,
          "Categories": "Action|Sci-Fi",
          "summary": "A dystopian thriller set in the year 2030 that sees the world in a permanent state of economic recession and facing serious environmental problems as a result of global warming.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/The-Humanity-Bureau-Movie-Poster.jpg",
          "imdb_id": "tt6143568",
          "imdb_rating": 6.1,
          "runtime": 95,
          "language": "English",
          "ytid": "kUH8JGhRzPY"
        },
        {
          "Title": "Farewell Ferris Wheel",
          "fulltitle": "Farewell Ferris Wheel (2016)",
          "movie_year": 2016,
          "Categories": "Documentary|Drama|News",
          "summary": "Farewell, Ferris Wheel examines the link between America's carnival industry and a small Mexican town that legally provides one third of the carnival's labor. However, increased regulations are compromising this longstanding connection, putting both the industry and its workers in jeopardy.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Farewell-Ferris-Wheel-Movie-Poster.jpg",
          "imdb_id": "tt2349677",
          "imdb_rating": 7.4,
          "runtime": 72,
          "language": "English",
          "ytid": "-K2m6AKNB-g"
        },
        {
          "Title": "Don't Talk to Irene",
          "fulltitle": "Don't Talk to Irene (2017)",
          "movie_year": 2017,
          "Categories": "Comedy",
          "summary": "Irene must endure 2 weeks of community service at a retirement home. Following her passion for cheerleading, she secretly signs up the senior residents to audition for a dance-themed reality show to prove that you don't need to be physically \"perfect\" to be perfectly AWESOME.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Dont-Talk-to-Irene-Movie-Poster.jpg",
          "imdb_id": "tt5030452",
          "imdb_rating": 6.4,
          "runtime": 90,
          "language": "English",
          "ytid": "lK48UxWuUho"
        },
        {
          "Title": "Blood Road",
          "fulltitle": "Blood Road (2017)",
          "movie_year": 2017,
          "Categories": "Documentary|History|Sport",
          "summary": "The mysteries surrounding her father's death in the Vietnam war lead ultra-endurance mountain biker Rebecca Rusch on an emotional journey as she pedals 1200 miles of the Ho Chi Minh trail.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Blood-Road-Movie-Poster.jpg",
          "imdb_id": "tt6900092",
          "imdb_rating": 6.9,
          "runtime": 96,
          "language": "English",
          "ytid": "XCzVqiN950M"
        },
        {
          "Title": "Andre the Giant",
          "fulltitle": "Andre the Giant (2018)",
          "movie_year": 2018,
          "Categories": "Documentary",
          "summary": "A look at the life and career of professional wrestler André Roussimoff, who gained notoriety in the 1980s as Andre the Giant.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Andre-the-Giant-Movie-Poster.jpg",
          "imdb_id": "tt6543420",
          "imdb_rating": 8.2,
          "runtime": 85,
          "language": "English",
          "ytid": "f_jTeuajas0"
        },
        {
          "Title": "Dead on Arrival",
          "fulltitle": "Dead on Arrival (2017)",
          "movie_year": 2017,
          "Categories": "Thriller",
          "summary": "A pharmaceutical sales rep visits a small town in Louisiana on business. He finds himself in a dark world of corruption and murder with 24 hours to live, running from the police, the mob and a sheriff that wants him dead.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Dead-on-Arrival-Movie-Poster.jpg",
          "imdb_id": "tt5903088",
          "imdb_rating": 6.9,
          "runtime": 97,
          "language": "English",
          "ytid": "8jJ-kC-rq0Q"
        },
        {
          "Title": "Big Time",
          "fulltitle": "Big Time (2017)",
          "movie_year": 2017,
          "Categories": "Documentary",
          "summary": "Bjarke Ingels started out as a young man dreaming of creating cartoons. Now, he has been named \"one of architecture's biggest innovators\" by The Wall Street Journal and one of The 100 Most Influential People on the planet by TIME Magazine. BIG TIME follows Bjarke during the course of 7 years (2009-2016), while he struggles to finish his biggest project so far. We are let into Bjarke's creative processes as well as the endless compromises that his work entails, and we are on the side when his personal life starts putting pressure on him, too. In addition to the recently opened architectural marvel VIA 57 West (625 West 57th Street), Bjarke Ingels' company Bjarke Ingels Group (BIG) was given the task of designing and building one of the skyscrapers which will replace Two World Trade Center in Manhattan. While Bjarke is creating these buildings, which will change the New York skyline, he is hit by health-related issues. The Film offers an intimate look into the innovative and ambitious ...",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Big-Time-Movie-Poster.jpg",
          "imdb_id": "tt7630164",
          "imdb_rating": 6.2,
          "runtime": 93,
          "language": "English",
          "ytid": "VK0mGdMKMW4"
        },
        {
          "Title": "Adventures in Babysitting",
          "fulltitle": "Adventures in Babysitting (2016)",
          "movie_year": 2016,
          "Categories": "Adventure|Comedy|Family",
          "summary": "Two teen rival babysitters, Jenny and Lola, team up to hunt down one of their kids who accidentally runs away into the big city without any supervision.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Adventures-in-Babysitting-Movie-Poster.jpg",
          "imdb_id": "tt4456850",
          "imdb_rating": 6.1,
          "runtime": 105,
          "language": "English",
          "ytid": "BbTTXUMVTTU"
        },
        {
          "Title": "Banana in a Nutshell",
          "fulltitle": "Banana in a Nutshell (2005)",
          "movie_year": 2005,
          "Categories": "Documentary",
          "summary": "An intimate portrait of a Chinese-European couple in New Zealand, and their journey to get a blessing for marriage from traditional Chinese parents.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Banana-in-a-Nutshell-Movie-Poster.jpg",
          "imdb_id": "tt1537196",
          "imdb_rating": 6.6,
          "runtime": 0,
          "language": "English",
          "ytid": "6vgD78Z6ut4"
        },
        {
          "Title": "Hostiles",
          "fulltitle": "Hostiles (2017)",
          "movie_year": 2017,
          "Categories": "Adventure|Drama|Western",
          "summary": "In 1892, after nearly two decades of fighting the Cheyenne, the Apache, and the Comanche natives, the United States Cavalry Captain and war hero, Joseph Blocker, is ordered to escort the ailing Cheyenne chief, Yellow Hawk--his most despised enemy--to his ancestral home in Montana's Valley of the Bears. Nauseated with a baleful anger, Joseph's unwelcome final assignment in the feral American landscape is further complicated, when the widowed settler, Rosalie Quaid, is taken in by the band of soldiers, as aggressive packs of marauding Comanches who are still on the warpath, are thirsty for blood. In a territory crawling with hostiles, can the seasoned Captain do his duty one last time?",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Hostiles-Movie-Poster.jpg",
          "imdb_id": "tt5478478",
          "imdb_rating": 7.3,
          "runtime": 134,
          "language": "English",
          "ytid": "1M5cj4UmscE"
        },
        {
          "Title": "Maze Runner: The Death Cure",
          "fulltitle": "Maze Runner: The Death Cure (2018)",
          "movie_year": 2018,
          "Categories": "Action|Sci-Fi|Thriller",
          "summary": "In the epic finale to The Maze Runner Saga, Thomas leads his group of escaped Gladers on their final and most dangerous mission yet. To save their friends, they must break into the legendary last city, a WCKD controlled labyrinth that may turn out to be the deadliest maze of all. Anyone who makes it out alive will get the answers to the questions the Gladers have been asking since they first arrived in the maze. Will Thomas and the crew make it out alive? Or will Ava Paige get her way?",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Maze-Runner-The-Death-Cure-Movie-Poster.jpg",
          "imdb_id": "tt4500922",
          "imdb_rating": 6.5,
          "runtime": 141,
          "language": "English",
          "ytid": "wnE_y4vN9nQ"
        },
        {
          "Title": "Den of Thieves",
          "fulltitle": "Den of Thieves (2018)",
          "movie_year": 2018,
          "Categories": "Action|Crime|Drama|Mystery|Thriller",
          "summary": "A gritty L.A crime saga which follows the intersecting and often personally connected lives of an elite unit of the LA County Sheriff's Dept. and the state's most successful bank robbery crew as the outlaws plan a seemingly impossible heist on the Federal Reserve Bank of downtown Los Angeles.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Den-of-Thieves-Movie-Poster.jpg",
          "imdb_id": "tt1259528",
          "imdb_rating": 7,
          "runtime": 140,
          "language": "English",
          "ytid": "FKd_ks0rdAM"
        },
        {
          "Title": "V.I.P.",
          "fulltitle": "V.I.P. (2017)",
          "movie_year": 2017,
          "Categories": "Action|Crime|Thriller",
          "summary": "The son (Lee Jong-Suk) of a high-ranking North Korean official is suspected of committing serial murders around the world. To stop the killer, South Korea, North Korea and Interpol chase after him.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/V.I.P.-Movie-Poster.jpg",
          "imdb_id": "tt6413410",
          "imdb_rating": 6.4,
          "runtime": 128,
          "language": "English",
          "ytid": "dwRkl2BjtGQ"
        },
        {
          "Title": "Walk Hard: The Dewey Cox Story",
          "fulltitle": "Walk Hard: The Dewey Cox Story (2007)",
          "movie_year": 2007,
          "Categories": "Comedy|Music",
          "summary": "The up-and-down-and-up-again story of musician Dewey Cox, whose songs would change a nation. On his rock 'n roll spiral, Cox sleeps with 411 women, marries three times, has 36 kids, stars in his own 70s TV show, collects friends ranging from Elvis to the Beatles to a chimp, and gets addicted to - and then kicks - every drug known to man; but despite it all, Cox grows into a national icon and eventually earns the love of a good woman - longtime backup singer Darlene.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Walk-Hard-The-Dewey-Cox-Story-Movie-Poster.jpg",
          "imdb_id": "tt0841046",
          "imdb_rating": 6.8,
          "runtime": 96,
          "language": "English",
          "ytid": "4yzjtnj8Y3U"
        },
        {
          "Title": "Freaky Friday",
          "fulltitle": "Freaky Friday (2003)",
          "movie_year": 2003,
          "Categories": "Comedy|Family|Fantasy|Music|Romance",
          "summary": "The wide generation gap between Tess Coleman and her teenage daughter Anna is more than evident. They simply cannot understand each other's preferences. On a Thursday night they have a big argument in a Chinese restaurant. Both receive a fortune cookie each from the restaurant owner's mother which causes them to switch bodies next day. As they adjust with their new personalities, they begin to understand each other more and eventually it's the mutual self-respect that sorts the things out.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Freaky-Friday-Movie-Poster.jpg",
          "imdb_id": "tt0322330",
          "imdb_rating": 6.2,
          "runtime": 97,
          "language": "English",
          "ytid": "obOyYTto5Sg"
        },
        {
          "Title": "Perfect Strangers",
          "fulltitle": "Perfect Strangers (2017)",
          "movie_year": 2017,
          "Categories": "Comedy",
          "summary": "In the same night that happens a blood red moon, some longtime friends reunite to dinner: the group is formed by plastic surgeon Alfonso and his wife, psychologist Eva, who are the hosts of the dinner; lawyers Antonio and his wife Ana; taxi driver Eduardo and his young and recent wife, veterinary Blanca; and finally Pepe, a former gym teacher actually unemployed, who surprisingly appears without Lucía, his recent girlfriend. Motivated by Blanca, who have some suspects about the group by the behaviors of some of them, she proposes a game where all diners leave their cell phones on the table, at the condition to say to everyone the contents of all text and voice messages. Starting like an innocent game, the progressive revelation of secrets as they appear cause a series the events each time more dramatics: Alfonso suspects that Eva has an affair, Ana thinks wrongly that Antonio is homosexual, Blanca realizes a horrible side about her marriage with Eduardo, and Pepe tries to keep hidden ...",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Perfect-Strangers-Movie-Poster.jpg",
          "imdb_id": "tt6101820",
          "imdb_rating": 7,
          "runtime": 97,
          "language": "English",
          "ytid": "-lOUnBsjGuY"
        },
        {
          "Title": "Paterno",
          "fulltitle": "Paterno (2018)",
          "movie_year": 2018,
          "Categories": "Biography|Drama",
          "summary": "The film centers on Joe Paterno, who, after becoming the winningest coach in college football history, is embroiled in Penn State's Jerry Sandusky sexual abuse scandal, challenging his legacy and forcing him to face questions of institutional failure regarding the victims.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Paterno-Movie-Poster.jpg",
          "imdb_id": "tt2388986",
          "imdb_rating": 6.6,
          "runtime": 105,
          "language": "English",
          "ytid": "scI7dYdlzuY"
        },
        {
          "Title": "Shirley: Visions of Reality",
          "fulltitle": "Shirley: Visions of Reality (2013)",
          "movie_year": 2013,
          "Categories": "Documentary",
          "summary": "13 of Edward Hopper's paintings are brought alive by the film, telling the story of a woman, whose thoughts, emotions and contemplations let us observe an era in American history. Shirley is a woman in America in the 1930s, '40s, '50s, and early '60s. A woman who would like to influence the course of history with her professional and socio political involvement.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Shirley-Visions-of-Reality-Movie-Poster.jpg",
          "imdb_id": "tt2636806",
          "imdb_rating": 6.5,
          "runtime": 92,
          "language": "English",
          "ytid": "rcQ4JKxxukY"
        },
        {
          "Title": "5 Centimeters Per Second",
          "fulltitle": "5 Centimeters Per Second (2007)",
          "movie_year": 2007,
          "Categories": "Animation|Drama|Romance",
          "summary": "Takaki and Akari are two classmates in elementary school. During their time together they have become close friends. Their relationship is tested when Akari moves to another city because of her parents' jobs. Both of them struggle to keep their friendship alive, as time and distance slowly pulls them apart. When Takaki finds out that he is moving further away, he decides to visit Akari one last time.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/5-Centimeters-Per-Second-Movie-Poster.jpg",
          "imdb_id": "tt0983213",
          "imdb_rating": 7.7,
          "runtime": 63,
          "language": "English",
          "ytid": "SzAO_NeCmkM"
        },
        {
          "Title": "Faces Places",
          "fulltitle": "Faces Places (2017)",
          "movie_year": 2017,
          "Categories": "Documentary",
          "summary": "Agnes Varda, one of the leading lights of France's honored French New Wave cinema era, and professional photographer and muralist, J.R., partake on a special art project. Together, they travel around France in a special box truck equipped as a portable photo booth and traveling printing facility as they take photographs of people around the country. With that inspiration, they also create special colossal mural pictures of individuals, communities and places they want to honor and celebrate. Along the way, the old cinematic veteran and the young artistic idealist enjoy an odd friendship as they chat and explore their views on the world as only they can.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Faces-Places-Movie-Poster.jpg",
          "imdb_id": "tt5598102",
          "imdb_rating": 8,
          "runtime": 89,
          "language": "English",
          "ytid": "2rKZcAiLHlY"
        },
        {
          "Title": "The Post",
          "fulltitle": "The Post (2017)",
          "movie_year": 2017,
          "Categories": "Biography|Drama|History|Thriller",
          "summary": "When American military analyst, Daniel Ellsberg, realizes to his disgust the depths of the US government's deceptions about the futility of the Vietnam War, he takes action by copying top-secret documents that would become the Pentagon Papers. Later, Washington Post owner, Kay Graham, is still adjusting to taking over her late husband's business when editor Ben Bradlee discovers the New York Times has scooped them with an explosive expose on those papers. Determined to compete, Post reporters find Ellsberg himself and a complete copy of those papers. However, the Post's plans to publish their findings are put in jeopardy with a Federal restraining order that could get them all indicted for Contempt. Now, Kay Graham must decide whether to back down for the safety of her paper or publish and fight for the Freedom of the Press. In doing so, Graham and her staff join a fight that would have America's democratic ideals in the balance.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/The-Post-Movie-Poster.jpg",
          "imdb_id": "tt6294822",
          "imdb_rating": 7.2,
          "runtime": 116,
          "language": "English",
          "ytid": "nrXlY6gzTTM"
        },
        {
          "Title": "The Anthem of the Heart",
          "fulltitle": "The Anthem of the Heart (2017)",
          "movie_year": 2017,
          "Categories": "Drama|Family",
          "summary": "Takumi is on his class' community outreach group. His teacher assigns more students to the group including a student who, due to a mishap, has foregone speaking. The class has to perform a musical, but volunteers brave enough to perform are hard to come by. The reluctance slowly begins to wash away when the aforementioned girl makes an effort to perform. As the day of the performance approaches will the students be able to overcome their reluctance and go for it?",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/The-Anthem-of-the-Heart-Movie-Poster.jpg",
          "imdb_id": "tt6738046",
          "imdb_rating": 6.2,
          "runtime": 119,
          "language": "English",
          "ytid": "EnbgMjdguxI"
        },
        {
          "Title": "My Teacher",
          "fulltitle": "My Teacher (2017)",
          "movie_year": 2017,
          "Categories": "Drama|Romance",
          "summary": "Hibiki is an awkward, 17-year-old high school sophomore who hasn't known romance. But she's about to fall in love for the very first time. With whom? A man who isn't great with words, but compassionate about his students. It's her history teacher, Mr. Ito. \"Is it okay if I fall for you?\" Hibiki asks. \"I'm afraid I can't return those feelings,\" is Ito's reply. Hibiki's first love crashes before takeoff. But it doesn't matter. \"Still I want to cherish my crush anyway.\" A teacher's heart begins to turn by a student's pure love.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/My-Teacher-Movie-Poster.jpg",
          "imdb_id": "tt6190198",
          "imdb_rating": 6,
          "runtime": 113,
          "language": "English",
          "ytid": "HpYqkdn2ilU"
        },
        {
          "Title": "You Were Never Really Here",
          "fulltitle": "You Were Never Really Here (2017)",
          "movie_year": 2017,
          "Categories": "Drama|Mystery|Thriller",
          "summary": "Balancing between feverish dreamlike hallucinations of a tormented past and a grim disoriented reality, the grizzled Joe--a traumatised Gulf War veteran and now an unflinching hired gun who lives with his frail elderly mother--has just finished successfully yet another job. With an infernal reputation of being a brutal man of results, the specialised in recovering missing teens enforcer will embark on a blood-drenched rescue mission, when Nina, the innocent 13-year-old daughter of an ambitious New York senator, never returns home. But amidst half-baked leads and a desperate desire to shake off his shoulders the heavy burden of a personal hell, Joe's frenzied plummet into the depths of Tartarus is inevitable, and every step Joe takes to flee the pain, brings him closer to the horrors of insanity. In the end, what is real, and what is a dream? Can there be a new chapter in Joe's life when he keeps running around in circles?",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/You-Were-Never-Really-Here-Movie-Poster.jpg",
          "imdb_id": "tt5742374",
          "imdb_rating": 7.1,
          "runtime": 89,
          "language": "English",
          "ytid": "yMqsd7Umxy8"
        },
        {
          "Title": "Petals on the Wind",
          "fulltitle": "Petals on the Wind (2014)",
          "movie_year": 2014,
          "Categories": "Drama|Horror|Romance|Thriller",
          "summary": "A decade after Cathy, Christopher, and Carrie escaped from their grandparents' attic at Foxworth Hall, Petals on the Wind continues to follow the twisted plight of the family as they attempt to put their sordid past behind them, but soon discover certain secrets can't be left behind. When Cathy finds herself in an abusive relationship with a fellow dancer, Julian, Christopher and Cathy are forced to face the forbidden feelings they developed for one another while coming of age during captivity. But when tragedy strikes the Dollangangers once again, Cathy returns to Foxworth Hall to confront her grandmother and seek revenge on her mother with a plan to seduce her husband Bart. When Christopher runs to Cathy's side, the two are determined to start over again - together.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Petals-on-the-Wind-Movie-Poster.jpg",
          "imdb_id": "tt3496892",
          "imdb_rating": 6.3,
          "runtime": 85,
          "language": "English",
          "ytid": "X8b86Bgrk0w"
        },
        {
          "Title": "Jesus Christ Superstar Live in Concert",
          "fulltitle": "Jesus Christ Superstar Live in Concert (2018)",
          "movie_year": 2018,
          "Categories": "Musical",
          "summary": "A live musical recounting the final days of Jesus Christ and those around him.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Jesus-Christ-Superstar-Live-in-Concert-Movie-Poster.jpg",
          "imdb_id": "tt6874964",
          "imdb_rating": 8,
          "runtime": 99,
          "language": "English",
          "ytid": "mPbb4BDirHA"
        },
        {
          "Title": "Dare to Be Wild",
          "fulltitle": "Dare to Be Wild (2015)",
          "movie_year": 2015,
          "Categories": "Biography|Drama|Romance",
          "summary": "Irishwoman Mary Reynold's journey from rank outsider to winner of a Gold Medal at the Chelsea Flower Show.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Dare-to-Be-Wild-Movie-Poster.jpg",
          "imdb_id": "tt2989350",
          "imdb_rating": 6.4,
          "runtime": 100,
          "language": "English",
          "ytid": "12lF4c06yEY"
        },
        {
          "Title": "Being Julia",
          "fulltitle": "Being Julia (2004)",
          "movie_year": 2004,
          "Categories": "Comedy|Drama|Romance",
          "summary": "1938. Julia Lambert and Michael Gosselyn are the royal couple of the London theater scene, Julia an actress and Michael a former actor who took over running the theater and its troupe upon the passing of their mentor, Jimmie Langton. Jimmie is still constantly with Julia in spirit as she navigates through life. Besides their work, Julia and Michael lead largely separate lives, they long ago having stopped a sexual relationship. Julia of late has been feeling disenchanted with her life, she not wanting to admit it's because she is approaching middle age. Her disenchantment manifests itself in wanting Michael to close their current production early so that she can recharge her juices, something he is reluctant to do if only for not wanting to let the theater sit empty. What Julia ends up doing instead is embarking on an affair with Tom Fennel, an adoring young American who is young enough to be her son. As Julia and Tom's relationship progresses, the more she falls in love with him and ...",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Being-Julia-Movie-Poster.jpg",
          "imdb_id": "tt0340012",
          "imdb_rating": 7,
          "runtime": 104,
          "language": "English",
          "ytid": "quzIsJq7t08"
        },
        {
          "Title": "Trouble Is My Business",
          "fulltitle": "Trouble Is My Business (2018)",
          "movie_year": 2018,
          "Categories": "Action|Adventure|Crime|Mystery|Thriller",
          "summary": "Los Angeles in 1947, everything should be sunny, but the smog creates a fog, a haze that permeates not just the lungs, but the psyches. Private eye Roland Drake cracks cases and romances femme fatales, while corrupt cops rule the underworld of the city and moral lines are anything but black and white. A dark, hard-boiled tale of love and betrayal, told in the classic style of film noir. Drake has fallen on hard times in a harsh world. He has been evicted from his office and disgraced by a missing persons case. Ruined in the public eye and with the police. it seems like it's all over for Roland Drake. Then, redemption walks in - with curves. The owner of those curves is a sexy, dark haired beauty named Katherine Montemar. She wants his help. The chemistry is immediate and her concern for the disappearance of her family members pulls him into her case - and into bed. He wakes up to her missing too, and a pool of blood where she used to be. After a nervous encounter with the equally ...",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Trouble-Is-My-Business-Movie-Poster.jpg",
          "imdb_id": "tt2243900",
          "imdb_rating": 6.1,
          "runtime": 116,
          "language": "English",
          "ytid": "SqUEOsQf6hM"
        },
        {
          "Title": "Outside In",
          "fulltitle": "Outside In (2017)",
          "movie_year": 2017,
          "Categories": "Drama",
          "summary": "An ex-con struggling to readjust to life in his small town forms an intense bond with his former high school teacher.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Outside-In-Movie-Poster.jpg",
          "imdb_id": "tt7260048",
          "imdb_rating": 6.4,
          "runtime": 109,
          "language": "English",
          "ytid": "s0SdJfplC80"
        },
        {
          "Title": "Froning: The Fittest Man in History",
          "fulltitle": "Froning: The Fittest Man in History (2015)",
          "movie_year": 2015,
          "Categories": "Documentary",
          "summary": "Rich Froning Jr. is a legend in CrossFit and the Sport of Fitness. In this biopic, take a look at his childhood, follow his quest for a fourth CrossFit Games title, and see him as a son, a husband and a new father.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Froning-The-Fittest-Man-in-History-Movie-Poster.jpg",
          "imdb_id": "tt5079382",
          "imdb_rating": 6.7,
          "runtime": 99,
          "language": "English",
          "ytid": "D1ze-f7jS2A"
        },
        {
          "Title": "Elizabethtown",
          "fulltitle": "Elizabethtown (2005)",
          "movie_year": 2005,
          "Categories": "Comedy|Drama|Romance",
          "summary": "After causing a loss of almost one billion dollars in his company, the shoe designer Drew Baylor decides to commit suicide. However, in the exact moment of his act of despair, he receives a phone call from his sister telling him that his beloved father had just died in Elizabethtown, and he should bring him back since his mother had problem with the relatives of his father. He travels in an empty red eye flight and meets the attendant Claire Colburn, who changes his view and perspective of life.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Elizabethtown-Movie-Poster.jpg",
          "imdb_id": "tt0368709",
          "imdb_rating": 6.4,
          "runtime": 123,
          "language": "English",
          "ytid": "qyPq2BS8Ug0"
        },
        {
          "Title": "The Other Side of Heaven",
          "fulltitle": "The Other Side of Heaven (2001)",
          "movie_year": 2001,
          "Categories": "Adventure|Biography|Drama",
          "summary": "John H. Groberg, a middle class kid from Idaho Falls, crosses the Pacific to become a Mormon missionary in the remote and exotic Tongan island kingdom during the 1950's. He leaves behind a loving family and the true love of his life, Jean. Through letters and musings across the miles, John shares his humbling and sometimes hilarious adventures with \"the girl back home\", and her letters buoy up his spirits in difficult times. John must struggle to overcome language barriers, physical hardship and deep-rooted suspicion to earn the trust and love of the Tongan people he has come to serve. Throughout his adventure-filled three years on the islands, he discovers friends and wisdom in the most unlikely places. John H. Groberg's Tongan odyssey will change his life forever.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/The-Other-Side-of-Heaven-Movie-Poster.jpg",
          "imdb_id": "tt0250371",
          "imdb_rating": 6.5,
          "runtime": 113,
          "language": "English",
          "ytid": "5dKsHYzIoUI"
        },
        {
          "Title": "Sons of Ben",
          "fulltitle": "Sons of Ben (2016)",
          "movie_year": 2016,
          "Categories": "Biography|Documentary|Sport",
          "summary": "After many rumors of an MLS team arriving in Philadelphia never materializing, a small group of soccer fans took matters into their own hands and started a supporters group called the Sons of Ben to help bring a team to their hometown. They were a group without a team to root for and had a modest goal of reaching 100 members by the end of the year. Little did they know they would reach over 1,500 members in less time than that and start a movement that would not only change the soccer landscape in Philadelphia forever, but also help revive a community that had been struggling for decades.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Sons-of-Ben-Movie-Poster.jpg",
          "imdb_id": "tt2317088",
          "imdb_rating": 7.8,
          "runtime": 75,
          "language": "English",
          "ytid": "m8I_pgCaRsM"
        },
        {
          "Title": "12 Strong",
          "fulltitle": "12 Strong (2018)",
          "movie_year": 2018,
          "Categories": "Action|Drama|History|War",
          "summary": "The True Story of the Army's Special Forces \"Green Berets\", who within weeks responded to the 9-11 attack. Green Berets, with the help of the 160th SOAR(A), took over the country and allowed other Special Forces and the rest of the conventional military to begin the more publicly visible war.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/12-Strong-Movie-Poster.jpg",
          "imdb_id": "tt1413492",
          "imdb_rating": 6.7,
          "runtime": 130,
          "language": "English",
          "ytid": "-Denciie5oA"
        },
        {
          "Title": "The Commuter",
          "fulltitle": "The Commuter (2018)",
          "movie_year": 2018,
          "Categories": "Action|Crime|Drama|Mystery|Thriller",
          "summary": "Now a hard-working life insurance salesman and a caring family man, the former police officer, Michael MacCauley, has taken the commuter rail to New York for the past ten years. But, unexpectedly, things will take a turn for the worse, when on one of his daily journeys, the cryptic passenger, Joanna, makes Michael a generous and tempting offer to locate a single commuter or face grave consequences. Is this a sick joke, or is this indeed a serious situation? As Michael races against the clock to solve this wicked conundrum, everyone aboard is a suspect, in a deal where there's definitely more than meets the eye. Can he decide in time who's the one?",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/The-Commuter-Movie-Poster.jpg",
          "imdb_id": "tt1590193",
          "imdb_rating": 6.3,
          "runtime": 105,
          "language": "English",
          "ytid": "WWexI9YiLSc"
        },
        {
          "Title": "Birdshot",
          "fulltitle": "Birdshot (2016)",
          "movie_year": 2016,
          "Categories": "Drama|Mystery|Thriller",
          "summary": "Birdshot\" is a mystery-thriller film that tells a story of a young Filipina farm girl who wanders into the boundaries of a Philippine reservation forest. Deep within the reservation she mistakenly shoots and kills a critically endangered and protected Philippine Eagle. As the local authorities begin a manhunt to track down the poacher of a national bird, their investigation leads them to an even more horrific discovery.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Birdshot-Movie-Poster.jpg",
          "imdb_id": "tt6135042",
          "imdb_rating": 6.8,
          "runtime": 116,
          "language": "English",
          "ytid": "7k8h_X3GjgM"
        },
        {
          "Title": "May",
          "fulltitle": "May (2002)",
          "movie_year": 2002,
          "Categories": "Drama|Horror",
          "summary": "When May was a child, she was a lonely girl with a lazy eye and without any friends except a weird and ugly doll kept in a glass case given by her bizarre mother on her birthday. May becomes a lonely, weird young woman, working in an animal hospital and assisting the veterinarian in surgeries and sewing operated animals most of the time. Her lesbian colleague Polly has a sort of attraction for her. When the shy May meets the mechanic Adam Stubbs, she loves his hands and has a crush on him. They date, but the weirdness and bizarre behavior of May pushes Adam away from her. Alone, May has a brief affair with Polly, but she feels rejected again when her colleague meets Ambrosia. When her doll is accidentally broken, the deranged May decides to build a friend for her, using the best parts her acquaintances can offer.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/May-Movie-Poster.jpg",
          "imdb_id": "tt0303361",
          "imdb_rating": 6.7,
          "runtime": 93,
          "language": "English",
          "ytid": "YbN_uoGQysc"
        },
        {
          "Title": "The China Hustle",
          "fulltitle": "The China Hustle (2017)",
          "movie_year": 2017,
          "Categories": "Documentary",
          "summary": "An unsettling and eye-opening Wall Street horror story about Chinese companies, the American stock market, and the opportunistic greed behind the biggest heist you've never heard of.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/The-China-Hustle-Movie-Poster.jpg",
          "imdb_id": "tt7215388",
          "imdb_rating": 6.8,
          "runtime": 82,
          "language": "English",
          "ytid": "55892jT06aI"
        },
        {
          "Title": "The Lost Brother",
          "fulltitle": "The Lost Brother (2017)",
          "movie_year": 2017,
          "Categories": "Crime|Drama|Thriller",
          "summary": "Cetarti, a public employee who has just been fired, travels from Buenos Aires to Lapachito, a lonely town in the Chaco province. He must take care of the corpses of his mother and brother who have been brutally murdered, and with whom no bond of affection binds him. The only thing that mobilizes Cetarti to undertake the trip is the possibility of charging a modest life insurance to be able to settle in Brazil. There he meets Duarte, a sort of town capo and friend of his mother's murderer, with whom he establishes a strange society to manage and collect that money.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/The-Lost-Brother-Movie-Poster.jpg",
          "imdb_id": "tt6522634",
          "imdb_rating": 6.7,
          "runtime": 112,
          "language": "English",
          "ytid": "1DNXCdWZuHs"
        },
        {
          "Title": "The Redeemed and the Dominant: Fittest on Earth",
          "fulltitle": "The Redeemed and the Dominant: Fittest on Earth (2018)",
          "movie_year": 2018,
          "Categories": "Documentary",
          "summary": "In 2017 the fittest athletes on Earth took on the unknown and unknowable during four of the most intense days of competition in CrossFit Games history. \"The Redeemed and the Dominant: Fittest on Earth \" captures all the drama as top athletes resembling chiseled Grecian gods descend on Madison, Wisconsin, to face a series of trials. Hercules faced 12; they take on 13. Emotions run high as a throng of Australian athletes rise to the top. By the end of the competition, some learn tough lessons-that all that glitters isn't gold, or even bronze-and some learn that they're even stronger than they realized. The best among them enter the pantheon of CrossFit giants and earn the right to call themselves the \"Fittest on Earth.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/The-Redeemed-and-the-Dominant-Fittest-on-Earth-Movie-Poster.jpg",
          "imdb_id": "tt8144778",
          "imdb_rating": 7.1,
          "runtime": 119,
          "language": "English",
          "ytid": "rlZ5MG-E2Ls"
        },
        {
          "Title": "First Match",
          "fulltitle": "First Match (2018)",
          "movie_year": 2018,
          "Categories": "Drama|Sport",
          "summary": "Hardened by years in foster care, a teenage girl from Brooklyn's Brownsville neighborhood decides that joining the boys wrestling team is the only way back to her estranged father.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/First-Match-Movie-Poster.jpg",
          "imdb_id": "tt6061074",
          "imdb_rating": 6.1,
          "runtime": 102,
          "language": "English",
          "ytid": "Xva2FWNdcD0"
        },
        {
          "Title": "Re: Born",
          "fulltitle": "Re: Born (2016)",
          "movie_year": 2016,
          "Categories": "Action|Crime|Drama|War",
          "summary": "A legend covert soldier with a mysterious past now decides to once again unleash his beast inside of him to stand up for what he cares about.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Re-Born-Movie-Poster.jpg",
          "imdb_id": "tt5678110",
          "imdb_rating": 6,
          "runtime": 115,
          "language": "English",
          "ytid": "uxM6vsMNwXs"
        },
        {
          "Title": "A Moving Romance",
          "fulltitle": "A Moving Romance (2017)",
          "movie_year": 2017,
          "Categories": "Family",
          "summary": "Interior designer Olivia Wilson loses her job in New York. With newfound time on her hands she decides to head home to California to surprise her dad, Neil for the 25th anniversary of the family business, Wilson Family Movers. Upon arrival she meets the newest member of the Wilson team, Scott. With business coming to a halt, she and Scott work together to get things back on track. Just as the two begin to form a bond, Olivia is faced with a difficult decision when a worthwhile job opportunity pops up back in New York.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/A-Moving-Romance-Movie-Poster.jpg",
          "imdb_id": "tt5039242",
          "imdb_rating": 6.1,
          "runtime": 90,
          "language": "English",
          "ytid": ""
        },
        {
          "Title": "Happy End",
          "fulltitle": "Happy End (2017)",
          "movie_year": 2017,
          "Categories": "Drama",
          "summary": "Gradually succumbing to dementia, George Laurent, the octogenarian patriarch of the Laurents, an affluent upper-bourgeois family, is uncomfortably sharing his palatial manor in Calais, the heart of the infamous migrant jungle, with his twice-married son, Thomas, and Anne, his workaholic daughter who has taken over the family construction business. Divorced and frigid, Anne has to handle the impact of a disastrous workplace accident caused by her disappointing son Pierre's negligence, while at the same time, the urgent hospitalisation of Thomas' ex-wife from a mysterious poisoning, leads his sulky 13-year-old daughter, Ève, to live with her father and his new wife, Anais. Undoubtedly, in this family, everyone has a skeleton in the closet, and as the fates of the Laurents enmesh with insistent and ignoble desires, a peculiar and disturbing alliance will form. But in the end, some secrets are bigger than others.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Happy-End-Movie-Poster.jpg",
          "imdb_id": "tt5304464",
          "imdb_rating": 6.9,
          "runtime": 107,
          "language": "English",
          "ytid": "cZ1ajZRn8YM"
        },
        {
          "Title": "After the Storm",
          "fulltitle": "After the Storm (2016)",
          "movie_year": 2016,
          "Categories": "Comedy|Drama",
          "summary": "Dwelling on his past glory as a prize-winning author, Ryota (Hiroshi Abe) wastes the money he makes as a private detective on gambling and can barely pay child support. After the death of his father, his aging mother (Kirin Kiki) and beautiful ex-wife (Yoko Make) seem to be moving on with their lives. Renewing contact with his initially distrusting family, Ryota struggles to take back control of his existence and to find a lasting place in the life of his young son (Taiyo Yoshizawa) - until a stormy summer night offers them a chance to truly bond again.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/After-the-Storm-Movie-Poster.jpg",
          "imdb_id": "tt5294966",
          "imdb_rating": 7.4,
          "runtime": 118,
          "language": "English",
          "ytid": "i0lr6hfRG9s"
        },
        {
          "Title": "Mary and the Witch's Flower",
          "fulltitle": "Mary and the Witch's Flower (2017)",
          "movie_year": 2017,
          "Categories": "Adventure|Animation|Family|Fantasy",
          "summary": "Mary is an ordinary young girl stuck in the country with her Great-Aunt Charlotte and seemingly no adventures or friends in sight. She follows a mysterious cat into the nearby forest, where she discovers an old broomstick and the strange Fly-by-Night flower, a rare plant that blossoms only once every seven years and only in that forest. Together the flower and the broomstick whisk Mary above the clouds and far away to Endor College - a school of magic run by headmistress Madam Mumblechook and the brilliant Doctor Dee. But there are terrible things happening at the school, and, when Mary tells a lie, she must risk her life to try to set things right. Based on Mary Stewart's 1971 classic children's book \"The Little Broomstick\", \"Mary and The Witch's Flower\" is an action-packed film full of jaw-dropping imaginative worlds, ingenious characters, and the stirring, heartfelt story of a young girl trying to find a place in the world. Featuring the voices of Ruby Barnhill and Academy ...",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Mary-and-the-Witchs-Flower-Movie-Poster.jpg",
          "imdb_id": "tt6336356",
          "imdb_rating": 6.8,
          "runtime": 102,
          "language": "English",
          "ytid": "888z3ku4t3I"
        },
        {
          "Title": "The Last Movie Star",
          "fulltitle": "The Last Movie Star (2017)",
          "movie_year": 2017,
          "Categories": "Drama",
          "summary": "An aging former movie star is forced to face the reality that his glory days are behind him. On its surface, the film is a tale about faded fame. At its core, it's a universal story about growing old.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/The-Last-Movie-Star-Movie-Poster.jpg",
          "imdb_id": "tt5836316",
          "imdb_rating": 6.8,
          "runtime": 94,
          "language": "English",
          "ytid": "1-f8O118hnE"
        },
        {
          "Title": "Lucky",
          "fulltitle": "Lucky (2017)",
          "movie_year": 2017,
          "Categories": "Comedy|Drama",
          "summary": "Lucky is an old US Navy veteran of rigid habits and attitudes in a small town. When his routine is interrupted by a sudden collapse at home, Lucky finds himself realizing that his remarkably healthy old age is going to face an inevitable decline and he has to accept it. In that difficult reassessment, Lucky must face up to what he believes in and how much it compares to his neighbors' priorities. In doing so, Lucky finds that his life has its positive side as he searches for some meaning that he can accept.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Lucky-Movie-Poster.jpg",
          "imdb_id": "tt5859238",
          "imdb_rating": 7.4,
          "runtime": 88,
          "language": "English",
          "ytid": "2KLLkj84GAo"
        },
        {
          "Title": "Phantom Thread",
          "fulltitle": "Phantom Thread (2017)",
          "movie_year": 2017,
          "Categories": "Drama|Romance",
          "summary": "Set in the glamour of 1950s post-war London, renowned dressmaker Reynolds Woodcock (Daniel Day-Lewis) and his sister Cyril (Lesley Manville) are at the center of British fashion, dressing royalty, movie stars, heiresses, socialites, debutants, and dames with the distinct style of The House of Woodcock. Women come and go through Woodcock's life, providing the confirmed bachelor with inspiration and companionship, until he comes across a young, strong-willed woman, Alma (Vicky Krieps), who soon becomes a fixture in his life as his muse and lover. Once controlled and planned, he finds his carefully tailored life disrupted by love.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Phantom-Thread-Movie-Poster.jpg",
          "imdb_id": "tt5776858",
          "imdb_rating": 7.7,
          "runtime": 130,
          "language": "English",
          "ytid": "asbg5u5j0YI"
        },
        {
          "Title": "Molly's Game",
          "fulltitle": "Molly's Game (2017)",
          "movie_year": 2017,
          "Categories": "Biography|Crime|Drama",
          "summary": "Molly Bloom, a beautiful young Olympic-class skier, ran the world's most exclusive high-stakes poker game for a decade before being arrested in the middle of the night by 17 FBI agents wielding automatic weapons. Her players included Hollywood royalty, sports stars, business titans, and finally, unbeknownst to her, the Russian mob. Her only ally was her criminal defense lawyer Charlie Jaffey, who learned that there was much more to Molly than the tabloids led us to believe.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Mollys-Game-Movie-Poster.jpg",
          "imdb_id": "tt4209788",
          "imdb_rating": 7.5,
          "runtime": 140,
          "language": "English",
          "ytid": "Vu4UPet8Nyc"
        },
        {
          "Title": "The Third Murder",
          "fulltitle": "The Third Murder (2017)",
          "movie_year": 2017,
          "Categories": "Drama|Mystery",
          "summary": "Misumi has a criminal record dating back many years and is now under the spotlight again. It looks like an open and shut case, for Misumi has confessed to the new charge. Enter prominent lawyer Shigemori, who harbours other ideas, which could mean the difference between life and death.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/The-Third-Murder-Movie-Poster.jpg",
          "imdb_id": "tt6410564",
          "imdb_rating": 6.8,
          "runtime": 124,
          "language": "English",
          "ytid": "Plr3V4TYBQE"
        },
        {
          "Title": "The Coming Days",
          "fulltitle": "The Coming Days (2010)",
          "movie_year": 2010,
          "Categories": "Drama|Sci-Fi",
          "summary": "In the near future the dreams of three adult siblings living in Germany are fractured by difficult romantic relationships and the unwitting involvement with an underground organization through a growing worldwide panic over the few remaining oil fields in Asia.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/The-Coming-Days-Movie-Poster.jpg",
          "imdb_id": "tt1545985",
          "imdb_rating": 6.3,
          "runtime": 125,
          "language": "English",
          "ytid": ""
        },
        {
          "Title": "Ichi the Killer",
          "fulltitle": "Ichi the Killer (2001)",
          "movie_year": 2001,
          "Categories": "Action|Comedy|Crime|Drama|Horror",
          "summary": "When a Yakuza boss named Anjo disappears with 300 million yen, his chief henchman, a sadomasochistic man named Kakihara, and the rest of his mob goons go looking for him. After capturing and torturing a rival Yakuza member looking for answers, they soon realize they have the wrong man and begin looking for the man named Jijii who tipped them off in the first place. Soon enough Kakihara and his men encounter Ichi, a psychotic, sexually-repressed young man with amazing martial arts abilities and blades that come out of his shoes. One by one Ichi takes out members of the Yakuza and all the while Kakihara intensifies his pursuit of Ichi and Ichi's controller Jijii. What will happen as the final showdown happens between the tortured and ultra-violent Ichi and the pain-craving Kakihara?",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Ichi-the-Killer-Movie-Poster.jpg",
          "imdb_id": "tt0296042",
          "imdb_rating": 7.1,
          "runtime": 129,
          "language": "English",
          "ytid": "iFUMtrAMknE"
        },
        {
          "Title": "The Boy with the Topknot",
          "fulltitle": "The Boy with the Topknot (2017)",
          "movie_year": 2017,
          "Categories": "Drama",
          "summary": "One-off drama based on the critically acclaimed memoirs of British journalist Sathnam Sanghera. A touching, humorous and emotional rites-of-passage story.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/The-Boy-with-the-Topknot-Movie-Poster.jpg",
          "imdb_id": "tt5757738",
          "imdb_rating": 6.7,
          "runtime": 90,
          "language": "English",
          "ytid": "RLEnTBG7ncQ"
        },
        {
          "Title": "Small Town Crime",
          "fulltitle": "Small Town Crime (2017)",
          "movie_year": 2017,
          "Categories": "Crime|Mystery|Thriller",
          "summary": "An alcoholic ex-cop (Hawkes) finds the body of a young woman and, through an act of self-redemption, becomes hell-bent on finding the killer but unwittingly puts his family in danger and gets caught up with several dark characters along the way.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Small-Town-Crime-Movie-Poster.jpg",
          "imdb_id": "tt5751998",
          "imdb_rating": 6.6,
          "runtime": 91,
          "language": "English",
          "ytid": "WakqZghIX_g"
        },
        {
          "Title": "Control",
          "fulltitle": "Control (2017)",
          "movie_year": 2017,
          "Categories": "Action|Crime|Drama|Thriller",
          "summary": "The once unconditional friendship between police officers Vincke and Verstuyft hits a very rough patch when they come up against a series of gruesome murders. Complicating matters even further, a survivor of the killer drives a wedge between them when Verstuyft falls for her charms. Meanwhile, the serial killer has a new victim in sight...",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Control-Movie-Poster.jpg",
          "imdb_id": "tt1727497",
          "imdb_rating": 6.3,
          "runtime": 127,
          "language": "English",
          "ytid": "xF99vVf8yv0"
        },
        {
          "Title": "Dear Etranger",
          "fulltitle": "Dear Etranger (2017)",
          "movie_year": 2017,
          "Categories": "Drama",
          "summary": "A 40-year old man sees his life change when his wife gets pregnant. He already has a daughter from his first marriage whom he rarely sees and two step-daughters, from his wife's first marriage. The youngest of his step-daughters is looking forward to a baby brother or sister, but the oldest doesn't welcome the news and suddenly decides that she wants to live with her father. And as if that were not enough trouble, he is forced out of his good office job into an inferior position.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Dear-Etranger-Movie-Poster.jpg",
          "imdb_id": "tt5797164",
          "imdb_rating": 7,
          "runtime": 0,
          "language": "English",
          "ytid": "F-FPd35FqAY"
        },
        {
          "Title": "Before We Vanish",
          "fulltitle": "Before We Vanish (2017)",
          "movie_year": 2017,
          "Categories": "Drama|Sci-Fi",
          "summary": "Three aliens travel to Earth in preparation for a mass invasion, taking possession of human bodies.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Before-We-Vanish-Movie-Poster.jpg",
          "imdb_id": "tt5999530",
          "imdb_rating": 6,
          "runtime": 129,
          "language": "English",
          "ytid": "fjlXE-u-3rc"
        },
        {
          "Title": "Grace Jones: Bloodlight and Bami",
          "fulltitle": "Grace Jones: Bloodlight and Bami (2017)",
          "movie_year": 2017,
          "Categories": "Documentary",
          "summary": "Larger than life, wild, scary and androgynous - Grace Jones plays all these parts. Yet here we also discover her as a lover, daughter, mother, sister and even grandmother, as she submits herself to our gaze and allows us to understand what constitutes her mask. The stage is where her most extreme embodiments are realised and her theatrical imagination lets loose: this is where the musical of her life is played out. The film includes Grace's unique performances singing iconic hits such as Slave To The Rhythm, Pull Up To The Bumper, as well as the more recent autobiographical tracks Williams' Bloods and Hurricane. These personal songs also link to Grace's family life, as the film takes us on a holiday road trip across Jamaica, where her family roots and the story of her traumatic childhood are uncovered. In Jamaican patois, 'Bloodlight' is the red light that illuminates when an artist is recording and 'Bami' means bread, the substance of daily life. Grace Jones: Bloodlight and Bami ...",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Grace-Jones-Bloodlight-and-Bami-Movie-Poster.jpg",
          "imdb_id": "tt6903636",
          "imdb_rating": 6.1,
          "runtime": 115,
          "language": "English",
          "ytid": "HScUsiZLoCg"
        },
        {
          "Title": "All the Money in the World",
          "fulltitle": "All the Money in the World (2017)",
          "movie_year": 2017,
          "Categories": "Biography|Crime|Drama|Mystery|Thriller",
          "summary": "Rome, 1973. Masked men kidnap a teenage boy named John Paul Getty III (Charlie Plummer). His grandfather, Jean Paul Getty (Christopher Plummer), is the richest human in the world, a billionaire oil magnate, but he's notoriously miserly. His favorite grandson's abduction is not reason enough for him to part with any of his fortune. All the Money in the World (2017) follows Gail, (Michelle Williams), Paul's devoted, strong-willed mother, who unlike Getty, has consistently chosen her children over his fortune. Her son's life in the balance with time running out, she attempts to sway Getty even as her son's mob captors become increasingly more determined, volatile and brutal. When Getty sends his enigmatic security man Fletcher Chace (Mark Wahlberg) to look after his interests, he and Gail become unlikely allies in this race against time that ultimately reveals the true and lasting value of love over money.",
          "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/All-the-Money-in-the-World-Movie-Poster.jpg",
          "imdb_id": "tt5294550",
          "imdb_rating": 6.9,
          "runtime": 132,
          "language": "English",
          "ytid": "KXHrCBkIxQQ"
        }
    ]
    
    const data = movie.slice(10,18);
    const data2 = movie.slice(50);
    let count = 0;
    const work = useRef();
    const work2 = useRef();

    function swipe() {
        if(count > data.length -4) {
            count = 0;
        } else if (count < 0) {
            count = data.length - 4;
        }
        work.current.style.transform = `translateX(${-count * 340}px)`
        console.log(work.current.style.transform);
    }

    const rightArrow = () => {
        count++;
       swipe()
    }
    const leftArrow = () => {
        count--;
        swipe()
    }
    let count2 = 0;
    function swipe2() {
        if(count2 > data2.length -4) {
            count2 = 0;
        } else if (count2 < 0) {
            count2 = data2.length - 4;
        }
        work2.current.style.transform = `translateX(${-count2 * 340}px)`
        console.log(work.current.style.transform);
    }

    const rightArow = () => {
        count2++;
       swipe2()
    }
    const leftArow = () => {
        count2--;
        swipe2()
    }

    return (
        <div className='Section'>
            <div className="container">
                <div className="section__title">
                    <div className="section__title__row">
                        <div className='section__first__title'>Featured Movie</div>
                        <div className='section__first__more'><a href="#">See more <i className="fa-solid fa-chevron-right"></i> </a></div>
                    </div>
                </div>
                <div className="wrap">
                        <i onClick={leftArrow} className="fa-solid fa-chevron-left leftArrow"></i>
                        <i onClick={rightArrow} className="fa-solid fa-chevron-right rightArrow"></i>

                    <div className="section__first__slider">
                        <div ref={work} className="slider__wraper">

                            {
                                data && data.map((item,index) => (
                                    <div key={index} className="slider__card">
                                        <div className="slider__card__header">
                                            <i className="fa-solid fa-heart heart"></i>
                                            <a href={ 'https://www.youtube.com/watch?v='+item.ytid}>
                                                <img src={'https://img.youtube.com/vi/'+item.ytid+'/mqdefault.jpg'} alt="" />
                                            </a>
                                        </div>
                                        <div className="slider__card__body">
                                            <div className='slider__card__year'>USA, {item.movie_year} - Current</div>
                                            <div className='slider__card__title'>{item.Title}</div>
                                            <div className='slider__card__status'>
                                                <div className="card__left__status">
                                                    <img src={status} alt="status" /> 
                                                    <div className="card__left__status__title">{item.imdb_rating}</div>
                                                </div>
                                                <div className="card__right__status">
                                                    <img src={strawbery} alt="status" /> 
                                                    <div className="card__right__status__title">{item.runtime}%</div>
                                                </div>
                                            </div>
                                            <div className='slider__card__subtitle'>{item.Categories}</div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>

                {/* Second Slider */}

                <div className="section__title two">
                    <div className="section__title__row">
                        <div className='section__first__title'> New Arrival </div>
                        <div className='section__first__more'><a href="#">See more <i className="fa-solid fa-chevron-right"></i> </a></div>
                    </div>
                </div>
                <div className="wrap">
                        <i onClick={leftArow} className="fa-solid fa-chevron-left leftArrow"></i>
                        <i onClick={rightArow} className="fa-solid fa-chevron-right rightArrow"></i>

                    <div className="section__first__slider">
                        <div ref={work2} className="slider__wraper">

                            {
                                data2 && data2.map((item,index) => (
                                    <div key={index} className="slider__card">
                                        <div className="slider__card__header">
                                            <i className="fa-solid fa-heart heart"></i>
                                            <a href={'https://www.youtube.com/watch?v='+item.ytid}>
                                                <img src={'https://img.youtube.com/vi/'+item.ytid+'/mqdefault.jpg'} alt="" />
                                            </a>
                                        </div>
                                        <div className="slider__card__body">
                                            <div className='slider__card__year'>USA, {item.movie_year} - Current</div>
                                            <div className='slider__card__title'>{item.Title}</div>
                                            <div className='slider__card__status'>
                                                <div className="card__left__status">
                                                    <img src={status} alt="status" /> 
                                                    <div className="card__left__status__title">{item.imdb_rating}</div>
                                                </div>
                                                <div className="card__right__status">
                                                    <img src={strawbery} alt="status" /> 
                                                    <div className="card__right__status__title">{item.runtime}%</div>
                                                </div>
                                            </div>
                                            <div className='slider__card__subtitle'>{item.Categories}</div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>

                {/* Third Slider */}

                <div className="section__title two">
                    <div className="section__title__row">
                        <div className='section__first__title'> Exclusive Videos </div>
                        <div className='section__first__more'><a href="#">See more <i className="fa-solid fa-chevron-right"></i> </a></div>
                    </div>
                </div>
                <div className="wrap">
                        <i onClick={leftArow} className="fa-solid fa-chevron-left leftArrow"></i>
                        <i onClick={rightArow} className="fa-solid fa-chevron-right rightArrow"></i>

                    <div className="section__first__slider">
                        <div ref={work2} className="slider__wraper">

                            {
                                data2 && data2.map((item,index) => (
                                    <div key={index} className="slider__card slider__third">
                                        <div className="slider__card__header">
                                            <i className="fa-solid fa-heart heart"></i>
                                            <iframe width="300" height="300" src={"https://www.youtube.com/embed/"+item.ytid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    );
};


export default Section;