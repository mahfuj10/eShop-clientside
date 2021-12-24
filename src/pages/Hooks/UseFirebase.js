import firebaseInitalize from "../Firebase/FirebaseInitalize";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";


firebaseInitalize();

const UseFirebase = () => {


    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isloading, setIsLoading] = useState(true);
    const auth = getAuth();

    // provider
    const googleProvider = new GoogleAuthProvider();


    // google sign in

    const GoogleSign = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // email sign in
    const loginUser = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // setUser(userCredential.user);
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            });
    };

    // // register new user
    const registerUser = (email, password, name, history, location) => {

        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then((user) => {
                    const destination = location?.state?.from || '/';
                    history.replace(destination);
                }).catch((error) => {
                });
            })
            .catch((error) => {
                setError(error.message);

            })
            .finally(() => setIsLoading(false));
    }



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });

    }, [auth]);

    // log out
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message)
        });
    };

    // save user on database 
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://fathomless-sierra-85288.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    };




    return {
        GoogleSign,
        user,
        loginUser,
        logOut,
        registerUser,
        error

    }

}

export default UseFirebase;