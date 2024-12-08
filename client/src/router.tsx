import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/layout'
import Products from './views/products'
import NewProduct from './views/NewProduct'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, 
        children: [
            {
                index: true,
                element: <Products/>
            },
            {
                path: "productos/nuevo",
                element: <NewProduct/>
            }
        ],
    }        
])