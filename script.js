const dragable_items = document.querySelectorAll(".image");
for (let item of dragable_items) {
  item.addEventListener("dragstart", (eventDetails) => {
    eventDetails.dataTransfer.setData("text", eventDetails.target.id);
    item.style.opacity = "0.5";
  });
  item.addEventListener("dragend", (eventDetails) => {
    item.style.opacity = "1";
  });

  item.addEventListener("dragover", (eventDetails) => {
    eventDetails.preventDefault();
  });
  item.addEventListener("dragenter", (eventDetails) => {
    eventDetails.preventDefault();
  });
  item.addEventListener("drop", (eventDetails) => {
    eventDetails.preventDefault();
    const startingId = eventDetails.dataTransfer.getData("text");
    const targetId = eventDetails.target.id;
    const targetIdDoc = document.getElementById(eventDetails.target.id);
    const startingIdDoc = document.getElementById(
      eventDetails.dataTransfer.getData("text")
    );
    const tempText = targetIdDoc.innerText;
    targetIdDoc.innerText = startingIdDoc.innerText;
    startingIdDoc.innerText = tempText;
    targetIdDoc.id = startingId;
    startingIdDoc.id = targetId;
  });
}
