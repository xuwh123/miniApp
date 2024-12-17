export class ResponseModel<T> {
  constructor(
    public code: number = 0,
    public msg: string = '操作成功',
    public data?: T,
  ) {}

  static success<T>(data?: T, msg: string = '操作成功'): ResponseModel<T> {
    return new ResponseModel(0, msg, data);
  }

  static error(msg: string = '操作失败', code: number = -1): ResponseModel<null> {
    return new ResponseModel(code, msg);
  }
}