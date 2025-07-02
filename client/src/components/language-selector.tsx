import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { setLanguage, getCurrentLanguage } from '@/i18n/config';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文 (Chinese)', flag: '🇨🇳' },
  { code: 'hi', name: 'हिन्दी (Hindi)', flag: '🇮🇳' },
  { code: 'es', name: 'Español (Spanish)', flag: '🇪🇸' },
  { code: 'fr', name: 'Français (French)', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية (Arabic)', flag: '🇸🇦' },
  { code: 'bn', name: 'বাংলা (Bengali)', flag: '🇧🇩' },
  { code: 'pt', name: 'Português (Portuguese)', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский (Russian)', flag: '🇷🇺' },
  { code: 'ja', name: '日本語 (Japanese)', flag: '🇯🇵' },
  { code: 'de', name: 'Deutsch (German)', flag: '🇩🇪' },
  { code: 'ur', name: 'اردو (Urdu)', flag: '🇵🇰' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'tr', name: 'Türkçe (Turkish)', flag: '🇹🇷' },
  { code: 'vi', name: 'Tiếng Việt (Vietnamese)', flag: '🇻🇳' },
  { code: 'ko', name: '한국어 (Korean)', flag: '🇰🇷' },
  { code: 'it', name: 'Italiano (Italian)', flag: '🇮🇹' },
  { code: 'fa', name: 'فارسی (Persian)', flag: '🇮🇷' },
  { code: 'th', name: 'ไทย (Thai)', flag: '🇹🇭' },
  { code: 'sw', name: 'Kiswahili (Swahili)', flag: '🇰🇪' },
];

export default function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState(getCurrentLanguage());

  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLang(getCurrentLanguage());
    };
    
    window.addEventListener('language-change', handleLanguageChange);
    return () => window.removeEventListener('language-change', handleLanguageChange);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
  };

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  return (
    <Select value={currentLang} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-40 bg-transparent border-gray-600 text-white hover:border-gray-400 transition-colors">
        <SelectValue
          className="flex items-center gap-2"
          // @ts-ignore
          placeholder={<span className="text-sm">Select language</span>}
          // Custom render for value
          // Radix SelectValue will show the selected item's children, so we set value to code and children to flag+name
        />
      </SelectTrigger>
      <SelectContent className="bg-[hsl(223,47%,11%)] border-gray-600">
        {languages.map((language) => (
          <SelectItem 
            key={language.code} 
            value={language.code}
            className="text-white hover:bg-gray-700 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{language.flag}</span>
              <span>{language.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}