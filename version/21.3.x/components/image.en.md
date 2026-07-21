---
category: Components
type: Data Display
title: Image
cover: 'https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg'
description: Preview-able image.
---

## When To Use

- When you need to display pictures.
- Display when loading a large image or fault-tolerant handling when loading fail.

## API

### [nz-image]

| Property              | Description                                                                                                                                                                                        | Type        | Default | Global Config |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------- | ------------- |
| `nzSrc`               | Image path                                                                                                                                                                                         | `string`    | -       | -             |
| `nzFallback`          | Load failure fault-tolerant src                                                                                                                                                                    | `string`    | -       | ✅            |
| `nzPlaceholder`       | Load placeholder src                                                                                                                                                                               | `string`    | -       | ✅            |
| `nzDisablePreview`    | Whether to disable the preview                                                                                                                                                                     | `boolean`   | `false` | ✅            |
| `nzCloseOnNavigation` | Whether to close the image preview when the user goes backwards/forwards in history. Note that this usually doesn't include clicking on links (unless the user is using the HashLocationStrategy). | `boolean`   | `false` | ✅            |
| `nzDirection`         | Text directionality                                                                                                                                                                                | `Direction` | `'ltr'` | ✅            |
| `nzScaleStep`         | `1 + nzScaleStep` is the step to increase or decrease the scale                                                                                                                                    | `number`    | `0.5`   | ✅            |

Other attributes [<img\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes)

### NzImageService

| Property  | Description     | Type                    | Default |
| --------- | --------------- | ----------------------- | ------- |
| `images`  | Preview images  | `NzImage[]`             | -       |
| `options` | Preview options | `NzImagePreviewOptions` | -       |

## Related type definition

### NzImage

| Property | Description | Type     | Default |
| -------- | ----------- | -------- | ------- |
| `src`    | src         | `string` | -       |
| `alt`    | alt         | `string` | -       |
| `width`  | width       | `string` | -       |
| `height` | height      | `string` | -       |

### NzImagePreviewOptions

| Property              | Description                                                                                                                                                                                        | Type      | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `nzKeyboard`          | Whether support press `esc` to close, press `left` or `right` to switch image                                                                                                                      | `boolean` | `true`  |
| `nzMaskClosable`      | Whether to close the image preview when the mask (area outside the image) is clicked                                                                                                               | `boolean` | `true`  |
| `nzCloseOnNavigation` | Whether to close the image preview when the user goes backwards/forwards in history. Note that this usually doesn't include clicking on links (unless the user is using the HashLocationStrategy). | `boolean` | `true`  |
| `nzZIndex`            | The z-index of the image preview                                                                                                                                                                   | `number`  | `1000`  |
| `nzZoom`              | Zoom rate                                                                                                                                                                                          | `number`  | `1`     |
| `nzRotate`            | Rotate rate                                                                                                                                                                                        | `number`  | `0`     |
| `nzScaleStep`         | `1 + nzScaleStep` is the step to increase or decrease the scale                                                                                                                                    | `number`  | `0.5`   |
| `nzFlipHorizontally`  | Flip image on horizontal vector                                                                                                                                                                    | `boolean` | `false` |
| `nzFlipVertically`    | Flip image on vertical vector                                                                                                                                                                      | `boolean` | `false` |

### NzImagePreviewRef

| Name                            | Description         |
| ------------------------------- | ------------------- |
| `switchTo(index: number): void` | Switch to index     |
| `prev(): void`                  | Previous image      |
| `next(): void`                  | Next image          |
| `close(): void`                 | Close image preview |

### NzImageGroupComponent

| Property      | Description                                                                                                                     | Type     | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| `nzScaleStep` | The value of `nzScaleStep` will be applied to all the images inside, unless an image has its own `nzScaleStep` value specified. | `number` | -       |

---

## Examples

### Basic Usage

Click the image to preview.

