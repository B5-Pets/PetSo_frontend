// 주소로 아티클 페이지받기 //
const pageurlParams = new URLSearchParams(window.location.search);
const user_id = pageurlParams.get("id");


window.onload = async function loadMyProfile(user_id) {
    const response = await fetch(`${backend_base_url}/user/profile/${user_id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access"),
      },
      method: "GET",
    });
    profile = await response.json();
  
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