const navItems = [...document.querySelectorAll('.nav-item')];
const views = [...document.querySelectorAll('.view')];
const toast = document.querySelector('#toast');
const toastMessage = document.querySelector('#toast-message');
let toastTimer;

function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function showView(viewName) {
  views.forEach((view) => view.classList.toggle('active', view.id === `view-${viewName}`));
  navItems.forEach((item) => item.classList.toggle('active', item.dataset.view === viewName));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navItems.forEach((item) => item.addEventListener('click', () => showView(item.dataset.view)));
document.querySelectorAll('[data-view-target]').forEach((button) => button.addEventListener('click', () => showView(button.dataset.viewTarget)));

function buildBarcode() {
  const pattern = [2,1,1,2,3,1,1,1,2,2,1,3,1,1,3,1,2,1,1,2,1,3,2,1,1,1,3,1,2,2,1,1,2,3,1,1,1,2,2,1,3,1,1,2,1,3,1,1,2,2,1,1,3,1,2,1,1,2,3,1,1,1,2,2,1,3,1,1,2,1];
  const total = pattern.reduce((sum, value) => sum + value, 0);
  ['#barcode', '#home-barcode', '#modal-barcode'].forEach((selector) => {
    const barcode = document.querySelector(selector);
    if (!barcode) return;
    pattern.forEach((width, index) => {
      const bar = document.createElement('span');
      bar.className = index % 2 === 1 ? 'barcode-space' : 'barcode-bar';
      bar.style.width = `${(width / total) * 100}%`;
      barcode.appendChild(bar);
    });
  });
}
buildBarcode();

const staffModal = document.querySelector('#staff-modal');
const staffMessage = document.querySelector('#staff-message');
const previewMessage = document.querySelector('#preview-message');
const staffType = document.querySelector('#staff-type');
const stockUpdateStrip = document.querySelector('#stock-update-strip');
const stockUpdateMessage = document.querySelector('#stock-update-message');
const stockUpdateTime = document.querySelector('#stock-update-time');
const typeToTag = { food: 'Food update', gentle: 'A gentle reminder', community: 'Community' };
const typeToClass = { food: 'food-tag', gentle: 'gentle-tag', community: 'community-tag' };

function refreshStockStrip(message, timeLabel = 'Updated just now') {
  if (!stockUpdateStrip || !stockUpdateMessage) return;
  stockUpdateMessage.textContent = message;
  if (stockUpdateTime) stockUpdateTime.textContent = timeLabel;
  stockUpdateStrip.classList.remove('is-refreshing');
  void stockUpdateStrip.offsetWidth;
  stockUpdateStrip.classList.add('is-refreshing');
}

function openStaffModal() { staffModal.hidden = false; staffMessage.focus(); }
function closeStaffModal() { staffModal.hidden = true; }
document.querySelector('#staff-toggle').addEventListener('click', openStaffModal);
document.querySelector('#close-staff').addEventListener('click', closeStaffModal);
staffModal.addEventListener('click', (event) => { if (event.target === staffModal) closeStaffModal(); });

const memberCardModal = document.querySelector('#member-card-modal');
const openMemberCardButtons = [...document.querySelectorAll('[data-open-card]')];
const closeMemberCardButtons = [document.querySelector('#close-member-card'), document.querySelector('#close-member-card-bottom')];
function openMemberCard() { memberCardModal.hidden = false; document.body.classList.add('modal-open'); document.querySelector('#close-member-card').focus(); }
function closeMemberCard() { memberCardModal.hidden = true; document.body.classList.remove('modal-open'); }
openMemberCardButtons.forEach((button) => button.addEventListener('click', openMemberCard));
closeMemberCardButtons.forEach((button) => button.addEventListener('click', closeMemberCard));
memberCardModal.addEventListener('click', (event) => { if (event.target === memberCardModal) closeMemberCard(); });
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (!staffModal.hidden) closeStaffModal();
  if (!memberCardModal.hidden) closeMemberCard();
});

staffMessage.addEventListener('input', () => { previewMessage.textContent = staffMessage.value || 'Your update will appear here.'; });

document.querySelector('#publish-update').addEventListener('click', () => {
  const message = staffMessage.value.trim() || 'A new update is available from the WNWN team.';
  const safeMessage = message.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[character]));
  const update = document.createElement('article');
  update.className = 'update-card featured-update';
  update.innerHTML = `<div class="update-meta"><span class="update-tag ${typeToClass[staffType.value]}">${typeToTag[staffType.value]}</span><span>Just now · demo</span></div><h2>${safeMessage.split('.')[0]}${message.includes('.') ? '.' : ''}</h2><p>${safeMessage}</p><div class="update-footer"><span>From the WNWN team</span><button class="text-button" type="button">Save update <span>♡</span></button></div>`;
  document.querySelector('#updates-list').prepend(update);
  if (staffType.value === 'food') refreshStockStrip(message);
  closeStaffModal();
  showView('updates');
  showToast('Demo update published to the member view');
});

document.querySelector('#notification-button').addEventListener('click', () => { showView('updates'); showToast('You have 3 member updates'); });
document.querySelector('#theme-toggle').addEventListener('click', (event) => {
  const enabled = document.body.classList.toggle('soft-dark');
  event.currentTarget.setAttribute('aria-pressed', String(enabled));
  event.currentTarget.setAttribute('aria-label', enabled ? 'Use light display' : 'Use soft dark display');
  event.currentTarget.querySelector('.control-label').textContent = enabled ? 'Light view' : 'Dark view';
  showToast(enabled ? 'Soft dark display on' : 'Light display on');
});
document.querySelector('#notification-toggle').addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('off');
  event.currentTarget.innerHTML = event.currentTarget.classList.contains('off') ? '<span>◔</span> Notifications off' : '<span>◔</span> Notifications on';
  showToast(event.currentTarget.classList.contains('off') ? 'Notifications paused' : 'Notifications turned on');
});
document.querySelector('#save-preferences').addEventListener('click', () => showToast('Notification preferences saved'));
document.querySelector('#profile-button').addEventListener('click', () => showToast('You are signed in as Jamie Morgan'));
document.querySelector('#directions-button').addEventListener('click', () => showToast('Demo: directions would open here'));
document.querySelector('#call-button').addEventListener('click', () => showToast('Demo: calling 01202 402818'));
document.querySelector('#print-button').addEventListener('click', () => window.print());

if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
