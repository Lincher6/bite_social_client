export type ResponseType = {
    data: Object | string
    resultCode: number
}

export type MessageType = {
    dialogId: number,
    body: string,
    recipient: string,
    createdAt: Date
}