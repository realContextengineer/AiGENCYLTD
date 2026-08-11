const contactData = {
  acme: { initials: 'AS', name: 'Amelia Stone', company: 'Acme Studio · London', commercial: 'Proposal approved', next: 'Reply today', project: 'Acme website rebuild', tone: 'copper' },
  sarah: { initials: 'SM', name: 'Sarah Mitchell', company: 'Harbor House · Bournemouth', commercial: 'AI receptionist demo', next: 'Meeting tomorrow · 10:30', project: 'Harbor House front desk', tone: 'green' },
  northstar: { initials: 'NW', name: 'Nina Williams', company: 'Northstar SEND · Dorset', commercial: 'Audit in progress', next: 'Review findings', project: 'Northstar portal', tone: 'blue' },
  jordan: { initials: 'JB', name: 'Jordan Bell', company: 'Bell & Co · Poole', commercial: 'Discovery enquiry', next: 'Qualify enquiry', project: 'Bell & Co CRM map', tone: 'plum' }
};

const hermesAnswers = [
  { keys: ['waiting', 'today', 'deal'], answer: 'Today: reply to Amelia at Acme Studio, prepare Sarah Mitchell’s meeting brief for tomorrow, and review the new Northstar audit findings. Hermes has not sent anything.' },
  { keys: ['acme', 'where are we', 'proposal'], answer: 'Acme Studio has approved the website rebuild proposal. The next useful action is to confirm the deposit status and prepare the kickoff plan. No payment is recorded in this demo.' },
  { keys: ['meeting', 'prepare', 'sarah'], answer: 'Sarah Mitchell’s meeting is tomorrow at 10:30. I would bring the last conversation, the Harbor House receptionist status and the open question about human handover.' },
  { keys: ['changed', 'week', 'summary'], answer: 'This week: Acme approved a proposal, Sarah booked a meeting, Northstar received a new GEO audit summary and Bell & Co entered discovery. Three conversations still need attention.' },
  { keys: ['unpaid', 'invoice', 'money', 'commercial'], answer: 'There is one simulated invoice due on 14 August. Acme has approved the proposal, but a deposit is not recorded. I can prepare a follow-up for your approval.' }
];

const cleoAnswers = [
  { keys: ['attention', 'waiting', 'today'], answer: 'Today I would start with Amelia at Acme, prepare Sarah Mitchell’s meeting brief, then review Northstar’s new audit findings. I have not sent anything.' },
  { keys: ['sarah', 'meeting', 'prepare'], answer: 'Sarah’s meeting is tomorrow at 10:30. I can gather the last conversation, the Harbor House receptionist status and the open handover question for your review.' },
  { keys: ['acme', 'proposal', 'status'], answer: 'Acme approved the website rebuild proposal. The next useful step is confirming the deposit and preparing kickoff. No payment is recorded in this demo.' },
  { keys: ['help', 'what can', 'do'], answer: 'I can help you find relationship context, prepare meetings, surface follow-ups and draft next actions. Hermes will need connecting before I can reach your live systems.' }
];

const crmState = { currentView: 'overview', drawerContact: 'acme', drawerTrigger: null, theme: localStorage.getItem('aigency-icrm-theme') || 'dark' };

