import { useEffect, useState, type ReactNode } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import InstagramIcon from '@mui/icons-material/Instagram';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TranslateIcon from '@mui/icons-material/Translate';
import { profile, projects, experience } from '../data/content';
import { LOCALES, translations, type Locale } from '../data/i18n';
import './JackIn.css';

const BOOT_DURATION_MS = 2600;
const LOCALE_STORAGE_KEY = 'jackin-locale';

function readStoredLocale(): Locale {
    if (typeof window === 'undefined') return 'en';
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return LOCALES.some((l) => l.code === stored) ? (stored as Locale) : 'en';
}

/** Thin outlined panel with clipped corners + reticle brackets, in the CP2077 netrunner style. */
function NetPanel({ children, tab, className = '' }: { children: ReactNode; tab?: string; className?: string }) {
    return (
        <div className={`ji-panel-wrap ${className}`}>
            {tab && <div className="ji-panel-tab">{tab}</div>}
            <div className="ji-panel">
                <span className="ji-corner ji-corner-tl" aria-hidden="true" />
                <span className="ji-corner ji-corner-tr" aria-hidden="true" />
                <span className="ji-corner ji-corner-bl" aria-hidden="true" />
                <span className="ji-corner ji-corner-br" aria-hidden="true" />
                {children}
            </div>
        </div>
    );
}

