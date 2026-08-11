const projectTemplates = {
  Website: { project: 'Service business website', scope: 'Website redesign + content structure', base: 4900, low: 4000, high: 5400 },
  Automation: { project: 'Workflow automation system', scope: 'Automation discovery + one core workflow', base: 4300, low: 3500, high: 5000 },
  CRM: { project: 'Intelligent CRM foundation', scope: 'CRM workspace + relationship workflows', base: 7200, low: 5800, high: 8400 },
  'AI Receptionist': { project: 'AI receptionist system', scope: 'Receptionist flow + human handover', base: 5900, low: 4700, high: 6800 },
  'Charity Portal': { project: 'Charity website + member area', scope: 'Website redesign + member portal', base: 5900, low: 4800, high: 6200 },
  'AI Agent': { project: 'Custom AI agent', scope: 'Agent discovery + bounded workflow', base: 6500, low: 5200, high: 7600 }
};

const state = {
  mode: 'human', projectType: 'Charity Portal', built: false, donation: 600, content: 'Client supplied + structured', budget: null, coreTotal: 5900, total: 5900,
  options: { phase: 4350, templates: 4500, full: 5900 }, selectedFit: null, modules: []
};

function money(value) { return `£${Math.round(value).toLocaleString('en-GB')}`; }
function qToast(message) { const el = $('#qToast'); el.textContent = message; el.classList.add('show'); clearTimeout(window.__qToast); window.__qToast = setTimeout(() => el.classList.remove('show'), 2800); }
function getTemplate() { return projectTemplates[state.projectType]; }

function artifact() {
  const template = getTemplate();
  return { quoteId: 'Q-2026-0014', status: 'needs_human_review', currency: 'GBP', clientRequirements: { projectType: state.projectType, request: $('#jobInput').value.trim() || 'Accessible charity website with donations, events and a member area.', budgetMaximum: state.budget ? money(state.budget) : null }, scope: { project: template.scope, pages: '8–10 core templates', features: ['Donation integration', 'Events structure', 'Members area'], accessibility: 'WCAG-aware build', content: state.content, deliveryEstimate: '6–8 weeks' }, lineItems: [{ name: 'Design + UX', amount: 1400 }, { name: 'Front-end build', amount: 1800 }, { name: 'CMS / content structure', amount: 800 }, { name: 'Members area', amount: 1200 }, { name: 'Donation integration', amount: state.donation }, { name: 'Accessibility review', amount: 0 }], estimatedTotal: state.total, priceRange: { low: Math.max(0, state.total - 1100), high: state.total + 300 }, assumptions: ['Client supplies approved content and imagery.', 'One donation provider is selected before build.', 'Member requirements remain within the stated portal scope.'], exclusions: ['Complex bespoke payments or regulated advice.', 'Unbounded CRM migration or historical data cleansing.', 'Automatic contractual acceptance.'], validUntil: '2026-09-07', confidence: 0.82, requiresHumanApproval: true, options: state.options, nextAction: 'Request human review' };
}

function renderPricing() {
  const total = state.coreTotal + state.modules.reduce((sum, module) => sum + module.amount, 0);
  state.total = total;
  setText('#totalPrice', money(total)); setText('#proposalTotal', money(total));
  setText('#priceLow', money(Math.max(0, total - 1100))); setText('#priceHigh', money(total + 300));
  setText('#railLow', money(Math.max(0, total - 1100))); setText('#railHigh', money(total + 300)); setText('#railTotal', money(total)); setText('#railDonation', `£${(state.donation / 1000).toFixed(1)}K`);
  setText('#donationCost', money(state.donation)); setText('#scopeContent', state.content);
  if (state.budget && state.budget < total) { setText('#fitTitle', 'BUDGET CONFLICT'); setText('#fitCopy', `CURRENT ${money(total)} / TARGET ${money(state.budget)} / DIFFERENCE -${money(total - state.budget)}. These are controlled trade-offs around your maximum.`); setText('#railConflict', `BUDGET CONFLICT / -${money(total - state.budget)}`); }
  else { setText('#fitTitle', 'Make it fit.'); setText('#fitCopy', 'If the budget changes, the quote shows the trade-offs. It does not quietly lower quality or invent a discount.'); setText('#railConflict', 'SET A BUDGET TO SEE CONTROLLED OPTIONS.'); }
  const raw = JSON.stringify(artifact(), null, 2); setText('#rawJson', raw);
}

function selectProject(projectType, notify = true) {
  state.projectType = projectType; const template = getTemplate(); state.coreTotal = template.base; state.total = template.base; state.modules = []; state.options.full = template.base; state.options.phase = Math.max(3200, template.base - 1550); state.options.templates = Math.max(3500, template.base - 1400); $$('.project-chips button').forEach(button => button.classList.toggle('active', button.dataset.project === projectType)); setText('#reqProject', template.scope); setText('#scopeProject', template.project); setText('#scopeUpdate', `SCOPE UPDATED / ${projectType.toUpperCase()} TEMPLATE SELECTED`); renderPricing(); if (notify) qToast(`${projectType} template selected. Scope rules updated.`);
}

