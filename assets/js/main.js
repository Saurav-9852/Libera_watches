/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== SHOW CART ===============*/
const cart = document.getElementById("cart"),
  cartShop = document.getElementById("cart-shop"),
  cartClose = document.getElementById("cart-close");

/*===== CART SHOW =====*/
/* Validate if constant exists */
if (cartShop) {
  cartShop.addEventListener("click", () => {
    cart.classList.add("show-cart");
  });
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if (cartClose) {
  cartClose.addEventListener("click", () => {
    cart.classList.remove("show-cart");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== TESTIMONIAL SWIPER ===============*/
let testimonialSwiper = new Swiper(".testimonial-swiper", {
  spaceBetween: 30,
  loop: "true",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 24,
  loop: "true",

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
// ... Existing code ...
const cartEmptyMessage = document.getElementById("cart-empty-message");
const updateCartVisibility = () => {
  if (cartItems.childElementCount === 0) {
    cartEmptyMessage.style.display = "block";
  } else {
    cartEmptyMessage.style.display = "none";
  }
};

const updateItemCount = () => {
  const cartItems = document.querySelectorAll(".cart-item");
  let itemCount = 0;

  cartItems.forEach((item) => {
    const quantityElement = item.querySelector(".cart__amount-quantity");
    const quantity = parseInt(quantityElement.innerText);
    itemCount += quantity;
  });

  const itemCountElement = document.getElementById("item-count");
  itemCountElement.innerText = `Items: ${itemCount}`;
};

/*=============== UPDATE CART TOTAL ===============*/
const updateCartTotal = () => {
  const cartItems = document.querySelectorAll(".cart-item");
  let total = 0;

  cartItems.forEach((item) => {
    const priceString = item.querySelector(".cart__price").innerText;
    const price = parseFloat(priceString.replace("Rs ", "").replace(",", ""));
    
    const quantityElement = item.querySelector(".cart__amount-number");
    const quantity = parseInt(quantityElement.innerText);
    
    total += price * quantity;
  });

  const cartTotal = document.getElementById("cart-total");
  cartTotal.innerText = `Total: Rs ${total.toFixed(2)}`;
};
/*=============== ADD TO CART ===============*/
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartItems = document.getElementById("cart-items");

const addToCart = (event) => {
  const product = event.target.closest(".product");
  const productName = product.querySelector("h3").innerText;
  const productPrice = product.querySelector("span").innerText;

  // Create a new cart item element
  const cartItem = document.createElement("article");
  cartItem.classList.add("cart-item", "cart__card");
  cartItem.innerHTML = `
    <div class="cart__details">
      <h3 class="cart__title">${productName}</h3>
      <span class="cart__price">${productPrice}</span>

      <div class="cart__amount">
        <div class="cart__amount-content">
          <span class="cart__amount-box decrease-quantity">
            <i class='bx bx-minus'></i>
          </span>

          <span class="cart__amount-number cart__amount-quantity">1</span>

          <span class="cart__amount-box increase-quantity">
            <i class='bx bx-plus'></i>
          </span>
        </div>

        <i class='bx bx-trash-alt cart__amount-trash remove-from-cart'></i>
      </div>
    </div>
  `;

  // Add the cart item to the cart
  cartItems.appendChild(cartItem);

  // Add event listener to remove button
  const removeButton = cartItem.querySelector(".remove-from-cart");
  removeButton.addEventListener("click", removeFromCart);

  // Add event listener to decrease quantity button
  const decreaseButton = cartItem.querySelector(".decrease-quantity");
  decreaseButton.addEventListener("click", decreaseQuantity);

  // Add event listener to increase quantity button
  const increaseButton = cartItem.querySelector(".increase-quantity");
  increaseButton.addEventListener("click", increaseQuantity);

  // Update cart total
  updateCartTotal();
  updateItemCount();
  updateCartVisibility();
};

addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

/*=============== REMOVE FROM CART ===============*/
const removeFromCart = (event) => {
  const removeButton = event.target;
  const cartItem = removeButton.closest(".cart-item");

  // Remove the cart item from the cart
  cartItem.remove();

  // Update cart total
  updateCartTotal();
  updateItemCount();
  updateCartVisibility();
};

/*=============== DECREASE QUANTITY ===============*/
const decreaseQuantity = (event) => {
  const decreaseButton = event.target;
  const quantityElement = decreaseButton.nextElementSibling;
  let quantity = parseInt(quantityElement.innerText);

  if (quantity > 1) {
    quantity--;
    quantityElement.innerText = quantity;

    // Update cart total and item count
    updateItemCount();
    updateCartTotal();
  }
};

/*=============== INCREASE QUANTITY ===============*/
const increaseQuantity = (event) => {
  const increaseButton = event.target;
  const quantityElement = increaseButton.previousElementSibling;
  let quantity = parseInt(quantityElement.innerText);

  quantity++;
  quantityElement.innerText = quantity;

  // Update cart total and item count
  updateItemCount();
  updateCartTotal();
};

updateCartVisibility();