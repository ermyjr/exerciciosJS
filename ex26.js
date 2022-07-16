const people = [{
    name: 'jose',
    numberOfChildren: 0,
    salary: 1000
},
{
    name: 'joaquim',
    numberOfChildren: 1,
    salary: 1800
},
{
    name: 'antonio',
    numberOfChildren: 3,
    salary: 1600
},
{
    name: 'maria',
    numberOfChildren: 2,
    salary: 1500
},
{
    name: 'roberta',
    numberOfChildren: 0,
    salary: 4000
},
{
    name: 'carla',
    numberOfChildren: 1,
    salary: 3000
},
{
    name: 'alves',
    numberOfChildren: 3,
    salary: -2000
}]

function findAvarageAndHighestSalary(peopleInformation) {
    let averageSalary = 0
    let averageChildren = 0
    let highestSalary = 0

    for (let i = 0; i <= peopleInformation.length; i++) {

        const salary = peopleInformation[i].salary
        const children = peopleInformation[i].numberOfChildren

        if (salary > highestSalary) highestSalary = salary

        if (salary < 0) {
            console.log(`media de salario R$${(averageSalary / i).toFixed(0)}`)
            console.log(`media de filhos ${(averageChildren / i).toFixed(0)}`)
            console.log(`maior salario r$${highestSalary}`)
            break
        } else {
            averageSalary = averageSalary + salary
            averageChildren += children
        }

    }
}

findAvarageAndHighestSalary(people)
