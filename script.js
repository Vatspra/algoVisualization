



var div = document.getElementById('div');

const createDive = () => {
  const arr = [1,2,5,4,3,5,2,1];
  
  for(let i = 0; i < arr.length; i++) {
    let d = document.createElement('div');
    d.setAttribute('class', `dynamic${i}`);
    d.style.height = '50px';
    d.style.width = '50px';
    d.innerText = `${arr[i]}`;
    d.style.border = '1px solid white';
    d.style.position = 'relative';
    d.style.marginLeft = '8px';
    d.style.display = 'flex';
    d.style.color ="white";
    d.style.alignItems = "center";
    d.style.justifyContent ="center"
    div.appendChild(d);
  }
}

// const animation = () => {
//   let div = document.getElementsByClassName('dynamic');
//    let j = 5;
//   let id;
//   // for(let i = 0 ; i<div.length ; i++) {
//    // div[i].style.border = '1px solid green';
//      id = setInterval(() => {
//      div[2].style.left = j  + 'px';
//      div[3].style.right = j + 'px';
//      j+=1;
//        if(j >1) {
//       clearInterval(id);
//   }
//    }, 2000);
    
    
//   // }
  
  
  
// }

// const moveDiv = (div) => {
//   let i = 5;
//   const id = setInterval(() =>{
//     console.log(i);
//     div.style.left = i + 'px';
//   }, 1000);
  
//   if(i > 25) {
//     clearInterval(id);
//   }
// }

 
//animation()

function moveBlock(div1, div2) {
  console.log(div1)
  return new Promise((resolve, reject) => {
    if(!(div1 && div2)) {
      resolve(true)
    }
     let j = 5;
     let step = 5;
     let id;
     let offset1 = div1.offsetLeft;
     let offset2 = div2.offsetLeft;
    console.log('offset is', offset1, offset2)
     id = setInterval(() => {
     let left1 = parseInt(div1.style.left || 0);
     let left2 = parseInt(div2.style.left || 0);
     let right1 = parseInt(div1.style.right || 0);
     let right2 = parseInt(div2.style.right || 0);
     if(!right1) {
       div1.style.left = (left1 +  step)  + 'px'; 
     } else  {
       div1.style.right = (right1 -  step)  + 'px'; 
     }

     if(!left2) {
      div2.style.right = (right2 + step) + 'px' ;
     } else {
     div2.style.left = (left2 -  step)  + 'px'; 
   }
     
     j+=5;
       // console.log(j)
       console.log(div1.offsetLeft, div2.offsetLeft)
     if(div1.offsetLeft >= offset2 || div2.offsetLeft <= offset1) {
     clearInterval(id);
       resolve(true)
  }
   }, 100);
  })
}

// function sort() {
//   return new Promise(async (resolve, reject) =>  {
//      let div = document.getElementsByClassName('dynamic');
  
//    for(let i = 0 ; i<div.length; i++) {
//     for(let j = 0 ; j<div.length-1 ;j++) {
//       try {


//      // div[j].style.border ="1px solid green"
//      // div[j+1].style.border ="1px solid green"
//      var val1 = parseInt(div[j].innerText);
//      var val2 = parseInt(div[j + 1].innerText);
//       let j = 5;
//       if(val1 > val2) {
//        await moveBlock(div[j], div[j+1]);
//       }
//     } catch(_) {
//       console.log(_);
//     }
//   }
//   }
//   resolve(true)
//   })
 
// }

const sort =   async () => {
  let swapped = true;
  let div = document.getElementById('div').childNodes;
  const mainDiv = [];
   div.forEach((res) => {
    if(res.className) {
     mainDiv.push(res.className);
    }
  })
  console.log(div);
  for (let j = 0 ; j < mainDiv.length ; j++) {
     for(let i = 0 ; i<mainDiv.length -1; i++) {
      swapped = false;
      const div1 = document.getElementsByClassName(mainDiv[i])[0];
      const div2 = document.getElementsByClassName(mainDiv[i + 1])[0];
      div1.style.border ="1px solid red";
      div2.style.border ="1px solid red";
      let val1 = parseInt(div1.innerText);
      let val2 = parseInt(div2.innerText);
      if(val1 > val2) {
        const temp = mainDiv[i];
       
         await moveBlock(div1, div2);
         div1.style.border = '1px solid white';
         div2.style.border = '1px solid green';
         mainDiv[i] =mainDiv[i+1];
         mainDiv[i+1] = temp;
         // div[i].innerText = `${val2}`;
         // div[i+1].innerText = `${val1}`
         swapped = true;
      } else {
        div1.style.border = '1px solid green';
        div2.style.border = '1px solid green';
      }
       await delay()
     }
  
    }
   }


