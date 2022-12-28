function articleDetail() {
  window.location.href = `${frontend_base_url}/articledetail.html`
} 

window.onload = async function loadArticleList() {
    viewset = await getArticleswithPage()
    // 아티클 받아오기 //
    articles = viewset["results"];
    // 페이지 수 가져오기 // 
    totalCount = viewset['count']
    
    // 페이지네이션 바 관련 //
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
        article_url = article.image.substr(19)
        // article_url = article.image.substr(21) 로컬 개발환경
        articleImage.setAttribute("src", `${backend_base_url}${article_url}`)
        articleImage.setAttribute("style", "width:150px; height:150px; object-fit:cover; margin-left:650px; margin-top:25px; box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);  ")

      }else{
        articleImage.setAttribute("src", "http://horimmuseum.org/sillim/wp-content/uploads/sites/2/2015/07/%EB%B0%98%EB%A0%A4%EB%8F%99%EB%AC%BC.png") // 빈 "" 안에 이미지 url 입력
        articleImage.setAttribute("style", "width:150px; height:150px; object-fit:cover; margin-left:560px; margin-top:25px; box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);" )
      }
      
      
      newCard.appendChild(articleImage)

      const newCardBody = document.createElement("div")
      newCardBody.setAttribute("class", "card-body")
      newCardBody.setAttribute("style", "margin-left:40px;" )
      newCard.appendChild(newCardBody)

      const newCardTitle = document.createElement("h5")
      newCardTitle.setAttribute("class", "card-title")
      newCardTitle.setAttribute("style", "margin-top: -140px; width:200px;" )
      newCardTitle.innerText = article.title
      newCardBody.appendChild(newCardTitle)

      const newCardText = document.createElement("div")
      newCardText.setAttribute("class", "card-text")
      newCardText.setAttribute("style", "margin-top: -15px; color:lightgray; ")
      newCardText.setAttribute("id","content")
      newCardText.innerText = article.content
      newCardBody.appendChild(newCardText)

      const newCardName = document.createElement("div")
      newCardName.setAttribute("class", "card-user")
      newCardName.setAttribute("style", "margin-top: 20px;")
      newCardName.setAttribute("id","user")
      newCardName.innerText = article.user
      newCardBody.appendChild(newCardName)

      // const newCardCategory = document.createElement("div")
      // newCardCategory.setAttribute("class", "card-")


      article_list.appendChild(newCol)

    }
    );

    // 페이지네이션 바 페이지 생성하기 //
    for (let i = firstNumber; i <= lastNumber; i++) {
      let temp_html = `
      <li class="page-item"><a id="${i}" class="page-link" href="?page=${i}">${i}</a></li>
      `
      $('#pagination').append(temp_html)
    }
  
    // 페이지네이션 바 현재 페이지 표시 //
    const NowPage = document.getElementById(page_id)
    console.log(NowPage)
    NowPage.setAttribute("style", "background:#a55eea; color:#fff;")

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

