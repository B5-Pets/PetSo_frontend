// 전역 변수
// EC2 인스턴스 연결 시
// const backend_base_url = "http://ec2인스턴스ip주소";
// 백엔드 서버 연결 시
// const backend_base_url = "http://127.0.0.1:8000";
// const frontend_base_url = "http://127.0.0.1:5500";
const backend_base_url = "https://api.pet-so.net";
const frontend_base_url = "https://pet-so.net";



const token = localStorage.getItem("access");

// 주소로 포스트 페이지받기(페이지네이션 적용시) //
const pageurlParams = new URLSearchParams(window.location.search);
const page_id = pageurlParams.get("page");

// 아티클 디테일 페이지 연결 //
const urlParams = new URLSearchParams(window.location.search);
const article_id = urlParams.get("id");


// 개별 게시글 //

// 로그아웃
function handleLogout() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  localStorage.removeItem("payload");

  window.location.replace(`${frontend_base_url}/login.html`);
}

// 내 프로필 가져오기
async function getMyProfile() {
  const response = await fetch(`${backend_base_url}/user/profile/`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
    method: "GET",
  });
  response_json = await response.json();
  return response_json;
}

// 내 펫 목록 받아오기
async function getMyPet() {
  const response = await fetch(`${backend_base_url}/user/mypet/`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
    method: "GET",
  });
  response_json = await response.json();
  return response_json;
}

// 내 아티클 목록 가져오기
async function getMyArticle() {
  const response = await fetch(`${backend_base_url}/articles/myarticle/`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
    method: "GET",
  });
  response_json = await response.json();
  return response_json;
}

// 내 북마크 가져오기
async function loadGetMyBookmark() {
  const response = await fetch(`${backend_base_url}/articles/mybookmark/`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
    method: "GET",
  });
  response_json = await response.json();
  return response_json;
}



//아티클 리스트 보여주기
async function getArticleList() {
  
  var response = await fetch(`${backend_base_url}/articles/`, {
      method: "GET",
  });
  
  response_json = await response.json();
  return response_json;
}

// // 게시글 리스트
// async function getArticles(){

//   const response = await fetch(`${backend_base_url}/articles/`,{
//       method:"GET"
//   })

//   response_json = await response.json()

//   return response_json
// }


// 아티클 리스트 가져오기
async function getArticles() {
  const response = await fetch(`${backend_base_url}/articles/`,{
    method:"GET"
  }) 
  if(response.status==200){
    const response_json = await response.json()
    return response_json
  }else{
    alert("오류 : 게시물 불러오기 실패!!")
  }
} 

// 아티클 리스트 페이지네이션 적용시켜 가져오기
async function getArticleswithPage() {
  if (!page_id) {
    var response = await fetch(`${backend_base_url}/articles/viewset/`, {
      method: "GET",
    });
  } else {
    var response = await fetch(`${backend_base_url}/articles/viewset/?page=${page_id}`, {
      method: "GET",
    });
  }

  if(response.status==200){
    const response_json = await response.json()
    return response_json
  }else{
    alert("오류 : 게시물 불러오기 실패")
  }
} 




function ArticleDetail(article_id) {

  const url = `${frontend_base_url}/articledetail.html?id=${article_id}`;
  location.href = url;
}

// 펫 프로필 페이지 연결 //
function PetDetail(pet_id) {
  const url = `${frontend_base_url}/petpage.html?id=${pet_id}`;
  location.href = url;
}

// 유저 프로필 페이지 연결 //
function userProfile(user_id) {
  const url = `${frontend_base_url}/profile.html?id=${user_id}`
  location.href = url;
}



// 포스트 작성하기 //
// async function loadCreateArticle(title, content, image) {
//   const formdata = new FormData();

//   formdata.append("title", title);
//   formdata.append("content", content);
//   formdata.append("image", image);

//   const response = await fetch(`${backend_base_url}/post/`, {
//     headers: {
//       Authorization: "Bearer " + localStorage.getItem("access"),
//     },
//     method: "POST",
//     body: formdata,
//   });
//   if (response.status == 200) {
//     alert("글 작성 완료!");
//     window.location.replace(`${frontend_base_url}/index.html`);
//   }
// }

// 좋아요 등록/취소 //


async function DoLike(article_id) {
  const response = await fetch(`${backend_base_url}/articles/${article_id}/like/`, {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
    method: "POST",
  });
  response_json = await response.json();
  if (response.status == 200) {
    window.location.replace(`${frontend_base_url}/articledetail.html?id=${article_id}`);
    alert(response_json);
  } else {
    alert(response.status);
  }
}

// 북마크 등록/취소 //
async function DoBookmark(article_id) {
  const response = await fetch(`${backend_base_url}/articles/bookmark/${article_id}/`, {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
    method: "POST",
  });
  response_json = await response.json();
  if (response.status == 200) {
    window.location.replace(`${frontend_base_url}/articledetail.html?id=${article_id}`);
    alert(response_json["message"]);
  } else {
    alert(response.status);
  }
}







