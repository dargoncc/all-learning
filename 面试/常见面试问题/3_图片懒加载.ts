// import vue from 'vue';

export default function vLazyLoad(el, binding) {
  // const def = await import('vxxx');
  const observer = new IntersectionObserver((entry) => {
    console.log(entry); // 数组
    if (entry[0].intersectionRatio > 0 ) {
      // 出现
      el.src = binding.value;
      observer.unobserve(el);
    }
  })
  observer.observe(el);
}
