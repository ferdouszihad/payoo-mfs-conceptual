console.log("utility file Added");
//১।  চেক করে দেখা যে utilities file add হয়েছে কিনা। এটা সবার ওপরে কেন লিংক করতে হবে সেটা ও বুঝিয়ে দেইয়ার চেষ্টা করবো।
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
//১। এই ফাংশন ক্রিয়েট করে আমরা function reusability নিয়ে আলোচনা করবো।  এবং আমাদের প্রিভিয়াস document.getElementById  কে রিপ্লেস করে ফেলবো।  এবং ফাংশন টা আসলে ই কিভাবে কাজ করছে সেটা কে বোঝার চেষ্টা করবো

//২-৩। এবারে আমরা ইনপুট এবং ইলিমেন্ট  এর আইডি থেকে সরাসরি  ভ্যালু নেয়ার জন্য ৩ টা ফাংশন ক্রিয়েট করবো।
function getInputNumber(id) {
  const element = getElement(id);
  //উপরের ফাংশন টা ই আবার আমরা রি-ইউজ করছি। এটা বুঝিয়ে দেবো।  কন্সোল করে দেখাবো।
  const inputValueString = element.value;
  const inputValueNumber = parseFloat(element.value);
  return inputValueNumber;
}
function getInputString(id) {
  const element = getElement(id);
  //উপরের ফাংশন টা ই আবার আমরা রি-ইউজ করছি। এটা বুঝিয়ে দেবো।  কন্সোল করে দেখাবো।
  const inputValueString = element.value;
  return inputValueString;
}

function getElementNumber(id) {
  const element = getElement(id);
  //উপরের ফাংশন টা ই আবার আমরা রি-ইউজ করছি। এটা বুঝিয়ে দেবো।  কন্সোল করে দেখাবো।
  const elementValueString = element.innerText;
  const elementValueNumber = parseFloat(elementValueString);
  return elementValueNumber;
}
//২-৩। এবারে এই ফাংশন গুলো  কে আমরা Add Money  তে  রিপ্লেস করব।

//৪। এবারে আমরা সেইম জিনিস টা রিক্যাপ করবো।  এবং ক্যাশ আউট ফিচার এ এটাকে আবার করে দেখাবো।

//।৫। এবারে Transaction feature add করবো আমরা. প্রথমে বাটন ক্রিয়েট করবো এরপর কন্টেইনার  । check home.html
//৫/ এবারে আমরা স্টুডেন্ট দের কে বোঝানোর চেষ্টা করবো  যে একটা জায়গায় অনেক গুলো বাটন এবং অনেক গুলো ফিচার আছে ।  ধরো কোন একটা বাটনে ক্লিক করলে শুধু ওই ফিচার টা ই শো হবে তাহলে কি করব।
// প্রথম কাজ সকল ফিচার হাইড করে ফেলবো
// এরপর যে খানে ক্লিক করা হইসে সেটা আমরা শো করবো। এবং একটা কমন ফাংশন ক্রিয়েট করবো।

function showFeature(featureId) {
  //প্রথমে সকল ফিচার হাইড করো
  getElement("add-money-form").classList.add("hidden");
  getElement("cash-out-form").classList.add("hidden");
  getElement("history-container").classList.add("hidden");
  // যাকে শো করতে হবে তাকে শো করো
  getElement(featureId).classList.remove("hidden");
}
//৫/ এবারে feature.js এ addmoney ,cashout এ আমরা এই ফাংশন ইমপ্লিমেন্ট করে দেখাবো।
//৫/ এটা করার পাশাপাশি  home.html ২০ নাম্বার লাইনে  এ justify-start py-10 এড করে দিবো।

//৬ ট্রানজেকশন কিভাবে কাজ করবে সেই বিষয় লজিক বিল্ডিং বোঝানোর চেষ্টা করবো ।
// প্রথমে ট্র্যানজেকশন রাখার জন্যে একটা ডিভ ক্রিয়েট করে নিবো।

//৬ যখন এড মানি করা হবে তখন এড মানি সাকসেস্ফুল হলে আমরা একটা পি ট্যাগ ক্রিয়েট করবো। সেখানে টেক্সক্সট  এবং টাইম সহ স্ট্রিং ক্রিয়েট করবো। এবং  ট্রাঞ্জেকশনে সেটা কে এপেন্ড করে দিবো।
// check addmoney.js line-40

//৭।  এবারে স্টুডেন্ট দের কে টেমপ্লেট লিটারেল জিনিস টা সম্পর্কে আইডিয়া দিবেন  । এবং  addmoney.js line-40 এর সম্পুর্ন কোড টা template string দিয়ে ইমপ্লিমেন্ট করে দেখাবেন। student রা dom phase এ  template literal শিখতে পারলে তারা অনেক ডাইনামিক প্রোজেক্ট করতে পারবে।

// code  change on both addmoney and cashout for innerHTML .

//৮ এবারে সম্পুর্ন কাজ টা আবার রিক্যাপ করে দেখাবেন । এবং cashout Feature এ বাকী কাজ গুলো কে ইমপ্লিমেন্ট করবেন। এবং cashout যাতে মুল ব্যালেন্স এর থেকে বেশি না করতে পারে  সেটার জন্য আমরা  ভ্যালিডেশন করবো। check cashout.js line  - 18

//৯ এবারে আমরা ইনপুট ভ্যালু নাম্বার কিনা তা চেক করার জন্য নাম্বার ইনপুট গুলি তে কোড লিখবো।  এবং নাম্বার না হলে এলার্ট দিয়ে রিটার্ন করিয়ে দেবো।
//এর পাশাপাশি কিছু এরোর নিয়ে কথা বলবেন
// - TypeError/segmentation Error : Cannot read properties of undefined reading x
// Syntax error :  Variable is not defined
// - TypeError : Assignment to const variable
// - TypeError :  is not a function

//10/ মডিউল সামারি তে স্টুডেন্ট দের কে রিচার্জ ফাংশনালিটি ইমপ্লিমেন্ট করা ,  পে বিল ফাংশনালিটি ইমপ্লিমেন্ট করার টাস্ক বুঝিয়ে দিবেন। । তারা নো মডিউল ডে তে এটা করে দেখবে।
