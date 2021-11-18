const d = document;

export default ()=>{
    const $inputs = d.querySelectorAll('[inputAnimated] input');
    $inputs.forEach(input=>{
        const inputParent =input.parentElement
        if(!input.value.trim()==0) inputParent.classList.add('focus')
        input.addEventListener('focus',()=>{
            inputParent.classList.add('focus')
        })
        input.addEventListener('blur',()=>{
            input.value = input.value.trim();
            if(input.value.trim() == 0)inputParent.classList.remove('focus')
        })
        input.addEventListener('change',()=>{
            input.value = input.value.trim();
            if(input.value == 0)inputParent.classList.remove('focus')
            else inputParent.classList.add('focus')
        })
    })
}