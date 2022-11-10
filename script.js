const button_random_apprenant = document.querySelector("#random_apprenant")
const button_init_state = "Random Apprenant"
const list_apprenant = ["Delphine", "Socunthy", "Laure", "Sandrine", "Arnaud", "Alexandre", "Jean-François", "Jean-Christophe", "Jean-Sébastien", "Terry", "Jessie", "Sébastien", "Pierre", "Kévin", "Johann", "Stéphane"]


function random_apprenant(){
    button_random_apprenant.setAttribute("value", list_apprenant[Math.floor(Math.random() * list_apprenant.length)]);
    let timer_id = setTimeout(()=>{
        button_random_apprenant.setAttribute("value", button_init_state);
        clearTimeout(timer_id)
    }, 3000)
}
button_random_apprenant.addEventListener("click",random_apprenant);