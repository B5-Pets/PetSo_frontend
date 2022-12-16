// 주소로 아티클 페이지받기 //
const userurlParams = new URLSearchParams(window.location.search);
const user_id = userurlParams.get("id");


window.onload = async function loadProfile() {
    const response = await fetch(`${backend_base_url}/user/profile/${user_id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access"),
      },
      method: "GET",
    });
    profile = await response.json();

    console.log(profile)
  
    const profile_img = document.getElementById("profile_img");
    const email = document.getElementById("email");
    const name = document.getElementById("name")
    const introduce = document.getElementById("introduce");
  
    let image = document.createElement("img");
    image.setAttribute("class", "profile_image");
    image.src = `${backend_base_url}${profile.profile_img}`;
    profile_img.appendChild(image);
    name.innerText = profile.name;
    email.innerText = profile.email;
    introduce.innerText = "[ " + profile.introduce + " ]";
  };

  // 이 유저의 펫 리스트 보여주기
async function loadPet() {
  const response = await fetch(`${backend_base_url}/user/${user_id}/pet/`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
    method: "GET",
  });

  pets = await response.json();
  console.log(pets)
  const pets_list = document.getElementById("pet_list");
  pets.forEach((pet) => {
    const newPet = document.createElement("pet");
    newPet.innerText = pet.pet_name + " "
    newPet.setAttribute("id", pet.id)
    newPet.setAttribute("class", "pet");
    // 클릭 시 펫 프로필 페이지로
    newPet.setAttribute("onclick", "PetDetail(this.id)")
    newPet.setAttribute("style", "cursor:pointer;")
    pets_list.appendChild(newPet);
  })
}

// 이 유저의 아티클 리스트 보여주기
async function loadArticle() {
  const response = await fetch(`${backend_base_url}/articles/user/${user_id}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
    method: "GET",
  });

  articles = await response.json();
  console.log(articles)

  const article_list = document.getElementById("article_list");
  articles.forEach((article) => {
    console.log(article)
    const newImage = document.createElement("img");
    newImage.setAttribute("id", article.id);
    newImage.setAttribute("class", "article_image");
    newImage.setAttribute("onclick", "ArticleDetail"+`(${article.id})`);
    newImage.src = `${backend_base_url}${article.image}`;
    newImage.setAttribute("style", "width:200px; height:200px;")
    article_list.appendChild(newImage);
    

    const newTitle = document.createElement("li");
    newTitle.setAttribute("id", article.id);
    newTitle.setAttribute("class", "article_title");
    newTitle.innerText = "제목\n" + article.title;
    article_list.appendChild(newTitle);

    const newContent = document.createElement("li");
    newContent.setAttribute("id", article.id);
    newContent.setAttribute("class", "article_content");
    newContent.innerText = "내용\n\n" + article.content;
    article_list.appendChild(newContent);
  });
}

loadPet();
loadArticle();