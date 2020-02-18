



var div = document.getElementById('div');

const createDive = () => {
  const arr = [25, 24, 23, 22, 21,20,19,18,17,16];
  
  for(let i = 0; i < arr.length; i++) {
    let d = document.createElement('div');
    d.setAttribute('class', `dynamic${i}`);
    d.style.height = '100px';
    d.style.width = '100px';
    d.innerText = `${arr[i]}`;
    d.style.border = '1px solid white';
    d.style.position = 'relative';
    d.style.marginLeft = '8px';
    d.style.color ="white";
    d.style.alignItems = "center";
    d.style.justifyContent ="center"
    div.appendChild(d);
  }
}

const animation = () => {
  let div = document.getElementsByClassName('dynamic');
   let j = 5;
  let id;
  // for(let i = 0 ; i<div.length ; i++) {
   // div[i].style.border = '1px solid green';
     id = setInterval(() => {
     div[2].style.left = j  + 'px';
     div[3].style.right = j + 'px';
     j+=5;
       if(j > 110) {
      clearInterval(id);
  }
   }, 40);
    
    
  // }
  
  
  
}

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
     let j = 5;
     let step = 5;
     let id;
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
     div1.style.left = (left2 -  step)  + 'px'; 
   }
     
     j+=5;
     if(j > 110) {
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
     }
  
    }
   }


createDive()
// animation()

sort()