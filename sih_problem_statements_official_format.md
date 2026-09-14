# Hackathon Problem Statements — Official SIH Portal Format
### PS01–PS40, all reformatted to match the Background / Description / Expected Solution schema

---

## PS01 — Industrial Safety Risk Radar
**Organization:** Ministry of Heavy Industries · **Department:** Industrial Safety Division
**Category:** Software · **Theme:** Smart Automation / Industry 4.0

**Background:**
Industrial plants run several hazardous activities at once — hot work, confined-space entry, maintenance — and no single sensor reading signals danger on its own; only combinations of signals do. Manual safety rounds can't continuously watch every zone, so compound risks often surface only after an incident.

**Description:**
a. Ingest simulated sensor, work-permit, and equipment-status feeds for each plant zone.
b. Combine 2–3 signals per zone (gas level, active permit type, equipment fault) using a rule-based compound-risk engine.
c. Score each zone's risk severity and generate a plain-language explanation of the contributing factors.
d. Recommend an immediate action (evacuate, restrict entry, inspect) for flagged zones.

**Expected Solution:**
- A rule-based compound-risk scoring engine spanning multiple simulated signal types.
- A live, colour-coded zone dashboard showing severity, contributing factors, and recommended action.
- A mock sensor/permit/equipment dataset with 3 demo risk scenarios.
- An architecture diagram and documentation of the scoring logic; no live SCADA integration required.

---

## PS02 — Energy Supply Disruption Simulator
**Organization:** Ministry of Power · **Department:** Central Electricity Authority
**Category:** Software · **Theme:** Clean & Green Technology

**Background:**
Disabling a supplier, port, or transmission route ripples through an energy supply network, but decision-makers rarely have a fast way to see the blast radius or viable alternatives before committing to a response.

**Description:**
a. Model a small (5–15 node) energy supply network with capacity and cost on each edge.
b. Let a user disable any node and propagate the resulting shortage through the network.
c. Identify affected destinations, shortage size, and rank alternative routes/suppliers.
d. Display extra cost and delay incurred by each alternative.

**Expected Solution:**
- An interactive graph visualization of the supply network with a "disable node" action.
- A propagation and ranking engine that surfaces affected nodes and alternatives instantly.
- A sample network dataset and 2 worked disruption-case demos.
- All cost and routing assumptions shown transparently on screen.

---

## PS03 — EV Fleet Readiness Score
**Organization:** Ministry of Heavy Industries · **Department:** FAME Scheme Cell
**Category:** Software · **Theme:** Clean & Green Technology

**Background:**
Not every fleet vehicle is a good candidate for EV transition — usage pattern, not intent, should decide that. Fleet operators currently lack a simple, transparent way to rank vehicles for conversion.

**Description:**
a. Collect per-vehicle usage data: daily distance, load, operating hours, dwell time, age, fuel use.
b. Compute a weighted EV-readiness score from these factors.
c. Classify each vehicle as "convert now / later / after-infra."
d. Estimate charging requirement and cost/benefit of conversion.

**Expected Solution:**
- A transparent, documented weighted-scoring formula (no ML training required).
- A fleet dashboard showing score, recommendation, and charging requirement per vehicle.
- A sample fleet dataset and a written scoring methodology.

---

## PS04 — Construction Project Delay Predictor
**Organization:** Ministry of Housing & Urban Affairs · **Department:** Urban Infrastructure Division
**Category:** Software · **Theme:** Smart Automation

**Background:**
A single late task can cascade through every dependent task on a project, but teams often can't see which activities are actually at risk, or why, until the delay has already happened.

**Description:**
a. Take task progress, duration, and dependency data for a project.
b. Run a topological/dependency-graph pass to identify at-risk tasks.
c. Flag likely delays with a reason (material shortage, workforce gap, upstream slippage).
d. Suggest a mitigation action and estimate downstream impact.

**Expected Solution:**
- A dependency-graph risk-propagation engine (transparent rules/analytics, no forecasting ML needed).
- A Gantt-style dashboard showing delay risk, expected delay, and affected downstream tasks.
- A sample project dataset and documented risk logic.

---

