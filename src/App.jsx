/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  BarChart3,
  Briefcase,
  Globe,
  Gift,
  Layout,
  Mail,
  Phone,
  User,
  Building2,
  Globe2,
  ChevronRight,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Menu as MenuIcon,
  X,
  Music as Tiktok,
  Database,
  Lock,
  Download,
  Search,
  ArrowLeft,
  RefreshCcw,
  ExternalLink,
  Table as TableIcon
} from 'lucide-react';

// --- Translations ---

const translations = {
  en: {
    navHome: "Home",
    navServices: "Services",
    navAnalyze: "Analyze",
    navContact: "Contact",
    navCTA: "Get your Brand Audit",
    heroBadge: "Empowering Digital Visions",
    heroTitlePart1: "Unlock Your",
    heroTitlePart2: "Market Identity",
    heroDesc: "Elevate your business with bespoke branding systems, high-impact marketing, and complete digital personas. Professional expertise for the modern era.",
    heroCTA1: "Let's Analyze",
    heroCTA2: "Explore Services",
    statBrand: "Brand System",
    statGrowth: "Growth Expert",
    statArch: "Digital Architect",
    statProjects: "Projects Delivered",
    statGCC: "GCC Expertise",
    servSub: "What we do",
    servTitle: "Specialized Solutions for Your Complex Challenges",
    servDesc: "Our multidisciplinary team blends creative artistry with data-driven strategy to craft unforgettable brand experiences.",
    serv1Title: "Branding Systems",
    serv1Desc: "Comprehensive visual identities that grow with you. Logos, typography, and color theory engineered for long-term impact.",
    serv2Title: "Marketing Expertise",
    serv2Desc: "Data-driven performance marketing strategies designed to scale your reach and maximize conversions across all channels.",
    serv3Title: "Complete Company Persona",
    serv3Desc: "A full suite of professional assets: business cards, letterheads, and corporate collateral that define your brand voice.",
    serv4Title: "Corporate Gifting",
    serv4Desc: "Premium, curated gifting solutions that strengthen professional relationships and celebrate meaningful milestones.",
    serv5Title: "Website Dev & SEO",
    serv5Desc: "High-performance, SEO-optimized web experiences that convert visitors into loyal customers through world-class UX.",
    serv6Title: "Ready for more?",
    serv6Desc: "Let us customize a package for your unique business needs.",
    signupSub: "Start Your Journey",
    signupDesc: "Fill out the details below for a professional audit of your current digital presence and a tailored growth roadmap.",
    signupTitle: "Get Your Digital Presence Analyzed",
    fieldFullName: "Full Name",
    fieldEmail: "Email Address",
    fieldPhone: "Phone Number",
    fieldCompany: "Company Name",
    fieldDesignation: "Designation",
    fieldWebsite: "Website URL",
    fieldPlatforms: "Platforms to Analyze",
    fieldPlaceholderName: "e.g. John Doe",
    fieldPlaceholderEmail: "name@company.com",
    fieldPlaceholderPhone: "+1 (555) 000-0000",
    fieldPlaceholderCompany: "e.g. Acme Corp",
    fieldPlaceholderDesignation: "e.g. CEO",
    fieldPlaceholderWebsite: "e.g. https://yourcompany.com",
    btnSubmit: "Start Complete Analysis",
    successTitle: "Request Received!",
    successDesc1: "We have received your request. Give us ",
    successDesc2: " 48 hours ",
    successDesc3: " to get back to you with your ",
    successDesc4: " 47+ data points ",
    successDesc5: " analyzed report and custom roadmap.",
    successReset: "Submit another request",
    contactSub: "Get in touch",
    contactTitle: "Let's Build Your Digital Future.",
    contactDesc: "Have a specific project in mind? Our team is ready to help you navigate the digital landscape with precision.",
    contactEmail: "Email Us",
    contactCall: "Call Us",
    contactFirstName: "First Name",
    contactLastName: "Last Name",
    contactMessage: "Tell us about your project",
    contactBtn: "Send Message",
    contactSuccess: "Message Sent!",
    contactSuccessDesc: "We'll get back to you shortly.",
    contactReset: "Send another",
    footerDesc: "Crafting premium digital experiences and scaling brands with precision and creativity.",
    footerSocial: "Social",
    footerLegal: "Legal",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
    footerRights: `© ${new Date().getFullYear()} Najah Media. All rights reserved.`,
    footerDesign: "Designed with Excellence.",
    socialToggleTitle: "Analyze Social Media Presence?",
    socialToggleDesc: "Select to audit your platforms",
    fieldPlatformUrls: "Provide Platform URLs"
  },
  ar: {
    navHome: "الرئيسية",
    navServices: "خدماتنا",
    navAnalyze: "التحليل",
    navContact: "اتصل بنا",
    navCTA: "احصل على تدقيق لعلامتك",
    heroBadge: "تمكين الرؤى الرقمية",
    heroTitlePart1: "اطلق العنان لـ",
    heroTitlePart2: "هويتك السوقية",
    heroDesc: "ارتقِ بعملك مع أنظمة هوية تجارية مخصصة، وتسويق عالي التأثير، وحزم حضور رقمي متكاملة. خبرة احترافية للعصر الحديث.",
    heroCTA1: "دعنا نحلل",
    heroCTA2: "استكشف خدماتنا",
    statBrand: "نظام الهوية",
    statGrowth: "خبير نمو",
    statArch: "مهندس رقمي",
    statProjects: "مشروع تم إنجازه",
    statGCC: "خبرة في دول الخليج",
    servSub: "ماذا نفعل",
    servTitle: "حلول متخصصة لتحدياتك المعقدة",
    servDesc: "يمزج فريقنا متعدد التخصصات بين الفن الإبداعي والاستراتيجية القائمة على البيانات لصياغة تجارب علامة تجارية لا تُنسى.",
    serv1Title: "أنظمة الهوية التجارية",
    serv1Desc: "هويات بصرية شاملة تنمو معك. شعارات، وخطوط، ونظريات ألوان مصممة لتأثير طويل الأمد.",
    serv2Title: "خبرة تسويقية",
    serv2Desc: "استراتيجيات تسويق قائمة على الأداء مصممة لتوسيع نطاق وصولك وزيادة التحويلات عبر جميع القنوات.",
    serv3Title: "صورة الشركة المتكاملة",
    serv3Desc: "مجموعة كاملة من الأصول الاحترافية: بطاقات العمل، والرسائل الرسمية، والملحقات التي تحدد صوت علامتك التجارية.",
    serv4Title: "هدايا الشركات",
    serv4Desc: "حلول هدايا فاخرة ومنسقة تقوي العلاقات المهنية وتحتفل باللحظات الهامة.",
    serv5Title: "تطوير المواقع و SEO",
    serv5Desc: "تجارب ويب عالية الأداء ومحسنة لمحركات البحث تحول الزوار إلى عملاء مخلصين من خلال تجربة مستخدم عالمية.",
    serv6Title: "جاهز للمزيد؟",
    serv6Desc: "دعنا نخصص باقة تناسب احتياجات عملك الفريدة.",
    signupSub: "ابدأ رحلتك",
    signupDesc: "املأ التفاصيل أدناه لإجراء تدقيق احترافي لحضورك الرقمي الحالي وخارطة طريق نمو مخصصة.",
    signupTitle: "حلل حضورك الرقمي",
    fieldFullName: "الاسم الكامل",
    fieldEmail: "البريد الإلكتروني",
    fieldPhone: "رقم الهاتف",
    fieldCompany: "اسم الشركة",
    fieldDesignation: "المسمى الوظيفي",
    fieldWebsite: "رابط الموقع",
    fieldPlatforms: "المنصات المراد تحليلها",
    fieldPlaceholderName: "مثال: أحمد محمد",
    fieldPlaceholderEmail: "name@company.com",
    fieldPlaceholderPhone: "+966 50 000 0000",
    fieldPlaceholderCompany: "مثال: شركة النجاة",
    fieldPlaceholderDesignation: "مثال: المدير التنفيذي",
    fieldPlaceholderWebsite: "مثال: https://yourcompany.com",
    btnSubmit: "ابدأ التحليل الكامل",
    successTitle: "تم استلام الطلب!",
    successDesc1: "لقد استلمنا طلبك. امنحنا ",
    successDesc2: " 48 ساعة ",
    successDesc3: " للعودة إليك بتقرير ",
    successDesc4: " تحليل 47+ نقطة بيانات ",
    successDesc5: " وخارطة طريق مخصصة.",
    successReset: "تقديم طلب آخر",
    contactSub: "ابقَ على تواصل",
    contactTitle: "لنبني مستقبلك الرقمي.",
    contactDesc: "هل لديك مشروع معين في بالك؟ فريقنا مستعد لمساعدتك في التنقل في المشهد الرقمي بدقة.",
    contactEmail: "راسلنا",
    contactCall: "اتصل بنا",
    contactFirstName: "الاسم الأول",
    contactLastName: "اسم العائلة",
    contactMessage: "أخبرنا عن مشروعك",
    contactBtn: "إرسال الرسالة",
    contactSuccess: "تم إرسال الرسالة!",
    contactSuccessDesc: "سنرد عليك قريبًا.",
    contactReset: "إرسال أخرى",
    footerDesc: "صياغة تجارب رقمية فاخرة وتوسيع نطاق العلامات التجارية بدقة وإبداع.",
    footerSocial: "التواصل الاجتماعي",
    footerLegal: "قانوني",
    footerPrivacy: "سياسة الخصوصية",
    footerTerms: "شروط الخدمة",
    footerRights: `© ${new Date().getFullYear()} Najah Media. جميع الحقوق محفوظة.`,
    footerDesign: "صمم بتميز.",
    socialToggleTitle: "هل ترغب في تحليل تواجدك على وسائل التواصل الاجتماعي؟",
    socialToggleDesc: "حدد المنصات التي ترغب في تدقيقها",
    fieldPlatformUrls: "أدخل روابط المنصات"
  }
};

