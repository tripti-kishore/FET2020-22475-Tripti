fetch("https://jsonplaceholder.typicode.com/users") 
    
    // Converting received data to JSON 
    .then(response => response.json()) 
    .then(json => { 
   
    
        let li = "<tr><th>Name</th>  <th>Email</th> <th>Username</th>   <th> phone </th> </tr>"; 
        
       
        json.forEach(user => { 
            li += `<tr> 
                <td>${user.name} </td> 
                <td>${user.email}</td>   
                <td>${user.username}</td>   
                <td>${user.phone}</td>    
            </tr>`; 
        }); 
   
    // Display result 
    document.getElementById("users").innerHTML = li; 
}); 