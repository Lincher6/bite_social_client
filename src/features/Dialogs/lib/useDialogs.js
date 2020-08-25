import { useState, useEffect } from "react"
import { firestore } from "lib/firebase"
import { useSelector, useDispatch } from "react-redux"
import { profileSelectors } from "features/Profile"
import { dialogsActions } from "features/Dialogs/model"


export const useDialogs = () => {
    const [dialogs, setDialogs] = useState([])
    const [loading, setLoading] = useState(true)
    const { handle } = useSelector(profileSelectors.credentials)
    const dispatch = useDispatch()
    dispatch(dialogsActions.setDialogs([]))

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

                    dispatch(dialogsActions.setDialogs(dialogsData))
                    setDialogs(dialogsData)
                    setLoading(false)
                })
            return () => unsubscribe()
        }


    }, [handle])

    return { dialogs, loading }
}