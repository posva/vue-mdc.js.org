const kebab = require('lodash.kebabcase')
const uppercamelcase = require('uppercamelcase')
const examplesRE = /<example src="(.+)"\/>/gi

module.exports = function (source) {
  this.cacheable()

  let res
  const components = []
  while (res = examplesRE.exec(source)) { // eslint-disable-line no-cond-assign
    let [match, component] = res
    if (!components.find(c => c.path === component)) {
      components.push({
        name: uppercamelcase(component.replace('/', '-')),
        path: component,
      })
    }
    source = source.replace(match, `<example-${kebab(component)}/>`)
  }

  const comp = `
<template>
<div>
${source}
</div>
</template>

<script>
${components
.map(c => `import Example${c.name} from '../../examples/${c.path}'`)
.join('\n')}

export default {
name: 'ArticleContent',
  components: {
${components.map(c => `Example${c.name}`).join(',')}
  }
}
</script>
`

  return comp
}
