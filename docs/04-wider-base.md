# ব্লক ৪ — ভিত্তি ছড়ানো

*দিন ০৪৩–০৫৬ · টপিক ১–৫-এর বাকি ভিত্তি · প্রথম heap · দ্বিতীয় মহড়া*

ভেটিং স্ক্রিন দশ জায়গা থেকে সহজ প্রশ্ন করে। প্রথম ৩০টা যেখানে ছোঁয়নি — merge intervals, Kadane, prefix sum, dummy node, min stack, BST validation, LCA — সেগুলো এখানে, আর শেষে প্রথম heap। প্রতিটা নতুন প্যাটার্ন, তাই নাম লেখা থাকে।

আগে ক্লু পড়ুন, demo বন্ধ; ২০′-এ না হলে demo, পড়ে বন্ধ করে নিজে। দিন ০৫৫-এ দ্বিতীয় মহড়া — নতুন আর পুরনো মিশিয়ে। 🧠 (Deliberate practice · Interleaving)

> **ব্লক শেষে:** ১০টা নতুন, দ্বিতীয় মহড়া, আর MinHeap স্মৃতি থেকে লেখা যায়?

### দিন ০৪৩ · Merge Intervals

- [ ] ৩০′ DSA ৩১/৫০ — **Merge Intervals** (LC 56 · ১.৫ Merge Intervals) — ক্লু পড়ে টাইমার, ইংরেজিতে জোরে 🔁 🧠 (Deliberate practice · Test yourself)
- [ ] ১৫′ ইংরেজি — কেন আগে sort, ৩ বাক্যে 🧠 (Feynman)

> **দিন শেষে:** ৩০′-এ চলেছে?

### দিন ০৪৪ · Maximum Subarray

