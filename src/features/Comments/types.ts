export type CommentType = {
    userHandle: string
    userImage: string
    body: string
    createdAt: string
}

export type CommentListType = {
    comments: Array<CommentType>
}

export type AddCommentType = {
    biteId: number
    focus: boolean
}

export type AddCommentFormType = {
    addComment: Function
    fetchError: string
    loading: boolean
    focus: boolean
}