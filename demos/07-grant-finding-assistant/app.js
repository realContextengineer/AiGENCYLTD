const grants = [
  {
    id: 'WF-CCF-26', name: 'Coastal Communities Fund', funder: 'West Shore Foundation', amount: '£5k — £20k', amountRequested: '£15,000', deadline: '22 Sep 2026', shortDeadline: '22 SEP', match: 'strong', score: 92, theme: 'Community wellbeing', geography: 'Dorset',
    description: 'Support for locally-led projects that improve belonging and practical support in coastal communities.',
    watch: 'Evidence of community involvement is still needed.',
    reasons: [['Dorset', 'Local delivery', 'ok'], ['CIC', 'CIC / charity', 'ok'], ['Community wellbeing', 'Community support', 'ok'], ['£15,000 requested', '£5k — £20k', 'ok']]
  },
  {
    id: 'LT-SCS-26', name: 'Small Charities Spark', funder: 'The Lumen Trust', amount: '£2k — £10k', amountRequested: '£7,500', deadline: '04 Oct 2026', shortDeadline: '04 OCT', match: 'strong', score: 86, theme: 'Core costs', geography: 'UK',
    description: 'Flexible support for small organisations strengthening their core work and community reach.',
    watch: 'Check the funder definition of small charity before applying.',
    reasons: [['UK', 'UK-wide', 'ok'], ['Small organisation', 'Income under £500k', 'ok'], ['Core costs', 'Unrestricted support', 'ok'], ['£7,500 requested', '£2k — £10k', 'ok']]
  },
  {
    id: 'OH-DAT-26', name: 'Digital Access Together', funder: 'Open Hand Fund', amount: '£10k — £30k', amountRequested: '£20,000', deadline: '18 Oct 2026', shortDeadline: '18 OCT', match: 'possible', score: 64, theme: 'Digital inclusion', geography: 'South West',
    description: 'Projects that reduce digital exclusion through practical support, access and confidence building.',
    watch: 'The current profile does not yet show a digital inclusion workstream.',
    reasons: [['South West', 'South West delivery', 'ok'], ['CIC', 'CIC / charity', 'ok'], ['Digital inclusion', 'Access and confidence', 'warn'], ['£20,000 requested', '£10k — £30k', 'ok']]
  },
  {
    id: 'MG-AAC-26', name: 'Active Ageing Challenge', funder: 'Morrow Giving', amount: '£15k — £50k', amountRequested: '£30,000', deadline: '31 Oct 2026', shortDeadline: '31 OCT', match: 'possible', score: 58, theme: 'Older people', geography: 'England',
    description: 'Collaborative work that helps older people stay connected, active and supported in their communities.',
    watch: 'The beneficiary focus needs a clearer fit with the current organisation profile.',
    reasons: [['England', 'England-wide', 'ok'], ['CIC', 'Charity / CIC', 'ok'], ['Older people', 'Active ageing', 'warn'], ['£30,000 requested', '£15k — £50k', 'ok']]
  }
];

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
}

