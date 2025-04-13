const quoteText = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");

async function fetchQuotes() {
    try {
        const response = await fetch("quotes.json"); // JSON file fetch karo
        const data = await response.json(); // JSON ko JavaScript object me convert karo
        return data; // Quotes return karo
    } catch (error) {
        console.error("Error fetching quotes:", error);
        return [];
    }
}

async function displayQuote() {
    const quotes = await fetchQuotes(); // Quotes JSON se fetch karo
    if (quotes.length > 0) {
        let randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.innerText = quotes[randomIndex].quote; // Random quote set karo
    }
}

newQuoteButton.addEventListener("click", displayQuote);

// Page load hone pe bhi ek quote show ho
displayQuote();
