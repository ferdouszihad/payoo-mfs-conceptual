console.log("utility file Added");
//১।  চেক করে দেখা যে utilities file add হয়েছে কিনা। এটা সবার ওপরে কেন লিংক করতে হবে সেটা ও বুঝিয়ে দেইয়ার চেষ্টা করবো।
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
//১। এই ফাংশন ক্রিয়েট করে আমরা function reusability নিয়ে আলোচনা করবো।  এবং আমাদের প্রিভিয়াস document.getElementById  কে রিপ্লেস করে ফেলবো।  এবং ফাংশন টা আসলে ই কিভাবে কাজ করছে সেটা কে বোঝার চেষ্টা করবো
