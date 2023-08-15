const serverUrl = import.meta.env.VITE_SERVER_URL;


/**
 * 
 * @param name name of the owner
 * @returns room object
 */
export function createRoom(name: string) {
    return fetch(`${serverUrl}/room/create`, {
        method: 'POST',
        body: JSON.stringify({ name: name }),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then((res) => res.json());
}

/**
 * 
 * @param roomId id of the room to search for
 * @returns room object or 404
 */
export function getRoomById(roomId: string) {
    return fetch(`${serverUrl}/room?` + new URLSearchParams({
        roomId: roomId,
    })).then((res) => res.json());
}

export function joinRoom(name: string, roomId: string) {
    return fetch(`${serverUrl}/room/join`, {
        method: 'POST',
        body: JSON.stringify({ name: name, roomId: roomId }),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then((res) => res.json());
}

export function changeLanguage(language: string, roomId: string) {
    return fetch(`${serverUrl}/room/language`, {
        method: 'PATCH',
        body: JSON.stringify({ programmingLanguage: language, roomId: roomId }),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then((res) => res.json());
}

export function deleteRoomById() {

}