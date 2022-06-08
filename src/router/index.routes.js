import home from '../views/home.js'
let content=document.getElementById('root');
const router=(route)=>{
    content.innerHTML='';
    console.log(route);
    switch(route){
        case '':{
            return content.appendChild(home());
        }
        case '#/posts':
            return console.log("post!!");
        case '#/products':
            return console.log("products");
        default:
            return console.log("404");
    }
}
export {router};