const accessKey = "pxUi6-qoVtjXqQuOkna2-TiUXp1oCY8zAZcZE-XUU5I"
const formEL = document.querySelector("form")
const inputEl = document.getElementById("serach-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("Show-more")

let inputData = ""
let page = 1;

/*hum yha async isley use kar rhe hai becoz humnai 
fetch ka concept lagana hai */
async function searchImages() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}
    &query=${inputData}&client_id=${accessKey}`
console.log(url);
    const response = await fetch(url)
    const data = await response.json()

    const results = data.results

    if (page === 1) {
        searchResults.innerHTML = ""
    }


results.map((result)=>{
/* ek div banaya jismain iamge hogi*/
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add("search-result");

    const image = document.createElement('img');
    image.src = result.urls.small;
    image.alt = result.alt_description;
   
;
    const imageLink =document.createElement('a');
    imageLink.href = result.links.html;
image.target = "_blank";
image.textContent = result.alt_description;

imageWrapper.appendChild(image);
imageWrapper.appendChild(imageLink);
searchResults.appendChild(imageWrapper);
});

 page++
 if(page>1){
    showMore.style.display = "block"
 }

};

formEL.addEventListener("submit",(event)=>{
    event.preventDefault()
    page = 1;
    searchImages()
});

 /*ye neeche ek buttn ka hai isley click ho gya hai submit ki jagh aur
  event pass karne ki jarut nhi bhai ismain */

showMore.addEventListener("click",()=>{
    searchImages()
});
