
/*-----------------EFECTO EN IMAGENES DE LAS PROMOCIONES----------------------*/
const images = document.getElementsByClassName("carousel-image");
let currentIndex = 0;

function showImage(index) {
  if (index < 0) {
    currentIndex = images.length - 1;
  } else if (index >= images.length) {
    currentIndex = 0;
  }

  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("active");
  }

  images[currentIndex].classList.add("active");
}

function changeImage() {
  showImage(currentIndex);
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  setTimeout(changeImage, 3000);
}

changeImage();
/*-----------------------------------------------------*/


/*-----------------EFECTO EN PRODUCTOS DESTACADOS----------------------*/

const productImages = document.querySelectorAll('#inicio li img');

productImages.forEach((image) => {
  image.addEventListener('mouseenter', () => {
    image.style.opacity = '0.8'; // Cambia la opacidad al pasar el mouse por encima
    image.style.transform = 'scale(1.5)'; // Aplica un efecto de escala
  });

  image.addEventListener('mouseleave', () => {
    image.style.opacity = '1'; // Restaura la opacidad al salir del mouse
    image.style.transform = 'scale(1)'; // Restaura la escala
  });
});
/*-----------------------------------------------------*/
const productsContainer = document.querySelector('.product-container');
const products = Array.from(productsContainer.querySelectorAll('.product'));
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const numVisibleProducts = 5;
let startIndex = 0;

function showVisibleProducts() {
  productsContainer.innerHTML = '';

  const visibleProducts = products.slice(startIndex, startIndex + numVisibleProducts);

  visibleProducts.forEach((product, index) => {
    const clonedProduct = product.cloneNode(true);
    clonedProduct.style.opacity = '0';
    clonedProduct.style.transition = 'opacity 0.5s';
    clonedProduct.style.transitionDelay = `${index * 100}ms`;
    productsContainer.appendChild(clonedProduct);

    setTimeout(() => {
      clonedProduct.style.opacity = '1';
    }, 10);
  });
}

function navigateProducts(direction) {
  const nextIndex = startIndex + direction * numVisibleProducts;

  if (nextIndex < 0) {
    startIndex = products.length - numVisibleProducts;
  } else if (nextIndex >= products.length) {
    startIndex = 0;
  } else {
    startIndex = nextIndex;
  }

  showVisibleProducts();
}

leftArrow.addEventListener('click', () => {
  navigateProducts(-1);
});

rightArrow.addEventListener('click', () => {
  navigateProducts(1);
});

// Cambio automático de productos
setInterval(() => {
  navigateProducts(1);
}, 4500);

// Mostrar inicialmente solo los primeros 5 productos
showVisibleProducts();








/*-----------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function() {
  const productImages = document.querySelectorAll('.product img');
  const productRectangles = document.querySelectorAll('.product');

  productImages.forEach((image) => {
    image.addEventListener('mouseover', () => {
      image.style.opacity = '0.7'; // Cambia la opacidad al pasar el mouse por encima
      image.style.transform = 'scale(1.1)'; // Aplica un efecto de escala
    });

    image.addEventListener('mouseout', () => {
      image.style.opacity = '1'; // Restaura la opacidad al salir del mouse
      image.style.transform = 'scale(1)'; // Restaura la escala
    });
  });

  productRectangles.forEach((rectangle) => {
    rectangle.style.transition = 'opacity 0.3s ease-in-out'; // Agrega una transición suave a la opacidad
  });
});
/*-----------------------------------------------------*/


/*--------------------------SNACKS---------------------------*/
const snackImages = document.querySelectorAll('#snacks .snacks-image');
let currentSnackIndex = 0;

function showCurrentSnack() {
  snackImages.forEach((snack, index) => {
    if (index === currentSnackIndex) {
      snack.classList.add('active');
    } else {
      snack.classList.remove('active');
    }
  });
}

function changeSnack() {
  currentSnackIndex++;
  if (currentSnackIndex >= snackImages.length) {
    currentSnackIndex = 0;
  }

  showCurrentSnack();

  setTimeout(changeSnack, 3500);
}

changeSnack();

/*-----------------------------------------------------*/


/*--------------------------NUEVOS PRODUCTOS ---------------------------*/
const leftArrowNew = document.querySelector('.left-arroww');
const rightArrowNew = document.querySelector('.right-arroww');
let currentIndexNew = 0;
const itemsPerPage = 5;
const productos = document.querySelectorAll('.nuevos');
const maxIndex = Math.ceil(productos.length / itemsPerPage) - 1;
let autoSlideInterval;

function showProducts() {
  const startIndex = currentIndexNew * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  for (let i = 0; i < productos.length; i++) {
    if (i >= startIndex && i < endIndex) {
      productos[i].style.opacity = '0';
      productos[i].classList.remove('oculto');
      productos[i].style.transition = 'opacity 0.6s';
      productos[i].style.transitionDelay = `${(i - startIndex) * 100}ms`;
      setTimeout(() => {
        productos[i].style.opacity = '1';
      }, 10);
    } else {
      productos[i].style.opacity = '0';
      productos[i].classList.add('oculto');
    }
  }
}

function autoSlide() {
  if (currentIndexNew < maxIndex) {
    currentIndexNew++;
  } else {
    currentIndexNew = 0;
  }
  showProducts();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(autoSlide, 5500);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

showProducts();
startAutoSlide();

leftArrowNew.addEventListener('click', () => {
  if (currentIndexNew > 0) {
    currentIndexNew--;
    showProducts();
  }
});

rightArrowNew.addEventListener('click', () => {
  if (currentIndexNew < maxIndex) {
    currentIndexNew++;
    showProducts();
  }
});

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    stopAutoSlide();
  } else {
    startAutoSlide();
  }
});


/*-----------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function() {
  const nuevosImages = document.querySelectorAll('.nuevos img');
  const nuevosRectangles = document.querySelectorAll('.nuevos');

  nuevosImages.forEach((image) => {
    image.addEventListener('mouseover', () => {
      image.style.opacity = '0.7'; // Cambia la opacidad al pasar el mouse por encima
      image.style.transform = 'scale(1.1)'; // Aplica un efecto de escala
    });

    image.addEventListener('mouseout', () => {
      image.style.opacity = '1'; // Restaura la opacidad al salir del mouse
      image.style.transform = 'scale(1)'; // Restaura la escala
    });
  });

  nuevosRectangles.forEach((rectangle) => {
    rectangle.style.transition = 'opacity 0.3s ease-in-out'; // Agrega una transición suave a la opacidad
  });
});
/*-----------------------------------------------------*/

/*----------------------------------------*/
const bienvenidaSection = document.getElementById('bienvenida');

function mostrarBienvenida() {
  bienvenidaSection.classList.add('show');
}

setTimeout(mostrarBienvenida, 500);

/*-----------------------------------------------------*/












