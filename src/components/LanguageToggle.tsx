import TranslateIcon from '@mui/icons-material/Translate';
import './LanguageToggle.css';

function LanguageToggle({
    isFrench,
    setIsFrench,
}: {
    isFrench: boolean;
    setIsFrench: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <button
            className="language-toggle"
            onClick={() => setIsFrench((v) => !v)}
            aria-label="Toggle language"
        >
            <TranslateIcon fontSize="inherit" />
            {isFrench ? 'English' : 'Français'}
        </button>
    );
}

export default LanguageToggle;