function showCrmToast(message) { const el = $('#icrmToast'); el.textContent = message; el.classList.add('show'); clearTimeout(window.__icrmToastTimer); window.__icrmToastTimer = setTimeout(() => el.classList.remove('show'), 3000); }
function syncThemeControls() { const nextMode = crmState.theme === 'dark' ? 'light' : 'dark'; ['#loginTheme', '#appTheme'].forEach(selector => { const control = $(selector); if (control) control.setAttribute('aria-label', `Switch to ${nextMode} colour mode`); }); }
function setTheme(theme) { crmState.theme = theme; document.body.dataset.theme = theme; localStorage.setItem('aigency-icrm-theme', theme); syncThemeControls(); }
function flipTheme() { setTheme(crmState.theme === 'dark' ? 'light' : 'dark'); showCrmToast(`${crmState.theme === 'dark' ? 'Dark' : 'Light'} mode active.`); }
function isMobileLayout() { return window.matchMedia('(max-width: 760px)').matches; }
function setSidebarOpen(open) { const sidebar = $('#appSidebar'); const scrim = $('#sidebarScrim'); const menuButton = $('#mobileMenuButton'); const isOpen = Boolean(open); sidebar?.classList.toggle('open', isOpen); scrim?.classList.toggle('is-visible', isOpen); menuButton?.setAttribute('aria-expanded', String(isOpen)); menuButton?.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation'); }
function toggleSidebarCollapsed() { const app = $('#appShell'); const button = $('#sidebarCollapse'); const collapsed = app?.classList.toggle('sidebar-collapsed'); if (!button || collapsed === undefined) return; button.textContent = collapsed ? '→' : '←'; button.setAttribute('aria-label', collapsed ? 'Expand navigation' : 'Collapse navigation'); button.setAttribute('aria-expanded', String(!collapsed)); }
function toggleSidebar() { if (isMobileLayout()) setSidebarOpen(!$('#appSidebar')?.classList.contains('open')); else toggleSidebarCollapsed(); }
function resetScrollPosition() { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); document.documentElement.scrollTop = 0; document.body.scrollTop = 0; }
function activateView(view) { crmState.currentView = view; $$('.view-panel').forEach(panel => panel.classList.toggle('active', panel.dataset.viewPanel === view)); $$('.nav-item').forEach(item => { const active = item.dataset.view === view; item.classList.toggle('active', active); if (active) item.setAttribute('aria-current', 'page'); else item.removeAttribute('aria-current'); }); const label = $('.nav-item.active .nav-text')?.textContent.trim() || view; $('#currentViewLabel').textContent = label; setSidebarOpen(false); resetScrollPosition(); }
function openWorkspace() { $('#loginScreen').classList.add('hidden'); $('#appShell').classList.remove('hidden'); activateView('overview'); minimizeCleo(); resetScrollPosition(); setTimeout(resetScrollPosition, 80); $('#appMain')?.focus({ preventScroll: true }); }
function answerHermes(query) { const lower = query.toLowerCase(); const match = hermesAnswers.find(item => item.keys.some(key => lower.includes(key))); return match ? match.answer : 'I can help with relationships, meetings, proposals, delivery, documents and what needs your attention. Try “What am I waiting for?”, “What changed this week?” or “Prepare me for Sarah’s meeting.”'; }
function runHermes() { const input = $('#hermesCommand'); const query = input.value.trim(); if (!query) { input.focus(); return; } $('#hermesAnswerText').textContent = answerHermes(query); $('#hermesAnswer').classList.remove('hidden'); $('#hermesAnswer').setAttribute('aria-hidden', 'false'); }
function openContact(key) { const data = contactData[key]; if (!data) return; crmState.drawerContact = key; crmState.drawerTrigger = document.activeElement; $('#drawerAvatar').textContent = data.initials; $('#drawerAvatar').className = `drawer-avatar ${data.tone}`; $('#drawerTitle').textContent = data.name; $('#drawerCompany').textContent = data.company; $('#drawerCommercial').textContent = data.commercial; $('#drawerNext').textContent = data.next; $('#drawerProject').textContent = data.project; $('#contactDrawer').classList.add('open'); $('#contactDrawer').setAttribute('aria-hidden', 'false'); setTimeout(() => $('#drawerClose')?.focus({ preventScroll: true }), 80); }
function closeDrawer() { const wasOpen = $('#contactDrawer').classList.contains('open'); $('#contactDrawer').classList.remove('open'); $('#contactDrawer').setAttribute('aria-hidden', 'true'); if (wasOpen && crmState.drawerTrigger?.focus) setTimeout(() => crmState.drawerTrigger.focus({ preventScroll: true }), 80); }
function prepareReply() { activateView('conversations'); setTimeout(() => { $('#replyInput').value = 'Hi Amelia — great news. I’ll prepare the next steps and confirm the deposit details before we schedule kickoff.'; $('#replyInput').focus(); }, 180); showCrmToast('Draft prepared. Nothing has been sent.'); }
function appendCleoMessage(message, type = 'ai') { const thread = $('#cleoThread'); const item = document.createElement('div'); item.className = `cleo-message cleo-message-${type}`; const label = document.createElement('span'); label.className = 'cleo-message-label'; label.textContent = type === 'ai' ? 'CLEO' : 'YOU'; const bubble = document.createElement('p'); bubble.textContent = message; item.append(label, bubble); thread.append(item); thread.scrollTop = thread.scrollHeight; }
function cleoReply(query) { const lower = query.toLowerCase(); const match = cleoAnswers.find(item => item.keys.some(key => lower.includes(key))); return match ? match.answer : 'I’m ready to keep the thread, but this is still the visual demo. Ask me about attention, Sarah’s meeting or Acme’s proposal — then give me the Hermes details for the live connection.'; }
function openCleo() { $('#cleoAssistant').classList.add('is-open'); $('#cleoAssistant').setAttribute('aria-hidden', 'false'); $('#cleoLauncher').hidden = true; setTimeout(() => $('#cleoInput')?.focus({ preventScroll: true }), 120); }
function minimizeCleo() { const wasOpen = $('#cleoAssistant').classList.contains('is-open'); $('#cleoAssistant').classList.remove('is-open'); $('#cleoAssistant').setAttribute('aria-hidden', 'true'); $('#cleoLauncher').hidden = false; if (wasOpen && $('#cleoAssistant').contains(document.activeElement)) setTimeout(() => $('#cleoLauncher')?.focus({ preventScroll: true }), 80); }
function askCleo(query) { const clean = query.trim(); if (!clean) return; appendCleoMessage(clean, 'user'); $('#cleoInput').value = ''; setTimeout(() => appendCleoMessage(cleoReply(clean), 'ai'), 220); }

