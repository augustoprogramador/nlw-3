//create map
const map = L.map('mapid').setView([-27.222633, -49.6455874], 16);

// create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)

})

/* adicionar o campo de fotos */
function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images')

    // pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true) // true - clona todo o conteúdo do objeto HTML, false - copia apenas a tag

    // verificar se o campo está vazio, se sim, não adicionar ao container de fotos
    const input = newFieldContainer.children[0]

    if (input.value == '') {
        return
    }

    // limpar o campo antes de adicionar ao container de imagens
    console.log(newFieldContainer)
    input.value = ''

    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)

}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length < 2) {
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove()
}

// troca do sim e nao
function toggleSelect(event) {

    // retirar a class .active (dos botões)
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })

    // colocar a class .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualziar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
}

function validate(event) {
    // validar se lat e lng foram preenchidos
    const needsLatAndLng = false
    if (needsLatAndLng) {
        event.preventDefault()
        alert('Aponte o endereço do orfanato no mapa!')
    }
}