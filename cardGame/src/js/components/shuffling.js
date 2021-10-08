class Shuffling {
  constructor() {
    this.data = ["mura", "gary", "binky", "licat", "javadog"];
    this.parent = document.querySelector(".list-card");
  }

  setup() {
    this.ShufflingCards();
  }

  ShufflingCards() {
    let doubleData = this.data.concat(this.data);

    while (doubleData.length > 0) {
      const randomNum = Math.floor(Math.random() * doubleData.length);
      if (doubleData[randomNum]) {
        this.generateCards(doubleData[randomNum]);
        doubleData.splice(randomNum, 1);
      }
    }
  }

  generateCards(item) {
    const element = document.createElement("li");
    element.classList.add(item);
    element.dataset.name = item;
    this.parent.appendChild(element);
  }
}

export default Shuffling;
