import router from "."
import Home from '@/pages/Home';
import Product from '@/pages/Product';
import Cart from '@/pages/Cart';


const routes = [
    {
        path:'/',
        component: Home,
        name:'home'
    },
    {
        path:'/loja',
        component: Product,
        name:'products'
    },
    {
        path:'/carrinho',
        component: Cart,
        name:'cart'
    }
]

export default routes