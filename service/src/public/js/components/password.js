const d = document

export default function password(){
    const $inputPass = d.querySelectorAll('input[type="password"]')

    $inputPass.forEach((el)=>{
        let i=1;
        const $eye = el.nextElementSibling.nextElementSibling 
        $eye.addEventListener('click',()=>{
            if(i){
                console.log(i);
                $eye.setAttribute('class', 'fas fa-eye-slash eye')
                el.setAttribute('type', 'text')
                i=0
            }else{
                $eye.setAttribute('class', 'fas fa-eye eye')
                el.setAttribute('type', 'password')
                i=1
            }            
        })
    })

}



/*let cout = 0;

eye.addEventListener('click', (e) => {


})*/