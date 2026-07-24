let observers= []
function attach(user){
    observers.push(user)
}
function detach(user){
    let newUsers=[]
    for(let i of observers){
        if(i!=user){
            newUsers.push(i)
        }
    }
    observers=newUsers
}
function notify(){
    for(let i in observers){
        console.log(i+": Notified")
    }
}
attach("A")
attach("B")
notify()
attach("C")
detach("B")
notify()