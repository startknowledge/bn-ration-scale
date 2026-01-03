/************ DATA ************/
const DATA = {
 fresh:[
  {item:'Veg Fresh', unit:'gms', off:0.170, jco:0.250, dog:0.230},
  {item:'Veg TD/RTE', unit:'gms', off:0.090, jco:0.090, dog:0.000},
  {item:'Veg DHY', unit:'gms', off:0.020, jco:0.020, dog:0.000},
  {item:'Potato Fresh', unit:'gms', off:0.110, jco:0.110, dog:0.000},
  {item:'Potato DHY', unit:'gms', off:0.024, jco:0.024, dog:0.000},
  {item:'Potato TD', unit:'gms', off:0.000, jco:0.000, dog:0.000},
  {item:'Onion Dry', unit:'gms', off:0.060, jco:0.090, dog:0.000},
  {item:'Onion DHY', unit:'gms', off:0.010, jco:0.007, dog:0.000},
  {item:'Garlic', unit:'gms', off:0.020, jco:0.020, dog:0.000},
  {item:'Fruit Fresh', unit:'gms', off:0.200, jco:0.230, dog:0.000},
  {item:'Fruit TD', unit:'gms', off:0.078, jco:0.090, dog:0.000},
  {item:'Fruit Dry', unit:'gms', off:0.024, jco:0.028, dog:0.000},
  {item:'MOH', unit:'gms', off:0.640, jco:0.275, dog:0.000},
  {item:'Meat DSD FZN', unit:'gms', off:0.260, jco:0.180, dog:0.680},
  {item:'Meat TD', unit:'gms', off:0.200, jco:0.110, dog:0.415},
  {item:'Fish TD', unit:'gms', off:0.200, jco:0.130, dog:0.000},
  {item:'Fish Fresh', unit:'gms', off:0.430, jco:0.311, dog:0.000},
  {item:'Broiler DSD FZN', unit:'gms', off:0.175, jco:0.180, dog:0.680},
  {item:'Broiler Alive', unit:'gms', off:0.350, jco:0.240, dog:0.810},
  {item:'Chicken Curry', unit:'gms', off:0.200, jco:0.140, dog:0.528},
  {item:'Egg Fresh', unit:'Nos', off:6, jco:5, dog:2},
  {item:'Egg PDR', unit:'gms', off:0.060, jco:0.050, dog:0.000},
  {item:'Butter Fresh', unit:'gms', off:0.020, jco:0.010, dog:0.000},
  {item:'Butter TD', unit:'gms', off:0.020, jco:0.010, dog:0.000},
  {item:'Milk Fresh', unit:'ml', off:1.000, jco:0.850, dog:1.180},
  {item:'Milk PDR', unit:'gms', off:0.036, jco:0.036, dog:0.000},
  {item:'Milk TD', unit:'ml', off:0.100, jco:0.100, dog:0.000},
  {item:'TPM', unit:'ml', off:0.250, jco:0.250, dog:0.000},
  {item:'Cheese TD', unit:'gms', off:0.050, jco:0.000, dog:0.000},
  {item:'Cheese SPD', unit:'gms', off:0.030, jco:0.000, dog:0.000},
  {item:'Cheese Cube', unit:'gms', off:0.050, jco:0.000, dog:0.000},
  {item:'Cheese Slice', unit:'gms', off:0.050, jco:0.000, dog:0.000},
  {item:'Jam TD', unit:'gms', off:0.028, jco:0.000, dog:0.000},
  {item:'Bread', unit:'gms', off:0.230, jco:0.115, dog:0.000},
  {item:'Ration Brown', unit:'gms', off:0.028, jco:0.028, dog:0.000},
  {item:'MM Food', unit:'gms', off:0.030, jco:0.030, dog:0.000},
  {item:'Dog Biscuit', unit:'gms', off:0.000, jco:0.000, dog:0.030},
  {item:'Dog Pellet Food', unit:'gms', off:0.000, jco:0.000, dog:0.500}
 ],
 dry:[
  {item:'Atta', unit:'gms', off:0.220, jco:0.600, dog:0.000},
  {item:'Rice', unit:'gms', off:0.220, jco:0.600, dog:0.480},
  {item:'Sugar', unit:'gms', off:0.090, jco:0.090, dog:0.000},
  {item:'R/Oil', unit:'ml', off:0.080, jco:0.080, dog:0.000},
  {item:'Dal', unit:'gms', off:0.040, jco:0.090, dog:0.000},
  {item:'Salt', unit:'gms', off:0.020, jco:0.020, dog:0.000},
  {item:'Tea R', unit:'gms', off:0.009, jco:0.009, dog:0.000},
  {item:'Coffee', unit:'gms', off:0.004, jco:0.004, dog:0.000},
  {item:'Match Box', unit:'Nos', off:0.000, jco:0.000, dog:0.000},
  {item:'Suji', unit:'gms', off:0.000, jco:0.020, dog:0.000},
  {item:'Flour', unit:'gms', off:0.000, jco:0.020, dog:0.000},
  {item:'Dalia', unit:'gms', off:0.020, jco:0.000, dog:0.000},
  {item:'Corn Flakes', unit:'gms', off:0.030, jco:0.000, dog:0.000},
  {item:'Corn Flour', unit:'gms', off:0.007, jco:0.000, dog:0.000},
  {item:'Cream Powder', unit:'gms', off:0.007, jco:0.000, dog:0.000},
  {item:'Custard', unit:'gms', off:0.007, jco:0.000, dog:0.000},
  {item:'Jelly Crystal', unit:'gms', off:0.007, jco:0.000, dog:0.000},
  {item:'LPG', unit:'gms', off:0.150, jco:0.125, dog:0.110},
  {item:'K/Oil', unit:'ml', off:0.378, jco:0.253, dog:0.000}
 ]
};