## PS05 — Hyperlocal Pollution Hotspot Detector
**Organization:** Ministry of Environment, Forest and Climate Change · **Department:** Central Pollution Control Board (CPCB)
**Category:** Software · **Theme:** Clean & Green Technology

**Background:**
Raw AQI readings tell administrators that pollution is high, but not where to intervene or why a location is bad — that requires combining readings with context like traffic and land use.

**Description:**
a. Combine simulated AQI/pollutant readings with traffic density, land-use, and weather data.
b. Cluster readings geospatially to surface hotspots.
c. Estimate a likely source category per hotspot (traffic, industrial, construction) as a heuristic, not a certainty.
d. Recommend an intervention per hotspot.

**Expected Solution:**
- A map-based dashboard (Leaflet/Mapbox) plotting hotspots with risk level and likely source.
- A hotspot-clustering and source-heuristic engine with a sample dataset.
- Clear on-screen labelling that source attribution is an estimate, not proven causation.

---

## PS06 — Digital Fraud Message Shield
**Organization:** Ministry of Electronics & IT (MeitY) · **Department:** Indian Cyber Crime Coordination Centre (I4C)
**Category:** Software · **Theme:** Blockchain & Cybersecurity

**Background:**
Citizens receiving a scam SMS, email, or chat message have no quick way to check if it's fraudulent, and existing spam filters are often generic and English-first.

**Description:**
a. Accept a pasted message (SMS/email/chat text).
b. Detect signal patterns: urgency language, payment requests, suspicious links, impersonation cues.
c. Score the message's risk level and classify the scam type.
d. Highlight the specific red flags found and suggest a safe next step.

**Expected Solution:**
- A rule/keyword + regex-based detection engine (no model training required).
- A simple paste-and-check UI returning risk level, scam type, evidence, and recommended action.
- A small labelled test set and a 5-message live demo; no real financial data used.

---

## PS07 — Behaviour-Based Cyber Threat Detector
**Organization:** Ministry of Electronics & IT (MeitY) · **Department:** CERT-In
**Category:** Software · **Theme:** Blockchain & Cybersecurity

**Background:**
Individual login or file-access events can look completely normal, but together, across a user or device, they can indicate account compromise — something static rule alerts often miss.

**Description:**
a. Ingest simulated authentication, file-access, and network-activity logs.
b. Establish a "normal" baseline per user/device (typical hours, locations, volumes).
c. Score deviations from the baseline as anomalies with a severity level.
d. Show supporting events behind each alert.

**Expected Solution:**
- A statistical or rule-based baseline-and-deviation detection engine (synthetic logs only).
- A dashboard displaying anomaly score, alert severity, and affected user/device.
- A normal-vs-anomalous demo scenario with documented detection method.

---

## PS08 — Industrial Knowledge Copilot
**Organization:** Ministry of Electronics & IT (MeitY)
**Category:** Software · **Theme:** Smart Automation / GenAI

**Background:**
Manuals, safety documents, and inspection reports sit in scattered silos, and engineers waste significant time hunting through them for answers that should take seconds to find.

**Description:**
a. Ingest 5–10 uploaded technical documents.
b. Build a retrieval-augmented generation (RAG) pipeline over the document set.
c. Answer user questions with a grounded, cited source passage.
d. Return an explicit "not found" response when the answer isn't in the documents.

**Expected Solution:**
- A working RAG pipeline (vector store + LLM API) with accurate source citation.
- A chat-style interface for querying the document set.
- A known-answer demo proving the system never invents unsupported answers.

---

## PS09 — Smart Queue & Wait-Time Predictor
**Organization:** Ministry of Housing & Urban Affairs · **Department:** Department of Administrative Reforms & Public Grievances
**Category:** Software · **Theme:** Smart Automation

**Background:**
People waiting at service counters have no idea how long they'll wait, and counters often get loaded unevenly because there's no live load-balancing.

**Description:**
a. Register incoming people/tokens with priority level if applicable.
b. Estimate wait time from average service time × people ahead per counter.
c. Recommend the least-congested counter for each new arrival.
d. Show live queue status for staff and citizens.

**Expected Solution:**
- A token/registration system with real-time wait estimates and counter recommendations.
- User-facing and admin dashboard views.
- A simulated-arrivals dataset covering one service environment.

