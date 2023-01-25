const http = require('http');

const PORT = 8000;
const data = [];


const server = http.createServer((req, res) => {

    // run GET and POST on /todos
    if (req.url === '/todos') {
        let method = req.method.toUpperCase();

        switch (method) {
        case 'GET': {
            const sendData = JSON.stringify(data);
            res.writeHead(200, { 'Content-Type': 'JSON' });
            res.end(sendData);
            break;
        }

        case 'POST': {
            let dataSent = '';

            req.on('data', (data) => {
                dataSent += data;
            });

            req.on('end', () => {

                dataSent = JSON.parse(dataSent);

                dataSent['isComplete'] = false;
                if (data.length == 0)
                    dataSent['id'] = 0;
                else
                    dataSent['id'] = Number(data[data.length - 1]['id'] + 1);
                data.push(dataSent);

                res.writeHead(201, { 'Content-Type': 'JSON' });
                res.end(JSON.stringify(data));

            });
            break;
        }

        // delete all tasks which have isComplete true
        case 'DELETE': {
            data.forEach((ele, index) => {
                if (ele['isComplete'] === true)
                    data.splice(index);
            });
            res.writeHead(200, { 'Contet-Type': 'text' });
            res.end('All Completed tasks have been deleted successfully.');
            break;
        }

        default:
            break;
        }
    }

    else if (req.url.match('/todos/') != null) {

        if (req.method.toUpperCase() == 'POST') {
            res.writeHead(405, { 'Content-Type': 'text/html' });
            res.end('You cannot post in this endpoint. Use /todos for POST request');
            return;
        }

        let idRequested = Number(req.url.substring(7));

        // 422 Unprocessable Entity
        let idFound = -1;
        data.forEach((ele, index) => {
            if (ele['id'] == idRequested) 
                idFound = index;
        });

        if (idFound != -1) {
            res.writeHead(422, { 'Content-Type': 'text/html' });
            res.end('The id send as parameter is inavalid or does not exist.');

        }
        else
            switch (req.method.toUpperCase()) {

            case 'GET': {
                res.writeHead(200, { 'Content-Type': 'JSON' });
                res.end(JSON.stringify(data[idFound]));
                break;
            }

            case 'DELETE': {
                delete data.splice(idFound, 1);
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('The data corresponding to id has been deleted successfully.');
                break;
            }

            case 'PATCH': {
                let dataSent = '';
                req.on('data', (data) => {
                    dataSent += data;
                });

                req.on('end', () => {
                    dataSent = JSON.parse(dataSent);
                    for (let key in dataSent)
                        data[idFound][key] = dataSent[key];

                    res.writeHead(200, { 'Content-Type': 'JSON' });
                    res.end(JSON.stringify(data));

                });
                break;
            }

            default:
                break;
            }

    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Page Not Found</h1>');
    }

});

server.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));