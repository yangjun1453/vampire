import { createRouter, createWebHistory } from "vue-router";
import Page1 from "../pages/page1.vue";
import Page2 from "../pages/page2.vue";
import Page3 from "../pages/page3.vue";
import Page4 from "../pages/page4.vue";

const router = createRouter({

    history:createWebHistory(),
    routes:[{path:'/page1',component:Page1
        
    },{
        path:'/page2',component:Page2
    },{
        path:'/page3',component:Page3
    },{
        path:'/page4',component:Page4
    },{
        path:'/',redirect:'/page1'
    }]
})
export default router