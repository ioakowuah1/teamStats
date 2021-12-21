const team = {
    _players: [ {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
      },
      {
        firstName: 'Samuel',
        lastName: 'Boadu',
        age: 12
      },
      {
        firstName: 'Akoto',
        lastName: 'Antwi',
        age: 11
      }],
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Milan',
        teamPoints: 40,
        opponentPoints: 25
      },
      {
        opponent: 'Chelsea',
        teamPoints: 32,
        opponentPoints: 20
      }
    ],
    get players(){
     return this._players;
    },
    get games(){
     return this._games;
    },
    addPlayer (firstName,lastName,age){
     let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
     };
     this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints){
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this.games.push(game);
    }
  };
  
  team.addPlayer('Steph','Curry',28);
  team.addPlayer('Lisa','Leslie',44);
  team.addPlayer('Bugs','Bunny',76);
  
  //console.log(team.players)
  
  team.addGame('Barca', 42, 32);
  team.addGame('Juventus', 32, 22);
  team.addGame('Napoli', 22, 12);
  
  console.log(team.games)