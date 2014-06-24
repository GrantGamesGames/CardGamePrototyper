'use strict';

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  res.json([
  {
    "Type":"Hand",
    "Name":"Straight Flush",
    "Quantity":1,
    "Description":"2"
  },
  {
    "Type":"Hand",
    "Name":"Royal Flush",
    "Quantity":1,
    "Description":"1"
  },
  {
    "Type":"Hand",
    "Name":"Four of a Kind",
    "Quantity":1,
    "Description":"3"
  },
  {
    "Type":"Hand",
    "Name":"Full House",
    "Quantity":1,
    "Description":"4"
  },
  {
    "Type":"Hnad",
    "Name":"Flush",
    "Quantity":2,
    "Description":"5"
  },
  {
    "Type":"Hand",
    "Name":"Straight",
    "Quantity":2,
    "Description":"6"
  },
  {
    "Type":"Hand",
    "Name":"Three of a Kind",
    "Quantity":3,
    "Description":"7"
  },
  {
    "Type":"Hand",
    "Name":"Two Pair",
    "Quantity":3,
    "Description":"8"
  },
  {
    "Type":"Hand",
    "Name":"One Pair",
    "Quantity":4,
    "Description":"9"
  },
  {
    "Type":"Hand",
    "Name":"High Card",
    "Quantity":5,
    "Description":"10"
  },
  {
    "Type":"Action",
    "Name":"Cheat",
    "Quantity":5,
    "Description":"Look at any players hand"
  },
  {
    "Type":"Action",
    "Name":"Spot",
    "Quantity":5,
    "Description":"Stop a cheat. Can be used to stop a cheat on any player"
  },
  {
    "Type":"Action",
    "Name":"Slight Of Hand",
    "Quantity":3,
    "Description":"Switch a Hand CARD With Another Player"
  },
  {
    "Type":"Action",
    "Name":"Mark",
    "Quantity":3,
    "Description":"Randomly Trade A Hand Card with another Another Player"
  },
  {
    "Type":"Action",
    "Name":"Threat",
    "Quantity":2,
    "Description":"Force a player to fold"
  },
  {
    "Type":"Action",
    "Name":"Shoot",
    "Quantity":2,
    "Description":"Assignate another player"
  },
  {
    "Type":"Action",
    "Name":"Arrest",
    "Quantity":2,
    "Description":"Remove a player from the hand. They can't use any Actions"
  },
  {
    "Type":"Player",
    "Name":"Judge Roy Bean",
    "Quantity":1,
    "Description":"The Judge Can Arrest Anyone who Shoots someone else"
  },
  {
    "Type":"Player",
    "Name":"\"Doc\" Holliday",
    "Quantity":1,
    "Description":"Doc Can Shoot anyone who has shot someone else"
  },
  {
    "Type":"Player",
    "Name":"Billy the Kid",
    "Quantity":1,
    "Description":"Can use a Shoot as a threat."
  },
  {
    "Type":"Player",
    "Name":"Calamity Jane",
    "Quantity":1,
    "Description":"Can't be cheated"
  },
  {
    "Type":"Player",
    "Name":"Buffalo Bill",
    "Quantity":1,
    "Description":"Can discard hand card and draw another hand card"
  }
]);
};