function showView(viewName) {
  const view = viewName === 'find-funding' ? 'matches' : viewName;
  $$('.view-panel').forEach(panel => panel.classList.toggle('active', panel.id === `view-${view}`));
  $$('.side-nav-item').forEach(item => item.classList.toggle('active', item.dataset.view === view && !(view === 'matches' && item.dataset.secondaryMatch)));
  const current = $(`#view-${view}`);
  if (current) document.title = `GrantFinder — ${current.dataset.title}`;
  $('#sidebar')?.classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderMatches() {
  const query = ($('#grantSearch')?.value || '').trim().toLowerCase();
  const filter = $('#grantFilter')?.value || 'all';
  const visible = grants.filter(grant => {
    const haystack = `${grant.name} ${grant.funder} ${grant.theme} ${grant.geography}`.toLowerCase();
    return (!query || haystack.includes(query)) && (filter === 'all' || grant.match === filter);
  });
  const count = $('#resultCount');
  if (count) count.textContent = `${visible.length} opportunit${visible.length === 1 ? 'y' : 'ies'}`;
  const list = $('#grantList');
  if (!list) return;
  list.innerHTML = visible.length ? visible.map(grant => `
    <article class="grant-dossier">
      <div class="dossier-top"><div class="dossier-score">${grant.score}<small>%</small></div><span class="dossier-status ${grant.match}">${grant.match === 'strong' ? 'Strong match' : 'Possible match'}</span></div>
      <h3>${escapeHtml(grant.name)}</h3>
      <p class="dossier-funder">${escapeHtml(grant.funder)}</p>
      <div class="dossier-meta"><span><small>Funding</small><strong>${escapeHtml(grant.amount)}</strong></span><span><small>Deadline</small><strong>${escapeHtml(grant.shortDeadline)}</strong></span></div>
      <div class="dossier-tags"><span class="dossier-tag">${escapeHtml(grant.geography)}</span><span class="dossier-tag">${escapeHtml(grant.theme)}</span><span class="dossier-tag">CIC</span></div>
      <div class="dossier-footer"><button class="text-button grant-open" data-name="${escapeHtml(grant.name)}">Why it matches <span>→</span></button><button class="button button-small button-outline grant-open" data-name="${escapeHtml(grant.name)}">Open</button></div>
    </article>`).join('') : '<div class="rail-card"><h3>No close matches yet.</h3><p>Try a wider theme, place or match level.</p></div>';
}

function renderDetail(grant) {
  const content = $('#detailContent');
  if (!content) return;
  $('#detailId').textContent = grant.id;
  content.innerHTML = `
    <div class="detail-hero"><div><div class="eyebrow">Grant analysis / ${escapeHtml(grant.funder)}</div><h1>${escapeHtml(grant.name)}</h1><p>${escapeHtml(grant.description)}</p></div><div class="detail-actions"><button class="button button-blue" id="detailStart">Start application</button><button class="button button-outline js-toast" data-message="${escapeHtml(grant.name)} saved to your shortlist.">Save</button></div></div>
    <div class="detail-grid"><section class="detail-main"><div class="detail-stat-row"><span><small>Funding available</small><strong>${escapeHtml(grant.amount)}</strong></span><span><small>Deadline</small><strong class="deadline-text">${escapeHtml(grant.deadline)}</strong></span><span><small>Match score</small><strong>${grant.score}%</strong></span></div><div class="detail-tabs"><button class="detail-tab active" data-detail-tab="overview">Overview</button><button class="detail-tab" data-detail-tab="eligibility">Eligibility</button><button class="detail-tab" data-detail-tab="evidence">Evidence needed</button><button class="detail-tab" data-detail-tab="questions">Application questions</button><button class="detail-tab" data-detail-tab="source">Source</button></div><div class="detail-tab-content" data-detail-content="overview"><h3>Why it matches</h3><p>${escapeHtml(grant.description)} GrantFinder has compared the published criteria with your current organisation profile and surfaced the points below for human review.</p><div class="reason-matrix"><div class="matrix-head">You</div><div class="matrix-head">Funder wants</div><div class="matrix-head">Fit</div>${grant.reasons.map(reason => `<div>${escapeHtml(reason[0])}</div><div>${escapeHtml(reason[1])}</div><div class="matrix-${reason[2]}">${reason[2] === 'ok' ? '✓' : '!'}</div>`).join('')}</div><h3>Possible route</h3><div class="watch-note"><span>!</span><p><strong>One thing to check</strong> ${escapeHtml(grant.watch)}</p></div></div><div class="detail-tab-content hidden" data-detail-content="eligibility"><h3>What to check</h3><p>Confirm the current funder guidance, organisation eligibility and any geographic or beneficiary restrictions before treating this as an eligible opportunity.</p></div><div class="detail-tab-content hidden" data-detail-content="evidence"><h3>Evidence needed</h3><p>Community involvement evidence is the main open item. The active workspace already has the impact report, attendance data and participant survey available for review.</p></div><div class="detail-tab-content hidden" data-detail-content="questions"><h3>Application questions</h3><p>Use the evidence-backed application workspace to draft responses, check the word count and keep human review visible before anything is submitted.</p><button class="button button-blue" id="detailStartQuestions">Open questions workspace</button></div><div class="detail-tab-content hidden" data-detail-content="source"><h3>Source</h3><p>West Shore Foundation · Coastal Communities Fund guidance · refreshed 07 Aug 2026.</p><div class="source-note"><span class="status-dot"></span>Research-backed demo source</div></div></section><aside><div class="detail-side-card"><span class="eyebrow blue-eyebrow">Match to your profile</span><div class="side-score">${grant.score}<span>%</span></div><p>Match score = fit to published criteria. It is not a predicted probability of receiving funding.</p><div class="mini-bars"><div><span>Geography</span><i><b style="width:100%"></b></i><strong>100</strong></div><div><span>Organisation</span><i><b style="width:100%"></b></i><strong>100</strong></div><div><span>Theme</span><i><b style="width:94%"></b></i><strong>94</strong></div><div><span>Amount</span><i><b style="width:88%"></b></i><strong>88</strong></div><div><span>Evidence</span><i><b style="width:76%"></b></i><strong>76</strong></div></div></div><div class="detail-side-card pale-rail"><span class="eyebrow">Human review</span><p>GrantFinder explains the match. A person still checks eligibility and owns the application.</p><button class="text-button" id="detailWorkspace">Open application workspace <span>→</span></button></div></aside></div>`;
  showView('grant-detail');
}

function openGrant(name) {
  const grant = grants.find(item => item.name === name);
  if (grant) renderDetail(grant);
}

function activateApplicationTab(name) {
  $$('.workspace-tab').forEach(tab => tab.classList.toggle('active', tab.dataset.tab === name));
  $$('.application-tab-panel').forEach(panel => panel.classList.toggle('active', panel.id === name));
}

function bindViewNavigation() {
  document.addEventListener('click', event => {
    const viewTrigger = event.target.closest('[data-view]');
    if (viewTrigger) {
      event.preventDefault();
      showView(viewTrigger.dataset.view);
      return;
    }
    const grantTrigger = event.target.closest('.grant-open');
    if (grantTrigger) {
      openGrant(grantTrigger.dataset.name);
      return;
    }
    const tab = event.target.closest('.workspace-tab');
    if (tab) {
      activateApplicationTab(tab.dataset.tab);
      return;
    }
    const detailTab = event.target.closest('.detail-tab');
    if (detailTab) {
      $$('.detail-tab').forEach(item => item.classList.toggle('active', item === detailTab));
      $$('[data-detail-content]').forEach(panel => panel.classList.toggle('hidden', panel.dataset.detailContent !== detailTab.dataset.detailTab));
      return;
    }
    if (event.target.closest('#detailStart, #detailWorkspace, #detailStartQuestions')) {
      showView('applications');
      if (event.target.closest('#detailStartQuestions')) activateApplicationTab('application-questions');
      return;
    }
    const toastTrigger = event.target.closest('.js-toast, .js-evidence');
    if (toastTrigger) toast(toastTrigger.dataset.message || 'Demo action complete.');
  });
}

function wireControls() {
  $('#grantSearch')?.addEventListener('input', renderMatches);
  $('#grantFilter')?.addEventListener('change', renderMatches);
  $('#clearFilter')?.addEventListener('click', () => { $('#grantSearch').value = ''; $('#grantFilter').value = 'all'; renderMatches(); });
  $('#rank')?.addEventListener('click', () => {
    const list = $('#grantList');
    list?.classList.add('hidden');
    setTimeout(() => { list?.classList.remove('hidden'); renderMatches(); toast('Ranking refreshed against geography, theme, organisation and evidence fit.'); }, 240);
  });
  $('#commandInput')?.addEventListener('input', event => {
    const query = event.target.value;
    if (!query) return;
    $('#grantSearch').value = query;
    showView('matches');
    renderMatches();
  });
  $('#reviewFeatured')?.addEventListener('click', () => openGrant('Coastal Communities Fund'));
  $('#startApplication')?.addEventListener('click', () => showView('applications'));
  $('#draftAnswer')?.addEventListener('click', () => {
    activateApplicationTab('application-questions');
    const draft = $('#draft');
    draft.textContent = 'Draft: Coastline Futures CIC will run six neighbourhood circles across Dorset, creating a regular, low-pressure place for adults experiencing isolation to reconnect, share practical support and build confidence. This draft is based on the organisation profile and requires human review.';
    draft.classList.remove('hidden');
    toast('Draft prepared from the evidence currently in the workspace.');
  });
  $('#seeDetailFromApp')?.addEventListener('click', () => openGrant('Coastal Communities Fund'));
  $('#mobileMenu')?.addEventListener('click', () => $('#sidebar')?.classList.toggle('open'));
  $('#runAgent')?.addEventListener('click', () => {
    const result = $('#agentResult');
    result.classList.remove('hidden');
    toast('Agent request completed with a human-reviewable shortlist.');
  });
  $('#viewRaw')?.addEventListener('click', () => $('#rawAgent')?.classList.toggle('hidden'));
}

document.addEventListener('DOMContentLoaded', () => {
  bindViewNavigation();
  wireControls();
  renderMatches();
});
