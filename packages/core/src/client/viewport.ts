export class Viewport {
  public static instance: Viewport;

  private canvas: HTMLCanvasElement | null = document.querySelector('.viewport');

  public static getInstance(): Viewport {
    if (!this.instance) {
      this.instance = new Viewport();
    }

    return this.instance;
  }

  public listenSize() {
    this.canvas?.setAttribute('width', `${window.innerWidth}px`);
    this.canvas?.setAttribute('height', `${window.innerHeight}px`);
    
    window.addEventListener('resize', () => {
      this.canvas?.setAttribute('width', `${window.innerWidth}px`);
      this.canvas?.setAttribute('height', `${window.innerHeight}px`);
    });
  }

  public render(nodeString: string): void {
    if (!this.canvas) return; // Проверяем, существует ли канвас

    const ctx = this.canvas.getContext('2d');
    if (!ctx) return; // Проверяем, поддерживает ли канвас 2D контекст

    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };

    img.src = nodeString; // Устанавливаем источник изображения
  }
}
