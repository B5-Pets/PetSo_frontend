// temp_html 형식 만들어서 붙이기(append)

// window.onload() = async function loadProfile() {
//     const response = await fetch(`${backend_base_url}/users/profile/`, {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("access"),
//         },
//         method: "GET",
//       });
//       profile = await response.json();
//       const email = profile.email
//       const profile_img = profile.profile_img
//       const name = profile.name
//       const introduce = profile.introduce
//       let temp_html = `<div class="profile">
//       ${email} ${profile_img}, ${name}, ${introduce}
//       </div>`

//       $('#profile-cards').append(temp_html)
// }


// createElement 이용하기

window.onload = async function loadMyProfile(user_id) {
    profile = await getMyProfile(user_id);
   
    // const profile_img = document.getElementById("profile_img");
    const email = document.getElementById("email");
    const name = document.getElementById("name")
    const introduce = document.getElementById("introduce");
    
    let image = document.createElement("img");
    image.setAttribute("class", "profile_image");
    image.src = `${backend_base_url}${profile.profile_img}`;
    if (image.src = `${backend_base_url}/media/profile/default.jpeg`) {
      image.src = `${frontend_base_url}/static/img/default.jpeg`
    }
    image.setAttribute("style", "width:250px; height:250px; object-fit:cover; border-radius:50%;")
    profile_img.appendChild(image);
    name.innerText = "이름 : "+profile.name;
    email.innerText = profile.email;
    introduce.innerText = "자기소개\n  [  " + profile.introduce + "  ]";

  };

// 펫 리스트 보여주기
async function loadMyPet() {
  pets = await getMyPet();
  const pets_list = document.getElementById("pet_list");
  pets.forEach((pet) => {
    const newPet = document.createElement("pet");
    newPet.innerText = " - " +pet.pet_name + "\n"
    newPet.setAttribute("id", pet.id)
    newPet.setAttribute("class", "pet");
    // 클릭 시 펫 프로필 페이지로
    newPet.setAttribute("onclick", "PetDetail(this.id)")
    newPet.setAttribute("style", "cursor:pointer;")
    pets_list.appendChild(newPet);
  })
}

// 아티클 리스트 보여주기
async function loadMyArticle() {
  articles = await getMyArticle();

  const article_list = document.getElementById("article_list");
  articles.forEach((article) => {
    console.log(article)
    const newImage = document.createElement("img");
    newImage.setAttribute("id", article.id);
    console.log(article.id)
    newImage.setAttribute("class", "article_image");
    newImage.setAttribute("onclick", "ArticleDetail"+`(${article.id})`);
    newImage.src = `${backend_base_url}${article.image}`;
    newImage.setAttribute("style", "width:200px; height:200px;")
    article_list.appendChild(newImage);
    

    const newTitle = document.createElement("li");
    newTitle.setAttribute("id", article.id);
    newTitle.setAttribute("class", "article_title");
    newTitle.innerText = "제목 : " + article.title;
    article_list.appendChild(newTitle);

    // const newContent = document.createElement("li");
    // newContent.setAttribute("id", article.id);
    // newContent.setAttribute("class", "article_content");
    // newContent.innerText = "내용 : " + article.content;
    // article_list.appendChild(newContent);
  });
}

loadMyArticle();
loadMyPet();

