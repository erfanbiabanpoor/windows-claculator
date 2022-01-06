import { dataBase, input } from "./index.js";

let memoryDataBase = [];
const memoryItem = document.querySelector('.memory');
const asidePm = document.getElementsByClassName('pm')[0];
const historyButton = document.querySelector('.history-link');
const memoryMain = document.querySelector('.memory-section');
const historyMain = document.querySelector('.history-section');
const clearHistory = document.querySelector('.claer-history');

const memoryPush = () => {
    let memoryObj = {
        number: 0,
        id:memoryDataBase.length
    };

    memoryDataBase.push(memoryObj);
    console.log(memoryDataBase);
}

export const showMemory = (memoryButton) => {
    memoryButton.classList.add('default-link');
    historyButton.classList.remove('default-link');
    clearHistory.style.display = 'none';
    if (memoryMain.className.includes('default-section')) {
        memoryMain.classList.remove('default-section');
        historyMain.classList.add('default-section');
        
    }

}

const controlMemory = (eventTarget) => {
    const originNumber = +input.textContent;
    const item = document.createElement('div');
    const itemInput = document.createElement('p');

    if (eventTarget.value == 'MS') {
        const smallMemoryShow = document.querySelector('#myDropdown');
        let aLink = document.createElement('div');

        asidePm.style.display = "none";
        item.classList.add('memory-item');
        memoryItem.appendChild(item);
        item.appendChild(itemInput);
        itemInput.classList.add('item-input');
        item.id = `${memoryDataBase.length}`;
        aLink.classList.add('small-memory');
        aLink.id = `${memoryDataBase.length}`;
        smallMemoryShow.appendChild(aLink);
        memoryAdd(originNumber);
    }
    if (eventTarget.classList.contains('item6')) {
        memorySmallShow()
    }
    if (eventTarget.value == '+' || eventTarget.value == '-') {
        memoryOperation(eventTarget,originNumber)
    }
    if (eventTarget.value == 'MC') {
        memoryClear();
        if (memoryDataBase.length == '0') {
            asidePm.style.display = 'block';
        } else {
            asidePm.style.display = 'none';
        }
    }

    updateMemoryDisplay()

}

export const memoryButtonClick = () => {
    const memoryButton = document.querySelector('.grid-container');

    memoryButton.addEventListener('click', event => {
        let eventTarget = event.target;
        
        if (eventTarget.classList.contains('memory-button')) controlMemory(eventTarget);
    })
}
const memoryAdd = (originNumber) => {
    memoryPush();
    let memoryLength = memoryDataBase.length - 1;

    for(let memoryInfo of memoryDataBase) {
        if (memoryInfo.id == memoryLength) {
            memoryInfo.number = originNumber;
        }
    }
}

const memoryOperation = (eventTarget,originNumber) => {
    let memoryLength = memoryDataBase.length - 1;

    for(let memoryInfo of memoryDataBase) {
        if (memoryInfo.id == memoryLength) {
            if (eventTarget.value == '+') {
                memoryInfo.number = memoryInfo.number + originNumber;
            } else {
                memoryInfo.number = memoryInfo.number - originNumber;
            }
        
        }
    }

}

const memoryClear = () => {
    let memoryLength = memoryDataBase.length - 1;
    for (let i = 0; i<=memoryLength ; i++) {
        memoryDataBase.pop();
    }

    const item = document.querySelectorAll('.memory-item');
    const smallItem = document.querySelectorAll('.small-memory');

    item.forEach(item => {
        item.remove();
    })
    smallItem.forEach(item => {
        item.remove();
    })
    
}

const memorySmallShow = () => {
    document.getElementById("myDropdown").classList.toggle("show-memory");
    let dropdowns = document.getElementsByClassName("dropdown-content")[0];

    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show-memory')) {
        openDropdown.classList.remove('show-memory');
      }
    }
}

const updateMemoryDisplay = () => {
    const memoryItem = document.querySelectorAll('.memory-item');
    const smallItem = document.querySelectorAll('.small-memory');
    memoryItem.forEach((item) => {
        if (memoryDataBase.length == '0') {
            return;
        } else {
            for(let memoryInfo of memoryDataBase) {
                if (item.id == memoryInfo.id) { 
                    item.childNodes[0].textContent = memoryInfo.number
                }
            }
        }
    })
    smallItem.forEach(aLink => {
        if (memoryDataBase.length == '0') {
            return;
        } else {
            for(let memoryInfo of memoryDataBase) {
                if (aLink.id == memoryInfo.id) { 
                    aLink.textContent = memoryInfo.number;
                }
            }
        }
    })

}