---

## PS10 — AI Traffic Signal Optimizer
**Organization:** Ministry of Road Transport & Highways
**Category:** Software · **Theme:** Transportation & Logistics

**Background:**
Fixed signal timings waste green time on light approaches while heavier approaches queue up, worsening congestion at intersections that could otherwise flow more evenly.

**Description:**
a. Simulate one intersection with vehicle arrival rates by approach.
b. Dynamically allocate green-time using a proportional, bounded adaptive heuristic.
c. Compare average wait and queue length against a fixed-timing baseline.
d. Visualize the improvement over time.

**Expected Solution:**
- A working single-intersection simulator with adaptive signal timing.
- A side-by-side performance comparison against the fixed-timing baseline.
- Documented heuristic logic; no live CCTV integration required.

---

## PS11 — Farmer Crop Disease Assistant
**Organization:** Ministry of Agriculture & Farmers Welfare
**Category:** Software · **Theme:** Agriculture, FoodTech & Rural Development

**Background:**
Early identification of crop disease limits damage and yield loss, but farmers rarely have fast access to expert diagnosis — a quick first-level screening tool would help them act sooner.

**Description:**
a. Accept an uploaded leaf image.
b. Run inference using a pretrained/transfer-learned image classifier (3–5 disease classes).
c. Return the likely disease, confidence score, and associated symptoms.
d. Suggest a basic first-line advisory action.

**Expected Solution:**
- A working inference pipeline using a pretrained model or small labelled dataset.
- A results UI presenting disease, confidence, symptoms, and next step.
- Clear framing as screening assistance, never a definitive diagnosis.

---

## PS12 — Smart Fertilizer Recommendation System
**Organization:** Ministry of Agriculture & Farmers Welfare
**Category:** Software · **Theme:** Agriculture, FoodTech & Rural Development

**Background:**
Incorrect fertilizer dosing wastes farmer money and can degrade soil over time, largely because recommendations aren't tailored to actual soil and crop-stage data.

**Description:**
a. Take crop type, soil NPK values, pH, growth stage, and prior application history as input.
b. Apply an agronomic rule set encoding NPK targets by crop and growth stage.
c. Output a nutrient-status summary and a fertilizer recommendation with a quantity range.
d. Show the reasoning behind each recommendation.

**Expected Solution:**
- A transparent rule-based recommendation engine (no ML training required).
- A result screen showing nutrient status, recommendation, and reasoning.
- Documented rule set and sample test cases; ranges/guidance only, no unsafe prescriptive claims.

---

## PS13 — Government Document PII Detector
**Organization:** Ministry of Electronics & IT (MeitY)
**Category:** Software · **Theme:** Blockchain & Cybersecurity

**Background:**
Institutional documents frequently leak personally identifiable information (ID numbers, phone, email, financial details) because manual review can't scale to document volume.

**Description:**
a. Accept an uploaded text/PDF document with synthetic PII.
b. Detect PII patterns using regex plus a lightweight NER library.
c. Highlight detected PII with type and location.
d. Generate an optionally redacted copy of the document.

**Expected Solution:**
- A file-upload and PDF-parsing pipeline with tuned detection patterns.
- A redaction workflow producing a clean, redacted output document.
- Sample documents with synthetic PII only; no claim of legal compliance from pattern-matching alone.

---

## PS14 — Fake Social Media Account Risk Analyzer
**Organization:** Ministry of Electronics & IT (MeitY) · **Department:** I4C
**Category:** Software · **Theme:** Blockchain & Cybersecurity

**Background:**
Fake accounts enable impersonation, spam, and scams at scale, and platform reviewers need a fast, explainable way to prioritize which accounts to investigate.

**Description:**
a. Import synthetic account profile data: age, follower/following ratio, posting frequency, profile completeness, engagement.
b. Compute a weighted suspicious-risk score from these features.
c. Return the risk category and the top contributing reason codes.
d. Recommend a review action.

**Expected Solution:**
- A weighted feature-scoring engine with explainable reason codes.
- A reviewer dashboard for triaging flagged accounts.
- Framing as a review-priority indicator only, never proof of a fake identity.

---

