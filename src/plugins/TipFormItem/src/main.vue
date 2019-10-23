<template>
  <div class="el-form-item" :class="[{
      'el-form-item--feedback': elForm && elForm.statusIcon,
      'is-error': validateState === 'error',
      'is-validating': validateState === 'validating',
      'is-success': validateState === 'success',
      'is-required': isRequired || required,
      'is-no-asterisk': elForm && elForm.hideRequiredAsterisk
    },
    sizeClass ? 'el-form-item--' + sizeClass : ''
  ]">
    <label :for="labelFor" class="el-form-item__label" :style="labelStyle" v-if="label || $slots.label">
      <slot name="label">{{label + form.labelSuffix}}</slot>
    </label>
    <div class="el-form-item__content" :style="contentStyle">
      <slot></slot>
      <transition name="el-zoom-in-top">
        <slot
          v-if="validateState === 'error' && showMessage && form.showMessage"
          name="error"
          :error="validateMessage">
          <div
            class="el-form-item__error"
            :class="{
              'el-form-item__error--inline': typeof inlineMessage === 'boolean'
                ? inlineMessage
                : (elForm && elForm.inlineMessage || false)
            }"
          >
            {{validateMessage}}
          </div>
        </slot>
        <div v-else-if="tooltips" class="el-form-item__tooltip">
          {{tooltips}}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { FormItem } from 'element-ui'
export default {
  name: 'TipFormItem',
  mixins: [FormItem],
  props: {
    tooltips: String
  }
}
</script>
<style scoped>
.el-form-item__tooltip {
  line-height: 1;
  position: absolute;
  top: 100%;
  left: 0;
  text-align: left;
  width: 100%;
  font-size: 12px;
  margin-bottom: 10px;
  padding: 3px 5px;
  box-sizing: border-box;
}
</style>
