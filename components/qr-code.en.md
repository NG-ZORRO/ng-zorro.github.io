---
category: Components
type: Data Display
title: QRCode
tag: 15.1.0
cover: 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*cJopQrf0ncwAAAAAAAAAAAAADrJ8AQ/original'
description: Convert text into QR codes, and support custom color and logo.
---

## When To Use

Used when the text needs to be converted into a QR Code.

## API

### nz-qrcode

| Property           | Description                                                                                                  | Type                                        | Default     | Version           |
| ------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------- | ----------- | ----------------- |
| `[nzValue]`        | scanned text                                                                                                 | `string \| string[]`                        | -           | `string[]`:21.0.0 |
| `[nzType]`         | render type                                                                                                  | `'canvas'\|'svg'`                           | `canvas`    | 21.0.0            |
| `[nzColor]`        | QR code Color                                                                                                | `string`                                    | `'#000000'` |
| `[nzBgColor]`      | QR code background color                                                                                     | `string`                                    | `'#FFFFFF'` |
| `[nzSize]`         | QR code Size                                                                                                 | `number`                                    | `160`       |
| `[nzPadding]`      | QR code Padding                                                                                              | `number`                                    | `0`         |
| `[nzIcon]`         | Icon address in QR code                                                                                      | `string`                                    | -           |
| `[nzIconSize]`     | The size of the icon in the QR code                                                                          | `number`                                    | `40`        |
| `[nzBordered]`     | Whether has border style                                                                                     | `boolean`                                   | `true`      |
| `[nzStatus]`       | QR code status                                                                                               | `'active'\|'expired'\|'loading'\|'scanned'` | `'active'`  |
| `[nzStatusRender]` | custom status                                                                                                | `TemplateRef<void> \| string`               | -           |
| `[nzLevel]`        | Error Code Level                                                                                             | `'L'\|'M'\|'Q'\|'H'`                        | `'M'`       |
| `[nzBoostLevel]`   | If enabled, the Error Correction Level of the result may be higher than the specified Error Correction Level | `boolean`                                   | `true`      | 21.0.0            |
| `(nzRefresh)`      | callback                                                                                                     | `EventEmitter<string>`                      | -           |

## Note

### Invalid QR Code

`nzValue` has a conservative upper limit of 738 or fewer strings. If error correction levels are used, the `nzValue`
upper limit will be lowered.

### QR Code error correction level

The ErrorLevel means that the QR code can be scanned normally after being blocked, and the maximum area that can be
blocked is the error correction rate.

Generally, the QR code is divided into 4 error correction levels: Level `L` can correct about `7%` errors, Level `M` can
correct about `15%` errors, Level `Q` can correct about `25%` errors, and Level `H` can correct about `30%` errors. When
the content encoding of the QR code carries less information, in other words, when the value link is short, set
different error correction levels, and the generated image will not change.

> For more information, see
> the: [https://www.qrcode.com/en/about/error_correction](https://www.qrcode.com/en/about/error_correction.html)

---

## Examples

### With custom background color

Customize the background color of the QR Code.

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

### Basic

The simplest usage.

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

### Custom Color

Customize QR code color.

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

### custom status

You can control the rendering logic of the QR code in different states through the value of `nzStatusRender`.

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

### Download QRCode

A way to download QRCode.

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

### Error Level

Set Error Level.

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

### With Icon

QRCode with icon.

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

### With padding

Customize the padding of the QR Code.

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

### Other Status

The status can be controlled by the value `nzStatus`, four values of `active`, `expired`, `loading`, `scanned` are provided.

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

### Custom Render Type

Customize the rendering results by `nzType`, provide options `canvas` and `svg`.

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
