var firebaseConfig = {
    apiKey: "AIzaSyDKA_JPDFYUqdZNPC_maYkpqCNUnukIrOQ",
    authDomain: "yieldly-gdsc.firebaseapp.com",
    projectId: "yieldly-gdsc",
    storageBucket: "yieldly-gdsc.appspot.com",
    messagingSenderId: "509287211839",
    appId: "1:509287211839:web:209b7c2221f443ca9f298a"
};

firebase.initializeApp(firebaseConfig);

// document.getElementById('google').addEventListener('click', _ => {
//     var provider = new firebase.auth.GoogleAuthProvider();

//     firebase.auth().signInWithPopup(provider)
//         .then((result) => {
//         // User signed in successfully
//         window.location.href = 'profile.html';
//         })
//         .catch((error) => {
//         // Handle errors
//         console.error(error);
//     });
// });

document.getElementById('google').addEventListener('click', _ => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult()
    .then(result => {
        window.location.href = 'profile.html';
    })
    .catch(error => {
        console.error(error);
    });
});

document.getElementById('guest').addEventListener('click', _ => {
    firebase.auth().signInAnonymously()
    .then(() => {
        window.location.href = 'profile.html';
    })
    .catch((error) => {
        console.error(error);
    });
});

// document.getElementById('google').addEventListener('click', _ => {
//     function googleSignIn() {
//         const provider = new firebase.auth.GoogleAuthProvider();
    
//         // Open the Google sign-in page in a new tab
//         window.open('about:blank', 'google_signin', 'width=600,height=700');
//         firebase.auth().signInWithRedirect(provider);
//     }
    
//     firebase.auth().onAuthStateChanged(user => {
//         if (user) {
//             window.location.href = 'profile.html';
//         }
//     });
    
//     firebase.auth().getRedirectResult()
//     .then(result => {
//         window.location.href = 'profile.html';
//     })
//     .catch(error => {
//         console.error(error);
//     });
//});
