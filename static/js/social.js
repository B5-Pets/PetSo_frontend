async function handlegoogle() {
    let code = new URL(window.location.href).searchParams.get('code')
    if (code) {
    const response = await fetch(`http://127.0.0.1:8000/user/google/callback/?code=${code}`)
    const response_json = await response.json()
    localStorage.setItem('access', response_json.access_token);
    localStorage.setItem('refresh', response_json.refresh_token);
    const base64Url = response_json.access_token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    localStorage.setItem("payload", jsonPayload);
    window.location.replace('main.html')
    }
  }
  window.onload = () => {
    console.log("로딩되었음");
    handlegoogle();
  };