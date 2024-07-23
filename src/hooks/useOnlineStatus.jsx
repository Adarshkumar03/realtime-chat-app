import { useEffect } from "react";
import {auth, db} from "../firebase";

const useOnlineStatus = () => {
    useEffect(() => {
        const user = auth.currentUser;
        if(user){
            const userStatusDatabaseRef = db.ref('/users' + user.uid);
            const isOfflineForDatabase = {
                status: 'Offline',
            }
            const isOnlineForDatabase = {
                status: 'online',
            };
            db.ref('.info/connected').on('value', function(snapshot){
                if(snapshot.val() == false){
                    return;
                }
                userStatusDatabaseRef.onDisconnect().set(isOfflineForDatabase).then(function(){
                    userStatusDatabaseRef.set(isOnlineForDatabase);
                });
            });
        }
    }, []);
};

export default useOnlineStatus;