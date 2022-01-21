let arr: number[] = [];
let arr1: Array<number> = [];
let arr2: [number, string] = [11, "22"]; //元组类型
//枚举类型
enum Status {
  Success = 200,
  NotFound = 404,
  Error = 500,
}
console.log(Status.Success, Status.NotFound, Status.Error);
let xxl_status: number = 0;
if (xxl_status == Status.Success) {
}
