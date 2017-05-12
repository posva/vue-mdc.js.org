# Buttons

@[example](buttons/basic)

becomes `example-buttons-basic` and injects the component

`<example-buttons-basic></example-buttons-basic>`

<mdc-button v-ripple>Hey</mdc-button>

```vue
<MdcButton raised>Click Me</MdcButton>
```

```html
<MdcButton raised>Click Me</MdcButton>
```

```js
const a = 2
const sassOptions = {
  includePaths: [
    join(__dirname, './node_modules')
  ]
}
```

Let's see how this links look:

- posva.net
- www.posva.net
- https://posva.net

Nope ~~NOOOO~~ or ~single character~

## Props

| Name | Type | Default | Description | 
| --- | --- | --- | --- |
| raised | Boolean | false | Applies a raised effect to the button |
| primary | Boolean | false | Applies the primary color to the button |

Custom html:

<p class="danger">Hey there</p>

@[example](buttons/playground)
