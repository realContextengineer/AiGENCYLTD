const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const app = $('#northstarApp');
const grid = $('#dashboardGrid');
const SETTINGS_KEY = 'northstar.settings';
const MODE_KEY = 'northstar.userMode';
const PREF_KEY = 'northstar.preferences';
const CHECK_KEY = 'northstar.checklist';
const officialLinks = {
  local: 'https://www.fid.bcpcouncil.gov.uk/send-local-offer',
  advice: 'https://sendiass4bcp.org/'
};

let toastTimer;
function toast(message) {
  const node = $('#toast');
  node.textContent = message;
  node.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => node.classList.remove('show'), 2800);
}

function safeJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}

function button(label, action, extra = '') {
  return `<button class="button ${extra}" data-action="${action}">${label}</button>`;
}

function youngDashboard() {
  return `
    <article class="tile tile-periwinkle span-8 tile-timeline tile-next">
      <div class="tile-label"><span class="tile-kicker">WHAT'S NEXT · TUESDAY</span><span class="tag">10:30 · 3 things</span></div>
      <div class="next-layout"><div><h3>Tuesday's review</h3><p>Prepare, meet and review at your own pace. You can bring someone, pause or ask for a different way of saying something.</p><div class="next-callout"><strong>One next step</strong><span>Write down what you want people to understand.</span></div></div><figure class="next-media"><img class="next-photo" src="assets/meeting-prep.png" data-ai-generated="true" aria-describedby="meetingImageDisclosure" alt="Young person talking with a trusted adult at a table"><figcaption id="meetingImageDisclosure">AI-generated image · fictional people, not real people</figcaption></figure></div>
      <div class="timeline-track"><span class="timeline-step done">BOOK</span><span class="timeline-step active">PREPARE</span><span class="timeline-step">MEET</span><span class="timeline-step">REVIEW</span><span class="timeline-step">NEXT STEP</span></div>
      <div class="tile-actions">${button('Prepare with me','open-checklist')} ${button('What will happen?','meeting','light-button')} ${button('Ask Alex','message-alex','text-button')}</div>
    </article>
    <article class="tile tile-mint span-4 tile-people">
      <div class="tile-label"><span class="tile-kicker">MY PEOPLE</span><span class="tag">3 people</span></div><h3>You don't have to hold it alone.</h3><div class="people-list"><div class="person"><span class="avatar">A</span><div><strong>Alex</strong><small>Review support</small></div>${button('Message','message-alex','light-button')}</div><div class="person"><span class="avatar">S</span><div><strong>Sam</strong><small>College link</small></div>${button('Call','call-sam','light-button')}</div><div class="person"><span class="avatar">M</span><div><strong>Mum</strong><small>Chosen support</small></div>${button('Share','share-mum','light-button')}</div></div>
    </article>
    <article class="tile tile-lavender span-4 tile-checklist" id="checklistTile">
      <div class="tile-label"><span class="tile-kicker">PREPARE</span><span id="checkCount" class="tag">2 / 4 ready</span></div><h3 id="checkMessage">You're ready enough.</h3><p class="tile-support-copy">Keep it concrete. There is no perfect way to prepare.</p><div class="progress-line"><span id="checkProgress"></span></div><div class="check-list"><label class="check-row"><input type="checkbox" data-check="0"> Write what has been working</label><label class="check-row"><input type="checkbox" data-check="1"> Choose one thing to change</label><label class="check-row"><input type="checkbox" data-check="2" checked> Add a question</label><label class="check-row"><input type="checkbox" data-check="3" checked> Choose who comes with me</label></div>
    </article>
    <article class="tile tile-peach span-8 translator tile-explain">
      <div class="tile-label"><span class="tile-kicker">EXPLAIN THIS</span><span class="tag">Human-checkable</span></div><h3>A few words, made easier to hold.</h3><p class="tile-support-copy">Keep the original close, then choose the kind of explanation that helps.</p><div class="original-copy"><span>ORIGINAL</span><p>“The local authority will review the provision outlined in Section F before the next annual meeting.”</p></div><textarea id="translatorInput" rows="2" aria-label="Text to explain">The local authority will review the provision outlined in Section F before the next annual meeting.</textarea><div class="tile-actions">${button('Plain English','translate-plain','light-button')} ${button('Shorter','translate-short','light-button')} ${button('Step by step','translate-steps','light-button')} ${button('Show original','translate-original','text-button')}</div><div class="translation-result"><span>PLAIN ENGLISH</span><div id="translatorOutput" class="translator-output" aria-live="polite">The council will check the support in section F before the next yearly meeting.</div></div></article>
    <article class="tile tile-navy span-4 tile-ehcp optional-tile"><div class="tile-label"><span class="tile-kicker">EHCP</span><span class="tag">A plan, not a label</span></div><h3>A plan can bring people together.</h3><p>An Education, Health and Care plan describes support for some children and young people up to age 25. It is not a diagnosis.</p><div class="tile-actions">${button('Explain the journey','ehcp-explain','light-button')}</div></article>
    <article class="tile tile-white span-8 tile-waiting optional-tile"><div class="tile-label"><span class="tile-kicker">WAITING FOR AN ASSESSMENT?</span><span class="tag">Support can still happen</span></div><h3>You can ask what happens now.</h3><p>Waiting does not mean everything has to stop. Try the route that feels most useful.</p><div class="mini-list"><div class="mini-row"><strong>Ask school or college about support now</strong>${button('Start','human-route','light-button')}</div><div class="mini-row"><strong>Prepare questions and send information</strong>${button('Make a list','meeting','light-button')}</div><div class="mini-row"><strong>Talk to a person who knows the route</strong>${button('Find advice','open-advice','light-button')}</div></div><small class="muted">Northstar is fictional. For official local information, use the BCP Local Offer or independent SENDiass4BCP.</small></article>
    <article class="tile tile-navy span-7 tile-journey"><div class="tile-label"><span class="tile-kicker">WHERE AM I?</span><span class="tag">Your route may differ</span></div><h3>Keep the next conversation clear.</h3><p>There is more than one way through. Your current stage is highlighted.</p><div class="journey"><div class="journey-item done"><i></i><span>Noticed something</span></div><div class="journey-item done"><i></i><span>Talked to support</span></div><div class="journey-item active"><i></i><span>Support tried</span></div><div class="journey-item"><i></i><span>Review what helps</span></div><div class="journey-item"><i></i><span>Decide the next step</span></div></div></article>
    <article class="tile tile-periwinkle span-8 tile-future optional-tile"><div class="tile-label"><span class="tile-kicker">PREPARING FOR ADULTHOOD</span><span class="tag">Small steps count</span></div><h3>What matters to you next?</h3><p>These conversations can grow with you: work, learning, health, independence, friends and community.</p><div class="future-list"><span>Work</span><span>Learning</span><span>Health</span><span>Independence</span><span>Community</span></div></article>
    ${humanTile()}
    <article class="tile tile-white span-5 tile-words secondary-module">
      <div class="tile-label"><span class="tile-kicker">MY WORDS</span><span class="tag">You choose</span></div><h3>How I want people to work with me.</h3><p id="preferenceText">I need a little time to think. Please say the important bit first.</p>
      <div id="preferenceEditorWrap"></div><div class="tile-actions">${button('Edit my preferences','edit-preferences')}</div>
    </article>
    <article class="tile tile-butter span-4 row-2 tile-today secondary-module">
      <div class="tile-label"><span class="tile-kicker">TODAY · TUESDAY</span><span class="tag">3 things</span></div>
      <h3>Good morning, Maya.</h3><p>One small thing to prepare. One person to contact. You can take your time.</p>
      <div class="mini-list"><div class="mini-row"><div><strong>Review meeting prep</strong><small>3 simple steps · due today</small></div><span>→</span></div><div class="mini-row"><div><strong>Message Alex</strong><small>Your named support person</small></div><span>→</span></div></div>
      <div class="tile-actions">${button('Open my checklist','open-checklist')}</div>
    </article>
    ${localTile()}`;
}

