# ব্লক ৫ — Heaps, Graph, সহজ DP

*দিন ০৫৭–০৭০ · Top K · Graph-এর BFS/DFS · DP-র প্রথম তিন ধাপ · শেষ মহড়া*

টপিক ১–৫-এর বাইরে তিনটা জিনিস, যেগুলো রিমোটের স্ক্রিনে আসে: **Heaps** (top-K ধরনের প্রশ্ন), **Graph-এর BFS/DFS ভিত্তি**, আর **সহজ DP**। গভীরতা নয় — প্রতিটায় যেটুকু সহজ প্রশ্ন ধরে। দিন ০৬৯-এ শেষ মহড়া, দিন ০৭০-এ থামা।

> **ব্লক শেষে:** ৫০টা, শেষ মহড়া, আর থামার সিদ্ধান্ত লেখা?

### দিন ০৫৭ · Top K Frequent

- [ ] ৩০′ DSA ৪১/৫০ — **Top K Frequent Elements** (LC 347 · ৬.১ Top K Elements) — MinHeap স্মৃতি থেকে, তারপর প্রবলেম 🔁 🧠 (Deliberate practice)
- [ ] ১৫′ ইংরেজি — heap আর bucket sort-এর complexity: *"If k is close to n, I'd rather…"* 🧠 (Einstellung)

> **দিন শেষে:** দুটো পদ্ধতির trade-off বলা গেছে?

### দিন ০৫৮ · K Closest Points

- [ ] ৩০′ DSA ৪২/৫০ — **K Closest Points to Origin** (LC 973 · ৬.১ Top K Elements) — max-heap মানে কেবল উল্টো compare 🔁 🧠 (Deliberate practice · Chunking)
- [ ] ১৫′ ইংরেজি — কেন size k-এর **max**-heap 🧠 (Feynman)

> **দিন শেষে:** max-heap কেন, নিজের ভাষায়?

### দিন ০৫৯ · Last Stone Weight

