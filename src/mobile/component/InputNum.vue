<template>
  <span class="input-num">
    <svg :class="`icon ${value > 1 ? 'active' : ''}`" aria-hidden="true" @click="reduce">
      <use xlink:href="#icon-jianhao"></use>
    </svg>
    <input type="text" :value="value">
    <svg class="icon active" aria-hidden="true" @click="add">
      <use xlink:href="#icon-add"></use>
    </svg>
  </span>
</template>

<style lang="scss" scoped>
@import '~@/assets/common/dpr.scss';
@import '~@/assets/common/color.scss';

.input-num {
  display: inline-flex;

  svg {
    color: #999;
    @include dpr-fz(44px);

    &.active {
      color: $fst-red;
    }
  }

  input {
    color: #999;
    width: (64rem/75);
    border: none;
    margin: 0 2px;
    text-align: center;
    background: #eee;
    border-radius: (10rem/75);
  }
}
</style>

<script>
export default {
  name:"InputNum",
  props: {
    value: {
      type: Number,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
  },
  methods: {
    add(e){
      const index = this.index;
      this.$emit('add', index)
      e.preventDefault();
      
    },
    reduce(e){
      const index = this.index;
      this.$emit('reduce',index)
      e.preventDefault();
    },
  },
}
</script>