```typescript
import { Component } from '@angular/core';

import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'nz-demo-image-basic',
  imports: [NzImageModule],
  template: `
    <img
      nz-image
      width="200px"
      height="200px"
      nzSrc="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      alt=""
    />
  `
})
export class NzDemoImageBasicComponent {}
```

### Controlled Preview

You can make preview controlled.

```typescript
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule, NzImageService } from 'ng-zorro-antd/image';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-image-controlled-preview',
  imports: [FormsModule, NzButtonModule, NzImageModule, NzInputNumberModule],
  template: `
    <div>
      <label>
        <span>scale step:</span>
        <nz-input-number [(ngModel)]="scaleStep" [nzMin]="0.1" [nzStep]="1" />
      </label>

      <button nz-button nzType="primary" (click)="onClick()">Preview</button>
    </div>
  `,
  styles: `
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  `
})
export class NzDemoImageControlledPreviewComponent {
  private nzImageService = inject(NzImageService);
  scaleStep = 0.5;
  readonly images = [
    {
      src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      alt: ''
    }
  ];

  onClick(): void {
    this.nzImageService.preview(this.images, { nzZoom: 1, nzRotate: 0, nzScaleStep: this.scaleStep });
  }
}
```

### Fault tolerant

Load failed to display image placeholder.

```typescript
import { Component } from '@angular/core';

import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'nz-demo-image-fallback',
  imports: [NzImageModule],
  template: `<img nz-image width="200px" height="200px" nzSrc="error" [nzFallback]="fallback" alt="" />`
})
export class NzDemoImageFallbackComponent {
  fallback =
    'data:image/png;base64,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';
}
```

### Progressive Loading

Progressive when large image loading.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-image-placeholder',
  imports: [NzButtonModule, NzImageModule, NzSpaceModule],
  template: `
    <nz-space [nzSize]="12">
      <img *nzSpaceItem nz-image width="200px" height="200px" [nzSrc]="src" [nzPlaceholder]="placeholder" />
      <button *nzSpaceItem nz-button nzType="primary" (click)="onReload()">Reload</button>
    </nz-space>
  `
})
export class NzDemoImagePlaceholderComponent {
  src = `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png`;
  placeholder =
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200';

  onReload(): void {
    this.src = `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${new Date()}`;
  }
}
```

### Multiple image preview

Click the left and right switch buttons to preview multiple images.

```typescript
import { Component } from '@angular/core';

import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'nz-demo-image-preview-group',
  imports: [NzImageModule],
  template: `
    <nz-image-group>
      <img nz-image width="200px" nzSrc="https://img.alicdn.com/tfs/TB1g.mWZAL0gK0jSZFtXXXQCXXa-200-200.svg" alt="" />
      <img nz-image width="200px" nzSrc="https://img.alicdn.com/tfs/TB1Z0PywTtYBeNjy1XdXXXXyVXa-186-200.svg" alt="" />
    </nz-image-group>
  `
})
export class NzDemoImagePreviewGroupComponent {}
```

### Image Preview Service

The usage of `NzImageService` for images preview, the example includes the usage of using `NzImageService` to create single or multiple images preview

```typescript
import { Component, inject } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule, NzImageService } from 'ng-zorro-antd/image';

@Component({
  selector: 'nz-demo-image-service',
  imports: [NzButtonModule, NzImageModule],
  template: `<button nz-button nzType="primary" (click)="onClick()">Preview</button>`
})
export class NzDemoImageServiceComponent {
  private nzImageService = inject(NzImageService);
  readonly images = [
    {
      src: 'https://img.alicdn.com/tfs/TB1g.mWZAL0gK0jSZFtXXXQCXXa-200-200.svg',
      width: '200px',
      height: '200px',
      alt: 'ng-zorro'
    },
    {
      src: 'https://img.alicdn.com/tfs/TB1Z0PywTtYBeNjy1XdXXXXyVXa-186-200.svg',
      width: '200px',
      height: '200px',
      alt: 'angular'
    }
  ];

  onClick(): void {
    this.nzImageService.preview(this.images, { nzZoom: 1.5, nzRotate: 0 });
  }
}
```
