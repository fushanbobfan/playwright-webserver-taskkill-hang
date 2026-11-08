import http from 'node:http';

http.createServer((req, res) => res.end('ok')).listen(41733, '127.0.0.1');
