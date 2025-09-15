import { 
  AcademicCapIcon,
  HomeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  HeartIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

export type IconName = 'plant' | 'academic-cap' | 'users' | 'home' | 'heart' | 'briefcase' | 'users-group';

export const iconMap: Record<IconName, React.ComponentType<any>> = {
  'plant': AcademicCapIcon,  
  'academic-cap': AcademicCapIcon,
  'users': UsersIcon,
  'home': HomeIcon,
  'heart': HeartIcon,
  'briefcase': BriefcaseIcon,
  'users-group': UserGroupIcon,
};

export const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
  { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
  { code: 'bn', name: 'বাংলা', flag: '🇮🇳' },
  { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
  { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'ml', name: 'മലയാളം', flag: '🇮🇳' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { code: 'or', name: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
  { code: 'as', name: 'অসমীয়া', flag: '🇮🇳' },
];

export const stats = [
  { number: '500+', label: 'Government Schemes' },
  { number: '28+', label: 'States Covered' },
  { number: '12+', label: 'Languages Available' },
];

export const howItWorks = [
  { title: 'Create Profile', description: 'Sign up and provide your basic details', icon: '👤' },
  { title: 'Get Matched', description: 'Our system finds relevant schemes for you', icon: '🎯' },
  { title: 'View Details', description: 'Read about schemes in your language', icon: '📖' },
  { title: 'Apply Online', description: 'Direct links to official applications', icon: '✅' },
];

export const faqs = [
  {
    question: "How do I know which schemes I'm eligible for?",
    answer: "Our smart system matches schemes to your profile based on factors like age, income, occupation, and location."
  },
  {
    question: "Are the scheme details up to date?",
    answer: "Yes, we regularly update our database with the latest information from official government sources."
  },
  {
    question: "How many languages are supported?",
    answer: "We currently support 12+ Indian languages including Hindi, Tamil, Telugu, Bengali, and more."
  },
  {
    question: "Is this an official government website?",
    answer: "MyYojana is an independent platform that aggregates information from official government sources."
  },
];

export const categories = [
  {
    id: 'agriculture',
    title: 'Agriculture',
    description: 'Schemes for farmers and agricultural development',
    icon: 'plant' as IconName, 
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Scholarships and educational support',
    icon: 'academic-cap' as IconName,  
  },
  {
    id: 'women',
    title: 'Women Empowerment',
    description: 'Programs for women welfare and development',
    icon: 'users' as IconName,  
  },
  {
    id: 'rural',
    title: 'Rural Development',
    description: 'Schemes for rural areas and communities',
    icon: 'home' as IconName,  
  },
  {
    id: 'health',
    title: 'Healthcare',
    description: 'Medical assistance and health insurance schemes',
    icon: 'heart' as IconName,  
  },
  {
    id: 'business',
    title: 'Business & MSME',
    description: 'Support for entrepreneurs and small businesses',
    icon: 'briefcase' as IconName,  
  },
  {
    id: 'skill',
    title: 'Skill Development',
    description: 'Training and career enhancement programs',
    icon: 'academic-cap' as IconName,  
  },
  {
    id: 'social',
    title: 'Social Welfare',
    description: 'Support for underprivileged communities',
    icon: 'users-group' as IconName,  
  },
];

export const features = [
  {
    title: 'Multilingual Support',
    description: 'Access information in your preferred language',
    icon: '🌐',
  },
  {
    title: 'Personalized Results',
    description: 'Get schemes matched to your profile',
    icon: '🎯',
  },
  {
    title: 'Simple Navigation',
    description: 'Easy to use interface for everyone',
    icon: '✨',
  },
];

export const levels = ["Central", "State"];

export const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman & Nicobar Islands",
    "Chandigarh",
    "Dadra & Nagar Haveli and Daman & Diu",
    "Delhi",
    "Jammu & Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];