const delay = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(true);
    }, 200)
  })
}


const selectionSort = async () => {
   let div = document.getElementById('div').childNodes;
   const mainDiv = [];
   div.forEach((res) => {
    if(res.className) {
     mainDiv.push(res.className);
    }
  }) 
   for(let i = 0; i<mainDiv.length - 1; i++){
  //   for(let j = i; j<mainDiv.length; j++) {
      const min = findMin(mainDiv, i);
      console.log(min)
      const div1 = document.getElementsByClassName(mainDiv[i])[0];
      const div2= document.getElementsByClassName(min.class)[0];
      div2.style.border = '1px solid red';
      div1.style.border = '1px solid green';
     
      
      await moveBlock(div1, div2);
      
      const temp = mainDiv[min.index];
      mainDiv[min.index] = mainDiv[i];
      mainDiv[i]= temp;
    // }
  }
}

const findMin = (arr, fromIndex) => {
  let min = arr[fromIndex];
  let index =  0;
  for(let i = fromIndex; i<arr.length ; i++) {
     const div1 = document.getElementsByClassName(arr[i])[0];
     const div2 = document.getElementsByClassName(min)[0];
     let val1 = parseInt(div1.innerText);
     let val2 = parseInt(div2.innerText);
     if(val2 > val1) {
      min = arr[i];
       index = i;
    }
  }
  console.log('min div is', min);
  return {
    class: min,
    index: index
  }
}

const linearSearch = async () => {
    let divx = document.getElementById('div').childNodes;
    const mainDiv = [];
    divx.forEach((res) => {
     if(res.className) {
      mainDiv.push(res.className);
     }
   });

   let div1 = document.getElementsByClassName(mainDiv[0])[0];

   const offseLeft = parseInt(div1.offsetLeft);
   let d = document.createElement('div');
   d.setAttribute('class', `searchElement`);
   d.style.height = '50px';
   d.style.width = '50px';
   d.innerText = `${3}`;
   d.style.border = '1px solid white';
   d.style.position = 'relative';
   d.style.left = offseLeft + 'px';
   d.style.display = 'flex';
   d.style.color ="white";
   d.style.alignItems = "center";
   d.style.justifyContent ="center";
   // d.style.top =  offseTop + 50 + 2 + 'px';
   document.body.appendChild(d);
   div1 = d;

   // logic for search

   div1.style.border ="1px solid red";

   for(let i = 0; i<mainDiv.length - 1; i++){
    //   for(let j = i; j<mainDiv.length; j++) {
        const div2 = document.getElementsByClassName(mainDiv[i])[0];
        //div2.style.border = '1px solid red';
        //div1.style.border = '1px solid red';
       
        
        await searchBlock(div1, div2);

        let val1 = parseInt(div1.innerText);
        let val2 = parseInt(div2.innerText);

        if(val1 === val2) {
            div2.style.border = '1px solid green';
            div1.style.border = '1px solid green';
            break;
        } else {
            div1.style.background ="red";
            div2.style.background ="red";
            await delay();
            div1.style.background ="black";
            div2.style.background ="black";
            div2.style.border = "1px solid white";
            await delay();
        }

      // }
    }

}


const searchBlock = async (source, target) => {
    return new Promise((resolve, reject) => {
        let offset1 = target.offsetLeft;
        let left1 = parseInt(source.style.left || 0);
        let j = 6;
        let id = setInterval(()=> {
            if(offset1 <= parseInt(source.style.left)) {
                clearInterval(id);
                resolve(true);
            } else {
            source.style.left = left1 + j + 'px';
            j+=6;
            }

            
        }, 100)
    })
}




createDive()
// animation()

// sort()

 //selectionSort()

 linearSearch()