import { useState, useEffect } from "react"
import { firestore } from "lib/firebase"
import { useSelector } from "react-redux"
import { profileSelectors } from "features/Profile"


export const useDialogs = () => {
    const [dialogs, setDialogs] = useState([])
    const { handle } = useSelector(profileSelectors.credentials)

    useEffect(() => {
        if (handle) {
            const unsubscribe = firestore
                .collection('dialogs')
                .where('users', "array-contains", handle)
                .orderBy('activeAt', 'desc')
                .onSnapshot(snapshot => {
                    const dialogsData = snapshot.docs.map(doc => {
                        if (doc.data().userOne === handle) {
                            return {
                                id: doc.id,
                                recipient: doc.data().userTwo,
                                recipientImageUrl: doc.data().imageTwo,
                                activeAt: doc.data().activeAt,
                                newMessages: doc.data().userOneNewMessages,
                            }
                        }
                        if (doc.data().userTwo === handle) {
                            return {
                                id: doc.id,
                                recipient: doc.data().userOne,
                                recipientImageUrl: doc.data().imageOne,
                                activeAt: doc.data().activeAt,
                                newMessages: doc.data().userTwoNewMessages,
                            }
                        }
                    })

                    setDialogs(dialogsData)
                })

            return () => unsubscribe()
        }


    }, [handle])

    return dialogs
}