var purchase_btn = document.getElementById("purchase_btn");
var remove_btn = document.getElementById("remove_btn");
var countValue = document.getElementById("count");
var cartValue = 0;

function increaseCart() {
    cartValue += 1;
    countValue.innerHTML = cartValue;
    localStorage.setItem("cartDetails", cartValue)
}

function decreaseCart() {
    countValue.style.display = "none";
}

purchase_btn.addEventListener("click", increaseCart);
remove_btn.addEventListener("click", decreaseCart);
