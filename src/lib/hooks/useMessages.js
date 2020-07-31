import { useState, useEffect } from "react"
import { firestore } from "lib/firebase"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { profileSelectors } from "features/Profile"


export const useMessages = () => {
    const [messages, setMessages] = useState([])
    const params = useParams()
    const { handle } = useSelector(profileSelectors.credentials)

    useEffect(() => {
        if (params.dialogId) {
            console.log(params.dialogId)
            const unsubscribe = firestore
                .collection('messages')
                .where('dialogId', "==", params.dialogId)
                .limit(100)
                .orderBy('createdAt', 'desc')
                .onSnapshot(snapshot => {
                    const messagesData = snapshot.docs.map(doc => {
                        return {
                            id: doc.id,
                            body: doc.data().body,
                            createdAt: doc.data().createdAt,
                            read: doc.data().read,
                            recipient: doc.data().recipient,
                            sender: doc.data().sender,
                            isMine: handle === doc.data().sender
                        }
                    })

                    setMessages(messagesData)
                })

            return () => unsubscribe()
        }


    }, [params.dialogId])

    return messages
}