import React, { Component } from 'react'
import { AppContext } from './AppContext'
import { Route } from 'react-router-dom'

export default class AppContextProvider extends Component {
    state = {
        ongoingAppTransition: false,
        userAuthenticated: true,
        users: {
            committee: String(),
            personal: [{
                name: String(),
                email: String(),
                phone: String(),
            }]
        }
    }
    appState = (setter: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, never> | null) | Pick<{}, never> | null,
        callback?: (() => void) | undefined) => {
        this.setState(setter, callback)
    }
    render() {
        return (
            <Route render={({ history }) => (
                <AppContext.Provider
                    value={{
                        state: this.state,
                        actions: {
                            router: (path) => {
                                history.push(path)
                            },
                            appState: this.appState
                        }
                    }}
                />
            )}
            />
        )
    }
}