let trailLeague = {
  nTeams: 3,
  teams: [
    {
      name: "Salomon",
      nRunners: 3,
      runners: [
        {
          name: "Courtney Dauwalter",
          age: 38,
        },
        {
          name: "Davide Magnini",
          age: 25,
        },
        {
          name: "Jan Torrella",
          age: 19,
        },
      ],
    },
    {
      name: "The North Face",
      nRunners: 1,
      runners: [
        {
          name: "Pau Capell",
          age: 45,
        },
      ],
    },
    {
      name: "NNormal",
      nRunners: 2,
      runners: [
        {
          name: "Kilian Jornet",
          age: 35,
        },
        {
          name: "Emelie Forsberg",
          age: 36,
        },
      ],
    },
  ],
};

// function youngerTeam(trailLeague){
    let edades = [];

    for (let team of trailLeague.teams) { // recorre los equipos
      for (let runner of team.runners) { // recorre los corredores
        edades.push(runner); // aqui lo que haces es rellenar un array con las edades para luego hacer el math min
      }
    }

    console.log(edades.age);
// }

const obtainTheYounger = (trailLeague) => {
   
    let youngestRunner = trailLeague.teams.flatMap(team => team.runners)
    .reduce((a, b) => a.age < b.age ? a : b);
    
    return youngestRunner
}


let elMenor = obtainTheYounger(trailLeague)

console.log(elMenor.name)