class Profesion {
    private data: string

    constructor (info: Dict, title: string = "Engenieer") {
        this.data= info.name + " " + info.age + " " + title
    }
    public getData(){
        return this.data
    }
}

interface Dict {
    name: string
    age: number
}

function foo(bar: Dict) {
    return "Hello, " + bar.name + "you've " + bar.age + " years old"
}

let bar = { name:"Marco", age: 37 }
let developer: Profesion = new Profesion(bar, 'Developer')
console.log(foo(bar));
console.log(developer.getData());

document.body.innerHTML = developer.getData();