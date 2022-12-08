// 전역 변수
// EC2 인스턴스 연결 시
// const backend_base_url = "http://ec2인스턴스ip주소";
// 백엔드 서버 연결 시


const backend_base_url = "http://127.0.0.1:8000";
const frontend_base_url = "http://127.0.0.1:5500/templates";

const token = localStorage.getItem("access");

// 로그아웃
function handleLogout() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("payload");
  
    window.location.replace(`${frontend_base_url}/login.html`);
  }


// 프로필 가져오기
async function getMyProfile() {
    const response = await fetch(`${backend_base_url}/users/profile/`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access"),
      },
      method: "GET",
    });
    response_json = await response.json();
    return response_json;
  }
  
// 주소로 포스트 페이지받기(페이지네이션 적용시) //
const pageurlParams = new URLSearchParams(window.location.search);
const page_id = pageurlParams.get("page");

// 포스트 리스트 보여주기(페이지네이션 적용시) //
async function getPostList() {
  if (!page_id) {
    var response = await fetch(`${backend_base_url}/post/viewset/`, {
      method: "GET",
    });
  } else {
    var response = await fetch(`${backend_base_url}/post/viewset/?page=${page_id}`, {
      method: "GET",
    });
  }
  response_json = await response.json();
  return response_json;
}

// 포스트 디테일 페이지 연결 //
function PostDetail(post_id) {
  const url = `${frontend_base_url}/post_detail.html?id=${post_id}`;
  location.href = url;
}

// 포스트 작성하기 //
async function loadCreateArticle(title, content, image) {
  const formdata = new FormData();

  formdata.append("title", title);
  formdata.append("content", content);
  formdata.append("image", image);

  const response = await fetch(`${backend_base_url}/post/`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
    method: "POST",
    body: formdata,
  });
  if (response.status == 200) {
    alert("글 작성 완료!");
    window.location.replace(`${frontend_base_url}/index.html`);
  }
}


// 다크 모드 전환
function darkmode() {
    document.getElementById('body').classList.toggle('dark');
  }