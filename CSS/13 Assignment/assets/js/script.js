document.getElementById("POS").addEventListener("click",function () {
    document.getElementById("item_section").style.display="none";
    document.getElementById("customer_section").style.display="none";
    document.getElementById("home").style.display="block";
})
document.getElementById("home_a").addEventListener("click",function () {
    document.getElementById("item_section").style.display="none";
    document.getElementById("customer_section").style.display="none";
    document.getElementById("home").style.display="block";
})
document.getElementById("Item_a").addEventListener("click",function () {
    document.getElementById("item_section").style.display="block";
    document.getElementById("home").style.display="none";
    document.getElementById("customer_section").style.display="none";
})
document.getElementById("Customer_a").addEventListener("click",function () {
    document.getElementById("item_section").style.display="none";
    document.getElementById("home").style.display="none";
    document.getElementById("customer_section").style.display="block";
})
