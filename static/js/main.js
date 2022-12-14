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
  console.log(articles);
  const article_list = document.getElementById("article_list");
  articles.forEach((article) => {
    // 사진만 들어가는 버전
    // const newimage = document.createElement("img");

    // newimage.setAttribute("src", `${backend_base_url}/${article.image}`);
    // newimage.setAttribute("id", article.id);

    // newimage.setAttribute("onclick", "ArticleDetail(this.id)");

    // article_list.appendChild(newimage);

    // 제목+내용까지
    const newuser = document.createElement("ol");
    const newtitle = document.createElement("ol");
    newtitle.setAttribute("id", article.pk);
    newuser.innerText = article.user;
    newtitle.innerText = article.title;
    newtitle.setAttribute("onclick", "ArticleDetail(this.id)");
    article_list.appendChild(newuser);
    article_list.appendChild(newtitle);
  });
};


window.onload = async function loadArticleList() {
  articles = await getArticleList();
  console.log(articles);
  const article_list = document.getElementById("article_list");
  articles.forEach(article =>
    )
  }