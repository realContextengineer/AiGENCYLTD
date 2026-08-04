/* ========================================
   AIGENCY.LTD - MAIN JAVASCRIPT
   Mobile Navigation, Quiz Logic & Interactions
   ======================================== */

(function() {
  'use strict';

  // Public Supabase configuration. The publishable key is safe to expose in
  // the static site; Row Level Security controls anonymous access.
  const SUPABASE_URL = 'https://wewucfgrtxpolxlxmitq.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_fNprfjd08FhOtHorM-IAjw_fJqDYSyr';

  async function supabaseInsert(table, payload) {
    const response = await fetch(SUPABASE_URL + '/rest/v1/' + table, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_PUBLISHABLE_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const detail = await response.text().catch(function() { return ''; });
      throw new Error(detail || 'The submission could not be saved.');
    }
  }

  // ========== INSIGHTS PUBLISHING ==========
  // The public view is deliberately capped by the database, and we cap again
  // here. New agent-published posts replace fixed cards; they never append a
  // growing feed to this page.
  async function supabaseSelect(table, query) {
    const response = await fetch(SUPABASE_URL + '/rest/v1/' + table + '?' + query, {
      headers: {
        'apikey': SUPABASE_PUBLISHABLE_KEY,
        'Accept': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('The public Insights feed could not be loaded.');
    }
    return response.json();
  }

  const insightThemes = {
    'ai-governance': 'hero-theme',
    'ai-workflows': 'training-theme',
    'ai-search': 'warm-theme',
    'human-centred-ai': 'bronze-theme'
  };

  function insightCategoryLabel(slug) {
    return String(slug || 'AI INSIGHT').replace(/-/g, ' ').toUpperCase();
  }

  function insightDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '';
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric', month: 'long', year: 'numeric'
    }).format(date).toUpperCase();
  }

  function insightMeta(post) {
    const parts = [insightDate(post.published_at), insightCategoryLabel(post.category_slug)].filter(Boolean);
    return parts.join(' · ');
  }

  function insightLink(slug) {
    // The local preview has no Netlify rewrite layer; production uses a real,
    // server-rendered article URL so crawlers receive the article metadata.
    if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
      return 'blog.html?insight=' + encodeURIComponent(slug);
    }
    return '/insights/' + encodeURIComponent(slug) + '/';
  }

  function createInsightElement(tag, text, className) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  }

  function renderInsightCard(card, post, featured) {
    const theme = insightThemes[post.category_slug] || 'bronze-theme';
    card.className = 'bento-card ' + (featured ? 'span-8 ' : 'span-6 ') + theme;
    card.hidden = false;
    card.replaceChildren(
      createInsightElement('p', insightMeta(post), 'eyebrow'),
      createInsightElement('h2', post.title || 'New AI insight'),
      createInsightElement('p', post.excerpt || '')
    );
    const link = createInsightElement('a', 'Read the post', 'btn-primary' + (theme === 'bronze-theme' ? ' btn-bronze' : ''));
    link.href = insightLink(post.slug);
    card.appendChild(link);
  }

  function appendSafeMarkdown(container, markdown) {
    const lines = String(markdown || '').replace(/\r/g, '').split('\n');
    let paragraph = [];
    let list;

    function flushParagraph() {
      if (!paragraph.length) return;
      container.appendChild(createInsightElement('p', paragraph.join(' ')));
      paragraph = [];
    }
    function flushList() {
      if (!list) return;
      container.appendChild(list);
      list = null;
    }

    lines.forEach(function(rawLine) {
      const line = rawLine.trim();
      if (!line) {
        flushParagraph();
        flushList();
        return;
      }
      const heading = line.match(/^(#{1,3})\s+(.+)$/);
      const bullet = line.match(/^[-*]\s+(.+)$/);
      if (heading) {
        flushParagraph();
        flushList();
        container.appendChild(createInsightElement(heading[1].length === 1 ? 'h2' : 'h3', heading[2]));
      } else if (bullet) {
        flushParagraph();
        if (!list) list = document.createElement('ul');
        list.appendChild(createInsightElement('li', bullet[1]));
      } else {
        flushList();
        paragraph.push(line);
      }
    });
    flushParagraph();
    flushList();
  }

  function safeExternalUrl(value) {
    try {
      const url = new URL(value);
      return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : null;
    } catch (error) {
      return null;
    }
  }

  function renderInsightDetail(post) {
    const detailSection = document.querySelector('[data-insight-detail-section]');
    const detail = document.querySelector('[data-insight-detail]');
    const meta = document.querySelector('[data-insight-detail-meta]');
    const title = document.querySelector('[data-insight-detail-title]');
    const excerpt = document.querySelector('[data-insight-detail-excerpt]');
    const body = document.querySelector('[data-insight-detail-body]');
    const sourcesSection = document.querySelector('[data-insight-detail-sources]');
    const sourcesList = document.querySelector('[data-insight-detail-sources-list]');
    if (!detailSection || !detail || !meta || !title || !excerpt || !body || !sourcesSection || !sourcesList) return;

    document.querySelectorAll('[data-insights-page-intro], [data-insights-featured-section], [data-insights-shelf-section], [data-insights-archive-section]').forEach(function(section) {
      section.hidden = true;
    });
    meta.textContent = insightMeta(post);
    title.textContent = post.title || 'AI insight';
    excerpt.textContent = post.excerpt || '';
    body.replaceChildren();
    appendSafeMarkdown(body, post.body_markdown);
    sourcesList.replaceChildren();
    const sources = Array.isArray(post.sources) ? post.sources : [];
    sources.forEach(function(source) {
      const url = safeExternalUrl(source && source.url);
      if (!url) return;
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = source.title || source.publisher || url;
      item.appendChild(link);
      if (source.publisher) item.appendChild(document.createTextNode(' · ' + source.publisher));
      sourcesList.appendChild(item);
    });
    sourcesSection.hidden = sourcesList.children.length === 0;
    detailSection.hidden = false;
    detail.focus();
    document.title = (post.seo_title || post.title || 'AI insight') + ' | AiGENCY Ltd';
  }

  async function loadPublishedInsights() {
    const featuredCard = document.querySelector('[data-insights-featured]');
    const shelfCards = Array.from(document.querySelectorAll('[data-insights-shelf-slot]'));
    if (!featuredCard && !shelfCards.length) return;

    try {
      const posts = await supabaseSelect('insights_page', 'select=*&order=published_at.desc');
      const visiblePosts = Array.isArray(posts) ? posts : [];
      const requestedSlug = new URLSearchParams(window.location.search).get('insight');
      if (requestedSlug) {
        const requestedPost = visiblePosts.find(function(post) { return post.slug === requestedSlug; });
        if (requestedPost) renderInsightDetail(requestedPost);
        return;
      }

      const featured = visiblePosts.filter(function(post) { return post.display_zone === 'featured'; }).slice(0, 1);
      const shelf = visiblePosts.filter(function(post) { return post.display_zone === 'shelf'; }).slice(0, 6);
      if (featured.length && featuredCard) renderInsightCard(featuredCard, featured[0], true);
      shelf.forEach(function(post, index) {
        if (shelfCards[index]) renderInsightCard(shelfCards[index], post, false);
      });
    } catch (error) {
      // The static editorial cards remain as a useful, crawlable fallback.
    }
  }

  loadPublishedInsights();

  // ========== MOBILE NAVIGATION ==========
  const navToggle = document.querySelector('.nav-toggle');
  const navMobile = document.querySelector('.nav-mobile');

  // ========== PRIMARY SITE NAVIGATION ==========
  // The canonical menu is authored directly in every page's HTML so crawlers,
  // no-JavaScript clients and normal browser loads all receive the same links.
  // JavaScript only applies current-page state and controls the mobile drawer.

  // ========== CURRENT NAVIGATION STATE ==========
  const navPath = window.location.pathname.split('/').pop() || 'index.html';
  const insightPages = [
    'blog.html',
    'faq.html',
    'chatgpt.html',
    'blog-chatgpt-business.html',
    'blog-small-business-bournemouth.html',
    'blog-human-oversight.html',
    'blog-ethical-agents.html',
    'blog-ai-act-chatbots.html',
    'blog-gdpr-ai-workflows.html',
    'blog-ai-content-search.html',
    'blog-ai-agent-web-readiness.html'
  ];
  const navKey = navPath === 'index.html'
      ? 'home'
      : navPath === 'services.html'
      || navPath === 'creative-design.html'
      || navPath === 'how-it-works.html'
      ? 'services'
      : navPath === 'training.html'
        ? 'training'
      : navPath === 'ai-transparency.html'
        ? 'transparency'
      : navPath === 'seo-ai-search-visibility.html'
        ? 'search'
      : navPath === 'hermes-agents.html'
        ? 'agents'
      : navPath === 'aria.html'
        ? 'agents'
      : insightPages.indexOf(navPath) !== -1
        ? 'insights'
      : navPath === 'about.html'
        ? 'about'
      : navPath === 'ai-health-check.html' || navPath === 'contact.html'
        ? 'start'
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

  // Carry a scan request into the existing contact handoff without exposing
  // private crawler credentials or pretending the static site has run a scan.
  const contactParams = new URLSearchParams(window.location.search);
  const serviceField = document.getElementById('service');
  const messageField = document.getElementById('message');
  if (serviceField && contactParams.get('service')) serviceField.value = contactParams.get('service');
  if (messageField && contactParams.get('website')) {
    const requestedService = contactParams.get('service') || '';
    const isSearchRequest = requestedService.toLowerCase().indexOf('search') !== -1;
    messageField.value = isSearchRequest
      ? 'Website requested for AI Search review: ' + contactParams.get('website') + '\n\nPlease tell me what you would like to improve about how this site is found and understood in search.'
      : 'Website requested for transparency scan: ' + contactParams.get('website') + '\n\nPlease tell me what you would like to understand about the public-facing AI transparency of this site.';
  }

  // ========== ARTICLE 50 DASHBOARD PARALLAX ==========
  const scanParallaxScene = document.querySelector('.scan-parallax-scene');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (scanParallaxScene && !reducedMotion.matches) {
    let parallaxFrame = null;
    const updateScanParallax = function() {
      const offset = Math.max(-150, Math.round(window.scrollY * -0.045));
      scanParallaxScene.style.setProperty('--scan-parallax', offset + 'px');
      parallaxFrame = null;
    };
    updateScanParallax();
    window.addEventListener('scroll', function() {
      if (parallaxFrame !== null) return;
      parallaxFrame = window.requestAnimationFrame(updateScanParallax);
    }, { passive: true });
  }

  // Page wallpapers move at different restrained rates to create depth without
  // moving the copy or glass surfaces.
  const wallpaperPages = document.querySelectorAll('.services-page, .health-check-page, .design-page, .visibility-page, .transparency-page, .compliance-page, .about-page');
  if (wallpaperPages.length && !reducedMotion.matches) {
    let wallpaperParallaxFrame = null;
    const updateWallpaperParallax = function() {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      wallpaperPages.forEach(function(page) {
        const distance = parseFloat(getComputedStyle(page).getPropertyValue('--page-parallax-distance')) || -140;
        page.style.setProperty('--page-wallpaper-y', Math.round(scrollProgress * distance) + 'px');
      });
      wallpaperParallaxFrame = null;
    };
    updateWallpaperParallax();
    window.addEventListener('scroll', function() {
      if (wallpaperParallaxFrame !== null) return;
      wallpaperParallaxFrame = window.requestAnimationFrame(updateWallpaperParallax);
    }, { passive: true });
  }

  // ========== SERVICE ARTWORK DEPTH ==========
  // Keep commissioned artwork atmospheric and subordinate to the copy. The
  // movement is intentionally small and disappears for reduced-motion users.
  const serviceArtwork = document.querySelectorAll('.service-page-feature-image');
  if (serviceArtwork.length && !reducedMotion.matches && window.innerWidth > 680) {
    let serviceParallaxFrame = null;
    const updateServiceParallax = function() {
      serviceArtwork.forEach(function(image) {
        const host = image.closest('.services-journey-card, .service-page-feature');
        if (!host) return;
        const rect = host.getBoundingClientRect();
        const distanceFromViewportCentre = (window.innerHeight / 2) - (rect.top + rect.height / 2);
        const offset = Math.max(-16, Math.min(16, Math.round(distanceFromViewportCentre * -0.022)));
        image.style.setProperty('--service-parallax', offset + 'px');
      });
      serviceParallaxFrame = null;
    };
    updateServiceParallax();
    window.addEventListener('scroll', function() {
      if (serviceParallaxFrame !== null) return;
      serviceParallaxFrame = window.requestAnimationFrame(updateServiceParallax);
    }, { passive: true });
  }

  // ========== ARTICLE 50 SIMPLE CHECK ==========
  // A plain-language selector helps visitors choose a starting point before
  // they submit a public website URL. It is a guide, not a compliance verdict.
  const article50Check = document.querySelector('.scan-article50-check');
  if (article50Check) {
    const choices = Array.from(article50Check.querySelectorAll('.scan-article50-choice'));
    const result = article50Check.querySelector('#article50-result');
    const resultTitle = article50Check.querySelector('#article50-result-title');
    const resultCopy = article50Check.querySelector('#article50-result-copy');
    const resultText = {
      interaction: ['Start with first-contact disclosure and human handover.', 'Make it clear when someone is meeting AI, what it can do and how they reach a person.'],
      content: ['Start with content labels and provenance.', 'Map where AI-generated or manipulated content is published and which marking or review signals are available.'],
      disclosure: ['Start with public-facing disclosure wording.', 'Check images, video and public-interest text for clear explanations where Article 50 applies.'],
      sensitive: ['Start with human confirmation.', 'Emotion recognition and biometric categorisation need information about the system and its use that a public crawl may not be able to prove.']
    };

    choices.forEach(function(choice) {
      choice.addEventListener('click', function() {
        const key = choice.getAttribute('data-article50-choice');
        const isSelected = choice.classList.toggle('is-selected');
        choice.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
        const selected = choices.filter(function(item) { return item.classList.contains('is-selected'); });
        if (!selected.length) {
          result.hidden = true;
          return;
        }
        const firstKey = selected[0].getAttribute('data-article50-choice');
        const copy = resultText[firstKey];
        resultTitle.textContent = selected.length > 1 ? 'Start with a public-surface review, then confirm the details.' : copy[0];
        resultCopy.textContent = selected.length > 1 ? 'You have more than one Article 50 signal to check. Begin with what visitors can see, then confirm the internal systems and review responsibilities.' : copy[1];
        result.hidden = false;
      });
    });
  }

  // ========== AI SEARCH VISIBILITY CHECK ==========
  // The page only shows evidence returned by the safe, public-surface scanner.
  // It deliberately never converts a structural signal into a citation promise.
  const visibilityCheck = document.querySelector('.ai-visibility-check');
  if (visibilityCheck && visibilityCheck.getAttribute('data-scanner-status') !== 'coming-soon') {
    const visibilityForm = visibilityCheck.querySelector('.ai-visibility-form');
    const urlInput = visibilityCheck.querySelector('[name="url"]');
    const depthInput = visibilityCheck.querySelector('[name="depth"]');
    const localInput = visibilityCheck.querySelector('[name="local"]');
    const submitButton = visibilityForm.querySelector('button[type="submit"]');
    const progress = visibilityCheck.querySelector('.ai-scan-progress');
    const progressLabel = visibilityCheck.querySelector('.ai-scan-progress-label');
    const result = visibilityCheck.querySelector('.ai-scan-result');
    const error = visibilityCheck.querySelector('.ai-scan-error');
    const categoryGrid = visibilityCheck.querySelector('[data-scan-categories]');
    const domainTarget = visibilityCheck.querySelector('[data-scan-domain]');
    const scoreTarget = visibilityCheck.querySelector('[data-scan-score]');
    const limitTarget = visibilityCheck.querySelector('[data-scan-limit]');
    const reportLink = visibilityCheck.querySelector('[data-scan-report]');
    const emailLink = visibilityCheck.querySelector('[data-scan-email]');
    const auditLink = visibilityCheck.querySelector('[data-scan-audit]');
    const progressMessages = ['Checking public access…', 'Checking robots.txt and discovery files…', 'Reading structure and schema…', 'Mapping observable content signals…', 'Generating your evidence summary…'];

    const showError = function(message) {
      error.textContent = message;
      error.hidden = false;
    };

    const categoryState = function(category) {
      const ratio = category.total ? category.pass / category.total : 0;
      if (ratio >= 0.8) return 'is-pass';
      if (ratio >= 0.45) return 'is-warn';
      return 'is-gap';
    };

    visibilityForm.addEventListener('submit', async function(event) {
      event.preventDefault();
      error.hidden = true;
      result.hidden = true;
      if (!urlInput.value.trim()) {
        showError('Enter a public website address to run the check.');
        urlInput.focus();
        return;
      }
      submitButton.disabled = true;
      submitButton.textContent = 'Checking…';
      progress.hidden = false;
      let progressIndex = 0;
      progressLabel.textContent = progressMessages[progressIndex];
      const progressTimer = window.setInterval(function() {
        progressIndex = Math.min(progressIndex + 1, progressMessages.length - 1);
        progressLabel.textContent = progressMessages[progressIndex];
      }, 750);
      try {
        const endpoint = visibilityCheck.getAttribute('data-scan-endpoint');
        const response = await window.fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: urlInput.value.trim(), depth: depthInput.checked ? 'five-page' : 'single', local: Boolean(localInput && localInput.checked) })
        });
        const payload = await response.json().catch(function() { return {}; });
        if (!response.ok) throw new Error(payload.error || 'The public visibility check could not be completed.');
        const parsedUrl = new URL(payload.url);
        domainTarget.textContent = parsedUrl.hostname;
        scoreTarget.textContent = String(payload.score);
        categoryGrid.innerHTML = (payload.categories || []).map(function(category) {
          return '<div class="ai-scan-category ' + categoryState(category) + '"><strong>' + category.name + '</strong><span>' + category.pass + ' / ' + category.total + ' signals found</span></div>';
        }).join('');
        limitTarget.textContent = (payload.limits || []).join(' ');
        const handoff = '&website=' + encodeURIComponent(payload.url);
        emailLink.href = 'contact.html?service=AI%20Search%20Visibility%20Report' + handoff;
        auditLink.href = 'contact.html?service=Full%20AI%20Search%20Audit' + handoff;
        reportLink.href = '#scan-checks';
        result.hidden = false;
        result.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'nearest' });
      } catch (requestError) {
        showError(requestError.message || 'The public visibility check could not be completed. Please try again.');
      } finally {
        window.clearInterval(progressTimer);
        progress.hidden = true;
        submitButton.disabled = false;
        submitButton.textContent = 'Run Check →';
      }
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
      { title: 'Using AI day to day', prompt: 'Do you use tools such as ChatGPT to help with regular work?', options: [['Yes, we use AI regularly.', 10], ['Sometimes, but we are still finding our feet.', 5], ["No, not yet.", 0]] },
      { title: 'Time spent on admin', prompt: 'Do repeated tasks like emails, quotes, invoices or bookings take up too much of your day?', options: [['No, our admin is under control.', 10], ['Sometimes, depending on the day.', 5], ['Yes, it takes up too much time.', 0]] },
      { title: 'Being found in AI search', prompt: 'If someone asks ChatGPT or Google for a business like yours, are you confident it will find you?', options: [['Yes, we are easy to find.', 10], ['I am not sure.', 5], ['No, we are hard to find.', 0]] },
      { title: 'Keeping information safe', prompt: 'Do you know what private information should never be put into a public AI tool?', options: [['Yes, we have clear rules.', 10], ['We are not completely sure.', 5], ['No, we need clear rules.', 0]] },
      { title: 'Your tools working together', prompt: 'Do your email, calendar, booking and customer systems share information, or do you copy it between them?', options: [['They work together.', 10], ['Some work together, some do not.', 5], ['We copy information between them.', 0]] },
      { title: 'A website people can use', prompt: 'Is your website easy to read and use, even for people who find busy screens difficult?', options: [['Yes, it is clear and easy to use.', 10], ['Some parts could be clearer.', 5], ['No, it can be difficult to use.', 0]] },
      { title: 'Replying to new enquiries', prompt: 'Can you reply to new customer enquiries quickly, without putting other work aside?', options: [['Yes, we reply quickly.', 10], ['It depends on how busy we are.', 5], ['No, replies often get delayed.', 0]] },
      { title: 'Sounding like your business', prompt: 'Does your website sound like a real business, rather than feeling generic?', options: [['Yes, it sounds like us.', 10], ['It is partly there.', 5], ['No, it feels quite generic.', 0]] },
      { title: 'Your team using AI safely', prompt: 'Does everyone who uses AI know how to use it safely?', options: [['Yes, everyone has a clear approach.', 10], ['Some people are confident, some are not.', 5], ['No, we need practical guidance.', 0]] },
      { title: 'Being understood online', prompt: 'Can search engines and AI tools easily understand what your business does?', options: [['Yes, our information is clear.', 10], ['I am not sure.', 5], ['No, it is difficult to understand.', 0]] }
    ];
    const categories = [
      { key: 'foundations', label: 'People & safety', indices: [0, 3, 8], description: 'Confidence, simple rules and a shared way to use AI.' },
      { key: 'workflows', label: 'Time & workflows', indices: [1, 4, 6], description: 'Where repeated work can be made easier.' },
      { key: 'trust', label: 'Being found & understood', indices: [2, 5, 7, 9], description: 'How clearly people and search systems understand your business.' }
    ];
    const categoryForIndex = ['foundations', 'workflows', 'trust', 'foundations', 'workflows', 'trust', 'workflows', 'trust', 'foundations', 'trust'];
    const categoryLabels = { foundations: 'People & safety', workflows: 'Time & workflows', trust: 'Being found & understood' };
    const state = { index: -1, answers: Array(questions.length).fill(null) };
    const encouragements = ['That gives us a useful starting point.', 'Good — we are building a clearer picture.', 'Useful signal. Keep going.', 'That is exactly the kind of detail this check is for.'];

    const progressRail = questions.map(function(question, index) {
      return '<li class="quiz-rail-step" data-rail-step="' + index + '"><span>' + String(index + 1).padStart(2, '0') + '</span><strong>' + question.title + '</strong></li>';
    }).join('');
    const questionScreens = questions.map(function(question, index) {
      return '<section class="quiz-screen" data-screen="' + index + '" data-category="' + categoryForIndex[index] + '"><div class="quiz-progress"><div class="quiz-progress-head"><span class="quiz-progress-label">Question ' + (index + 1) + ' of ' + questions.length + '</span><span class="quiz-progress-percent">' + Math.round((index / questions.length) * 100) + '% complete</span></div><div class="quiz-progress-track"><div class="quiz-progress-fill" style="width:' + ((index / questions.length) * 100) + '%"></div></div></div><div class="quiz-question-layout"><div class="quiz-question-panel"><div class="quiz-question-meta"><span class="quiz-category-chip">' + categoryLabels[categoryForIndex[index]] + '</span><span>Question ' + (index + 1) + ' of ' + questions.length + '</span></div><p class="eyebrow">AI HEALTH CHECK · ' + String(index + 1).padStart(2, '0') + '</p><h3 class="quiz-title">' + question.title + '</h3><p class="quiz-question">' + question.prompt + '</p><div class="quiz-options">' + question.options.map(function(option, optionIndex) { return '<label class="quiz-option"><input type="radio" name="q' + index + '" value="' + option[1] + '"><span class="quiz-option-index" aria-hidden="true">0' + (optionIndex + 1) + '</span><span class="quiz-option-copy">' + option[0] + '</span><span class="quiz-option-mark" aria-hidden="true">✓</span></label>'; }).join('') + '</div><p class="quiz-reward" aria-live="polite"></p><div class="quiz-nav"><button class="btn-primary quiz-prev" type="button">Back</button><button class="btn-primary btn-bronze quiz-next" type="button" disabled>' + (index === questions.length - 1 ? 'See My Results' : 'Next Question') + '</button></div></div><aside class="quiz-live-core" aria-hidden="true"><span class="quiz-core-label">YOUR PROGRESS</span><div class="quiz-core-orbit quiz-core-orbit-a"></div><div class="quiz-core-orbit quiz-core-orbit-b"></div><div class="quiz-core-gem"><span>' + String(index + 1).padStart(2, '0') + '</span></div><div class="quiz-core-readout"><span>PEOPLE</span><i></i><span>WORKFLOWS</span><i></i><span>VISIBILITY</span><i></i></div><div class="quiz-core-status">READY FOR YOUR ANSWER</div></aside></div></section>';
    }).join('');
    const categoryResults = categories.map(function(category) {
      return '<article class="results-item" data-result-category="' + category.key + '"><div class="results-item-head"><div class="results-item-value" id="score-' + category.key + '">0%</div><div class="results-item-label">' + category.label + '</div></div><div class="results-item-meter"><span id="meter-' + category.key + '"></span></div><p id="outcome-' + category.key + '" class="results-item-outcome">' + category.description + '</p></article>';
    }).join('');
    quizHost.innerHTML = `<div class="quiz-instrument is-intro"><aside class="quiz-rail" aria-label="AI Health Check progress"><p class="eyebrow">AI HEALTH CHECK</p><ol>` + progressRail + `</ol><p class="quiz-rail-note">Answer 10 simple questions. See where to start.</p></aside><div class="quiz-stage"><div class="quiz-intro-screen"><div class="quiz-intro-visual" aria-hidden="true"><div class="quiz-visual-frame"><img src="assets/services-audit.png" alt="" width="2528" height="1696" loading="lazy" decoding="async"><span class="quiz-visual-grid"></span><span class="quiz-visual-scan"></span><span class="quiz-visual-glow"></span><span class="quiz-visual-node quiz-visual-node-one"></span><span class="quiz-visual-node quiz-visual-node-two"></span><span class="quiz-visual-node quiz-visual-node-three"></span><div class="quiz-visual-console"><span>AI HEALTH CHECK</span><strong>READY TO BEGIN</strong><i></i><i></i><i></i></div></div><div class="quiz-visual-caption"><span>FREE AI HEALTH CHECK</span><strong>See your next step.</strong></div></div><div class="quiz-intro-copy"><p class="eyebrow">FREE AI HEALTH CHECK · ABOUT 3 MINUTES</p><h2 class="quiz-title">How could AI help you?</h2><p class="quiz-question">Answer 10 simple questions and we’ll show you where AI could save time, improve your website or make work easier. No technical knowledge needed.</p><p class="quiz-simple-benefits"><span>NO SIGN-UP</span><span>THIS IS FREE</span></p><p class="quiz-click-prompt"><span>CLICK BELOW TO BEGIN</span><span class="quiz-click-arrow" aria-hidden="true">↓</span></p><div class="quiz-intro-reassurance"><span>NO WRONG ANSWERS</span><span>ABOUT 3 MINUTES</span></div><div class="quiz-options"><label class="quiz-option quiz-path-option quiz-path-personal"><input type="radio" name="path" value="myself"><span class="quiz-option-index" aria-hidden="true">01</span><span class="quiz-path-icon" aria-hidden="true">✦</span><span class="quiz-option-copy"><span class="quiz-path-eyebrow">FOR YOURSELF</span><strong>Help with my own work</strong><small>Find simple ways AI could make your day easier.</small><span class="quiz-path-get"><em>YOU GET</em><span>A clear starting point for your everyday work.</span></span></span><span class="quiz-option-mark" aria-hidden="true">✓</span></label><label class="quiz-option quiz-path-option quiz-path-business"><input type="radio" name="path" value="business"><span class="quiz-option-index" aria-hidden="true">02</span><span class="quiz-path-icon" aria-hidden="true">◈</span><span class="quiz-option-copy"><span class="quiz-path-eyebrow">FOR YOUR BUSINESS</span><strong>Help with my business</strong><small>Find one useful place to save time or serve customers better.</small><span class="quiz-path-get"><em>YOU GET</em><span>A practical first step for your business.</span></span></span><span class="quiz-option-mark" aria-hidden="true">✓</span></label></div><div class="quiz-nav"><span class="quiz-path-prompt">Choose what you want help with.</span><button class="btn-primary btn-bronze quiz-start-btn" type="button" disabled>Start Free AI Health Check</button><a class="btn-primary btn-secondary quiz-agent-demo" href="hermes-agents.html">Skip to Agent Demo</a></div></div></div>` + questionScreens + `<section class="results-container" id="quiz-results"><div class="results-kicker"><span>CHECK COMPLETE</span><i></i><span>10 / 10 QUESTIONS</span></div><p class="eyebrow">YOUR AI HEALTH CHECK</p><h2 class="quiz-title">Here is your starting point.</h2><p class="quiz-question" id="quiz-result-message">This is a helpful guide, not a pass or fail. It shows what to look at first.</p><div class="results-overview"><div class="results-ring"><span class="results-orbit results-orbit-a"></span><span class="results-orbit results-orbit-b"></span><svg viewBox="0 0 200 200"><circle class="results-ring-bg" cx="100" cy="100" r="90"></circle><circle class="results-ring-fill" id="results-fill" cx="100" cy="100" r="90"></circle></svg><div class="results-score"><div class="results-score-value" id="results-total">0%</div><div class="results-score-label">your starting point</div></div></div><div class="results-summary-copy"><p class="eyebrow">THREE AREAS TO LOOK AT</p><p>Start with one small change. You do not need to fix everything at once.</p></div></div><div class="results-grid">` + categoryResults + `</div><div class="results-actions"><button type="button" class="btn-primary btn-bronze quiz-share">Share my results</button><button type="button" class="btn-primary quiz-download">Download my results</button></div><p class="quiz-share-status" aria-live="polite"></p><a href="contact.html" class="btn-primary btn-bronze">Talk through my results</a></section></div></div>`;

    const intro = quizHost.querySelector('.quiz-intro-screen');
    intro.classList.add('active');
    const screens = Array.from(quizHost.querySelectorAll('.quiz-screen'));
    const results = quizHost.querySelector('#quiz-results');
    const start = quizHost.querySelector('.quiz-start-btn');
    const railSteps = Array.from(quizHost.querySelectorAll('.quiz-rail-step'));
    const shareStatus = quizHost.querySelector('.quiz-share-status');
    let resultData = null;
    let healthCheckRecorded = false;
    let selectedPath = 'business';
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
      quizHost.querySelector('.quiz-instrument').classList.remove('is-intro', 'is-results');
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
    async function recordHealthCheck(result) {
      if (healthCheckRecorded) return;
      healthCheckRecorded = true;
      try {
        await supabaseInsert('health_check_results', {
          anonymous_session_id: crypto.randomUUID ? crypto.randomUUID() : undefined,
          path: result.path,
          overall_score: result.percent,
          foundations_score: result.scores.foundations,
          workflows_score: result.scores.workflows,
          trust_score: result.scores.trust,
          answers: {},
          email_opt_in: false,
          source_path: window.location.pathname
        });
      } catch (error) {
        // The quiz remains usable if anonymous recording is unavailable.
        healthCheckRecorded = false;
      }
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
      resultData = { percent: percent, scores: scores, path: selectedPath };
      recordHealthCheck(resultData);
      screens.forEach(function(screen) { screen.classList.remove('active'); });
      quizHost.querySelector('.quiz-instrument').classList.add('is-results');
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
    quizHost.addEventListener('change', function(event) {
      if (!event.target.matches('input[name="path"]')) return;
      selectedPath = event.target.value;
      intro.querySelectorAll('.quiz-option').forEach(function(option) { option.classList.remove('is-selected'); });
      event.target.closest('.quiz-option').classList.add('is-selected');
      start.disabled = false;
      intro.querySelector('.quiz-path-prompt').textContent = 'Instrument ready. Your answers stay in this browser.';
    });
    start.addEventListener('click', function() { if (!start.disabled) showQuestion(0); });
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
      const liveCore = screen.querySelector('.quiz-live-core');
      liveCore.style.setProperty('--signal-strength', Number(event.target.value) / 10);
      liveCore.classList.remove('is-locked');
      void liveCore.offsetWidth;
      liveCore.classList.add('is-locked');
      liveCore.querySelector('.quiz-core-status').textContent = Number(event.target.value) === 10 ? 'STRONG SIGNAL' : Number(event.target.value) === 5 ? 'EMERGING SIGNAL' : 'SUPPORT SIGNAL';
    });
    quizHost.addEventListener('click', function(event) {
      const next = event.target.closest('.quiz-next');
      const prev = event.target.closest('.quiz-prev');
      if (next && !next.disabled) state.index === questions.length - 1 ? finish() : showQuestion(state.index + 1);
      if (prev && state.index > 0) showQuestion(state.index - 1);
      if (prev && state.index === 0) {
        state.index = -1;
        screens[0].classList.remove('active');
        quizHost.querySelector('.quiz-instrument').classList.add('is-intro');
        intro.classList.add('active');
        updateRail(-1);
      }
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

  // ========== CONTACT SUBMISSION ==========
  // Store the enquiry in Supabase. The database trigger places a protected
  // notification in the email outbox; the mail provider can be enabled later.
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = String(formData.get('name') || '').trim();
      const email = String(formData.get('email') || '').trim();
      const service = String(formData.get('service') || '').trim();
      const message = String(formData.get('message') || '').trim();
      const subject = service ? 'AiGENCY enquiry — ' + service : 'AiGENCY website enquiry';
      const body = [
        'Name: ' + name,
        'Email: ' + email,
        service ? 'Service: ' + service : '',
        '',
        message
      ].filter(Boolean).join('\n');
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const note = document.getElementById('contact-form-note');
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending…';
      }
      supabaseInsert('contact_submissions', {
        name: name,
        email: email,
        service: service || null,
        message: message,
        source_path: window.location.pathname + window.location.search,
        consent_to_reply: true
      }).then(function() {
        contactForm.reset();
        if (note) note.textContent = 'Your message has been saved. We will reply as soon as the email connection is active.';
        if (submitButton) submitButton.textContent = 'Message saved';
      }).catch(function() {
        if (note) note.textContent = 'The online inbox was unavailable, so an email draft will open instead.';
        window.location.href = 'mailto:sync@aigency.ltd?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = 'Open email draft';
        }
      });
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
