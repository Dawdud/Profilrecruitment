import Posts from "./posts.js";

class Filter {
  constructor(category) {
    this.category = category;
  }
  sortByCategory() {
    Posts.getPosts().then(response => {
      const sortSwitch = {
        scores: () =>
          response.posts.sort((obj1, obj2) => {
            return obj1.score - obj2.score;
          }),
        upvotes: () =>
          response.posts.sort((obj1, obj2) => {
            return obj1.upvotes - obj2.upvotes;
          }),
        num_comments: () =>
          response.posts.sort(
            (obj1, obj2) => obj1.num_comments - obj2.num_comments
          )
      };
      console.log(sortSwitch[this.category]());
    });
  }
}

export default new Filter("num_comments");
