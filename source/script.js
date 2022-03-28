// fetch('https://icanhazdadjoke.com/slack')

fetch("http://quotable.io/random")

.then(data => data.json())
.then(quoteData => {
    const quoteText = quoteData.content;
    const quoteElement = document.getElementById('quoteElement');

    quoteElement.innerHTML = quoteText;
})



// <!------------------------------------------------------------------
// Developer- Keshav Kumar 
// Email- keshavkumar9431@gmail.com
// Github- https://github.com/keshav-fixed-404 
// ------------------------------------------------------------------->

