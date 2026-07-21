---
category: Components
subtitle: 二维码
type: 数据展示
title: QRCode
tag: 15.1.0
cover: 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*cJopQrf0ncwAAAAAAAAAAAAADrJ8AQ/original'
description: 能够将文本转换生成二维码的组件，支持自定义配色和 Logo 配置。
---

## 何时使用

当需要将文本转换成为二维码时使用。

## API

### nz-qrcode

| 参数               | 说明                                                               | 类型                                        | 默认值      | 版本              |
| ------------------ | ------------------------------------------------------------------ | ------------------------------------------- | ----------- | ----------------- |
| `[nzValue]`        | 扫描后的文本                                                       | `string \| string[]`                        | -           | `string[]`:21.0.0 |
| `[nzType]`         | 渲染类型                                                           | `'canvas'\|'svg'`                           | `canvas`    | 21.0.0            |
| `[nzColor]`        | 二维码颜色                                                         | `string`                                    | `'#000000'` |
| `[nzBgColor]`      | 二维码背景颜色                                                     | `string`                                    | `'#FFFFFF'` |
| `[nzSize]`         | 二维码大小                                                         | `number`                                    | `160`       |
| `[nzPadding]`      | 二维码填充                                                         | `number`                                    | `0`         |
| `[nzIcon]`         | 二维码中 icon 地址                                                 | `string`                                    | -           |
| `[nzIconSize]`     | 二维码中 icon 大小                                                 | `number`                                    | `40`        |
| `[nzBordered]`     | 是否有边框                                                         | `boolean`                                   | `true`      |
| `[nzStatus]`       | 二维码状态                                                         | `'active'\|'expired'\|'loading'\|'scanned'` | `'active'`  |
| `[nzStatusRender]` | 自定义状态渲染器                                                   | `TemplateRef<void> \| string`               | -           |
| `[nzLevel]`        | 二维码容错等级                                                     | `'L'\|'M'\|'Q'\|'H'`                        | `'M'`       |
| `[nzBoostLevel]`   | 如果启用，自动提升纠错等级，结果的纠错级别可能会高于指定的纠错级别 | `boolean`                                   | `true`      | 21.0.0            |
| `(nzRefresh)`      | 点击"点击刷新"的回调                                               | `EventEmitter<string>`                      | -           |

## 注意

### 二维码无法识别

`nzValue` 保守的上限为 738 或更少的字符串。如果使用容错等级，`nzValue` 上限会降低。

### 关于二维码容错等级

容错等级也叫容错率，就是指二维码可以被遮挡后还能正常扫描，而这个能被遮挡的最大面积就是容错率。

通常情况下二维码分为 4 个容错等级：`L级` 可纠正约 `7%` 错误、`M级` 可纠正约 `15%` 错误、`Q级` 可纠正约 `25%` 错误、`H级`
可纠正约 `30%`
错误。并不是所有位置都可以缺损，像最明显的三个角上的方框，直接影响初始定位。中间零散的部分是内容编码，可以容忍缺损。当二维码的内容编码携带信息比较少的时候，也就是链接比较短的时候，设置不同的容错等级，生成的图片不会发生变化。

