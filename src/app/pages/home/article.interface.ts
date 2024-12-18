export type ArticleProps = {
  id: string;
  photoCover: string;
  title: string;
  description: string;
  bigCard: boolean;
}

export class Article {
  private _id: string;
  private _photoCover: string;
  private _title: string;
  private _description: string;
  private _bigCard: boolean;
  constructor({id, photoCover, title, description, bigCard}: ArticleProps) {
    this._id = id;
    this._photoCover = photoCover;
    this._title = title;
    this._description = description;
    this._bigCard = bigCard;
  }

  public get id(): string {
    return this._id;
  }

  public get photoCover(): string {
    return this._photoCover;
  }
  public get title(): string {
    return this._title;
  }
  public get description(): string {
    return this._description;
  }
  public get bigCard(): boolean {
    return this._bigCard;
  }
}
