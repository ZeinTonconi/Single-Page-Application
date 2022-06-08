import "bootstrap/dist/css/bootstrap.min.css";
import { router } from "./router/index.routes.js";
import './style.scss';

window.addEventListener('hashchange',()=>{
    router(window.location.hash);
})