
function readURL(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('preview').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        document.getElementById('preview').src = "";
    }
    }

// 해당 디테일페이지 데이터 불러오기


// 게시글 데이터 가져오기.
async function editArticle(article_id) {

    const article = await getArticleDetail(article_id);
  
    const title = document.getElementById("title");
    const image = document.getElementById("image");

    
    
    let articleImage = document.createElement("img");
    articleImage.src = `${backend_base_url}${article.image}`;

    image.appendChild(articleImage);
    
    const content = document.getElementById("content");

    // 기존 데이터를 파일 안에 넣기.
    title.innerText = article.title;
    content.innerText = article.content;

}

editArticle(article_id)



 // 게시글 수정하기 //
function updateArticle(article_id) {
    console.log(article_id)
    const edit_button = document.getElementById("edit-button");
    
    edit_button.setAttribute("id", "article-"+`${article_id}`);
    console.log(edit_button)
    edit_button.setAttribute("onclick", "loadUpdateArticle"+`(${article_id})`);
  }

updateArticle(article_id)

























// function updateMode(){

//     const title = document.getElementById("title")
//     const content = document.getElementById("content")
//     title.style.visibility = "hidden"
//     content.style.visibility = "hidden"


//     const input_titles = document.createElement("textarea")
//     input_titles.setAttribute("id","input_title")
//     input_titles.innerText = title.innerHTML


//     const input_contents = document.createElement("textarea")
//     input_contents.setAttribute("id","input_contents")
//     input_contents.innerText = content.innerHTML
//     input_contents.rows=10

//     const body = document.body
//     body.insertBefore(input_titles, title)
//     body.insertBefore(input_contents, content)

//     // 여기까지만 하면 수정이 계속 늘어남.

//     const update_button = document.getElementById("update_button")
//     update_button.setAttribute("onclick","updateArticle()")

// }


// async function updateArticle(){

//     // 새로 입력 받은 값을 가져온다.
//     var input_titles = document.getElementById("input_title")
//     var input_contents = document.getElementById("input_contents")
//     console.log(input_titles.value,input_contents.value)

//     // article_id의 게시글에 변경데이터를 보내주다. 이 패치 아티클을 따라가보자.
//     const article = await patchArticle(article_id,input_titles.value,input_contents.value)

//     // 이후 ui 변경

//     input_titles.remove()
//     input_contents.remove()

//     const title = document.getElementById("title")
//     const content =document.getElementById("content")

//     title.style.visibility = "visible"
//     content.style.visibility = "visible"


//     //  수정내용 바로 적용.
//     update_button.setAttribute("onclick","updateMode()")
    
//     loadArticle(article_id)


// }

// async function removeArticle(){

//     await deleteArticle(article_id)



// }









// getName()