## PS15 — Smart Drug Inventory Monitor
**Organization:** Ministry of Health & Family Welfare
**Category:** Software · **Theme:** MedTech / BioTech / HealthTech

**Background:**
Health facilities must balance the risk of stock-outs against the waste from near-expiry medicine, but most inventory tracking today is reactive rather than predictive.

**Description:**
a. Track medicine name, current stock, consumption rate, expiry date, and reorder threshold.
b. Estimate days-of-stock remaining per item.
c. Classify each item's stock-out risk and expiry risk separately.
d. Recommend a reorder or disposal action.

**Expected Solution:**
- A dashboard with consumption charts and dual-risk classification.
- Documented risk logic and a sample inventory dataset with scenario demos.
- Scope limited to inventory operations, no clinical/prescribing logic.

---

## PS16 — Unauthorized Construction Detector
**Organization:** Ministry of Housing & Urban Affairs
**Category:** Software · **Theme:** Smart Automation / Urban Governance

**Background:**
Urban authorities struggle to prioritize inspections for unauthorized construction because approved building records and on-ground observations are rarely compared systematically.

**Description:**
a. Compare approved floors/area against observed floors/area per property.
b. Score the size of the deviation and flag likely violations.
c. Assign an inspection priority based on deviation severity.
d. Present flagged properties on a map/list for human review.

**Expected Solution:**
- A comparison and violation-scoring engine with a sample property dataset.
- A dashboard/map view for prioritized inspection.
- Flags routed for human review only, never used as a legal determination.

---

## PS17 — Emergency Resource Allocation System
**Organization:** Ministry of Home Affairs · **Department:** Disaster Management Division / NDMA
**Category:** Software · **Theme:** Disaster Management

**Background:**
During emergencies, a limited number of ambulances and rescue teams must be matched against multiple competing incidents, and manual dispatch decisions can't always optimize for severity and distance simultaneously.

**Description:**
a. Ingest incident location, severity, and required resource type.
b. Track resource location, type, and availability.
c. Compute a priority score combining severity, distance, and availability.
d. Assign the best available resource and estimate response time, queuing lower-priority incidents.

**Expected Solution:**
- A working priority-based dispatch algorithm and assignment engine.
- A live dashboard for incidents and resource status.
- A synthetic dataset and multi-incident demo covering 1–2 resource types.

---

## PS18 — Water Body Health Monitor
**Organization:** Ministry of Jal Shakti · **Department:** Central Pollution Control Board
**Category:** Software · **Theme:** Clean & Green Technology

**Background:**
Raw pH, turbidity, and dissolved-oxygen readings are hard for non-experts to interpret quickly, delaying action on deteriorating water bodies.

**Description:**
a. Ingest time-series pH, turbidity, dissolved-oxygen, and temperature readings.
b. Convert readings into a single transparent health score using documented thresholds.
c. Flag abnormal readings and show trend charts over time.
d. Recommend a follow-up action when thresholds are crossed.

**Expected Solution:**
- A scoring engine with documented, on-screen thresholds.
- A trend dashboard with an alert system for abnormal readings.
- Framed as a monitoring indicator, not a certified water-quality assessment.

---

## PS19 — Campus Lost & Found Intelligence System
**Organization:** Ministry of Education
**Category:** Software · **Theme:** Smart Education / Miscellaneous

**Background:**
Manual notices and WhatsApp groups make matching lost and found items on campus slow and unreliable, especially at scale.

**Description:**
a. Register lost and found item reports with category, location, date/time, and optional image.
b. Match reports using attribute overlap (and optional image similarity).
c. Return a ranked list of potential matches with a match score.
d. Route matches to human verification before confirming a return.

**Expected Solution:**
- A matching algorithm with a synthetic item dataset.
- User and admin views for registration and match review.
- Image matching treated as optional; human verification required before confirming any match.

---

## PS20 — AI-Powered Campus Resource Optimizer
**Organization:** Ministry of Education
**Category:** Software · **Theme:** Smart Education

**Background:**
Classrooms and labs are often mismatched to class needs — wrong capacity, missing equipment — wasting both space and energy across a campus.

**Description:**
a. Take class size, room capacity/equipment, and time-slot requirements as input.
b. Match classes to suitable rooms using constraint-based logic.
c. Detect and flag scheduling conflicts.
d. Surface underused-resource opportunities and utilization statistics.

