import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "navUserName"
})
export class NavUserNamePipe implements PipeTransform {
  transform(value: String, ...args: any[]): any {
    console.log("pipe");
    return value.toLocaleUpperCase();
  }
}