function humanTile() {
  return `<article class="tile human-help span-5 tile-human"><div class="tile-label"><span class="tile-kicker">HUMAN HELP · ALWAYS VISIBLE</span><span class="tag">Your choice</span></div><h3>Want a person, not a portal?</h3><p>It is okay to ask for help understanding the route. You do not have to use Northstar.</p><div class="tile-actions">${button('Talk to somebody','human-route')} ${button('Find independent advice','open-advice','light-button')}</div></article>`;
}

function localTile() {
  return `<article class="tile tile-mint span-8 local-card optional-tile"><div><div class="tile-label"><span class="tile-kicker">LOCAL SUPPORT · BCP AREA</span><span class="tag">External sources</span></div><h3>Useful places to check next.</h3><p>Official local information and independent advice are one click away.</p><div class="source-mini"><a href="${officialLinks.local}" target="_blank" rel="noopener noreferrer"><span>BCP SEND Local Offer</span><small>Official local information ↗</small></a><a href="${officialLinks.advice}" target="_blank" rel="noopener noreferrer"><span>SENDiass4BCP</span><small>Independent SEND advice ↗</small></a></div></div></article>`;
}

function parentDashboard() {
  return `<article class="tile tile-butter span-4 row-2 tile-today"><div class="tile-label"><span class="tile-kicker">PARENT / CARER VIEW</span><span class="tag">Today</span></div><h3>What is the next useful conversation?</h3><p>You do not need a perfect explanation before asking what support could look like now.</p><div class="mini-list"><div class="mini-row"><div><strong>Write down what you notice</strong><small>Keep it concrete and ordinary</small></div><span>01</span></div><div class="mini-row"><div><strong>Ask the school or college</strong><small>What can happen this term?</small></div><span>02</span></div><div class="mini-row"><div><strong>Keep your child’s voice close</strong><small>What do they want people to know?</small></div><span>03</span></div></div>${button('Make a question list','meeting')}</article><article class="tile tile-periwinkle span-8 tile-timeline"><div class="tile-label"><span class="tile-kicker">YOUR ROUTE TODAY</span><span class="tag">Keep moving gently</span></div><h3>Worried about your child? Start with what is happening.</h3><p>Ask about SEN support, the Graduated Response, the next review and who can explain the local route.</p><div class="timeline-track"><span class="timeline-step active">NOTICE</span><span class="timeline-step">TALK</span><span class="timeline-step">TRY SUPPORT</span><span class="timeline-step">REVIEW</span><span class="timeline-step">NEXT STEP</span></div>${button('Prepare for a meeting','meeting','light-button')}</article><article class="tile tile-mint span-4"><div class="tile-label"><span class="tile-kicker">CHILD’S VOICE</span><span class="tag">Keep visible</span></div><h3>What would make this easier for them?</h3><p>Ask about language, time, people, places and what feels possible. A child or young person may describe it differently.</p>${button('Save a note','save-note','light-button')}</article><article class="tile tile-lavender span-4"><div class="tile-label"><span class="tile-kicker">SCHOOL / COLLEGE</span><span class="tag">Ask SENCO</span></div><h3>There may be support before a formal decision.</h3><p>Ask what has been tried, what is being reviewed and when you will talk again.</p>${button('Questions for SENCO','meeting','light-button')}</article><article class="tile tile-peach span-8 translator optional-tile"><div class="tile-label"><span class="tile-kicker">PLAIN ENGLISH</span><span class="tag">Bring the wording</span></div><h3>Turn one sentence into a conversation.</h3><p>Paste a sentence you want to understand. Northstar can simplify words; a person should help with decisions.</p><textarea id="translatorInput" rows="2" aria-label="Text to explain">The local authority will review the provision outlined in Section F before the next annual meeting.</textarea><div class="tile-actions">${button('Plain English','translate-plain','light-button')} ${button('Step by step','translate-steps','light-button')}</div><div id="translatorOutput" class="translator-output">The council will check the support in section F before the next yearly meeting.</div></article><article class="tile tile-white span-4 optional-tile"><div class="tile-label"><span class="tile-kicker">EHCP / WAITING</span><span class="tag">No diagnosis shortcut</span></div><h3>Support and assessment are different questions.</h3><p>You can ask what help is available now while you wait for an assessment or further information.</p>${button('Find local advice','open-advice','light-button')}</article>${humanTile()}${localTile()}`;
}

