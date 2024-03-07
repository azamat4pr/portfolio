let apiQuotes = [];

// Show New Quote
function newQuote(){
    // Pick a random quote from apiQuotes array
    const random_quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(random_quote);
}


// Get quotes from API
async function getQuotes(){
    const apiURL = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try {
        const response = await fetch(apiURL);
        apiQuotes =  await response.json();
        newQuote();
    } catch(error) {
        // Carch errors here
    }
}


// On load
getQuotes();