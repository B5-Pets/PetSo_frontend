
async function handleSignin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);

  const response = await fetch(`${backend_base_url}/user/signup/`, {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  
  return response


}


async function handleLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  

  console.log(email, password);

  const response = await fetch(`${backend_base_url}/user/api/token/`, {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  if(response.status == 200){
    const response_json = await response.json();
  
  console.log(response)
  console.log(response_json);
  
  
  localStorage.setItem("access", response_json.access);
  localStorage.setItem("refresh", response_json.refresh);

  

  const base64Url = response_json.access.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")); 

  localStorage.setItem("payload", jsonPayload);
  alert("환영합니다!")
  window.location.replace(`${frontend_base_url}/index.html`)  
  }else{
    alert("회원정보가 일치하지 않습니다.")
  }
}


// 구글 로그인 연습중
async function handlegoogle() {
  let code = new URL(window.location.href).searchParams.get('code')
  if (code) {
  const response = await fetch(`http://13.125.224.113/user/google/callback/?code=${code}`)
  const response_json = await response.json()

  localStorage.setItem('access', response_json.access_token);
  localStorage.setItem('refresh', response_json.refresh_token);

  const base64Url = response_json.access_token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  ); 

  localStorage.setItem("payload", jsonPayload);
  window.location.replace('main.html')
  } 
}

window.onload = () => {
  console.log("로딩되었음");
  handlegoogle();
};



function handleLogout() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  localStorage.removeItem("payload");
  window.location.href='login.html';
}


async function handlepasswordreset() {
  const response = await fetch(`{backend_base_url}/user/password_reset/`)

  return response
}