function practitionerDashboard() {
  return `<article class="tile tile-navy span-4 row-2 tile-today"><div class="tile-label"><span class="tile-kicker">PRACTITIONER VIEW</span><span class="tag">Human-led</span></div><h3>Make the next conversation clearer.</h3><p>Keep the child or young person’s view, the family conversation and the next review visible together.</p><div class="mini-list"><div class="mini-row"><strong>Graduated Response</strong><span>01</span></div><div class="mini-row"><strong>What has been tried?</strong><span>02</span></div><div class="mini-row"><strong>What does the child say?</strong><span>03</span></div></div>${button('Open conversation guide','meeting','light-button')}</article><article class="tile tile-periwinkle span-8"><div class="tile-label"><span class="tile-kicker">PRACTICE BOARD</span><span class="tag">Compact view</span></div><h3>Four questions that keep the route grounded.</h3><div class="future-list"><span>What is happening?</span><span>What helps?</span><span>What does the child want?</span><span>Who needs to talk?</span><span>When do we review?</span></div><p style="margin-top:18px">A clear record is useful when it leads to a clear next step.</p></article><article class="tile tile-mint span-4"><div class="tile-label"><span class="tile-kicker">DOCUMENT CHECKLIST</span><span class="tag">2 / 4</span></div><h3>Ready for the next review?</h3><div class="check-list"><label class="check-row"><input type="checkbox" data-check="0"> Child’s or young person’s view</label><label class="check-row"><input type="checkbox" data-check="1"> Family conversation</label><label class="check-row"><input type="checkbox" data-check="2"> Support tried and impact</label><label class="check-row"><input type="checkbox" data-check="3"> Local signposting</label></div></article><article class="tile tile-peach span-8 translator optional-tile"><div class="tile-label"><span class="tile-kicker">PLAIN-LANGUAGE EXPLANATION</span><span class="tag">Check with a person</span></div><h3>Make a formal sentence easier to enter.</h3><p>Use this as a drafting prompt, not an automated decision or assessment.</p><textarea id="translatorInput" rows="2" aria-label="Text to explain">The local authority will review the provision outlined in Section F before the next annual meeting.</textarea><div class="tile-actions">${button('Plain English','translate-plain','light-button')} ${button('Shorter','translate-short','light-button')} ${button('Step by step','translate-steps','light-button')}</div><div id="translatorOutput" class="translator-output">The council will check the support in section F before the next yearly meeting.</div></article><article class="tile tile-coral span-4 optional-tile"><div class="tile-label"><span class="tile-kicker">LOCAL SIGNPOSTING</span><span class="tag">BCP area</span></div><h3>Keep official routes close.</h3><p>Signpost to the BCP Local Offer, independent SEND advice and relevant health information.</p>${button('Open local sources','open-local','light-button')}</article>${humanTile()}${localTile()}`;
}

