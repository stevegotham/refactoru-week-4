angular.module('app')
  .controller('controller',['myFactory', controllerFunction])

  function controllerFunction (myFactory) {
    var cont = this

    cont.listOfQuotes = myFactory.listOfQuotes
    cont.quote
    cont.author
    cont.show = false
    cont.rating = cont.listOfQuotes.rating

    cont.Quote = function(quote,author) {
      this.quote = quote
      this.author = author
    }

    cont.addQuote = function() {
      cont.newestQuote = new cont.Quote (cont.newQuote, cont.newAuthor)
      cont.listOfQuotes.unshift(cont.newestQuote)
      cont.newQuote = ''
      cont.newAuthor = ''
    }

    cont.displayQuoteOptions = function() {
      
    }

    cont.authorList = function(quote) {
      cont.quoteAuthor = quote.author
      cont.show = true
    }

    cont.clear = function() {
      cont.quoteAuthor = ''
      cont.show = false
    }
  }
