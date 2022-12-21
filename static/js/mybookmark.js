if (!token) {
    window.location.replace(`${frontend_base_url}/login.html`);
  }
  
  // 아티클 리스트 보여주기
  async function GetMyBookmark() {
    articles = await loadGetMyBookmark();
    console.log(articles)
    const article_list = document.getElementById("article_list");
    articles.forEach((article) => {
      const newImage = document.createElement("img");
      newImage.setAttribute("id", article.id);
      newImage.setAttribute("class", "article_image");
      newImage.setAttribute("onclick", "ArticleDetail(this.id)");
      newImage.src = `${backend_base_url}${article.image}`;
      article_list.appendChild(newImage);
  
      const newTitle = document.createElement("li");
      newTitle.setAttribute("id", article.id);
      newTitle.setAttribute("class", "article_title");
      newTitle.innerText = article.title;
      article_list.appendChild(newTitle);
  
      const newContent = document.createElement("li");
      newContent.setAttribute("id", article.id);
      newContent.setAttribute("class", "article_content");
      newContent.innerText = article.content;
      article_list.appendChild(newContent);
    });
  }
  GetMyBookmark();