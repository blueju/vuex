<template>
  <div>
    <p>{{ number1 }}</p>
    <p>{{ number2 }}</p>
    <p>{{ number3 }}</p>
    <p>{{ number4 }}</p>
    <p>{{ number5 }}</p>

    <!-- <p>{{ one }}</p>
    <p>{{ two }}</p>
    <p>{{ three }}</p>
    <p>{{ four }}</p>
    <p>{{ five }}</p> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  // 给组件命名（可选）
  name: "MapState",
  // 数据
  data() {
    return {};
  },
  // 计算属性
  computed: {
    // 简写、快速写法
    // ...mapGetters([
    //   'number1',
    //   'number2',
    //   'number3',
    //   'number4',
    //   'number5',
    // ])

    // 如果你想将一个 getter 属性另取一个名字，使用对象形式：
    // ...mapGetters({
    //   one: "number1",
    //   two: "number2",
    //   three: "number3",
    //   four: "number4",
    //   five: "number5"
    // })
  }
};
</script>
