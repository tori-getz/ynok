type TProps = Record<string, any> | null;

export interface IDocumentNode {
  tag: string;
  TProps: TProps;
  children: IDocumentNode[];
}

export class DOM {
  // Метод для создания элемента в виде объекта (не DOM-элемента)
  public static createElement(
    tag: any,
    TProps: TProps,
    ...children: any[]
  ): IDocumentNode {
    // Если `tag` — это функция (например, компонент), вызываем её
    if (typeof tag === 'function') {
      return tag({ ...TProps, children });
    }

    // Если `tag` — это уже объект, возвращаем его
    if (tag && typeof tag === 'object' && 'tag' in tag) {
      return tag;
    }

    // Убедимся, что `tag` — это строка
    if (typeof tag !== 'string') {
      throw new Error(`Invalid tag name: ${tag}`);
    }

    // Возвращаем объект, представляющий элемент
    return {
      tag,
      TProps,
      children: children.map((child) => {
        if (typeof child === 'string') {
          return { tag: 'text', TProps: {}, children: [child] };
        }
        return child;
      }),
    };
  }

  // Преобразуем объектное дерево в строку (простой рендер)
  public static renderToString(IDocumentNode: IDocumentNode): string {
    if (IDocumentNode.tag === 'text') {
      return IDocumentNode.children[0] as unknown as string;
    }

    const TPropsString = Object.entries(IDocumentNode.TProps || {})
      .map(([key, value]) => {
        if (value === undefined || value === null) return '';
        return ` ${key}="${value}"`;
      })
      .join('');

    const childrenString = IDocumentNode.children.map((child) => DOM.renderToString(child)).join('');

    return `<${IDocumentNode.tag}${TPropsString}>${childrenString}</${IDocumentNode.tag}>`;
  }
}
