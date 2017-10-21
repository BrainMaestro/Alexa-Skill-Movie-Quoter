'use strict';

var quotesArray = [
    {
        unique_id: 0,
        quote: "Frankly, my dear, I don't give a damn.",
        movieName: 'Gone with the Wind',
    },
    {
        unique_id: 1,
        quote: "I'm gonna make him an offer he can't refuse.",
        movieName: 'The Godfather',
    },
    {
        unique_id: 2,
        quote:
            "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
        movieName: 'On the Waterfront',
    },
    {
        unique_id: 3,
        quote: "Toto, I've a feeling we're not in Kansas anymore.",
        movieName: 'The Wizard of Oz',
    },
    {
        unique_id: 4,
        quote: "Here's looking at you, kid.",
        movieName: 'Casablanca',
    },
    {
        unique_id: 5,
        quote: 'Go ahead, make my day.',
        movieName: 'Sudden Impact',
    },
    {
        unique_id: 6,
        quote: "All right, Mr. DeMille, I'm ready for my close-up.",
        movieName: 'Sunset Boulevard',
    },
    {
        unique_id: 7,
        quote: 'May the Force be with you.',
        movieName: 'Star Wars',
    },
    {
        unique_id: 8,
        quote: "Fasten your seatbelts. It's going to be a bumpy night.",
        movieName: 'All About Eve',
    },
    {
        unique_id: 9,
        quote: "You talkin' to me?",
        movieName: 'Taxi Driver',
    },
    {
        unique_id: 10,
        quote: "What we've got here is failure to communicate.",
        movieName: 'Cool Hand Luke',
    },
    {
        unique_id: 11,
        quote: 'I love the smell of napalm in the morning.',
        movieName: 'Apocalypse Now',
    },
    {
        unique_id: 12,
        quote: "Love means never having to say you're sorry.",
        movieName: 'Love Story',
    },
    {
        unique_id: 13,
        quote: 'The stuff that dreams are made of.',
        movieName: 'The Maltese Falcon',
    },
    {
        unique_id: 14,
        quote: 'E.T. phone home.',
        movieName: 'E.T. the Extra-Terrestrial',
    },
    {
        unique_id: 15,
        quote: 'They call me Mister Tibbs!',
        movieName: 'In the Heat of the Night',
    },
    { unique_id: 16, quote: 'Rosebud.', movieName: 'Citizen Kane' },
    {
        unique_id: 17,
        quote: 'Made it, Ma! Top of the world!',
        movieName: 'White Heat',
    },
    {
        unique_id: 18,
        quote: "I'm as mad as hell, and I'm not going to take this anymore!",
        movieName: 'Network',
    },
    {
        unique_id: 19,
        quote:
            'Louis, I think this is the beginning of a beautiful friendship.',
        movieName: 'Casablanca',
    },
    {
        unique_id: 20,
        quote:
            'A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.',
        movieName: 'The Silence of the Lambs',
    },
    {
        unique_id: 21,
        quote: 'Bond. James Bond.',
        movieName: 'Dr. No',
    },
    {
        unique_id: 22,
        quote: "There's no place like home.",
        movieName: 'The Wizard of Oz',
    },
    {
        unique_id: 23,
        quote: "I am big! It's the pictures that got small.",
        movieName: 'Sunset Boulevard',
    },
    {
        unique_id: 24,
        quote: 'Show me the money!',
        movieName: 'Jerry Maguire',
    },
    {
        unique_id: 25,
        quote: "Why don't you come up sometime and see me?",
        movieName: 'She Done Him Wrong',
    },
    {
        unique_id: 26,
        quote: "I'm walking here! I'm walking here!",
        movieName: 'Midnight Cowboy',
    },
    {
        unique_id: 27,
        quote: "Play it, Sam. Play 'As Time Goes By.'",
        movieName: 'Casablanca',
    },
    {
        unique_id: 28,
        quote: "You can't handle the truth!",
        movieName: 'A Few Good Men',
    },
    {
        unique_id: 29,
        quote: 'I want to be alone.',
        movieName: 'Grand Hotel',
    },
    {
        unique_id: 30,
        quote: 'After all, tomorrow is another day!',
        movieName: 'Gone with the Wind',
    },
    {
        unique_id: 31,
        quote: 'Round up the usual suspects.',
        movieName: 'Casablanca',
    },
    {
        unique_id: 32,
        quote: "I'll have what she's having.",
        movieName: 'When Harry Met Sally...',
    },
    {
        unique_id: 33,
        quote:
            "You know how to whistle, don't you, Steve? You just put your lips together and blow.",
        movieName: 'To Have and Have Not',
    },
    {
        unique_id: 34,
        quote: "You're gonna need a bigger boat.",
        movieName: 'Jaws',
    },
    {
        unique_id: 35,
        quote:
            "Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!",
        movieName: 'Gold Hat',
    },
    {
        unique_id: 36,
        quote: "I'll be back.",
        movieName: 'The Terminator',
    },
    {
        unique_id: 37,
        quote:
            'Today, I consider myself the luckiest man on the face of the Earth.',
        movieName: 'The Pride of the Yankees',
    },
    {
        unique_id: 38,
        quote: 'If you build it, he will come.',
        movieName: 'Field of Dreams',
    },
    {
        unique_id: 39,
        quote:
            "Mama always said life was like a box of chocolates. You never know what you're gonna get.",
        movieName: 'Forrest Gump',
    },
    {
        unique_id: 40,
        quote: 'We rob banks.',
        movieName: 'Bonnie and Clyde',
    },
    { unique_id: 41, quote: 'Plastics.', movieName: 'The Graduate' },
    {
        unique_id: 42,
        quote: "We'll always have Paris.",
        movieName: 'Casablanca',
    },
    {
        unique_id: 43,
        quote: 'I see dead people.',
        movieName: 'The Sixth Sense',
    },
    {
        unique_id: 44,
        quote: 'Stella! Hey, Stella!',
        movieName: 'A Streetcar Named Desire',
    },
    {
        unique_id: 45,
        quote: "Oh, Jerry, don't let's ask for the moon. We have the stars.",
        movieName: 'Now, Voyager',
    },
    {
        unique_id: 46,
        quote: 'Shane. Shane. Come back!',
        movieName: 'Shane',
    },
    {
        unique_id: 47,
        quote: "Well, nobody's perfect.",
        movieName: 'Some Like It Hot',
    },
    {
        unique_id: 48,
        quote: "It's alive! It's alive!",
        movieName: 'Frankenstein',
    },
    {
        unique_id: 49,
        quote: 'Houston, we have a problem.',
        movieName: 'Apollo 13',
    },
    {
        unique_id: 50,
        quote:
            "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
        movieName: 'Dirty Harry',
    },
    {
        unique_id: 51,
        quote: "You had me at 'hello.'",
        movieName: 'Jerry Maguire',
    },
    {
        unique_id: 52,
        quote:
            "One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know.",
        movieName: 'Animal Crackers',
    },
    {
        unique_id: 53,
        quote: "There's no crying in baseball!",
        movieName: 'A League of Their Own',
    },
    {
        unique_id: 54,
        quote: 'La-dee-da, la-dee-da.',
        movieName: 'Annie Hall',
    },
    {
        unique_id: 55,
        quote: "A boy's best friend is his mother.",
        movieName: 'Psycho',
    },
    {
        unique_id: 56,
        quote: 'Greed, for lack of a better word, is good.',
        movieName: 'Wall Street',
    },
    {
        unique_id: 57,
        quote: 'Keep your friends close, but your enemies closer.',
        movieName: 'The Godfather Part II',
    },
    {
        unique_id: 58,
        quote: "As God is my witness, I'll never be hungry again.",
        movieName: 'Gone with the Wind',
    },
    {
        unique_id: 59,
        quote: "Well, here's another nice mess you've gotten me into!",
        movieName: 'Sons of the Desert',
    },
    {
        unique_id: 60,
        quote: "Say 'hello' to my little friend!",
        movieName: 'Scarface',
    },
    {
        unique_id: 61,
        quote: 'What a dump.',
        movieName: 'Beyond the Forest',
    },
    {
        unique_id: 62,
        quote: "Mrs. Robinson, you're trying to seduce me. Aren't you?",
        movieName: 'The Graduate',
    },
    {
        unique_id: 63,
        quote: "Gentlemen, you can't fight in here! This is the War Room!",
        movieName:
            'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    },
    {
        unique_id: 64,
        quote: 'Elementary, my dear Watson.',
        movieName: 'The Adventures of Sherlock Holmes',
    },
    {
        unique_id: 65,
        quote: 'Get your stinking paws off me, you damned dirty ape.',
        movieName: 'Planet of the Apes',
    },
    {
        unique_id: 66,
        quote:
            'Of all the gin joints in all the towns in all the world, she walks into mine.',
        movieName: 'Casablanca',
    },
    {
        unique_id: 67,
        quote: "Here's Johnny!",
        movieName: 'The Shining',
    },
    {
        unique_id: 68,
        quote: "They're here!",
        movieName: 'Poltergeist',
    },
    {
        unique_id: 69,
        quote: 'Is it safe?',
        movieName: 'Marathon Man',
    },
    {
        unique_id: 70,
        quote: "Wait a minute, wait a minute. You ain't heard nothin' yet!",
        movieName: 'The Jazz Singer',
    },
    {
        unique_id: 71,
        quote: 'No wire hangers, ever!',
        movieName: 'Mommie Dearest',
    },
    {
        unique_id: 72,
        quote: 'Mother of mercy, is this the end of Rico?',
        movieName: 'Little Caesar',
    },
    {
        unique_id: 73,
        quote: "Forget it, Jake, it's Chinatown.",
        movieName: 'Chinatown',
    },
    {
        unique_id: 74,
        quote: 'I have always depended on the kindness of strangers.',
        movieName: 'A Streetcar Named Desire',
    },
    {
        unique_id: 75,
        quote: 'Hasta la vista, baby.',
        movieName: 'Terminator 2: Judgment Day',
    },
    {
        unique_id: 76,
        quote: 'Soylent Green is people!',
        movieName: 'Soylent Green',
    },
    {
        unique_id: 77,
        quote: 'Open the pod bay doors, HAL.',
        movieName: '2001: A Space Odyssey',
    },
    {
        unique_id: 78,
        quote: "Surely you can't be serious.",
        movieName: 'Rumack:',
    },
    { unique_id: 79, quote: 'Yo, Adrian!', movieName: 'Rocky' },
    {
        unique_id: 80,
        quote: 'Hello, gorgeous.',
        movieName: 'Funny Girl',
    },
    {
        unique_id: 81,
        quote: 'Toga! Toga!',
        movieName: "National Lampoon's Animal House",
    },
    {
        unique_id: 82,
        quote: 'Listen to them. Children of the night. What music they make.',
        movieName: 'Dracula',
    },
    {
        unique_id: 83,
        quote:
            "Oh, no, it wasn't the airplanes. It was Beauty killed the Beast.",
        movieName: 'King Kong',
    },
    {
        unique_id: 84,
        quote: 'My precious.',
        movieName: 'The Lord of the Rings: The Two Towers',
    },
    {
        unique_id: 85,
        quote: 'Attica! Attica!',
        movieName: 'Dog Day Afternoon',
    },
    {
        unique_id: 86,
        quote:
            "Sawyer, you're going out a youngster, but you've got to come back a star!",
        movieName: '42nd Street',
    },
    {
        unique_id: 87,
        quote:
            "Listen to me, mister. You're my knight in shining armor. Don't you forget it. You're going to get back on that horse, and I'm going to be right behind you, holding on tight, and away we're gonna go, go, go!",
        movieName: 'On Golden Pond',
    },
    {
        unique_id: 88,
        quote:
            "Tell 'em to go out there with all they got and win just one for the Gipper.",
        movieName: 'Knute Rockne, All American',
    },
    {
        unique_id: 89,
        quote: 'A martini. Shaken, not stirred.',
        movieName: 'Goldfinger',
    },
    {
        unique_id: 90,
        quote: "Who's on first?",
        movieName: 'The Naughty Nineties',
    },
    {
        unique_id: 91,
        quote:
            "Cinderella story. Outta nowhere. A former greenskeeper, now, about to become the Masters champion. It looks like a mirac...It's in the hole! It's in the hole! It's in the hole!",
        movieName: 'Caddyshack',
    },
    {
        unique_id: 92,
        quote:
            'Life is a banquet, and most poor suckers are starving to death!',
        movieName: 'Auntie Mame',
    },
    {
        unique_id: 93,
        quote: 'I feel the need—the need for speed!',
        movieName: 'Top Gun',
    },
    {
        unique_id: 94,
        quote:
            'Carpe diem. Seize the day, boys. Make your lives extraordinary.',
        movieName: 'Dead Poets Society',
    },
    {
        unique_id: 95,
        quote: 'Snap out of it!',
        movieName: 'Moonstruck',
    },
    {
        unique_id: 96,
        quote:
            'My mother thanks you. My father thanks you. My sister thanks you. And I thank you.',
        movieName: 'Yankee Doodle Dandy',
    },
    {
        unique_id: 97,
        quote: 'Nobody puts Baby in a corner.',
        movieName: 'Dirty Dancing',
    },
    {
        unique_id: 98,
        quote: "I'll get you, my pretty, and your little dog too!",
        movieName: 'The Wizard of Oz',
    },
    {
        unique_id: 99,
        quote: "I'm the King of the World",
        movieName: 'Titanic',
    },
    {
        unique_id: 100,
        quote: "They may take our lives, but they'll never take our freedom!",
        movieName: 'Braveheart',
    },
    {
        unique_id: 101,
        quote: 'You complete me.',
        movieName: 'Jerry Maguire',
    },
    {
        unique_id: 102,
        quote:
            'My name is Maximus Decimus Meridius, commander of the Armies of the North, General of the Felix Legions and loyal servant to the true emperor, Marcus Aurelius. Father to a murdered son, husband to a murdered wife. And I will have my vengeance, in this life or the next.',
        movieName: 'Gladiator',
    },
    {
        unique_id: 103,
        quote: 'I drink your milkshake!',
        movieName: 'There Will Be Blood',
    },
    {
        unique_id: 104,
        quote: 'Get your stinking paws off me, you damned dirty ape!',
        movieName: 'Planet of the Apes',
    },
    {
        unique_id: 105,
        quote: 'You make me want to be a better man.',
        movieName: 'As Good as It Gets',
    },
    {
        unique_id: 106,
        quote: 'Never compromise. Not even in the face of Armageddon.',
        movieName: 'Watchmen',
    },
    {
        unique_id: 107,
        quote: 'Why so serious?',
        movieName: 'The Dark Knight',
    },
    {
        unique_id: 108,
        quote: 'The things you own end up owning you.',
        movieName: 'Fight Club',
    },
    {
        unique_id: 109,
        quote:
            "It's only after we've lost everything that we're free to do anything.",
        movieName: 'Fight Club',
    },
    {
        unique_id: 110,
        quote: 'Yippee-ki-yay, motherfucker.',
        movieName: 'Die Hard',
    },
    {
        unique_id: 111,
        quote: 'Looks like I picked the wrong week to quit amphetamines.',
        movieName: 'Airplane',
    },
    {
        unique_id: 112,
        quote: "They're taking the Hobbits to Isengard.",
        movieName: 'The Lord of the Rings: The Two Towers',
    },
    {
        unique_id: 113,
        quote: "That's it, man. Game over, man. Game over!",
        movieName: 'Aliens',
    },
    {
        unique_id: 114,
        quote:
            'I know it was you, Fredo. You broke my heart. You broke my heart!',
        movieName: 'The Godfather Part II',
    },
    {
        unique_id: 115,
        quote: 'As if!',
        movieName: 'Clueless',
    },
    {
        unique_id: 116,
        quote: 'Wax on, wax off.',
        movieName: 'The Karate Kid',
    },
    {
        unique_id: 117,
        quote: "That'll do, Pig. That'll do.",
        movieName: 'Babe',
    },
    {
        unique_id: 118,
        quote: "I don't want to survive. I want to survive",
        movieName: '12 years a Slave',
    },
    {
        unique_id: 119,
        quote: 'Good morning, Vietnam!',
        movieName: 'Good Morning, Vietnam',
    },
    {
        unique_id: 120,
        quote: "I mean, funny like I'm a clown? I amuse you?",
        movieName: 'Goodfellas',
    },
    {
        unique_id: 121,
        quote: "Help me, Obi-Wan Kenobi. You're my only hope.",
        movieName: 'Star Wars',
    },
    {
        unique_id: 122,
        quote: 'Pay no attention to that man behind the curtain!',
        movieName: 'The Wizard of Oz',
    },
    {
        unique_id: 123,
        quote: 'The Dude abides',
        movieName: 'The Big Lebowski',
    },
    {
        unique_id: 124,
        quote: 'Just keep swimming.',
        movieName: 'Finding Nemo',
    },
    {
        unique_id: 125,
        quote: 'Leave the gun. Take the cannoli',
        movieName: 'The Godfather',
    },
    {
        unique_id: 126,
        quote: "I am serious. And don't call me Shirley",
        movieName: 'Airplane',
    },
    {
        unique_id: 127,
        quote: 'To infinity and beyond!',
        movieName: 'Toy Story',
    },
    {
        unique_id: 128,
        quote:
            'The first rule of Fight Club is: You do not talk about Fight Club.',
        movieName: 'Fight Club',
    },
];

exports.handler = function(event, context) {
    try {
        console.log(
            'event.session.application.applicationId=' +
                event.session.application.applicationId
        );

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

        if (event.session.application.applicationId !== process.env.APP_ID) {
            context.fail('Invalid Application ID');
        }

        if (event.session.new) {
            onSessionStarted(
                { requestId: event.request.requestId },
                event.session
            );
        }

        if (event.request.type === 'LaunchRequest') {
            onLaunch(event.request, event.session, function callback(
                sessionAttributes,
                speechletResponse
            ) {
                context.succeed(
                    buildResponse(sessionAttributes, speechletResponse)
                );
            });
        } else if (event.request.type === 'IntentRequest') {
            onIntent(event.request, event.session, function callback(
                sessionAttributes,
                speechletResponse
            ) {
                context.succeed(
                    buildResponse(sessionAttributes, speechletResponse)
                );
            });
        } else if (event.request.type === 'SessionEndedRequest') {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail('Exception: ' + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log(
        'onSessionStarted requestId=' +
            sessionStartedRequest.requestId +
            ', sessionId=' +
            session.sessionId
    );

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log(
        'onLaunch requestId=' +
            launchRequest.requestId +
            ', sessionId=' +
            session.sessionId
    );

    var cardTitle = 'Movie Quoter';
    var speechOutput =
        'Welcome to Movie Quoter.  The purpose of this skill is see what the quotes are from popular movies.  To start using the skill, say Alexa, ask movie quoter to quote movies';
    callback(
        session.attributes,
        buildSpeechletResponse(cardTitle, speechOutput, '', false) // False cuz we dont want the session to end
    );
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log(
        'onIntent requestId=' +
            intentRequest.requestId +
            ', sessionId=' +
            session.sessionId
    );

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // dispatch custom intents to handlers here
    if (intentName == 'AskQuote') {
        handleAskQuoteRequest(intent, session, callback);
    } else {
        throw 'Invalid intent';
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log(
        'onSessionEnded requestId=' +
            sessionEndedRequest.requestId +
            ', sessionId=' +
            session.sessionId
    );

    var speechOutput = 'Thank you for using movie quoter. Goodbye!';
    callback(
        session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, '', true)
    );
}

function handleAskQuoteRequest(intent, session, callback) {
    callback(
        session.attributes,
        buildSpeechletResponseWithoutCard(getQuote().quote, '', true)
    );
}

// ------- Helper functions to build responses -------

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: 'PlainText',
            text: output,
        },
        card: {
            type: 'Simple',
            title: title,
            content: output,
        },
        reprompt: {
            outputSpeech: {
                type: 'PlainText',
                text: repromptText,
            },
        },
        shouldEndSession: shouldEndSession,
    };
}

function buildSpeechletResponseWithoutCard(
    output,
    repromptText,
    shouldEndSession
) {
    return {
        outputSpeech: {
            type: 'PlainText',
            text: output,
        },
        reprompt: {
            outputSpeech: {
                type: 'PlainText',
                text: repromptText,
            },
        },
        shouldEndSession: shouldEndSession,
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: '1.0',
        sessionAttributes: sessionAttributes,
        response: speechletResponse,
    };
}

// Random number generator :smile:
function getQuote() {
    return quotesArray[Date.now() % quotesArray.length];
}
