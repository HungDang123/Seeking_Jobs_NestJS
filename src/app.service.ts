import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(a: number, b: number): string {
    const c: number = a + b;
    return 'Hello World! ' + c;
  }
}
