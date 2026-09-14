# ব্লক ৩ — Heaps, Graph, সহজ DP

*দিন ০৩৬–০৪৯ · Top K · Graph-এর BFS/DFS · DP-র প্রথম তিন ধাপ*

লোকাল থেকে রিমোটে যে তিনটা জিনিস নতুন যোগ হয়: **Heaps** (top-K ধরনের প্রশ্ন স্ক্রিনে আসে), **Graph-এর BFS/DFS ভিত্তি**, আর **সহজ DP**। গভীরতা নয় — প্রতিটায় যেটুকু সহজ প্রশ্ন ধরে। দিন ০৪৮-এ শেষ মহড়া, দিন ০৪৯-এ থামা।

> **ব্লক শেষে:** ৫০টা, শেষ মহড়া, আর থামার সিদ্ধান্ত লেখা?

### দিন ০৩৬ · Top K Frequent

- [ ] ৩০′ DSA ৪১/৫০ — **Top K Frequent Elements** (LC 347 · ৬.১ Top K Elements) — MinHeap স্মৃতি থেকে, তারপর প্রবলেম; ২৫′ 🔁 🧠 (Deliberate practice)
- [ ] ১০′ heap আর bucket sort — দুটোর complexity ইংরেজিতে 🧠 (Einstellung)

> **দিন শেষে:** দুটো পদ্ধতির trade-off বলা গেছে?

### দিন ০৩৭ · K Closest Points

- [ ] ৩০′ DSA ৪২/৫০ — **K Closest Points to Origin** (LC 973 · ৬.১ Top K Elements) — max-heap মানে কেবল উল্টো compare 🔁 🧠 (Deliberate practice · Chunking)
- [ ] ১০′ কেন size k-এর **max**-heap — ইংরেজিতে 🧠 (Feynman)

> **দিন শেষে:** max-heap কেন, নিজের ভাষায়?

### দিন ০৩৮ · Last Stone Weight

