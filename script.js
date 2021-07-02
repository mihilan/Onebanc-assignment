//fetch api data
const url = 'https://dev.onebanc.ai/assignment.asmx/GetTransactionHistory?UserId=1&recipientId=2';

let details;
let money = document.getElementById("container")

fetch(url).then((response)=>response.json()).then((data)=> {
  details = data;
  console.log(details)
   let transactions = details.transactions;
  let content;
 transactions.forEach((item,i) => {
    //const items = transactions[i];
    if(transactions[i].direction === 1){
    content =  `
    <div class="card sent" >
      <div class="money">
        <h1 id="amount">₹${transactions[i].amount}</h1>
        <div class='transaction'>
          <h3>Transaction ID <br />${transactions[i].id}</h3>
        </div>
      </div>
      <div class='direction'>
        <h3>You paid</h3>
      </div>
      <div class="next_page">
      <button onclick=${"next_page()"} type="button" class="next_page">=></button>
      </div>
      </div>
      <br>
      `;
      money.innerHTML += content;
    }
    else{
      content =  `
      <div class='card'>
        <div class="money">
          <h1 id="amount">₹${transactions[i].amount}</h1>
          <div class='transaction'>
            <h3 id="id">Transaction ID <br />${transactions[i].id}</h3>
          </div>
        </div>
        <div class='direction'>
          <h3>You recieved</h3>
        </div>
        <div class="next_page">
        <button onclick = ${"next_page()"} type="button" class="next_page" id="next_page">=></button>
        </div>
        </div>
        <br>
        `;

        money.innerHTML += content;
    }
  });
});

function next_page(){
  let html;
  html = `
  <body>
  <h1>hu</h1>
  </body>

  `
  var tab = window.open('about:blank', '_blank');
  tab.document.write(html);
  tab.document.close();
}
