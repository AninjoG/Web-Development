function getdata(){
    fetch("https://dummyjson.com/products")
        .then(action => action.json())
        .then(data => {
            var products = data.products;
              var cat = document.getElementById("choose").value;
                var Table = document.getElementById("output");
                Table.innerHTML="";
                for (let elements=0; elements<30; elements++)
                {
                  var value = products[elements];
                  var vis = value["thumbnail"]
                  if (value["category"]==cat)
                  {
                    const tableBody = document.querySelector('#output');
                    const row = document.createElement('tr');
                    const blk0 = document.createElement('img');
                    const blk1 = document.createElement('td');
                    const blk2 = document.createElement('td');
                    const blk3 = document.createElement('td');
                    const blk4 = document.createElement('td');
                    const blk5 = document.createElement('img');
                    blk5.setAttribute("id", "img1"); 
                    const part1 = document.createElement('part1');
                    part1.innerHTML = value["brand"];
                    const part2 = document.createElement('part2');
                    part2.innerHTML = value["title"];
                    const part3 = document.createElement('part3');
                    part3.innerHTML = value["price"];
                    const part4 = document.createElement('part4');
                    part4.innerHTML = value["category"];
                    blk0.src = vis;
                    row.appendChild(blk0);
                    blk1.appendChild(part1);
                    row.appendChild(blk1);
                    blk2.appendChild(part2);
                    row.appendChild(blk2);
                    blk3.appendChild(part3);
                    row.appendChild(blk3);
                    blk4.appendChild(part4);
                    row.appendChild(blk4);
                    tableBody.appendChild(row);   
                    for (let sideig=0; sideig<3; sideig++)
                    {
                      var vis1 = (value["images"][sideig]);
                      blk5.src=vis1;
                      row.appendChild(blk5);
                      tableBody.appendChild(row); 
                      console.log(vis1)
                    }
                  }
                }   
        },
        error => {
          console.log(error);
        }
        );
  }
  
  
  
  
  
  
  
  
  