function appendtotable(){
    
    var first=document.getElementById('Fname').value;
    
    var last=document.getElementById('Lname').value;
    
    var address1=document.getElementById('Al1').value;
    
    var address2=document.getElementById('Al2').value;
    
    var pincode=document.getElementById('pin').value;
    
    var gender=document.getElementById('gender').value;
    
    var food=document.getElementById('food').value;
    
    var state=document.getElementById('st').value;
    
    var country=document.getElementById('cn').value;
    
    
    let address = [];
    
        address.push(address1).value;
        address.push(address2).value;
    
    console.log(address.join(" "));
        
    
        let gender1 = document.getElementsByName("gender1")
        let genderValue;
        for(let i=0;i<gender1.length;i++){
            if(gender1[i].checked){
                genderValue = gender1[i].value
            }
        }
        
        let food1 = document.getElementsByName("food")
        let foodList = [];
        
        for(let i=0;i<food1.length;i++){
            if(food1[i].checked){
                foodList.push(food1[i].value)
                
            }
        }
        if(foodList.length>=2){
            result = foodList.join(", ")
        }else{
            result = alert("Choose min 2 out of 5 in food list")
        }
                
                var table=document.getElementById('tab')
                var tr=document.createElement('tr');
                var tb=document.createElement('tbody');
                var td1=document.createElement('td');
                var td2=document.createElement('td');
                var td3=document.createElement('td');
                var td4=document.createElement('td');
                var td5=document.createElement('td');
                var td6=document.createElement('td');
                var td7=document.createElement('td');
                var td8=document.createElement('td');
                
            td1.innerHTML=first;
            td2.innerHTML=last;
            td3.innerHTML=address.join(" ");
            td4.innerHTML=pincode;
            td5.innerHTML=genderValue;
            td6.innerHTML=foodList;
            td7.innerHTML=state;
            td8.innerHTML=country;
           tr.appendChild(td1);
           tr.appendChild(td2);
           tr.appendChild(td3);
           tr.appendChild(td4);
           tr.appendChild(td5);
           tr.appendChild(td6);
           tr.appendChild(td7);
           tr.appendChild(td8);
           tb.appendChild(tr);
           table.appendChild(tb);
           
           document.getElementById("form").reset();
    
}