**Expected Solution:**
- A constraint-matching and conflict-detection engine.
- A before/after utilization dashboard for one campus/building.
- Sample timetable and room dataset with a working demo.

---

## PS21 — Microloan Eligibility & Risk Copilot
**Organization:** Ministry of Finance · **Department:** Department of Financial Services
**Category:** Software · **Theme:** Fintech

**Background:**
First-time borrowers such as gig workers and small vendors often lack formal credit history, so lenders need alternate, explainable signals to assess them fairly.

**Description:**
a. Collect alternate data: monthly cash-flow pattern, repayment history on smaller amounts, business tenure.
b. Apply a transparent scoring rubric — explicitly not a black-box model.
c. Produce an eligibility band and suggested loan cap.
d. Explain the top factors behind the decision, including rejection reasons if applicable.

**Expected Solution:**
- A documented, explainable scoring rubric with a synthetic applicant dataset.
- A dashboard presenting eligibility band, loan cap, and top factors.
- Framed strictly as decision support for a human loan officer, not automated approval.

---

## PS22 — Adaptive Learning Path Generator
**Organization:** Ministry of Education
**Category:** Software · **Theme:** Smart Education

**Background:**
Fixed-pace courses leave slower students behind and under-challenge faster ones, because content sequencing rarely adapts to individual mastery.

**Description:**
a. Track quiz responses and time taken per topic against a fixed topic taxonomy (10–20 nodes).
b. Apply a mastery-tracking rule (e.g., topic unlocks after N correct at a difficulty tier).
c. Recommend the next topic and difficulty level.
d. Suggest a short remedial resource list for weak areas.

**Expected Solution:**
- A mastery model with documented sequencing logic.
- A student dashboard showing mastery level and next steps.
- A sample question bank covering a small, fixed topic tree.

---

## PS23 — Solar Rooftop Potential & ROI Estimator
**Organization:** Ministry of New and Renewable Energy
**Category:** Software · **Theme:** Renewable / Sustainable Energy

**Background:**
Homeowners rarely know whether their roof is worth solarizing or what payback period to expect, which slows rooftop solar adoption even where it would be financially sound.

**Description:**
a. Take roof area, orientation, shading level, location, tariff, and panel cost/kW as input.
b. Estimate annual generation using irradiance × area × efficiency × orientation factor.
c. Calculate system cost, payback period, and CO2 offset.
d. Present results with the methodology visible.

**Expected Solution:**
- A calculation engine using public or reasonable simulated irradiance data.
- A dashboard presenting generation, cost, payback period, and CO2 offset.
- Clear labelling that results are estimates, not a certified solar audit.

---

## PS24 — Last-Mile Delivery Route Optimizer
**Organization:** Ministry of Commerce & Industry · **Department:** DPIIT – Logistics Division
**Category:** Software · **Theme:** Transportation & Logistics

**Background:**
Delivery riders often follow inefficient, manually-ordered routes across a day's drop points, adding avoidable time and fuel cost per delivery run.

**Description:**
a. Take 15–30 delivery points (lat/long), optional time windows, and vehicle capacity.
b. Apply a nearest-neighbor + 2-opt heuristic to generate an efficient visiting order.
c. Estimate total time and distance for the optimized route.
d. Compare against the unoptimized (manual-order) baseline.

**Expected Solution:**
- A working routing engine with map-based visualization.
- A comparison view showing time/distance saved versus baseline.
- A sample delivery dataset and documented routing methodology.

---

## PS25 — Heritage Site Multilingual Guide & Preservation Alert
**Organization:** Ministry of Tourism · **Department:** Archaeological Survey of India (ASI)
**Category:** Software · **Theme:** Travel & Tourism / Heritage & Culture

**Background:**
Regional heritage sites often lack accessible multilingual visitor information, and minor structural or vandalism issues can go unreported for long periods due to the absence of an easy reporting channel.

**Description:**
a. Provide visitor-facing site information in 2–3 languages.
b. Allow visitors/officials to submit a preservation issue report (text + optional photo).
c. Categorize and prioritize submitted issues automatically.
d. Present a categorized issue log for site authorities.

