function generateChallenge() {
    var actions = ["Dance", "Lip sync", "Comedy skit", "DIY project", "Magic trick","Fitness routine","Cooking challenge","Impersonation","Pet tricks","Fashion show"];
    var hashtags = ["#DanceMagic", "#LipSyncFever", "#ComedyGold", "#DIYChallenge", "#MagicMoments","#FitFrenzy","#CookingCraze","#ImpersonationStation","#PetParade","#FashionFlair"];
    var songs = ["Savage Love by Jawsh 685 and Jason Derulo",
    "Renegade by K CAMP",
    "Say So by Doja Cat",
    "Blinding Lights by The Weeknd",
    "WAP by Cardi B ft. Megan Thee Stallion",
    "Uptown Funk by Mark Ronson ft. Bruno Mars",
    "Sicko Mode by Travis Scott",
    "Watermelon Sugar by Harry Styles",
    "Surrender by Natalie Taylor",
    "Stunnin' by Curtis Waters ft. Harm Franklin"];

    var action = actions[Math.floor(Math.random() * actions.length)];
    var hashtag = hashtags[Math.floor(Math.random() * hashtags.length)];
    var song = songs[Math.floor(Math.random() * songs.length)];

    var challengeText = `Challenge: ${action} to the song '${song}' and use the hashtag ${hashtag}`;
    document.getElementById("challenge").innerText = challengeText;

    var imageUrls = ["https://media.gq.com/photos/6515bae3ce56f476f6886228/16:9/w_2560%2Cc_limit/81156287", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_x99M4UjrZoMBt38S060n6sYnCqudLdIIyw&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRT9dFa5gMkzlaObjtmGTE53zTWbFxpvtE7w&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiV7WqYddhIhjLPSqnR79dY9Gs48Pv0g9N-sDG40MoxJPQRycs5iG7aehi4gOzIuxjJB8&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_lMJxC8vXzKslOWdUtDepnuMKroWup_ROzKEmHlKk8NL5_D-d2MDK6vjk-9MevLspR1c&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgETOZShW1CvxRb2NYYnhEDfv4-1roiNqNjTx74-JNOaMUHSlL7BEAA1JoEq7uzbaI9os&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFl8Y4PjwQWdO-asFTP133ZtLHzePZ5DvbvQ&usqp=CAU"];
    var randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    document.getElementById("challenge-image").src = randomImageUrl;
}

