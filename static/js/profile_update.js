


// 기존 프로필 이미지 보여주기
window.onload = async function loadMyProfile() {
    profile = await getMyProfile();
  
    const profile_update_img = document.getElementById("profile_update_img");
  
    let image = document.createElement("img");
    image.src = `${backend_base_url}${profile.profile_img}`;
    profile_update_img.appendChild(image);
  };


// 올린 이미지 확인하기 (테스트용)
function readURL(input) {
if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('preview').src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
} else {
    document.getElementById('preview').src = "";
}
}


// 프로필 수정하기
async function updateMyProfile(formdata) {
    const response = await fetch(`${backend_base_url}/user/profile/`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access"),
      },
      method: "PUT",
      body: formdata,
    });
  
    if (response.status == 200) {
      alert("프로필 변경 완료!");
      window.location.replace(`${frontend_base_url}/profile.html`);
    } else {
      alert("잘못된 입력입니다!");
    }
  }

// 프로필 수정 폼데이터
async function loadMyProfileUpdate() {
    const profile_img = document.getElementById("profile_img").files[0];
    const bio = document.getElementById("bio").value;
  
    const formdata = new FormData();
  
    formdata.append("profile_img", profile_img);
    formdata.append("bio", bio);
  
    updateMyProfile(formdata);
  }


