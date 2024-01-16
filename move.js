function move(element) {
  element.style.position = "fixed";

  function moveToCoordinates(left, bottom) {
    element.style.left = left + "px";
    element.style.bottom = bottom + "px";
  }

  function moveWithArrowKeys(left, bottom, onDirectionChange) {
    let direction = null;
    let x = left;
    let y = bottom;

    element.style.left = x + "px";
    element.style.bottom = y + "px";

    function moveCharacter() {
      if (direction === "up") {
        y = y + 1;
      }
      if (direction === "down") {
        y = y - 1;
      }
      if (direction === "left") {
        x = x - 1;
      }
      if (direction === "right") {
        x = x + 1;
      }

      element.style.left = x + "px";
      element.style.bottom = y + "px";
    }

    setInterval(moveCharacter, 1);

    document.addEventListener("keydown", function (e) {
      if (e.repeat) return;

      if (e.key === "ArrowUp") {
        direction = "up";
      }
      if (e.key === "ArrowDown") {
        direction = "down";
      }
      if (e.key === "ArrowLeft") {
        direction = "left";
      }
      if (e.key === "ArrowRight") {
        direction = "right";
      }
      onDirectionChange(direction);
    });

    document.addEventListener("keyup", function (e) {
      direction = null;
      onDirectionChange(direction);
    });
  }

  return {
    to: moveToCoordinates,
    withArrowKeys: moveWithArrowKeys,
  };
}
