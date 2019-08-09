<template>
  <div>
    <!-- 自增区 -->
    <section class="increment">
      <button @click="increment">加一</button>
      <h1>{{ this.$store.state.increment.number }}</h1>
    </section>

    <!-- 自减区 -->
    <section class="decrement">
      <button @click="decrement">减一</button>
      <h1>{{ this.$store.state.decrement.number }}</h1>
    </section>
  </div>
</template>

<script>
export default {
  // 给组件命名（可选）
  name: "VueStudy",
  // 数据
  data() {
    return {};
  },
  // 方法
  methods: {
    increment() {
      // 点击按钮后，我们需要自增加一，我们可以将这个自增加一理解成一个任务，现使用dispatch方法将任务派发给actions_increment
      this.$store.dispatch("actions_increment");
    },
    decrement() {
      // 点击按钮后，我们需要自减减一，我们可以将这个自减减一理解成一个任务，现使用dispatch方法将任务派发给actions_increment
      this.$store.dispatch("actions_decrement");
    }
  },
  mounted() {
    console.log(this.$store);
  }
};
</script>
