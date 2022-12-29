
const container=document.querySelector(".container")

function scroll(say=10){

    let x=0
    while(x<say){
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((r)=>r.json())
        .then((data)=>{
        let img=document.createElement("img")
        img.src=`${data.message}`
        container.appendChild(img)
        })
    x++
    }
}

scroll()


// window.addEventListener("scroll",()=>{
// console.log("window.screenY",window.scrollY)
// console.log("window.innerHeight",window.innerHeight)
// console.log("document.documentElement.scrollHeight",document.documentElement.scrollHeight)

//     if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight){
//         scroll()
//         }

// })

const btn =document.querySelector(".btn")

btn.addEventListener("click",()=>scroll())
