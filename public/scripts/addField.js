// procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)
// quando clicar no botão

// executar uma ação
function cloneField() {
    // duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    // pegar o field
    fields.forEach(function(field) {
        // limpar o field
        field.value = ""
    })

    // colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