// --- Components ---

const Navbar = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-4 md:py-6 backdrop-blur-md bg-background/60 border-b border-surface/50">
        <div className="flex items-center gap-2">
          <img src="/najahlogo.webp" alt="Najah Media" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          <span className="font-display font-semibold text-lg md:text-xl tracking-tight">Najah Media</span>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-400">
          <button onClick={(e) => handleNavClick(e, 'hero')} className="hover:text-white transition-colors cursor-pointer">{t('navHome')}</button>
          <button onClick={(e) => handleNavClick(e, 'services')} className="hover:text-white transition-colors cursor-pointer">{t('navServices')}</button>
          <button onClick={(e) => handleNavClick(e, 'signup')} className="hover:text-white transition-colors cursor-pointer">{t('navAnalyze')}</button>
          <button onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-white transition-colors cursor-pointer">{t('navContact')}</button>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-2 px-2 md:px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
          >
            {lang === 'en' ? (
              <>
                <img src="https://flagcdn.com/w40/ae.png" alt="UAE" className="w-5 h-auto rounded-sm object-cover" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary hidden sm:inline">العربية</span>
              </>
            ) : (
              <>
                <img src="https://flagcdn.com/w40/us.png" alt="USA" className="w-5 h-auto rounded-sm object-cover" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary hidden sm:inline">English</span>
              </>
            )}
          </button>

          <button
            onClick={(e) => handleNavClick(e, 'signup')}
            className="hidden sm:block px-5 py-2.5 rounded-full bg-white text-black text-xs md:text-sm font-semibold hover:bg-opacity-90 transition-all shadow-xl shadow-white/5 active:scale-95 cursor-pointer"
          >
            {t('navCTA')}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] lg:hidden bg-[#0a090c] flex flex-col pt-24 px-8 pb-12 overflow-y-auto"
          >
            <div className="flex flex-col gap-2 text-2xl font-display font-medium mb-12">
              <button onClick={(e) => handleNavClick(e, 'hero')} className="py-4 border-b border-white/5 flex items-center justify-between group text-left w-full">
                {t('navHome')} <ChevronRight className="w-6 h-6 opacity-40 group-hover:opacity-100 transition-opacity" />
              </button>
              <button onClick={(e) => handleNavClick(e, 'services')} className="py-4 border-b border-white/5 flex items-center justify-between group text-left w-full">
                {t('navServices')} <ChevronRight className="w-6 h-6 opacity-40 group-hover:opacity-100 transition-opacity" />
              </button>
              <button onClick={(e) => handleNavClick(e, 'signup')} className="py-4 border-b border-white/5 flex items-center justify-between group text-left w-full">
                {t('navAnalyze')} <ChevronRight className="w-6 h-6 opacity-40 group-hover:opacity-100 transition-opacity" />
              </button>
              <button onClick={(e) => handleNavClick(e, 'contact')} className="py-4 border-b border-white/5 flex items-center justify-between group text-left w-full">
                {t('navContact')} <ChevronRight className="w-6 h-6 opacity-40 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            <div className="mt-auto space-y-8">
              <button
                onClick={(e) => handleNavClick(e, 'signup')}
                className="block w-full py-5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white text-center text-xl font-bold shadow-2xl shadow-primary/20 cursor-pointer"
              >
                {t('navCTA')}
              </button>

              <div className="flex justify-center gap-8 py-6 border-t border-white/5 mt-8">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors">
                  <Instagram className="w-6 h-6 text-gray-400" />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-gray-400" />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors">
                  <Twitter className="w-6 h-6 text-gray-400" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group p-8 rounded-3xl bg-surface/20 border border-white/5 hover:bg-surface/40 hover:border-primary/30 transition-all cursor-default"
    >
      <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform hidden sm:flex">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="flex items-center gap-4 mb-4 sm:hidden">
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold font-display">{title}</h3>
      </div>
      <h3 className="text-xl font-semibold mb-3 font-display hidden sm:block">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">{description}</p>
    </motion.div>
  );
};

