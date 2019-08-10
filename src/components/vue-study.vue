<template>
  <div>
    <!-- <section>{{ this.$store.state.good.good_test_data }}</section> -->
    <!-- <section>{{ this.$store.getters.get_good_test_data }}</section> -->
    <div class="increment">
      <button @click="increment">点击</button>
      <fieldset>
        <legend>使用this.$store.state.number获取number值</legend>
        <h1>{{ this.$store.state.number }}</h1>
      </fieldset>
      <fieldset>
        <legend>使用this.$store.getters_number获取number值</legend>
        <h1>{{ this.$store.getters.getters_number }}</h1>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  // 给组件命名（可选）
  name: "HelloWorld",
  // 数据
  data() {
    return {};
  },
  // 方法
  methods: {
    increment() {
      // 点击按钮后，我们需要自增加一，我们可以将这个自增加一理解成一个任务，现使用dispatch方法将任务派发给actions_increment
      this.$store.dispatch("actions_increment");
    }
  }
};
</script>

<style scoped>
fieldset {
  margin: 20px 0;
}
</style>

