<template>
  <div>
    <div id="details">
      <h1>Welcome to the Gallery of Foxconn's new Wisconsin Plant</h1>
      <p>The Foxconn plant in southeastern Wisconsin is a project to ostensibly build a $10 billion flat screen TV and LCD panel manufacturing plant in Mount Pleasant, Wisconsin that was originally slated to employ 13,000 people. The state of Wisconsin had made an agreement with Foxconn whereby the company would receive subsidies ranging from $3 billion to $4.8 billion (paid in increments if Foxconn met certain targets), which would have been by far the largest subsidy ever given to a foreign firm in U.S. history. The factory was set to start production by the end of 2020 but as of December 2019 construction had yet to begin.</p>
    </div>
    <div id="posts">
      <div v-for="post in posts" v-bind:key="post">
        <img v-bind:src="post.download_url" alt="post.url" width="200px" height="200px" />
        <figcaption>{{post.author}}</figcaption>
      </div>
    </div>
    <div id="details">
      <br>
      <p>In January 2019, Foxconn said it was reconsidering its initial plans to manufacture LCD screens at the Wisconsin plant, citing high labor costs in the United States, and that it would hire mostly engineers and researchers, rather than manufacturing workforce. In February 2019, Bloomberg News reported that the plant was "unlikely to ever employ 13,000 workers."In an interview in July 2019, Governor Tony Evers said that Foxconn told him the factory would open by May 2020, but would employ only 1,500 workers.</p>
      <p>As of January 2020, construction work on some buildings has progressed, and Foxconn's founder Terry Gou insisted the factory would be operational within 2020.</p>
      <h3>Stay tuned for more updates.</h3>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      error: []
    };
  },

  created() {
    axios
      .get("https://picsum.photos/v2/list")
      .then(response => {
        this.posts = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>