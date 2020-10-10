<template>
<div class="form-group">
  <label v-if="label" :class="labelClasses">
    {{label}}
    <span v-if="required">*</span>
  </label>
  <money v-model="price" v-bind="money" class="form-control"></money>
  <div class="text-danger invalid-feedback" style="display: block;" :class="{'mt-2': hasIcon}" v-if="error">
    {{ error }}
  </div>
</div>
</template>

<script>
import {
  Money
} from 'v-money'

export default {
  components: {
    Money
  },
  props: {
    required: Boolean,
    label: String,
    error: String
  },
  data() {
    return {
      focused: false,
      price: 0,
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        suffix: '',
        precision: 2,
        masked: false
      }
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
        focus: this.onFocus,
        blur: this.onBlur
      }
    },
  },
  methods: {
    updateValue(evt) {
      let value = evt.target.value;
      this.$emit('input', value);
    },
    onFocus(value) {
      this.focused = true;
      this.$emit('focus', value);
    },
    onBlur(value) {
      this.focused = false;
      this.$emit('blur', value);
    }
  }
}
</script>
