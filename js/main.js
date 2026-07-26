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
    const categories = [
      { key: 'foundations', label: 'Foundations', indices: [0, 3, 8], description: 'Confidence, safe data boundaries and a shared way of working.' },
      { key: 'workflows', label: 'Workflows', indices: [1, 4, 6], description: 'The practical systems that return time and reduce repeated admin.' },
      { key: 'trust', label: 'Trust & visibility', indices: [2, 5, 7, 9], description: 'How clearly people and modern AI systems can understand your work.' }
    ];
    const categoryForIndex = ['foundations', 'workflows', 'trust', 'foundations', 'workflows', 'trust', 'workflows', 'trust', 'foundations', 'trust'];
    const state = { index: -1, answers: Array(questions.length).fill(null) };
    const encouragements = ['That gives us a useful starting point.', 'Good — we are building a clearer picture.', 'Useful signal. Keep going.', 'That is exactly the kind of detail this check is for.'];

    const progressRail = questions.map(function(question, index) {
      return '<li class="quiz-rail-step" data-rail-step="' + index + '"><span>' + String(index + 1).padStart(2, '0') + '</span><strong>' + question.title + '</strong></li>';
    }).join('');
    const questionScreens = questions.map(function(question, index) {
      return '<section class="quiz-screen" data-screen="' + index + '" data-category="' + categoryForIndex[index] + '"><div class="quiz-progress"><div class="quiz-progress-head"><span class="quiz-progress-label">Question ' + (index + 1) + ' of ' + questions.length + '</span><span class="quiz-progress-percent">' + Math.round((index / questions.length) * 100) + '% mapped</span></div><div class="quiz-progress-track"><div class="quiz-progress-fill" style="width:' + ((index / questions.length) * 100) + '%"></div></div></div><p class="eyebrow">AI HEALTH CHECK · ' + String(index + 1).padStart(2, '0') + '</p><h3 class="quiz-title">' + question.title + '</h3><p class="quiz-question">' + question.prompt + '</p><div class="quiz-options">' + question.options.map(function(option) { return '<label class="quiz-option"><input type="radio" name="q' + index + '" value="' + option[1] + '"><span>' + option[0] + '</span><span class="quiz-option-mark" aria-hidden="true">✓</span></label>'; }).join('') + '</div><p class="quiz-reward" aria-live="polite"></p><div class="quiz-nav"><button class="btn-primary quiz-prev" type="button">Back</button><button class="btn-primary btn-bronze quiz-next" type="button" disabled>' + (index === questions.length - 1 ? 'See My Readiness Map' : 'Next question') + '</button></div></section>';
    }).join('');
    const categoryResults = categories.map(function(category) {
      return '<article class="results-item" data-result-category="' + category.key + '"><div class="results-item-head"><div class="results-item-value" id="score-' + category.key + '">0%</div><div class="results-item-label">' + category.label + '</div></div><div class="results-item-meter"><span id="meter-' + category.key + '"></span></div><p id="outcome-' + category.key + '" class="results-item-outcome">' + category.description + '</p></article>';
    }).join('');
    quizHost.innerHTML = `<div class="quiz-instrument"><aside class="quiz-rail" aria-label="Health Check progress"><p class="eyebrow">YOUR STARTING POINT</p><ol>` + progressRail + `</ol><p class="quiz-rail-note">A calm ten-question map of where useful AI support could begin.</p></aside><div class="quiz-stage"><div class="quiz-intro-screen"><p class="eyebrow">10 QUESTIONS · 3 MINUTES · NO SIGN-UP</p><h2 class="quiz-title">Your AI Health Check — How Ready Are You?</h2><p class="quiz-question">This is not a test. It is a quick map of where AI could reduce friction, improve visibility and support your team.</p><div class="quiz-options"><label class="quiz-option"><input type="radio" name="path" value="myself"><span><strong>I'm doing this for myself</strong><small>Freelancer, sole trader or exploring AI for personal upskilling.</small></span></label><label class="quiz-option"><input type="radio" name="path" value="business"><span><strong>I'm doing this for my business</strong><small>Owner, tradesperson or team lead looking to work smarter.</small></span></label></div><div class="quiz-nav"><span></span><button class="btn-primary btn-bronze quiz-start-btn">Start My Check</button></div></div>` + questionScreens + `<section class="results-container" id="quiz-results"><p class="eyebrow">YOUR READINESS MAP</p><h2 class="quiz-title">A useful starting point, made visible.</h2><p class="quiz-question" id="quiz-result-message">Your answers show where practical support could make the biggest difference.</p><div class="results-overview"><div class="results-ring"><svg viewBox="0 0 200 200"><circle class="results-ring-bg" cx="100" cy="100" r="90"></circle><circle class="results-ring-fill" id="results-fill" cx="100" cy="100" r="90"></circle></svg><div class="results-score"><div class="results-score-value" id="results-total">0%</div><div class="results-score-label">AI readiness</div></div></div><div class="results-summary-copy"><p class="eyebrow">THREE SIGNALS TO WORK FROM</p><p>Use this map as a conversation starter, not a verdict. The strongest next step is usually one small, visible improvement.</p></div></div><div class="results-grid">` + categoryResults + `</div><div class="results-actions"><button type="button" class="btn-primary btn-bronze quiz-share">Share my starting point</button><button type="button" class="btn-primary quiz-download">Download summary</button></div><p class="quiz-share-status" aria-live="polite"></p><a href="contact.html" class="btn-primary btn-bronze">Talk through my map</a></section></div></div>`;

    const intro = quizHost.querySelector('.quiz-intro-screen');
    intro.classList.add('active');
    const screens = Array.from(quizHost.querySelectorAll('.quiz-screen'));
    const results = quizHost.querySelector('#quiz-results');
    const start = quizHost.querySelector('.quiz-start-btn');
    const railSteps = Array.from(quizHost.querySelectorAll('.quiz-rail-step'));
    const shareStatus = quizHost.querySelector('.quiz-share-status');
    let resultData = null;
    function updateRail(index) {
      railSteps.forEach(function(step, stepIndex) {
        const complete = stepIndex < index || state.answers[stepIndex] !== null;
        step.classList.toggle('is-complete', complete);
        step.classList.toggle('is-current', stepIndex === index);
        if (stepIndex === index) step.setAttribute('aria-current', 'step');
        else step.removeAttribute('aria-current');
      });
    }
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
      updateRail(index);
      const selected = screens[index].querySelector('input:checked');
      const next = screens[index].querySelector('.quiz-next');
      next.disabled = !selected;
      if (selected) selected.closest('.quiz-option').classList.add('is-selected');
    }
    function finish() {
      const total = state.answers.reduce(function(sum, value) { return sum + (value || 0); }, 0);
      const percent = Math.round((total / (questions.length * 10)) * 100);
      const scores = {};
      categories.forEach(function(category) {
        scores[category.key] = Math.round((category.indices.reduce(function(sum, index) { return sum + state.answers[index]; }, 0) / (category.indices.length * 10)) * 100);
      });
      function categoryOutcome(category, score) {
        if (category.key === 'foundations') return score < 40 ? 'Start with safe data boundaries and one shared AI habit.' : score < 75 ? 'Your base is forming; make the safe approach visible to everyone.' : 'A strong base. Document it so confidence survives change.';
        if (category.key === 'workflows') return score < 40 ? 'Choose one repeated admin task and make its next step obvious.' : score < 75 ? 'There are useful connections to make between the tools you already use.' : 'Your workflows are ready for careful optimisation and human checks.';
        return score < 40 ? 'Clarify how people find, read and trust your digital presence.' : score < 75 ? 'Improve the signals that help people and AI systems understand you.' : 'You have a strong platform for visible, human-supervised growth.';
      }
      quizHost.querySelector('#results-total').textContent = percent + '%';
      categories.forEach(function(category) {
        quizHost.querySelector('#score-' + category.key).textContent = scores[category.key] + '%';
        quizHost.querySelector('#outcome-' + category.key).textContent = categoryOutcome(category, scores[category.key]);
      });
      quizHost.querySelector('#quiz-result-message').textContent = percent < 40 ? 'You have clear opportunities to reduce admin and build safe foundations. Start with one workflow, not ten tools.' : percent < 75 ? 'You have useful foundations. The next gains are likely to come from connecting workflows and giving your team a shared approach.' : 'You have a strong base. The next step is making the systems more joined-up, visible and genuinely useful to the people using them.';
      resultData = { percent: percent, scores: scores };
      screens.forEach(function(screen) { screen.classList.remove('active'); });
      results.classList.add('active');
      updateRail(questions.length);
      const fill = quizHost.querySelector('#results-fill');
      requestAnimationFrame(function() {
        fill.style.strokeDashoffset = 565 - (percent / 100) * 565;
        categories.forEach(function(category) {
          quizHost.querySelector('#meter-' + category.key).style.width = scores[category.key] + '%';
        });
      });
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
    function summaryText() {
      if (!resultData) return '';
      return 'AiGENCY AI Health Check\nOverall readiness: ' + resultData.percent + '%\n\n' + categories.map(function(category) {
        return category.label + ': ' + resultData.scores[category.key] + '%';
      }).join('\n') + '\n\nA practical starting point for human-supervised AI support.\nhttps://aigency.ltd/ai-health-check.html';
    }
    quizHost.querySelector('.quiz-share').addEventListener('click', function() {
      const text = summaryText();
      if (!text) return;
      const button = this;
      const done = function(message) { shareStatus.textContent = message; button.textContent = 'Copied to clipboard'; setTimeout(function() { button.textContent = 'Share my starting point'; }, 2200); };
      if (navigator.share) {
        navigator.share({ title: 'My AiGENCY AI Health Check', text: text }).then(function() { done('Share sheet opened.'); }).catch(function() {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() { done('Your starting point is ready to paste.'); });
      }
    });
    quizHost.querySelector('.quiz-download').addEventListener('click', function() {
      const text = summaryText();
      if (!text) return;
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'aigency-ai-health-check-starting-point.txt';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(link.href);
      shareStatus.textContent = 'Your starting-point summary has downloaded.';
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

  // ========== SCROLL-LED BENTO CHOREOGRAPHY (Reduced Motion Aware) ==========
  // Reveal labels first, then bring cards in three-at-a-time waves. The classes
  // are added by JavaScript so a failed script never leaves content invisible.
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.12
    });

    function registerReveal(target, delay) {
      target.classList.add('motion-reveal');
      target.style.setProperty('--motion-delay', delay + 'ms');
      observer.observe(target);
    }

    document.querySelectorAll('.page-intro, .homepage-section-heading').forEach(function(label) {
      registerReveal(label, 0);
    });

    document.querySelectorAll('.bento-grid, .homepage-service-grid').forEach(function(grid) {
      Array.from(grid.children).filter(function(child) {
        return child.classList.contains('bento-card');
      }).forEach(function(card, index) {
        registerReveal(card, (index % 3) * 90);

        const label = card.querySelector(':scope > .eyebrow');
        if (label) label.classList.add('motion-label');

        card.querySelectorAll(':scope > svg.icon, :scope > svg.service-icon').forEach(function(icon) {
          icon.classList.add('motion-icon');
        });
      });
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
