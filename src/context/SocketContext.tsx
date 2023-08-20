import { createContext } from "react";
import { Socket, io } from "socket.io-client";


const SOCKET_URL = import.meta.env.VITE_SERVER_WS_URL;

const socket = io(SOCKET_URL);

export const SocketContext = createContext<Socket>( {} as unknown as Socket );

export function SocketProvider({ children } : { children: React.ReactNode }) {
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
}