/************ Ye arrow function hai, $ ek short name (helper function) banaya gaya hai, Matlab: $( "box" )
  document.getElementById( "box" )
  isko ab hum likh sakte hain as:
  $( "box" ) Dono ka 
likhne ka same meaning hai: document.getElementById("box")
✔️ Fayda: Code chhota ho jata hai, Bar-bar document.getElementById likhne ki zarurat nahi

2️⃣ let currentRows = []; currentRows ek empty array hai, jisme hum data store karenge jo user ke selection ke hisab se load hoga
  Jaise hi user "Load Table" button pe click karega, uske hisab se data currentRows me store ho jayega
  Aur fir jab user "Calculate" button pe click karega, tab currentRows me jo data hoga, uske hisab se calculation hoga
  ************ Ye comment hai,
Isme baad me data / rows / items store kiye jayenge ************/
const $ = id => document.getElementById(id);
let currentRows=[];

/************ STRENGTH LOGIC ************/
function resetStrength(){
 sOff.value=0; sJco.value=0; sOr.value=0; sDog.value=0; sTotal.innerText=0;
}

function updateStrengthUI(){
 resetStrength();
 if(dog.checked){
  offrs.checked=false; jco.checked=false;
  sDog.style.display='inline';
  sOff.style.display='none'; sJco.style.display='none'; sOr.style.display='none';
 }else{
  sDog.style.display='none';
  sOff.style.display=offrs.checked?'inline':'none';
  sJco.style.display=jco.checked?'inline':'none';
  sOr.style.display=jco.checked?'inline':'none';
 }
}

['offrs','jco','dog'].forEach(id=>$(id).onchange=updateStrengthUI);
['sOff','sJco','sOr','sDog'].forEach(id=>$(id).oninput=()=>{
 sTotal.innerText=(+sOff.value||0)+(+sJco.value||0)+(+sOr.value||0)+(+sDog.value||0);
});

