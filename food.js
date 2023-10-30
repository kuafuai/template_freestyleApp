export default class Food {
  constructor(scene) {
    this.scene = scene;
    this.position = new THREE.Vector3();
    this.create();
  }

  // Create initial food position
  create() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const food = new THREE.Mesh(geometry, material);
    this.position.set(Math.floor(Math.random() * 20) - 10, Math.floor(Math.random() * 20) - 10, 0);
    food.position.copy(this.position);
    this.scene.add(food);
  }

  // Update food position
  update() {
    const food = this.scene.children.find(child => child instanceof THREE.Mesh && child.material.color.getHex() === 0xff0000);
    if (food) {
      this.scene.remove(food);
      this.create();
    }
  }
}
