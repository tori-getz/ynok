export class BaseEvent<T> {
  public constructor(
    public eventName: string,
    public payload: T,
  ) {}
}
