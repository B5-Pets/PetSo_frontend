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
