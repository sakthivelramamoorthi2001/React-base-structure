
import AdminHome from '../pages/Adminpages/Home'
import AdminAbout from '../pages/Adminpages/About'

import UserHome from '../pages/Userpages/Home'
import UserAbout from '../pages/Userpages/About'

import { routesObj } from './type';



export const Adminroutes:Array<routesObj>= [
    {
        path: '/',
        element: <AdminHome />
    },
    {
        path: '/about',
        element: <AdminAbout />
    }
]

export const Userroutes:Array<routesObj>= [
    {
        path: '/',
        element: <UserHome />
    },
    {
        path: '/about',
        element: <UserAbout />
    }
]




function App(){
    console.log("got");
    
    return ([Adminroutes, ...Userroutes])
  }
  
export default App;