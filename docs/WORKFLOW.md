# Development Workflow

This document outlines the development lifecycle and workflow for the Personal Portfolio Website.

## Build & Deploy Pipeline

```mermaid
flowchart LR
    DEV["Local Dev"] -->|git push| GH["GitHub Repository"]
    GH -->|webhook| VERCEL["Vercel Platform"]
    VERCEL -->|auto build| BUILD["vite build"]
    BUILD -->|deploy| LIVE["Live URL"]

    style DEV fill:#1e1e2e,stroke:#6366f1,color:#e2e8f0
    style GH fill:#1e1e2e,stroke:#a855f7,color:#e2e8f0
    style VERCEL fill:#1e1e2e,stroke:#ec4899,color:#e2e8f0
    style BUILD fill:#6366f1,stroke:#818cf8,color:#fff
    style LIVE fill:#10b981,stroke:#34d399,color:#fff
```

## Development Cycle

```mermaid
flowchart TD
    START["Plan Feature"] --> CODE["Write Code"]
    CODE --> PREVIEW["npm run dev"]
    PREVIEW --> TEST["Test Responsiveness"]
    TEST -->|Pass| COMMIT["git commit"]
    TEST -->|Fail| CODE
    COMMIT --> PUSH["git push"]
    PUSH --> AUTO["Auto Deploy"]
    AUTO --> VERIFY["Verify Live Site"]
    VERIFY -->|Issues| CODE
    VERIFY -->|Clean| DONE["Feature Complete"]

    style START fill:#6366f1,stroke:#818cf8,color:#fff
    style DONE fill:#10b981,stroke:#34d399,color:#fff
```

## Quality Checklist

Each feature goes through this verification process before merging:

1. Visual check on mobile (375px), tablet (768px), and desktop (1280px)
2. No horizontal overflow or broken layouts
3. Animations trigger correctly on scroll
4. All links are functional and open correctly
5. Lighthouse audit maintains target scores
6. Code is clean with no unused imports or variables
