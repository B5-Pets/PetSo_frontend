function readURL(input) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("preview").src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    document.getElementById("preview").src = "";
  }
}

async function postArticle() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const image = document.getElementById("image").files[0];
  const category = document.querySelector('input[name="category"]:checked').value;

  const formdata = new FormData();

  formdata.append("title", title);
  formdata.append("content", content);
  formdata.append("image", image);
  formdata.append("category", category);

  const response = await fetch(`${backend_base_url}/articles/`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
    method: "POST",
    body: formdata,
  });

  response_json = await response.json();
  console.log(response_json);

  if (response.status == 201) {
    alert("게시글 작성 완료!");
    window.location.replace(`${frontend_base_url}/main.html`);
  } else {
    alert(response.status);
  }
}
