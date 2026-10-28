from pathlib import Path

import streamlit as st


ROOT = Path(__file__).parent
ASSETS = ROOT / "assets"
EMAIL = "afianoor508@gmail.com"
GITHUB = "https://github.com/Afianoor-lab"
LINKEDIN = "https://www.linkedin.com/in/afia-noor-86090a35b"

PROJECTS = [
    {
        "title": "Language Translator",
        "description": "A multilingual translation app designed to make communication feel effortless.",
        "image": "project1.png",
        "category": "AI & Web",
        "tech": ["Python", "Streamlit", "AI"],
        "code": f"{GITHUB}/Language-Translator-App",
        "demo": "https://language-translator-app-mhuruc5ylxq2gzlhjkzcam.streamlit.app/",
    },
    {
        "title": "AI Customer Support",
        "description": "An AI-powered support experience that helps customers get answers in real time.",
        "image": "project2.png",
        "category": "AI & Web",
        "tech": ["AI", "Web", "Streamlit"],
        "code": f"{GITHUB}/AI-Customer-Support-app",
        "demo": "https://ai-customer-support-app-jpj87c496gec5nd8movtsh.streamlit.app/",
    },
    {
        "title": "Brain Tumor Detection",
        "description": "A medical image analysis application for brain tumor detection and classification.",
        "image": "project3.png",
        "category": "AI & Web",
        "tech": ["Python", "Computer Vision", "ML"],
        "code": f"{GITHUB}/Brain-Tumor-Detection-and-Classification-Web-App",
    },
    {
        "title": "Featured Event Finder",
        "description": "A clean event discovery experience for finding something exciting to do.",
        "image": "project4.png",
        "category": "Web",
        "tech": ["HTML", "CSS", "JavaScript"],
        "code": f"{GITHUB}/EventFinder",
        "demo": "https://afianoor-lab.github.io/EventFinder/",
    },
    {
        "title": "Ghost Writer AI",
        "description": "An AI writing assistant that helps complete unfinished scripts and comments.",
        "image": "project5.png",
        "category": "AI & Web",
        "tech": ["AI", "Python", "Hugging Face"],
        "code": f"{GITHUB}/Ghost-Writer-AI",
        "demo": "https://huggingface.co/spaces/AfiaNoor/Ghost-Writer-AI",
    },
    {
        "title": "VaultLegacy",
        "description": "An Android app concept for securely protecting personal passwords.",
        "image": "project6.jpeg",
        "category": "Mobile",
        "tech": ["Android", "Java", "Security"],
        "code": f"{GITHUB}/Vault-Asset-app",
        "demo": "https://drive.google.com/file/d/1pSEUTa9A75NWbkSJiEGZJiKhAiNmdHRH/view?usp=drivesdk",
    },
    {
        "title": "CLOAK-AI",
        "description": "A privacy-preserving AI agent project built for the AMD Developer Hackathon.",
        "image": "project7.png",
        "category": "AI & Web",
        "tech": ["AI", "Privacy", "AMD"],
        "code": f"{GITHUB}/CloakAI-AMD-Neural-Guard",
        "demo": "https://huggingface.co/spaces/AfiaNoor/Cloak-AI",
    },
]

SKILLS = [
    ("Frontend", "React.js · JavaScript · HTML & CSS · Responsive UI"),
    ("Backend & data", "Node.js · Express · REST APIs · MySQL · MongoDB"),
    ("AI & machine learning", "Python · Scikit-learn · Computer vision · LLMs"),
    ("Tools & workflow", "Git & GitHub · Firebase · Agile · UI/UX"),
]

CERTIFICATIONS = [
    ("AMD Developer Hackathon", "AMD Developer Hackathon-certificate.pdf"),
    ("Google Data Analytics", "data analytics certficate.pdf"),
    ("Google AI Essentials", "Ai essentials certificate.pdf"),
    ("Google Project Management", "project mangmnt certificate.pdf"),
    ("Aspire Institute Leadership", "Aspire-Certificate.pdf"),
    ("Generative AI Application Developer", "Generative AI Application Developer Certificate .pdf"),
    ("Introduction to Cybersecurity", "Introduction To Cybersecurity Certificate .pdf"),
]

st.set_page_config(
    page_title="Afia Noor — Full-Stack Developer",
    page_icon="✳",
    layout="wide",
    initial_sidebar_state="collapsed",
)

