import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
apiKey: "AIzaSyBHngQDt5rSt0lhQFXcUkRW0ggaPmT-u_k",
authDomain: "web-project-team-8.firebaseapp.com",
projectId: "web-project-team-8",
storageBucket: "web-project-team-8.appspot.com",
messagingSenderId: "790111689657",
appId: "1:790111689657:web:81113a1cbf4f433c867468",
databaseURL: "https://web-project-team-8-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
   