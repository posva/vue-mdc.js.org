import Vue from 'vue'
import VueMdc from 'vue-mdc/dist/vue-mdc.esm.js'

Vue.use(VueMdc)

const props = Vue.component('router-link').options.props
Vue.component('MdcDrawerNavLink', {
  props,

  inject: ['mode'],

  render (h) {
    return h('router-link', {
      staticClass: 'mdc-list-item',
      directives: [{ name: 'ripple' }],
      nativeOn: {
        click: () => this.$parent.close(),
      },
      class: {
        [`mdc-${this.mode}-drawer--selected`]: this.$route.path === this.to,
      },
      props: this.$props,
    }, this.$slots.default)
  },
})
