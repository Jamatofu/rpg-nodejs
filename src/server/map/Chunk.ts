
/**
 * A chunk is a piece of a map with a fixed width and height
 */
class Chunk {
  private readonly X_SIZE: number = 128;
  private readonly Y_SIZE: number = 128;

  public chunk: number[][] = [[]];

  constructor() {

  }

  public generate() {
    for(let i = 0; i < this.X_SIZE; i++) {
      this.chunk[i] = [];
      for(let j = 0; j < this.Y_SIZE; j++) {
        this.chunk[i].push(0);
      }
    }

    console.log(this.chunk);
  }

  public getTile(x: number, y: number): number {
    return this.chunk[x][y];
  }
}
