// 토큰이 없으면 로그인 페이지로 이동
if (!token) {
   window.location.replace(`${frontend_base_url}/login.html`);
 }

 // 유저 정보 가져오기 //
async function checkLogin() {
   const name = await getMyProfile();
 
   const username = document.getElementById("username");
   username.innerText = name.name
 }
 checkLogin();
 
//  const urlParams = new URLSearchParams(window.location.search);
//  const article_id = urlParams.get("id");
//  console.log(article_id)
 async function loadArticle(article_id) {

   // 개별 게시글 데이터 가져오기.
   const article = await getArticleDetail(article_id);
 

   const title = document.getElementById("title");
  //  const user_name = document.getElementById("user-name")
   const image = document.getElementById("article_imgs");
   const category = document.getElementById("article-category");

  const content = document.getElementById("content");
  const likes = document.getElementById("likes");
  const bookmarks = document.getElementById("bookmarks");

  const dolike = document.getElementById("dolike");
  const dolike_button = document.createElement("button");
  dolike_button.innerText = "❤️";
  dolike_button.setAttribute("id", article_id);
  dolike_button.setAttribute("class", "btn btn-outline-danger");
  dolike_button.setAttribute("onclick", "DoLike(this.id)");
  console.log(dolike_button)
  dolike.appendChild(dolike_button);


   let articleImage = document.createElement("img");
   articleImage.setAttribute("class","article_imgs2")
   articleImage.src = `${backend_base_url}${article.image}`;
   image.appendChild(articleImage);
 
   // 북마크
   const dobookmark = document.getElementById("dobookmark");
   const dobookmark_button = document.createElement("button");
   dobookmark_button.innerText = "🔖";
   dobookmark_button.setAttribute("id", article_id);
   dobookmark_button.setAttribute("class", "btn btn-outline-warning");
   dobookmark_button.setAttribute("onclick", "DoBookmark"+`(${article_id})`);
   dobookmark.appendChild(dobookmark_button);
 
   title.innerText = article.title;
  //  user_name.innerText = article.user;
   content.innerText = article.content;
   likes.innerText = article.likes;
   bookmarks.innerText = article.bookmarks;
   category.innerText = article.category;
  //  created_at.innerText = article.created_at.replace("T", " ").substr(0, 16);
 }
 
 loadArticle(article_id);
 
//유저 프로필 가져오기
 async function loadGetProfile(article_id) {
   user = await getProfile(article_id);

   const profile = document.getElementById("user-name");
   let profileImage = document.createElement("img");
   profileImage.src = `${backend_base_url}${user.profile_img}`;
   
   profileImage.setAttribute("class", "profile_img");
   profile.appendChild(profileImage);
 }

 loadGetProfile(article_id);
 
//  // 댓글 리스트 보여주기 //

 async function loadGetComment(article_id) {

   comments = await GetComment(article_id);
   console.log(comments)
   const userinfo = await getName();

   const user_list = document.getElementById("email");
   const comment_list = document.getElementById("comment");
   const update_button_list = document.getElementById("update_button");
   const delete_button_list = document.getElementById("delete_button");

   comments.forEach((comment) => {

  //  유저 아이디
   const newUser = document.createElement("p");
  //  유저가 남긴 댓글
   const newComment = document.createElement("p");

   newUser.setAttribute("id", comment.id);
   newUser.setAttribute("class", "comment-email")
   newUser.innerText = comment.user;
   newComment.innerText = comment.content;
   comment_list.appendChild(newComment);

  

   const update_comment_button = document.createElement("button");
   const delete_comment_button = document.createElement("button");
 


   update_comment_button.innerText = "🖋";
   delete_comment_button.innerText = "❌";
 
   update_comment_button.setAttribute("id", comment.id);
   update_comment_button.setAttribute("class", "button-edit");
   update_comment_button.setAttribute("data-bs-toggle", "modal");
   update_comment_button.setAttribute("data-bs-target", "#exampleModal");
   
   delete_comment_button.setAttribute("id", comment.id);
   delete_comment_button.setAttribute("class", "button-delete");
   update_comment_button.setAttribute("onclick", "UpdateComment"+`(${comment.id})`);

   delete_comment_button.setAttribute("onclick", "DeleteComment"+`(${comment.id})`);
   update_button_list.appendChild(update_comment_button);
   delete_button_list.appendChild(delete_comment_button);
 
  if (userinfo.email != comment.user_email) {
    update_comment_button.style.visibility = "hidden";
    delete_comment_button.style.visibility = "hidden";
  }userinfo


});
}

loadGetComment(article_id);

 

async function loadArticleEdit(article_id) {

  // 개별 게시글 데이터 가져오기.
  const article = await getArticleDetail(article_id);
  console.log(article)

  ArticleEdit(article.id)

}


//Like
const $like = document.getElementById('like');
$like.addEventListener('click', () => {
  $like.classList.toggle('is-liked');
});





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



 // 댓글 작성하기 //
 function CreateComment() {
  const comment = document.getElementById("comment-input").value;
  console.log(comment)
  loadCreateComment(comment);
}


 
 // 댓글 수정하기 //
 async function UpdateComment(comment_id) {
   const save_button = document.getElementById("save_button");
 
   save_button.setAttribute("id", comment_id);
   save_button.setAttribute("onclick", "loadUpdateComment"+`(${comment_id})`);
 }
 
 // 댓글 삭제하기 //
 async function DeleteComment(article_id) {
   await loadDeleteComment(article_id);}

