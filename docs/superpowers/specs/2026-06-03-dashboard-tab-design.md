# Design: Add Dashboard Tab to Admin Navbar

**Date:** 2026-06-03
**Status:** Approved
**Component:** Rsmp-Dashboard.vue

## Overview

Add a new "Dashboard" tab to the admin page left navbar that links to an external URL and opens in a new tab. The tab should be positioned before the existing "Submissions" tab.

## Requirements

- Add "Dashboard" tab to left navbar
- Position before "Submissions" tab
- Link to `https://mr.resourcetrackr.com`
- Open in new tab
- No active state (external link)
- Do not break existing features

## Implementation

### File: `src/components/Rsmp-Dashboard.vue`

**Location:** Lines 33-46 (navbar section)

**Add before "Submissions" tab:**

```vue
<li class="nav-item">
  <a
    href="https://mr.resourcetrackr.com"
    class="nav-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
    Dashboard
  </a>
</li>
```

### Key Details

1. **External Link:** Standard HTML `<a>` tag with `href` to external URL
2. **New Tab:** `target="_blank"` opens in new tab
3. **Security:** `rel="noopener noreferrer"` prevents security vulnerabilities
4. **Icon:** External link icon (SVG) visually indicates external navigation
5. **No Active State:** No `:class` binding since it's an external link
6. **Styling:** Uses existing `.nav-link` and `.nav-icon` CSS classes

## Security & Accessibility

### Security
- `rel="noopener noreferrer"` prevents the new page from accessing `window.opener`
- Protects against potential security vulnerabilities and tabnabbing attacks

### Accessibility
- Standard HTML anchor provides full keyboard navigation
- Screen readers announce as a link with "opens in new tab"
- External link icon provides visual cue
- Maintains existing hover and focus states

## Testing Checklist

- [ ] Dashboard tab appears before Submissions tab
- [ ] Clicking opens `https://mr.resourcetrackr.com` in new tab
- [ ] Existing tabs (Submissions, My Submissions, Create Record) still work
- [ ] Visual styling matches other nav items
- [ ] No active state shown on Dashboard tab
- [ ] Works on mobile responsive layout
- [ ] Keyboard navigation works (Tab to navigate, Enter to activate)

## No Breaking Changes

- No changes to existing navigation logic
- No changes to existing CSS
- No changes to existing components
- No changes to routing or state management
