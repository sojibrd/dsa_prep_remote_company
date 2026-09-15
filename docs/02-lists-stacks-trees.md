# ব্লক ২ — List, Stack, Tree

*দিন ০১৫–০২৮ · Binary Search-এর বাকিটা · Linked List · Stack & Queue · Tree · প্রথম মহড়া*

আরও দশটা, এখনো প্যাটার্নের নাম পাশে লেখা — rotated array, binary search on answer, তারপর linked list-এর তিন কৌশল, stack, আর tree-র recursion। ব্লক শেষে টপিক ১–৫-এর **ভিত্তি** শেষ: ২০টা।

দিন ০২৭-এ প্রথম **স্ক্রিনের মহড়া** — ৬০′, টানা, দুটো প্রবলেম, ভেটিং স্ক্রিনের মতো। সপ্তাহ ৪-এ উৎসাহ কমবে — নতুনত্ব শেষ, অথচ এখনো "পারি" মনে হয় না। এটা dip, ভুল পথ নয়। সংখ্যা নয়, রোজ বসাটা মাপুন। 🧠 (The dip · System vs goal)

> **ব্লক শেষে:** ২০টা প্রবলেম, সব নোট ইংরেজিতে, আর প্রথম মহড়া হয়েছে?

### দিন ০১৫ · Rotated array

- [ ] ৩০′ DSA ১১/৫০ — **Find Minimum in Rotated Sorted Array** (LC 153 · ২.৪ Bitonic / Rotated Array) — কোন অর্ধেক sorted, কাগজে তিনটা উদাহরণ এঁকে তারপর কোড 🔁 🧠 (Deliberate practice · The power of senses)
- [ ] ১৫′ ইংরেজি — *"One half is always sorted, so…"* — কোনটা, কীভাবে বুঝলেন 🧠 (Feynman)

> **দিন শেষে:** তিনটা ছবি আর চলমান কোড?

### দিন ০১৬ · Binary search on answer

- [ ] ৩০′ DSA ১২/৫০ — **Capacity to Ship Packages Within D Days** (LC 1011 · ২.২ Binary Search on Answer) — সীমার একটু বাইরে; উত্তরের পরিসর আর "এই capacity-তে হয় কি" আলাদা করে লিখুন 🔁 🧠 (Learning vs Winning · The obstacle)
- [ ] ১৫′ ইংরেজি — "binary search on the answer" মানে কী, ৩ বাক্যে 🧠 (Feynman)

> **দিন শেষে:** "হয় কি না" function-টা আলাদা লেখা?

### দিন ০১৭ · Reverse Linked List

- [ ] ৩০′ DSA ১৩/৫০ — **Reverse Linked List** (LC 206 · ৩.৩ In-Place Reversal) — তিনটা pointer কাগজে, প্রতি ধাপে তীর বদলান; তারপর চোখ বন্ধ করে লেখা পর্যন্ত 🔁 🧠 (Test yourself · The power of senses)
- [ ] ১৫′ ইংরেজি — `prev`, `curr`, `next` — প্রতিটার কাজ এক বাক্যে 🧠 (Concepts vs Facts)

> **দিন শেষে:** না দেখে লেখা গেছে?

### দিন ০১৮ · Middle of the Linked List

