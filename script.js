let div = document.getElementById('div');

let timeOutIdMap = new Map();

window.onload = () => {
    generateDivs()
}






function moveBlock(div1, div2) {
    return new Promise((resolve, reject) => {
        if (!(div1 && div2)) {
            resolve(true)
        }
        let j = 5;
        let step = 5;
        let id;
        let offset1 = div1.offsetLeft;
        let offset2 = div2.offsetLeft;
        // if (offset1 >= offset2) {
        //     resolve(true);
        // }
        id = setInterval(() => {
            let left1 = parseInt(div1.style.left || 0);
            let left2 = parseInt(div2.style.left || 0);
            let right1 = parseInt(div1.style.right || 0);
            let right2 = parseInt(div2.style.right || 0);
            if (!right1) {
                div1.style.left = (left1 + step) + 'px';
            } else {
                div1.style.right = (right1 - step) + 'px';
            }

            if (!left2) {
                div2.style.right = (right2 + step) + 'px';
            } else {
                div2.style.left = (left2 - step) + 'px';
            }

            j += 5;
            // console.log(j)
            if (div1.offsetLeft >= offset2 || div2.offsetLeft <= offset1) {
                clearInterval(id);
                timeOutIdMap.delete(id);
                resolve(true)
            }
        }, 60);

        timeOutIdMap.set(id, true);
    })
}



const bubbleSort = async() => {
    let swapped = true;
    let div = document.getElementById('div').childNodes;
    const mainDiv = [];
    let arr = [];
    div.forEach((res) => {
        if (res.className) {
            mainDiv.push(res.className);
            arr.push(parseInt(res.innerText));
        }
    })

    generateRandomDiv(arr);
    await delay(100);
    while (swapped) {
        // let sortedDiv;
        // let index;
        swapped = false;
        for (let i = 0; i < mainDiv.length - 1; i++) {
            const div1 = document.getElementsByClassName(mainDiv[i])[0];
            const div2 = document.getElementsByClassName(mainDiv[i + 1])[0];

            div1.style.border = "1px solid red";
            div2.style.border = "1px solid red";
            await delay(500);
            let val1 = parseInt(div1.innerText);
            let val2 = parseInt(div2.innerText);

            if (val1 > val2) {
                const temp = mainDiv[i];
                await moveBlock(div1, div2);
                div1.style.border = '1px solid white';
                div2.style.border = '1px solid white';
                mainDiv[i] = mainDiv[i + 1];
                mainDiv[i + 1] = temp;
                swapped = true;
            } else {
                div1.style.border = '1px solid white';
                div2.style.border = '1px solid white';
            }
            // index = i;
            await delay(500)
        }

        // if (!swapped) {
        //   document.getElementsByClassName(mainDiv[index])[0].style.backgroundColor = "green";
        // } else {
        //   document.getElementsByClassName(mainDiv[index + 1])[0].style.backgroundColor = "green";
        // }

    }
}


const delay = async(timeout = 100) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, timeout)
    })
}


const selectionSort = async() => {
    let div = document.getElementById('div').childNodes;
    const mainDiv = [];
    let arr = [];
    div.forEach((res) => {
        if (res.className) {
            mainDiv.push(res.className);
            arr.push(parseInt(res.innerText));
        }
    })

    generateRandomDiv(arr);
    await delay(100)


    for (let i = 0; i < mainDiv.length; i++) {
        //   for(let j = i; j<mainDiv.length; j++) {
        const min = await findMin(mainDiv, i);
        console.log(min)
        const div1 = document.getElementsByClassName(mainDiv[i])[0];
        const div2 = document.getElementsByClassName(min.class)[0];
        div2.style.border = '1px solid green';
        div1.style.border = '1px solid red';

        if (div1.className !== div2.className) {
            div1.style.top = '55px';
            div2.style.top = '55px';
            await moveBlock(div1, div2);
            await moveDivTop(div1, div2, 50);
        }


        div1.style.border = '1px solid white';
        div2.style.border = '1px solid green';
        const temp = mainDiv[min.index];
        mainDiv[min.index] = mainDiv[i];
        mainDiv[i] = temp;
        // }
    }
}