**Expected Solution:**
- A multilingual guide (translation API or pre-translated content) for 1–2 pilot sites.
- An issue-reporting flow with automatic triage logic.
- An admin view for authorities to review flagged issues.

---

## PS26 — Assistive Navigation Companion for Visually Impaired
**Organization:** Ministry of Social Justice & Empowerment
**Category:** Hardware+Software · **Theme:** MedTech / Accessibility

**Background:**
Visually impaired users need real-time obstacle and landmark cues to move safely through unfamiliar indoor spaces, but affordable assistive tools for this remain limited.

**Description:**
a. Capture camera frames or a short walkthrough video/image sequence as a stand-in for live video.
b. Run a pretrained object-detection model to identify obstacles, doorways, and stairs.
c. Generate simple, prioritized spoken guidance based on detected hazards.
d. Demonstrate the guidance flow in a controlled walkthrough.

**Expected Solution:**
- A working camera-capture + text-to-speech guidance pipeline.
- Documented hazard-priority and guidance-generation rules.
- A narrated demo in a controlled space, clearly labelled as a prototype aid, not a certified mobility device.

---

## PS27 — Blockchain-Based Academic Credential Verifier
**Organization:** Ministry of Education · **Department:** MeitY (technical partner)
**Category:** Software · **Theme:** Blockchain & Cybersecurity

**Background:**
Fake degree and certificate claims are difficult for employers to verify quickly, and most institutions still rely on slow, manual verification processes.

**Description:**
a. Issue a tamper-evident record for a credential using a local hash-chained ledger.
b. Allow a third party to verify a credential instantly by ID or QR code.
c. Return a clear verification result: valid, tampered, or not found.
d. Log all issuance and verification events.

**Expected Solution:**
- A working local/simulated ledger with hash-chaining and verification logic.
- Separate issuer and verifier interfaces.
- A sample credential dataset; no real institutional data used.

---

## PS28 — Warehouse Robotics Task Scheduler Simulator
**Organization:** Ministry of Heavy Industries · **Department:** Department of Science & Technology
**Category:** Hardware+Software · **Theme:** Robotics and Drones

**Background:**
Warehouses running multiple pick-robots need tasks assigned efficiently to avoid idle robots and path conflicts, but manual or naive assignment wastes both time and floor space.

**Description:**
a. Simulate a small warehouse grid (e.g., 10x10) with 3–5 robots and incoming pick tasks.
b. Assign tasks using a nearest-idle-robot heuristic with simple path-conflict avoidance.
c. Track and minimize total completion time.
d. Compare conflict counts before and after optimization.

**Expected Solution:**
- A grid-based simulation with visualization of robot movement and task assignment.
- A documented scheduling heuristic and completion-time metric.
- Sample grid/task dataset; no physical robot hardware required.

---

## PS29 — Space Debris Collision Risk Estimator
**Organization:** Department of Space · **Department:** ISRO
**Category:** Software · **Theme:** Space Technology

**Background:**
Satellite operators need a fast, approximate way to flag close approaches between a satellite and known debris objects, without requiring full perturbation-modeling infrastructure.

**Description:**
a. Take simplified orbital elements (altitude, inclination, period) for a satellite and a debris set.
b. Propagate simplified circular/Keplerian orbits over a defined time window.
c. Estimate closest-approach distance and time per satellite-debris pair.
d. Rank and flag high-risk pairs.

**Expected Solution:**
- A working orbit-propagation and closest-approach engine using public formulas/libraries.
- A ranked risk dashboard with a sample orbital (public TLE-style or synthetic) dataset.
- All outputs clearly labelled as approximate; full perturbation modeling not expected.

---

## PS30 — Campus Wellbeing Trend & Referral Dashboard
**Organization:** Ministry of Education · **Department:** Department of Higher Education
**Category:** Software · **Theme:** MedTech / HealthTech

**Background:**
Campus counseling teams often only learn about a student's stress load once it becomes a crisis. Anonymized, aggregate self-report signals could help them staff and reach out earlier, without compromising student privacy or replacing professional judgment.

