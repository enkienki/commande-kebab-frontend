import io from "socket.io-client";
const socket = io("https://commande-kebab-backend.herokuapp.com");
export default socket;
