
// slider til spilletid//
const spilletidSlider = document.querySelector("#spilletid");
const spilletidValue = document.querySelector("#spilletid-value");

//Når slideres flyttes, opdateres værdien i spilletidValue
spilletidSlider.addEventListener("input", function() {
  const valgtTid = Number(spilletidSlider.value);
  spilletidValue.textContent = valgtTid + "min";

});


// drop-down//
const sortering = document.querySelector("#sortering");
sortering.addEventListener("change", function() {
  const sorteredeSpil = [...games];
  if (sortering.value === "titel") {
    sorteredeSpil.sort(function(a, b) {
      return a.title.localeCompare(b.title);
    });
    } else if (sortering.value === "spilletid") {
      sorteredeSpil.sort(function(a, b) {
        return a.maxTime - b.maxTime;
      });
    }
  console.log(sorteredeSpil);
});