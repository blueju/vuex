<template>
  <div>
    <p>{{ number1 }}</p>
    <p>{{ number2 }}</p>
    <p>{{ number3 }}</p>
    <p>{{ number4 }}</p>
    <p>{{ number5 }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  // 给组件命名（可选）
  name: "MapState",
  // 数据
  data() {
    return {};
  },
  // 计算属性
  computed: {
    number1() {
      return this.$store.state.number1;
    },
    // 简写、快速写法
    ...mapState({
      number2: state => state.number2,
      number3: state => state.number3,
      number4: state => state.number4,
      number5: state => state.number5
    })
    // 完整写法
    // ...mapState({
    //   number4: function(state) {
    //     return state.number4;
    //   },
    //   number5: function(state) {
    //     return state.number5;
    //   }
    // })
  }
};
</script>
