import { auth, db } from './firebase_config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const profileContainer = document.getElementById('profile-container');
    const logoutBtn = document.getElementById('logout-btn');

    if (user) {
        // User is signed in
        const userNameSpan = document.getElementById('user-name');
        const userAvatarDiv = document.getElementById('user-avatar');

        // Hide login/signup buttons
        if (loginBtn) loginBtn.classList.add('hidden');
        if (signupBtn) signupBtn.classList.add('hidden');

        // Show profile container
        if (profileContainer) {
            profileContainer.classList.remove('hidden');
            profileContainer.classList.add('flex'); // Use flex to align items
        }

        // Get user data from Firestore
        try {
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const userData = docSnap.data();
                if (userNameSpan) {
                    userNameSpan.textContent = userData.fullName;
                }
                // You can set a real avatar URL here if you store one
                if (userAvatarDiv) {
                    userAvatarDiv.style.backgroundImage = `url('https://ui-avatars.com/api/?name=${encodeURIComponent(userData.fullName)}&background=random')`;
                }
            } else {
                console.log("No such document for user!");
                if (userNameSpan) userNameSpan.textContent = user.email;
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            if (userNameSpan) userNameSpan.textContent = user.email;
        }

        // Handle logout
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                signOut(auth).then(() => {
                    window.location.href = './login.html';
                }).catch((error) => {
                    console.error('Sign Out Error', error);
                });
            });
        }
    } else {
        // User is signed out
        if (loginBtn) loginBtn.classList.remove('hidden');
        if (signupBtn) signupBtn.classList.remove('hidden');
        if (profileContainer) {
            profileContainer.classList.add('hidden');
            profileContainer.classList.remove('flex');
        }
    }
});