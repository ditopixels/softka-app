const d = document

export default function Navigator(){
    const $navigator = d.querySelector('.navegator')
    const $btnNavigator = d.getElementById('btn-menu')
    const $dropdown = d.querySelectorAll('.navegator .dropdown')

    $dropdown.forEach((el)=>{
        const $categorie = el.querySelector('.categorie')
        const $subCategories = el.querySelector('.sub-categories')
        const $subCategoriesLi = $subCategories.querySelectorAll('li')
        $categorie.addEventListener('click',()=>{
            $subCategories.classList.toggle(`active-${$subCategoriesLi.length}`)
            $subCategories.previousElementSibling.classList.toggle('activeArrow')
        })

        $subCategoriesLi.forEach((el)=>{
            if(el.children[0].classList.value.includes('active')){
                $subCategories.classList.add(`active-${$subCategoriesLi.length}`)
                $subCategories.previousElementSibling.classList.add('activeArrow')
            }
        })
    })

    $btnNavigator.onclick = ()=>{
        $navigator.classList.toggle('active')
    }
}