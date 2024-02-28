    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";

    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";

    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
    
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyC5wRmiOYd94GpB3IWooi3ed5VtHGlyL0A",
        authDomain: "rishabh-6eb40.firebaseapp.com",
        databaseURL: "https://rishabh-6eb40-default-rtdb.firebaseio.com",
        projectId: "rishabh-6eb40",
        storageBucket: "rishabh-6eb40.appspot.com",
        messagingSenderId: "755049547663",
        appId: "1:755049547663:web:ef3f1fc6edb8eeeba1adfa"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth();
    console.log(app);



    //----- New Registration code start	  
    document.getElementById("register").addEventListener("click", function () {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        //For new registration
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                alert("Registration successfully!!");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorMessage);
                alert(error);
            });
    });
    //----- End

    //----- Login code start	  
    document.getElementById("login").addEventListener("click", function () {
        var email = document.getElementById("login_email").value;
        var password = document.getElementById("login_password").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                alert(user.email + " Login successfully!!!");
                document.getElementById('logout').style.display = 'block';
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                alert(errorMessage);
            });
    });
    //----- End

    //----- Logout code start	  
    document.getElementById("logout").addEventListener("click", function () {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('Sign-out successful.');
            alert('Sign-out successful.');
            document.getElementById('logout').style.display = 'none';
        }).catch((error) => {
            // An error happened.
            console.log('An error happened.');
        });
    });
	  //----- End