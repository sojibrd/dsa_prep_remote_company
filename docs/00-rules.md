# নিয়ম — রিমোট কোম্পানির DSA

*৪৯ দিন · লোকালের ৩০টা ঘড়ি ধরে + নতুন ২০টা · ইংরেজিতে*

## লক্ষ্য

> **৪৯ দিনে ৫০টা প্রবলেম ঘড়ি ধরে, ইংরেজিতে — লোকালের ৩০টা নতুন শর্তে, আর Heaps, Graph ও সহজ DP-র ভিত্তিসহ নতুন ২০টা।**

রিমোটে আসল পরীক্ষা অ্যালগরিদম নয়, **ঘড়ি আর ভাষা।** সাধারণত দুটো রূপে আসে:
- **ভেটিং প্ল্যাটফর্মের স্ক্রিন** (Codility-ধাঁচের): ৬০–৯০ মিনিট, একা বসে দিতে হয়।
- **shared editor-এ live pairing:** ইংরেজিতে বলতে বলতে কোড লিখতে হয়।

তাই এই পথে প্রবলেমের সংখ্যা মাত্র ২০টা বাড়ে, কিন্তু প্রতিটা বসার **শর্ত** বদলে যায়। 🧠 (Everything is a game · Pareto)

## সত্যের উৎস

1. `legacy_and_wisdom/docs/ASSUMPTIONS.md`
2. `brainstorming/` — `dsa-prep-how-many-paths.md`, `dsa-prep-what-to-ignore-for-remote.md`, `crack-remote-company-roadmap.md`
3. `local_company_dsa_prep/` — এই পথের ব্লক ১-এর ৩০টা ওখানকার হুবহু
4. এই ফোল্ডার — `docs/` আর `patterns/` (ইংরেজি; `global_company_dsa_prep/patterns/`-এর অংশ)

**কখন:** প্রথম চাকরি বদলের পরে, দ্বিতীয় বদলের (রিমোট) আগে। শুরুর তারিখ ⏳ আপনার উত্তর বাকি — সাইট প্রথমবার খুললে জিজ্ঞেস করবে। **লোকালের ৩০টা শেষ না করে এই পথ নয়।**

## কীভাবে পড়বেন

- ৪৯ দিন, ৩টা ব্লক। প্রতিটা দিনে কয়েকটা `- [ ]` কাজ, আর শেষে **দিন শেষে** প্রশ্ন।
- `(LC 1)` — প্যাটার্ন লেখা নেই: আগে নিজে নাম বলুন, লিংক টিক দেওয়ার পরে দেখায়। ব্লক ১ পুরোটা এভাবে। 🧠 (Interleaving)
- `(LC 56 · ১.৫ …)` — নতুন প্রবলেম, প্যাটার্ন লেখা: প্রথমবার শিখছেন।
- 🧠, 🔁, ⚑ — লোকালের মতোই। ⏳ = আপনার উত্তর বাকি।

## "আজ" মানে ক্যালেন্ডারের আজ

ফাইলে শুধু দিনের নম্বর। শুরুর তারিখ সাইটে একবার বসান; তারপর plan পেছায় না। বাদ পড়া দিন ফেরে না, শুধু ⚑ জমে থাকে।

---

## সপ্তাহের ছন্দ

সপ্তাহে কত ঘণ্টা — ⏳ নতুন চাকরিতে ঠিক হবে; এই plan এখনকার **৭ ঘণ্টা**-র হিসাবে লেখা, ~৬ ঘণ্টা DSA।

| দিন | ব্লক ১ | ব্লক ২–৩ | সময় |
|---|---|---|---|
| সোম–শুক্র | পুরনো ২টা, প্রতিটা ২০′ | নতুন ১টা, ২৫′ + ব্যাখ্যা | ৫০′ / ৪০′ |
| শনি | ⚑ স্ক্রিনের মহড়া — টানা ৩টা, ৯০′ | ⚑ স্ক্রিনের মহড়া | ৯০′ |
| রবি | সপ্তাহের হিসাব + ২ মিনিটের ইংরেজি রেকর্ডিং | একই | ২০′ |

🧠 (System vs goal · It pays to be not busy)

---

## স্ক্রিনের বসা — যে অবস্থায় পরীক্ষা, সেই অবস্থায় অনুশীলন

