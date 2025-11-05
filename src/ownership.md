---
layout: base.njk
title: "The Student Ownership System (SOS)"
---

# The Student Ownership System (SOS)

> **Learning with Stakes.**  
> Rulebreakers English Studios turns every learning act into a real contribution—tracked, valued, and shared.  
> The SOS is how students move from “participants” to “co-owners” of what they create.

---

## 1. What the SOS Is

The **Student Ownership System** links learning outcomes to real-world stakes.  
Each student earns *Studio Points* for creative and operational work done inside a studio.  
Points translate into a share of that studio’s profits, royalties, or spin-out equity.

| Component | Function | Analogy |
|------------|-----------|----------|
| **Studio Points** | Quantify contribution and responsibility | “stock options” for creative effort |
| **Student Pool (20%)** | Portion of each studio’s net reserved for participants | cooperative profit-share |
| **Conversion Rule** | Points convert to revenue or equity upon spin-out | ESOP-like logic |
| **Ledger** | Transparent record of all allocations | open accounting |

---

## 2. Why It Matters

Traditional schooling asks students to simulate outcomes for grades.  
RBES asks them to build outcomes that *exist in the world.*  
When you co-own the result:

- Motivation becomes intrinsic.  
- Collaboration becomes accountable.  
- English becomes a working language—not a subject.

> In short: **Learning = Doing, Doing = Ownership.**

---

## 3. Behavioral Rationale

The SOS design draws on established research:

- **Self-Determination Theory** – Autonomy, competence, and relatedness drive intrinsic motivation.  
- **Prospect Theory** – Perceived stakes sharpen focus.  
- **The IKEA Effect** – We value what we help create.  
- **Narrative Intelligence** – Ownership makes students protagonists, not test subjects.

RBES makes these behavioral dynamics structural rather than incidental.

---

## 4. How the Numbers Work

### Formula
\[
R_i = N \times p \times \frac{s_i}{S}
\]

Where:  
- \( N \) = studio net profit  
- \( p \) = percentage allocated to student pool  
- \( s_i \) = your points  
- \( S \) = total points in pool  

### Try It Yourself

<div class="calc" style="border:2px solid #a33;padding:1rem;margin:.75rem 0;font-family:ui-monospace,Menlo,Consolas,monospace">
  <label>Studio Net Profit (THB)
    <input id="net" type="number" value="2000000" style="width:100%;padding:.25rem;margin:.25rem 0">
  </label>
  <label>Student Pool % of Studio Net
    <input id="poolPct" type="number" value="20" min="0" max="100" style="width:100%;padding:.25rem;margin:.25rem 0">
  </label>
  <label>Your Studio Points
    <input id="yourPts" type="number" value="120" style="width:100%;padding:.25rem;margin:.25rem 0">
  </label>
  <label>Total Student Points (this cycle)
    <input id="totalPts" type="number" value="6000" style="width:100%;padding:.25rem;margin:.25rem 0">
  </label>
  <hr style="border:none;border-top:1px solid #a33">
  <div id="result" style="font-weight:700">Your Payout: —</div>
  <small>Formula: (Net × Pool%) × (YourPts ÷ TotalPts)</small>
</div>

<script>
(function(){
  const el = id => document.getElementById(id);
  const fmt = n => new Intl.NumberFormat('th-TH',{maximumFractionDigits:0}).format(n);
  function calc(){
    const net = +el('net').value||0;
    const poolPct = (+el('poolPct').value||0)/100;
    const yourPts = +el('yourPts').value||0;
    const totalPts = +el('totalPts').value||1;
    const payout = (net*poolPct)*(yourPts/totalPts);
    el('result').textContent = 'Your Payout: ' + fmt(payout) + ' THB';
  }
  ['net','poolPct','yourPts','totalPts'].forEach(id=>el(id).addEventListener('input',calc));
  calc();
})();
</script>

---

## 5. Legal and Ethical Framework

- **Trust Structures:** Minor participants’ shares held until legal majority.  
- **Transparency:** Ledgers and conversion tables published yearly.  
- **Compliance:** Follows Thai cooperative and education laws.  
- **Equity Ceilings:** To prevent over-concentration of returns.

---

## 6. Read the Full Model

For an in-depth theoretical and mathematical defense of the system, see:

👉 **[Learning With Stakes: The Rulebreakers English Studios Ownership System (White Paper)](/papers/shared-ownership-calculus/)**

That document elaborates the educational psychology, economic logic, and narrative design underlying the SOS.

---

## 7. Ongoing Development

The SOS is a *living protocol*—tested, audited, and refined with every cohort.  
Feedback loops between students, facilitators, and investors continually shape its governance.  
By 2026, all RBES studios will report through a unified **Ownership Ledger**, forming the foundation of **Infinite Thailand’s creative economy layer.**

---

> *When education includes ownership, learning stops being rehearsal and becomes performance.*

