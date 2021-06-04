(function () {
    function generateMagicNumber() {
        return Math.floor(Math.random() * 100) + 900;
    }

    console.log("This is your magic number: " + generateMagicNumber());

    var favoriteNumber = 5;
    console.log("Twice your favorite number is " + favoriteNumber * 2);
})();