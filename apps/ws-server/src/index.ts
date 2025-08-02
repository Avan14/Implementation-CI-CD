import { WebSocketServer } from 'ws';
import { client } from "@repo/db/client"
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', async (ws) => {
    console.log('Client connected');
    
    await client.user.create({
        data : {
            username : "AVAN-king"+Math.random().toString(),
            password : "password123"+Math.random().toString()
        }
    })
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        ws.send(`Echo: ${message}`);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');