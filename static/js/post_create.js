async function postArticle() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const formdata = new FormData();
  formdata.append("title", title);
  formdata.append("content", content);

  const response = await fetch(`${backend_base_url}/articles/`, {
    method: "POST",
    headers: {
      Authorization: "Bearer" + localStorage.getItem("access"),
    },
    body: formdata,
  });

  response_json = await response.json();
  console.log(response_json);

  if (response.status == 200) {
    window.location.reload(`${frontend_base_url}/main.html`);
  } else {
    alert(response.status);
  }
}
