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


// 게시글 수정하기

function updateMode(){

   const title = document.getElementById("title")
   const content = document.getElementById("content")
   title.style.visibility = "hidden"
   content.style.visibility = "hidden"


   const input_titles = document.createElement("textarea")
   input_titles.setAttribute("id","input_title")
   input_titles.innerText = title.innerHTML


   const input_contents = document.createElement("textarea")
   input_contents.setAttribute("id","input_contents")
   input_contents.innerText = content.innerHTML
   input_contents.rows=10

   const body = document.body
   body.insertBefore(input_titles, title)
   body.insertBefore(input_contents, content)


   const update_button = document.getElementById("update_button")
   update_button.setAttribute("onclick","updateArticle()")

}

//  게시글 수정 내용 저장

async function updateArticle(){

   // 새로 입력 받은 값을 가져온다.
   var input_titles = document.getElementById("input_title")
   var input_contents = document.getElementById("input_contents")
   console.log(input_titles.value,input_contents.value)

   // article_id의 게시글에 변경데이터를 보내주다. 이 패치 아티클을 따라가보자.
   const article = await patchArticle(article_id,input_titles.value,input_contents.value)

   // 이후 ui 변경

   input_titles.remove()
   input_contents.remove()

   const title = document.getElementById("title")
   const content =document.getElementById("content")

   title.style.visibility = "visible"
   content.style.visibility = "visible"


   //  수정내용 바로 적용.
   update_button.setAttribute("onclick","updateMode()")
   
   loadArticle(article_id)


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