1. **Constraint আগে।** প্রবলেম পড়ার আগে `n`-এর সীমা দেখে complexity ঠিক করুন (নিচের টেবিল)।
2. **টাইমার সবসময়।** ব্লক ১-এ ২০′, নতুন প্রবলেমে ২৫′। শেষ হলে থামুন — চলমান না থাকলেও। 🧠 (Have an endpoint · Parkinson's law)
3. **সাদা editor।** Copilot, AI, autocomplete বন্ধ; প্যাটার্নের পাতা আর demo বন্ধ। 🧠 (Test yourself)
4. **ইংরেজিতে জোরে ভাবুন** — কেউ না শুনলেও: *"First, a brute force would be… that's O(n²). We can do better with…"* 🧠 (Active learning · Skill stacking)
5. **নোট ইংরেজিতে।** "My solution" ২–৩ লাইন, "Where I got stuck" এক লাইন। বাংলায় ভাবলে ঘড়ির নিচে অনুবাদের একটা বাড়তি ধাপ তৈরি হয়।
6. **সময় পেরোলে** সমাধান দেখুন, বন্ধ করুন, কাল ঝালাইয়ে ফাঁকা পাতায়। 🧠 (Failures don't count)

## Constraint পড়া

| দেখলে | ভাবুন |
|---|---|
| N ≤ 20 | brute force / backtracking / bitmask |
| N ≤ 1,000 | O(n²) চলে — DP টেবিল, pair comparison |
| N ≤ 10⁵ | O(n log n) বা O(n) — sort / heap / hashmap / prefix |
| N ≤ 10⁶ | O(n) one-pass |
| Sorted input | binary search / two pointers |
| Unweighted shortest path | BFS |
| Top K / Kth | heap |
| Count / frequency | hashmap |
| min/max over choices, "number of ways" | DP |

## স্ক্রিনের মহড়া — শনিবার

- টানা **৯০′, ৩টা প্রবলেম,** এক বসায়। মাঝে উঠবেন না।
- ব্লক ১-এ এই সপ্তাহের ১০টা থেকে এলোমেলো ৩টা; ব্লক ২–৩-এ নতুন ১টা + পুরনো ২টা। কোনটা, আগে থেকে না দেখে — প্রবলেমের তালিকা থেকে চোখ বন্ধ করে আঙুল রাখুন।
- শেষে হিসাব: কয়টা পুরো চলেছে, কোথায় সময় গেছে। 🧠 (Feedback · Deliberate practice)
- সঙ্গী থাকলে একটা প্রবলেম live pairing-এর মতো — সে প্রশ্ন করবে, আপনি বলতে বলতে লিখবেন। সঙ্গী ⏳। 🧠 (Community)

## ঝালাই

- 🔁 কাজে টিক দিলে আসল তারিখ থেকে ১ → ৩ → ৭ → ২১ দিন। 🧠 (Spaced repetition revisited)
- ঝালাই মানে ফাঁকা editor-এ, **১৫′ টাইমার,** ইংরেজিতে জোরে। "আটকে গেছি" — আবার ১ দিনে।

## প্যাটার্নের পাতা

ক্লু, statement, approach — সব **ইংরেজিতে**, ইচ্ছাকৃত। প্যাটার্ন ফাইল `global_company_dsa_prep`-এর অংশ; এখানে শুধু এই পথের ২৮টা। 🧠 (Trunk based knowledge)

---

## `learning_to_learn` — কোনটা কোথায়

| ডক | এই plan-এ যেভাবে |
|---|---|
| **Principle** | Pareto — ২০টা নতুন, বাকি পরে। Learning vs Winning — ঘড়ি ধরলে হার কমবে, সেটাই শেখা। The obstacle — ইংরেজিতে আটকানো। The dip — ব্লক ২-এর মাঝামাঝি। Compound learning, Failures don't count, It's all in the frame, Choice vs Chore — রবিবারের হিসাব। Skill stacking — DSA + ইংরেজি + লেখা। Productivity time, Self learning paradigm, What is success?, Happiness factors — ব্লক আর থামার দিনে। |
| **Lies** | 10,000 hours rule — সংখ্যা নয়, শর্ত। You can avoid risk — "আরও প্রস্তুত হয়ে আবেদন" নয়। Trust this one person — একটা ভেটিং গাইড নয়। Follow your passion — ইংরেজিতে বলা ভালো লাগার অপেক্ষা নয়। |
| **Pillars** | Everything is a game — স্ক্রিনের নিয়ম। Feynman — ইংরেজিতে ৩ লাইন। Trunk based knowledge — প্যাটার্ন। Efficiency trumps grit — টাইমার শেষে থামা। |
| **Science** | Focus vs Diffuse, Be bored, Sleep, Feedback, Procrastination, Motivation, Long and short memory, Active learning, Goals, It pays to be not busy, Chunking, Deliberate practice, Spaced repetition, Energy saving with habits, Be adventurous, Have an endpoint, Brain training — প্রতিটা দিনের 🧠 chip-এ। |
| **Techniques** | Interleaving — ব্লক ১। Parkinson's law, Pomodoro, Deep work — টাইমার। Test yourself — সাদা editor। Einstellung, Chunk the subject, Create a roadmap, Deliberate practice revisited, Spaced repetition revisited, Community, Habits revisited, System vs goal, The power of senses, Method of loci, Pareto principle revisited, Parkinson's law, Stakes & Rewards, Concepts vs Facts, The first 20 hours — দিনের কাজে। |

---

## যা উপেক্ষা করবেন

- **বাংলা ক্লু** — লোকালে সুবিধা, এখানে বাড়তি অনুবাদ।
- **ঘড়ি ছাড়া অনুশীলন** — এখানে ঘড়িই পরীক্ষা।
- **টুলের আরাম** — demo, notes, AI খোলা রেখে বসা।
- **গভীরতা** — DP-র বাকি ৮টা, Graph-এর বাকি ৬টা, Backtracking, Trie/Design। ওগুলো গ্লোবালের।
- **🔥 Must-do ট্যাগ** — এই সাইটে দেখায় না।

## যা করবেন না

- **এক জায়গায় গভীরে, বাকিগুলো ফাঁকা নয়।** স্ক্রিন দশ জায়গা থেকে সহজ প্রশ্ন করে।
- **৫০টার পরে নতুন নয়।** 🧠 (10,000 hours rule)
- **DSA শেষের অপেক্ষায় রিমোট আবেদন আটকে রাখা নয়।**
- **এই সাইটে নতুন ফিচার নয়।**

## দিন ৪৯-এর পরে

- সোম–শুক্রের DSA সময় = এই সাইটের আজকের ঝালাই, ১৫′ টাইমারে।
- মাসে একটা শনিবার স্ক্রিনের মহড়া চলতে থাকবে — ভেটিং বা interview-এর তারিখ না আসা পর্যন্ত।
- গ্লোবালের পথ (`global_company_dsa_prep`) — কোনো stage-এ নেই; সুযোগ এলে তখন।