function LocaleSwitcher({ locale, setLocale }: { locale: Locale; setLocale: (l: Locale) => void }) {
    const [open, setOpen] = useState(false);
    const active = LOCALES.find((l) => l.code === locale)!;

    return (
        <div className={`ji-locale-switcher ${open ? 'open' : ''}`}>
            <button
                type="button"
                className="ji-lang-toggle"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-label="Change language"
            >
                <TranslateIcon fontSize="inherit" /> {active.short}
            </button>
            <div className="ji-locale-panel" role="menu">
                {LOCALES.map((l) => (
                    <button
                        key={l.code}
                        type="button"
                        role="menuitem"
                        className={`ji-locale-option ${l.code === locale ? 'is-active' : ''}`}
                        onClick={() => {
                            setLocale(l.code);
                            setOpen(false);
                        }}
                    >
                        {l.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

const GLITCH_FILTER_IDS = ['ji-glitch-1', 'ji-glitch-2', 'ji-glitch-3', 'ji-glitch-4', 'ji-glitch-5', 'ji-glitch-6'];

function randRange(min: number, max: number) {
    return min + Math.random() * (max - min);
}

interface GlitchBand {
    top: string;
    height: number;
    delay: number;
    dir: 'l' | 'r';
    color: string;
    big: boolean;
}

/** Generates a fresh, randomized set of horizontal tear bands so the transition never plays identically twice. */
function makeGlitchBands(): GlitchBand[] {
    const bands: GlitchBand[] = [];
    let top = Math.random() * 6;
    while (top < 96) {
        const big = Math.random() < 0.2;
        const thin = !big && Math.random() < 0.4;
        const height = big ? randRange(24, 60) : thin ? randRange(1.5, 4) : randRange(8, 22);
        const dir: 'l' | 'r' = Math.random() < 0.5 ? 'l' : 'r';
        const roll = Math.random();
        const color = roll < 0.35
            ? `rgba(255, 255, 255, ${randRange(0.65, 0.92).toFixed(2)})`
            : roll < 0.68
                ? `rgba(56, 224, 255, ${randRange(0.4, 0.6).toFixed(2)})`
                : `rgba(255, 59, 78, ${randRange(0.4, 0.6).toFixed(2)})`;
        bands.push({ top: `${top.toFixed(1)}%`, height, delay: Math.floor(randRange(0, 95)), dir, color, big });
        top += randRange(3.5, 11);
    }
    return bands;
}

/** Generates a randomized sequence of pixel-displacement filters (and clean gaps) for the content-distortion animation. */
function makeGlitchFilterSequence(): string[] {
    const seq: string[] = [];
    for (let i = 0; i < 8; i++) {
        if (Math.random() < 0.22) {
            seq.push('none');
        } else {
            const id = GLITCH_FILTER_IDS[Math.floor(Math.random() * GLITCH_FILTER_IDS.length)];
            seq.push(`url(#${id})`);
        }
    }
    return seq;
}

function JackIn() {
    const [booting, setBooting] = useState(true);
    const [glitching, setGlitching] = useState(false);
    const [glitchBands, setGlitchBands] = useState<GlitchBand[]>([]);
    const [glitchFilters, setGlitchFilters] = useState<string[]>([]);
    const [progress, setProgress] = useState(0);
    const [lineIdx, setLineIdx] = useState(0);
    const [activeId, setActiveId] = useState<number>(projects[0].id);
    const [locale, setLocaleState] = useState<Locale>(readStoredLocale);
    const activeProject = projects.find((p) => p.id === activeId) ?? projects[0];
    const t = translations[locale];

    const setLocale = (l: Locale) => {
        setLocaleState(l);
        window.localStorage.setItem(LOCALE_STORAGE_KEY, l);
    };

    useEffect(() => {
        const start = Date.now();
        let raf: number;
        const tick = () => {
            const elapsed = Date.now() - start;
            const pct = Math.min(100, Math.round((elapsed / BOOT_DURATION_MS) * 100));
            setProgress(pct);
            setLineIdx(Math.min(t.ui.bootLines.length - 1, Math.floor((pct / 100) * t.ui.bootLines.length)));
            if (pct < 100) {
                raf = requestAnimationFrame(tick);
            } else {
                setTimeout(() => {
                    setBooting(false);
                    setGlitchBands(makeGlitchBands());
                    setGlitchFilters(makeGlitchFilterSequence());
                    setGlitching(true);
                    setTimeout(() => setGlitching(false), 550);
                }, 450);
            }
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (booting) {
        return (
            <div className="ji-boot">
                <div className="ji-boot-scanlines" aria-hidden="true" />
                <div className="ji-boot-center">
                    <div className="ji-boot-attention-main">
                        <span className="ji-boot-warn-icon">⚠</span> ATTENTION
                    </div>
                    <div className="ji-boot-channels">
                        <span>PERSONA.SYS</span>
                        <span className="ji-boot-channel-warn">ATTN // {String(progress).padStart(3, '0')}</span>
                        <span>NET.ID {String(progress * 37 % 1000).padStart(3, '0')}X</span>
                    </div>
                    <div className="ji-boot-barwrap">
                        <div className="ji-boot-bar">
                            <div className="ji-boot-bar-fill" style={{ width: `${progress}%` }} />
                        </div>
                        <span className="ji-boot-pct">{progress}%</span>
                    </div>
                    <p className="ji-boot-line">{t.ui.bootLines[lineIdx]}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`ji-theme ${glitching ? 'is-glitching' : ''}`}>
            <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
                <defs>
                    {/* Every filter uses a near-zero X frequency (near-constant along each row) paired with a much
                        higher Y frequency, so displacement reads as independent horizontal shifts per scanline
                        rather than a uniform warp — that's the dominant "horizontal tear" look. */}
                    <filter id="ji-glitch-1" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
                        <feTurbulence type="fractalNoise" baseFrequency="0.004 1.1" numOctaves="1" seed="3" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="55" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                    <filter id="ji-glitch-2" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
                        <feTurbulence type="fractalNoise" baseFrequency="0.006 0.5" numOctaves="1" seed="11" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="80" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                    <filter id="ji-glitch-3" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
                        <feTurbulence type="fractalNoise" baseFrequency="0.003 2.2" numOctaves="1" seed="21" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="38" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                    <filter id="ji-glitch-4" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
                        <feTurbulence type="fractalNoise" baseFrequency="0.008 0.35" numOctaves="1" seed="34" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="110" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                    <filter id="ji-glitch-5" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
                        <feTurbulence type="fractalNoise" baseFrequency="0.002 3.4" numOctaves="1" seed="47" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="26" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                    <filter id="ji-glitch-6" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
                        <feTurbulence type="fractalNoise" baseFrequency="0.005 0.8" numOctaves="2" seed="58" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="65" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                </defs>
            </svg>
            {glitching && (
                <div className="ji-glitch-overlay" aria-hidden="true">
                    <span className="ji-glitch-dim" />
                    {glitchBands.map((b, i) => (
                        <span
                            key={i}
                            className={`ji-glitch-band ji-glitch-band-${b.dir} ${b.big ? 'ji-glitch-band-big' : ''}`}
                            style={{
                                top: b.top,
                                height: b.height,
                                animationDelay: `${b.delay}ms`,
                                background: b.color,
                            }}
                        />
                    ))}
                    <span className="ji-glitch-flash" />
                </div>
            )}
            <div className="ji-scanlines" aria-hidden="true" />
            <div className="ji-hud-bar">
                <span className="ji-hud-status">SIGNAL: <em className="ji-good">{t.ui.stableWord}</em></span>
                <span className="ji-hud-status ji-hud-status-hide-sm">NETWATCH: <em className="ji-good">{t.ui.evadedWord}</em></span>
                <span className="ji-hud-right ji-hud-status-hide-sm">{t.ui.uplinkActiveLabel}</span>
                <LocaleSwitcher locale={locale} setLocale={setLocale} />
            </div>

            <div
                className="ji-content"
                style={glitching ? (Object.fromEntries(glitchFilters.map((f, i) => [`--gf${i}`, f])) as React.CSSProperties) : undefined}
            >
                <section id="intro">
                    <NetPanel tab="PERSONA.SYS" className="ji-intro-wrap">
                        <div className="ji-intro-body">
                            <div className="ji-photo-frame">
                                <img src={profile.photo} alt={profile.name} />
                            </div>
                            <div className="ji-intro-text">
                                <span className="ji-eyebrow">{t.ui.eyebrowIdentity}</span>
                                <h1 className="ji-name" data-text={profile.name}>{profile.name}</h1>
                                <p className="ji-role">{t.ui.role} <span className="ji-sep">//</span> {t.ui.location}</p>
                                <p className="ji-blurb">{t.ui.blurb}</p>
                                <div className="ji-socials">
                                    <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /><span>GITHUB</span></a>
                                    <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /><span>LINKEDIN</span></a>
                                    <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon fontSize="inherit" /><span>INSTAGRAM</span></a>
                                    <a href={profile.socials.judo} target="_blank" rel="noopener noreferrer" aria-label={t.ui.judoLabel}><SportsKabaddiIcon fontSize="inherit" /><span>{t.ui.judoLabel}</span></a>
                                </div>
                                <a className="ji-resume" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                                    {t.ui.downloadResume}
                                </a>
                            </div>
                        </div>
                    </NetPanel>
                </section>

                <section id="projects">
                    <h2 className="ji-heading">{t.ui.programArchiveHeading}</h2>
                    <NetPanel tab={t.ui.breachProtocolTab} className="ji-missionlog-wrap">
                        <div className="ji-missionlog">
                            <ul className="ji-log-list" role="list">
                                {projects.map((project, idx) => (
                                    <li key={project.id} className={`ji-log-row ${project.id === activeId ? 'is-active' : ''}`}>
                                        <button
                                            type="button"
                                            className="ji-log-row-btn"
                                            onClick={() => setActiveId(project.id)}
                                            aria-pressed={project.id === activeId}
                                        >
                                            <span className="ji-log-index">{String(idx + 1).padStart(2, '0')}</span>
                                            <span className="ji-log-row-text">
                                                <span className="ji-log-name">{project.name}</span>
                                                <span className="ji-log-skillcount">{project.skills.length} {t.ui.daemonsWord}</span>
                                            </span>
                                        </button>
                                        <a
                                            className="ji-log-link"
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Open ${project.name} in a new tab`}
                                        >
                                            <OpenInNewIcon fontSize="inherit" />
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="ji-detail-readout">
                                <div className="ji-detail-imgwrap">
                                    <img src={activeProject.image} alt={activeProject.name} />
                                </div>
                                <span className="ji-eyebrow">{t.ui.eyebrowDecrypted}</span>
                                <h3 className="ji-detail-name">{activeProject.name}</h3>
                                <p className="ji-detail-desc">{t.projects[activeProject.id]?.desc ?? activeProject.desc}</p>
                                <div className="ji-tags">
                                    {activeProject.skills.map((skill) => (
                                        <span key={skill} className="ji-tag">{skill}</span>
                                    ))}
                                </div>
                                <a className="ji-detail-open" href={activeProject.link} target="_blank" rel="noopener noreferrer">
                                    <OpenInNewIcon fontSize="inherit" /> {t.ui.executeLabel}
                                </a>
                            </div>
                        </div>
                    </NetPanel>
                </section>

                <section id="experience">
                    <h2 className="ji-heading">{t.ui.serviceRecordHeading}</h2>
                    <NetPanel tab={t.ui.employmentLogTab}>
                        <div className="ji-log">
                            {experience.map((entry) => {
                                const ov = t.experience[entry.id];
                                return (
                                    <div className="ji-log-entry" key={entry.id}>
                                        <img src={entry.logo} alt={entry.org} className="ji-log-logo" />
                                        <div>
                                            <div className="ji-log-header">
                                                <span className="ji-log-time">[{entry.time.toUpperCase()}]</span>
                                                <h3>{ov?.role ?? entry.role} @ {entry.org}</h3>
                                            </div>
                                            {(ov?.desc || entry.desc) && <p>{ov?.desc || entry.desc}</p>}
                                            {entry.skills.length > 0 && (
                                                <div className="ji-tags">
                                                    {entry.skills.map((skill) => (
                                                        <span key={skill} className="ji-tag">{skill}</span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </NetPanel>
                </section>

                <footer className="ji-footer">
                    <p>© {new Date().getFullYear()} {profile.name} :: {t.ui.footerConnection}</p>
                    <p>{t.ui.footerUplink} <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
                </footer>
            </div>
        </div>
    );
}

export default JackIn;
