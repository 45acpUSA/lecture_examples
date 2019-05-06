//const pirates = ['Black Beard', 'Jack Sparrow', 'Red Beard', 'Anne Bonny']

function allTheBeards(pirates){
  return pirates.reduce((list, pirate)=>{
    let nameParts = pirate.split(" ")
    if(nameParts[1] === "Beard"){
      list.push(pirate)
    }
    return list
  }, [])
}

//console.log(allTheBeards(pirates))


const pirates = [
  {
    name: 'Black Beard',
    shipCount: 3,
  },
  {
    name: 'Jack Sparrow',
    shipCount: 5,
  },
  {
    name: 'Anne Bonny',
    shipCount: 24,
  },
  {
    name: 'Red Beard',
    shipCount: 10,
  },
]


function largest(pirates){
  return pirates.reduce((currentLargest, pirate)=>{
    console.log(currentLargest, pirate)
    if( pirate.shipCount > currentLargest.shipCount || !currentLargest){
      return pirate
    } else {
      return currentLargest
    }
  })
}

console.log(largest(pirates))
