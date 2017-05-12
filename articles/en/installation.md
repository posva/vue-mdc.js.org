# Installation

## CDN

Always include after Vue so it auto installs

```html
<!-- Include after Vue -->
<link rel="stylesheet" href="https://unpkg.com/vue-mdc/dist/vue-mdc.css"></link>
<script src="https://unpkg.com/vue-mdc"></script>
```

## Bundler

```bash
npm install --save vue-mdc
```
Make sure to use the plugin

```js
import Vue from 'vue'
import VueMdc from 'vue-mdc'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'vue-mdc/dist/vue-mdc.css'

Vue.use(VueMdc)
```
