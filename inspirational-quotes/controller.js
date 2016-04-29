angular.module('app')
  .controller('controller',['myFactory','$localStorage', controllerFunction])

  function controllerFunction (myFactory,$localStorage) {
    var cont = this
    cont.listOfQuotes = myFactory.listOfQuotes

    cont.quote
    cont.author
    cont.show = false
    cont.rating = cont.listOfQuotes.rating
    cont.popupDiv = false
    cont.currentQuote

    cont.Quote = function(quote,author) {
      this.quote = quote
      this.author = author
    }

    cont.addQuote = function() {
      cont.newestQuote = new cont.Quote (cont.newQuote, cont.newAuthor)
      cont.listOfQuotes.unshift(cont.newestQuote)
      cont.newQuote = ''
      cont.newAuthor = ''
      cont.storeData()
    }

    cont.displayQuoteOptions = function(quote) {

      cont.popupDiv = true
      cont.currentQuote = quote
    }

    cont.authorList = function(quote) {
      cont.quoteAuthor = quote.author
      cont.show = true
    }

    cont.clear = function() {
      cont.quoteAuthor = ''
      cont.show = false
    }

    cont.clearIt = function() {
      // console.log(cont.currentQuote)
      cont.currentQuote.rating = cont.userRating
      $localStorage.quotes = cont.listOfQuotes
      cont.popupDiv = false
      cont.userRating = ''
    }

    cont.deleteIt = function() {
      console.log(cont.currentQuote)
    }

    cont.storeData = function() {
      $localStorage.quotes = cont.listOfQuotes
    }

  }
