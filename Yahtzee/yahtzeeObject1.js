yahtzee = {
  'turnsRemanining' : 13,
  'throwsRemaniningInTurn' : 3,
  'player' : {
    'name' : 'Paul',
    'avatar' : 'avatar.jpeg'
  },
  'dice' : [
    {
      'sideUp' : 1,
      'saved' : false
    },
    {
      'sideUp' : 1,
      'saved' : false
    },
    {
      'sideUp' : 1,
      'saved' : false
    },
    {
      'sideUp' : 1,
      'saved' : false
    },
    {
      'sideUp' : 6,
      'saved' : true
    },
  ],
'scoreCard' : [
  {
    'title' : 'Ones',
    'top' : true,
    'displaySequence' : 1,
    'scoreRecorded' : false,
    'score' : 0,
    'scoreCondition' : 'notSureYet',
    'scoreMath' : 'sumOfOnes'
  },
  {
    'title' : 'Twos',
    'top' : true,
    'displaySequence' : 2,
    'scoreRecorded' : false,
    'score' : 0,
    'scoreCondition' : 'notSureYet',
    'scoreMath' : 'sumofThrees'
  },
  {
    'title' : 'Threes',
    'top' : true,
    'displaySequence' : 3,
    'scoreRecorded' : false,
    'score' : 0,
    'scoreCondition' : 'notSureYet',
    'scoreMath' : 'sumofThrees'
  },
  {
    'title' : 'Three of a Kind',
    'top' : false,
    'displaySequence' : 7,
    'scoreRecorded' : false,
    'score' : 0,
    'scoreCondition' : 'notSureYet',
    'scoreMath' : 'sumofDice'
  },
  {
    'title' : 'Four of a Kind',
    'top' : false,
    'displaySequence' : 8,
    'scoreRecorded' : false,
    'score' : 0,
    'scoreCondition' : 'notSureYet',
    'scoreMath' : 'sumofDice'
  }
]
}
