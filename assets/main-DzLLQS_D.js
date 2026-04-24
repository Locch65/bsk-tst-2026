import"./modulepreload-polyfill-EeOZK34R.js";import"./main-DJYLJHLb.js";var e=null;window.mostraStatisticheCampionato=t;function t(){let e=document.getElementById(`modalStatsCampionato`);e||(e=document.createElement(`div`),e.id=`modalStatsCampionato`,e.className=`popup`,e.style.display=`none`,e.innerHTML=`
            <style>
                /* Stili per lo Switch */
                .switch-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 12px;
                    background: rgba(0,0,0,0.05);
                    padding: 12px;
                    border-radius: 12px;
                    margin-bottom: 20px;
                }
                .switch {
                    position: relative;
                    display: inline-block;
                    width: 46px;
                    height: 24px;
                }
                .switch input { opacity: 0; width: 0; height: 0; }
                .slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background-color: #ccc;
                    transition: .3s;
                    border-radius: 24px;
                }
                .slider:before {
                    position: absolute;
                    content: "";
                    height: 18px;
                    width: 18px;
                    left: 3px;
                    bottom: 3px;
                    background-color: white;
                    transition: .3s;
                    border-radius: 50%;
                }
                input:checked + .slider { background-color: #dc3545; }
                input:checked + .slider:before { transform: translateX(22px); }
                .label-toggle { font-size: 0.85rem; font-weight: bold; color: #ffffff; }
            </style>

            <div class="popup-content" style="max-width: 95%; width: 600px; max-height: 90vh; overflow-y: auto; padding: 20px;">
                <h2 style="margin-bottom:15px; text-align:center;">Statistiche Campionato</h2>
                
                <div class="filter-group" style="margin-bottom: 15px; display: flex; justify-content: center; gap: 15px;">
                    <label><input type="radio" name="statCamp" value="U14"> U14</label>
                    <label><input type="radio" name="statCamp" value="U15"> U15</label>
                    <label><input type="radio" name="statCamp" value="Tutti" checked> Tutti</label>
                </div>

                <div class="switch-container">
                    <span class="label-toggle">Punti Gara</span>
                    <label class="switch">
                        <input type="checkbox" id="toggleTipoGrafico">
                        <span class="slider"></span>
                    </label>
                    <span class="label-toggle">Progressivo</span>
                </div>

                <div id="containerTabellaStats"></div>

                <div style="height: 280px; margin-top: 10px;">
                    <canvas id="canvasStatsCampionato"></canvas>
                </div>

                <button class="close-btn" style="margin-top:20px; width:100%; padding:12px; background:#444; color:#fff; border:none; border-radius:8px; cursor:pointer; font-weight:bold;">Chiudi</button>
            </div>
        `,document.body.appendChild(e),e.querySelector(`.close-btn`).onclick=()=>e.style.display=`none`,e.querySelectorAll(`input[name="statCamp"], #toggleTipoGrafico`).forEach(t=>{t.addEventListener(`change`,()=>{let t=e.querySelector(`input[name="statCamp"]:checked`).value;n(t)})})),e.style.display=`flex`,n(`Tutti`)}function n(e){let t=localStorage.getItem(`cache_partite`);if(!t||t===`undefined`)return;let n=JSON.parse(t).filter(e=>!e.matchId.toLowerCase().includes(`test`)&&e.punteggioA!==null&&e.punteggioB!==null&&String(e.statoPartita).toLowerCase().includes(`terminata`)&&!isInTheFuture(e.data));e!==`Tutti`&&(n=n.filter(t=>String(t.matchId).includes(e))),n.sort((e,t)=>parseItalianDate(String(e.data).replace(`*`,``),e.orario)-parseItalianDate(String(t.data).replace(`*`,``),t.orario));let i={vinte:0,perse:0,fatti:0,subiti:0},a=[],o=0,s=0;n.forEach(e=>{let t=parseInt(e.punteggioA)||0,n=parseInt(e.punteggioB)||0,r=e.squadraA===`Polismile A`||e.casaTrasferta===`Casa`,c=r?t:n,l=r?n:t;c>l?i.vinte++:c<l&&i.perse++,i.fatti+=c,i.subiti+=l,o+=c,s+=l,a.push({data:String(e.data).replace(`*`,``),puntiGaraNoi:c,puntiGaraLoro:l,progNoi:o,progLoro:s})});let c=n.length||1,l=(i.fatti/c).toFixed(1),u=(i.subiti/c).toFixed(1),d=document.getElementById(`containerTabellaStats`);d.innerHTML=`
        <table style="width:100%; border-collapse: collapse; text-align: center; font-size: 1.1rem; margin-bottom: 20px;">
            <tr style="background: #27ae60; color: white;">
                <th style="padding:10px; border:1px solid #ddd;">Vinte</th>
                <th style="padding:10px; border:1px solid #ddd;">Perse</th>
                <th style="padding:10px; border:1px solid #ddd;">Punti Fatti</th>
                <th style="padding:10px; border:1px solid #ddd;">Punti Subiti</th>
            </tr>
            <tr>
                <td style="padding:12px; border:1px solid #ddd; color:green; font-weight:bold;">${i.vinte}</td>
                <td style="padding:12px; border:1px solid #ddd; color:red; font-weight:bold;">${i.perse}</td>
                <td style="padding:12px; border:1px solid #ddd; font-weight:bold;">${i.fatti}</td>
                <td style="padding:12px; border:1px solid #ddd; font-weight:bold;">${i.subiti}</td>
            </tr>
        </table>
    `;let f=document.getElementById(`toggleTipoGrafico`).checked;r(a,f,l,u)}function r(t,n,r,i){let a=document.getElementById(`canvasStatsCampionato`).getContext(`2d`);e&&e.destroy();let o=n?`Progressivo Polismile A`:`Punti Polismile A`,s=n?`Progressivo Avversari`:`Punti Avversari`,c=t.map(e=>n?e.progNoi:e.puntiGaraNoi),l=t.map(e=>n?e.progLoro:e.puntiGaraLoro),u=[{label:o,data:c,borderColor:`#dc3545`,backgroundColor:`rgba(220, 53, 69, 0.1)`,fill:n,tension:.3,pointRadius:2,pointHoverRadius:4},{label:s,data:l,borderColor:`#0056b3`,backgroundColor:`rgba(0, 86, 179, 0.1)`,fill:n,tension:.3,pointRadius:2,pointHoverRadius:4}];!n&&r&&i&&(u.push({label:`Media Polismile`,data:Array(t.length).fill(r),borderColor:`#dc3545`,borderDash:[5,5],borderWidth:2,fill:!1,pointRadius:0,pointStyle:`line`}),u.push({label:`Media Avversari`,data:Array(t.length).fill(i),borderColor:`#0056b3`,borderDash:[5,5],borderWidth:2,fill:!1,pointRadius:0,pointStyle:`line`})),e=new Chart(a,{type:`line`,data:{labels:t.map(e=>e.data),datasets:u},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:`index`,intersect:!1},scales:{y:{beginAtZero:!0}},plugins:{legend:{position:`bottom`,labels:{usePointStyle:!0}}}}})}async function i(){let e=document.getElementById(`badge-allenamenti`),t=localStorage.getItem(`cache_allenamenti`)||``;try{let n=await readFromFirebaseHistory(`allenamenti/`);n&&(JSON.stringify(n).trim()===t.trim()?e.style.display=`none`:e.style.display=`block`)}catch(e){console.error(`Errore verifica novità:`,e)}}async function a(){let e=document.getElementById(`badge-fip`),t=localStorage.getItem(`FIP_DATA_CACHE`);try{let n=await readFromFirebaseHistory(`classificheFIP/`);if(n){let r=JSON.stringify(n);(!t||t.trim()!==r.trim())&&(e.style.display=`block`)}}catch(e){console.error(`Errore verifica novità FIP:`,e)}}function o(e){if(!e||e.length===0)return``;let t=new Date;t.setHours(0,0,0,0);let n=[`Gennaio`,`Febbraio`,`Marzo`,`Aprile`,`Maggio`,`Giugno`,`Luglio`,`Agosto`,`Settembre`,`Ottobre`,`Novembre`,`Dicembre`],r=[`Dom`,`Lun`,`Mar`,`Mer`,`Gio`,`Ven`,`Sab`],i=e=>{let[t,n,r]=e.split(`/`).map(Number);return new Date(r,n-1,t)},a=e=>{let t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()));t.setUTCDate(t.getUTCDate()+4-(t.getUTCDay()||7));let n=new Date(Date.UTC(t.getUTCFullYear(),0,1));return Math.ceil(((t-n)/864e5+1)/7)},o=``,s=null;return e.forEach((c,l)=>{let u=i(c[0]),d=c[1],f=a(u);if(f!==s){let t=e.filter(e=>a(i(e[0]))===f),r=i(t[0][0]),c=i(t[t.length-1][0]),l=r.getMonth()===c.getMonth()?`${r.getDate()}-${c.getDate()} ${n[r.getMonth()]} ${r.getFullYear()}`:`${r.getDate()} ${n[r.getMonth()]} - ${c.getDate()} ${n[c.getMonth()]} ${c.getFullYear()}`;s!==null&&(o+=`<br><br>`),o+=`<u><b>SETTIMANA ${l}</b></u><br><br>`,s=f}let p=`<b>${r[u.getDay()]} ${u.getDate()}</b> - ${d}`;u.getTime()===t.getTime()?p=`<mark>${p}</mark>`:u<t&&(p=`<s>${p}</s>`),o+=p,l<e.length-1&&a(i(e[l+1][0]))===f&&(o+=`<br><br>`)}),o}async function s(){let e=document.getElementById(`training-content`),t=document.getElementById(`trainingPopup`),n=document.getElementById(`training-icon`);t.classList.remove(`hidden`),t.style.display=`flex`,e.innerHTML=`Caricamento in corso...`,localStorage.getItem(`isAdmin`)===`true`&&(n.onclick=async()=>{n&&n.classList.add(`spinning`);try{let t=new URLSearchParams({sheet:`Allenamenti`,userId,action:`GetAllenamenti`,details:JSON.stringify(getDeviceData)});fetch(`${url}?${t.toString()}`).then(e=>e.json()).then(t=>{t.status===`success`&&Array.isArray(t.data)&&t.data.length>0?(localStorage.setItem(`cache_allenamenti`,JSON.stringify(t.data)),window.saveToFirebaseHistory(`allenamenti/`,t.data),e.innerHTML=o(t.data)):e.innerHTML=`<i>Nessun allenamento programmato.</i>`}).finally(()=>{n&&n.classList.remove(`spinning`)})}catch(e){alert(`Errore aggiornamento: `+e.message)}});try{let t=await readFromFirebaseHistory(`allenamenti/`);if(t){e.innerHTML=o(t),localStorage.setItem(`cache_allenamenti`,JSON.stringify(t));return}}catch{console.warn(`Impossibile leggere da Firebase, provo cache locale...`)}let r=localStorage.getItem(`cache_allenamenti`);r?e.innerHTML=o(JSON.parse(r)):e.innerHTML=`Dati non disponibili. Controlla la connessione.`}window.ShowAllenamenti=s;function c(){document.getElementById(`trainingPopup`).style.display=`none`}window.closePopupTraining=c;function l(){let e=document.getElementById(`btn-live`),t=document.getElementById(`live-text`),n=localStorage.getItem(`isAdmin`)===`true`,r=new URLSearchParams({sheet:`Partite`,userId,action:`Get Partite Live`,details:JSON.stringify(getDeviceData)});fetch(`${url}?${r.toString()}`).then(e=>e.json()).then(r=>{let i=[];r&&(i=Array.isArray(r)?r:r.data||[]),localStorage.setItem(`cache_partite`,JSON.stringify(i));let a=i.find(e=>{if(!e)return!1;let t=e.isLive===`true`||e.isLive===!0;if(n)return t;let r=String(e.matchId||``);return t&&(r.includes(`U14`)||r.includes(`U15`))&&!r.toLowerCase().includes(`test`)});if(a){let n=a.punteggioA!==void 0&&a.punteggioA!==``?a.punteggioA:0,r=a.punteggioB!==void 0&&a.punteggioB!==``?a.punteggioB:0;t.innerHTML=`${a.squadraA}<br>vs<br>${a.squadraB}<br><span style="font-size: 2rem; color: #ff0000; display: block; margin-top: 5px;">${n} - ${r}</span>`,e.classList.replace(`live-off`,`live-active`)}else t.innerHTML=`Live`,e.classList.replace(`live-active`,`live-off`)}).catch(n=>{console.error(`Errore nel fetch partite live:`,n),e&&e.classList.replace(`live-active`,`live-off`),t&&(t.innerHTML=`Live`)}),aggiornaDatiRosterEStats().then(e=>{if(n&&e&&e.roster){let t=JSON.stringify(e.roster);t!==localStorage.getItem(`last_roster_firebase_sync`)&&(saveToFirebaseRoster(`roster/`,e.roster),localStorage.setItem(`last_roster_firebase_sync`,t))}})}function u(){document.getElementById(`customPopup`).style.display=`none`}async function d(){try{await window.registerUserId(),window.updateThemeBasedOnAdmin();let e=document.getElementById(`logo-admin`);if(e){let t=0;e.addEventListener(`click`,function(){let e=new Date().getTime();e-t<300&&e-t>0&&Login(),t=e})}l(),i(),a(),setInterval(l,1e4)}catch(e){console.error(e)}}document.addEventListener(`DOMContentLoaded`,d),window.onclick=e=>{e.target==document.getElementById(`customPopup`)&&u()};