**Description:**
a. Collect anonymous, opt-in periodic mood/workload self-reports.
b. Aggregate responses into trend charts (e.g., "stress spike around mid-sem week 7").
c. Apply a conservative, documented threshold rule to flag individual patterns for human counselor review — using pseudonymous IDs only.
d. Never generate a diagnostic label or self-harm-related content.

**Expected Solution:**
- An anonymous check-in tool with an aggregate trend dashboard.
- A documented, conservative flagging rule that always routes to a human counselor.
- Synthetic demo data only; system must never attempt diagnosis or display self-harm content.

---

## PS31 — AI-Based Crowd Density & Stampede Risk Predictor for Public Gatherings
**Organization:** Ministry of Home Affairs · **Department:** Disaster Management Division
**Category:** Software · **Theme:** Disaster Management

**Background:**
Large public gatherings periodically see stampede-like crushes when crowd density crosses unsafe thresholds in bottleneck zones, and manual crowd control cannot react fast enough to prevent injury.

**Description:**
a. Estimate crowd density from simulated video footage or sensor feeds.
b. Identify bottleneck zones where density is approaching unsafe levels.
c. Issue early alerts to authorities with a specific diversion recommendation.
d. Track density trends across the event in real time.

**Expected Solution:**
- A density-estimation and bottleneck-detection pipeline using simulated feeds.
- A live alerting dashboard with diversion recommendations.
- A demo scenario showing detection and alert flow end to end.

---

## PS32 — Smart Irrigation Scheduling from Soil Moisture & Weather Forecasts
**Organization:** Ministry of Agriculture & Farmers Welfare
**Category:** Software · **Theme:** Agriculture, FoodTech & Rural Development

**Background:**
Farmers often over- or under-irrigate because scheduling is based on habit rather than actual soil moisture and forecast conditions, wasting water and reducing yield.

**Description:**
a. Combine simulated soil-moisture data with a weather forecast feed per field.
b. Compute a per-field irrigation recommendation (timing and quantity).
c. Show the reasoning behind each recommendation.
d. Update the schedule as new forecast data arrives.

**Expected Solution:**
- A recommendation engine combining soil-moisture and weather data.
- A field-level dashboard with an explainable irrigation plan.
- A sample dataset and demo across multiple simulated fields.

---

## PS33 — Digital Twin for Municipal Solid Waste Collection Routing
**Organization:** Ministry of Housing & Urban Affairs · **Department:** Smart Cities Mission
**Category:** Software · **Theme:** Smart Cities

**Background:**
Waste-collection trucks typically run fixed routes regardless of actual bin fill-levels, wasting fuel on empty bins while overflowing bins go unattended for days.

**Description:**
a. Simulate bin fill-levels across a municipal ward over time.
b. Generate an optimized collection route based on current fill-levels.
c. Compare optimized route distance/time against a fixed-route baseline.
d. Visualize both routes on a ward map.

**Expected Solution:**
- A fill-level simulator and route-optimization engine.
- A side-by-side comparison dashboard (optimized vs. fixed route).
- A sample ward dataset and working demo.

---

## PS34 — AI-Assisted Vernacular Grievance Redressal Chatbot
**Organization:** Ministry of Electronics & IT (MeitY)
**Category:** Software · **Theme:** Smart Automation / Governance

**Background:**
Regional-language grievances often receive slow, generic handling on portals designed around English-first, keyword-based search, delaying resolution for citizens who don't file in English.

**Description:**
a. Accept a grievance submitted in a regional language.
b. Classify the grievance into the correct department/category.
c. Auto-draft a structured ticket from the free-text complaint.
d. Confirm the classification and ticket details back to the citizen.

**Expected Solution:**
- A classification pipeline supporting at least one regional language.
- An auto-ticket-drafting workflow with a citizen-facing confirmation step.
- A demo covering multiple grievance categories.

---

## PS35 — Predictive Maintenance for Railway Track Faults via Acoustic Signatures
**Organization:** Ministry of Railways
**Category:** Hardware+Software · **Theme:** Transportation & Logistics

**Background:**
Rail faults are usually caught only during scheduled manual inspection, leaving a window where a developing fault can worsen undetected between inspections.

**Description:**
a. Ingest simulated acoustic/vibration data along a track segment.
b. Identify likely fault locations from patterns in the signal.
c. Estimate fault severity to prioritize inspection order.
d. Present a ranked inspection list to maintenance teams.

