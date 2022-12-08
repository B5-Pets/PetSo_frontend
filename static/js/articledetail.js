const urlParams = new URLSearchParams(window.location.search);
const article_id = urlParams.get('id')
console.log(article_id)

//  게시글 상세 정보 불러오기.
async function loadArticle(article_id){

    const article = await getArticleDetail(article_id);
    console.log(article)
    const title = document.getElementById("title")
    const content = document.getElementById("content")
   //  const article_images = document.getElementById("article_images")
    const article_author = document.getElementById("article_author")
    const updated_at = document.getElementById("updated_at")
   //  const likes = document.getElementById("likes")
    title.innerText = article.title
    content.innerText = article.content
    //  article_images.
    article_author.innerText = article.author
    updated_at = article.updated_at
   //  likes = article.likes



   // 게시글 작성자가 아니라면 버튼 숨기기.
   //  const user = await getName()
   //  if(user.id != article.user){

   //      const update_button = document.getElementById("update_button")
   //      const delete_button = document.getElementById("delete_button")
   //      update_button.style.visibility = "hidden"
   //      delete_button.style.visibility = "hidden"

    }




// 게시글 삭제

async function removeArticle(){

   await deleteArticle(article_id)

}


loadArticle(article_id)




$(function(){
    var $likeBtn =$('.icon.heart');

        $likeBtn.click(function(){
        $likeBtn.toggleClass('active');

        if($likeBtn.hasClass('active')){          
           $(this).find('img').attr({
              'src': 'https://cdn-icons-png.flaticon.com/512/803/803087.png',
               alt:'찜하기 완료'
                });
          
          
         }else{
            $(this).find('i').removeClass('fas').addClass('far')
           $(this).find('img').attr({
              'src': 'https://cdn-icons-png.flaticon.com/512/812/812327.png',
              alt:"찜하기"
           })
         }
     })
})


