import { useEffect, useState, type ReactNode } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import InstagramIcon from '@mui/icons-material/Instagram';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TranslateIcon from '@mui/icons-material/Translate';
import { profile, projects, experience } from '../data/content';
import './JackIn.css';

const BOOT_LINES = [
    'ESTABLISHING UPLINK...',
    'BYPASSING ICE...',
    'DECRYPTING PERSONA.SYS...',
    'NETWATCH TRACE: EVADED',
    'JACKING IN...',
];

const BOOT_DURATION_MS = 2600;

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

function JackIn({ setIsFrench }: { setIsFrench: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [booting, setBooting] = useState(true);
    const [progress, setProgress] = useState(0);
    const [lineIdx, setLineIdx] = useState(0);
    const [activeId, setActiveId] = useState<number>(projects[0].id);
    const activeProject = projects.find((p) => p.id === activeId) ?? projects[0];

    useEffect(() => {
        const start = Date.now();
        let raf: number;
        const tick = () => {
            const elapsed = Date.now() - start;
            const pct = Math.min(100, Math.round((elapsed / BOOT_DURATION_MS) * 100));
            setProgress(pct);
            setLineIdx(Math.min(BOOT_LINES.length - 1, Math.floor((pct / 100) * BOOT_LINES.length)));
            if (pct < 100) {
                raf = requestAnimationFrame(tick);
            } else {
                setTimeout(() => setBooting(false), 450);
            }
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
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
                    <p className="ji-boot-line">{BOOT_LINES[lineIdx]}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="ji-theme">
            <div className="ji-scanlines" aria-hidden="true" />
            <div className="ji-hud-bar">
                <span>SIGNAL: <em className="ji-good">STABLE</em></span>
                <span>NETWATCH: <em className="ji-good">EVADED</em></span>
                <span className="ji-hud-right">UPLINK ACTIVE</span>
                <button type="button" className="ji-lang-toggle" onClick={() => setIsFrench(true)}>
                    <TranslateIcon fontSize="inherit" /> FR
                </button>
            </div>

            <div className="ji-content">
                <section id="intro">
                    <NetPanel tab="PERSONA.SYS" className="ji-intro-wrap">
                        <div className="ji-intro-body">
                            <div className="ji-photo-frame">
                                <img src={profile.photo} alt={profile.name} />
                            </div>
                            <div className="ji-intro-text">
                                <span className="ji-eyebrow">// IDENTITY CONFIRMED</span>
                                <h1 className="ji-name">{profile.name}</h1>
                                <p className="ji-role">{profile.role} <span className="ji-sep">//</span> {profile.location}</p>
                                <p className="ji-blurb">{profile.blurb}</p>
                                <div className="ji-socials">
                                    <a href={profile.socials.github} target="_blank" rel="noopener noreferrer"><FaGithub /><span>GITHUB</span></a>
                                    <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /><span>LINKEDIN</span></a>
                                    <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon fontSize="inherit" /><span>INSTAGRAM</span></a>
                                    <a href={profile.socials.judo} target="_blank" rel="noopener noreferrer"><SportsKabaddiIcon fontSize="inherit" /><span>JUDO</span></a>
                                </div>
                                <a className="ji-resume" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                                    ▸ DOWNLOAD_RESUME.pdf
                                </a>
                            </div>
                        </div>
                    </NetPanel>
                </section>

                <section id="projects">
                    <h2 className="ji-heading">// PROGRAM_ARCHIVE</h2>
                    <NetPanel tab="BREACH PROTOCOL" className="ji-missionlog-wrap">
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
                                                <span className="ji-log-skillcount">{project.skills.length} DAEMONS</span>
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
                                <span className="ji-eyebrow">// DECRYPTED FILE</span>
                                <h3 className="ji-detail-name">{activeProject.name}</h3>
                                <p className="ji-detail-desc">{activeProject.desc}</p>
                                <div className="ji-tags">
                                    {activeProject.skills.map((skill) => (
                                        <span key={skill} className="ji-tag">{skill}</span>
                                    ))}
                                </div>
                                <a className="ji-detail-open" href={activeProject.link} target="_blank" rel="noopener noreferrer">
                                    <OpenInNewIcon fontSize="inherit" /> EXECUTE
                                </a>
                            </div>
                        </div>
                    </NetPanel>
                </section>

                <section id="experience">
                    <h2 className="ji-heading">// SERVICE_RECORD</h2>
                    <NetPanel tab="EMPLOYMENT LOG">
                        <div className="ji-log">
                            {experience.map((entry) => (
                                <div className="ji-log-entry" key={entry.id}>
                                    <img src={entry.logo} alt={entry.org} className="ji-log-logo" />
                                    <div>
                                        <div className="ji-log-header">
                                            <span className="ji-log-time">[{entry.time.toUpperCase()}]</span>
                                            <h3>{entry.role} @ {entry.org}</h3>
                                        </div>
                                        {entry.desc && <p>{entry.desc}</p>}
                                        {entry.skills.length > 0 && (
                                            <div className="ji-tags">
                                                {entry.skills.map((skill) => (
                                                    <span key={skill} className="ji-tag">{skill}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </NetPanel>
                </section>

                <footer className="ji-footer">
                    <p>© {new Date().getFullYear()} {profile.name} :: CONNECTION MAINTAINED</p>
                    <p>UPLINK: <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
                </footer>
            </div>
        </div>
    );
}

export default JackIn;
