// let currentpage='coding'
// const codingBT = document.getElementById('codingBT')
// const artworkBT = document.getElementById('artworkBT')

// const displayDOM = document.querySelector('.display')

// codingBT.addEventListener('click',()=>changepage('coding'))
// artworkBT.addEventListener('click',()=>changepage('artwork'))

// function changepage(willchangepage){
//     if(currentpage != willchangepage){
//         switch(willchangepage){
//             case 'coding': codingpage()
//                 break;
//             case 'artwork': artworkpage()
//                 break;
//         }
//         currentpage = willchangepage
//     }else
//     {
//         console.log('already page') 
//     }
        
// }

// async function codingpage(){
//     try{
//         const response = await fetch("./data.json")
//         if(!response.ok){
//             throw new Error("Could not fetch")
//         }
        
//         const data = await response.json()
//         const websitedata = data["website"]

//         displayDOM.innerHTML = ''

//         for(let i = 0; i < websitedata.length; i++){
//             const div = document.createElement('div')
//             div.innerHTML = `<img src="${websitedata[i].image}">`
//             displayDOM.appendChild(div)
//         }
        
//         // items = data.map(item =item.image)
     
        
//     }
//     catch(error){
//         console.error(error)
//     }
    
// }

// async function artworkpage(){
//     try{
//         const response = await fetch("./data.json")
//         if(!response.ok){
//             throw new Error("Could not fetch")
//         }
        
//         const data = await response.json()
//         const artworkdata = data["artwork"]

//         displayDOM.innerHTML = ''

//         for(let i = 0; i < artworkdata.length; i++){
//             const div = document.createElement('div')
//             div.innerHTML = `<img src="${artworkdata[i].image}">`
//             displayDOM.appendChild(div)
//         }
     
        
//     }
//     catch(error){
//         console.error(error)
//     }
// }