export default class Snake {
  constructor(scene) {
    this.scene = scene;
    this.direction = 'right';
    this.body = [];
    this.create();
  }

  // Create initial snake body
  create() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const head = new THREE.Mesh(geometry, material);
    head.position.set(0, 0, 0);
    this.body.push(head);
    this.scene.add(head);
  }

  // Update snake position based on direction
  update() {
    const head = this.body[0];
    const newPosition = head.position.clone();
    switch (this.direction) {
      case 'up':
        newPosition.y += 1;
        break;
      case 'down':
        newPosition.y -= 1;
        break;
      case 'left':
        newPosition.x -= 1;
        break;
      case 'right':
        newPosition.x += 1;
        break;
    }
    this.body.pop();
    const newHead = new THREE.Mesh(head.geometry, head.material);
    newHead.position.copy(newPosition);
    this.body.unshift(newHead);
    this.scene.add(newHead);
  }

  // Check if snake has collided with itself
  selfCollision() {
    const head = this.body[0];
    for (let i = 1; i < this.body.length; i++) {
      if (head.position.equals(this.body[i].position)) {
        return true;
      }
    }
    return false;
  }

  // Check if snake has collided with the wall
  wallCollision() {
    const head = this.body[0];
    const x = head.position.x;
    const y = head.position.y;
    if (x < -10 || x > 10 || y < -10 || y > 10) {
      return true;
    }
    return false;
  }
}