- [ ] ৩০′ DSA ৪৩/৫০ — **Last Stone Weight** (LC 1046 · ৬.১ Top K Elements) — ১২′-এর লক্ষ্য 🔁 🧠 (Parkinson's law)
- [ ] ১০′ তিনটা heap প্রবলেমের ক্লু এক পাতায় — "k largest / closest / simulate" 🧠 (Chunking)

> **দিন শেষে:** ১২′-এ?

### দিন ০৩৯ · Flood Fill

- [ ] ৩০′ DSA ৪৪/৫০ — **Flood Fill** (LC 733 · ৮.১ BFS / DFS Traversal) — প্রথম graph; recursion দিয়ে একবার, queue দিয়ে একবার 🔁 🧠 (The first 20 hours · Einstellung)
- [ ] ১০′ নতুন রং পুরনো রঙের সমান হলে কী হয় — edge case জোরে 🧠 (Everything is a game)

> **দিন শেষে:** দুই ভার্সনই চলেছে?

### দিন ০৪০ · Number of Islands

- [ ] ৩০′ DSA ৪৫/৫০ — **Number of Islands** (LC 200 · ৮.১ BFS / DFS Traversal) — ২৫′; গতকালকের flood fill-ই ভেতরে 🔁 🧠 (Chunking · Deliberate practice)
- [ ] ১০′ *"Each land cell is visited once because…"* 🧠 (Feynman)

> **দিন শেষে:** flood fill-এর সাথে মিলটা দেখা গেছে?

### দিন ০৪১ · মহড়া

- [ ] ৯০′ ⚑ স্ক্রিনের মহড়া — heap থেকে ১টা, ব্লক ২ থেকে ১টা, ব্লক ১ থেকে ১টা; টানা 🧠 (Deep work · Interleaving)
- [ ] ১০′ হিসাব 🧠 (Feedback)

> **দিন শেষে:** ৩টার কয়টা?

### দিন ০৪২ · সপ্তাহের হিসাব

- [ ] ১০′ "Where I got stuck" — graph-এ visited ভুলে যাওয়া? এক লাইনে পরের সপ্তাহের দুর্বলতা 🧠 (Deliberate practice revisited)
- [ ] ১০′ ২ মিনিটের রেকর্ডিং — heap কী, কেন O(log n), না দেখে 🧠 (Test yourself · Feedback)

> **দিন শেষে:** রেকর্ডিং শুনেছেন?

### দিন ০৪৩ · Rotting Oranges

- [ ] ৩০′ DSA ৪৬/৫০ — **Rotting Oranges** (LC 994 · ৮.১ BFS / DFS Traversal) — multi-source BFS; ১০′ আটকালে হাঁটুন 🔁 🧠 (Focus vs Diffuse · The obstacle)
- [ ] ১০′ BFS-এর level = মিনিট — কেন, ইংরেজিতে 🧠 (Concepts vs Facts)

> **দিন শেষে:** সব পচা কমলা একসাথে queue-তে দেওয়ার কারণ লেখা?

### দিন ০৪৪ · Clone Graph

- [ ] ৩০′ DSA ৪৭/৫০ — **Clone Graph** (LC 133 · ৮.১ BFS / DFS Traversal) — ২৫′ 🔁 🧠 (Deliberate practice)
- [ ] ১০′ map কেন দুটো কাজ করে — visited আর old→new 🧠 (Feynman)

> **দিন শেষে:** cycle-ওয়ালা graph-এ চলেছে?

### দিন ০৪৫ · Climbing Stairs

- [ ] ৩০′ DSA ৪৮/৫০ — **Climbing Stairs** (LC 70 · ৯.১ Fibonacci Style) — প্রথম DP; recursion → memo → দুই ভেরিয়েবল, তিন ধাপে 🔁 🧠 (The first 20 hours · Chunk the subject)
- [ ] ১০′ "state কী, transition কী" — ইংরেজিতে দুই বাক্যে 🧠 (Concepts vs Facts)

> **দিন শেষে:** তিনটা ভার্সনই লেখা?

### দিন ০৪৬ · House Robber

- [ ] ৩০′ DSA ৪৯/৫০ — **House Robber** (LC 198 · ৯.৭ House Robber) — আগে state আর transition লিখুন, তারপর কোড 🔁 🧠 (Deliberate practice)
- [ ] ১০′ Climbing Stairs আর এটার মিল — ইংরেজিতে 🧠 (Chunking)

> **দিন শেষে:** state আগে লিখেছিলেন?

### দিন ০৪৭ · Minimum Path Sum

- [ ] ৩০′ ⚑ DSA ৫০/৫০ — **Minimum Path Sum** (LC 64 · ৯.৮ Grid Paths) — 2D state; এক row-এ নামাতে পারেন? 🔁 🧠 (Deliberate practice · Learning vs Winning)
- [ ] ১০′ ৫০টার মধ্যে কোন ৩টায় সবচেয়ে বেশি সময়, কেন — রেকর্ড 🧠 (Feedback · Failures don't count)

> **দিন শেষে:** ৫০টা শেষ?

### দিন ০৪৮ · শেষ মহড়া

- [ ] ৯০′ ⚑ স্ক্রিনের মহড়া — ৫০টা থেকে চোখ বন্ধ করে ৩টা, প্রতিটা আলাদা টপিক থেকে; সাদা editor, ইংরেজিতে জোরে, রেকর্ড চালু 🧠 (Deep work · Everything is a game)
- [ ] ১০′ রেকর্ডিং থেকে একটা জিনিস — পরের interview-এর জন্য 🧠 (Feedback)

> **দিন শেষে:** ৩টার কয়টা, আর রেকর্ডিং শুনেছেন?

### দিন ০৪৯ · ৫০টা — থামা

- [ ] ১৫′ ⚑ লিখে রাখুন: **এখন থেকে নতুন প্রবলেম নয় — শুধু ঝালাই আর মাসে একটা মহড়া।** DP আর graph-এর বাকিটা মজুদ, ঋণ নয়। যাকে তারিখটা বলেছিলেন, জানান 🧠 (10,000 hours rule · Pareto · What is success?)
- [ ] ১০′ ব্লক ৩-এর হিসাব — প্রথম দিনের রেকর্ডিং আর আজকেরটা পাশাপাশি; কী বদলেছে, এক লাইনে 🧠 (It's all in the frame · Compound learning)

> **দিন শেষে:** থামার সিদ্ধান্ত লেখা?
