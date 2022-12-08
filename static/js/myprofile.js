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
}


// createElement 이용하기

window.onload = async function loadMyProfile() {
    const response = await fetch(`${backend_base_url}/user/profile/`, {
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