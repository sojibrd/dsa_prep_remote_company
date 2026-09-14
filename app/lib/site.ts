/**
 * সাইটের পরিচয় আর এই পথের সেটিং — plan-এর কনটেন্ট নয়, তাই `docs/`-এ নয়, এখানে।
 *
 * তিনটা পথের (লোকাল · রিমোট · গ্লোবাল) কোড একই; পার্থক্য শুধু এই ফাইল,
 * `next.config.ts`-এর basePath আর `docs/` + `patterns/`-এর কনটেন্ট।
 */
export const SITE: {
  title: string;
  short: string;
  emoji: string;
  description: string;
  storagePrefix: string;
  suggestedStart: string | null;
  showMustDo: boolean;
  noteLabels: { solution: string; stuck: string };
} = {
  title: "রিমোট কোম্পানির DSA",
  short: "রিমোট DSA",
  emoji: "🛰️",
  description:
    "রিমোট কোম্পানির ভেটিং স্ক্রিন আর live pairing-এর জন্য ৫০টা প্রবলেম — লোকালের ৩০টা ঘড়ি ধরে, নতুন ২০টা, ইংরেজিতে, learning to learn-এর নীতিতে।",
  /** localStorage key-এর prefix — তিন পথের progress আলাদা থাকে */
  storagePrefix: "rdsa",
  /** এই পথ কবে শুরু হবে জানা নেই — প্রস্তাব নেই, আজকের তারিখ দেখায় */
  suggestedStart: null,
  /** 🔥 Must-do ট্যাগ FAANG-এর frequency থেকে — শুধু গ্লোবাল পথে দেখায় */
  showMustDo: false,
  noteLabels: {
    solution: "My solution — মূল আইডিয়া ২–৩ লাইনে, ইংরেজিতে",
    stuck: "Where I got stuck — কোন trap, ইংরেজিতে",
  },
};
