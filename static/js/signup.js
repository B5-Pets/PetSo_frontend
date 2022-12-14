async function handleSigninButton(){
    const response = await handleSignin();

    console.log(response);
    
    if (response.status == 201){
        alert("회원가입이 완료되었습니다.")
        window.location.replace(`${frontend_base_url}/login.html`)
      }else{
        alert("이미 가입된 계정입니다.")
      }
}