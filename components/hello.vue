<template>
  <div>
    {{ count }}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    count: state => state.count
  }),
  methods: mapActions({
    increment: 'increment'
  }),
  created () {
    this.increment({ a: 4 })
  }
}
</script>
