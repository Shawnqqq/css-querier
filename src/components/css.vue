<template>
  <div class="container">
    <div v-for="item in css" :key="item.title" class="section-item" :style="{backgroundColor: item.color}">
      <div class="title">
        <div class="title-name">{{item.title}}</div>
        <div class="title-en">{{item.title_en}}</div>
      </div>
      <a class="content-item" v-for="value in item.list" :key='value.item' target="_blank" :href="value.url">{{value.item}}</a>
    </div>
  </div>
</template>


<script>
import css from "./data";

export default {
  data(){
    return{
      css:css
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    width: 100%;
    height: 2000px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: #000;
  }
  .section-item{
    border-radius: 6px;
    min-width: 18%;
    max-width: 24%;
    display: flex;
    flex-direction: column;
    background-color: #ffce54;
    margin: 5px;
    padding: 10px;
    flex-basis: auto;
  }
  .title{
    display: flex;
  }
  .title-name{
    font-size: 14px;
    line-height: 20px;
    margin-right: 5px;
  }
  .title-en{
    font-size: 12px;
    color: rgba(0,0,0,0.3);
    line-height: 20px;
  }
  .content-item{
    line-height: 24px;
    color:#000;
    padding: 0 14px 0 14px;
    border-radius:5px;
    text-decoration:none
  }
  .content-item:hover{
    color:#fff;
    background-color:rgba(153, 153, 153, 0.301);
  }
</style>
