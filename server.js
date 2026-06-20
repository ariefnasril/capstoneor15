const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Hanya melayani rute root '/' atau '/index.html'
    if (req.url === '/' || req.url === '/index.html') {
        const filePath = path.join(__dirname, 'index.html');
        
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Terjadi kesalahan pada server saat memuat halaman.');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content, 'utf-8');
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Halaman tidak ditemukan (404)');
    }
});

server.listen(PORT, () => {
    console.log(`Server berhasil berjalan di http://localhost:${PORT}`);
});
