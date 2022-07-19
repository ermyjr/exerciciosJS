const list =[
    {name: 'Rodolfo', vip:true},
    {name: 'Maria', vip:false},
    {name: 'João', vip:true},
    {name: 'Bruno', vip:true},
    {name: 'Carla', vip:false},
    {name: 'Ana', vip:true},
    {name: 'Julio', vip:false},
]


const newList = list.map( client=> {
    const newList = {
       name:client.name,
       vip: client.vip,
       sector:client.vip ? 'Black' : 'Green' 
    
    }

    return newList
})


console.log(newList)





const students =[
    {name: 'Rodolfo', testGrade:7},
    {name: 'Maria', testGrade:5},
    {name: 'João', testGrade:8},
    {name: 'Bruno', testGrade:9},
    {name: 'Carla', testGrade:3},
    {name: 'Ana', testGrade:2},
    {name: 'Julio',testGrade:10},
]

const newStudents = students.map( students=>{

    let AprovedOrNot
    if ( students.testGrade < 7){
        AprovedOrNot ="Disapproved"
    }else{
        AprovedOrNot="Approved"}  


    const aluns = {
       name:students.name,
       finalResult: AprovedOrNot
    }
        
    return(aluns)
      
    })

    console.log(newStudents)