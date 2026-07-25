/* ========================================
   AIGENCY.LTD - MAIN JAVASCRIPT
   Mobile Navigation, Quiz Logic & Interactions
   ======================================== */

(function() {
  'use strict';

  // ========== MOBILE NAVIGATION ==========
  const navToggle = document.querySelector('.nav-toggle');
  const navMobile = document.querySelector('.nav-mobile');

  // ========== PRIMARY SITE NAVIGATION ==========
  // Keep the top-level journey consistent across every static page.
  const primaryNav = [
    ['index.html', 'Home', 'home'],
    ['services.html', 'Services', 'services'],
    ['creative-design.html', 'Design', 'design'],
    ['about.html', 'About', 'about'],
    ['ai-transparency.html', 'Responsible AI', 'transparency'],
    ['training.html', 'Training', 'training'],
    ['https://hermes-agents.com', 'Hermes Agents', null]
  ];

  document.querySelectorAll('.nav-desktop, .nav-mobile').forEach(function(list) {
    const isMobile = list.classList.contains('nav-mobile');
    list.innerHTML = primaryNav.map(function(item) {
      const external = item[0].indexOf('http') === 0;
      const attrs = external ? ' target="_blank" rel="noopener"' : '';
      const className = external ? ' class="nav-cta"' : '';
      const dataNav = item[2] ? ' data-nav="' + item[2] + '"' : '';
      return '<li><a href="' + item[0] + '"' + dataNav + className + attrs + '>' + item[1] + '</a></li>';
    }).join('');
  });

  // ========== CURRENT NAVIGATION STATE ==========
  const navPath = window.location.pathname.split('/').pop() || 'index.html';
  const navKey = window.location.hash === '#training'
    ? 'training'
    : navPath === 'creative-design.html'
      ? 'design'
      : navPath === 'ai-transparency.html'
        ? 'transparency'
      : navPath === 'about.html'
        ? 'about'
        : navPath === 'index.html'
          ? 'home'
          : null;

  if (navKey) {
    document.querySelectorAll('[data-nav]').forEach(function(link) {
      if (link.getAttribute('data-nav') === navKey) {
        link.classList.add('is-active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      navMobile.classList.toggle('active');
      document.body.style.overflow = isExpanded ? '' : 'hidden';
    });

    const mobileLinks = navMobile.querySelectorAll('a');
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navToggle.setAttribute('aria-expanded', 'false');
        navMobile.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ========== SMOOTH SCROLL ==========
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = 64;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========== TEN-QUESTION AI HEALTH CHECK ==========
  const quizHost = document.querySelector('[data-quiz="health-check"]');
  if (quizHost) {
    const questions = [
      { title: 'Everyday AI Literacy', prompt: 'Do you currently use AI tools like ChatGPT or Claude for anything beyond basic text editing, copywriting or email generation?', options: [['Yes, we use them for structured workflows and planning.', 10], ['Sometimes, but we are mostly testing basic chats.', 5], ["No, we haven't integrated AI into our daily routines yet.", 0]] },
      { title: 'Administrative Burden', prompt: 'Do you or your team spend more than two hours daily on repetitive admin such as quotes, invoices, bookings or follow-ups?', options: [['No, our admin flows are highly streamlined and fast.', 10], ['Unsure — some days are completely swallowed by paperwork.', 5], ['Yes, manual admin is actively stealing our productive time.', 0]] },
      { title: 'AI Search & Agent Visibility', prompt: 'If a local customer asks ChatGPT, Perplexity or Google AI Overviews for your services in Dorset, does your brand get directly cited and recommended?', options: [['Yes, we are highly visible and consistently cited.', 10], ['Unsure — we only know how we perform in traditional search.', 5], ["No, AI search models don't seem to recognise our business.", 0]] },
      { title: 'GDPR & Secure Data Boundaries', prompt: 'Do you have clear boundaries so private customer records and sensitive business documents are not fed into public AI models?', options: [['Yes, we enforce clear GDPR-aware AI guidelines.', 10], ['Unsure — people copy and paste data without a formal protocol.', 5], ['No, we do not have a defined secure AI policy yet.', 0]] },
      { title: 'Connected Digital Infrastructure', prompt: 'Are your email, calendar, CRM and booking tools connected, or are you constantly copying and pasting data between apps?', options: [['Yes, our systems are connected with automated integrations.', 10], ['Unsure — some tools communicate, but transfers are still manual.', 5], ['No, we manage our daily software entirely in isolation.', 0]] },
      { title: 'Neuro-Inclusive Customer Portals', prompt: 'Is your website and customer portal clean, well-spaced and easy to read for users who find cluttered screens overwhelming?', options: [['Yes, our interface prioritises clarity and calm usability.', 10], ['Unsure — our layout can feel busy or intense.', 5], ["No, we haven't structured our site for neuro-inclusion yet.", 0]] },
      { title: 'Enquiry Conversion Speed', prompt: 'Can your business respond to new enquiries within an hour without dropping active work?', options: [['Yes, we have alerts or automated drafts in place.', 10], ['Unsure — we try to follow up, but it often takes a day.', 5], ['No, we regularly lose leads through delayed responses.', 0]] },
      { title: 'Original Brand Authority', prompt: 'Are you confident that your digital presence has a unique, memorable and premium voice rather than looking generic or robotic?', options: [['Yes, our branding reflects human depth and original authority.', 10], ['Unsure — it looks okay, but is starting to feel lookalike.', 5], ['No, our layout and copy feel highly standardised.', 0]] },
      { title: 'Team Confidence & Capabilities', prompt: 'Has your team received structured, practical and jargon-free training to use ChatGPT and other advanced AI tools safely?', options: [['Yes, our staff use AI tools confidently and consistently.', 10], ['Unsure — some people use it, but there is no shared approach.', 5], ['No, our team has had no formal AI upskilling.', 0]] },
      { title: 'Agent-Friendly Accessibility', prompt: 'Is your website structured with semantic elements and clear metadata so modern search and AI agents can understand your details?', options: [['Yes, the site is built for human and machine readability.', 10], ['Unsure — we have focused mainly on visual visitors.', 5], ['No, the site is difficult for modern scrapers to interpret.', 0]] }
    ];
    const state = { index: -1, answers: Array(questions.length).fill(null) };
    const encouragements = ['That gives us a useful starting point.', 'Good — we are building a clearer picture.', 'Useful signal. Keep going.', 'That is exactly the kind of detail this check is for.'];

    quizHost.innerHTML = `<div class="quiz-intro-screen"><p class="eyebrow">10 QUESTIONS · 3 MINUTES · NO SIGN-UP</p><h2 class="quiz-title">Your AI Health Check — How Ready Are You?</h2><p class="quiz-question">This is not a test. It is a quick map of where AI could reduce friction, improve visibility and support your team.</p><div class="quiz-options"><label class="quiz-option"><input type="radio" name="path" value="myself"><span><strong>I'm doing this for myself</strong><small>Freelancer, sole trader or exploring AI for personal upskilling.</small></span></label><label class="quiz-option"><input type="radio" name="path" value="business"><span><strong>I'm doing this for my business</strong><small>Owner, tradesperson or team lead looking to work smarter.</small></span></label></div><div class="quiz-nav"><span></span><button class="btn-primary btn-bronze quiz-start-btn">Start My Check</button></div></div>` + questions.map(function(question, index) {
      return '<section class="quiz-screen" data-screen="' + index + '"><div class="quiz-progress"><div class="quiz-progress-head"><span class="quiz-progress-label">Question ' + (index + 1) + ' of ' + questions.length + '</span><span class="quiz-progress-percent">' + Math.round((index / questions.length) * 100) + '% mapped</span></div><div class="quiz-progress-track"><div class="quiz-progress-fill" style="width:' + ((index / questions.length) * 100) + '%"></div></div></div><p class="eyebrow">AI HEALTH CHECK · ' + String(index + 1).padStart(2, '0') + '</p><h3 class="quiz-title">' + question.title + '</h3><p class="quiz-question">' + question.prompt + '</p><div class="quiz-options">' + question.options.map(function(option, optionIndex) { return '<label class="quiz-option"><input type="radio" name="q' + index + '" value="' + option[1] + '"><span>' + option[0] + '</span><span class="quiz-option-mark" aria-hidden="true">✓</span></label>'; }).join('') + '</div><p class="quiz-reward" aria-live="polite"></p><div class="quiz-nav"><button class="btn-primary quiz-prev" type="button">Back</button><button class="btn-primary btn-bronze quiz-next" type="button" disabled>' + (index === questions.length - 1 ? 'See My Readiness Map' : 'Next question') + '</button></div></section>';
    }).join('') + '<section class="results-container" id="quiz-results"><p class="eyebrow">YOUR READINESS MAP</p><h2 class="quiz-title">You have a useful starting point.</h2><p class="quiz-question" id="quiz-result-message">Your answers show where practical support could make the biggest difference.</p><div class="results-ring"><svg viewBox="0 0 200 200"><circle class="results-ring-bg" cx="100" cy="100" r="90"></circle><circle class="results-ring-fill" id="results-fill" cx="100" cy="100" r="90"></circle></svg><div class="results-score"><div class="results-score-value" id="results-total">0%</div><div class="results-score-label">AI readiness</div></div></div><div class="results-grid"><div class="results-item"><div class="results-item-value" id="score-foundations">0%</div><div class="results-item-label">Foundations</div></div><div class="results-item"><div class="results-item-value" id="score-workflows">0%</div><div class="results-item-label">Workflows</div></div><div class="results-item"><div class="results-item-value" id="score-trust">0%</div><div class="results-item-label">Trust & visibility</div></div></div><a href="contact.html" class="btn-primary btn-bronze">Talk through my map</a></section>';

    const intro = quizHost.querySelector('.quiz-intro-screen');
    const screens = Array.from(quizHost.querySelectorAll('.quiz-screen'));
    const results = quizHost.querySelector('#quiz-results');
    const start = quizHost.querySelector('.quiz-start-btn');
    function updateProgress(index) {
      const screen = screens[index];
      if (!screen) return;
      const percent = Math.round(((index + 1) / questions.length) * 100);
      screen.querySelector('.quiz-progress-fill').style.width = percent + '%';
      screen.querySelector('.quiz-progress-percent').textContent = percent + '% mapped';
    }
    function showQuestion(index) {
      state.index = index;
      intro.classList.remove('active');
      results.classList.remove('active');
      screens.forEach(function(screen, screenIndex) { screen.classList.toggle('active', screenIndex === index); });
      updateProgress(index);
      const selected = screens[index].querySelector('input:checked');
      const next = screens[index].querySelector('.quiz-next');
      next.disabled = !selected;
      if (selected) selected.closest('.quiz-option').classList.add('is-selected');
    }
    function finish() {
      const total = state.answers.reduce(function(sum, value) { return sum + (value || 0); }, 0);
      const percent = Math.round((total / (questions.length * 10)) * 100);
      quizHost.querySelector('#results-total').textContent = percent + '%';
      quizHost.querySelector('#score-foundations').textContent = Math.round(((state.answers[0] + state.answers[3] + state.answers[8]) / 30) * 100) + '%';
      quizHost.querySelector('#score-workflows').textContent = Math.round(((state.answers[1] + state.answers[4] + state.answers[6]) / 30) * 100) + '%';
      quizHost.querySelector('#score-trust').textContent = Math.round(((state.answers[2] + state.answers[5] + state.answers[7] + state.answers[9]) / 40) * 100) + '%';
      quizHost.querySelector('#quiz-result-message').textContent = percent < 40 ? 'You have clear opportunities to reduce admin and build safe foundations. Start with one workflow, not ten tools.' : percent < 75 ? 'You have useful foundations. The next gains are likely to come from connecting workflows and giving your team a shared approach.' : 'You have a strong base. The next step is making the systems more joined-up, visible and genuinely useful to the people using them.';
      screens.forEach(function(screen) { screen.classList.remove('active'); });
      results.classList.add('active');
      const fill = quizHost.querySelector('#results-fill');
      requestAnimationFrame(function() { fill.style.strokeDashoffset = 565 - (percent / 100) * 565; });
    }
    start.addEventListener('click', function() { showQuestion(0); });
    quizHost.addEventListener('change', function(event) {
      if (!event.target.matches('input[type="radio"]') || !event.target.name.startsWith('q')) return;
      const index = Number(event.target.name.slice(1));
      state.answers[index] = Number(event.target.value);
      const screen = screens[index];
      screen.querySelectorAll('.quiz-option').forEach(function(option) { option.classList.remove('is-selected'); });
      event.target.closest('.quiz-option').classList.add('is-selected');
      const reward = screen.querySelector('.quiz-reward');
      reward.textContent = encouragements[index % encouragements.length];
      reward.classList.remove('reward-pop');
      void reward.offsetWidth;
      reward.classList.add('reward-pop');
      screen.querySelector('.quiz-next').disabled = false;
    });
    quizHost.addEventListener('click', function(event) {
      const next = event.target.closest('.quiz-next');
      const prev = event.target.closest('.quiz-prev');
      if (next && !next.disabled) state.index === questions.length - 1 ? finish() : showQuestion(state.index + 1);
      if (prev && state.index > 0) showQuestion(state.index - 1);
    });
  }

  // ========== COOKIE CONSENT ==========
  const cookieBar = document.getElementById('cookie-bar');
  const cookieAccept = document.getElementById('cookie-accept');
  const cookieDecline = document.getElementById('cookie-decline');

  function showCookieBar() {
    if (cookieBar && !localStorage.getItem('cookieConsent')) {
      cookieBar.classList.add('visible');
    }
  }

  function hideCookieBar() {
    if (cookieBar) {
      cookieBar.classList.remove('visible');
    }
  }

  if (cookieAccept) {
    cookieAccept.addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'accepted');
      hideCookieBar();
    });
  }

  if (cookieDecline) {
    cookieDecline.addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'declined');
      hideCookieBar();
    });
  }

  // Show cookie bar after short delay
  setTimeout(showCookieBar, 1000);

  // ========== INTERSECTION OBSERVER (Reduced Motion Aware) ==========
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const bentoCards = document.querySelectorAll('.bento-card');
    bentoCards.forEach(function(card, index) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      card.style.transitionDelay = (index * 0.1) + 's';
      observer.observe(card);
    });
  }

  // ========== KEYBOARD NAVIGATION ==========
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMobile && navMobile.classList.contains('active')) {
      navToggle.setAttribute('aria-expanded', 'false');
      navMobile.classList.remove('active');
      document.body.style.overflow = '';
      navToggle.focus();
    }
  });
})();