function renderDashboard(mode = 'young') {
  const title = mode === 'young' ? "Here's what matters today." : mode === 'parent' ? 'Start with the next useful conversation.' : 'Keep the next conversation clear.';
  $('#dashboardTitle').textContent = title;
  grid.innerHTML = mode === 'parent' ? parentDashboard() : mode === 'practitioner' ? practitionerDashboard() : youngDashboard();
  applyPrimaryHierarchy();
  $$('.mode-option').forEach(option => option.classList.toggle('active', option.dataset.mode === mode));
  restoreChecks();
  bindDashboardEvents();
  updateMoreButton();
}

function applyPrimaryHierarchy() {
  $$('.tile-ehcp,.tile-waiting,.tile-future,.local-card').forEach(tile => tile.classList.add('secondary-module'));
}

function updateMoreButton() {
  const more = $('#moreButton');
  if (!more) return;
  more.hidden = !$$('.secondary-module').length;
  more.setAttribute('aria-expanded', String(grid.classList.contains('show-secondary')));
  more.innerHTML = grid.classList.contains('show-secondary') ? '<span>−</span> Show less' : '<span>＋</span> See more from your workspace';
}

function restoreChecks() {
  const checks = safeJSON(CHECK_KEY, ['2', '3']);
  $$('[data-check]').forEach(input => { input.checked = checks.includes(input.dataset.check); });
  updateChecks();
}

