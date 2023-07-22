
import { useRoutes } from 'react-router-dom';
import {Adminroutes, Userroutes} from './Routes'

import {routesProps , routesyType} from './type'

const  App = (props:routesProps) =>{
    return (useRoutes(props.routesyType == routesyType.user ? Adminroutes : Userroutes))
  }

export default App;