- [ ] ৩০′ DSA ১৪/৫০ — **Middle of the Linked List** (LC 876 · ৩.১ Fast & Slow Pointers) — ১০′-এর লক্ষ্য; বাকি সময়ে জোড় আর বিজোড় দৈর্ঘ্য হাতে চালান 🔁 🧠 (Parkinson's law · Deliberate practice)
- [ ] ১৫′ ইংরেজি — fast pointer দ্বিগুণ চললে slow কেন ঠিক মাঝে থামে 🧠 (Feynman)

> **দিন শেষে:** জোড় আর বিজোড় দুই দৈর্ঘ্যেই চলেছে?

### দিন ০১৯ · Linked List Cycle

- [ ] ৩০′ DSA ১৫/৫০ — **Linked List Cycle** (LC 141 · ৩.১ Fast & Slow Pointers) — hash set দিয়ে একবার, দুই pointer দিয়ে একবার 🔁 🧠 (Deliberate practice · Einstellung)
- [ ] ১৫′ ইংরেজি — interviewer *"can you do it in O(1) space?"* বললে দুই পদ্ধতির কোনটা, কেন 🧠 (Everything is a game)

> **দিন শেষে:** DSA ১৫/৫০ — দুই পদ্ধতিই চলেছে?

### দিন ০২০ · সাতটা, না দেখে

- [ ] ১০′ এই সপ্তাহের ৫টা + ব্লক ১-এর যেকোনো ২টা এলোমেলো — pattern আর এক লাইন, ইংরেজিতে জোরে, নোট বন্ধ 🧠 (Test yourself · Interleaving)
- [ ] ৫′ chunk-এর পাতায় — "list-এ মাঝখান বা cycle → fast & slow", "উল্টানো → তিন pointer" 🧠 (Chunking)

> **দিন শেষে:** সাতটার কয়টায় pattern ঠিক?

### দিন ০২১ · সপ্তাহের হিসাব

- [ ] ১০′ "Where I got stuck" ঘরগুলো — list-এ `null` নিয়ে ভুল বারবার? পরের সপ্তাহের দুর্বলতা এক লাইনে। ইচ্ছে কমে গেলে: কাজটা "করতে হবে" নয়, "একটা ফাঁক বন্ধ করছি" 🧠 (Feedback · Choice vs Chore)

> **দিন শেষে:** পরের সপ্তাহের দুর্বলতা লেখা?

### দিন ০২২ · Remove Nth Node

- [ ] ৩০′ DSA ১৬/৫০ — **Remove Nth Node From End of List** (LC 19 · ৩.১ Fast & Slow Pointers) — n ব্যবধানে দুই pointer + dummy node 🔁 🧠 (Deliberate practice)
- [ ] ১৫′ ইংরেজি — dummy node কেন লাগে — head মুছলে কী হয় 🧠 (Feynman)

> **দিন শেষে:** head মোছার edge case চলেছে?

### দিন ০২৩ · Valid Parentheses

- [ ] ৩০′ DSA ১৭/৫০ — **Valid Parentheses** (LC 20 · ৪.২ Expression Evaluation / Parentheses) — প্রবলেমটা খুলে প্রথম লাইন লিখুন, অনুপ্রেরণার অপেক্ষা নয় 🔁 🧠 (Procrastination · Deliberate practice)
- [ ] ১৫′ ইংরেজি — stack কেন — *"last opened, first closed"* 🧠 (Concepts vs Facts)

> **দিন শেষে:** `"(]"` আর `"(("` — দুটোই false দিয়েছে?

### দিন ০২৪ · Queue using Stacks

- [ ] ৩০′ DSA ১৮/৫০ — **Implement Queue using Stacks** (LC 232 · ৪.৩ Design Problems) — design প্রশ্ন: আগে interface ইংরেজিতে বলুন, তারপর কোড 🔁 🧠 (Everything is a game · Deliberate practice)
- [ ] ১৫′ ইংরেজি — দুই stack দিয়ে queue কেন amortized O(1), জোরে 🧠 (Feynman)

> **দিন শেষে:** amortized মানে নিজের ভাষায় লেখা?

### দিন ০২৫ · Maximum Depth

- [ ] ৩০′ DSA ১৯/৫০ — **Maximum Depth of Binary Tree** (LC 104 · ৫.১ Tree Traversal) — recursion একবার, BFS একবার 🔁 🧠 (Deliberate practice · Einstellung)
- [ ] ১৫′ ইংরেজি — recursion-এ base case কী, ৩ বাক্যে 🧠 (Feynman)

> **দিন শেষে:** দুই পদ্ধতিই চলেছে?

### দিন ০২৬ · ২০টা, ভিত্তি শেষ

- [ ] ৩০′ ⚑ DSA ২০/৫০ — **Invert Binary Tree** (LC 226 · ৫.৪ Validation & Properties) — recursive আর iterative 🔁 🧠 (Deliberate practice · Compound learning)
- [ ] ১৫′ ইংরেজি — পাঁচ টপিকের প্রতিটা এক বাক্যে: কখন এই pattern লাগে 🧠 (Chunk the subject)

> **দিন শেষে:** টপিক ১–৫-এর ভিত্তি — ২০টা শেষ?

### দিন ০২৭ · স্ক্রিনের মহড়া #১

- [ ] ৫০′ ⚑ স্ক্রিনের মহড়া — ২০টা থেকে চোখ বন্ধ করে ২টা, প্রতিটা ২৫′, টানা; সাদা editor, ফোন অন্য ঘরে, ইংরেজিতে জোরে। কোনটা, আগে থেকে না দেখে 🧠 (Deep work · Everything is a game)
- [ ] ১০′ হিসাব — কয়টা পুরো চলেছে, কোথায় সময় গেছে: idea, code, না বলায়; নিয়মের constraint টেবিলটা একবার পড়ে এক কোণে রাখুন 🧠 (Feedback · Deliberate practice)

> **দিন শেষে:** দুটোর কয়টা ২৫′-এ?

### দিন ০২৮ · ব্লক ২-এর হিসাব

- [ ] ১০′ ব্লক ২-এর হিসাব — ২০টা, নোট, প্রথম মহড়া; কোথায় বারবার আটকান, এক লাইনে। এবার থেকে প্যাটার্নের নাম আর লেখা থাকবে না — নিজে বলতে হবে 🧠 (It's all in the frame · Feedback)

> **দিন শেষে:** ব্লক ২ শেষ — ২০টা?
