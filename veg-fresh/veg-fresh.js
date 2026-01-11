const VEG_FRESH_DATA = {

  genusA: [
    { item: "Brinjal", months:{ apr:8, may:6, jun:3, jul:8, aug:12, sep:10, oct:10, nov:10, dec:6, jan:11, feb:11, mar:8 }},
    { item: "Cauliflower", months:{ apr:9, may:4, jun:5, jul:8, aug:8, sep:9, oct:12, nov:13, dec:17, jan:16, feb:16, mar:15 }},
    { item: "Lady Finger", months:{ apr:5, may:8, jun:7, jul:5, aug:6, sep:3, oct:0, nov:0, dec:0, jan:0, feb:0, mar:0 }},
    { item: "Peas Green", months:{ apr:0, may:5, jun:4, jul:0, aug:0, sep:0, oct:0, nov:2, dec:3, jan:3, feb:3, mar:5 }},
    { item: "Pumpkin", months:{ apr:8, may:5, jun:8, jul:8, aug:9, sep:12, oct:13, nov:9, dec:8, jan:5, feb:3, mar:4 }},
    { item: "Beans All Varieties", months:{ apr:2, may:3, jun:3, jul:3, aug:2, sep:3, oct:3, nov:1, dec:1, jan:0, feb:2, mar:3 }},
    { item: "Cucumber", months:{ apr:5, may:5, jun:5, jul:3, aug:3, sep:3, oct:0, nov:0, dec:0, jan:0, feb:0, mar:0 }},
    { item: "Tinda", months:{ apr:0, may:4, jun:3, jul:3, aug:0, sep:0, oct:0, nov:0, dec:0, jan:0, feb:0, mar:0 }},
    { item: "Arvi", months:{ apr:0, may:0, jun:2, jul:2, aug:0, sep:0, oct:0, nov:0, dec:0, jan:0, feb:0, mar:0 }}
  ],

  genusB: [
    { item: "Carrot Country", months:{ apr:5, may:4, jun:8, jul:7, aug:5, sep:5, oct:6, nov:9, dec:10, jan:13, feb:9, mar:6 }},
    { item: "Cabbage", months:{ apr:12, may:10, jun:8, jul:8, aug:10, sep:11, oct:14, nov:8, dec:11, jan:12, feb:14, mar:15 }},
    { item: "Spinach Country", months:{ apr:5, may:5, jun:2, jul:3, aug:3, sep:3, oct:4, nov:2, dec:2, jan:3, feb:3, mar:5 }},
    { item: "Tomato Ripe", months:{ apr:4, may:4, jun:5, jul:5, aug:5, sep:5, oct:4, nov:3, dec:3, jan:3, feb:3, mar:3 }},
    { item: "Bitter Gourd", months:{ apr:0, may:2, jun:2, jul:3, aug:3, sep:0, oct:0, nov:0, dec:0, jan:0, feb:0, mar:0 }},
    { item: "Knol Khol", months:{ apr:13, may:7, jun:7, jul:7, aug:7, sep:10, oct:14, nov:14, dec:11, jan:10, feb:9, mar:12 }},
    { item: "Karam Sag", months:{ apr:1, may:1, jun:0, jul:0, aug:0, sep:0, oct:0, nov:0, dec:0, jan:0, feb:0, mar:0 }}
  ],

  genusC: [
    { item: "Chillies Green", months:{ apr:1, may:1, jun:1, jul:1, aug:1, sep:1, oct:1, nov:1, dec:1, jan:1, feb:1, mar:1 }},
    { item: "Ginger Green", months:{ apr:0.5, may:0.5, jun:0.5, jul:0.5, aug:0.5, sep:0.5, oct:1, nov:0.5, dec:0.5, jan:0.5, feb:0.5, mar:1 }},
    { item: "Coriander Green", months:{ apr:1, may:0.5, jun:1, jul:0.5, aug:1, sep:0.5, oct:0.5, nov:0.5, dec:0.5, jan:0.5, feb:0.5, mar:0.5 }},
    { item: "Mint Green", months:{ apr:0, may:0, jun:0, jul:0, aug:0, sep:0, oct:0, nov:0, dec:0, jan:0, feb:0, mar:0.5 }},
    { item: "Coconut Whole", months:{ apr:0, may:0, jun:0, jul:0, aug:0, sep:0, oct:0, nov:0.5, dec:0.5, jan:0.5, feb:0.5, mar:0 }}
  ],

  genusUnclassified: [
    { item: "Lime Fresh / Kagzi Nimbu", months:{ apr:0.5, may:1, jun:1.5, jul:1.5, aug:1.5, sep:1, oct:0.5, nov:0.5, dec:0.5, jan:0.5, feb:0.5, mar:0.5 }},
    { item: "Turnips", months:{ apr:0, may:0, jun:0, jul:0, aug:0, sep:2, oct:8, nov:11, dec:10, jan:11, feb:9, mar:8 }},
    { item: "Reddish Country", months:{ apr:5, may:6, jun:4, jul:2, aug:3, sep:5, oct:5, nov:10, dec:10, jan:8, feb:11, mar:10 }},
    { item: "Bottle Gourd", months:{ apr:12, may:8, jun:10, jul:8, aug:11, sep:9, oct:4, nov:5, dec:5, jan:2, feb:4, mar:3 }},
    { item: "Capsicum", months:{ apr:0, may:7, jun:7, jul:10, aug:9, sep:7, oct:0, nov:0, dec:0, jan:0, feb:0, mar:0 }},
    { item: "Tomato Green", months:{ apr:0, may:0, jun:2, jul:2, aug:0, sep:0, oct:0, nov:0, dec:0, jan:0, feb:0, mar:0 }},
    { item: "Squash Local", months:{ apr:3, may:3, jun:1, jul:1, aug:0, sep:0, oct:0, nov:0, dec:0, jan:0, feb:0, mar:0 }}
  ]
};

