/*global variables*/
let _data = [];

//Fetches json data fra Data.json
async function fetchData() {
    const response = await fetch('data.json');
    const data = await response.json();
    _data = data;
    console.log(_data.$values[0].regionDeviceList.$values);
    appendGreenData(_data.$values[0].regionDeviceList.$values);
    appendBlueData(_data.$values[1].regionDeviceList.$values);
    appendDeviceStatusColor();
    appendflagStatusColor();
}

fetchData();

// change color on status circkels (red, yellow and green)

function appendDeviceStatusColor() {

    let deviceItems = document.getElementsByClassName('device-status');
    for (const di of deviceItems) {
        if (di.innerHTML === 'Fail') {
            console.log("Found failed item")
            di.style.backgroundColor = '#FF0000';
        }
        else if (di.innerHTML === 'Partial') {
            console.log("Found partial item")
            di.style.backgroundColor = '#ffe101';
        }
        else if (di.innerHTML === 'Normal') {
            console.log("Found normal item")
            di.style.backgroundColor = '#6dc17e';
        }
    }
};

//change color on flag (red and gren)  

function appendflagStatusColor() {

    let flags = document.getElementsByClassName('flag');
    for (const di of flags) {
        if (di.innerHTML === 'false') {
            console.log("Found failed item")
            di.style.backgroundColor = '#FF0000';
        }
        else if (di.innerHTML === 'true') {
            console.log("Found normal item")
            di.style.backgroundColor = '#6dc17e';
        }
    }
};

//Show green region under devices      
function appendGreenData(data) {
    let htmlTemplate = "";
    for (let datas of data) {
        htmlTemplate += /*html*/`  
        <article class="device_info">
            <p class="device-status">${datas.status}</p> 
            <p>${datas.dId}</p>
            <p>${datas.name}</p>
            <p>${datas.type}</p>
            <div class="flags-wrap">
            <p class="flag">${datas.Flag1}</p>
            <p class="flag">${datas.Flag2}</p>
            <p class="flag">${datas.Flag3}</p>
            <p class="flag">${datas.Flag4}</p>
            <p class="flag">${datas.Flag5}</p>
            </div>

        </article>
      `;
    }
    document.querySelector('#Green-Region').innerHTML = htmlTemplate;
}

//Show Blue region under devices   
function appendBlueData(data) {
    let htmlTemplate = "";
    for (let datas of data) {
        htmlTemplate += /*html*/`  
        <article class="device_info">
            <p class="device-status">${datas.status}</p> 
            <p>${datas.dId}</p>
            <p>${datas.name}</p>
            <p>${datas.type}</p>
            <div class="flags-wrap">
                <p class="flag">${datas.Flag1}</p>
                <p class="flag">${datas.Flag2}</p>
                <p class="flag">${datas.Flag3}</p>
                <p class="flag">${datas.Flag4}</p>
                <p class="flag">${datas.Flag5}</p>
            </div>

        </article>
      `;
    }
    document.querySelector('#Blue-Region').innerHTML = htmlTemplate;
}
