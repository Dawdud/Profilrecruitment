import getRequest from "./fetch.js";

class Posts {
  constructor(list = { posts: [] }) {
    this.list = list;
  }
  getPosts() {
    return getRequest()
      .then(response => {
        for (const {
          data: { title, ups, score, num_comments, created_utc }
        } of response.data.children) {
          this.list.posts.push({
            title: title,
            upvotes: ups,
            score: score,
            num_comments: num_comments,
            created: this.getDatePost(created_utc),
          });
        }
        this.list.count = response.data.dist;
        return this.list;
        
      })
      
      
  }
  getDatePost(timestamp){
    const date= new Date(timestamp *1000);
    let day= date.getDate();
    let month= ('0' + (date.getMonth() + 1)).slice(-2);
    let year= date.getFullYear();
    let hour= date.getHours();
    let minutes="0" + date.getMinutes();
    return  `${day}.${month}.${year} ${hour}:${minutes.substr(-2)}`;
  }
}

export default new Posts();
