const http = require('http')
const EventEmitter = require('events');

module.exports = class Application {
    constructor() {
        this.emitter = new EventEmitter();
        this.server = this._createServer()
    }

    listen(port, callback) {
        this.server.listen(port, callback)
    }

    _createServer() {
        return http.createServer((req, res) => {
            const emitted = this.emitter.emit(this._getRoutMask(req.url, req.method), req, res)
            if (!emitted) { res.end() }
        })

    }

    addRouter(router) {
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.endpoint[path];
            Object.keys(endpoint).forEach((method) => {
                const handler = endpoint[method];
                this.emitter.on(this._getRoutMask(path, method), (req, res) => {
                    handler(req, res);
                })
            })
        })
    }

    _getRoutMask(path, method) {
        return `[${path}]:[${method}]`
    }

}