const findMin = async(arr, fromIndex) => {
    let min = arr[fromIndex];
    document.getElementsByClassName(min)[0].style.border = "1px solid red";
    await delay()
    let index = 0;
    for (let i = fromIndex; i < arr.length; i++) {
        const div1 = document.getElementsByClassName(arr[i])[0];
        const div2 = document.getElementsByClassName(min)[0];
        let val1 = parseInt(div1.innerText);
        let val2 = parseInt(div2.innerText);
        if (val2 > val1) {
            min = arr[i];
            document.getElementsByClassName(min)[0].style.border = "1px solid red";
            await delay();
            document.getElementsByClassName(min)[0].style.border = "1px solid white";

            index = i;
        } else {
            document.getElementsByClassName(min)[0].style.border = "1px solid white";
        }
    }
    console.log('min div is', min);
    return {
        class: min,
        index: index
    }
}

const linearSearch = async(numberToSearch) => {
    let divx = document.getElementById('div').childNodes;
    const mainDiv = [];
    const arr = []
    divx.forEach((res) => {
        if (res.className) {
            mainDiv.push(res.className);
            arr.push(parseInt(res.innerText));
        }
    });

    generateRandomDiv(arr);
    await delay(100);

    const firstDiv = document.getElementsByClassName(mainDiv[0])[0];

    const offseLeft = parseInt(firstDiv.offsetLeft);
    const div1 = genearteSearchDiv(numberToSearch, offseLeft)



    // logic for search

    div1.style.border = "1px solid red";
    let itemFound = false;

    for (let i = 0; i < mainDiv.length; i++) {
        //   for(let j = i; j<mainDiv.length; j++) {
        const div2 = document.getElementsByClassName(mainDiv[i])[0];
        //div2.style.border = '1px solid red';
        //div1.style.border = '1px solid red';


        await searchBlock(div1, div2);

        let val1 = parseInt(div1.innerText);
        let val2 = parseInt(div2.innerText);

        if (val1 === val2) {
            div2.style.border = '1px solid green';
            div1.style.border = '1px solid green';
            itemFound = true;
            break;
        } else {
            div1.style.background = "red";
            div2.style.background = "red";
            await delay();
            div1.style.background = "black";
            div2.style.background = "black";
            div2.style.border = "1px solid white";
            await delay();
        }
    }
    if (!itemFound) {
        alert('Item not found');
    }

}

const binarySearch = async(numberToSearch) => {
    let divx = document.getElementById('div').childNodes;
    const mainDiv = [];
    let arr = [];
    divx.forEach((res) => {
        if (res.className) {
            mainDiv.push(res.className);
            arr.push(parseInt(res.innerText));
        }
    });

    generateRandomDiv(arr, true);
    await delay(100);

    const firstDiv = document.getElementsByClassName(mainDiv[0])[0];
    const offseLeft = parseInt(firstDiv.offsetLeft);
    const div1 = genearteSearchDiv(numberToSearch, offseLeft)
    div1.style.border = "1px solid red";

    let low = 0;
    let high = mainDiv.length - 1;
    let itemFound = false;
    while (low <= high) {
        console.log(low, high)
        const mid = Math.floor((low + high) / 2);
        const div2 = document.getElementsByClassName(mainDiv[mid])[0];
        div2.style.border = "1px solid red"
        await searchBlock(div1, div2);
        let val1 = parseInt(div1.innerText);
        let val2 = parseInt(div2.innerText);

        if (val1 === val2) {
            div2.style.border = '1px solid green';
            div1.style.border = '1px solid green';
            itemFound = true;
            break;
        } else {
            if (val2 < val1) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
            div1.style.background = "red";
            div2.style.background = "red";
            await delay();
            div1.style.background = "black";
            div2.style.background = "black";
            div2.style.border = "1px solid white";
        }
    }

    if (!itemFound) {
        alert('Item not found');
    }
}


const searchBlock = async(source, target) => {
    return new Promise((resolve, reject) => {
        let offset1 = target.offsetLeft;
        let left1 = parseInt(source.style.left || 0);
        let j = 6;
        let id = setInterval(() => {
            if (offset1 === parseInt(source.style.left)) {
                clearInterval(id);
                resolve(true);
            } else if (offset1 > parseInt(source.style.left)) {
                source.style.left = left1 + j + 'px';

            } else if (offset1 < parseInt(source.style.left)) {
                source.style.left = left1 - j + 'px';
            }
            j += 6;


        }, 50)
    })
}


