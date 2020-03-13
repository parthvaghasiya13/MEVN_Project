<template>
  <div>
    <div id="details">
      <h1>Welcome to the Gallery of Foxconn Industrial Internet - USA</h1>
      <p>Foxconn manufactures electronic products for major American, Canadian, Chinese, Finnish and Japanese companies. Notable products manufactured by Foxconn include the BlackBerry, iPad, iPhone, iPod, Kindle, Nintendo 3DS, Nokia devices, Xiaomi devices, PlayStation 3, PlayStation 4, Wii U, Xbox 360, Xbox One, and several CPU sockets, including the TR4 CPU socket on some motherboards. As of 2012, Foxconn factories manufactured an estimated 40% of all consumer electronics sold worldwide.</p>
      <p>The genesis of Foxconn Industrial Internet (Fii) started in 2013 when Foxconn realized the growth potential of a global company ready to lead the rise of the Industrial Internet. Fii is driving focused engagements in High Performance Computing, AI applications, Cloud and 5G Networks.</p>
      <p>We provide the latest in High Performance Computing hardware, all tailored to meet your specific business needs. Our range of HPC solutions can reduce your workflow time from days to hours.</p>
    </div>
    <div id="posts">
      <div v-for="post in posts" v-bind:key="post">
        <img v-bind:src="post.download_url" alt="post.url" width="200px" height="200px" />
        <figcaption>{{post.author}}</figcaption>
      </div>
    </div>
    <div id="details">
      <br />
      <p>We present opportunity for continued technological advancement for fans looking to consume sports across devices through integrating augmented reality (AR), virtual reality (VR), and AI into their viewing experience.</p>
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