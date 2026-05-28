const course={
    name:"JS",
    price:"500",
    teacher:"Hitesh"
}

const{teacher}=course

console.log(teacher) //no need to write course.teacher

//destrcuturing of objects
const navbar=({company})=>{

}
navbar(company="Bhoomika")

//this is JSON, so the key is also a string
// {
//     "name":"Bhoomika",
//     "course":"JS",
//     "price":"Free"
// }
