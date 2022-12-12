//intro
alert("You are the king of Krudor. You have been ruling over this land for as long as you can remember.");
alert("You've noticed that it's starting to get a little boring in here, so you have just decided to allow subjects to come visit you at your throne one at a time, asking for advice on any royal matters.");
alert("Who knows, maybe they'll be amusing.");

//first encounter
alert("As the first subject walks in, you start to realise that this was a bad idea.");
alert("I mean, he's just a dirty old peasant in ragged clothing! There is nothing special AT ALL about this guy.");
alert("You sit there, anxious to get this over with, when he asks his one question:");
alert('"Do you like the color yellow?"');
alert("He can't be serious.");
alert("This guy is at the hands of the KING in what is quite possibly his only ever chance to ask you ANYTHING IN THE WORLD, and he had the AUDACITY to waste it on finding out your opinion on an arbitrary color. It's his loss then.");
let likesYellow = prompt("Well, I guess we've had enough time stalling this all-important question. DO you like the yellow? (0-No, 1-Yes)");

let reallyLikesYellow = "aaa"
let reallySuperDuperLikesYellow = "aaa"

if (likesYellow == 0) {
    alert('You see his face scrunch up in digust. He is completely and utterly flabbergasted at your simple utterance of "no", as if such a word was inconceivable in this context.');
    alert('"SCREW YOU!", he yells out. "MAY YOUR WOES BE MANY, AND YOUR DAYS FEW!"');
    alert("He then bolts out of the castle, screaming out the top of his lungs.");
    alert("It's clear you won't see the last of him.");
} else {
    reallyLikesYellow = prompt('You see his face light up in utter delight. "Do you REALLY like the color yellow?" (0-No, 1-Yes)');

    if (reallyLikesYellow == 0) {
        alert('"Oh", he says. After staring into space for a while, he walks away with mild disappointment.');
    } else {
        reallySuperDuperLikesYellow = prompt('"Do you REALLY SUPER DUPER like the color yellow?" (0-No, 1-Yes)');

        if (reallySuperDuperLikesYellow == 0) {
            alert('"Oh", he says. After staring into space for a while, he walks away with mild disappointment.');
        } else {
            alert("Tears of joy run down the peasant's face, as if he's just won the lottery.");
            alert('"THIS IS THE GREATEST DAY OF MY LIFE! I SIMPLY CANNOT WAIT TO TELL THE OTHERS!"');
            alert("He then bolts out of the castle, screaming out the top of his lungs.");
            alert("It's clear you won't see the last of him.");
        }
    }
}

alert("...");
alert("Well, that was stupid.");
alert("Let's hope this next subject isn't as brainless as the last one.");

//second encounter
alert("As the gates open to allow the next subject in, you slowly realize who this guy is.");
alert("You start freaking out.");
alert('"OH GOD", you shout out.');
alert('"ANYBODY THAN HIM!"');
alert("He walks up to your throne with a smug expression on his face, acting like he owns the place.");
alert("Turns out, he's Prince Rupert, your brother.");
alert("He may not be the king, but he is VERY popular with the whole kingdom. He knows that it will be long time before ever taking up kingly duties, so he just spends every day parading around town, gaining the affection of the general public.");
alert('"So, looks like the hermitcrab decided to come out of his shell", Rupert says after chuckling for a bit.');
alert("Oh yeah, I forgot to mention that this is the first time in YEARS since you've gotten into any kind of contact with the outside world.");
alert("Every decicion you've ever made prior to today has always been behind close doors, and carried out by servants.");
alert("People didn't think you even existed up until this point, and even thought Rupert was the king.");
alert("You promptly ask him to leave, but he refuses.");
alert('"Now, what is the rush here?", he asks, shaking his head assertively. "I just wanted to ask for your input on this thing pertaining to the annual fair. It is already shaping up to be the biggest one yet, just like every year."');
alert('"However, there is something that is really bugging me. You see, usually there is something big every year to make each fair unique and memorable. I have tried brainstorming, but nothing new has really come up. Thinking that you have been cooped up in that cave, SURELY you have SOMETHING in that noggin of yours."');
let fairThing = prompt("Well, DO YOU have an idea? (0-Ice Cream, 1-Jesters, 2-A Freaking Dragon, 3-You Forgor 💀)");

let twoDozenJesters = "aaa"

if (fairThing == 0) {
    alert("He considers the thought.");
    alert('"Actually, that is not a bad idea! Thanks, brother! I wholeheartedly came here expecting a completely fruitless conversation, but I got something useful out of it!"');
    alert('"I will be sure to have all the ice cream in the world churned out in no time!"');
    alert('"Also, what is an ice cream?"');
    alert("You quickly shove Rupert out the door before he can ask anymore questions about other creations of the future, which would eventually cause the space-time continuum to collapse.");
} else if (fairThing == 1) {
    twoDozenJesters = prompt('"I already did a have a show with a dozen jesters last year." (0-ok, 1-Well How About TWO dozen jesters?)');

    if (twoDozenJesters == 0) {
        alert('"..."');
        alert('"I knew you were not going to be of any help."');
        alert("Rupert walks away with that smug face of his wiped cleaned off.")
        if (reallyLikesYellow == 0 || reallySuperDuperLikesYellow == 0) {
            alert("Wow, you really have an affinity for disappointing people today.");
        }
    } else {
        alert("He considers the thought.");
        alert('"Actually, that is not a bad idea! Thanks, brother! I wholeheartedly came here expecting a completely fruitless conversation, but I got something useful out of it!"');
        alert('"I will be sure to have those two dozen jesters out in no time!"');
    }
} else if (fairThing == 2) {
    alert("Rupert's face becomes rather surprised at your answer.");
    alert('"A DRAGON!? Are you insane?"');
    alert('"That is the PERFECT thing to spice up the fair! Thank you!"');
    alert("He walks out of the castle triumphantly.");
} else {
    alert('"..."');
    alert('"I knew you were not going to be of any help."');
    alert("Rupert walks away with that smug face of his wiped cleaned off.")
    if (reallyLikesYellow == 0 || reallySuperDuperLikesYellow == 0) {
        alert("Wow, you really have an affinity for disappointing people today.");
    }
}