const SignupForm = ({ t }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    website: '',
    analyzeSocial: false,
    platforms: [],
    platformUrls: {}
  });

  const platforms = [
    { id: 'instagram', label: 'Instagram', icon: Instagram },
    { id: 'facebook', label: 'Facebook', icon: Facebook },
    { id: 'linkedin', label: 'LinkedIn', icon: Linkedin },
    { id: 'twitter', label: 'Twitter/X', icon: Twitter },
    { id: 'youtube', label: 'YouTube', icon: Youtube },
    { id: 'tiktok', label: 'TikTok', icon: Tiktok }
  ];

  const togglePlatform = (id) => {
    setFormData(prev => {
      const isActive = prev.platforms.includes(id);
      const newPlatforms = isActive
        ? prev.platforms.filter(p => p !== id)
        : [...prev.platforms, id];

      const newUrls = { ...prev.platformUrls };
      if (isActive) {
        delete newUrls[id];
      } else {
        newUrls[id] = '';
      }

      return {
        ...prev,
        platforms: newPlatforms,
        platformUrls: newUrls
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use the API endpoint provided in the specification
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/najah/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        console.error('Submission error:', data);
        alert(data.message || 'Failed to submit request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please check if the backend server is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl mx-auto p-12 rounded-[2rem] bg-white/[0.05] border border-primary/30 shadow-2xl text-center"
      >
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <BarChart3 className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-3xl font-display font-bold mb-4">{t('successTitle')}</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          {t('successDesc1')} <strong>{t('successDesc2')}</strong> {t('successDesc3')}
          <span className="text-primary font-bold"> {t('successDesc4')} </span>
          {t('successDesc5')}
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-8 text-primary font-bold uppercase tracking-widest text-xs hover:underline"
        >
          {t('successReset')}
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-b from-surface/40 to-transparent border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-secondary/10 blur-[100px] pointer-events-none" />

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        {t('signupTitle')}
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6" onSubmit={handleSubmit}>
        <div className="space-y-1.5 sm:space-y-2">
          <label className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500 ms-1">{t('fieldFullName')}</label>
          <div className="relative">
            <User className="absolute start-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder={t('fieldPlaceholderName')}
              className="w-full ps-11 pe-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/10 focus:border-primary/50 focus:outline-none transition-all placeholder:text-gray-600 text-base"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <label className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500 ms-1">{t('fieldEmail')}</label>
          <div className="relative">
            <Mail className="absolute start-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="email"
              placeholder={t('fieldPlaceholderEmail')}
              className="w-full ps-11 pe-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/10 focus:border-primary/50 focus:outline-none transition-all placeholder:text-gray-600 text-base"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <label className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500 ms-1">{t('fieldPhone')}</label>
          <div className="relative">
            <Phone className="absolute start-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="tel"
              placeholder={t('fieldPlaceholderPhone')}
              className="w-full ps-11 pe-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/10 focus:border-primary/50 focus:outline-none transition-all placeholder:text-gray-600 text-base"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <label className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500 ms-1">{t('fieldCompany')}</label>
          <div className="relative">
            <Building2 className="absolute start-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder={t('fieldPlaceholderCompany')}
              className="w-full ps-11 pe-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/10 focus:border-primary/50 focus:outline-none transition-all placeholder:text-gray-600 text-base"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <label className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500 ms-1">{t('fieldDesignation')}</label>
          <div className="relative">
            <Briefcase className="absolute start-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder={t('fieldPlaceholderDesignation')}
              className="w-full ps-11 pe-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/10 focus:border-primary/50 focus:outline-none transition-all placeholder:text-gray-600 text-base"
              value={formData.designation}
              onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <label className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500 ms-1">{t('fieldWebsite')}</label>
          <div className="relative">
            <Globe2 className="absolute start-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="url"
              placeholder={t('fieldPlaceholderWebsite') || "https://example.com"}
              className="w-full ps-11 pe-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/10 focus:border-primary/50 focus:outline-none transition-all placeholder:text-gray-600 text-base"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="md:col-span-2 space-y-4 pt-2 sm:pt-4">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
            <div>
              <h4 className="text-sm font-semibold text-white">{t('socialToggleTitle')}</h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">{t('socialToggleDesc')}</p>
            </div>
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, analyzeSocial: !prev.analyzeSocial }))}
              className={`relative w-12 h-6 rounded-full transition-colors ${formData.analyzeSocial ? 'bg-primary' : 'bg-gray-700'}`}
            >
              <motion.div
                animate={{ x: formData.analyzeSocial ? 26 : 2 }}
                className="absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm"
              />
            </button>
          </div>

          <AnimatePresence>
            {formData.analyzeSocial && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden space-y-4"
              >
                <label className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500 ms-1">{t('fieldPlatforms')}</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3">
                  {platforms.map((p) => {
                    const Icon = p.icon;
                    const isActive = formData.platforms.includes(p.id);
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => togglePlatform(p.id)}
                        className={`flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-lg sm:rounded-xl border transition-all ${isActive
                          ? 'bg-primary/20 border-primary shadow-lg shadow-primary/10'
                          : 'bg-white/[0.03] border-white/5 hover:border-white/20'
                          }`}
                        disabled={isSubmitting}
                      >
                        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? 'text-primary' : 'text-gray-400'}`} />
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${isActive ? 'text-white' : 'text-gray-500'}`}>{p.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Platform URL Inputs */}
                <AnimatePresence>
                  {formData.platforms.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-3 mt-4"
                    >
                      <label className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500 ms-1">{t('fieldPlatformUrls')}</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {formData.platforms.map((platformId) => {
                          const platform = platforms.find(p => p.id === platformId);
                          const Icon = platform.icon;
                          return (
                            <motion.div
                              layout
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              key={platformId}
                              className="relative"
                            >
                              <div className="absolute start-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                <Icon className="w-3.5 h-3.5 text-primary" />
                              </div>
                              <input
                                type="url"
                                placeholder={`${platform.label} URL`}
                                className="w-full ps-12 pe-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 focus:border-primary/50 focus:outline-none transition-all placeholder:text-gray-600 text-sm"
                                value={formData.platformUrls[platformId] || ''}
                                onChange={(e) => setFormData(prev => ({
                                  ...prev,
                                  platformUrls: { ...prev.platformUrls, [platformId]: e.target.value }
                                }))}
                                required
                                disabled={isSubmitting}
                              />
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="md:col-span-2 pt-4 sm:pt-8">
          <motion.button
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            disabled={isSubmitting}
            className={`w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl text-white font-bold text-base sm:text-lg shadow-xl flex items-center justify-center gap-2 transition-all ${isSubmitting
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-primary to-secondary shadow-primary/20'
              }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Processing...
              </>
            ) : (
              <>
                {t('btnSubmit')} <ChevronRight className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </div>
      </form>
    </div>
  );
};

const ContactSection = ({ t, lang }) => {
  const [isContactSent, setIsContactSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [contactData, setContactData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/najah/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setIsContactSent(true);
      } else {
        alert(data.message || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Contact error:', error);
      alert('An error occurred. Please check if the backend server is running.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block mx-auto lg:mx-0">{t('contactSub')}</span>
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-6 md:mb-8">
            {t('contactTitle')}
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-10 md:mb-12 max-w-lg leading-relaxed mx-auto lg:mx-0">
            {t('contactDesc')}
          </p>

          <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-start justify-center gap-6 md:gap-8">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-secondary/50 transition-colors">
                <Mail className="w-5 h-5 text-secondary" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-500 uppercase tracking-tighter">{t('contactEmail')}</p>
                <p className="font-medium text-sm md:text-base">info@najah.io</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-secondary/50 transition-colors">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-500 uppercase tracking-tighter">{t('contactCall')}</p>
                <p className="font-medium text-sm md:text-base">+971585743219</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-surface/20 border border-white/5 backdrop-blur-sm">
          {isContactSent ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{t('contactSuccess')}</h3>
              <p className="text-gray-400">{t('contactSuccessDesc')}</p>
              <button onClick={() => setIsContactSent(false)} className="mt-8 text-secondary text-sm font-bold uppercase tracking-widest">{t('contactReset')}</button>
            </motion.div>
          ) : (
            <form className="space-y-6" onSubmit={handleContactSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder={t('contactFirstName')}
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-secondary/50 focus:outline-none transition-all text-base"
                  value={contactData.firstName}
                  onChange={(e) => setContactData({ ...contactData, firstName: e.target.value })}
                  required
                  disabled={isSending}
                />
                <input
                  type="text"
                  placeholder={t('contactLastName')}
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-secondary/50 focus:outline-none transition-all text-base"
                  value={contactData.lastName}
                  onChange={(e) => setContactData({ ...contactData, lastName: e.target.value })}
                  required
                  disabled={isSending}
                />
              </div>
              <input
                type="email"
                placeholder={t('fieldEmail')}
                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-secondary/50 focus:outline-none transition-all text-base"
                value={contactData.email}
                onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                required
                disabled={isSending}
              />
              <textarea
                placeholder={t('contactMessage')}
                rows={4}
                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-secondary/50 focus:outline-none transition-all resize-none text-base"
                value={contactData.message}
                onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                required
                disabled={isSending}
              />
              <button
                type="submit"
                disabled={isSending}
                className={`w-full py-4 rounded-xl text-white font-bold transition-all flex items-center justify-center gap-2 ${isSending ? 'bg-gray-600 cursor-not-allowed' : 'bg-secondary hover:shadow-lg hover:shadow-secondary/20'
                  }`}
              >
                {isSending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    {t('contactBtn')} <ChevronRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = totalMiliseconds / end;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count}</>;
};

const AdminDashboard = ({ t }) => {
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'Najah@123') {
      setIsAuthorized(true);
      fetchData();
    } else {
      alert('Incorrect password');
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.thewellnesslab.ae/api/najah/data');
      const result = await response.json();
      if (result.success) {
        setData(result.data);
      } else {
        setError(result.message || 'Failed to fetch data');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const filteredData = data.filter(item =>
    item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.company?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md p-8 rounded-[2rem] bg-surface/20 border border-white/10 backdrop-blur-xl shadow-2xl"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-display font-bold text-center mb-2">Admin Access</h2>
          <p className="text-gray-500 text-center text-sm mb-8">Enter password to view submissions</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Lock className="absolute start-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full ps-12 pe-4 py-4 rounded-xl bg-white/[0.05] border border-white/10 focus:border-primary/50 focus:outline-none transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.98]"
            >
              Login to Dashboard
            </button>
            <Link to="/" className="block text-center text-xs text-gray-500 hover:text-white transition-colors mt-4">
              Return to Website
            </Link>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Link to="/" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <span className="text-primary font-bold uppercase tracking-widest text-xs">Management Portal</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold">Leads Dashboard</h1>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute start-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search leads..."
                className="w-full ps-11 pe-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/30 focus:outline-none transition-all text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={fetchData}
              disabled={isLoading}
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all disabled:opacity-50"
            >
              <RefreshCcw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {error && (
          <div className="p-4 mb-8 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm flex items-center gap-3">
            <X className="w-4 h-4" />
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 gap-4">
          {isLoading ? (
            [1, 2, 3].map(i => (
              <div key={i} className="h-24 rounded-2xl bg-white/[0.02] border border-white/5 animate-pulse" />
            ))
          ) : filteredData.length === 0 ? (
            <div className="py-20 text-center rounded-[2rem] border border-dashed border-white/10">
              <Database className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500">No submissions found</p>
            </div>
          ) : (
            filteredData.map((item) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={item.id}
                className="group p-6 rounded-2xl bg-surface/20 border border-white/5 hover:border-primary/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row justify-between gap-6">
                  <div className="flex flex-1 gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border border-white/5 shrink-0">
                      <span className="font-bold text-primary">{item.name?.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg truncate">{item.name}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${item.formType === 'ANALYZE' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'}`}>
                          {item.formType}
                        </span>
                        {item.analyzeSocial && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            Social Audit
                          </span>
                        )}
                        <span className="text-[10px] text-gray-600 font-mono">ID: {item.id}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2 min-w-0">
                          <Mail className="w-3.5 h-3.5 shrink-0 text-gray-600" />
                          <span className="truncate">{item.email}</span>
                        </div>
                        <div className="flex items-center gap-2 min-w-0">
                          <Phone className="w-3.5 h-3.5 shrink-0 text-gray-600" />
                          <span className="truncate">{item.phone || 'No Phone'}</span>
                        </div>
                        <div className="flex items-center gap-2 min-w-0">
                          <Building2 className="w-3.5 h-3.5 shrink-0 text-gray-600" />
                          <span className="truncate">{item.company || 'No Company'}</span>
                        </div>
                        {item.designation && (
                          <div className="flex items-center gap-2 min-w-0">
                            <Briefcase className="w-3.5 h-3.5 shrink-0 text-gray-600" />
                            <span className="truncate">{item.designation}</span>
                          </div>
                        )}
                        {item.website && (
                          <div className="flex items-center gap-2 min-w-0">
                            <Globe2 className="w-3.5 h-3.5 shrink-0 text-gray-600" />
                            <a href={item.website} target="_blank" rel="noopener noreferrer" className="truncate hover:text-primary transition-colors">
                              {item.website.replace(/^https?:\/\//, '')}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between shrink-0">
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-medium bg-white/5 px-3 py-1 rounded-full lg:bg-transparent lg:px-0 lg:py-0">
                      {new Date(item.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold transition-all border border-white/5 hover:border-white/10">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>

                {item.formType === 'ANALYZE' && item.platforms?.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2 mb-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Audit Channels</p>
                      <div className="h-px flex-1 bg-white/5" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.platforms.map(p => (
                        <div key={p} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs hover:border-primary/30 transition-colors">
                          <span className="text-primary font-bold uppercase tracking-tighter">{p}</span>
                          {item.platformUrls?.[p] && (
                            <a href={item.platformUrls[p]} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title={item.platformUrls[p]}>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {item.message && (
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Message</p>
                      <div className="h-px flex-1 bg-white/5" />
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <p className="text-sm text-gray-400 leading-relaxed italic">"{item.message}"</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

// --- Landing Page Component ---

const HomePage = ({ lang, setLang, t }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div
      className={`min-h-screen selection:bg-primary/30 ${lang === 'ar' ? 'font-sans-ar' : ''}`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navbar lang={lang} setLang={setLang} t={t} />
      </motion.div>

      {/* Hero Section */}
      <header id="hero" className="relative min-h-[80vh] md:min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-radial from-primary/10 via-transparent to-transparent opacity-50 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[50vw] h-[50vw] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3
                }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-8 group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] whitespace-nowrap">
                {t('heroBadge')}
              </span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-5xl sm:text-7xl md:text-9xl font-display font-bold leading-[0.95] tracking-tight mb-8 md:mb-10"
            >
              <span className="block mb-2">{t('heroTitlePart1')}</span>
              <span className="relative inline-block pb-2 md:pb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-text bg-clip-text text-transparent">
                  {t('heroTitlePart2')}
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.5, duration: 1.5 }}
                  className="absolute bottom-0 left-0 h-0.5 md:h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                />
              </span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-base sm:text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed font-light"
            >
              {t('heroDesc')}
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
              <motion.button
                onClick={(e) => handleNavClick(e, 'signup')}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(236, 78, 32, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-white text-black font-bold text-lg sm:text-xl transition-all flex items-center justify-center gap-3 relative overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform" />
                <span className="relative z-10">{t('heroCTA1')}</span>
                <ChevronRight className={`w-5 h-5 sm:w-6 sm:h-6 relative z-10 transition-transform group-hover:translate-x-1 ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </motion.button>
              <motion.button
                onClick={(e) => handleNavClick(e, 'services')}
                whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 font-bold text-lg sm:text-xl transition-all text-center cursor-pointer"
              >
                {t('heroCTA2')}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Floaters & Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 1.2 // Start after hero text
                }
              }
            }}
            className="mt-16 md:mt-36 w-full"
          >
            <div className="flex flex-wrap justify-center gap-4 md:gap-16 mb-16 md:mb-20">
              {[
                { icon: Layout, label: t('statBrand'), color: 'primary' },
                { icon: BarChart3, label: t('statGrowth'), color: 'secondary' },
                { icon: Globe2, label: t('statArch'), color: 'white' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -5, opacity: 1, borderColor: '#ec4e20' }}
                  className="flex items-center gap-3 md:gap-4 px-5 md:px-8 py-3 md:py-4 rounded-2xl md:rounded-3xl bg-surface/30 border border-white/5 opacity-70 transition-all cursor-default backdrop-blur-md"
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-${item.color}/10 flex items-center justify-center border border-${item.color}/20`}>
                    <item.icon className={`w-5 h-5 md:w-6 md:h-6 text-${item.color === 'white' ? 'white' : item.color}`} />
                  </div>
                  <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Bottom Stats Section */}
            <div className="relative pt-12 md:pt-16 border-t border-white/5">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 md:px-6 py-2 bg-background border border-white/5 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-[0.5em] text-gray-500 whitespace-nowrap">
                Performance Metrics
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="text-5xl md:text-8xl font-display font-bold text-white mb-2 md:mb-3 tracking-tighter group-hover:text-primary transition-colors flex items-center justify-center">
                    <Counter target={200} />
                    <span className="text-primary">+</span>
                  </div>
                  <div className="text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] text-gray-500">{t('statProjects')}</div>
                </motion.div>

                <div className="h-16 md:h-20 w-px bg-white/10 hidden md:block" />

                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] text-primary mb-6 md:mb-8"
                  >
                    {t('statGCC')}
                  </motion.div>
                  <div className="flex items-center justify-center gap-8 md:gap-14">
                    {[
                      { flag: "https://flagcdn.com/w160/ae.png", name: "UAE", label: "United Arab Emirates", code: "AE" },
                      { flag: "https://flagcdn.com/w160/sa.png", name: "KSA", label: "Saudi Arabia", code: "SA" },
                      { flag: "https://flagcdn.com/w160/om.png", name: "OMAN", label: "Oman", code: "OM" }
                    ].map((c, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (i * 0.2), type: "spring", stiffness: 100 }}
                        className="flex flex-col items-center gap-2 md:gap-3"
                      >
                        <div className="relative group/flag">
                          <img
                            src={c.flag}
                            alt={c.label}
                            className="w-12 md:w-20 h-auto rounded-lg shadow-2xl transition-all group-hover/flag:scale-110 group-hover/flag:-translate-y-2"
                          />
                          <div className="absolute -inset-2 bg-primary/20 blur-xl opacity-0 group-hover/flag:opacity-100 transition-opacity -z-10" />
                        </div>
                        <span className="text-[10px] md:text-sm text-white font-display font-bold uppercase tracking-[0.3em] mt-1">{c.code}</span>
                        <span className="text-[8px] md:text-[10px] text-gray-500 font-medium uppercase tracking-widest opacity-60">{c.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-6 md:px-12 bg-surface/10">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-12 md:mb-20 text-center flex flex-col md:flex-row items-end justify-between gap-8 ${lang === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block mx-auto md:mx-0">{t('servSub')}</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                {t('servTitle')}
              </h2>
            </div>
            <p className={`text-gray-400 max-w-md pb-2 ${lang === 'ar' ? 'md:text-left' : 'md:text-right'}`}>
              {t('servDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={Layout}
              title={t('serv1Title')}
              description={t('serv1Desc')}
              delay={0.1}
            />
            <ServiceCard
              icon={BarChart3}
              title={t('serv2Title')}
              description={t('serv2Desc')}
              delay={0.2}
            />
            <ServiceCard
              icon={Briefcase}
              title={t('serv3Title')}
              description={t('serv3Desc')}
              delay={0.3}
            />
            <ServiceCard
              icon={Gift}
              title={t('serv4Title')}
              description={t('serv4Desc')}
              delay={0.4}
            />
            <ServiceCard
              icon={Globe}
              title={t('serv5Title')}
              description={t('serv5Desc')}
              delay={0.5}
            />
            <button
              onClick={(e) => handleNavClick(e, 'contact')}
              className="p-8 rounded-3xl bg-gradient-to-br from-primary to-secondary flex flex-col items-center justify-center text-center gap-4 group cursor-pointer"
            >
              <h3 className="text-2xl font-bold font-display italic">{t('serv6Title')}</h3>
              <p className="text-white/80 text-sm">{t('serv6Desc')}</p>
              <ChevronRight className={`w-8 h-8 group-hover:translate-x-2 transition-transform ${lang === 'ar' ? '-scale-x-100 group-hover:-translate-x-2' : ''}`} />
            </button>
          </div>
        </div>
      </section>

      {/* Analysis Signup Section */}
      <section id="signup" className="py-16 md:py-32 px-6 overflow-hidden relative">
        {/* Glow behind section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[150px] -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                {t('signupSub')}
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {t('signupDesc')}
              </p>
            </motion.div>
          </div>

          <SignupForm t={t} />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection t={t} lang={lang} />

      {/* Footer */}
      <footer className="py-16 md:py-20 px-6 md:px-8 border-t border-white/5 bg-background relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <img src="/najahlogo.webp" alt="Najah Media" className="w-8 h-8 object-contain" />
              <span className="font-display font-semibold text-xl tracking-tight">Najah Media</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs text-center md:text-left leading-relaxed">
              {t('footerDesc')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{t('footerSocial')}</span>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/najahmedia.ae" target='_blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <Instagram className="w-5 h-5 text-gray-500" />
                </a>
                <a href="https://www.linkedin.com/company/najah-media/" target='_blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-500" />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{t('footerLegal')}</span>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">{t('footerPrivacy')}</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">{t('footerTerms')}</a>
            </div>
          </div>
        </div>
        <div className={`max-w-7xl mx-auto mt-16 md:mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[10px] uppercase tracking-[0.2em] text-center ${lang === 'ar' ? 'font-sans' : ''}`}>
          <span>{t('footerRights')}</span>
          <span className="opacity-60">{t('footerDesign')}</span>
        </div>
      </footer>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState('en');

  const t = (key) => {
    return translations[lang][key] || translations.en[key];
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage lang={lang} setLang={setLang} t={t} />} />
        <Route path="/admin" element={<AdminDashboard t={t} />} />
      </Routes>
    </HashRouter>
  );
}
