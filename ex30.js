const list = [20,3,234,12,17,541,6,87,275,1000]

const newLiest = list.filter (number =>{
    if(number% 2 !== 0) return false
    if(number% 5 !== 0) return false
    return true
})


console.log(newLiest)



const companies =[
    {name:'samsung', marketValue: 50, CEO: 'Kim Hyum Suk', foundedOn: 1938},
    {name:'Microsoft', marketValue: 415, CEO: 'Kim Satya Nadella Suk', foundedOn: 1975},
    {name:'intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    {name:'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    {name:'spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name:'apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976}];
    
const newCompanies = companies.filter (company =>{  

    if(company.foundedOn <= 1975 ) return false
    if(company.marketValue <= 200 )return false

    return true
})


    console.log (newCompanies)