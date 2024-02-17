
const fullName  = document.querySelector("#name");
const userName = document.querySelector("#userName");
const content = document.querySelector("#content");
const postName = document.querySelector("#finalPost h3");
const postUserName = document.querySelector("#finalPost p");
const postContent = document.querySelector("#finalPost #quote p");
const englishQuoteBtn = document.querySelector("#englishQuoteBtn");
const hindiQuoteBtn = document.querySelector("#hindiQuoteBtn");

// Changing the Content
fullName.addEventListener("keyup", ()=>{
    postName.innerHTML = fullName.value;
});

userName.addEventListener("keyup", ()=>{
    const userText = userName.value;
    postUserName.innerHTML = `@${userText}`
});

content.addEventListener("keyup", ()=>{
    postContent.innerHTML = content.value;
});

// Generate English Quote
const english_api_url = "https://api.quotable.io/random";

async function generateEngQuote(url) {
    const response = await fetch(url);
    const data = await response.json();
    postContent.innerHTML = data.content;
}

englishQuoteBtn.addEventListener("click", ()=>{
    generateEngQuote(english_api_url);
});

// Generate Hindi Quote
const hindi_api_url = "https://hindi-quotes.vercel.app/random/success";

async function generateHinQuote(url) {
    const response = await fetch(url);
    const data = await response.json();
    postContent.innerHTML = data.quote;
}

hindiQuoteBtn.addEventListener("click", ()=>{
    generateHinQuote(hindi_api_url);
});