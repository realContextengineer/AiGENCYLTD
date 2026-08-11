const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const toast = (message) => {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(window.__harbourToast);
  window.__harbourToast = setTimeout(() => el.classList.remove('show'), 3000);
};

const header = $('#siteHeader');
const menuButton = $('#menuButton');
menuButton.addEventListener('click', () => {
  const open = header.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? 'Close ×' : 'Menu +';
});
$$('.nav a, .header-actions a').forEach(link => link.addEventListener('click', () => {
  header.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = 'Menu +';
}));

$$('.human-button').forEach(button => button.addEventListener('click', () => toast('A person from the Harbour & Field team would call within one working day.')));
$$('.service-button, .involvement-button').forEach(button => button.addEventListener('click', () => toast(button.dataset.message)));

const finder = {
  answer: '',
  serviceChoice: '',
  step: 1,
  choices: {
    money: ['Making money stretch', 'money'],
    connection: ['Feeling less alone', 'connection'],
    confidence: ['Finding confidence or direction', 'confidence']
  },
  setProgress(step) {
    $$('.finder-steps span').forEach((item, index) => item.classList.toggle('active', index < step));
  },
  renderStepTwo() {
    this.serviceChoice = this.answer;
    this.step = 2;
    $('#finderStep').textContent = 'Service finder · 02 / 03';
    $('#finderStatus').textContent = 'Find your pace';
    this.setProgress(2);
    $('#finderTitle').textContent = 'What kind of first step feels manageable?';
    $('#finderPrompt').textContent = 'There is no right answer. Choose the route that feels most like you today.';
    $('#finderChoices').innerHTML = '<button class="finder-choice" data-answer="person"><small>01</small>Talk it through with someone</button><button class="finder-choice" data-answer="browse"><small>02</small>Browse practical options first</button><button class="finder-choice" data-answer="together"><small>03</small>Bring someone with me</button>';
    bindFinderChoices();
  },
  renderStepThree() {
    this.step = 3;
    $('#finderStep').textContent = 'Service finder · 03 / 03';
    $('#finderStatus').textContent = 'A good place to begin';
    this.setProgress(3);
    $('#finderTitle').textContent = 'When would a next step help?';
    $('#finderPrompt').textContent = 'This helps us shape a useful first response — not put you in a box.';
    $('#finderChoices').innerHTML = '<button class="finder-choice" data-answer="today"><small>01</small>Today, if possible</button><button class="finder-choice" data-answer="soon"><small>02</small>Sometime this week</button><button class="finder-choice" data-answer="explore"><small>03</small>I am just exploring</button>';
    bindFinderChoices();
  },
  showResult() {
    const result = this.choices[this.serviceChoice] || ['Harbour & Field', 'support'];
    const recommendation = { money: ['Advice & advocacy', 'Practical help with benefits, housing, debt and the next form.'], connection: ['Neighbourhood circles', 'Small groups, shared meals and a regular human welcome.'], confidence: ['Work & confidence', 'One-to-one support to find direction at your own pace.'] }[result[1]] || ['A conversation first', 'We can work out the right route together.'];
    $('#finderStep').textContent = 'Service finder · complete';
    $('#finderStatus').textContent = 'No wrong door';
    this.setProgress(3);
    $('#finderContent').innerHTML = `<div class="finder-result"><div class="eyebrow">A good place to begin</div><h3>${recommendation[0]}</h3><p>${recommendation[1]}</p><div class="recommendation"><div><strong>Start gently</strong><span>Tell us what is happening. You do not need a perfect explanation.</span></div><div><strong>Keep a human close</strong><span>Ask for a person at any point in the process.</span></div></div><div class="actions"><button class="button" id="startSupport">Start with Harbour &amp; Field ↗</button><button class="button secondary" id="resetFinder">Start again</button></div></div>`;
    $('#startSupport').addEventListener('click', () => toast('A fictional support request has been prepared for the Harbour & Field team.'));
    $('#resetFinder').addEventListener('click', () => window.location.reload());
  }
};

function bindFinderChoices() {
  $$('.finder-choice').forEach(choice => choice.addEventListener('click', () => {
    finder.answer = choice.dataset.answer;
    if (finder.step === 1) finder.renderStepTwo();
    else if (finder.step === 2) finder.renderStepThree();
    else finder.showResult();
  }));
}
bindFinderChoices();

const observer = new IntersectionObserver((entries) => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  entry.target.classList.add('visible');
  if (entry.target.classList.contains('impact-stats')) $$('.counter', entry.target).forEach(counter => {
    const target = Number(counter.dataset.target);
    const suffix = counter.dataset.suffix || '';
    const duration = 900;
    const start = performance.now();
    const tick = now => {
      const progress = Math.min((now - start) / duration, 1);
      counter.textContent = `${Math.floor(progress * target).toLocaleString()}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
  observer.unobserve(entry.target);
}), { threshold: .14 });
$$('.reveal, .impact-stats').forEach(element => observer.observe(element));
