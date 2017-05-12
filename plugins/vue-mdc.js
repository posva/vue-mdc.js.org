import Vue from 'vue'
import VueMdc from 'vue-mdc/dist/vue-mdc.esm.js'

Vue.use(VueMdc)

const props = {
  ...Vue.component('router-link').options.props,
  exact: {
    type: Boolean,
    default: true,
  },
}

Vue.component('MdcDrawerNavLink', {
  props,

  inject: ['mode'],

  render (h) {
    const props = { ...this.$props }
    props.activeClass = props.activeClass ||
      `mdc-${this.mode}-drawer--selected`
    return h('router-link', {
      staticClass: 'mdc-list-item',
      directives: [{ name: 'ripple' }],
      nativeOn: {
        click: () => this.$parent.close(),
      },
      props,
    }, this.$slots.default)
  },
})
