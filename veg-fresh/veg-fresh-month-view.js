const months = [
 {k:"apr",l:"April"},{k:"may",l:"May"},{k:"jun",l:"June"},
 {k:"jul",l:"July"},{k:"aug",l:"August"},{k:"sep",l:"September"},
 {k:"oct",l:"October"},{k:"nov",l:"November"},
 {k:"dec",l:"December"},{k:"jan",l:"January"},
 {k:"feb",l:"February"},{k:"mar",l:"March"}
];
const labels = {
  genusA: "GENUS A (Veg Fresh)",
  genusB: "GENUS B (Leafy)",
  genusC: "GENUS C (Roots)",
  genusUnclassified: "GENUS UNCLASSIFIED"
};

document.addEventListener("DOMContentLoaded", ()=>{
  const monthSelect = document.getElementById("monthSelect");
  const tablebody = document.querySelector("#vegFreshTable tbody");

  if(!monthSelect || !tablebody){
    //console.warn("Veg Fresh DOM not ready");
    return;
  }

  // fill dropdown
  months.forEach(m=>{
    monthSelect.innerHTML += `<option value="${m.k}">${m.l}</option>`;
  });

  // current month (Apr based)
  let idx = new Date().getMonth() - 3;
  if(idx < 0) idx += 12;
  monthSelect.value = months[idx].k;

  function renderVegFresh(){
    const mKey = monthSelect.value;
    tablebody.innerHTML = "";
    const totalVegKg = window.getVegFreshKg ? window.getVegFreshKg() : 0;
    let sno = 1;
    /* 🔥 AUTO LOOP ON GENUS */
    for(const genusKey in VEG_FRESH_DATA){
        /* ===== GENUS HEADING AUTO ===== */
        tablebody.innerHTML += `
        <tr class="group">
            <th colspan="4" style="text-align: left; font-weight: 600;">${labels[genusKey] || genusKey}</th>
        </tr>`;
    /* ===== GENUS ITEMS ===== */
        VEG_FRESH_DATA[genusKey].forEach((r)=>{
            const monthVal = r.months[mKey] || 0;  // Brinjal ki value 11 of Jan
      
            // percentage of BN veg fresh Kg
            const itemKgs = ((totalVegKg * monthVal)/100);
            const itemKg = (itemKgs / 1000).toFixed(3);
            tablebody.innerHTML += `
            <tr>
                <td>${sno++}</td>
                <td style="text-align:left; font-weight: 600;">${r.item}</td>
                <td>${monthVal}</td>          
                <td>${itemKg} Kg</td>
            </tr>`;
        });
        }
    }
    // expose globally (OPTIONAL but safe)
    window.renderVegFresh = renderVegFresh;

    // initial render
    renderVegFresh();
    monthSelect.onchange = renderVegFresh;
});