> 有关更多信息，可参阅相关资料：[https://www.qrcode.com/zh/about/error_correction](https://www.qrcode.com/zh/about/error_correction.html)

---

## 代码示例

### 具有自定义背景颜色

自定义二维码的背景颜色。

```typescript
import { Component } from '@angular/core';

import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';

@Component({
  selector: 'nz-demo-qr-code-background',
  imports: [NzQRCodeModule],
  template: `
    <nz-qrcode nzBgColor="#f6f6f6" nzColor="#ff6600" nzValue="https://ng.ant.design/" />
    <nz-qrcode nzBgColor="#f6f6f6" nzColor="#1677ff" nzValue="https://ng.ant.design/" />
  `,
  styles: `
    nz-qrcode {
      margin-right: 12px;
    }
  `
})
export class NzDemoQrCodeBackgroundComponent {}
```

### 基本

最简单的用法。

```typescript
import { Component } from '@angular/core';

import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';

@Component({
  selector: 'nz-demo-qr-code-basic',
  imports: [NzQRCodeModule],
  template: `<nz-qrcode nzValue="https://ng.ant.design/" />`
})
export class NzDemoQrCodeBasicComponent {}
```

### 自定义颜色

通过设置 `nzColor` 自定义二维码颜色。

```typescript
import { Component } from '@angular/core';

import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';

@Component({
  selector: 'nz-demo-qr-code-color',
  imports: [NzQRCodeModule],
  template: `
    <nz-qrcode nzValue="https://ng.ant.design/" nzColor="#ff6600" />
    <nz-qrcode nzValue="https://ng.ant.design/" nzColor="#1677ff" />
  `,
  styles: `
    nz-qrcode {
      margin-right: 12px;
    }
  `
})
export class NzDemoQrCodeColorComponent {}
```

### 自定义状态渲染器

可以通过 `nzStatusRender` 的值控制二维码不同状态的渲染逻辑。

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';

@Component({
  selector: 'nz-demo-qr-code-custom-status',
  imports: [NzQRCodeModule, NzIconModule],
  template: `
    <nz-qrcode nzValue="https://ng.ant.design/" nzStatusRender="NgZorro" />
    <nz-qrcode nzValue="https://ng.ant.design/" [nzStatusRender]="customTemplate" />
    <ng-template #customTemplate>
      <div>
        <nz-icon nzType="check-circle" nzTheme="outline" style="color: red" />
        success
      </div>
    </ng-template>
  `,
  styles: `
    nz-qrcode {
      margin-right: 12px;
    }
  `
})
export class NzDemoQrCodeCustomStatusComponent {}
```

### 下载二维码

实现下载二维码。

```typescript
import { Component, ViewChild, ElementRef } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';

@Component({
  selector: 'nz-demo-qr-code-download',
  imports: [NzButtonModule, NzQRCodeModule],
  template: `
    <div id="download">
      <nz-qrcode nzValue="https://ng.ant.design/" />
      <a #download></a>
      <button nz-button nzType="primary" (click)="downloadImg()">Download</button>
    </div>
  `,
  styles: `
    div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }

    nz-qrcode {
      margin-bottom: 12px;
    }
  `
})
export class NzDemoQrCodeDownloadComponent {
  @ViewChild('download', { static: false }) download!: ElementRef;

  downloadImg(): void {
    const canvas = document.getElementById('download')?.querySelector<HTMLCanvasElement>('canvas');
    if (canvas) {
      this.download.nativeElement.href = canvas.toDataURL('image/png');
      this.download.nativeElement.download = 'ng-zorro-antd';
      const event = new MouseEvent('click');
      this.download.nativeElement.dispatchEvent(event);
    }
  }
}
```

### 容错等级

通过设置 `nzLevel` 调整二维码容错。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-qr-code-error-level',
  imports: [NzQRCodeModule, NzSegmentedModule, FormsModule],
  template: `
    <nz-qrcode nzValue="https://github.com/NG-ZORRO/ng-zorro-antd/issues" [nzLevel]="errorLevel" />
    <nz-segmented [nzOptions]="options" [(ngModel)]="errorLevel" />
  `,
  styles: `
    :host {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }

    nz-qrcode {
      margin-bottom: 12px;
    }
  `
})
export class NzDemoQrCodeErrorLevelComponent {
  options: Array<'L' | 'M' | 'Q' | 'H'> = ['L', 'M', 'Q', 'H'];
  errorLevel: 'L' | 'M' | 'Q' | 'H' = 'L';
}
```

### 带 icon 的例子

带有 icon 的二维码。

```typescript
import { Component } from '@angular/core';

import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';

@Component({
  selector: 'nz-demo-qr-code-icon',
  imports: [NzQRCodeModule],
  template: `
    <nz-qrcode
      nzValue="https://ng.ant.design/"
      nzIcon="https://img.alicdn.com/imgextra/i2/O1CN01TBIkzL1Nk3IBB0DLA_!!6000000001607-2-tps-106-120.png"
      nzLevel="H"
    />
  `
})
export class NzDemoQrCodeIconComponent {}
```

### 带衬垫

自定义 QR 码的填充。

```typescript
import { Component } from '@angular/core';

import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';

@Component({
  selector: 'nz-demo-qr-code-padding',
  imports: [NzQRCodeModule],
  template: `
    <nz-qrcode [nzPadding]="2" nzValue="https://ng.ant.design/" />
    <nz-qrcode nzType="svg" [nzPadding]="2" nzValue="https://ng.ant.design/" />
  `,
  styles: `
    nz-qrcode {
      margin-right: 12px;
      padding: 0;
    }
  `
})
export class NzDemoQrCodePaddingComponent {}
```

### 不同的状态

通过 `nzStatus` 的值控制二维码的状态，提供了 `active`、`expired`、`loading`、`scanned` 四个值。

```typescript
import { Component } from '@angular/core';

import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';

@Component({
  selector: 'nz-demo-qr-code-status',
  imports: [NzQRCodeModule],
  template: `
    <nz-qrcode nzValue="https://ng.ant.design/" nzStatus="loading" />
    <nz-qrcode nzValue="https://ng.ant.design/" nzStatus="expired" (nzRefresh)="refresh($event)" />
    <nz-qrcode nzValue="https://ng.ant.design/" nzStatus="scanned" />
  `,
  styles: `
    nz-qrcode {
      margin-right: 12px;
    }
  `
})
export class NzDemoQrCodeStatusComponent {
  refresh(val: string): void {
    console.log(val);
  }
}
```

### 自定义渲染类型

通过设置 `nzType` 自定义渲染结果，提供 `canvas` 和 `svg` 两个选项。

```typescript
import { Component } from '@angular/core';

import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';

@Component({
  selector: 'nz-demo-qr-code-type',
  imports: [NzQRCodeModule],
  template: `
    <nz-qrcode nzValue="https://ng.ant.design/" />
    <nz-qrcode nzValue="https://ng.ant.design/" nzType="svg" />
  `,
  styles: `
    nz-qrcode {
      margin-right: 12px;
    }
  `
})
export class NzDemoQrCodeTypeComponent {}
```
