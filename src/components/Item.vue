<template>
  <div class="item-block">
    <div class="image">
      <img :src="getList.avatar_url">
      </img>
    </div>
    <div class="item-block__info">
      <label>Login GitHub: </label>
      <span>{{getList.login}}</span>
    </div>
    <div class="item-block__info">
      <label>Name: </label>
      <span>{{getList.name || 'noname'}}</span>
    </div>
    <div class="item-block__info">
      <label>Id GitHub: </label>
      <span>{{getList.id}}</span>
    </div>
    <div class="item-block__info">
      <label>Type: </label>
      <span>{{getList.type}}</span>
    </div>
    <div class="item-block__info">
      <label>Url: </label>
      <a :href="getList.html_url">{{getList.html_url}}</a>
    </div>
    <div class="item-block__info">
      <label>Followers: </label>
      <span> {{getList.followers}}</span>
    </div>
    <div class="item-block__info">
      <label>Following: </label>
      <span> {{getList.following}}</span>
    </div>
    <div class="item-block__info">
      <label>Create date: </label>
      <span> {{getList.created_at.substr(0,10)}}</span>
    </div>
    <div class="item-block__info">
      <label>Repositories: </label>
      <span>{{getList.public_repos}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: {
    id: {
      type: Number
    },
    item: {
      type: Object
    }
  },
  computed: {
    getList() {
      return this.item.mysuperid === this.id ? this.item : null;
    }
  }
}

</script>

<style lang="less">
.item-block {
  font-size: 14pt;
  .image {
    display: flex;
    justify-content: center;
    & > img {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      border: 1px solid #9bd14b;
    }
  }

  &__info {
    display: flex;
    justify-content: flex-start;
    margin-left: 50px;
    margin-top: 15px;
    & > label {
      margin-right: 5px;
    }
  }
}
</style>
