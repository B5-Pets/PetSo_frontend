async function GetArticle(article_id) {
   const response = await fetch(`${backend_base_url}/articles/${article_id}`, {
     method: "GET",
   });
   response_json = await response.json();
   return response_json;
 }
//ArticleDetail
const urlParams = new URLSearchParams(window.location.search);
const article_id = urlParams.get("id");

async function loadArticle(article_id) {
  const article = await GetArticle(article_id);
  console.log(article)

  const title = document.getElementById("title");
  const user = document.getElementById("user");

  const image = document.getElementById("image");
  let articleImage = document.createElement("img");
  articleImage.src = `${backend_base_url}/${article.image}`;
  image.appendChild(articleImage);

  const content = document.getElementById("content");
  const likes = document.getElementById("likes");
  const bookmarks = document.getElementById("bookmarks");
  const created_at = document.getElementById("created_at");

  const dolike = document.getElementById("dolike");
  const dolike_button = document.createElement("button");
  dolike_button.innerText = "❤️";
  dolike_button.setAttribute("id", article_id);
  dolike_button.setAttribute("class", "btn btn-outline-danger");
  dolike_button.setAttribute("onclick", "DoLike(this.id)");
  console.log(dolike_button)
  dolike.appendChild(dolike_button);
  
  title.innerText = article.title;
  user.innerText = article.user;
  content.innerText = article.content;
  likes.innerText = article.likes;
  bookmarks.innerText = article.bookmarks;
  created_at.innerText = article.created_at.replace("T", " ").substr(0, 16);
}
loadArticle(article_id);



//Like
// $(function(){
//     var $likeBtn =$('.icon.heart');

//         $likeBtn.click(function(){
//         $likeBtn.toggleClass('active');

//         if($likeBtn.hasClass('active')){          
//            $(this).find('img').attr({
//               'src': 'https://cdn-icons-png.flaticon.com/512/803/803087.png',
//                alt:'좋아요'
//                 });
          
          
//          }else{
//             $(this).find('i').removeClass('fas').addClass('far')
//            $(this).find('img').attr({
//               'src': 'https://cdn-icons-png.flaticon.com/512/812/812327.png',
//               alt:"좋아요 취소"
//            })
//          }
//      })
// })



