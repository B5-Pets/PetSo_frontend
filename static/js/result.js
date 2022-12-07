window.onload = async function Inference() {
    const response = await fetch(`${backend_base_url}/inference/`, {
      method: "GET",
    });
    inference = await response.json();
    img = inference.output_img
    let temp_html = `<span class="result"><img src="data:image/jpeg;base64, ${img}")</span>`
    console.log(temp_html)
    $('#inference').append(temp_html)
}