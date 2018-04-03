const http = require('http');
const url = require('url');
const sqlite3 = require('sqlite3').verbose();

const hostname = '127.0.0.1';
const port = 3010;
const contentDB = new sqlite3.Database('content.sqlite3');
const locationDB = new sqlite3.Database('location.sqlite3');

const server = http.createServer((req, res) => {
    const queryParams = url.parse(req.url, true).query;

    new Promise(resolve => {
        if (queryParams.query) {
            const getCount = (error, results) => {
                const promises = [];
                results.forEach(result => {
                    promises.push(new Promise(resolve =>{
                        contentDB.get(
                            "SELECT count(id) as count from 'Content' where location_id = $location_id;",
                            {$location_id: result.id},
                            (error, r) => {
                                result.count = r.count;
                                resolve();
                            }
                        )
                    }));
                });
                Promise.all(promises).then(() => resolve(results));
            };
            locationDB.all(
                "SELECT distinct p.id, p.name, z.name as zone, z.country_id from 'places' p " +
                "left join 'zones' z on p.parent=z.id where p.name like $name LIMIT 10;",
                {$name: `%${queryParams.query}%`},
                getCount
            );
        } else {
            resolve([])
        }
    }).then(results => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(results));
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
