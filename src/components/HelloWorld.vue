<template>
  <div>
    <el-form-item v-for="elm in schema" :key="elm.name" :prop="elm.prop" :rules="elm.rules">
      <el-input v-if="elm.type === 'input'" :type="elm.type" v-model="model[elm.name]" @change="handleChange($event, elm)"></el-input>
      <el-checkbox v-if="elm.type === 'checkbox'" v-model="model[elm.name]">备选项</el-checkbox>
    </el-form-item>
  </div>
</template>
<script>
export default {
  props: ['model', 'schema'],
  data () {
    return {
    }
  },
  methods: {
    handleChange (value, item) {
      this.$emit('input-change', { value, name: item.name })
    }
  }
}
</script>
