import"./modulepreload-polyfill-EeOZK34R.js";import"./common-nSPO4yCD.js";var e=[],t={colonna:`PTS`,ascendente:!1},n=null,r=null;window.mostraGrafico=i;function i(e){r=e;let t=document.getElementById(`modalGraph`);t.style.display=`flex`,setTimeout(()=>{let t=document.querySelector(`input[name="catFilter-${e}"]:checked`).value,n=document.getElementById(`modal-filters`);n.innerHTML=`
            <strong style="margin-right:10px">Campionato:</strong>
            <label><input type="radio" name="modalFilter" value="U14" ${t===`U14`?`checked`:``} onchange="window.aggiornaGrafico()"> U14</label>
            <label style="margin-left:10px"><input type="radio" name="modalFilter" value="U15" ${t===`U15`?`checked`:``} onchange="window.aggiornaGrafico()"> U15</label>
            <label style="margin-left:10px"><input type="radio" name="modalFilter" value="Tutti" ${t===`Tutti`?`checked`:``} onchange="window.aggiornaGrafico()"> Tutti</label>
        `,window.aggiornaGrafico()},100)}window.aggiornaGrafico=a;function a(){let t=document.getElementById(`canvasGrafico`);if(!t)return;let i=t.getContext(`2d`),a=document.querySelector(`input[name="modalFilter"]:checked`).value,o=e[r].filter(e=>a===`Tutti`?e.matchIdFull.includes(`U14`)||e.matchIdFull.includes(`U15`):e.matchIdFull.includes(a)).sort((e,t)=>{let n=e.Data.split(`/`).reverse().join(``),r=t.Data.split(`/`).reverse().join(``);return n.localeCompare(r)});if(o.length===0)return;let s=(o.reduce((e,t)=>e+t.PTS,0)/o.length).toFixed(1),c=o.map(()=>s);n&&n.destroy();let l=i.createLinearGradient(0,0,0,300);l.addColorStop(0,`rgba(0, 86, 179, 0.3)`),l.addColorStop(1,`rgba(255, 255, 255, 0)`),n=new Chart(i,{type:`line`,data:{labels:o.map(e=>e.Data.substring(0,5)),datasets:[{label:`Punti`,data:o.map(e=>e.PTS),opponents:o.map(e=>e.MatchName),borderColor:`#0056b3`,backgroundColor:l,borderWidth:3,fill:!0,tension:.4,pointRadius:5,pointBackgroundColor:`#fff`,pointBorderWidth:2},{label:`Media (${s})`,data:c,borderColor:`#ff9800`,borderWidth:2,borderDash:[5,5],fill:!1,pointRadius:0,tension:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:`top`,align:`center`,labels:{usePointStyle:!0,pointStyle:`circle`,boxWidth:6,boxHeight:6,padding:15,font:{size:11,weight:`500`}}},tooltip:{backgroundColor:`rgba(0, 0, 0, 0.8)`,callbacks:{label:e=>{if(e.datasetIndex===1)return`Media: ${e.parsed.y}`;let t=e.dataIndex;return[`Punti: ${e.parsed.y}`,`Vs: ${e.dataset.opponents[t]}`]}}}},scales:{y:{beginAtZero:!0,grace:`15%`},x:{grid:{display:!1}}}}})}window.chiudiGrafico=o;function o(){document.getElementById(`modalGraph`).style.display=`none`}function s(e){return e?/^https?:\/\//i.test(e)?e.trim():`https://`+e:``}function c(e){if(!e)return``;let t=e.match(/\/d\/([a-zA-Z0-9_-]+)/);return t&&t[1]||(t=e.match(/id=([a-zA-Z0-9_-]+)/),t&&t[1])?`https://drive.google.com/uc?id=${t[1]}`:e}window.applicaFiltriEGenera=l;function l(){let t=document.querySelectorAll(`.swiper-slide`);e.forEach((e,n)=>{let r=t[n];if(!r)return;let i=r.querySelector(`input[name="catFilter-`+n+`"]:checked`).value;d(n,e.filter(e=>String(e.matchIdFull).toLowerCase().includes(`test`)||String(e.matchName).toLowerCase().includes(`test`)||e.Data===`--/--`||e.MatchName===`Gara`?!1:i===`Tutti`?e.matchIdFull.includes(`U14`)||e.matchIdFull.includes(`U15`):e.matchIdFull.includes(i)))})}window.gestisciOrdinamentoMatch=u;function u(e,n){t.colonna===e?t.ascendente=!t.ascendente:(t.colonna=e,t.ascendente=!1),window.applicaFiltriEGenera()}function d(e,n){let r=document.getElementById(`tbody-${e}`),i=document.getElementById(`tfoot-${e}`),a=document.querySelectorAll(`#table-${e} th`);if(!r)return;n.sort((e,n)=>{let r=e[t.colonna],i=n[t.colonna];if(t.colonna===`Data`){let e=r.split(`/`),n=i.split(`/`),a=new Date(e[2],e[1]-1,e[0]),o=new Date(n[2],n[1]-1,n[0]);return t.ascendente?a-o:o-a}return t.colonna!==`MatchName`&&t.colonna!==`Location`&&t.colonna!==`MatchIdDisplay`&&(r=parseFloat(r)||0,i=parseFloat(i)||0),t.ascendente?r>i?1:-1:r<i?1:-1}),a.forEach(e=>{e.classList.remove(`sort-asc`,`sort-desc`);let n=e.getAttribute(`onclick`);n&&n.includes(`'${t.colonna}'`)&&e.classList.add(t.ascendente?`sort-asc`:`sort-desc`)});let o=0,s=0,c=0,l=0;n.forEach(e=>{o+=e.PTS,s+=e.TL,c+=e.T2,l+=e.T3}),r.innerHTML=n.map(e=>`
    <tr>
        <td class="date-col">${e.Data.substring(0,6)+e.Data.slice(-2)}</td>
        <td class="id-col" style="line-height: 1.1;">${e.MatchIdDisplay.replace(` `,`<br>`)}</td>
        <td class="loc-cell">${e.Location}</td>
        <td class="avversaria-cell">${e.MatchName}</td>
        <td class="pts-bold">${e.PTS}</td>
        <td>${e.TL}</td>
        <td>${e.T2}</td>
        <td>${e.T3}</td>
    </tr>
    `).join(``),i.innerHTML=`
    <tr class="tfoot-totale">
        <td></td><td></td><td></td>
        <td style="text-align:left; padding-left:0.5rem">TOTALE</td>
        <td>${o}</td>
        <td>${s}</td>
        <td>${c}</td>
        <td>${l}</td>
    </tr>
    `}async function f(){let t=document.getElementById(`roster-container`),n=JSON.parse(localStorage.getItem(`datiRoster`)||`[]`),r=JSON.parse(localStorage.getItem(`datiTutteLeStats`)||`{}`).statisticheGiocatori||[],i=[],a=localStorage.getItem(`cache_partite`);if(a)i=JSON.parse(a);else try{let e=new URLSearchParams({sheet:`Partite`,userId,action:`Get Roster`,details:JSON.stringify(getDeviceData)}),t=await(await fetch(`${url}?${e.toString()}`)).json();i=Array.isArray(t)?t:t.data,localStorage.setItem(`cache_partite`,JSON.stringify(i))}catch(e){console.error(e)}n.forEach((n,a)=>{let o=document.createElement(`div`);o.classList.add(`swiper-slide`),e[a]=r.filter(e=>e.giocatore===n.Nome+` `+n.Cognome||e.numero==n[`Numero Maglia`]&&e.giocatore.includes(n.Cognome)).map(e=>{let t=JSON.parse(e.contatori||`{}`),n=String(e.matchId||``),r=(n.includes(`U14`)?`U14 `:n.includes(`U15`)?`U15 `:``)+(n.includes(` `)?n.split(` `)[1]:n),a=i.find(e=>String(e.matchId)===n),o=`Gara`,s=`--/--`,c=``;if(a){let e=a.squadraA.toUpperCase().includes(`POLISMILE A`);c=e?`🏠`:`🚌`,o=e?a.squadraB:a.squadraA,s=String(a.data).replace(`*`,``)||`--/--`}return{matchIdFull:n,Data:s,Location:c,MatchName:o,MatchIdDisplay:r,PTS:(parseInt(t[1])||0)+(parseInt(t[2])||0)*2+(parseInt(t[3])||0)*3,TL:parseInt(t[1])||0,T2:parseInt(t[2])||0,T3:parseInt(t[3])||0}}),s(c((n.Foto||``).trim())),o.innerHTML=`
        <div class="player-header">
        <a href="roster.html" class="back-btn">‹</a>
        <div class="player-info">
            <h2>#${n[`Numero Maglia`]} - ${n.Cognome} ${n.Nome}</h2>
        </div>
        <img src="${n.Foto}" class="player-photo" />
        </div>
        <div class="filters-container">
        <div class="filter-group">
            <strong>Campionato:</strong>
            <label><input type="radio" name="catFilter-${a}" value="U14" onclick="window.applicaFiltriEGenera()"> U14</label>
            <label><input type="radio" name="catFilter-${a}" value="U15" onclick="window.applicaFiltriEGenera()"> U15</label>
            <label><input type="radio" name="catFilter-${a}" value="Tutti" checked onclick="window.applicaFiltriEGenera()"> Tutti</label>
            <button class="chart-btn" onclick="window.mostraGrafico(${a})">📊</button>
        </div>
        </div>
        <table id="table-${a}">
        <thead>
            <tr>
            <th onclick="window.gestisciOrdinamentoMatch('Data', ${a})">Data</th>
            <th onclick="window.gestisciOrdinamentoMatch('MatchIdDisplay', ${a})">ID</th>
            <th onclick="window.gestisciOrdinamentoMatch('Location', ${a})">L</th>
            <th onclick="window.gestisciOrdinamentoMatch('MatchName', ${a})">Avversaria</th>
            <th onclick="window.gestisciOrdinamentoMatch('PTS', ${a})">PTS</th>
            <th onclick="window.gestisciOrdinamentoMatch('TL', ${a})">TL</th>
            <th onclick="window.gestisciOrdinamentoMatch('T2', ${a})">T2</th>
            <th onclick="window.gestisciOrdinamentoMatch('T3', ${a})">T3</th>
            </tr>
        </thead>
        <tbody id="tbody-${a}"></tbody>
        <tfoot id="tfoot-${a}"></tfoot>
        </table>`,t.appendChild(o)}),window.applicaFiltriEGenera(),new Swiper(`.swiper`,{initialSlide:parseInt(new URLSearchParams(window.location.search).get(`player`))||0,pagination:{el:`.swiper-pagination`,clickable:!0},keyboard:{enabled:!0}})}f();