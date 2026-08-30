import{a as e,n as t,r as n,t as r}from"./websiteCheck.DejUMNuT.js";var i=window.__CHECK_STRINGS__,a=document.getElementById(`check-form`),o=document.getElementById(`check-url`),s=document.getElementById(`check-status`),c=document.getElementById(`check-results`),l=document.getElementById(`check-placeholder`),u=document.getElementById(`check-error`),d=document.getElementById(`check-error-text`),f=document.getElementById(`check-error-cta`),p=document.querySelector(`[data-submit-label]`),m=a?.querySelector(`button[type="submit"]`),h=``,g=[`performance`,`accessibility`,`bestPractices`,`seo`];function _(e,n){let r=t(e),a=2*Math.PI*26;return`
      <div class="score score--${r}">
        <svg viewBox="0 0 60 60" aria-hidden="true">
          <circle class="score__track" cx="30" cy="30" r="26"></circle>
          <circle class="score__value" cx="30" cy="30" r="26"
            stroke-dasharray="${a}" stroke-dashoffset="${a*(1-e/100)}"></circle>
        </svg>
        <span class="score__num">${e}</span>
        <span class="score__label">${n}</span>
        <span class="score__band">${i.scale[r]}</span>
      </div>`}a?.addEventListener(`submit`,async a=>{if(a.preventDefault(),!(!o||!s)){m&&(m.disabled=!0),p&&(p.textContent=i.running),u&&(u.hidden=!0),s.textContent=i.runningNote,s.dataset.state=`busy`;try{let r=await e(o.value,h);document.getElementById(`result-url`).textContent=r.finalUrl,document.getElementById(`result-scores`).innerHTML=g.map(e=>_(r.scores[e],i.categories[e])).join(``),document.getElementById(`result-vitals`).innerHTML=r.vitals.map(e=>`
          <div class="vital vital--${t(Math.round(e.score*100))}">
            <dt class="vital__label">${i.vitals[e.id]}</dt>
            <dd class="vital__value">${n(e.display)}</dd>
          </div>`).join(``);let a=document.getElementById(`result-opps`);a.innerHTML=r.opportunities.length?r.opportunities.map(e=>`
              <li class="opp">
                <span class="opp__title">${n(e.title)}</span>
                <span class="opp__saving">${(e.savingsMs/1e3).toFixed(1)}s ${i.savingsLabel}</span>
              </li>`).join(``):`<li class="opp opp--none">${i.opportunitiesNone}</li>`,c.hidden=!1,l.hidden=!0,s.textContent=``,delete s.dataset.state,c.scrollIntoView({behavior:`smooth`,block:`start`})}catch(e){let t=e instanceof r?e.kind:`failed`,n=t===`invalid`&&!o.value.trim()?`empty`:t;s.textContent=``,delete s.dataset.state,d.textContent=i.errors[n]??i.errors.failed;let a=o.value.trim();f.setAttribute(`href`,`mailto:${i.email}?subject=${encodeURIComponent(i.errorSubject)}${a?`&body=${encodeURIComponent(a)}`:``}`),u.hidden=!1}finally{m&&(m.disabled=!1),p&&(p.textContent=i.submit)}}});var v=new URLSearchParams(window.location.search).get(`url`);v&&o&&a&&(o.value=v,a.requestSubmit());