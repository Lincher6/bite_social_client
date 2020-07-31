import { useState, useEffect } from "react"
import { firestore, database } from "lib/firebase"
import { useSelector } from "react-redux"
import { profileSelectors } from "features/Profile"


export const useSession = () => {
    const { handle } = useSelector(profileSelectors.credentials)

    useEffect(() => {
        const firestoreRef = firestore.doc(`users/${handle}`)
        const databaseRef = database.ref(`users/${handle}`)

        database.ref('.info/connected').on('value', function (snapshot) {
            if (snapshot.val() === false) {
                firestoreRef.update({ isOnline: false })
                return;
            };

            databaseRef.onDisconnect().set({ isOnline: false }).then(function () {
                console.log('here')
                firestoreRef.update({ isOnline: true })
                databaseRef.set({ isOnline: true })
            });
        })
    }, [handle])
}