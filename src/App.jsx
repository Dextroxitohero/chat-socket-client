import React, { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client';


const user = {
	id: new Date(),
	nomber: 'Eric',
	device: 1
}

export const App = () => {

	const [onlineUsers, setOnlineUsers] = useState([])

	const socket = useRef()

	useEffect(() => {
		socket.current = io('http://localhost:8800');
		socket.current.emit("new-user-add", user.id);
		socket.current.on('get-users', (users) => {
			setOnlineUsers(users)
		});
	}, [user])

	console.log(onlineUsers)


	return (
		<div>
			

		</div>
	)
}
