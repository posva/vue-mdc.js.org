<template>
  <section>
    <router-link to="/">Home</router-link>
    <br/>
    <component :is="comp"></component>
    <!-- <pre>{{comp}}</pre> -->
  </section>
</template>

<script>
export default {
  data () {
    return {
      comp: null
    }
  },
  async created () {
    const { params } = this.$route
    const comp = await import(
      `../../articles/${params.lang}/${params.article}.md`
    )
    this.comp = comp
  }
}
</script>
