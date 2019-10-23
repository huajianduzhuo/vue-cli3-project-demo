<template>
  <div class="list-wrapper">
    <div class="category-wrapper">
      <div
        class="category-item"
        v-for="(category, index) in categories"
        :key="index"
      >
        <span class="category-icon"></span>
        <span class="category-name">{{category}}</span>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="good-list-title">推荐商品</div>
      <div class="good-wrapper">
        <div class="good-item" v-for="good in goods" :key="good.id">
          <div class="good-image">
            <img :src="good.imgUrl" alt="">
          </div>
          <div class="good-info">
            <span class="good-desc">{{good.description}}</span>
            <span class="good-upload-time">{{good.uploadTime}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'List',
  data () {
    return {
      categories: [
        '白', '首', '不', '离', '宇', '你', '同', '行'
      ],
      goods: [
        {
          id: 0,
          description: '只有耐得住繁华，才能守得住寂寞。寄给你，自太古至永劫的思念。愿你永远如长安自在飞。',
          uploadTime: '2018-10-11',
          imgUrl: require('../assets/images/by1.jpg')
        },
        {
          id: 1,
          description: '白色衬衫，微笑阳光白菜心',
          uploadTime: '2019-10-11',
          imgUrl: require('../assets/images/by2.jpg')
        },
        {
          id: 2,
          description: '黑色衬衫，大佬',
          uploadTime: '2018-10-11',
          imgUrl: require('../assets/images/by1.jpg')
        },
        {
          id: 3,
          description: '白色衬衫，微笑阳光白菜心',
          uploadTime: '2019-10-11',
          imgUrl: require('../assets/images/by2.jpg')
        },
        {
          id: 4,
          description: '黑色衬衫，大佬',
          uploadTime: '2018-10-11',
          imgUrl: require('../assets/images/by1.jpg')
        },
        {
          id: 5,
          description: '白色衬衫，微笑阳光白菜心',
          uploadTime: '2019-10-11',
          imgUrl: require('../assets/images/by2.jpg')
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.category-wrapper {
  display: flex;
  flex-flow: row wrap;
  .category-item {
    width: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .category-icon {
      display: block;
      width: 15vw;
      height: 15vw;
      border-radius: 50%;
      background-image: repeating-radial-gradient(circle, lightskyblue, lightskyblue 7%, rgb(245, 245, 89) 7%, rgb(245, 245, 89) 14%, lightpink 14%, lightpink 20%);
      background-size: 100% 100%;
      margin-top: 8px;
      margin-bottom: 8px;
    }
    .category-name {
      font-size: 18px;
      color: rgb(247, 92, 92);
      font-weight: bold;
    }
  }
}
.content-wrapper {
  padding: 15px;
  .good-list-title {
    margin-left: 10px;
    font-size: 16px;
    color: #333333;
    font-weight: bold;
  }
  .good-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    .good-item {
      display: flex;
      border: 1px solid #666666;
      border-radius: 15px;
      margin-bottom: 15px;
      .good-image {
        position: relative;
        width: 100px;
        height: 100px;
        border-radius: 15px;
        overflow: hidden;
        img {
          width: 100%;
          min-height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
        }
      }
      .good-info {
        flex: 1;
        padding-left: 20px;
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        .good-desc {
          line-height: 20px;
          height: 60px;
          overflow: hidden;
        }
        .good-upload-time {
          margin-top: 8px;
          font-size: 14px;
          color: #666666;
        }
      }
    }
  }
}
</style>