const moveDivTop = (div1, div2, distance) => {
    return new Promise((resolve, reject) => {
        let id, top = 5;
        const top1 = parseInt(div1.style.top);
        const top2 = parseInt(div2.style.top);

        id = setInterval(() => {
            if (parseInt(div1.style.top) <= 0 || parseInt(div2.style.top) <= 0) {
                clearInterval(id);
                resolve(true);
            } else {
                div1.style.top = top1 - top + 'px';
                div2.style.top = top2 - top + 'px';
                top += 5;
            }
        }, 50)
    })
}


const algoChange = () => {
    const selectedAlgo = document.getElementById('algo-options').value;
    const searchElement = document.getElementById('search-box');
    const oldBlock = document.getElementsByClassName('searchElement')[0];
    const arraySize = document.getElementById('array-size').value;
    if (oldBlock) {
        document.body.removeChild(oldBlock);
    }
    if (parseInt(selectedAlgo) === 3) {
        searchElement.disabled = false;
        searchElement.value = 5;
        generateDivs(parseInt(arraySize), false);
    } else if (parseInt(selectedAlgo) === 4) {
        searchElement.disabled = false;
        searchElement.value = 5;
        generateDivs(parseInt(arraySize), true);
    } else {
        generateDivs(parseInt(arraySize), false);
    }

}


const sizeChange = () => {
    const arraySize = document.getElementById('array-size').value;
    const oldBlock = document.getElementsByClassName('searchElement')[0];
    if (oldBlock) {
        document.body.removeChild(oldBlock);
    }
    generateDivs(parseInt(arraySize));
}





const visualize = async() => {
    const selectedAlgo = document.getElementById('algo-options').value;

    document.getElementById('btn').disabled = true;
    document.getElementById('array-size').disabled = true;
    document.getElementById('algo-options').disabled = true;

    // genearte random array;


    if (parseInt(selectedAlgo) === 1) {
        await bubbleSort()
    }

    if (parseInt(selectedAlgo) === 2) {
        await selectionSort();
    }


    if (parseInt(selectedAlgo) === 3) {
        let searchElement = document.getElementById('search-box').value
        await linearSearch(searchElement);
    }

    if (parseInt(selectedAlgo) === 4) {
        let searchElement = document.getElementById('search-box').value
        await binarySearch(searchElement);
    }

    document.getElementById('btn').disabled = false;
    document.getElementById('array-size').disabled = false;
    document.getElementById('algo-options').disabled = false;
}


const generateDivs = (size = 5, sorted = false) => {
    const arr = [];
    while (size) {
        const randomNumber = Math.ceil(Math.random() * 100);
        arr.push(randomNumber);
        size--;
    }
    if (sorted) {
        arr.sort((a, b) => a - b);
    }
    generateRandomDiv(arr);
}


const generateRandomDiv = (arr) => {
    div.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        let d = document.createElement('div');
        d.setAttribute('class', `dynamic${i}`);
        d.style.height = '50px';
        d.style.width = '50px';
        d.innerText = `${arr[i]}`;
        d.style.border = '1px solid white';
        d.style.position = 'relative';
        d.style.marginLeft = '8px';
        d.style.display = 'flex';
        d.style.color = "white";
        d.style.alignItems = "center";
        d.style.justifyContent = "center"
        div.appendChild(d);
    }

}


const genearteSearchDiv = (searchNumber, offseLeft) => {
    const oldBlock = document.getElementsByClassName('searchElement')[0];
    if (oldBlock) {
        document.body.removeChild(oldBlock);
    }
    let d = document.createElement('div');
    d.setAttribute('class', `searchElement`);
    d.style.height = '50px';
    d.style.width = '50px';
    d.innerText = `${searchNumber}`;
    d.style.border = '1px solid white';
    d.style.position = 'relative';
    d.style.left = offseLeft + 'px';
    d.style.display = 'flex';
    d.style.color = "white";
    d.style.alignItems = "center";
    d.style.justifyContent = "center";
    document.body.appendChild(d);
    return d;
}