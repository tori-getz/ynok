declare namespace JSX {
  interface IntrinsicElements {
    div: { id?: string; className?: string; [key: string]: any };
    span: { [key: string]: any };
    button: { onClick?: () => void; [key: string]: any };
    [elemName: string]: any; // Для кастомных элементов
  }

  interface ElementChildrenAttribute {
    children: {}; // Указывает, что `children` являются допустимым атрибутом
  }

  // Если вы хотите поддерживать кастомные компоненты:
  type Element = any;
}
