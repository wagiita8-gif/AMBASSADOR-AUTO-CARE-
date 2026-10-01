const toggleBtn=
  document.getElementById("themeToggle");

toggleBtn.addEventListener("click",()=>
  {
     document.body.classList.toggle("dark")     
  });
function goBack(){
  document.getElementById("login").style.display="flex";
  document.getElementById("home").style.display="none";
      document.getElementById("navBar").style.display="none";
          
        document.getElementById("salesForm").style.display="none";
        document.getElementById("Charges").style.display="none";
        document.getElementById("Tables").style.display="none";
}
localStorage.setItem("email","pirate@gmail.com");
localStorage.setItem("password","P^P^P^g234");
        function login(){
            let email=document.getElementById("email").value;
            let password=document.getElementById("password").value;

          let savedEmail= localStorage.getItem("email");
          let savedPassword= localStorage.getItem("password");

            if(email===""|| password===""){
        
            alert("Please enter your Email and Password");
            return;
            }
          if (email === savedEmail && password === savedPassword){
            document.getElementById("login").style.display="none";
            document.getElementById("home").style.display="block";
           document.getElementById("navBar").style.display="block";
          
        }
          else{
            alert("Wrong Email or Password");
          }
        }
      function showHome(){
        document.getElementById("home").style.display="block";
        document.getElementById("salesForm").style.display="none";
        document.getElementById("Charges").style.display="none";
        document.getElementById("Tables").style.display="none";
        document.getElementById("login").style.display="none";
      }
        function showSales(){
            document.getElementById("salesForm").style.display="flex";
          document.getElementById("home").style.display="none";
          document.getElementById("Charges").style.display="none";
          document.getElementById("Tables").style.display="none";
          document.getElementById("login").style.display="none";
        }
      function showTables(){
        document.getElementById("Tables").style.display="flex";
        document.getElementById("home").style.display="none";
        document.getElementById("salesForm").style.display="none";
        document.getElementById("Charges").style.display="none";
        document.getElementById("login").style.display="none";
      }
      function showCharges(){
        document.getElementById("Charges").style.display="flex";
        document.getElementById("home").style.display="none";
        document.getElementById("salesForm").style.display="none";
        document.getElementById("Tables").style.display="none";
        document.getElementById("login").style.display="none";
      }
    
        function calcProfit(){

        let buy=(document.getElementById("buy").value);
        let sell=(document.getElementById("sell").value);
          let qty=(document.getElementById("qty").value);

        let prof=(sell-buy)*qty;

        document.getElementById("profit").value=prof;
        }
      let totalProfit=0;
      let sales= JSON.parse(localStorage.getItem("sales")) || [];

     function addRow(s){
       let row=document.getElementById("salesTable").insertRow();
       row.innerHTML=`
       <td>${s.date}</td>
       <td>${s.qty}</td>
       <td>${s.product}</td>
       <td>${s.sell}</td>
       <td>${s.buy}</td>
       <td>${s.profit}</td> `;
     }
       function updateTotal(){
         totalProfit=sales.reduce((sum,s)=> sum+Number(s.profit),0);
         document.getElementById("totalDisplay").innerText=totalProfit;
       }
       sales.forEach(addRow);
       updateTotal();
     
      function saveToTable(){
        let product=document.getElementById("product").value;
      let sell= document.getElementById("sell").value;
      let buy=document.getElementById("buy").value;
      let profit=document.getElementById("profit").value;
      let qty=document.getElementById("qty").value;

      
        
        if (product===""){
          alert("Enter Product Name");
          return;
        }
        
        if (sell===""){
          alert("Add Selling Price");
          return;
        }
        
        if (buy===""){
          alert("Add Buying Price");
          return;
        }
        
        if (profit===""){
          alert("Click Find Profit");
          return;
        }
        
        if (qty===""){
          alert("Add Quantity Sold");
          return;
        }

        document.getElementById("product").value="";
        document.getElementById("sell").value="";
        document.getElementById("buy").value="";
        document.getElementById("profit").value="";
        document.getElementById("qty").value="";

        let sale={
          date: new Date().toLocaleDateString(),
             qty,product,sell,buy,profit
      };
       sales.push(sale);
       localStorage.setItem("sales", JSON.stringify(sales));
       addRow(sale);
       updateTotal();


       
        document.getElementById("salesForm").style.display="none";
        document.getElementById("Tables").style.display="block";
          }
    
        function findCharges(){
          let wifi=(document.getElementById("wifi").value);
          
          let airtime=(document.getElementById("airtime").value);
          let rent=(document.getElementById("rent").value);
          let bill=(document.getElementById("bill").value);
          let parcel=(document.getElementById("parcel").value);
          let bike=(document.getElementById("bike").value);
          let others=(document.getElementById("others").value);


          let charges=Number(wifi)+Number(airtime)+Number(rent)+Number(bill)+Number(parcel)+Number(bike)+Number(others);

          document.getElementById("totalCharges").value=charges;
        }  
      let NetProfit=0;
        function saveToCharges(){

          let totalCharges=Number(document.getElementById("totalCharges").value);
        
          
          
          
        document.getElementById("wifi").value="";
        document.getElementById("airtime").value="";
        document.getElementById("rent").value="";
        document.getElementById("bill").value="";
        document.getElementById("parcel").value="";
        document.getElementById("bike").value="";
        document.getElementById("others").value="";

          NetProfit=totalProfit-Number(totalCharges)
          document.getElementById("ChargesDisplay").innerText=totalCharges
          document.getElementById("netProfit").innerText=NetProfit
          document.getElementById("totalCharges").value="";

        }
        
