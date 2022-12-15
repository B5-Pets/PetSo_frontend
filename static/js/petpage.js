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
  console.log(profile)
 
  const pet_image = document.getElementById("pet_image");
  const pet_name = document.getElementById("pet_name");
  const pet_spacies = document.getElementById("pet_spacies");
  const pet_sex = document.getElementById("pet_sex");
  const pet_desc = document.getElementById("pet_desc")
  
  let image = document.createElement("img");
  image.setAttribute("class", "pet_image");
  image.src = `${backend_base_url}${profile.pet_image}`;
  image.setAttribute("style", "width:250px; height:250px; object-fit:cover; border-radius:50%;")
  pet_image.appendChild(image);
  pet_name.innerText = profile.pet_name;
  pet_spacies.innerText = profile.pet_spacies;
  pet_sex.innerText = profile.pet_sex;
  pet_desc.innerText = profile.pet_desc;

};