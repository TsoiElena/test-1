import React, {useState, FC} from 'react'
import {useDispatch} from 'react-redux'
import {getTextItem, resetTextItems} from '../../redux/text-reducer'
import style from './style.module.css'

const Form: FC = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState<string>('')
    const reg = /^[0-9\b ,;]+$/ //regeg for input (user can introduce only numbers and , ;)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target
        if (!value) return setValue('')
        if (!reg.test(value)) return
        setValue(value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(resetTextItems())
        value
            .replace(/\s/g, "")
            .replace(/;/g, ', ')// replace ; to ,
            .split(",")
            .map(Number) // string to number
            .filter((item, position, array) => array.lastIndexOf(item) === position)// delete the same number
            .forEach(item => {
                if(!item) return
                if(item > 20 || item < 1) {
                    alert(`Введено недопустимое значение ${item}. Данное значение проигнорировано.`) // if number > 20
                    return
                }
                dispatch(getTextItem(item)) // request to get string  from server
            })

    }

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.title}>Идентификаторы строк</div>
            <input
                type="text"
                className={style.input}
                value={value}
                placeholder='Введите значения от 1 до 20 через запятую'
                onChange={handleChange}
            />
            <button className={style.button} type="submit">Подсчитать</button>
        </form>
    )
}

export default Form
