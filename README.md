# Varun Behl — Software Engineering Portfolio & Executive Resume 🚀

> **Live Portfolio & Executive Resume** showcasing 10+ years of engineering leadership, high-throughput distributed systems, catalog microservices, event-driven architectures, and live full-stack web applications.

---

## 🌟 Featured Sections & Projects

### 1. 🚀 Flagship Consumer Web Applications & Aggregators
* **[BoroHop (borohop.org)](https://borohop.org/)** — Zero-tracking NYC event directory for Borough Hoppers with zero-API-key Meetup scraping (`__NEXT_DATA__` server cache parser), PWA offline subway support, Leaflet interactive map, Haversine "Near Me" distance sorting, and 1-click Google / Apple (.ics) calendar sync. ([GitHub](https://github.com/BehlV10/borohop))
* **[Boston Housing Aggregator](https://behlv10.github.io/boston-housing-aggregator/)** — Multi-source rental housing aggregator uniting Craigslist, Zillow, and Facebook Marketplace with automated Regex NLP Broker Fee classification ("NO BROKER FEE" vs "BROKER FEE"), interactive price pin maps, and 6-hour cron pipelines. ([GitHub](https://github.com/BehlV10/boston-housing-aggregator))
* **[Tight Pants Comedy](https://tightpantscomedy.com/)** — Direct-to-fan marketing and ticketing web app for NYC's premier independent stand-up comedy showcase at St. Marks Comedy Club in the East Village. Embedded Eventbrite checkout and performer rosters. ([GitHub](https://github.com/BehlV10/tight-pants-comedy))
* **[Wicked Boston Events](https://www.wickedbostonevents.com/)** — Nightlife and concert discovery web platform scraping 160+ venues across Greater Boston with dynamic filtering and calendar export. ([GitHub](https://github.com/BehlV10/boston_events))
* **[NYC Events Aggregator](https://behlv10.github.io/nyc_events/)** — 5-borough real-time event discovery calendar scraping 500+ NYC venues, dark Leaflet map, 2-hour epoch cutoff filter, and live secondary ticket price comparisons (StubHub & Gametime). ([GitHub](https://github.com/BehlV10/nyc_events))
* **[Dracula's Masquerade Companion](https://behlv10.github.io/DraculasMasqueradeCompanionApp/)** — Interactive tabletop game master deduction tracker orchestrating secret role assignments, accusation logs, turn timers, and whisper actions. ([GitHub](https://github.com/BehlV10/DraculasMasqueradeCompanionApp))

---

### 2. 🏛️ Enterprise Architecture & Distributed Systems
* **HubSpot Monolithic Catalog Decomposition & Multi-Entity Schemata**: Led engineering team to decompose legacy catalog monolith into Products, Listings, URLs, and Schemata microservices; engineered a unified schema system for Apps, AI Agents, and Workflow Templates.
* **HubSpot Asynchronous Listing Publishing Engine & Listing Editor**: High-throughput async publish/unpublish engine using queue-based workers, parallelized RPC execution, transactional rollback modes, and consumer-side timestamp reconciliation to guarantee eventual consistency.
* **HubSpot Cross-Portal Asset Migration & Sandbox Portability**: Automated replication of workflows, contacts, and marketing templates from sandbox environments to customer production portals (cutting onboarding overhead from hours to minutes).
* **Production LLM Listing Generation Integration**: Integrated LLM listing copy generation directly into marketplace publishing workflows with human-in-the-loop review guards and downstream validation RPCs.
* **Distributed Observability & High-Throughput Log Pipeline**: Kafka → HBase → Elasticsearch log ingestion pipeline with dynamic batching, multi-region AWS Lambda automation, and automated resource purging.
* **Pegasystems Dynamic Application Configuration Framework**: Core field types and dynamic settings engine in Java with REST endpoints, React setup wizard, branch-preference tooling.
* **Oracle Fleet Hardening & Encryption Automation**: C/Java end-to-end encryption for remote consoles and Python automation orchestrating zero-downtime rolling updates across hundreds of fleet servers.

---

### 3. 📄 Interactive Executive Resume & Print Engine
* Clean printable layout matching Varun's 1-page executive resume.
* Quick modal view with native 1-click **Print / Save as PDF** styling.
* Full work history breakdown, Georgia Tech M.S. (3.77 GPA) & RPI Dual B.S. (3.81 GPA, Tau Beta Pi), categorized technical skills matrix, and leadership/community activities.

---

### 4. 🍰 Client Web Showcases & Custom Tools
* **[Takahachi Bakery](https://behlv10.github.io/takahachi-bakery/)** (Tribeca NYC) — Interactive celebration cake pre-order builder with live serving & price calculator.
* **[Wo's Custom Tailoring](https://behlv10.github.io/wos-custom-tailoring/)** (Upper East Side Manhattan) — Luxury bespoke suiting atelier with quote estimator & VIP fitting scheduler.
* **[Japonaise Bakery & Cafe](https://behlv10.github.io/japonaise-bakery/)** (Brookline, MA) — Historic French-Japanese bakery showcase with cake ordering.
* **[Cirque du Soufflé](https://behlv10.github.io/cirque-du-souffle/)** (Somerville, MA) — Theatrical haute patisserie dessert booking system.
* **[Smart Price Comparison Engine](https://github.com/BehlV10/price_comparison_app)** — Real-time multi-vendor ticket & retail arbitrage scanner.

---

## ⚡ Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
# Server starts at http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🌐 Publishing to GitHub Pages & Getting Your Portfolio URL

You can publish this portfolio to your GitHub account (`BehlV10`) to get a public URL:

### Option 1: Publish as `portfolio` repository
```bash
git init
git add .
git commit -m "Initial commit: Varun Behl portfolio and executive resume"
gh repo create portfolio --public --source=. --remote=origin --push
```
Then under **Repository Settings -> Pages**, choose **GitHub Actions** as the build source.
Your portfolio will be live at:
👉 **`https://behlv10.github.io/portfolio/`**

### Option 2: Publish as your primary user GitHub Pages site
```bash
git init
git add .
git commit -m "Initial commit: Varun Behl portfolio and executive resume"
gh repo create BehlV10.github.io --public --source=. --remote=origin --push
```
Your portfolio will be live at:
👉 **`https://behlv10.github.io/`**
