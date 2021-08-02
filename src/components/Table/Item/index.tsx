import React, {FC} from 'react'
import {TextItem} from '../../../types'
import style from '../style.module.css'

type Props = {
    item: TextItem
}

const Item: FC<Props> = ({item}) => {

    return (
        <tr className={style.item}>
            <td>{item.text}</td>
            <td>{item.words}</td>
            <td>{item.vowels}</td>
        </tr>
    )
}

export default Item
