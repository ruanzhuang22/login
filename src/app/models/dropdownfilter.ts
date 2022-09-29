export class DropdownOption {
  private _label: string = null;
  private _value: string;
  private _isCheck: boolean;
  constructor(label: string, value: string, isCheck: boolean) {
    this._label = label;
    this._value = value;
    this._isCheck = isCheck;
  }
  public set Label(label: string) {
    this._label = label;
  }
  public get Label(): string {
    return this._label;
  }

  public set Value(value: string) {
    this._value = value;
  }
  public get Value(): string {
    return this._value;
  }

  public set IsChecked(isCheck: boolean) {
    this._isCheck = isCheck;
  }
  public get IsChecked(): boolean {
    return this._isCheck;
  }
}
