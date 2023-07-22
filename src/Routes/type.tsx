import React from "react"


export enum routesyType{
    admin='admin',
    user='user'
}
export type routesProps = {
    routesyType:routesyType
}

export type routesObj = {
    path:string,
    element:React.ReactNode
}