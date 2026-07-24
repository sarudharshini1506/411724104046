let Students= []
function attach(student){
    Students.push(student)
}
function detach(student){
    let newUsers=[]
    for(let i of Students){
        if(i!=student){
            newUsers.push(i)
        }
    }
    Students=newUsers
}
function notify(event,message){
    console.log("Event: "+event)
    for(let i of Students){
        console.log(i+": "+message)
    }
}
attach("lega")
attach("mohana")
notify("holiday","tomorrow is holiday due to diwali")
notify("Fest","next month fest will be conducted")
attach("maddhu")
detach("mohana")
notify("Exam","Next week end semester exam will be conducted")
 
const age=23
if(age<18){
    console.log("Not eligible")
}
else if(age==18){
    console.log("Congrats")
}
else{
    console.log("Eligible")
}