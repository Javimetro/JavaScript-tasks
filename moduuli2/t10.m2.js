'use strict';

// program ask for number of candidates.
const lkm = parseInt(prompt('How many candidates?:' ));
const candidates = [];

for (let i = 1; i <= lkm; i++){
  const object = {};
  candidates.push(object)
  object.name = prompt(`Name for candidate ${i}: `)
  object.votes = 0
}

console.log(candidates)
// silmukka akaa
//ask for the name of candidates: "candidate number 1"
// store candidates' names and initial vote count in objects to artay
// silmukka loppu
const voterLkm = parseInt(prompt('How many voters?:' ));
for (let i = 1; i <= voterLkm; i++){
  let voteName = prompt('Who are you voting for?: ')
  candidates.voteName.vote
}


// The program ask for the number of voters.


//  silmukka joka käy läpi äänestäjien lukumäärä.
//        ask who they will vote for.
//        toinen silmukka missä käydään ehdokkaat läpi.
//        if (ääni = ehdokas.name)
//             ehdokas.vote ++ (eli kasvata ehdokas.vote yhdellä)
//        simukka päätty
//  silmukka päätty

// järjestää ehdokkaat votes mukaan, suurimmasta pienimpään.

// taulukon ensimmäinen on voittaja.

// some help: a == ellie kohta, b == frank kohta