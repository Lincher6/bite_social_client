export const SET_BITES = 'SET_BITES'
export const SET_BITE = 'SET_BITE'
export const SET_BITE_FILTER = 'SET_BITE_FILTER'
export const ADD_BITE = 'ADD_BITE'
export const ADD_COMMENT = 'ADD_COMMENT'
export const LIKE_BITE = 'LIKE_BITE'
export const UNLIKE_BITE = 'UNLIKE_BITE'
export const COMMENT_BITE = 'COMMENT_BITE'
export const DELETE_BITE = 'DELETE_BITE'
export const LOADING_BITES = 'LOADING_BITES'
export const LOADING_COMMENT = 'LOADING_COMMENT'
export const CLEAR_BITES = 'CLEAR_BITES'

export const PAGE_SIZE = 10

export type ActionType = {
    type: string
    payload: any
}

export type BiteType = {
    biteId: number | number
    comments: Array<any>
    commentsCount: number
    likesCount: number
    imageUrl: string,
    userHandle: string,
    createdAt: Date,
    body: string,
}

export type BitesStateType = {
    bites: Array<BiteType>
    bite: BiteType
    biteFilter: string
    haveMoreBites: boolean
    loadingBites: boolean
    loadingComment: boolean
    offset: number
}


