# Dashboard Tab Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Dashboard" tab to the admin navbar that links to an external URL and opens in a new tab

**Architecture:** Add a standard HTML anchor link to the existing navbar structure in Rsmp-Dashboard.vue. The link uses target="_blank" and rel="noopener noreferrer" for secure external navigation.

**Tech Stack:** Vue 3, single-file components, inline CSS

---

## Task 1: Add Dashboard Tab to Navbar

**Files:**
- Modify: `src/components/Rsmp-Dashboard.vue:33-46`

- [ ] **Step 1: Read the current navbar structure**

Run: `cat src/components/Rsmp-Dashboard.vue | grep -A 15 "nav-menu"`
Purpose: Verify the current structure and identify where to insert the new tab

- [ ] **Step 2: Add the Dashboard tab before Submissions tab**

Insert the following code at line 33 (before the first `<li class="nav-item">`):

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

- [ ] **Step 3: Verify the changes are syntactically correct**

Run: `npm run build` (if build fails, check for syntax errors)
Expected: Build completes successfully

- [ ] **Step 4: Manual test - Check navbar order**

Run: `npm run dev` and open the admin page
Expected: Dashboard tab appears as the first item in the navbar

- [ ] **Step 5: Manual test - Test external link opens in new tab**

Click on the Dashboard tab
Expected: New browser tab opens to `https://mr.resourcetrackr.com`

- [ ] **Step 6: Manual test - Verify existing tabs still work**

Click on "Submissions", "My Submissions", and "Create Record" tabs
Expected: Each tab switches to the correct view

- [ ] **Step 7: Manual test - Verify no active state on Dashboard tab**

Click on Dashboard tab, then observe the navbar
Expected: Dashboard tab does NOT show as active (no blue highlight)

- [ ] **Step 8: Manual test - Test keyboard navigation**

Use Tab key to navigate to Dashboard tab, press Enter
Expected: New tab opens to external URL

- [ ] **Step 9: Manual test - Test mobile responsive layout**

Resize browser to mobile width (<768px) and open navbar
Expected: Dashboard tab appears correctly in mobile menu

- [ ] **Step 10: Commit changes**

```bash
git add src/components/Rsmp-Dashboard.vue
git commit -m "feat: add Dashboard tab to admin navbar

- Add external link to mr.resourcetrackr.com
- Opens in new tab with security attributes
- Positioned before Submissions tab
- Uses external link icon for visual clarity

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

---

## Testing Summary

Since this Vue component lacks automated tests, all testing is manual verification:

1. **Visual regression:** Dashboard tab appears in correct position with proper styling
2. **Functional test:** Clicking opens external URL in new tab
3. **Integration test:** Existing navigation tabs continue to work
4. **State test:** Dashboard tab never shows as active (external link)
5. **Accessibility test:** Keyboard navigation works correctly
6. **Responsive test:** Mobile layout displays correctly

---

## Verification Checklist

After implementation, verify:

- [ ] Dashboard tab is first item in navbar
- [ ] External link opens `https://mr.resourcetrackr.com` in new tab
- [ ] All existing tabs (Submissions, My Submissions, Create Record) function normally
- [ ] Visual styling matches other nav items
- [ ] Dashboard tab never shows active state
- [ ] Works on mobile responsive layout
- [ ] Keyboard navigation (Tab + Enter) works
- [ ] No console errors in browser DevTools
