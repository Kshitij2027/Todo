function getandupdate(){
    console.log("Updating List...");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else{
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    update();
}
    function update(){
        if (localStorage.getItem('itemsJson')==null){
            itemJsonArray = [];
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
        }
        else{
            itemJsonArraystr = localStorage.getItem('itemsJson');
            itemJsonArray = JSON.parse(itemJsonArraystr);
        }

                
                let tablebody = document.getElementById("tableBody");
                let str = "";
                itemJsonArray.forEach((element, index) => {
                    str += `
                    <tr>
                        <th scope="row">${index +1}</th>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                        <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
                    </tr>`;
                });
                tablebody.innerHTML = str;
}
add = document.getElementById("Add");
add.addEventListener("click", getandupdate);
update();
function deleted(itemindex){
    console.log("Delete", itemindex);
    itemJsonArraystr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArraystr);
    itemJsonArray.splice(itemindex,1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
}
function clearStorage(){

    if(confirm("Do you really want to clear?")){
    console.log("Clearing the Storage");
    localStorage.clear();
    update();
    }
}