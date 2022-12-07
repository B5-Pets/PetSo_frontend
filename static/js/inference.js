async function CreateInference() {
  const img = document.getElementById('img').files[0];
  const formdata = new FormData();
  formdata.append("input_img", img)
  const response = await fetch(`${backend_base_url}/inference/`, {
    // headers: {
    //   Authorization: "Bearer " + localStorage.getItem("access"),
    // },
    method: "POST",
    body: formdata,
  });


  if (response.status == 200) {
    alert("병변 탐지 완료!");
    window.location.replace(`${frontend_base_url}/result.html`);
  }
}
