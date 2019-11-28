import React from 'react'

export const AppContext = React.createContext({
    state: {
        committee: String(),
    },
    actions : {
        router : (path:string) => {

        },
        appState : (setter:any)=>{
        }
    },
})

export default AppContext