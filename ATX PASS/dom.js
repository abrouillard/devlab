//tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
  // Remove active class from all li
  const c = tabs.children;
  for (let i = 0; i < c.length; i++) {
      c[i].classList.remove('active');
  }
  // Add active class to clicked item
  e.target.classList.add('active');
  
    if(e.target.tagName == "LI"){
        const targetPanel = document.querySelector(e.target.dataset.info);
        panels.forEach(function(panel){
            if (panel == targetPanel) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })  
    }
});