st.markdown(
    """
    <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
    :root { --bg: #080b14; --surface: #111624; --text: #f3f2f7; --muted: #a7adbd; --accent: #c3f56a; --line: rgba(224,229,248,.12); }
    .stApp { background: var(--bg); color: var(--text); font-family: 'DM Sans', sans-serif; }
    [data-testid="stHeader"] { background: rgba(8,11,20,.92); }
    [data-testid="stToolbar"], #MainMenu, footer { visibility: hidden; }
    .block-container { max-width: 1120px; padding: 1.25rem 2rem 3rem; }
    h1, h2, h3 { font-family: 'Space Grotesk', sans-serif !important; color: var(--text) !important; letter-spacing: -1px; }
    h1 { font-size: clamp(2.7rem, 6vw, 4.7rem) !important; line-height: 1.06 !important; }
    h2 { font-size: clamp(2rem, 4vw, 3.2rem) !important; }
    p, li { color: var(--muted); }
    a { color: var(--accent) !important; }
    .eyebrow { color: var(--accent); font-size: .75rem; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; }
    .accent { color: var(--accent); }
    .topnav { display: flex; justify-content: space-between; align-items: center; padding: .3rem 0 1.2rem; border-bottom: 1px solid var(--line); margin-bottom: 3rem; }
    .brand { color: var(--text); font: 700 1.6rem 'Space Grotesk', sans-serif; letter-spacing: -2px; }
    .brand span { color: var(--accent); }
    .navlinks { display: flex; gap: 1.25rem; flex-wrap: wrap; }
    .navlinks a { color: var(--muted) !important; text-decoration: none; font-size: .85rem; }
    .hero-note { display: inline-block; padding: .35rem .7rem; border: 1px solid rgba(195,245,106,.25); border-radius: 2rem; color: #d3efaa; font-size: .8rem; }
    .hero-description { max-width: 560px; font-size: 1.08rem; line-height: 1.8; }
    .section { padding-top: 4.5rem; }
    .section-rule { border-top: 1px solid var(--line); margin-top: 3.5rem; }
    .layer, .project-card, .skill-card, .cert-card { height: 100%; padding: 1.1rem; border: 1px solid var(--line); border-radius: .65rem; background: linear-gradient(145deg, rgba(255,255,255,.04), rgba(255,255,255,.012)); }
    .layer-number { color: var(--accent); font-size: .75rem; font-weight: 700; letter-spacing: .1em; }
    .layer-name { margin: .55rem 0 .25rem; color: var(--text); font: 500 1.05rem 'Space Grotesk', sans-serif; }
    .layer-tools { margin: 0; font-size: .82rem; line-height: 1.7; }
    .project-card { margin-bottom: 1rem; }
    .project-card h3 { font-size: 1.15rem; }
    .tags { color: var(--muted); font-size: .75rem; line-height: 2; }
    .cert-title { min-height: 3rem; color: var(--text); font-weight: 600; }
    [data-testid="stMetric"] { background: var(--surface); padding: 1rem; border: 1px solid var(--line); border-radius: .6rem; }
    [data-testid="stMetricValue"] { color: var(--accent); }
    [data-testid="stVerticalBlockBorderWrapper"] { border-color: var(--line); }
    .stButton > button, .stDownloadButton > button, .stLinkButton > a { border-radius: .5rem; font-weight: 600; }
    .stLinkButton > a { background: var(--accent); border-color: var(--accent); color: #10150b !important; }
    .stDownloadButton > button { background: transparent; border-color: var(--line); color: var(--text); }
    div[data-testid="stRadio"] label { color: var(--muted); }
    @media (max-width: 640px) {
      .block-container { padding: .75rem 1rem 2rem; }
      .topnav { align-items: flex-start; gap: .75rem; flex-direction: column; margin-bottom: 2rem; }
      .navlinks { gap: .8rem; }
      .section { padding-top: 3rem; }
    }
    </style>
    """,
    unsafe_allow_html=True,
)

st.markdown(
    """
    <nav class="topnav">
      <a class="brand" href="#home">AN<span>.</span></a>
      <div class="navlinks">
        <a href="#about">About</a><a href="#skills">Skills</a>
        <a href="#projects">Projects</a><a href="#certifications">Certificates</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
    <div id="home"></div>
    """,
    unsafe_allow_html=True,
)

hero_copy, hero_photo = st.columns([1.25, 0.75], gap="large", vertical_alignment="center")
with hero_copy:
    st.markdown('<span class="hero-note">● &nbsp; Open to opportunities</span>', unsafe_allow_html=True)
    st.markdown('<p class="eyebrow" style="margin-top:1.2rem">Hello, I’m Afia Noor</p>', unsafe_allow_html=True)
    st.markdown('<h1>I build full-stack<br>products with <span class="accent">purpose.</span></h1>', unsafe_allow_html=True)
    st.markdown(
        '<p class="hero-description">I bring thoughtful interfaces, backend services, data, and useful AI together to create practical digital experiences.</p>',
        unsafe_allow_html=True,
    )
    st.link_button("Explore my work ↓", "#projects")
    st.markdown(f"[LinkedIn ↗]({LINKEDIN}) &nbsp;&nbsp; [GitHub ↗]({GITHUB}) &nbsp;&nbsp; [Email ↗](mailto:{EMAIL})")
with hero_photo:
    st.image(str(ASSETS / "profile.png"), caption="Curious by nature · Code with care", use_container_width=True)