/************ LOAD TABLE ************/
loadBtn.onclick = () => {
 const type = ration.value;
 currentRows = JSON.parse(JSON.stringify(DATA[type]));
 let html = '<table><tr><th>Item</th><th>Unit</th>';
 if(offrs.checked) html += '<th>Offrs Scale</th><th>Offrs Total</th>';
 if(jco.checked) html += '<th>JCO/ORs Scale</th><th>JCO/ORs Total</th>';
 if(dog.checked) html += '<th>Army Dog Scale</th><th>Total</th>';
 if(offrs.checked && jco.checked) html += '<th>Grand Total</th>';
 html += '</tr>';

 currentRows.forEach(r => {
  html += '<tr>';
  html += `<td>${r.item}</td><td>${r.unit}</td>`;
  if(offrs.checked) html += `<td><input class="offScale" type="text" value="${r.off.toFixed(3)}"></td><td>-</td>`;
  if(jco.checked) html += `<td><input class="jcoScale" type="text" value="${r.jco.toFixed(3)}"></td><td>-</td>`;
  if(dog.checked) html += `<td><input class="dogScale" type="text" value="${r.dog.toFixed(3)}"></td><td>-</td>`;
  if(offrs.checked && jco.checked) html += '<td>-</td>';
  html += '</tr>';
 });
 tableArea.innerHTML = html;
 vehicleArea.innerHTML = '';
};

/************ CALCULATE ************/
calcBtn.onclick = () => {
 const daysVal = +days.value || 1;
 let table = document.querySelector('#tableArea table');
 if(!table){ alert('Load table first'); return; }
 let rows = table.querySelectorAll('tr');
 let vehicleTotalKg = 0;

 rows.forEach((tr,i)=>{
  if(i===0) return;
  let tds = tr.querySelectorAll('td');
  let item = tds[0].innerText;
  let unit = tds[1].innerText;
  let col = 2;
  let offVal=0, jVal=0, dogVal=0;

  if(offrs.checked){
   let scale = parseFloat(tds[col].querySelector('input').value)||0;
   offVal = scale*(+sOff.value||0)*daysVal;
   if(unit==='gms') offVal *= 1000;
   tds[col+1].innerHTML = item==='Egg Fresh'?eggTray(offVal):format(offVal,unit);
   vehicleTotalKg += unit==='gms'?offVal:0;
   col+=2;
  }

  if(jco.checked){
   let scale = parseFloat(tds[col].querySelector('input').value)||0;
   jVal = scale*((+sJco.value||0)+(+sOr.value||0))*daysVal;
   if(unit==='gms') jVal *= 1000;
   tds[col+1].innerHTML = item==='Egg Fresh'?eggTray(jVal):format(jVal,unit);
   vehicleTotalKg += unit==='gms'?jVal:0;
   col+=2;
  }

  if(dog.checked){
   let scale = parseFloat(tds[col].querySelector('input').value)||0;
   dogVal = scale*(+sDog.value||0)*daysVal;
   if(unit==='gms') dogVal *= 1000;
   tds[col+1].innerHTML = item==='Egg Fresh'?eggTray(dogVal):format(dogVal,unit);
   vehicleTotalKg += unit==='gms'?dogVal:0;
   col+=2;
  }

  if(offrs.checked && jco.checked){
   let g = offVal + jVal;
   tds[col].innerHTML = item==='Egg Fresh'?eggTray(g):format(g,unit);
   vehicleTotalKg += unit==='gms'?g:0;
  }
 });

 let vehicle = 'ALS (20 Ton)';
 if(vehicleTotalKg <= 5000) vehicle = '2.5 Ton Vehicle';
 else if(vehicleTotalKg <= 9000) vehicle = '9 Ton Bolero Camper';

 vehicleArea.innerHTML = `<b><u>Vehicle Load</u></b><br>Total Load :  ${(vehicleTotalKg/1000).toFixed(3)} Kgs<br>Vehicle :  <b>${vehicle}</b>`;
};

/************ FORMAT HELPERS ************/
function format(val, unit){
 if(unit==='Nos') return val+' Nos';
 if(unit==='gms' && val>=1000) return (val/1000).toFixed(3)+' Kgs';
 if(unit==='ml' && val>=1000) return (val/1000).toFixed(3)+' Ltrs';
 return val.toFixed(3)+' '+unit;
}

function eggTray(val){
 let trays = Math.floor(val/30);
 let rem = val % 30;
 let txt = val+' Eggs';
 if(trays>0) txt += `<br><small>${trays} Tray${trays>1?'s':''}${rem?` + ${rem} Eggs`:''}</small>`;
 return txt;
}
