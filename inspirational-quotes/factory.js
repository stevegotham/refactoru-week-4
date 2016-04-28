angular.module('app')
  .factory('myFactory', [factoryFunction])

  function factoryFunction () {

    listOfQuotes = [
      {
        quote:'If debugging is the process of removing software bugs, then programming must be the process of putting them in.',
        author: 'Edsger Dijkstra',
        rating: 4,
      },
      {
        quote:'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2.',
        author:'Anonymous',
        rating: 8,
      },
      {
        quote:'Walking on water and developing software from a specification are easy if both are frozen.',
        author:'Edward V Berard',
        rating: 0,
      },
      {
        quote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        author:'Brian Kernighan',
        rating: 6,
      },
    ]

    return {
      listOfQuotes : listOfQuotes,
    }
  }
