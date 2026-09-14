# remote_company_dsa_prep

রিমোট কোম্পানির DSA রাউন্ডের প্রস্তুতি, মোট ৪৯ দিন। রিমোটে DSA সাধারণত দুই রূপে আসে: ভেটিং স্ক্রিন আর live pairing। প্রথম ব্লকে লোকালের ৩০টা প্রবলেম আবার, এবার ঘড়ি ধরে। তারপর নতুন ২০টা: টপিক ১–৫-এর বাকি ভিত্তি, Heaps, Graph-এর BFS/DFS আর সহজ DP। সব ইংরেজিতে, শেখার বিজ্ঞান মেনে। ৫০টা শেষ হলে থামা।

এটা তিন পথের দ্বিতীয়টা: [লোকাল](https://sojibrd.github.io/local_company_dsa_prep/) → রিমোট → [গ্লোবাল](https://sojibrd.github.io/global_company_dsa_prep/)। শুরু হবে প্রথম চাকরি বদলের পরে। শুরুর তারিখ ⏳, সাইট প্রথমবার খুললে জিজ্ঞেস করে।

**লাইভ:** https://sojibrd.github.io/remote_company_dsa_prep/

## Functional Requirement

- **আজ (`/`):** প্রথমবার খুললে শুরুর তারিখ জিজ্ঞেস করে। তারপর দেখায় ক্যালেন্ডারের আজকের দিনটা, এই ক্রমে: জমে থাকা ⚑ → আজকের ঝালাই → আজকের দিন।
- **Rail:** ৪টা পাতার লিংক, gauge আর ৩টা ব্লক। শুধু খোলা ব্লকের দিনগুলো দেখায়।
- **দিন · ব্লক:** দিনের কাজ আর দিন বা ব্লক শেষের হ্যাঁ/না।
- **প্রবলেমের কাজ:** LeetCode-এর লিংক, প্যাটার্নের পাতা আর দুই ঘরের নোট (ইংরেজিতে)। ব্লক ১-এ প্যাটার্নের লিংক আসে টিক দেওয়ার পরে।
- **প্যাটার্ন:** ২৮টা, ইংরেজিতে। উপরে ক্লু, তার নিচে demo ভাঁজ করা, তারপর প্রবলেম। demo-প্রবলেম plan-এ থাকলে তার নোট আর দিনের লিংকও দেখায়।
- **ঝালাই (`/review/`):** প্রতিটা 🔁 কাজ ১/৩/৭/২১ দিন পরে ফেরে।
- **নিয়ম (`/rules/`):** স্ক্রিনের বসা, constraint পড়ার টেবিল, শনিবারের মহড়া।

## Non-Functional Requirement

- **কোড `local_company_dsa_prep`-এর হুবহু।** পার্থক্য শুধু `app/lib/site.ts` (prefix `rdsa`, শুরুর প্রস্তাব নেই), basePath আর কনটেন্টে। কোড বদলালে তিন প্রজেক্টেই একই বদল করুন।
- **সত্যের উৎস `docs/` আর `patterns/`।** কাজের `(LC n)` যদি `patterns/`-এ না মেলে, build ভাঙে।
- **ফাইলে তারিখ নেই।** তারিখ = শুরুর তারিখ + (দিন − ১)।
- **`patterns/` হলো `global_company_dsa_prep/patterns/`-এর অংশ।** প্যাটার্ন ফাইল বদলাতে হলে আগে গ্লোবালে বদলান, তারপর এখানে কপি করুন।
- Static export → GitHub Pages। Progress শুধু `localStorage`-এ, একমাত্র `useProgress.ts` দিয়ে। Theme contract মানা হয়, সাইট dark-only।

## ডক ইনডেক্স

| ফাইল | Gist |
|---|---|
| [docs/00-rules.md](docs/00-rules.md) | লক্ষ্য (৫০টা, ঘড়ি আর ভাষা), কখন শুরু ⏳, সপ্তাহের ছন্দ, স্ক্রিনের বসার ৬ ধাপ, constraint টেবিল, শনিবারের ৯০′ মহড়া, ঝালাই, `learning_to_learn`-এর পাঁচ ডক, যা উপেক্ষা করবেন, দিন ৪৯-এর পরে |
| [docs/01-against-the-clock.md](docs/01-against-the-clock.md) | দিন ০০১–০২১: লোকালের ৩০টা, দিনে ২টা, ২০′ করে, মিশিয়ে, প্যাটার্ন লেখা নেই; তিন শনিবারের মহড়া |
| [docs/02-wider-base.md](docs/02-wider-base.md) | দিন ০২২–০৩৫: Merge Intervals, Kadane, Prefix Sum, Min Stack, Validate BST, LCA, Rotated Search, আর প্রথম heap (MinHeap নিজে লেখা) |
| [docs/03-heaps-graphs-dp.md](docs/03-heaps-graphs-dp.md) | দিন ০৩৬–০৪৯: Top K ×৩, Graph BFS/DFS ×৪, সহজ DP ×৩; শেষ মহড়া আর থামা |
| [patterns/](patterns/) | টপিক ১–৫-এর ২৩টা প্যাটার্ন, আর 6.1, 8.1, 9.1, 9.7, 9.8 |

## Progress key

`rdsa:v1:start` · `rdsa:v1:task` · `rdsa:v1:check` · `rdsa:v1:review` · `rdsa:v1:note`। মানের আকার `local_company_dsa_prep`-এর README-তে দেওয়া আছে।

## চালানো

```bash
npm install
npm run dev
npm run build    # static export → out/
```
