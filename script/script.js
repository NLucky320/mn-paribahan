const allSeatButton = document.querySelectorAll(".add-btn");
let seatCount = 0;
let seat = 40;
for (const seatButton of allSeatButton) {
  seatButton.addEventListener("click", function (event) {
    if (seatCount < 4) {
      seat = seat - 1;
      seatCount = seatCount + 1;
      totalCost(
        "total-price",
        document.getElementById("ticket-price").innerText
      );
      const price = document.getElementById("ticket-price").innerText;
      const seatName = event.target.innerText;
      const selectedSeatContainer = document.getElementById(
        "selected-seat-container"
      );
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerText = seatName;
      const p2 = document.createElement("p");
      p2.innerText = "Economy";
      const p3 = document.createElement("p");
      p3.innerText = price;

      li.appendChild(p);
      li.appendChild(p2);
      li.appendChild(p3);

      li.className =
        "flex justify-between w-full text-[#03071299] font-normal text-base text-left mb-4";
      selectedSeatContainer.appendChild(li);
      event.target.classList.add("pointer-events-none");
      event.target.classList.add("bg-[#1DD100]");
      event.target.classList.add("text-white");
    } else {
      alert("You cannot buy more seats");
    }
    setElementValueById("available-seat", seat);
    setElementValueById("seat-count", seatCount);

    const bookedSeat = parseInt(
      document.getElementById("seat-count").innerText
    );
    console.log("hi", bookedSeat);
    if (bookedSeat > 3) {
      document.getElementById("discount-btn").removeAttribute("disabled");
    } else {
      document.getElementById("discount-btn").setAttribute("disabled", true);
    }
    grandTotal();

    const phoneNumber = document.getElementById("phone-number");
    phoneNumber.addEventListener("keyup", function (event) {
      const nextButton = document.getElementById("next-btn");
      const number = event.target.value.toString().length;
      if (bookedSeat > 0 && number > 0) {
        nextButton.removeAttribute("disabled");
      } else {
        nextButton.removeAttribute("disabled", true);
      }
    });
  });
}

function grandTotal() {
  const totalCost = document.getElementById("total-price").innerText;
  const convertedTotalCost = parseInt(totalCost);
  setElementValueById("grand-total", convertedTotalCost);
}
