const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const toast = (message) => { let el = $('.toast'); if (!el) { el = document.createElement('div'); el.className = 'toast'; document.body.append(el); } el.textContent = message; el.classList.add('show'); clearTimeout(window.__toastTimer); window.__toastTimer = setTimeout(() => el.classList.remove('show'), 2800); };
const setText = (selector, value) => { const el = $(selector); if (el) el.textContent = value; };
const activateTabs = (root = document) => $$('.tab', root).forEach(tab => tab.addEventListener('click', () => { const group = tab.closest('.panel, section, .shell') || root; $$('.tab', group).forEach(t => t.classList.remove('active')); $$('.tab-panel', group).forEach(p => p.classList.remove('active')); tab.classList.add('active'); const target = $('#' + tab.dataset.target); if (target) target.classList.add('active'); }));
const stagger = (selector) => $$(selector).forEach((el, i) => { el.style.animationDelay = `${i * 60}ms`; });
document.addEventListener('DOMContentLoaded', () => { activateTabs(); $$('.js-toast').forEach(el => el.addEventListener('click', () => toast(el.dataset.message || 'Demo action complete.'))); });
