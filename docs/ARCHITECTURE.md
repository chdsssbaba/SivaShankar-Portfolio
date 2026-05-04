# Architecture Overview

This document describes the component hierarchy and data flow of the Personal Portfolio Website.

## Component Tree

```mermaid
graph TD
    A["App"] --> B["Navbar"]
    A --> C["Main"]
    A --> D["Footer"]
    C --> E["Hero"]
    C --> F["About"]
    C --> G["Skills"]
    C --> H["Projects"]
    C --> I["Experience"]
    C --> J["Education"]
    C --> K["Certifications"]
    C --> L["Achievements"]
    C --> M["Contact"]

    style A fill:#6366f1,stroke:#818cf8,color:#fff
    style C fill:#a855f7,stroke:#c084fc,color:#fff
    style E fill:#1e1e2e,stroke:#6366f1,color:#e2e8f0
    style F fill:#1e1e2e,stroke:#6366f1,color:#e2e8f0
    style G fill:#1e1e2e,stroke:#6366f1,color:#e2e8f0
    style H fill:#1e1e2e,stroke:#6366f1,color:#e2e8f0
    style I fill:#1e1e2e,stroke:#6366f1,color:#e2e8f0
    style J fill:#1e1e2e,stroke:#6366f1,color:#e2e8f0
    style K fill:#1e1e2e,stroke:#6366f1,color:#e2e8f0
    style L fill:#1e1e2e,stroke:#6366f1,color:#e2e8f0
    style M fill:#1e1e2e,stroke:#6366f1,color:#e2e8f0
```

## Animation Layer Architecture

```mermaid
flowchart LR
    subgraph "Framer Motion Layer"
        FM1["useScroll + useTransform"]
        FM2["whileInView Reveals"]
        FM3["AnimatePresence"]
        FM4["Stagger Variants"]
    end

    FM1 --> P1["Hero Parallax Background"]
    FM1 --> P2["Text Opacity Fade"]
    FM2 --> S1["Section Fade-Ups"]
    FM2 --> S2["Card Scale Entries"]
    FM2 --> S3["Slide Reveals"]
    FM3 --> N1["Mobile Nav Toggle"]
    FM4 --> SK["Skill Card Stagger"]
    FM4 --> PR["Project Card Stagger"]
```

## Styling Architecture

```mermaid
flowchart TD
    TW["Tailwind CSS v3"] --> BASE["Base Layer"]
    TW --> COMP["Components Layer"]
    TW --> UTIL["Utilities"]

    BASE --> BODY["Body Defaults"]
    BASE --> SEL["Selection Colors"]

    COMP --> GC["glass-card"]
    COMP --> GP["glass-panel"]
    COMP --> TG["text-gradient"]
    COMP --> GB["glow-border"]
    COMP --> BP["btn-primary"]
    COMP --> BS["btn-secondary"]
    COMP --> SH["section-heading"]
    COMP --> SC["section-container"]

    style TW fill:#06B6D4,stroke:#22d3ee,color:#fff
    style COMP fill:#6366f1,stroke:#818cf8,color:#fff
```
