


// 기존 프로필 이미지 보여주기
window.onload = async function loadMyProfile() {
    profile = await getMyProfile();
  
    const profile_update_img = document.getElementById("profile_update_img");
  
    let image = document.createElement("img");
    image.src = `${backend_base_url}${profile.profile_img}`;
    image.setAttribute("style", "width:250px; height:250px; object-fit:cover; border-radius:50%;")
    profile_update_img.appendChild(image);
  };



// 올린 이미지 확인하기 (테스트용)
function readURL(input) {
$('#profile_update_img').empty()

if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = function (e) {
      const profile_update_img = document.getElementById("profile_update_img");
      let image = document.createElement("img");
      image.src = e.target.result;
      image.setAttribute("style", "width:250px; height:250px; object-fit:cover; border-radius:50%;")
      profile_update_img.appendChild(image);
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
      window.location.replace(`${frontend_base_url}/myprofile.html`);
    } else {
      alert("잘못된 입력입니다!");
    }
  }

// 프로필 수정 폼데이터
async function loadMyProfileUpdate() {
    const profile_img = document.getElementById("profile_img").files[0];
    const introduce = document.getElementById("introduce").value;
    const name = document.getElementById("name").value;
    const formdata = new FormData();
  
    formdata.append("profile_img", profile_img);
    formdata.append("introduce", introduce);
    formdata.append("name", name)
  
    updateMyProfile(formdata);
  }

// 회원 탈퇴 모달창
const openButton = document.getElementById("open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal_overlay")
const closeBtn = modal.querySelector("button");
const openModal = () => {
  modal.classList.remove("hidden");
}
const closeModal = () => {
  modal.classList.add("hidden"); 
}
overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
openButton.addEventListener("click", openModal);