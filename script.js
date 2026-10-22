function insert_Row() {
    //Write your code here
	let table = document.getElementById("sampleTable")
        
    let newrow = table.insertRow(0) 
    
    let cel1 = newrow.insertCell(0);
    let cel2 = newrow.insertCell(1);

    cel1.textContent = "New Cell1";
    cel2.textContent = "New Cell2"; 
}
