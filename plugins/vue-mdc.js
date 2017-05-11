import Vue from 'vue'
import VueMdc from 'vue-mdc/dist/vue-mdc.esm.js'

Vue.use(VueMdc)

Vue.component('MdcDrawerNavLink', {
  props: {
    to: String
  },

  inject: ['mode'],

  render (h) {
    return h('router-link', {
      staticClass: 'mdc-list-item',
      directives: [{ name: 'ripple' }],
      nativeOn: {
        click: () => this.$parent.close()
      },
      class: {
        [`mdc-${this.mode}-drawer--selected`]: this.$route.path === this.to
      },
      props: {
        to: this.to,
        exact: true
      }
    }, this.$slots.default)
  }
})
