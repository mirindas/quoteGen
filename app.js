$(document).ready(function () {
  LoadDataAsync();

  function LoadDataAsync() {
    $.ajax({
      type: "GET",
      url: "quotes.json",
      data: "application/json",
      dataType: "json",
      error: function (xhr) {
        console.log("Error with ajax call");
      },
      success: function (response) {
        ParseData(response);
      },
    });
  }

  function ParseData(response) {
    NewQuote();

    let targetButton = document.getElementById("new-quote");

    $(targetButton).click(function () {
        NewQuote();
    })

    $("#tweet-quote").attr(
      'href',
      'https://twitter.com/intent/tweet?text=' +
        encodeURIComponent('"'+ document.getElementById("text").innerText + '"' + document.getElementById("author").innerText)
    );

    function NewQuote() {
        let targetText = document.getElementById("text");
        let targetAuthor = document.getElementById("author");
        let quoteObject = response[Math.floor(Math.random() * response.length)];
    
        targetText.innerText = quoteObject.quote;
        targetAuthor.innerText = "- " + quoteObject.author;
      }
  }

});
