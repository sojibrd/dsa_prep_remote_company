# dsa_prep_remote_company

রিমোট কোম্পানির DSA রাউন্ডের প্রস্তুতি: ৭০ দিনে ৫০টা প্রবলেম, দিনে একটা। রিমোটে DSA সাধারণত দুই রূপে আসে: ভেটিং স্ক্রিন আর live pairing। তাই প্রথম প্রবলেম থেকেই টাইমার, সাদা editor আর ইংরেজিতে জোরে ভাবা। শুরুতে টপিক ১–৫-এর ভিত্তি (৩০টা, শেষ দশটা মিশিয়ে), তারপর বাকি ভিত্তি, Heaps, Graph-এর BFS/DFS আর সহজ DP। মাসে একবার শনিবারে ৬০′-এর স্ক্রিন-মহড়া। শেখার বিজ্ঞান মেনে; ৫০টা শেষ হলে থামা।

এটা **স্বাধীন পথ** — আগে অন্য কোনো DSA সাইট লাগে না, শূন্য থেকে শুরু। [লোকাল](https://sojibrd.github.io/dsa_prep_local_company/) আর [গ্লোবাল](https://sojibrd.github.io/dsa_prep_global_company/) আলাদা সাইট; প্রবলেমগুলো একটার ভেতরে আরেকটা (লোকালের ৩০টা এখানকার প্রথম ৩০টা, এখানকার ৫০টা গ্লোবালের প্রথম ৫০টা), কিন্তু কোনোটা আরেকটার পরে চালাতে হয় না। শুরুর তারিখ ⏳, সাইট প্রথমবার খুললে জিজ্ঞেস করে।

**লাইভ:** https://sojibrd.github.io/dsa_prep_remote_company/

## Functional Requirement

- **আজ (`/`):** প্রথমবার খুললে শুরুর তারিখ জিজ্ঞেস করে। তারপর দেখায় ক্যালেন্ডারের আজকের দিনটা, এই ক্রমে: জমে থাকা ⚑ → আজকের ঝালাই → আজকের দিন।
- **Rail:** ৪টা পাতার লিংক, gauge আর ৫টা ব্লক। শুধু খোলা ব্লকের দিনগুলো দেখায়।
- **দিন · ব্লক:** দিনের কাজ আর দিন বা ব্লক শেষের হ্যাঁ/না।
- **প্রবলেমের কাজ:** LeetCode-এর লিংক, প্যাটার্নের পাতা আর দুই ঘরের নোট (ইংরেজিতে)। ব্লক ৩-এ প্যাটার্নের লিংক আসে টিক দেওয়ার পরে।
- **প্যাটার্ন:** ২৮টা, ইংরেজিতে। উপরে ক্লু, তার নিচে demo ভাঁজ করা, তারপর প্রবলেম। demo-প্রবলেম plan-এ থাকলে তার নোট আর দিনের লিংকও দেখায়।
- **ঝালাই (`/review/`):** প্রতিটা 🔁 কাজ ১/৩/৭/২১ দিন পরে ফেরে।
- **নিয়ম (`/rules/`):** স্ক্রিনের বসা, constraint পড়ার টেবিল, মাসের মহড়া।

## Non-Functional Requirement

- **কোড `dsa_prep_local_company`-এর হুবহু।** পার্থক্য শুধু `app/lib/site.ts` (prefix `rdsa`, শুরুর প্রস্তাব নেই), basePath আর কনটেন্টে। কোড বদলালে তিন প্রজেক্টেই একই বদল করুন।
- **সত্যের উৎস `docs/` আর `patterns/`।** কাজের `(LC n)` যদি `patterns/`-এ না মেলে, build ভাঙে।
- **ফাইলে তারিখ নেই।** তারিখ = শুরুর তারিখ + (দিন − ১)।
- **`patterns/` হলো `dsa_prep_global_company/patterns/`-এর অংশ।** প্যাটার্ন ফাইল বদলাতে হলে আগে গ্লোবালে বদলান, তারপর এখানে কপি করুন।
- Static export → GitHub Pages। Progress শুধু `localStorage`-এ, একমাত্র `useProgress.ts` দিয়ে। Theme contract মানা হয়, সাইট dark-only।

## ডক ইনডেক্স

| ফাইল | Gist |
|---|---|
| [docs/00-rules.md](docs/00-rules.md) | লক্ষ্য (৫০টা, ঘড়ি আর ভাষা), স্বাধীন পথ, কখন শুরু ⏳, সপ্তাহের ছন্দ, স্ক্রিনের বসার ৮ ধাপ, constraint টেবিল, মাসের ৬০′ মহড়া, ঝালাই, `learning_to_learn`-এর পাঁচ ডক, যা উপেক্ষা করবেন, দিন ৭০-এর পরে |
| [docs/01-foundation.md](docs/01-foundation.md) | দিন ০০১–০১৪: Hashing, Two Pointers, Sliding Window, Binary Search — ১০টা, প্রথম দিন থেকে ঘড়ি আর ইংরেজি |
| [docs/02-lists-stacks-trees.md](docs/02-lists-stacks-trees.md) | দিন ০১৫–০২৮: rotated, binary search on answer, linked list, stack, tree — ১০টা; প্রথম মহড়া |
| [docs/03-mixed.md](docs/03-mixed.md) | দিন ০২৯–০৪২: টপিক ১–৫ মিশিয়ে, প্যাটার্ন লেখা নেই — ১০টা |
| [docs/04-wider-base.md](docs/04-wider-base.md) | দিন ০৪৩–০৫৬: Merge Intervals, Kadane, Prefix Sum, Min Stack, Validate BST, LCA, প্রথম heap (MinHeap নিজে লেখা); দ্বিতীয় মহড়া |
| [docs/05-heaps-graphs-dp.md](docs/05-heaps-graphs-dp.md) | দিন ০৫৭–০৭০: Top K ×৩, Graph BFS/DFS ×৪, সহজ DP ×৩; শেষ মহড়া আর থামা |
| [patterns/](patterns/) | টপিক ১–৫-এর ২৩টা প্যাটার্ন, আর 6.1, 8.1, 9.1, 9.7, 9.8 |

## Progress key

`rdsa:v1:start` · `rdsa:v1:task` · `rdsa:v1:check` · `rdsa:v1:review` · `rdsa:v1:note`। মানের আকার `dsa_prep_local_company`-এর README-তে দেওয়া আছে।

## চালানো

```bash
npm install
npm run dev
npm run build    # static export → out/
```