- [ ] ৩০′ DSA ৩২/৫০ — **Maximum Subarray** (LC 53 · ১.৬ Kadane's Algorithm) 🔁 🧠 (Deliberate practice)
- [ ] ১৫′ ইংরেজি — *"At each index we either extend or restart, because…"* 🧠 (Concepts vs Facts)

> **দিন শেষে:** "extend or restart" নিজের ভাষায়?

### দিন ০৪৫ · Subarray Sum Equals K

- [ ] ৩০′ DSA ৩৩/৫০ — **Subarray Sum Equals K** (LC 560 · ১.৩ Prefix Sum) — negative থাকলে sliding window কেন ভাঙে, আগে মুখে 🔁 🧠 (Einstellung · The obstacle)
- [ ] ১৫′ ইংরেজি — `seen.set(0, 1)` কেন 🧠 (Feynman)

> **দিন শেষে:** খালি prefix-এর কারণটা লেখা?

### দিন ০৪৬ · Longest Repeating Character Replacement

- [ ] ৩০′ DSA ৩৪/৫০ — **Longest Repeating Character Replacement** (LC 424 · ১.২ Sliding Window) — চেনা প্যাটার্ন, কঠিন শর্ত 🔁 🧠 (Learning vs Winning)
- [ ] ১৫′ ইংরেজি — window valid হওয়ার শর্ত একটা সমীকরণে: *"length − maxCount ≤ k, because…"* 🧠 (Chunk the subject)

> **দিন শেষে:** শর্তটা এক লাইনে?

### দিন ০৪৭ · Merge Two Sorted Lists

- [ ] ৩০′ DSA ৩৫/৫০ — **Merge Two Sorted Lists** (LC 21 · ৩.২ Dummy Node Technique) — ১৫′-এর লক্ষ্য; বাকি সময়ে dummy ছাড়া ভার্সন 🔁 🧠 (Parkinson's law · Einstellung)
- [ ] ১৫′ ইংরেজি — dummy ছাড়া আর dummy দিয়ে — দুটো ভার্সনের পার্থক্য 🧠 (Concepts vs Facts)

> **দিন শেষে:** ১৫′-এ?

### দিন ০৪৮ · আটটা, মিশিয়ে

- [ ] ১৫′ এই সপ্তাহের ৫টা + ব্লক ৩-এর ৩টা এলোমেলো — শুধু pattern আর এক লাইন, ইংরেজিতে জোরে; নতুন প্যাটার্নগুলো chunk-এর পাতায় 🧠 (Test yourself · Chunking)

> **দিন শেষে:** আটটার কয়টা ঠিক?

### দিন ০৪৯ · সপ্তাহের হিসাব

- [ ] ১০′ "Where I got stuck" — এই সপ্তাহে কোন প্যাটার্ন নতুন লাগল; তারপর ২ মিনিটের রেকর্ডিং — Kadane বা prefix sum, না দেখে 🧠 (Feedback · Test yourself)

> **দিন শেষে:** রেকর্ডিং শুনেছেন?

### দিন ০৫০ · Min Stack

- [ ] ৩০′ DSA ৩৬/৫০ — **Min Stack** (LC 155 · ৪.৩ Design Problems) — design প্রশ্ন: আগে interface ইংরেজিতে বলুন, তারপর কোড 🔁 🧠 (Everything is a game)
- [ ] ১৫′ ইংরেজি — দুই stack ভার্সন আর pair ভার্সন — কোনটা কেন 🧠 (Einstellung)

> **দিন শেষে:** interface আগে বলা হয়েছিল?

### দিন ০৫১ · Search in Rotated Sorted Array

- [ ] ৩০′ DSA ৩৭/৫০ — **Search in Rotated Sorted Array** (LC 33 · ২.৪ Bitonic / Rotated Array) — কাগজে তিনটা rotation এঁকে; দিন ০১৫-এর প্রবলেমের সাথে কোথায় আলাদা 🔁 🧠 (The power of senses · Chunking)
- [ ] ১৫′ ইংরেজি — duplicate থাকলে rotated search কেন ভাঙে 🧠 (Everything is a game)

> **দিন শেষে:** তিনটা ছবিতেই চলেছে?

### দিন ০৫২ · Validate BST

- [ ] ৩০′ DSA ৩৮/৫০ — **Validate Binary Search Tree** (LC 98 · ৫.৪ Validation & Properties) — parent-child তুলনা কেন ভুল, আগে একটা counterexample 🔁 🧠 (Einstellung · Concepts vs Facts)
- [ ] ১৫′ ইংরেজি — counterexample-টা বর্ণনা করুন 🧠 (Feynman)

> **দিন শেষে:** counterexample নিজে বানিয়েছেন?

### দিন ০৫৩ · Lowest Common Ancestor

- [ ] ৩০′ DSA ৩৯/৫০ — **Lowest Common Ancestor of a Binary Tree** (LC 236 · ৫.৫ Lowest Common Ancestor) 🔁 🧠 (Deliberate practice)
- [ ] ১৫′ ইংরেজি — recursion কী ফেরত দেয় — এক বাক্যে 🧠 (Concepts vs Facts)

> **দিন শেষে:** ফেরত মানটা এক বাক্যে?

### দিন ০৫৪ · প্রথম heap

- [ ] ৩০′ DSA ৪০/৫০ — **Kth Largest Element in an Array** (LC 215 · ৬.১ Top K Elements) — JS-এ heap নেই; আজ MinHeap class নিজে লিখুন, তারপর প্রবলেম। ৩০′-এ না হলে কাল ঝালাইয়ে 🔁 🧠 (The first 20 hours · Test yourself)
- [ ] ১৫′ ইংরেজি — sift up আর sift down — কাগজে একটা ৭-নোডের heap এঁকে, মুখে 🧠 (The power of senses)

> **দিন শেষে:** MinHeap চলেছে?

### দিন ০৫৫ · স্ক্রিনের মহড়া #২

- [ ] ৫০′ ⚑ স্ক্রিনের মহড়া — এই ব্লকের ১টা + ব্লক ১–৩-এর ১টা, এলোমেলো, প্রতিটা ২৫′, টানা; সাদা editor, ইংরেজিতে জোরে 🧠 (Deep work · Interleaving)
- [ ] ১০′ হিসাব — মহড়া #১-এর সাথে পাশাপাশি: কী বদলেছে 🧠 (Feedback · Compound learning)

> **দিন শেষে:** দুটোর কয়টা, আর কী বদলেছে?

### দিন ০৫৬ · ব্লক ৪-এর হিসাব

- [ ] ১০′ MinHeap স্মৃতি থেকে, ১০′ টাইমার — পরের ব্লকে রোজ লাগবে; তারপর এক লাইনে: কোন প্যাটার্ন এখনো ঘোলা 🔁 🧠 (Test yourself · It's all in the frame)

> **দিন শেষে:** ৪০টা, আর MinHeap না দেখে?
