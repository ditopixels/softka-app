const d = document;

const $target = d.getElementById('targets')
d.addEventListener('DOMContentLoaded',()=>{
    setInterval(()=>{
        $target.innerHTML+='<li>Juan</li>'
    },2000)
})
