import { useState, useEffect } from "react"
import { firestore } from "lib/firebase"
import { useSelector } from "react-redux"
import { profileSelectors } from "features/Profile"


export const useNotifications = () => {
    const [notifications, setNotifications] = useState([])
    const { handle } = useSelector(profileSelectors.credentials)

    useEffect(() => {
        if (handle) {
            const unsubscribe = firestore
                .collection('notifications')
                .where('recipient', '==', handle)
                .orderBy('createdAt', 'desc')
                .onSnapshot(snapshot => {
                    const newNotifications = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }))

                    setNotifications(newNotifications)
                })

            return () => unsubscribe()
        }


    }, [handle])

    return notifications
}
