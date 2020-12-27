import dotenv from "dotenv";
import express from "express";
import { exec } from 'child_process'

dotenv.config();
const port = process.env.SERVER_PORT || 3000;

const app = express();

app.get("/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.get("/api/create/:name", (req, res)=> {
    const name: string = req.params.name
    exec(`docker run -t -m 64M -d --name ${name} multilang`, ()=> {
        exec(`docker exec ${name} git clone https://github.com/octocat/hello-worId.git /home/newuser/helloworld`, ()=> {
            exec(`docker exec ${name} cat /home/newuser/helloworld/README.md`, (err, stdout, stderr)=>{
                res.send(`From container ${name}: </br> </br> ${stdout}`);
                exec(`docker kill ${name}`, ()=>{
                    exec(`docker rm ${name}`)
                })
            })
          });
      });
})

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );