
const loadcategory = async () => {

    const fetchdata = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await fetchdata.json();
    const catagorysData = data.data;
    // console.log(catagorysData[0].category);
    const btn = document.getElementById('AllButton');


    btn.innerHTML = `
<button onclick="displayAll()" class="btn btn-error ">${catagorysData[0].category}</button>
            <button onclick="displayMusic()" class="btn btn-error">${catagorysData[1].category}</button>
            <button onclick="displayComedy()" class="btn btn-error">${catagorysData[2].category}</button>
            <button onclick="displayDrawing()" class="btn btn-error">${catagorysData[3].category}</button>
`;

}
loadcategory();


document.getElementById('Submit1').addEventListener('click', function () {
    let inputVal = document.getElementById("input1").value;
    let rmv=document.getElementById('ans1');
    rmv.innerHTML=``;
    if('yes' ==inputVal){
      
        let div=document.createElement('div');
        div.innerHTML=`
        <div class="alert alert-success">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Ans was correct</span>
                </div>
        `
        document.getElementById('ans1').appendChild(div);
    }
    else
    
    div=document.createElement('div');
 
        div.innerHTML=`
        <div class="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Wrong Answer.</span>
</div>
        `
        document.getElementById('ans1').appendChild(div);
})
document.getElementById('Submit2').addEventListener('click', function () {
    let inputVal = document.getElementById("input2").value;
    let rmv=document.getElementById('ans2');
    rmv.innerHTML=``;
    if('yes' ==inputVal){
      
        let div=document.createElement('div');
        div.innerHTML=`
        <div class="alert alert-success">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Ans was correct</span>
                </div>
        `
        document.getElementById('ans2').appendChild(div);
    }
    else
    
    div=document.createElement('div');
 
        div.innerHTML=`
        <div class="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Wrong Answer.</span>
</div>
        `
        document.getElementById('ans2').appendChild(div);
})
document.getElementById('Submit3').addEventListener('click', function () {
    let inputVal = document.getElementById("input3").value;
    let rmv=document.getElementById('ans3');
    rmv.innerHTML=``;
    if('no' ==inputVal){
      
        let div=document.createElement('div');
        div.innerHTML=`
        <div class="alert alert-success">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Ans was correct</span>
                </div>
        `
        document.getElementById('ans3').appendChild(div);
    }
    else
    
    div=document.createElement('div');
 
        div.innerHTML=`
        <div class="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Wrong Answer.</span>
</div>
        `
        document.getElementById('ans3').appendChild(div);
})
document.getElementById('Submit4').addEventListener('click', function () {
    let inputVal = document.getElementById("input4").value;
    let rmv=document.getElementById('ans4');
    rmv.innerHTML=``;
    if('Variable not initialized' ==inputVal){
      
        let div=document.createElement('div');
        div.innerHTML=`
        <div class="alert alert-success">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Ans was correct</span>
                </div>
        `
        document.getElementById('ans4').appendChild(div);
    }
    else
    
    div=document.createElement('div');
 
        div.innerHTML=`
        <div class="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Wrong Answer.</span>
</div>
        `
        document.getElementById('ans4').appendChild(div);
})
document.getElementById('Submit5').addEventListener('click', function () {
    let inputVal = document.getElementById("input5").value;
    let rmv=document.getElementById('ans5');
    rmv.innerHTML=``;
    if('default value undefined' ==inputVal){
      
        let div=document.createElement('div');
        div.innerHTML=`
        <div class="alert alert-success">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Ans was correct</span>
                </div>
        `
        document.getElementById('ans5').appendChild(div);
    }
    else
    
    div=document.createElement('div');
 
        div.innerHTML=`
        <div class="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Wrong Answer.</span>
</div>
        `
        document.getElementById('ans5').appendChild(div);
})