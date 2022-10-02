/*global variables*/
let _data = [];

//Fetches json data fra Data.json
async function fetchData() {
    const response = await fetch('data.json');
    const data = await response.json();
    _data = data;
    console.log(_data);
    appendData(_data.$values);
}

fetchData();

//


//Show green region under devices
function appendData(data) {
    let htmlTemplate = "";
    for (let datas of data) {
        htmlTemplate += /*html*/`  
        <article class="device_info">
            <p>${data.$values.regionDeviceList.$values.status}</p>
            <p>${datas.dId}</p>
            <p>${datas.name}</p>
            <p class="flag">${datas.Flag1}</p>
        </article>
        <div class="line"></div>
      `;
    }
    document.querySelector('#Green-Region').innerHTML = htmlTemplate;
}


//Show Blue region under devices