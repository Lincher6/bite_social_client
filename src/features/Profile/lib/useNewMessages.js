import { useState, useEffect } from "react"
import { firestore } from "lib/firebase"
import { useSelector } from "react-redux"
import { profileSelectors } from "features/Profile"


export const useNewMessages = () => {
    const [newMessages, setNewMessages] = useState(0)
    const { handle } = useSelector(profileSelectors.credentials)

    useEffect(() => {
        if (handle) {
            const unsubscribe = firestore
                .doc(`/users/${handle}`)
                .onSnapshot(snapshot => {
                    setNewMessages(snapshot.data().newMessages)
                })

            return () => unsubscribe()
        }


    }, [handle])

    return newMessages
}