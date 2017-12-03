<template>
  <div class="compare">
    <div class="compare-results">
      <div class="compare-results__block">
        <headers
          :id="0"
          ></headers>
        <item v-for="(item, index) in list"
          v-if="item.mysuperid == 0"
          :key="index"
          :item="item"
          :id="0">
        </item>
      </div>
      <div class="compare-results__block">
        <headers
          :id="1"
        ></headers>
        <item v-for="(item, index) in list"
          v-if="item.mysuperid == 1"
          :key="index"
          :item="item"
          :id="1">
        </item>
      </div>
    </div>
    <span class="winner">{{winner}}</span>
  </div>
</template>

<script>
import Item  from '../components/Item.vue';
import Headers from '../components/Headers.vue'
export default {
  name: 'all',
  components: {
    Item,
    Headers
  },
  mounted() {
    this.$store.dispatch('MOUNT_ITEM');
  },
  computed: {
    list() {
      return this.$store.getters.getList;
    },
    winner() {
      return this.$store.getters.getWinner ? this.$store.getters.getWinner : null;
    }
  }
}

</script>

<style lang="less">
.compare {
  display: flex;
  flex-direction: column;
  align-items:center;
    &-results {
      display: flex;
      justify-content: space-between;
      &__block {
        background-color: #ffffff;
        margin-right: 150px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        width: 370px;
        height: 670px;
        border-radius: 10px;
      }
    }

    .winner {
      color: red;
      font-size: 18pt;
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 50px;
      margin-left: -150px;
    }
}
</style>
