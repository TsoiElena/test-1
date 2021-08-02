import React, {FC} from 'react'
import Form from "./components/Form"
import Table from './components/Table'

const App: FC = () => {
    return (
        <div className="app">
            <Form/>
            <Table/>
        </div>
    )
}

export default App

