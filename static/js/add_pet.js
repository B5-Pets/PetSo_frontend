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
    
    
// 펫 등록하기
async function postMyPet() {
    const pet_image = document.getElementById("pet_image").files[0];
    const pet_age = document.getElementById("pet_age").value;
    const pet_name = document.getElementById("pet_name").value;
    const pet_spacies = document.getElementById("pet_spacies").value;
    const pet_sex = document.getElementById("pet_sex").value;
    const pet_desc = document.getElementById("pet_desc").value;
    const formdata = new FormData();
    
    formdata.append("pet_image", pet_image);
    formdata.append("pet_name", pet_name);
    formdata.append("pet_age", pet_age)
    formdata.append("pet_spacies", pet_spacies)
    formdata.append("pet_sex", pet_sex)
    formdata.append("pet_desc", pet_desc)
    
    const response = await fetch(`${backend_base_url}/user/pet/`, {
        headers: {
        Authorization: "Bearer " + localStorage.getItem("access"),
        },
        method: "POST",
        body: formdata,
    });
    
    if (response.status == 200) {
        alert("펫 등록 완료!");
        window.location.replace(`${frontend_base_url}/myprofile.html`);
    } else {
        alert("잘못된 입력입니다!");
    }
}