const atmosphere = $('#workspaceAtmosphere');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let atmosphereFrame;
function setAtmosphereOffset(x = 0, y = 0) { if (!atmosphere) return; atmosphere.style.setProperty('--atmosphere-x', `${x}px`); atmosphere.style.setProperty('--atmosphere-y', `${y}px`); }
function moveAtmosphere(event) { if (!atmosphere || isMobileLayout() || reducedMotion.matches) return; const x = (0.5 - event.clientX / window.innerWidth) * 14; const y = (0.5 - event.clientY / window.innerHeight) * 10; cancelAnimationFrame(atmosphereFrame); atmosphereFrame = requestAnimationFrame(() => setAtmosphereOffset(x, y)); }
window.addEventListener('pointermove', moveAtmosphere, { passive: true });
window.addEventListener('pointerleave', () => setAtmosphereOffset(), { passive: true });
reducedMotion.addEventListener?.('change', event => { if (event.matches) setAtmosphereOffset(); });

setTheme(crmState.theme);
$('#loginForm').addEventListener('submit', event => { event.preventDefault(); openWorkspace(); });
$('#loginTheme').addEventListener('click', flipTheme); $('#appTheme').addEventListener('click', flipTheme);
$$('.nav-item').forEach(item => item.addEventListener('click', () => activateView(item.dataset.view)));
$$('[data-view-link]').forEach(item => item.addEventListener('click', () => activateView(item.dataset.viewLink)));
$$('.command-prompts button').forEach(item => item.addEventListener('click', () => { $('#hermesCommand').value = item.dataset.prompt; runHermes(); }));
$('#askHermes').addEventListener('click', runHermes); $('#hermesCommand').addEventListener('keydown', event => { if (event.key === 'Enter') runHermes(); }); $('#closeAnswer').addEventListener('click', () => { $('#hermesAnswer').classList.add('hidden'); $('#hermesAnswer').setAttribute('aria-hidden', 'true'); });
$('#prepareAction').addEventListener('click', () => showCrmToast('Next action prepared for your approval.')); $('#saveInsight').addEventListener('click', () => showCrmToast('Insight saved to the workspace memory.'));
$$('[data-contact]').forEach(item => item.addEventListener('click', () => openContact(item.dataset.contact)));
$('#drawerClose').addEventListener('click', closeDrawer); $('#drawerDraft').addEventListener('click', prepareReply); $('#draftReply').addEventListener('click', prepareReply); $('#draftReply2').addEventListener('click', prepareReply); $('#drawerNote').addEventListener('click', () => showCrmToast('Note composer ready. Nothing has been saved.'));
$('#contactSearch').addEventListener('input', event => { const query = event.target.value.toLowerCase(); $$('.contact-row').forEach(row => row.classList.toggle('hidden', !row.textContent.toLowerCase().includes(query))); });
$('#globalSearchButton').addEventListener('click', () => { activateView('contacts'); $('#contactSearch').focus(); }); $('#notificationButton').addEventListener('click', () => showCrmToast('Three conversations and two review items need attention.'));
$('#newContact').addEventListener('click', () => showCrmToast('New contact form is ready for the next build step.')); $('#newContact2').addEventListener('click', () => showCrmToast('New contact form is ready for the next build step.')); $('#newCompany').addEventListener('click', () => showCrmToast('New company form is ready for the next build step.')); $('#newMessage').addEventListener('click', () => showCrmToast('New message composer is approval-aware.')); $('#newProject').addEventListener('click', () => showCrmToast('New project form is ready for the next build step.'));
$('#profileButton').addEventListener('click', () => showCrmToast('Owner workspace · local demo profile.')); $('#sidebarCollapse').addEventListener('click', toggleSidebar); $('#mobileMenuButton').addEventListener('click', toggleSidebar); $('#sidebarScrim').addEventListener('click', () => setSidebarOpen(false)); $('#topAvatar').addEventListener('click', () => showCrmToast('Karl · Owner / admin · local demo profile.'));
window.addEventListener('resize', () => { if (!isMobileLayout()) setSidebarOpen(false); });
$('#cleoMinimize').addEventListener('click', minimizeCleo); $('#cleoLauncher').addEventListener('click', openCleo); $('#cleoForm').addEventListener('submit', event => { event.preventDefault(); askCleo($('#cleoInput').value); });
$$('[data-cleo-prompt]').forEach(item => item.addEventListener('click', () => askCleo(item.dataset.cleoPrompt)));
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeDrawer(); if ($('#cleoAssistant').classList.contains('is-open')) minimizeCleo(); if (isMobileLayout()) setSidebarOpen(false); } });
