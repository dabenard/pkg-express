# pkg-express
Simple use case of pkg breaking express rendering

Illustrate issue pointed by [5.2.x breaks express.js route handling logic? #1192](https://github.com/vercel/pkg/issues/1192).

Issue appears with version 5.2.0 of pkg.
Previous version worked fine.

1. Build the executable:
```
npm make
```
2. Start the executable located in the `dist` directory.
3. Open a web browser and navigate to `http://localhost:8080`.

Expected result;
- With pkg < 5.2.0: Hello World!
- With pkg >= 5.2.X:
```
TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received type number (0)
    at validateString (internal/validators.js:124:11)
    at Object.resolve (path.js:154:9)
    at Object.process.pkg.path.resolve (pkg/prelude/bootstrap.js:477:25)
    at View.lookup (C:\snapshot\pkg-express\node_modules\express\lib\view.js:114:32)
    at new View (C:\snapshot\pkg-express\node_modules\express\lib\view.js:94:20)
    at Function.render (C:\snapshot\pkg-express\node_modules\express\lib\application.js:570:12)
    at ServerResponse.render (C:\snapshot\pkg-express\node_modules\express\lib\response.js:1012:7)
    at C:\snapshot\pkg-express\src\index.js:14:7
    at Layer.handle [as handle_request] (C:\snapshot\pkg-express\node_modules\express\lib\router\layer.js:95:5)
    at trim_prefix (C:\snapshot\pkg-express\node_modules\express\lib\router\index.js:317:13)
```
