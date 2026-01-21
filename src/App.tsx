import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { NavigationRouter } from "./components/NavigationRouter";
import { MobileMenuRouter } from "./components/MobileMenuRouter";
import { ScrollProgress } from "./components/ScrollProgress";
import { TrustAuthority } from "./components/TrustAuthority";
import { FooterRouter } from "./components/FooterRouter";
import { BackToTop } from "./components/BackToTop";
import { SkipToContent } from "./components/SkipToContent";
import { SEOHead } from "./components/SEOHead";
import { Toaster } from "./components/ui/sonner";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Analytics } from "./components/Analytics";
import { CookieConsent } from "./components/CookieConsent";
import { LiveChat } from "./components/LiveChat";
import { AnnouncementBanner } from "./components/AnnouncementBanner";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { SafeComponent } from "./components/SafeComponent";

// Import pages
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { CoursesPage } from "./pages/CoursesPage";
import { SolutionsPage } from "./pages/SolutionsPage";
import { ICEPage } from "./pages/ICEPage";
import { TrainingPage } from "./pages/TrainingPage";
import { DesignPage } from "./pages/DesignPage";
import { ContactPage } from "./pages/ContactPage";
import { LegalPage } from "./pages/LegalPage";
import { AIHealthCheckPage } from "./pages/AIHealthCheckPage";
import { LabPage } from "./pages/LabPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { HACRPage } from "./pages/HACRPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Debug: Log current path
  useEffect(() => {
    console.log('Current path:', location.pathname);
  }, [location]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-foreground">
        <SEOHead />
        <Analytics />
        <SkipToContent />
        <ScrollProgress />
        <ScrollToTop />
        <AnnouncementBanner />
        <NavigationRouter
          onMenuOpen={() => setIsMobileMenuOpen(true)}
        />
        <MobileMenuRouter
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
        
        <main id="main-content">
          <Routes>
            <Route index element={<HomePage scrollToSection={scrollToSection} />} />
            <Route path="/" element={<HomePage scrollToSection={scrollToSection} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/ice" element={<ICEPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="/lab" element={<LabPage />} />
            <Route path="/hacr" element={<HACRPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/ai-health-check" element={<AIHealthCheckPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
        </main>

        <TrustAuthority />
        <FooterRouter />
        <BackToTop />
        
        <SafeComponent componentName="WhatsAppButton">
          <WhatsAppButton />
        </SafeComponent>
        
        <SafeComponent componentName="LiveChat">
          <LiveChat />
        </SafeComponent>
        
        <CookieConsent />
        
        <Toaster />
      </div>
    </ErrorBoundary>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}