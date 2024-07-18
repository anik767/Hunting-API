const displayDrawing = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1005');
    const data = await res.json();
    const catagory = data.data;
    console.log(catagory.length);
    const category = document.getElementById('category');
    const Error = document.getElementById('Error');

    if(catagory.length===0){
        category.innerHTML=``;
        Error.innerHTML=`
        <img class="align-middle h-36 w-36 mt-5" src="image/Icon.png" alt="">
        <h1 class="text-center text-3xl mt-5 font-bold">Oops!! Sorry, There is no<br>content here</h1>
        `
    }
    else{
        const category = document.getElementById('category');
    category.innerHTML=``;
    console.log(catagory);
    catagory.forEach(catagory => {
        console.log(catagory);
        // get the div
        const category = document.getElementById('category');
        // create the div
        const catagoryCard = document.createElement('div');
        catagoryCard.classList = `card  gap-2 bg-base-100 mt-5 `;
        if(catagory.authors[0].verified===true){
            catagoryCard.innerHTML = `
        <figure><img class="  rounded-xl h-40 w-80 " src="${catagory.thumbnail}" alt=" no image"></figure>

        <div class="card-body p-0 h-30 w-80">

                        <div class="flex gap-3">
                            <img class="rounded-full w-10 h-10" src="${catagory.authors[0].profile_picture}"alt="no image">

                            <div >
                                <h2 class="card-title">${catagory.title}</h2>
                                <div class="flex">
                                    <p>${catagory.authors[0].profile_name} </p>
                                    <img src="image/verify.jpg" alt="">
                                </div>
                                <p>${catagory.others.views}</p>
                            </div>

                        </div>

                    </div>
        `

        }
        else{
            catagoryCard.innerHTML = `
            <figure><img class="  rounded-xl h-40 w-80 " src="${catagory.thumbnail}" alt=" no image"></figure>
    
            <div class="card-body p-0 h-30 w-80">
    
                            <div class="flex gap-3">
                                <img class="rounded-full w-10 h-10" src="${catagory.authors[0].profile_picture}"alt="no image">
    
                                <div >
                                    <h2 class="card-title">${catagory.title}</h2>
                                    <div class="flex">
                                        <p>${catagory.authors[0].profile_name} </p>
                                        
                                    </div>
                                    <p>${catagory.others.views}</p>
                                </div>
    
                            </div>
    
                        </div>
            `
        }
        category.appendChild(catagoryCard);
    });
    }
}