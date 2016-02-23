# liBrain

<a href="http://www.outbrain.com">Outbrain</a> inspired content promotion network demo, powered by
<a href="http://dp.la/">DPLA</a> <a href="http://dp.la/info/developers/codex/">API</a>.

Want to promote more library conent?  Add a widget to your web page that pulls in results
via the DPLA, formatting the results with http://handlebarsjs.com

See a demo http://tingletech.github.io/liBrain-jotted/

## Basic ES6 Scaffolding

A basic es2015(Ecmascript 6) scaffolding with browserify and gulp.

### Initial setup

```bash
# Clone the repo...
git clone https://github.com/tingletech/liBrain.git
cd liBrain

# Then, you need to install all the dependencies...
npm install

# If you wanna be able to use global command `gulp`...
npm install -g gulp
```

### Get a DPLA API KEY

```
curl -v -XPOST http://api.dp.la/v2/api_key/YOUR_EMAIL@example.com
```

see http://dp.la/info/developers/codex/policies/#get-a-key for more information.

put the key in a file `dpla-api-key.js`

```js
// dpla-api-key.js 
'use strict';

module.exports = { 'api_key': 'YOUR-KEY-HERE' };
```

### Running in the browser

This scaffolding includes `browser-sync` to init a server and is watching the change in your javascript files.

```bash
# Init the server and start watching the files
gulp serve
```
