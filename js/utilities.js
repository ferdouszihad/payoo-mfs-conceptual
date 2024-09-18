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
