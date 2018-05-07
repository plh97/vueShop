<template>
  <label :for="id">
    <input type="checkbox" :id='id' @change="updateValue">
    <span></span>
    <slot />
  </label>
</template>
<script>
export default {
  name:'v-label',  
  model: {
    prop: 'selected',
    event: 'input'
  },
  props: {
    id: {
      type: (String|Number),
      // required: true
      default: 'id'+ ~~(Math.random()*1000) + 999
    },
    selected: {
      type: Array,
      default: []
    },
  },
  methods: {
    // checkVal(){
    //   return this.selected.includes(this.id)
    // },
    updateValue(e) {
      const newVal = [...this.selected]
      if (e.target.checked) {
        newVal.push(this.id)
      } else {
        newVal.splice(newVal.indexOf(this.id), 1)
      }
      this.$emit('input', newVal)
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@/assets/common/color.scss';
@import '~@/assets/common/dpr.scss';

label {

  input {
    position: absolute;
    display: none;
  }
  input + span {
    display: inline-block;
    @include flex-center();
    @include dpr-fz(28px);
    color: #999;
    margin: 10px;
    position: relative;
  }
  input + span:before {
    display: inline-block;
    width: (36rem/75);
    height: (35rem/75);
    content: "";
    border: 0.03rem solid #c0c0c0;
    border-radius: 50%;
  }
  input + span:after {
    position: absolute;
    display: none;
    content: "";
    top: 0.08rem;
    left: 0.09rem;
    width: 0.3rem;
    height: 0.29rem;
    border-radius: 50%;
    background: #e63131;
  }
  input:checked + span:before {
    border: 0.03rem solid #e63131;
  }
  input:checked + span:after {
    display: block;
  }
}
</style>
