
const meta = document.querySelector(".meta");
const image = document.querySelector(".image");

// Output elements
const caption = document.querySelector(".caption p");
const tags = document.querySelector(".tags p");
const post = document.querySelector(".actPost img");


// caption and tags 
meta.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    console.log("Meta form submission triggered"); // testing 
    
    const input = document.querySelector("#post").value.trim();

    const res = await fetch('/openai/genMeta', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ post: input })
    })

    const data = await res.json();

    caption.textContent = data.description;
    tags.textContent = data.tags;

});



// image
image.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    console.log("Image form submission triggered"); // testing
    
    const imInput = document.querySelector("#genImage").value.trim();

    const res = await fetch('/openai/genImage', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ prompt: imInput })
    })

    const data = await res.json();
    post.setAttribute('src', data.url);

});