alert("That was quite a lot, but you somehow managed the first conversation with your brother in 20 years.");
alert("Thank goodness.");
alert("Even though you've only encountered two people here, you decided to close the doors for the rest of the day. This idea was a giant fiasco.");
alert("You go to bed.");
alert("...");

//the fair
alert("A few weeks pass with the doors shut once more.");
alert("...");
alert("With the days coming closer and closer to the fair, you start to feel bad about Rupert, as if you haven't done enough for him after all this time.");
alert("You decide to go to the annual fair.");
alert("As you walk into the fair, it's a spectacle unlike anything you have ever seen before. Booths as far as the eye can see, serving delights from all over the world.");

if (fairThing == 0) {
    alert("There was even an ice cream booth, courtesy of Prince Rupert.");
    alert("Not surprisingly, it tasted like complete garbage.");
    alert("It's just a tub of cream cheese with whole ice cubes mixed in. Disgusting.");
}

if (fairThing == 1 && twoDozenJesters != 0) {
    alert("You looked towards the stage, and you can see a performance going on, featuring a whopping two dozen jesters.");
    alert("The crowd is a bit bewildered as to why Prince Rupert would do jesters again this year, but they're entertained regardless.");
}

if (fairThing == 2) {
    alert("You look right in front of you and see a giant red dragon right up in your face.");
    alert("Its head is as big as your body, and wings that could span half the fairgrounds.");
    alert('"My goodness, brother! He is magnificant, is he not?" You hear Prince Rupert say. "Now do not worry, for this creature is a vegan. I made sure that my knights searched for the friendliest dragon in the realm."');
    alert("The dragon is just sitting there patiently, observing every activity going on in the fair. It's not even tied to a leash or anything. It seemed to have wandered in out of its own consent.");
    alert('"This was BY FAR the best (and only) good thing you have ever suggested to me! There is NO topping this!"');
}

if (fairThing > 2 || fairThing == 1 && twoDozenJesters == 0) {
    alert("You see Prince Rupert sitting down by himself in the food court tables.");
    alert('"Oh, out of the twenty-odd years that this fair was practiced, this very well be the worst one of them all."');
    alert("(You look around. Despite what he says, everyone seems to be having fun.)");
    alert('"Where is the flavor? What makes this fair unique than the last?"');
    alert("He turns his head towards you.");
    alert('"I blame you."');
    alert("He walks away.");
    alert("...");
}

//peasent
alert("You continue to explore the rest of the fair, when out of the corner of your eye, you spot a dirty old peasant in ragged clothing.");

if (likesYellow == 0) {
    alert("He's running at you.");
    alert("And he looks absolutely furious.");
    alert("He stops abruptly and points a finger at you.");
    alert('"THIS! THIS IS THE MAN WHO HATES THE COLOR YELLOW WITH A BLAZING PASSION!"');

    if (fairThing == 2) {
        alert("All of a sudden, everyone, including the dragon, stops whatever they were doing and looks right at you with a straight facial expression.");
    } else {
        alert("All of a sudden, everyone stops whatever they were doing and looks right at you with a straight facial expression.");
    }

    alert("It is dead silent.");

    alert("After what seems to have been an eternity, everyone charges at you, and you start running for your life.");
    alert("After running around for half an hour, they all corner you in a back alley located in the bad side of the kingdom.");
    alert("There is no way out.");
    alert("No one knows of your fate after this horrible frenzy of haters.");
} else if (likesYellow != 0 && reallyLikesYellow != 0 && reallySuperDuperLikesYellow != 0) {
    alert("He's running at you.");
    alert("And he looks incredibly euphoric.");
    alert("He stops abruptly and points a finger at you.");
    alert('"THIS! THIS IS THE MAN WHO LOVES THE COLOR YELLOW WITH A BLAZING PASSION!"');

    if (fairThing == 2) {
        alert("All of a sudden, everyone, including the dragon, stops whatever they were doing and looks right at you with a grinning facial expression. They almost look like serial killers.");
    } else {
        alert("All of a sudden, everyone stops whatever they were doing and looks right at you with a grinning facial expression. They almost look like serial killers.");
    }

    alert("It is dead silent.");

    alert("After what seems to have been an eternity, everyone charges at you, and you start running for your life.");
    alert("After running around for half an hour, they all corner you in a back alley located in the bad side of the kingdom.");
    alert("There is no way out.");
    alert("No one knows of your fate after this horrible frenzy of stans.");
} else {
    alert("He simply walks by with out noticing you, going about his day.");
    alert("You feel as if, had you either completely built up or struck down this guy's hopes answering his question, something insane would have happened.");
    alert("Oddly, you feel glad that wasn't the case.");
    alert("You go along to enjoy the rest of the fair, and live happily ever after.");
}

alert("----THE END----");
