angular.module('app')
  .factory('myFactory', ['$localStorage', factoryFunction])

  function factoryFunction ($localStorage) {

    listOfQuotes = [
      {
        quote: 'This has been a wild ride',
        author: 'Steve',
        rating: 2,
      },
      {
        quote: 'Remember, it was much harder a week ago',
        author: 'Steve',
        rating: 4,
      },
      {
        quote: 'Get yourself a beer',
        author: 'Steve',
        rating: 5,
      },
      {
        quote:'If debugging is the process of removing software bugs, then programming must be the process of putting them in.',
        author: 'Edsger Dijkstra',
        rating: 4,
      },
      {
        quote:'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2.',
        author:'Anonymous',
        rating: 5,
      },
      {
        quote:'Walking on water and developing software from a specification are easy if both are frozen.',
        author:'Edward V Berard',
        rating: 1,
      },
      {
        quote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        author:'Brian Kernighan',
        rating: 4,
      },
    ]

    return {
      listOfQuotes : $localStorage.quotes ? $localStorage.quotes : listOfQuotes,

    }
  }
