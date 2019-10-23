<template>
  <div>
    <el-form :model="form" :rules="rules">
      <tip-form-item label="姓名" prop="name" :tooltips="tooltips">
        <el-input v-model="form.name"></el-input>
      </tip-form-item>
      <el-button @click="toggleTooltips">TOGGLE</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'InputTips',
  data () {
    let nameValidator = (rule, value, callback) => {
      let reg = /^[\u4E00-\u9FA5a-zA-Z][\u4E00-\u9FA5a-zA-Z0-9_-]+/
      if (!reg.test(value)) {
        callback(new Error('姓名不符合校验规则，第一位必须为汉字或字母'))
      } else {
        callback()
      }
    }
    return {
      form: {
        name: ''
      },
      tooltips: '',
      rules: {
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' },
          { validator: nameValidator, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    toggleTooltips () {
      this.tooltips = this.tooltips ? '' : '姓名为汉字+字母+数字，第一位为汉字或字母'
    }
  }
}
</script>