function updateChecks() {
  const inputs = $$('[data-check]');
  const done = inputs.filter(input => input.checked).length;
  const total = inputs.length || 1;
  const count = $('#checkCount');
  const progress = $('#checkProgress');
  const message = $('#checkMessage');
  if (count) count.textContent = `${done} / ${total} ready`;
  if (progress) progress.style.width = `${Math.round(done / total * 100)}%`;
  if (message) message.textContent = 'You’re ready enough.';
  localStorage.setItem(CHECK_KEY, JSON.stringify(inputs.filter(input => input.checked).map(input => input.dataset.check)));
}

function bindDashboardEvents() {
  $$('[data-check]').forEach(input => input.addEventListener('change', updateChecks));
  $$('[data-action]').forEach(control => control.addEventListener('click', () => handleAction(control.dataset.action)));
  const preference = safeJSON(PREF_KEY, 'I need a little time to think. Please say the important bit first.');
  const preferenceText = $('#preferenceText');
  if (preferenceText && typeof preference === 'string') preferenceText.textContent = preference;
}

function handleAction(action) {
  if (action === 'open-checklist') { $('#checklistTile')?.scrollIntoView({behavior:'smooth', block:'center'}); toast('Checklist opened. One small step is enough.'); }
  else if (action === 'meeting') $('#meetingDialog').showModal();
  else if (action === 'edit-preferences') editPreferences();
  else if (action === 'save-preference') savePreference();
  else if (action === 'translate-plain' || action === 'translate-short' || action === 'translate-steps' || action === 'translate-original') translate(action.replace('translate-',''));
  else if (action === 'ehcp-explain') toast('An EHCP describes support. It is not a diagnosis and Northstar cannot decide eligibility.');
  else if (action === 'open-advice') window.open(officialLinks.advice, '_blank', 'noopener,noreferrer');
  else if (action === 'open-local') document.querySelector('#local-support')?.scrollIntoView({behavior:'smooth'});
  else if (action === 'message-alex') toast('Message draft opened for Alex.');
  else if (action === 'call-sam') toast('Call option opened for Sam.');
  else if (action === 'share-mum') toast('You choose what to share and with whom.');
  else if (action === 'human-route') toast('A human route is always okay. Start with someone you trust.');
  else if (action === 'save-note') toast('A note would be saved here on your device.');
}

function editPreferences() {
  const current = safeJSON(PREF_KEY, 'I need a little time to think. Please say the important bit first.');
  const wrap = $('#preferenceEditorWrap');
  if (!wrap) return;
  wrap.innerHTML = `<textarea class="preference-editor" id="preferenceEditor" rows="3" aria-label="Your working preferences">${String(current).replaceAll('<','&lt;')}</textarea>${button('Save preference','save-preference','light-button')}`;
  $('#preferenceEditor').focus();
}

function savePreference() {
  const value = $('#preferenceEditor')?.value.trim();
  if (!value) return toast('Add one thing that would help.');
  localStorage.setItem(PREF_KEY, JSON.stringify(value));
  $('#preferenceText').textContent = value;
  $('#preferenceEditorWrap').innerHTML = '';
  toast('Your preference is saved on this device.');
}

