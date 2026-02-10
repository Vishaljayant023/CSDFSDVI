const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
    const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
    const userInfo = os.userInfo();

    res.write(`
        <html>
        <head>
            <title>System Information</title>
            <style>
                body { font-family: Arial; background:#f4f4f4; padding:20px; }
                h2 { color:#333; }
                p { font-size:16px; }
            </style>
        </head>
        <body>
            <h2>System Information</h2>
            <p><b>OS Platform:</b> ${os.platform()}</p>
            <p><b>OS Type:</b> ${os.type()}</p>
            <p><b>OS Release:</b> ${os.release()}</p>
            <p><b>CPU Architecture:</b> ${os.arch()}</p>
            <p><b>Hostname:</b> ${os.hostname()}</p>

            <h2>Memory Information</h2>
            <p><b>Total Memory:</b> ${totalMemGB} GB</p>
            <p><b>Free Memory:</b> ${freeMemGB} GB</p>

            <h2>User Information</h2>
            <p><b>Username:</b> ${userInfo.username}</p>
            <p><b>Home Directory:</b> ${os.homedir()}</p>
        </body>
        </html>
    `);

    res.end();
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
