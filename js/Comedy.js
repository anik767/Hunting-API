const displayComedy = async () => {
    const Error = document.getElementById('Error');
    Error.innerHTML = ``;
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1003');
    const data = await res.json();
    const catagory = data.data;
    const category = document.getElementById('category');
    category.innerHTML = ``;
    // console.log(catagory);
    catagory.forEach(catagory => {
        // console.log(catagory);
        
        // get the div
        const category = document.getElementById('category');
        // time calculate
        let totalSeconds= catagory.others.posted_date;
        
        const totalMinutes = Math.floor(totalSeconds / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
        // create the div
        const catagoryCard = document.createElement('div');
        catagoryCard.classList = `card  gap-2 bg-base-100 mt-5 `;
        // console.log(catagory.authors[0].verified);
        // console.log(catagory.others.posted_date);

        if(catagory.authors[0].verified===true ){
            catagoryCard.innerHTML = `
            <div>
             <figure><img class=" static rounded-xl h-40 w-80 " src="${catagory.thumbnail}" alt="no image"></figure>
             <p class="absolute top-32 left-36 bg-black text-white w-46 rounded-lg">${hours} hrs${minutes} min ago</p>
            </div>
            
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

        
        else {
            catagoryCard.innerHTML = `
            <div id="time">
             <figure><img class=" static rounded-xl h-40 w-80 " src="${catagory.thumbnail}" alt="no image"></figure>
             <p class="absolute top-32 left-36 bg-black text-white w-46 rounded-lg">${hours} hrs${minutes} min ago</p>
            </div>
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