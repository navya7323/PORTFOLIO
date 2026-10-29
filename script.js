(function(){
  var r=document.documentElement,b=document.getElementById('theme');
  try{var s=localStorage.getItem('theme');if(s)r.setAttribute('data-theme',s)}catch(e){}
  b.addEventListener('click',function(){
    var dark=r.getAttribute('data-theme')==='dark'||(!r.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme: dark)').matches);
    var n=dark?'light':'dark';r.setAttribute('data-theme',n);
    try{localStorage.setItem('theme',n)}catch(e){}
  });
})();
