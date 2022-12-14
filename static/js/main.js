console.log("index.js 로드")

function articleDetail() {
  window.location.href = `${frontend_base_url}/articledetail.html`
} 

window.onload = async function loadArticleList() {
    articles = await getArticles()
    console.log(articles)
    const article_list = document.getElementById("article-list");
   
    articles.forEach(article=> {
      const newCol = document.createElement("div");
      newCol.setAttribute("class", "col")
      newCol.setAttribute("onclick", "articleDetail(this.id)")


      const newCard = document.createElement("div")
      newCard.setAttribute("class", "card")
      newCard.setAttribute("id", article.pk)
      newCard.setAttribute("onclick", "ArticleDetail(this.id)")

      newCol.appendChild(newCard)

      const articleImage = document.createElement("img")
      articleImage.setAttribute("class", "card-img-top")

      if(article.image){
        articleImage.setAttribute("src", `${backend_base_url}${article.image}`)
        articleImage.setAttribute("style", "width: 200px;", "height: 200px;")
      }else{
        articleImage.setAttribute("src", "http://horimmuseum.org/sillim/wp-content/uploads/sites/2/2015/07/%EB%B0%98%EB%A0%A4%EB%8F%99%EB%AC%BC.png") // 빈 "" 안에 이미지 url 입력
        articleImage.setAttribute("style", "width: 200px;", "height: 200px;")
      }
      
      
      newCard.appendChild(articleImage)

      const newCardBody = document.createElement("div")
      newCardBody.setAttribute("class", "card-body")
      newCard.appendChild(newCardBody)

      const newCardTitle = document.createElement("h5")
      newCardTitle.setAttribute("class", "card-title")
      newCardTitle.innerText = article.title
      newCardBody.appendChild(newCardTitle)



      article_list.appendChild(newCol)

    }
    );
    }

