import express from 'express';
import { client } from "@repo/db/client"
const app = express();
const PORT = 3001;

app.use(express.json())
// @ts-ignore
app.get('/', (_req, res) => {
    res.send('Hello, world!');
});

app.post("/signup", (req, res) => {
    const username = req.body.username
    const password = req.body.password
   const user =  client.user.create({
        data: {
            username: username,
            password: password
        }
    })
    res.json({
        message :"user added",
        user : user
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});