export default {
  inserted(el) {
    console.log(el)

    const images = el.querySelectorAll('img')

    images.forEach(image => {
      image.addEventListener('click', e => {
        document.body.insertAdjacentHTML('beforeend', `
        <div class="lightbox">
          <button class="close" title="close"></button>
          <img src=${image.src}>
        </div>`)

        const lightbox = document.querySelector('.lightbox')

        lightbox.addEventListener('click', e => {
          lightbox.remove();
        })
      })
    })
  }
}
