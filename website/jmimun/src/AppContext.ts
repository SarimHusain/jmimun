import React from 'react'

export const AppContext = React.createContext({
    state: {
        ongoingAppTransition : false,
        userAuthenticated: true,
        users : {
            committee: String(),
            personal: [{
                name:String(),
                email: String(),
                phone: String(), 
            }]
        }
    },
    actions : {
        router : (path:string) => {

        },
        appState : (setter:any)=>{
            
        }
    }
})

export default AppContext