function translate(style) {
  const input = $('#translatorInput');
  const output = $('#translatorOutput');
  if (!input || !output) return;
  const text = input.value.trim();
  if (/\b(diagnos|autism|adhd|qualif|eligible)\w*/i.test(text)) {
    output.innerHTML = `<div class="safety-note">Northstar can't diagnose a condition or decide eligibility. I can help you organise what you've noticed and find an appropriate next step.</div>`;
    return;
  }
  const copy = {plain:'The council will check the support in section F before the next yearly meeting.',short:'The council will review section F before the next meeting.',steps:'1. Find section F. 2. The council checks the support. 3. This happens before the next yearly meeting.',original:text || 'No wording entered yet.'};
  output.textContent = copy[style] || copy.plain;
}

function loadSettings() {
  const saved = safeJSON(SETTINGS_KEY, {});
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) saved.reduced = true;
  applySettings(saved);
  $$('[data-setting]').forEach(control => { control.checked = Boolean(saved[control.dataset.setting]); });
}

function applySettings(settings) {
  const classes = ['calm','less','large','easy','contrast','reduced','focus'];
  classes.forEach(name => app.classList.toggle(`mode-${name}`, Boolean(settings[name])));
  const focus = $('#focusCanvas');
  if (focus) focus.hidden = !settings.focus;
  app.classList.toggle('focus-active', Boolean(settings.focus));
  if (settings.focus) grid.classList.remove('show-secondary');
  updateMoreButton();
}

$('#settingsButton').addEventListener('click', () => { loadSettings(); $('#settingsDialog').showModal(); });
$('#sidebarSettings').addEventListener('click', () => { loadSettings(); $('#settingsDialog').showModal(); });
$('#changeView').addEventListener('click', () => openModePicker());
$('#dashboardChangeView').addEventListener('click', () => openModePicker());
$('#sidebarHuman').addEventListener('click', () => { document.querySelector('.tile-human')?.scrollIntoView({behavior:'smooth', block:'center'}); toast('Human help is always available.'); });
$('#sidebarDemo').addEventListener('click', () => $('#agentButton').click());
$('#notificationButton').addEventListener('click', () => toast('No new notifications. Your next step is still Tuesday’s review.'));
$('#moreButton').addEventListener('click', () => { grid.classList.toggle('show-secondary'); updateMoreButton(); });
$('#focusReady').addEventListener('click', () => toast('You are ready enough. One question is a good next step.'));
$('#focusHelp').addEventListener('click', () => toast('Ask someone you trust to sit with the question.'));
$('#exitFocus').addEventListener('click', () => { const focusInput = $('[data-setting="focus"]'); if (focusInput) focusInput.checked = false; const settings = safeJSON(SETTINGS_KEY, {}); settings.focus = false; localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); applySettings(settings); toast('Focus mode off.'); });
function openModePicker() {
  app.classList.add('show-mode-picker');
  $('#modeTitle')?.scrollIntoView({behavior:'smooth', block:'center'});
}
$$('[data-mode]').forEach(option => option.addEventListener('click', () => { localStorage.setItem(MODE_KEY, option.dataset.mode); renderDashboard(option.dataset.mode); app.classList.remove('show-mode-picker'); toast(`${option.textContent.trim().split('\n')[0]} view selected.`); }));
$('#saveSettings').addEventListener('click', event => { event.preventDefault(); const settings = Object.fromEntries($$('[data-setting]').map(control => [control.dataset.setting, control.checked])); localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); applySettings(settings); $('#settingsDialog').close(); toast('Your view is saved on this device.'); });
$('#resetSettings').addEventListener('click', () => { localStorage.removeItem(SETTINGS_KEY); $$('[data-setting]').forEach(control => { control.checked = false; }); applySettings({}); toast('View reset.'); });
$('#agentButton').addEventListener('click', async () => { $('#agentDialog').showModal(); try { const response = await fetch('agent-card.json'); $('#agentJson').textContent = JSON.stringify(await response.json(), null, 2); } catch { $('#agentJson').textContent = 'The local agent contract could not be loaded.'; } });
$$('dialog').forEach(dialog => dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); }));

loadSettings();
renderDashboard(localStorage.getItem(MODE_KEY) || 'young');
