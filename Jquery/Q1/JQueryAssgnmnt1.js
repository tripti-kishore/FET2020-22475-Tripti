fetch("https://jsonplaceholder.typicode.com/photos") 
    
    // Converting received data to JSON 
    .then(response => response.json()) 
    .then(json => { 
   
    
        let li = "<tr><th>PRICE</th>  <th>Description</th> <th>Username</th>w</tr>"; 
        
       
        json.forEach(user => { 
            li += `<tr> 
                <td>${user.id} </td> 
                <td>${user.title}</td>   
                <td><img src="${user.thumbnailUrl}"></td>   
              
            </tr>`; 
        }); 
   
    // Display result 
    document.getElementById("users").innerHTML = li; 
}); 