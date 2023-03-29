import { Home, Product, Signin, Signup, CreatSlider,AdminPage, CreatProduct,Basket, User, ProductsList, Search, Support } from "@/pages";
import { Shipping } from "@/pages/basket/shipping";


export const routes={
    HOME: {
        path: '/home',
        element: <Home/>
    },
    SIGNIN: {
        path: '/signin',
        element: <Signin />,
    },
    SIGNUP: {
        path: '/signup',
        element: <Signup />,
    },
    ADIMN: {
        path: '/admin',
        element: <AdminPage />,
    },
    CREATSlider: {
        path: '/admin/:creatSlider',
        element: <CreatSlider />,
    },
    CREATPRODUCT: {
        path: '/admin/:creat-product',
        element: <CreatProduct />,
    },
    PRODUCT: {
        path: '/product/:productId',
        element: <Product />,
        
    },
    BASKET: {
        path: '/basket',
        element: <Basket />,
    },
    USER: {
        path: '/user',
        element: <User />,
    },
    SHIPPING:{
        path: '/basket/shipping',
        element: <Shipping />,
    },
    SEARCH: {
        path: '/search/:searchName',
        element: <Search />,
    },
    SUPPORT: {
        path: '/support',
        element: <Support />,
    },
    // PRODUCTLIST:{
    //     path: '/search/product-list',
    //     element: <ProductsList />,
    // },
    
}