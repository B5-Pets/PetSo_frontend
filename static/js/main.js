function articleDetail() {
  window.location.href = `${frontend_base_url}/articledetail.html`
} 

window.onload = async function loadArticleList() {
    viewset = await getArticleswithPage()
    // 아티클 받아오기 //
    articles = viewset["results"];
    
    // 페이지 수 가져오기 // 
    totalCount = viewset['count']
    console.log(totalCount)
    // 페이지네이션 연습중 //
    pageCount = 5
    pages = Math.ceil(Number(totalCount)/Number(pageCount))
    currentPage = new URL(window.location.href).searchParams.get('page')
    if (!currentPage) {
      currentPage = 1
    }

    let pageGroup = Math.ceil(currentPage / pageCount)

    let lastNumber = pageGroup * pageCount 
    if (lastNumber > pages) {
      lastNumber = pages
    }
    let firstNumber = lastNumber - (pageCount - 1) 
    if (firstNumber < 1) {
      firstNumber = 1
    }



    const article_list = document.getElementById("article-list");
   
    articles.forEach(article=> {
      console.log(article)
      const newCol = document.createElement("div");
      newCol.setAttribute("class", "col")


      const newCard = document.createElement("div")
      newCard.setAttribute("class", "card")
      newCard.setAttribute("id", article.id)
      newCard.setAttribute("onclick", "ArticleDetail(this.id)")

      newCol.appendChild(newCard)

      const articleImage = document.createElement("img")
      articleImage.setAttribute("class", "card-img-top")

      if(article.image){

        articleImage.setAttribute("src", `${article.image}`)
        articleImage.setAttribute("style", "width: 200px;", "height: 200px;")

      }else{
        articleImage.setAttribute("src", "http://horimmuseum.org/sillim/wp-content/uploads/sites/2/2015/07/%EB%B0%98%EB%A0%A4%EB%8F%99%EB%AC%BC.png") // 빈 "" 안에 이미지 url 입력
        articleImage.setAttribute("style", "width: 200px;", "height: 200px;", )
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

    // 페이지네이션 페이지 생성하기 //
    for (let i = firstNumber; i <= lastNumber; i++) {
      let temp_html = `
      <li class="page-item"><a class="page-link" href="?page=${i}">${i}</a></li>
      `
      
      $('#pagination').append(temp_html)
    }
  };


  function MovePrevious() {
    if (!page_id || page_id == 1) {
      alert("첫 페이지입니다");
    } else {
      var newpage_id = Number(page_id) - 1;
      location.replace(`${frontend_base_url}/main.html?page=${newpage_id}`);
    }
  }
  
  function MoveNext() {
    if (page_id == pages) {
      alert("마지막 페이지입니다");
    } else {
    var newpage_id = Number(page_id) + 1;
    location.replace(`${frontend_base_url}/main.html?page=${newpage_id}`);
    }
  }

