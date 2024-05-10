const ratingSection = document.querySelector('.rating_section');
const thankSection = document.querySelector('.thankYou_section');
const submitBtn =  document.querySelector('.btn');
const rate =  document.querySelector('.rate');
const rating = document.querySelectorAll('.rating');

submitBtn.addEventListener("click", () => {
  thankSection.classList.remove("hidden");
  ratingSection.style.display = "none";
});

// againBtn.addEventListener("click", () => {
//     thankSection.classList.add("hidden");
//     ratingSection.style.display = "block";
//   });

rating.forEach((rates) => {
  rates.addEventListener("click", () => {
   rate.innerHTML = rates.innerHTML;
  });
});

function toggleCheckedState(item) {
  item.classList.toggle('checked');

  const checkedItems = [];
  if (!checkedItems.includes(item)) {
    // If not, add the 'checked' class
    item.classList.add('checked');

     // Add the item to the array of checked items
     checkedItems.push(item);
  };

};

