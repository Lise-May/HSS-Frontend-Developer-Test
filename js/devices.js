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
}

fetchData();

// change color on status (red, yellow and green)
function appendDeviceStatusColor() {
    if (document.getElementByClassName('device-status').innerHTML = 'Fail') {
        document.getElementByClassName('device-status').style.backgroundColor = '#FF0000';
    }
    else if (document.getElementByClassName('device-status').innerHTML = 'Partial') {
        document.getElementByClassName('device-status').style.backgroundColor = '#FFFF00';
    }
    else if (document.getElementByClassName('device-status').innerHTML = 'Normal') {
        document.getElementByClassName('device-status').style.backgroundColor = '#32CC32';
    }
    
};


//change color on flag (red and gren)  



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
