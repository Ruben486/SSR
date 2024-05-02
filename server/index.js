//sintaxis es valida porque esta instalado babel
import express from "express"; 
import path from "path";
import React from "react";
import { renderToString} from "react-dom/server";
import Home from "../components/Home"
import fs from "fs";

const PORT = process.env.PORT || 3008;
const app = express();

app.get('/',(req,res) => {
    const indexFile = path.resolve('./server/public/index.html')
    const html = renderToString( <Home/>)
    fs.readFile(indexFile,'utf-8',(err,data) => {
        if (err) {
            console.error('algo salio mal',err)
            return res.status(500).send('Volve a intentarlo')
        }
        return res.send(
            data.replace(`<div id="root"></div>`,`<div id="root">${html}</div>`)
        )
    });
});
app.use(express.static('./server/public'))
app.listen(PORT, () => {
    console.log(`Corriendo en http://localhost:${PORT} `)
});