// 개별 게시글 데이터 가져오기
async function getArticleDetail(){

  const response = await fetch(`${backend_base_url}/articles/${article_id}/`,{
      method:"GET",

  })
  response_json = await response.json()

  return response_json
  
  
}



// 댓글 리스트 가져오기 //
async function GetComment(article_id) {
  const response = await fetch(`${backend_base_url}/articles/${article_id}/comment/`, {
    method: "GET",
  });
  response_json = await response.json();
  return response_json;
}

// 댓글 작성하기
async function loadCreateComment(comment) {

  const response = await fetch(`${backend_base_url}/articles/${article_id}/comment/`, {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
    method: "POST",
    body: JSON.stringify({
      articles: article_id,
      content: comment,


    }),

  });
  response_json = await response.json();

  if (response.status == 201) {
    window.location.replace(`${frontend_base_url}/articledetail.html?id=${article_id}`);
  } else {
    alert(response.status);
  }
}

// 댓글 수정하기 //
async function loadUpdateComment(comment_id) {
  const input_comment = document.getElementById("modal_comment").value;

  const response = await fetch(`${backend_base_url}/articles/${article_id}/comment/${comment_id}/`, {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
    method: "PUT",
    body: JSON.stringify({
      articles: article_id,
      content: input_comment,
    }),
  });
  response_json = await response.json();

  if (response.status == 200) {
    window.location.replace(`${frontend_base_url}/articledetail.html?id=${article_id}`);
  } else {
    alert(response.status);
  }
}

// 댓글 삭제하기 //
async function loadDeleteComment(comment_id) {


  const response = await fetch(`${backend_base_url}/articles/${article_id}/comment/${comment_id}/`, {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
    method: "DELETE",
  });


  if (response.status == 404) {
    window.location.replace(`${frontend_base_url}/articledetail.html?id=${article_id}`);
  } else {
    alert(response.status);
  }
}

// 게시글 수정 페이지로 이동
function ArticleEdit(article_id) {

  const url = `${frontend_base_url}/post_modify.html?id=${article_id}`;

  location.href = url;
}


// 로그인한 유저 가져오기 //
async function getName() {
  const response = await fetch(`${backend_base_url}/user/profile/`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
    method: "GET",
  });

  if (response.status == 200) {
    response_json = await response.json();
    return response_json;
  } else {
    return null;
  }
}

// 게시글 수정하기 //
async function loadUpdateArticle(article_id) {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const image = document.getElementById("image").files[0];
  const category = document.querySelector('input[name="category"]:checked').value;

  // 일상
  const formdata = new FormData();

  formdata.append("title", title);
  formdata.append("content", content);
  formdata.append("image", image);
  formdata.append("category", category)

  const response = await fetch(`${backend_base_url}/articles/${article_id}/`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
    method: "PUT",
    body: formdata,
  });


  alert(response.status)
  response_json = await response.json();
  if (response.status == 200) {
    window.location.replace(`${frontend_base_url}/articledetail.html?id=${article_id}`);
  } else {
    alert(response.status);
  }
}

// 게시글 삭제하기 //

async function DeleteArticle(article_id) {
  const response = await fetch(`${backend_base_url}/articles/${article_id}/`, {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
    method: "DELETE",
  });
  if (response.status == 204) {
    window.location.replace(`${frontend_base_url}/myprofile.html`);
    alert("게시글이 삭제되었습니다.")
  } else {
    alert(response.status);
  }
}


// 펫 삭제하기 //

async function deleteMyPet(pet_id) {

  const response = await fetch(`${backend_base_url}/user/pet/${pet_id}/`, {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
    method: "DELETE",
  });

  if (response.status == 204) {
    window.location.replace(`${frontend_base_url}/myprofile.html`);
  } else {
    alert(response.status);
  }
}




// 다크 모드 전환
function darkmode() {
  document.getElementById('body').classList.toggle('dark');
}


async function getProfile(article_id) {
  const response = await fetch(`${backend_base_url}/articles/${article_id}/user/`, {
    method: "GET",
  });
  response_json = await response.json();
  return response_json;
}



// 카테고리 데이터 가져오기
async function getCategoryArticle(category) {
  const response = await fetch(`${backend_base_url}/articles/${category}/`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
    method: "GET",
  });
  response_json = await response.json();
  return response_json;
}

// 회원 탈퇴
async function handleUnsignup() {
  const response = await fetch(`${backend_base_url}/user/signup/`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
    method: "DELETE",
  });
  response_json = await response.json();
  console.log(response_json)
  if(response.status==200){
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("payload"); 
    alert("회원 탈퇴가 완료되었습니다.")
    window.location.replace(`${frontend_base_url}/index.html`)
  }else{
    alert("오류 : 회원 탈퇴 실패")
  }
  return response_json;
}

