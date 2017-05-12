<template>
  <section>
    <component :is="comp"></component>
  </section>
</template>

<script>
export default {
  data () {
    return {
      comp: null,
    }
  },

  created () {
    this.fetchArticle(this.$route.params)
  },

  methods: {
    async fetchArticle ({ lang, article }) {
      this.comp = await import(
        `../../articles/${lang}/${article}.md`
      ).catch(() => {
        return {
          render (h) {
            return (
              <div>
                <h1>Not found</h1>
                <router-link to='/'>Go Home</router-link>
              </div>
            )
          },
        }
      })
    },
  },

  watch: {
    '$route.params' () {
      this.fetchArticle(this.$route.params)
    },
  },
}
</script>