function buildScope() { state.built = true; $('#humanView').classList.remove('is-hidden'); document.body.classList.add('has-builder'); document.body.dataset.stage = 'scope'; setText('#scopeUpdate', 'SCOPE UPDATED / INITIAL BRIEF PARSED'); $('#humanView').scrollIntoView({ behavior: 'smooth', block: 'start' }); qToast('Scope built from the brief. One useful question remains.'); }
function chooseAnswer(answer) { const previousDonation = state.donation; $$('.choice-button').forEach(button => button.classList.toggle('selected', button.dataset.answer === answer)); if (answer === 'existing') { state.donation = 600; setText('#scopeFeatures', 'Stripe / confirmed · events · members area'); setText('#unknownText', 'Member login requirements'); setText('#scopeUpdate', 'SCOPE UPDATED / PROVIDER CONFIRMED'); } else if (answer === 'recommend') { state.donation = 750; setText('#scopeFeatures', 'Donation route / recommendation · events · members area'); setText('#unknownText', 'Donation provider recommendation · member login requirements'); setText('#scopeUpdate', 'SCOPE UPDATED / RECOMMENDATION ADDED'); } else { state.donation = 700; setText('#scopeFeatures', 'Donations / decision pending · events · members area'); setText('#unknownText', 'Donation provider decision · member login requirements'); setText('#scopeUpdate', 'SCOPE UPDATED / DECISION HELD OPEN'); } state.coreTotal += state.donation - previousDonation; renderPricing(); qToast('Scope updated. Only the relevant pricing rule changed.'); }
function addModule(module) { const modules = { seo: { label: 'SEO foundation', amount: 450 }, analytics: { label: 'Analytics setup', amount: 300 }, training: { label: 'Team handover', amount: 650 } }; if (!state.modules.some(item => item.label === modules[module].label)) state.modules.push(modules[module]); renderPricing(); qToast(`${modules[module].label} added to the indicative scope.`); }
function setBudget(value) { state.budget = value ? Number(value) : null; renderPricing(); if (state.budget && state.budget < state.total) qToast('Budget captured. Controlled fit options are now visible.'); }
function openProposal() { $('#proposalView').classList.remove('is-hidden'); document.body.dataset.stage = 'quote'; setText('#proposalTotal', money(state.total)); $('#proposalView').scrollIntoView({ behavior: 'smooth', block: 'start' }); qToast('Proposal view prepared. Nothing has been sent.'); }
function setMode(mode) { state.mode = mode; $$('.mode-button').forEach(button => button.classList.toggle('active', button.dataset.mode === mode)); $('#humanView').classList.toggle('is-hidden', mode !== 'human' || !state.built); $('#agentView').classList.toggle('is-hidden', mode !== 'agent'); if (mode === 'agent') $('#agentView').scrollIntoView({ behavior: 'smooth', block: 'start' }); document.body.dataset.mode = mode; }
function goStage(stage) { document.body.dataset.stage = stage; $$('.stage-button').forEach(button => button.classList.toggle('active', button.dataset.stageTarget === stage)); const targets = { brief: '#brief', scope: '#scope', pricing: '#pricing', proposal: '#proposalView' }; if (stage === 'proposal') openProposal(); else $(targets[stage])?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
function showRawArtifact() { $('#rawDrawer').classList.remove('is-hidden'); $('#rawJson').textContent = JSON.stringify(artifact(), null, 2); }

$('#tryExample').addEventListener('click', () => { $('#jobInput').value = 'We’re a small charity and need a new website with donations, events and a member area.'; selectProject('Charity Portal'); qToast('Example brief loaded.'); });
$$('.project-chips button').forEach(button => button.addEventListener('click', () => { $('#jobInput').value = `We need a ${button.dataset.project.toLowerCase()} that makes our work easier to run.`; selectProject(button.dataset.project); }));
$('#buildScope').addEventListener('click', buildScope); $('#jumpAgent').addEventListener('click', () => { setMode('agent'); });
$$('[data-answer]').forEach(button => button.addEventListener('click', () => chooseAnswer(button.dataset.answer)));
$('#budgetInput').addEventListener('input', event => setBudget(event.target.value.replace(/[^0-9]/g, '')));
$('#addModule').addEventListener('click', () => $('#modulePicker').classList.toggle('is-hidden')); $$('#modulePicker button').forEach(button => button.addEventListener('click', () => addModule(button.dataset.module)));
$('#makeQuote').addEventListener('click', openProposal); $('#editScope').addEventListener('click', () => { document.body.dataset.stage = 'scope'; $('#humanView').scrollIntoView({ behavior: 'smooth' }); });
$('#saveDraft').addEventListener('click', () => qToast('Draft saved locally in this demo.')); $('#saveQuote').addEventListener('click', () => qToast('Quote saved as a simulated artifact.')); $('#sendReview').addEventListener('click', () => qToast('Review request prepared. A human must approve it before sending.')); $('#reviewQuote').addEventListener('click', () => qToast('Human review required. No commercial commitment has been made.')); $('#printQuote').addEventListener('click', () => window.print());
$$('.fit-select').forEach(button => button.addEventListener('click', () => { state.selectedFit = button.dataset.fit; $$('.fit-option').forEach(option => option.classList.remove('selected')); button.closest('.fit-option').classList.add('selected'); qToast(`Option ${button.dataset.fit.toUpperCase()} selected for review. It has not been accepted.`); }));
$$('.mode-button').forEach(button => button.addEventListener('click', () => setMode(button.dataset.mode))); $$('[data-stage-target]').forEach(button => button.addEventListener('click', () => goStage(button.dataset.stageTarget)));
$('#runAgent').addEventListener('click', () => { setText('#scopeUpdate', 'A2A TASK RE-RUN / ARTIFACT REFRESHED'); qToast('Agent quote task re-run in seeded demo mode.'); }); $('#agentProposal').addEventListener('click', () => { setMode('human'); if (!state.built) buildScope(); }); $('#rawArtifact').addEventListener('click', showRawArtifact); $('#closeRaw').addEventListener('click', () => $('#rawDrawer').classList.add('is-hidden'));
$('#businessLauncher').addEventListener('click', () => { $('#businessView').classList.remove('is-hidden'); $('#businessView').scrollIntoView({ behavior: 'smooth' }); }); $('#closeBusiness').addEventListener('click', () => $('#businessView').classList.add('is-hidden'));

selectProject('Charity Portal', false); renderPricing();
