<template>
  <!-- <section class = "posts" >
   <img v-for="post in posts" v-bind:key="post" :src="post.download_url" contain height="100px" width="150px"/>
  <v-gallery v-for="post in posts" v-bind:key="post" :images="post.download_url"  >
    </v-gallery>
  </section> -->

    <!-- <section class = "posts">
      <v-gallery :images={{posts.download_url}}  >
      </v-gallery>
    </section> -->
<!-- 
  <div id="posts">
      <v-gallery :images="download_url">
      </v-gallery>
  </div> -->

    <div class="posts">
        <div v-for="post in posts" v-bind:key="post" :src="post" class="image-container">
                <img :src="post.download_url" width= "160px">
                <figcaption>{{post.author}}</figcaption>
        </div>
    </div>

  <!-- <div id="app">
    {{ info }}
  </div> -->

  <!-- <ul v-if="posts && posts.length">
    <li v-for="post of posts" v-bind:key="post">
      <p><strong>{{post.author}}</strong></p>
      <p>{{post.id}}</p>
    </li>
  </ul> -->

</template>


<script>

import axios from 'axios';

  // export default{
  //   data() {
  //     return {
  //       posts: [],
  //       errors: []
  //     }
  //   },

  //   created() {
  //     axios.get('https://picsum.photos/v2/list')
  //     .then(response => {
  //       this.posts = response.data
  //     })
  //     .catch(e => {
  //       this.errors.push(e)
  //     })
  //   }
  // }

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
  background-color: black;
}
</style>