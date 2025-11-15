import { auth, db } from './firebase_config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {
    // Find all relevant elements on the page, if they exist.
    const loginButtons = document.querySelectorAll('#login-btn');
    const signupButtons = document.querySelectorAll('#signup-btn');
    const profileContainers = document.querySelectorAll('#profile-container');
    const logoutButtons = document.querySelectorAll('#logout-btn');
    const userNames = document.querySelectorAll('#user-name');
    const userAvatars = document.querySelectorAll('#user-avatar');

    if (user) {
        // User is signed in.
        try {
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const userData = docSnap.data();
                const fullName = userData.fullName;
                // Display first name
                const firstName = fullName.split(' ')[0];
                userNames.forEach(el => el.textContent = firstName);
                // Create a simple text-based avatar from user's initials
                const initials = fullName.split(' ').map(n => n[0]).join('');
                userAvatars.forEach(el => {
                    el.style.backgroundImage = `url("https://ui-avatars.com/api/?name=${initials}&background=random&color=fff")`;
                });
            } else {
                console.log("No such document!");
                userNames.forEach(el => el.textContent = 'User');
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            userNames.forEach(el => el.textContent = 'User');
        }

        // Show profile, hide login/signup
        loginButtons.forEach(btn => btn.style.display = 'none');
        signupButtons.forEach(btn => btn.style.display = 'none');
        profileContainers.forEach(container => { container.style.display = 'flex'; container.classList.remove('hidden'); });

        logoutButtons.forEach(btn => btn.addEventListener('click', () => {
            signOut(auth).then(() => {
                window.location.href = './login.html';
            }).catch((error) => {
                console.error('Sign out error', error);
            });
        }));
    } else {
        // User is signed out.
        loginButtons.forEach(btn => btn.style.display = 'flex');
        signupButtons.forEach(btn => btn.style.display = 'flex'); // Or 'block' depending on your layout
        profileContainers.forEach(container => { container.style.display = 'none'; container.classList.add('hidden'); });
    }
});