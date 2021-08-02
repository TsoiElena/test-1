export type TextStateType = { //main types
    texts: TextItem[]
}

export type TextItem = {
    id: number,
    text: string,
    words: number,
    vowels: number
}

export type State = {
    text: TextStateType
}

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never