
const companies =[
    {name:'samsung', marketValue: 50, CEO: 'Kim Hyum Suk', foundedOn: 1938},
    {name:'Microsoft', marketValue: 415, CEO: 'Kim Satya Nadella Suk', foundedOn: 1975},
    {name:'intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    {name:'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    {name:'spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name:'apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976}];
    
const allMarketValue = companies.reduce (((acc, current) => acc + current.marketValue),0)


    console.log (allMarketValue)