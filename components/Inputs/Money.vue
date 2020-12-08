<template>
<div class="form-group">
  <label v-if="label">
    {{label}}
    <span v-if="required">*</span>
  </label>
  <money :value="value" v-on="listeners" v-bind="money" class="form-control"></money>
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
    error: String,
    value: Number,
  },
  data() {
    return {
      focused: false,
      price: 30,
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
    updateValue(value) {
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