st.markdown('<div class="section-rule"></div><div class="section" id="about"></div>', unsafe_allow_html=True)
about, stats = st.columns([1, 1], gap="large")
with about:
    st.markdown('<p class="eyebrow">A little about me</p>', unsafe_allow_html=True)
    st.markdown("## Making ideas feel **possible.**")
    st.write(
        "I’m a Computer Science graduate who enjoys turning thoughtful ideas into practical products. "
        "My work spans web and Android apps, AI experiments, and the details that make a digital experience feel intuitive."
    )
    st.write(
        "I like working across the stack: shaping an interface, connecting it to backend services and data, "
        "and exploring where AI can make a product more useful. I’m always learning and building on that foundation."
    )
with stats:
    st.metric("Projects showcased", f"{len(PROJECTS):02d}")
    st.metric("Certificates earned", f"{len(CERTIFICATIONS):02d}")

st.markdown('<div class="section" id="skills"></div>', unsafe_allow_html=True)
st.markdown('<p class="eyebrow">One connected toolkit</p>', unsafe_allow_html=True)
st.markdown("## From interface to **intelligence.**")
layers = [
    ("01", "Interface", "React · JavaScript · Responsive UI"),
    ("02", "Services", "Node.js · Express · REST APIs"),
    ("03", "Data", "MySQL · MongoDB · Firebase"),
    ("04", "Intelligence", "Python · Machine learning · LLMs"),
]
layer_columns = st.columns(4, gap="small")
for column, (number, name, tools) in zip(layer_columns, layers):
    with column:
        st.markdown(
            f'<div class="layer"><span class="layer-number">{number}</span>'
            f'<div class="layer-name">{name}</div><p class="layer-tools">{tools}</p></div>',
            unsafe_allow_html=True,
        )

st.markdown('<div class="section"></div>', unsafe_allow_html=True)
st.markdown('<p class="eyebrow">What I work with</p>', unsafe_allow_html=True)
st.markdown("## The tools behind end-to-end products.")
skill_columns = st.columns(4, gap="small")
for column, (title, items) in zip(skill_columns, SKILLS):
    with column:
        st.markdown(
            f'<div class="skill-card"><div class="layer-name">{title}</div>'
            f'<p class="layer-tools">{items}</p></div>',
            unsafe_allow_html=True,
        )

st.markdown('<div class="section" id="projects"></div>', unsafe_allow_html=True)
st.markdown('<p class="eyebrow">Selected work</p>', unsafe_allow_html=True)
st.markdown("## A few things I’ve put into the world.")
st.write("AI experiments, web experiences, and mobile projects—each one a chance to learn something new.")
selected_category = st.radio(
    "Filter projects",
    ["All", "AI & Web", "Web", "Mobile"],
    horizontal=True,
    label_visibility="collapsed",
)
visible_projects = [
    project for project in PROJECTS
    if selected_category == "All" or project["category"] == selected_category
]
for start in range(0, len(visible_projects), 2):
    columns = st.columns(2, gap="medium")
    for column, project in zip(columns, visible_projects[start:start + 2]):
        with column:
            with st.container(border=True):
                st.image(str(ASSETS / project["image"]), use_container_width=True)
                st.markdown(f"### {project['title']}")
                st.caption(project["description"])
                st.markdown(f'<p class="tags">{project["category"]} &nbsp;·&nbsp; {" &nbsp;·&nbsp; ".join(project["tech"])}</p>', unsafe_allow_html=True)
                links = st.columns(2)
                with links[0]:
                    st.link_button("Source code ↗", project["code"], use_container_width=True)
                if project.get("demo"):
                    with links[1]:
                        st.link_button("Live demo ↗", project["demo"], use_container_width=True)

st.markdown('<div class="section" id="certifications"></div>', unsafe_allow_html=True)
st.markdown('<p class="eyebrow">Always learning</p>', unsafe_allow_html=True)
st.markdown("## Learning doesn’t stop at a certificate.")
st.write("Milestones from my ongoing journey across technology, leadership, and creative problem-solving.")
for start in range(0, len(CERTIFICATIONS), 3):
    columns = st.columns(3, gap="small")
    for column, (title, filename) in zip(columns, CERTIFICATIONS[start:start + 3]):
        with column:
            cert_path = ASSETS / filename
            with st.container(border=True):
                st.markdown(f'<div class="cert-title">✳ &nbsp; {title}</div>', unsafe_allow_html=True)
                st.download_button(
                    "Download certificate",
                    data=cert_path.read_bytes(),
                    file_name=filename,
                    mime="application/pdf",
                    key=f"certificate-{filename}",
                    use_container_width=True,
                )

st.markdown('<div class="section" id="contact"></div>', unsafe_allow_html=True)
st.markdown('<p class="eyebrow">Have something in mind?</p>', unsafe_allow_html=True)
st.markdown("## Let’s make it happen.")
st.write("I’m always happy to talk about new ideas, interesting projects, or opportunities to collaborate.")
st.link_button(f"Email Afia · {EMAIL}", f"mailto:{EMAIL}")
st.markdown(f"[LinkedIn ↗]({LINKEDIN}) &nbsp;&nbsp; [GitHub ↗]({GITHUB})")

with st.sidebar:
    st.markdown("### Afia Noor")
    st.caption("Full-stack developer")
    st.link_button("Email me", f"mailto:{EMAIL}", use_container_width=True)
