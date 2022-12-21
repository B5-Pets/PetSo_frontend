
console.log("index.js 로드")

function articleDetail() {
  window.location.href = `${frontend_base_url}/articledetail.html`
} 

//아티클 리스트 가져오기
async function getArticles() {
  const response = await fetch(`${backend_base_url}/articles`, {
    method: "GET",
  });


  response_json = await response.json();
  return response_json;
}

window.onload = async function loadArticleList() {

    articles = await getArticleList();
    console.log(articles)
    const article_list = document.getElementById("article-list");
   
    articles.forEach(article=> {
      console.log(article)
      const newCol = document.createElement("div");
      newCol.setAttribute("class", "col")


      const newCard = document.createElement("div")
      newCard.setAttribute("class", "card")
      newCard.setAttribute("id", article.pk)
      newCard.setAttribute("onclick", "ArticleDetail(this.id)")

      newCol.appendChild(newCard)

      const articleImage = document.createElement("img")
      articleImage.setAttribute("class", "card-img-top")

      if(article.image){
        articleImage.setAttribute("src", `${backend_base_url}${article.image}`)
        articleImage.setAttribute("style", "width:100px; height:100px; object-fit:cover; margin-left:500px; margin-top:40px; margin-bottom: -30px ,  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);")
      }else{
        articleImage.setAttribute("src", "http://horimmuseum.org/sillim/wp-content/uploads/sites/2/2015/07/%EB%B0%98%EB%A0%A4%EB%8F%99%EB%AC%BC.png")
        articleImage.setAttribute("style", "width:100px; height:100px; object-fit:cover; margin-left:500px; margin-top:40px; box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);") // 빈 "" 안에 이미지 url 입력
      }
      
      
      newCard.appendChild(articleImage)

      const newCardBody = document.createElement("div")
      newCardBody.setAttribute("class", "card-body")
      newCard.appendChild(newCardBody)

      const newCardTitle = document.createElement("h5")
      newCardTitle.setAttribute("class", "card-title")
      newCardTitle.setAttribute("style", "margin-top: -100px; width:200px" )
      newCardTitle.innerText = article.title
      newCardBody.appendChild(newCardTitle)

      const newCardText = document.createElement("div")
      newCardText.setAttribute("class", "card-text")
      newCardText.setAttribute("style", "margin-top: 0px color:lightgray;")
      newCardText.setAttribute("id","content")
      newCardText.innerText = article.content
      newCardBody.appendChild(newCardText)

      const newCardName = document.createElement("div")
      newCardName.setAttribute("class", "card-user")
      newCardName.setAttribute("style", "margin-top: 0px;")
      newCardName.setAttribute("id","user")
      newCardName.innerText = article.user
      newCardBody.appendChild(newCardName)
      console.log(newCardName)



      article_list.appendChild(newCol)

    }
    );
    }

  