<template>
  <!-- <v-gallery :images="list" :caption="true"  >
  </v-gallery> -->

  <!-- <div id="app">
    {{ info }}
  </div> -->

  <ul v-if="posts && posts.length">
    <li v-for="post of posts" v-bind:key="post">
      <p><strong>{{post.author}}</strong></p>
      <p>{{post.id}}</p>
   
      <!-- <v-gallery :images="url" :caption="true">
      </v-gallery> -->
    </li>
  </ul>

</template>


<script>
// var dataURL = 'https://picsum.photos/v2/list';

// var App = new Vue({
//   el: '#app',
//   data: {
//     posts: [] // initialize empty array
//   },
//   mounted() { // when the Vue app is booted up, this is run automatically.
//     var self = this // create a closure to access component in the callback below
//     $.getJSON(dataURL, function(data) {
//       self.posts = data;
//     });
//   }
// })

import axios from 'axios';
// import Vue from 'vue';

// new Vue({
//   el: '#app',
//   data(){
//     return {
//       info: null
//     }
//   },
//   mounted() {
//     axios
//       .get('https://picsum.photos/v2/list')
//       .then(response => (this.info = response))
//   }
// })

// export default {
//   data(){
//     return {
//       list: [
//         {title:'Image1',url:'https://picsum.photos/id/1/5616/3744'}
//         ]
//     }
//   }
// }

  export default{
    data() {
      return {
        posts: [],
        errors: []
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

