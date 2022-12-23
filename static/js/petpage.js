const peturlParams = new URLSearchParams(window.location.search);
const pet_id = pageurlParams.get("id");

async function getPet() {
  const response = await fetch(`${backend_base_url}/user/pet/${pet_id}/`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
    method: "GET",
  });
  response_json = await response.json();
  return response_json;
}

window.onload = async function loadPet(pet_id) {
  profile = await getPet(pet_id);

  const pet_image = document.getElementById("pet_image");
  const pet_name = document.getElementById("pet_name");
  const pet_species = document.getElementById("pet_species");
  const pet_age = document.getElementById("pet_age");
  const pet_sex = document.getElementById("pet_sex");
  const pet_desc = document.getElementById("pet_desc");
  
  let image = document.createElement("img");
  image.setAttribute("class", "pet_image");
  image.src = `${backend_base_url}${profile.pet_image}`;
  image.setAttribute("style", "width:250px; height:250px; object-fit:cover; border-radius:50%;");
  pet_image.appendChild(image);
  pet_name.innerText = profile.pet_name;
  pet_species.innerText = profile.pet_species;
  pet_age.innerText = profile.pet_age;
  pet_sex.innerText = profile.pet_sex;
  pet_desc.innerText = profile.pet_desc;

  pet_delete_btn = document.getElementById("pet_delete_btn")

  const userinfo = await getName();

  if (userinfo.name != profile.user) {
    pet_delete_btn.style.visibility ="hidden";
    
  }

};