<template>
  <div class="search">
    <label> Enter GitHub Login: </label>
    <input @keyup.enter="submit" ref="entername">
    </input>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'headers',
  props: {
    id: {
      type: Number
    }
  },
  methods: {
    submit() {
       this.$store.dispatch('GET_ITEM', { value: this.$refs.entername.value, id: this.id});
    }
  }
}
</script>

<style lang="less">
  .search {
    display: flex;
    justify-content: space-around;
    padding: 15px;
    font-size: 14pt;
  }
</style>
