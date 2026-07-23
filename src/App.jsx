import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Corporate from './pages/Corporate';
import FAQ from './pages/FAQ';
import Fleet from './pages/Fleet';
import Services from './pages/Services';
import About from './pages/About';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import ServiceAreas from './pages/ServiceAreas';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Imprint from './pages/Imprint';
import Terms from './pages/Terms';
import Membership from './pages/Membership';
import GiftCards from './pages/GiftCards';
import Careers from './pages/Careers';
import Events from './pages/Events';
import Partners from './pages/Partners';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/corporate" element={<Corporate />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/fleet" element={<Fleet />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/service-areas" element={<ServiceAreas />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/imprint" element={<Imprint />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/gift-cards" element={<GiftCards />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/events" element={<Events />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App