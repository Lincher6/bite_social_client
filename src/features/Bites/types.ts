export type BiteDetailsType = {
    biteId: number
    open: boolean
    setOpen: Function
    focus: boolean
}

export type AddBiteFormType = {
    addBite: Function
    fetchError: string
    loading: boolean
}

export type OpenBiteType = {
    biteId: number
}

export type LikeType = {
    likesCount: number
    biteId: number
}

export type DeleteType = {
    biteId: number
    userHandle: string
}

export type CommentType = {
    commentsCount: number
    biteId: number
}


