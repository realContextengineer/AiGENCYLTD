/* ========================================
   AIGENCY.LTD - MAIN JAVASCRIPT
   Mobile Navigation, Quiz Logic & Interactions
   ======================================== */

(function() {
  'use strict';

  // ========== MOBILE NAVIGATION ==========
  const navToggle = document.querySelector('.nav-toggle');
  const navMobile = document.querySelector('.nav-mobile');

  // ========== CURRENT NAVIGATION STATE ==========
  const navPath = window.location.pathname.split('/').pop() || 'index.html';
  const navKey = window.location.hash === '#training'
    ? 'training'
    : navPath === 'creative-design.html'
      ? 'design'
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

  // ========== QUIZ LOGIC ==========
  const quizStartBtn = document.querySelector('.quiz-start');
  const quizScreens = document.querySelectorAll('.quiz-screen');
  const quizResults = document.getElementById('quiz-results');
  const resultsFill = document.getElementById('results-fill');
  const resultsTotal = document.getElementById('results-total');
  const scoreLocal = document.getElementById('score-local');
  const scoreAdmin = document.getElementById('score-admin');
  const scoreTrust = document.getElementById('score-trust');

  let currentScreen = 0;
  const quizData = {
    q1: null,
    q2: null,
    q3: null
  };

  function showScreen(index) {
    quizScreens.forEach(function(screen, i) {
      screen.classList.toggle('active', i === index);
    });

    // Update progress dots
    const progressDots = document.querySelectorAll('.quiz-progress-dot');
    progressDots.forEach(function(dot, i) {
      dot.classList.toggle('active', i < index);
    });
  }

  function calculateResults() {
    // Calculate scores (0-100%)
    // Local Visibility (Q1): Yes = 100, Unsure = 50, No = 0
    const localScore = quizData.q1 === 'yes' ? 100 : (quizData.q1 === 'unsure' ? 50 : 0);

    // Admin Time-Loss (Q2): Yes = 0 (high time loss), Unsure = 50, No = 100
    const adminScore = quizData.q2 === 'yes' ? 0 : (quizData.q2 === 'unsure' ? 50 : 100);

    // Digital Trust & Safety (Q3): Yes = 100, Unsure = 50, No = 0
    const trustScore = quizData.q3 === 'yes' ? 100 : (quizData.q3 === 'unsure' ? 50 : 0);

    // Overall score
    const totalScore = Math.round((localScore + adminScore + trustScore) / 3);

    return { localScore, adminScore, trustScore, totalScore };
  }

  function displayResults() {
    const scores = calculateResults();

    // Hide all screens, show results
    quizScreens.forEach(function(screen) {
      screen.classList.remove('active');
    });
    quizResults.classList.add('active');

    // Animate scores with delay
    setTimeout(function() {
      resultsTotal.textContent = scores.totalScore + '%';
      scoreLocal.textContent = scores.localScore + '%';
      scoreAdmin.textContent = scores.adminScore + '%';
      scoreTrust.textContent = scores.trustScore + '%';

      // Animate the ring (circumference = 2 * PI * 90 ≈ 565)
      const circumference = 2 * Math.PI * 90;
      const offset = circumference - (scores.totalScore / 100) * circumference;
      resultsFill.style.strokeDashoffset = offset;
    }, 300);
  }

  // Start Quiz
  if (quizStartBtn) {
    quizStartBtn.addEventListener('click', function() {
      currentScreen = 1;
      showScreen(currentScreen);
    });
  }

  // Next/Prev buttons
  document.querySelectorAll('.quiz-next').forEach(function(btn, index) {
    btn.addEventListener('click', function() {
      const screenNum = index + 1;

      // Save current answer
      const radioName = 'q' + screenNum;
      const selected = document.querySelector('input[name="' + radioName + '"]:checked');
      if (!selected) {
        alert('Please select an answer before continuing.');
        return;
      }
      quizData[radioName] = selected.value;

      // Move to next screen or results
      if (screenNum < 3) {
        currentScreen = screenNum + 1;
        showScreen(currentScreen);
      } else {
        displayResults();
      }
    });
  });

  document.querySelectorAll('.quiz-prev').forEach(function(btn, index) {
    btn.addEventListener('click', function() {
      currentScreen = index;
      showScreen(currentScreen);
    });
  });

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
