import React, {FC} from 'react'
import {useSelector} from 'react-redux'
import {State, TextItem} from '../../types'
import Header from './Header'
import Item from './Item'
import style from './style.module.css'

const Table: FC = () => {
    const {texts} = useSelector((state: State) => state.text)

    return (
        <table className={style.table}>
            <thead>
                <Header/>
            </thead>
            <tbody>
                {texts.map((textItem: TextItem) => <Item item={textItem} key={textItem.id}/>)}
            </tbody>
        </table>
    )
}

export default Table