**Expected Solution:**
- A signal-analysis pipeline flagging fault location and severity from simulated data.
- A prioritized-inspection dashboard for maintenance teams.
- A sample acoustic dataset and demo.

---

## PS36 — Assistive Sign-Language-to-Speech Translator for Public Service Counters
**Organization:** Ministry of Social Justice & Empowerment
**Category:** Software · **Theme:** MedTech / Accessibility

**Background:**
Hearing- and speech-impaired citizens face long delays at public service counters where staff cannot communicate in sign language, creating an avoidable accessibility barrier.

**Description:**
a. Translate a small sign-language vocabulary captured via webcam into speech/text.
b. Translate typed/spoken text back into sign captions for the reverse direction.
c. Support the core vocabulary needed for common counter interactions.
d. Demonstrate both translation directions live.

**Expected Solution:**
- A webcam-based sign recognition pipeline for a defined vocabulary.
- A text-to-sign-caption module for the reverse direction.
- A live two-way translation demo at a simulated counter.

---

## PS37 — AI-Based River/Reservoir Flood Forecasting Dashboard
**Organization:** Ministry of Jal Shakti · **Department:** Central Water Commission
**Category:** Software · **Theme:** Disaster Management

**Background:**
Downstream flood warnings often arrive too late because upstream gauge trends aren't monitored together as a single system, delaying evacuation and response decisions.

**Description:**
a. Ingest simulated multi-gauge water-level time series along a river system.
b. Project short-term trends per gauge.
c. Flag downstream flood risk within a defined forecast window.
d. Present all gauges and risk levels on a single dashboard.

**Expected Solution:**
- A multi-gauge trend-projection and risk-flagging engine.
- A dashboard visualizing gauge trends and downstream risk.
- A sample multi-gauge dataset and demo.

---

## PS38 — Counterfeit Medicine Detection via Packaging & QR Verification
**Organization:** Ministry of Health & Family Welfare · **Department:** CDSCO
**Category:** Software · **Theme:** MedTech / HealthTech

**Background:**
Cloned packaging and fake batch codes are difficult to catch at the point of sale, putting patients at risk from counterfeit medicine circulating through informal supply chains.

**Description:**
a. Scan a medicine's QR/batch code.
b. Cross-check the code against a manufacturer registry.
c. Return a confidence-scored authenticity result.
d. Flag suspicious or unmatched codes for reporting.

**Expected Solution:**
- A QR/batch-code scanning and registry cross-check pipeline.
- A confidence-scored authenticity result screen.
- A sample manufacturer registry and demo covering genuine and fake codes.

---

## PS39 — Smart Textile Defect Detection on the Production Line
**Organization:** Ministry of Textiles
**Category:** Hardware+Software · **Theme:** Smart Automation / Manufacturing

**Background:**
Manual fabric inspection cannot reliably keep pace with production-line speed, letting defects slip through that could be caught by continuous computer-vision inspection.

**Description:**
a. Run computer-vision inspection on sample fabric images or a simulated line feed.
b. Detect defect type, location, and severity.
c. Flag defective segments for removal or review.
d. Track defect rate over a simulated production run.

**Expected Solution:**
- A CV-based defect-detection pipeline with type/location/severity output.
- A simulated production-line demo with defect-rate tracking.
- A sample fabric-image dataset.

---

## PS40 — Offline-First Soil Health Card Advisory & Crop Recommendation Engine
**Organization:** Ministry of Agriculture & Farmers Welfare
**Category:** Software · **Theme:** Agriculture

**Background:**
Soil Health Card data is issued to farmers but rarely turns into an actionable plan, especially in areas with poor or no internet connectivity.

**Description:**
a. Take a farmer's Soil Health Card values as input.
b. Recommend suitable crops and fertilizer adjustments based on the values.
c. Operate fully offline, syncing data when connectivity is available.
d. Present the advisory in a simple, farmer-friendly format.

**Expected Solution:**
- An offline-capable advisory engine using Soil Health Card data.
- A simple recommendation UI usable without continuous internet access.
- A sample Soil Health Card dataset and offline-sync demo.
