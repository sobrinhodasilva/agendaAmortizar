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
  }
}
</script>
