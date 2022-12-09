if(localStorage.getItem("google")){
} else if(location.href.split('=')[1]){
    const google_code = location.href.split('=')[1]
    GogleLoginApi(google_code)
}
if(localStorage.getItem("payload")){
    if(JSON.parse(localStorage.getItem("payload")).password_expired == true){
        expired_password_confirm()
    }
}

async function GoogleLoginApi() {
    const response = await fetch(`${backend_base_url}/user/google/login/`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({"code":google_code}),
    });
    const response_json = await response.json();

    console.log(response_json)
    // if(response.status == 200){   
  
    // localStorage.setItem("access", response_json.access);
    // localStorage.setItem("refresh", response_json.refresh);
  
    // const base64Url = response_json.access.split(".")[1];
    // const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
   

    // }
    }

function google_login_code(){
    const google_id ="838165434825-g5cfuf9uv3nte72gld789rdk1hp2gv8g.apps.googleusercontent.com"
    const redirect_uri = "http://127.0.0.1:8000/user/google/callback/"
    const scope = "https://www.googleapis.com/auth/userinfo.email"
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=${google_id}&response_type=code&redirect_uri=${redirect_uri}email&service=lso&o2v=2&flowName=GeneralOAuthFlow&scope=${scope}`
  }