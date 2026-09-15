# ব্লক ১ — ভিত্তি

*দিন ০০১–০১৪ · Hashing · Two Pointers · Sliding Window · Binary Search · ইংরেজিতে*

সবচেয়ে বেশি আসে এই চারটা — hashmap, two pointer, sliding window, binary search। প্রথম দুই সপ্তাহে দশটা প্রবলেম, দিনে একটা, প্রতিটার পাশে প্যাটার্নের নাম লেখা। কিন্তু প্রথম দিন থেকেই রিমোটের তিন শর্ত: **৩০′ টাইমার, সাদা editor, ইংরেজিতে জোরে।** স্ক্রিনের শর্ত পরে যোগ হয় না — এখন থেকেই অভ্যাস।

প্রথম সপ্তাহটা বিচ্ছিরি লাগবে — ৩০′-এ একটা easy হয় না, ইংরেজিতে শব্দ খুঁজতে হয়, demo দেখতে হয়। নতুন দক্ষতার প্রথম কয়েক ঘণ্টা এরকমই। 🧠 (The first 20 hours · Learning vs Winning)

> **ব্লক শেষে:** ১০টা প্রবলেম, প্রতিটার নোট ইংরেজিতে ভরা, আর দুই শনিবারে না দেখে প্যাটার্ন বলা?

### দিন ০০১ · Two Sum

- [ ] ৩০′ DSA ১/৫০ — **Two Sum** (LC 1 · ১.৪ Hashing) — টাইমার, সাদা editor, ইংরেজিতে জোরে; আগে brute force আর তার complexity মুখে, তারপর উন্নতি 🔁 🧠 (The first 20 hours · Everything is a game)
- [ ] ১৫′ ইংরেজি — *"A simple approach is O(n²); a hash map gets it to O(n)."* — নিজের ভাষায়, জোরে; নোটের দুই ঘর ইংরেজিতে 🧠 (Feynman)
- [ ] ৫′ একজনকে বলুন: *"৭০ দিনে ৫০টা — মাঝে একবার জিজ্ঞেস কোরো"* 🧠 (Stakes & Rewards · Community)

> **দিন শেষে:** Two Sum হয়েছে, নোট ইংরেজিতে?

### দিন ০০২ · Valid Anagram

- [ ] ৩০′ DSA ২/৫০ — **Valid Anagram** (LC 242 · ১.৪ Hashing) — sort করে একবার, count করে একবার; দুটোর complexity ইংরেজিতে 🔁 🧠 (Deliberate practice · Einstellung)
- [ ] ১৫′ ইংরেজি — কেন frequency count sort-এর চেয়ে দ্রুত, ৩ বাক্যে 🧠 (Feynman)

> **দিন শেষে:** দুটো পদ্ধতিই লেখা?

### দিন ০০৩ · Valid Palindrome

- [ ] ৩০′ DSA ৩/৫০ — **Valid Palindrome** (LC 125 · ১.১ Two Pointers) — দুই pointer কাগজে এঁকে, তারপর বলতে বলতে কোড 🔁 🧠 (Deliberate practice · The power of senses)
- [ ] ১৫′ ইংরেজি — দুই প্রান্ত থেকে কেন, এক প্রান্ত থেকে কেন নয় 🧠 (Feynman)

> **দিন শেষে:** কাগজের ছবিটা আছে, কোড চলেছে?

### দিন ০০৪ · Two Sum II

- [ ] ৩০′ DSA ৪/৫০ — **Two Sum II (Sorted Array)** (LC 167 · ১.১ Two Pointers) — দিন ০০১-এর নোট **না** খুলে; আগে constraint দেখে complexity-র লক্ষ্য 🔁 🧠 (Test yourself · Deliberate practice)
- [ ] ১৫′ ইংরেজি — Two Sum আর Two Sum II-এর পার্থক্য: কেন sorted হলে hash map লাগে না 🧠 (Concepts vs Facts)

> **দিন শেষে:** "sorted হলে two pointer" — এক লাইনে নোটে লেখা?

### দিন ০০৫ · প্রথম medium

