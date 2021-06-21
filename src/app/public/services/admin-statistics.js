const commands_url = "http://127.0.0.1:5000/api/commands/getAll";
const perfumes_url = "http://127.0.0.1:5000/api/perfumes/getAll";
let commands, perfumes;
let type;

function setType() {
    let index = document.getElementById("type").selectedIndex;
    if (index === 0) {
        type = 'stocks';
    } else {
        type = 'commands';
    }
}

function getCommandsData() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            commands = JSON.parse(request.responseText);
        }
    }
    request.open("GET", commands_url, false);
    request.send();
}

function getStocks() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            perfumes = JSON.parse(request.responseText);
        }
    }
    request.open("GET", perfumes_url, false);
    request.send();

}


function generateStatistics() {
    let table_div = document.getElementById("table");
    if (type === 'stocks') {
        getStocks();
        generateHTML(table_div, perfumes, type);

    } else if(type === 'commands'){
        getCommandsData();
        generateHTML(table_div, commands, type);
    }
}

function generateHTML(table_div, data, type) {
    if (type === "stocks") {
        table_div.appendChild(document.createTextNode("Stocks available"));
    } else if(type === 'commands'){
        table_div.appendChild(document.createTextNode("Commands"));
    }
    let table = document.createElement('TABLE');
    let header = document.createElement('THEAD');
    table.border = "1";
    //header
    let header_tags = [];
    for (let d of data) {
        for (let key in d) {
            header_tags.push(key);
        }
        break;
    }

    table.appendChild(header);
    for (let tag of header_tags) {
        header.appendChild(document.createElement("th"))
            .appendChild(document.createTextNode(tag));
    }

    for (let d of data) {
        let row = table.appendChild(document.createElement("tr"));
        for (let tag of header_tags) {
            row.appendChild(document.createElement("th"))
                .appendChild(document.createTextNode(d[tag]));
        }
    }
    table_div.appendChild(table);
}

function generatePDF(){
    let doc = new jsPDF();
    doc.fromHTML(document.getElementById('table').innerHTML, 20, 50, {
        'width': 20
    });
    doc.save('export.pdf');
}

function generateCSVTable(table){
    let csvTable = ""
    const tableString = table.innerText
    const tableString_array = tableString.split("\n")
    for (let i = 0;i<tableString_array.length;i++)
    {
        const row_split = tableString_array[i].split("\t")
        for(let index_element = 0; index_element<row_split.length;index_element++)
        {
            csvTable += `${row_split[index_element]},`
        }
        csvTable = csvTable.slice(0,-1)

        csvTable += '\n'
    }
    return csvTable;

}

function downloadCSV(filename, csvStringContent){
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvStringContent));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function generateCSV(table){
    downloadCSV("export_csv.csv", generateCSVTable(table));
}