const monthsOrder = ["apr","may","jun","jul","aug","sep","oct","nov","dec","jan","feb","mar"];
/*const monthNames = ["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar"];*/
const ttbody = document.querySelector("#vegTable tbody");
let sno = 1;

/* ---------- TABLE GENERATION ---------- */
for(const genus in VEG_FRESH_DATA){
  ttbody.innerHTML += `<tr class="group"><th colspan="17">${genus.toUpperCase()}</th></tr>`;
  VEG_FRESH_DATA[genus].forEach(row=>{
    let html = `<tr>
      <td>${sno++}</td>
      <td class="item">${row.item}</td>`;
    monthsOrder.forEach(m=>{
      html += `<td><input class="month" value="${row.months[m]}"></td>`;
    });
    html += `<td class="total"></td>
             <td class="avg"></td>
             </tr>`;
    ttbody.innerHTML += html;
  });
}

/* ---------- CALCULATION ---------- */
function calculate(){
  document.querySelectorAll("#vegTable tbody tr").forEach(tr=>{
    const inputs = tr.querySelectorAll("input.month");
    if(!inputs.length) return;
    let sum = 0;
    inputs.forEach(i=>sum += parseFloat(i.value)||0);
    tr.querySelector(".total").textContent = sum.toFixed(1);
    tr.querySelector(".avg").textContent = (sum/12).toFixed(1);
  });
}
document.addEventListener("input", e=>{
  if(e.target.classList.contains("month")) calculate();
});
calculate();

/* ---------- CURRENT MONTH HIGHLIGHT ---------- */
const now = new Date().getMonth(); // Jan=0
let idx = now - 3; // Apr based
if(idx < 0) idx += 12;

document.querySelectorAll("#vegTable tr").forEach(tr=>{
  if(tr.children[idx+2]) tr.children[idx+2].classList.add("current");
});

/*
function render(month){
  tbody.innerHTML = "";
  let sno = 1;

  for(const g in VEG_FRESH_DATA){
    tbody.innerHTML += `
      <tr class="group">
        <th colspan="16">${labels[g]}</th>
      </tr>`;

    VEG_FRESH_DATA[g].forEach(r=>{
      let total = Object.values(r.months).reduce((a,b)=>a+b,0);
      let avg = (total/12).toFixed(1);

      tbody.innerHTML += `
        <tr>
          <td>${sno++}</td>
          <td class="item">${r.item}</td>
          ${monthsOrder.map(m=>`<td>${r.months[m]}</td>`).join("")}
          <td class="total">${total.toFixed(1)}</td>
          <td class="avg">${avg}</td>
        </tr>`;
    });
  }*/
/*

document.addEventListener("DOMContentLoaded", ()=>{
  const tbody = document.querySelector("#vegFreshTable tbody");
  if(!tbody) return;

  let sno = 1;
//OK
  for(const genus in VEG_FRESH_DATA){
    tbody.innerHTML += `
      <tr class="group">
        <th colspan="17">${labels[genus]}</th>
      </tr>`;

    VEG_FRESH_DATA[genus].forEach(row=>{
      let html = `<tr>
        <td>${sno++}</td>
        <td class="item">${row.item}</td>`;

      monthsOrder.forEach(m=>{
        html += `<td><input class="month" value="${row.months[m]}"></td>`;
      });

      html += `<td class="total"></td><td class="avg"></td></tr>`;
      tbody.innerHTML += html;
    });
  }
//tak
  calculate();
});


document.querySelectorAll("#vegFreshTable tbody tr").forEach(tr=>{
  const cells = tr.querySelectorAll("td");
  if(cells.length > 2 && cells[2 + idx]){
  cells[2 + idx].classList.add("current");
}
  
}); */

// expose Genus A only (abhi)
window.VEG_GENUS = VEG_FRESH_DATA;

const vegFreshKg = window.getVegFreshKg
  ? window.getVegFreshKg()
  : 0;

 