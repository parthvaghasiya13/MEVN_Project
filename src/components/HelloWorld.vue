<template>

    <div class="posts">
             <!-- <div v-for="post in posts" v-bind:key="post" :src="post" class="image-container" >
                    <img :src="post.download_url" alt="post.url" width= "160px" margin="auto">
                     <figcaption>{{post.author}}</figcaption>
              </div> -->
              <!-- <table id="table1">
                <tr class="posts">
                  <tr v-for="post in posts" v-bind:key="post" class="posts">
                    <img :src="post.download_url" :alt="post.author" width= 50%>
                    <figcaption class="center">{{post.author}}</figcaption>
                    <br/>
                  </tr>
                </tr>
                <tr class="posts">
                  <td v-for="post in posts" v-bind:key="post">
                    <img :src="post.download_url" :alt="post.author" width= 160px>
                    <figcaption>{{post.author}}</figcaption>
                  <td/>
                  </tr> 
              </table> -->

             <!-- <div v-for="post in posts" v-bind:key="post" :src="post" class="image-container" >
                    <img v-bind:src="post.download_url" alt="post.url" width= "160px" margin="auto">
                     <figcaption>{{post.author}}</figcaption>
              </div> -->

              <div id="posts">
                <div v-for="post in posts" v-bind:key="post">
                  <img v-bind:src="post.download_url" alt="post.url" width= 200px>
                  <figcaption>{{post.author}}</figcaption>
                </div>
              </div>
                <!-- <div class="slider">
                  <div v-for="post in posts" v-bind:key="post" :src="post" class="image-container">
                    <img :src="post.download_url" alt="post.url" width= "160px" margin="auto">
                     <figcaption>{{post.author}}</figcaption>
                  </div>
                </div> -->

              <!-- <ul>
                <ul class="posts">
                  <li v-for="post in posts" v-bind:key="post">
                    <img :src="post.download_url" :alt="post.author" width= 40%>
                    <figcaption>{{post.author}}</figcaption>
                  <li/>
                    <li v-for="(post, index) in posts" :key="post"
                       :class="'posts-' + ((index % 30) + 1)"
                      >

                     {{ post.author }}

                    </li>
                </ul>
              </ul> -->
          
    </div>

</template>


<script>

import axios from 'axios';

  export default{
    data() {
      return {
        posts: [],
        error: []
      }
    },

    created() {
      axios.get('https://picsum.photos/v2/list')
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
</script>

<style scoped>
.image-container {
  display: table-cell;
  vertical-align: middle;
  height: 120px;
  background-color: white;
}

#posts div {
  display: inline-block;
  margin: 6px 8px;
}
</style>