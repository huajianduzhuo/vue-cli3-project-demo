<template>
  <div class="home">
    <el-form :model="model" ref="form" :show-message="showMessage">
      <h3>第一个</h3>
      <HelloWorld :model="model" :schema="schema" @input-change="handleChange"/>
      <h3>第二个</h3>
      <HelloWorld :model="model" :schema="schema1"/>
      <template>

      </template>
      <el-button @click="add">添加</el-button>
    </el-form>
    <el-button @click="validate">校验</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      showMessage: false,
      schema: [
        {
          type: 'input',
          name: 'item1',
          prop: 'item1',
          rules: [
            { required: true, message: '不能为空', trigger: ['blur'] }
          ]
        },
        {
          type: 'input',
          name: 'item2',
          prop: 'item2',
          rules: [
            { required: true, message: '不能为空', trigger: ['blur'] }
          ]
        }
      ],
      schema1: [
        {
          type: 'checkbox',
          name: 'item3',
          prop: 'item3',
          rules: [
            { required: true, message: '不能为空', trigger: ['change'] }
          ]
        },
        {
          type: 'input',
          name: 'item4',
          prop: 'item4',
          rules: [
            { required: true, message: '不能为空', trigger: ['blur'] }
          ]
        }
      ],
      schemaModel: [
        {
          type: 'checkbox',
          name: 'item5',
          prop: 'item5',
          rules: [
            { required: true, message: '不能为空', trigger: ['change'] }
          ]
        }
      ],
      model: {
        item1: '',
        item2: '',
        item3: '',
        item4: '',
        subItems: []
      }
    }
  },
  methods: {
    validate () {
      this.$refs['form'].validate(valid => {
        if (!valid) {
          this.$message('校验失败')
        }
        this.$nextTick(() => {
          this.$refs['form'].clearValidate()
          this.showMessage = true
        })
      })
    },
    add () {
    },
    handleChange ({ value, name }) {
      if (name === 'item1') {
        this.model['item2'] = value + '123'
      }
    }
  },
  components: {
    HelloWorld
  }
}
</script>