- [ ] ৩০′ DSA ৫/৫০ — **3Sum** (LC 15 · ১.১ Two Pointers) — medium; ১০′ আটকালে উঠে হাঁটুন, ২০′-এ demo, পড়ে বন্ধ করে নিজে 🔁 🧠 (Focus vs Diffuse · Learning vs Winning)
- [ ] ১৫′ ইংরেজি — কোথায় আটকেছিলেন, জোরে: *"I got stuck on duplicates because…"* 🧠 (Failures don't count)

> **দিন শেষে:** 3Sum-এর মূল আইডিয়া ৩ লাইনে লেখা — demo দেখে থাকলেও?

### দিন ০০৬ · সপ্তাহের পাঁচটা, না দেখে

- [ ] ১০′ এই সপ্তাহের ৫টা প্রবলেমের নাম এলোমেলো ক্রমে — প্রতিটায় pattern আর এক লাইনের approach, ইংরেজিতে জোরে, নোট বন্ধ; তারপর মেলান 🧠 (Test yourself · Interleaving)
- [ ] ৫′ এক পাতায় chunk — *"this clue → this pattern"*: hashmap আর two pointer 🧠 (Chunking)

> **দিন শেষে:** ৫টার মধ্যে কয়টার pattern না দেখে ঠিক?

### দিন ০০৭ · সপ্তাহের হিসাব

- [ ] ১০′ "Where I got stuck" ঘরগুলো পাশাপাশি — আটকানো অ্যালগরিদমে, না ইংরেজিতে বলায়? পরের সপ্তাহের একটা দুর্বলতা এক লাইনে; "আমি দুর্বল" নয়, "এখনো ___-এ" 🧠 (Feedback · It's all in the frame)

> **দিন শেষে:** পরের সপ্তাহের দুর্বলতা লেখা?

### দিন ০০৮ · Container With Most Water

- [ ] ৩০′ DSA ৬/৫০ — **Container With Most Water** (LC 11 · ১.১ Two Pointers) — বসার আগে এক লাইন: গত সপ্তাহের দুর্বলতা; brute force O(n²) মুখে, তারপর উন্নতি 🔁 🧠 (Deliberate practice revisited · Everything is a game)
- [ ] ১৫′ ইংরেজি — কেন ছোট দিকের pointer সরাতে হয়, বাচ্চাকে বোঝানোর মতো করে 🧠 (Feynman)

> **দিন শেষে:** "কেন ছোট দিক" — নিজের ভাষায় লেখা?

### দিন ০০৯ · Sliding window শুরু

- [ ] ৩০′ DSA ৭/৫০ — **Longest Substring Without Repeating Characters** (LC 3 · ১.২ Sliding Window) — জানালা কখন বাড়ে আর কখন ছোট হয়, কোডের আগে লিখুন 🔁 🧠 (Deliberate practice · Chunk the subject)
- [ ] ১৫′ ইংরেজি — *"The window grows when…, shrinks when…"* — বাক্যটা শেষ করুন, জোরে 🧠 (Feynman)

> **দিন শেষে:** বাড়া আর ছোট হওয়ার শর্ত দুটো আলাদা লেখা?

### দিন ০১০ · Minimum Size Subarray Sum

- [ ] ৩০′ DSA ৮/৫০ — **Minimum Size Subarray Sum** (LC 209 · ১.২ Sliding Window) — কাল যা শিখলেন, আজ অন্য প্রবলেমে; আগের কোড দেখবেন না 🔁 🧠 (Deliberate practice · Test yourself)
- [ ] ১৫′ ইংরেজি — কাল আর আজকের জানালার পার্থক্য — কোনটায় সর্বোচ্চ, কোনটায় সর্বনিম্ন 🧠 (Concepts vs Facts)

> **দিন শেষে:** দুটো sliding window একই ছাঁচে — দেখতে পেলেন?

### দিন ০১১ · Binary Search

- [ ] ৩০′ DSA ৯/৫০ — **Binary Search** (LC 704 · ২.১ Basic Binary Search) — টেমপ্লেট না দেখে, ১০′-এর লক্ষ্য; ভুল হলে কোথায়, সেটাই নোট 🔁 🧠 (Test yourself · Parkinson's law)
- [ ] ১৫′ ইংরেজি — `lo <= hi` নাকি `lo < hi` — কেন, জোরে 🧠 (Concepts vs Facts)

> **দিন শেষে:** টেমপ্লেট না দেখে, ১০′-এ?

### দিন ০১২ · Search Insert Position

- [ ] ৩০′ DSA ১০/৫০ — **Search Insert Position** (LC 35 · ২.১ Basic Binary Search) — কালকের টেমপ্লেট থেকে এক জায়গা বদল; কোথায়? 🔁 🧠 (Deliberate practice)
- [ ] ১৫′ ইংরেজি — না পেলে `lo` কেন ঠিক ঢোকানোর জায়গায় থামে 🧠 (Feynman)

> **দিন শেষে:** ১০টা শেষ?

### দিন ০১৩ · দুই সপ্তাহের দশটা

- [ ] ১০′ দশটা প্রবলেমের নাম এলোমেলো — pattern আর এক লাইন, ইংরেজিতে জোরে, নোট বন্ধ; সবচেয়ে কম মনে থাকা দুটো দাগান 🧠 (Test yourself · Interleaving)
- [ ] ৫′ chunk-এর পাতায় যোগ — sliding window আর binary search-এর ক্লু 🧠 (Chunking)

> **দিন শেষে:** দশটার কয়টায় pattern ঠিক?

### দিন ০১৪ · ব্লক ১-এর হিসাব

- [ ] ১০′ ব্লক ১-এর হিসাব — ১০টা, ইংরেজি নোট, chunk-এর পাতা: কয়টা ৩০′-এর মধ্যে, কোনটা বাকি, এক লাইনে কেন; পরের সপ্তাহের একটা দুর্বলতা। ছোট একটা পুরস্কার নিজেকে 🧠 (It's all in the frame · Stakes & Rewards)

> **দিন শেষে:** ব্লক ১-এর দশটা শেষ, দুর্বলতা লেখা?