- [ ] ৩০′ DSA ৪৩/৫০ — **Last Stone Weight** (LC 1046 · ৬.১ Top K Elements) — ১২′-এর লক্ষ্য 🔁 🧠 (Parkinson's law)
- [ ] ১৫′ ইংরেজি — তিনটা heap প্রবলেমের ক্লু এক পাতায় — "k largest / closest / simulate", তারপর জোরে 🧠 (Chunking)

> **দিন শেষে:** ১২′-এ?

### দিন ০৬০ · Flood Fill

- [ ] ৩০′ DSA ৪৪/৫০ — **Flood Fill** (LC 733 · ৮.১ BFS / DFS Traversal) — প্রথম graph; recursion দিয়ে একবার, queue দিয়ে একবার 🔁 🧠 (The first 20 hours · Einstellung)
- [ ] ১৫′ ইংরেজি — নতুন রং পুরনো রঙের সমান হলে কী হয় — edge case জোরে 🧠 (Everything is a game)

> **দিন শেষে:** দুই ভার্সনই চলেছে?

### দিন ০৬১ · Number of Islands

- [ ] ৩০′ DSA ৪৫/৫০ — **Number of Islands** (LC 200 · ৮.১ BFS / DFS Traversal) — গতকালকের flood fill-ই ভেতরে 🔁 🧠 (Chunking · Deliberate practice)
- [ ] ১৫′ ইংরেজি — *"Each land cell is visited once because…"* 🧠 (Feynman)

> **দিন শেষে:** flood fill-এর সাথে মিলটা দেখা গেছে?

### দিন ০৬২ · সপ্তাহের পাঁচটা

- [ ] ১৫′ এই সপ্তাহের ৫টা এলোমেলো — pattern, approach এক লাইনে, complexity, ইংরেজিতে জোরে; তারপর ২ মিনিটের রেকর্ডিং — heap কী, কেন O(log n), না দেখে 🧠 (Test yourself · Feedback)

> **দিন শেষে:** রেকর্ডিং শুনেছেন?

### দিন ০৬৩ · সপ্তাহের হিসাব

- [ ] ১০′ "Where I got stuck" — graph-এ visited ভুলে যাওয়া? এক লাইনে পরের সপ্তাহের দুর্বলতা 🧠 (Deliberate practice revisited)

> **দিন শেষে:** দুর্বলতা লেখা?

### দিন ০৬৪ · Rotting Oranges

- [ ] ৩০′ DSA ৪৬/৫০ — **Rotting Oranges** (LC 994 · ৮.১ BFS / DFS Traversal) — multi-source BFS; ১০′ আটকালে হাঁটুন 🔁 🧠 (Focus vs Diffuse · The obstacle)
- [ ] ১৫′ ইংরেজি — BFS-এর level = মিনিট — কেন 🧠 (Concepts vs Facts)

> **দিন শেষে:** সব পচা কমলা একসাথে queue-তে দেওয়ার কারণ লেখা?

### দিন ০৬৫ · Clone Graph

- [ ] ৩০′ DSA ৪৭/৫০ — **Clone Graph** (LC 133 · ৮.১ BFS / DFS Traversal) 🔁 🧠 (Deliberate practice)
- [ ] ১৫′ ইংরেজি — map কেন দুটো কাজ করে — visited আর old→new 🧠 (Feynman)

> **দিন শেষে:** cycle-ওয়ালা graph-এ চলেছে?

### দিন ০৬৬ · Climbing Stairs

- [ ] ৩০′ DSA ৪৮/৫০ — **Climbing Stairs** (LC 70 · ৯.১ Fibonacci Style) — প্রথম DP; recursion → memo → দুই ভেরিয়েবল, তিন ধাপে 🔁 🧠 (The first 20 hours · Chunk the subject)
- [ ] ১৫′ ইংরেজি — "state কী, transition কী" — দুই বাক্যে 🧠 (Concepts vs Facts)

> **দিন শেষে:** তিনটা ভার্সনই লেখা?

### দিন ০৬৭ · House Robber

- [ ] ৩০′ DSA ৪৯/৫০ — **House Robber** (LC 198 · ৯.৭ House Robber) — আগে state আর transition লিখুন, তারপর কোড 🔁 🧠 (Deliberate practice)
- [ ] ১৫′ ইংরেজি — Climbing Stairs আর এটার মিল 🧠 (Chunking)

> **দিন শেষে:** state আগে লিখেছিলেন?

### দিন ০৬৮ · Minimum Path Sum

- [ ] ৩০′ ⚑ DSA ৫০/৫০ — **Minimum Path Sum** (LC 64 · ৯.৮ Grid Paths) — 2D state; এক row-এ নামাতে পারেন? 🔁 🧠 (Deliberate practice · Learning vs Winning)
- [ ] ১৫′ ইংরেজি — ৫০টার মধ্যে কোন ৩টায় সবচেয়ে বেশি সময়, কেন — রেকর্ড 🧠 (Feedback · Failures don't count)

> **দিন শেষে:** ৫০টা শেষ?

### দিন ০৬৯ · শেষ মহড়া

- [ ] ৫০′ ⚑ স্ক্রিনের মহড়া — ৫০টা থেকে চোখ বন্ধ করে ২টা, আলাদা টপিক থেকে, প্রতিটা ২৫′; সাদা editor, ইংরেজিতে জোরে, রেকর্ড চালু 🧠 (Deep work · Everything is a game)
- [ ] ১০′ রেকর্ডিং থেকে একটা জিনিস — পরের interview-এর জন্য; তিন মহড়ার হিসাব পাশাপাশি 🧠 (Feedback · Compound learning)

> **দিন শেষে:** দুটোর কয়টা, আর রেকর্ডিং শুনেছেন?

### দিন ০৭০ · ৫০টা — থামা

- [ ] ১০′ ⚑ লিখে রাখুন: **এখন থেকে নতুন প্রবলেম নয় — শুধু ঝালাই আর মাসে একটা মহড়া।** DP আর graph-এর বাকিটা মজুদ, ঋণ নয়। যাকে তারিখটা বলেছিলেন, জানান 🧠 (10,000 hours rule · Pareto · What is success?)
- [ ] ৫′ প্রথম দিনের নোট আর আজকেরটা পাশাপাশি — কী বদলেছে, এক লাইনে 🧠 (It's all in the frame · Compound learning)

> **দিন শেষে:** থামার সিদ্ধান্ত লেখা?
