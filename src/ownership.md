---
layout: base.njk
title: "The Novel Shared Ownership Structure"
---

# The Novel Shared Ownership Structure

> **Thesis:** When students build real things, they should **own a real piece** of the upside.  
> RBES turns learning activity into **Studio Points** that convert into a **transparent revenue share** (and, where appropriate, equity in spin-outs).

---

## How It Works (Plain Language)

1. **Each active studio** (e.g., Unicornworld, Mean Babies) has a simple cap table-like ledger.  
2. **RBES allocates Studio Points** every cycle for: contribution, responsibility taken, and shipped outcomes.  
3. **A fixed portion of a studio’s net** (e.g., 20%) is reserved for the **Student Pool**. Points in the pool → share of that 20%.  
4. If a studio **spins out** as a company, the pool maps to equity or royalties according to a published conversion table.

> Documentation: **Shared-Ownership Calculus (White Paper)** — coming soon at `/papers/shared-ownership-calculus/`.

---

## Behavioral Rationale

- **Skin-in-the-game** aligns effort with outcomes.  
- **Portfolio logic**: most projects return learning only; **some return cash**. Students see both.  
- **Civic literacy**: teens and adults learn cap tables, royalties, IP licensing — by doing.

---

## Diagram (Tuition → Points → Payout)

- Your **tuition** funds the studio environment.  
- Your **work** earns **points**.  
- The **studio’s net** allocates a portion to the **Student Pool**.  
- Your **% of the pool** = your **payout** (and possibly equity in a spin-out).

---

## Try the Ownership Calculator

Enter optimistic-but-plausible numbers to feel the upside when a studio **really takes off**.

<div class="calc" style="border:2px solid #a33;padding:1rem;margin:.75rem 0;font-family:ui-monospace,Menlo,Consolas,monospace">
  <label>Studio Net Profit this Year (THB)
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
  const fmt = n => new Intl.NumberFormat('th-TH', {maximumFractionDigits: 0}).format(n);
  function calc(){
    const net = +el('net').value || 0;
    const poolPct = (+el('poolPct').value || 0)/100;
    const yourPts = +el('yourPts').value || 0;
    const totalPts = +el('totalPts').value || 1;
    const payout = (net * poolPct) * (yourPts / totalPts);
    el('result').textContent = 'Your Payout: ' + fmt(payout) + ' THB';
  }
  ['net','poolPct','yourPts','totalPts'].forEach(id => el(id).addEventListener('input', calc));
  calc();
})();
</script>

> Curious about multi-year scenarios, tokenization, or exit events? Read the **white paper draft** (soon): `/papers/shared-ownership-calculus/`.

---

### Notes & Safeguards

- **No pay-to-win:** Points are earned by contribution and responsibility, not by ability to pay.  
- **Transparency:** ledgers are auditable; conversions are published.  
- **Compliance:** spin-outs use standard Thai company equity structures; minors represented via guardians/trusts where required.

