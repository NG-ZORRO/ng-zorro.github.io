---
category: Components
type: Data Display
title: Image
cols: 1
experimental: true
description: Experimental image component.
---

## When To Use

- When you need the browser to prioritize image loading (needs to be handled in SSR).
- When you need to optimize for HD displays (e.g. retina screens).
- When using image CDN.
- More in [Image documentation](/components/image/en)
- Next steps
  - Add [sizes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes) attribute and responsive support.

## API

### nz-image

| Property       | Description                                                                                               | Type               | Default                 | Global Config |
| -------------- | --------------------------------------------------------------------------------------------------------- | ------------------ | ----------------------- | ------------- |
| `nzSrc`        | URL                                                                                                       | `string`           | -                       |               |
| `nzAlt`        | Alt                                                                                                       | `string`           | -                       |               |
| `nzWidth`      | Width                                                                                                     | `number\|string`   | `auto`                  |               |
| `nzHeight`     | Height                                                                                                    | `number\|string`   | `auto`                  |               |
| `nzAutoSrcset` | Whether to optimize image loading                                                                         | `boolean`          | `false`                 | ✅            |
| `nzSrcLoader`  | Loader                                                                                                    | `NzImageSrcLoader` | `defaultImageSrcLoader` | ✅            |
| `nzPriority`   | Whether to add [preload](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content) (only SSR) | `boolean`          | `false`                 | ✅            |

### NzImageSrcLoader

```ts
export type NzImageSrcLoader = (params: { src: string; width: number }) => string;
```

## Note

### nzSrcLoader

Using `nzSrcLoader` helps you to fill in key information about the requested image, such as `src` and `width`, which defaults to

```ts
export const defaultImageSrcLoader: NzImageSrcLoader = ({ src }) => {
  return src;
};
```

Built-in image CND creation method

```ts
/**
 * AliObjectsLoader return format
 * {domain}/{src}?x-oss-process=image/resize,w_{width}
 */
export function createAliObjectsLoader(domain: string): NzImageSrcLoader;

/**
 * ImgixLoader return format
 * {domain}/{src}?format=auto&fit=max&w={width}
 */
export function createImgixLoader(domain: string): NzImageSrcLoader;

/**
 * CloudinaryLoader return format
 * {domain}/c_limit,q_auto,w_{width}/{src}
 */
export function createCloudinaryLoader(domain: string): NzImageSrcLoader;
```

### Responsive images and preloaded images

Using responsive images can help web pages display well on different devices. Preloading images can help you load images faster, for more information please refer to.

- [preloading responsive images](https://web.dev/preload-responsive-images/)
- [next.js image component and image optimization](https://nextjs.org/docs/basic-features/image-optimization)

---

## Examples

### Auto Srcset

Using `nzAutoSrcset` requires to specify the image size (`nzWidth`, `nzHeight`), with the Loader automatically generating [srcset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset) for different pixel densities.

```typescript
import { Component } from '@angular/core';

import { createAliObjectsLoader, NzImageModule as NzExperimentalImageModule } from 'ng-zorro-antd/experimental/image';
import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'nz-demo-experimental-image-auto-srcset',
  imports: [NzImageModule, NzExperimentalImageModule],
  template: `<nz-image [nzSrc]="src" nzWidth="200" nzHeight="200" [nzSrcLoader]="loader" nzAutoSrcset />`
})
export class NzDemoExperimentalImageAutoSrcsetComponent {
  src = 'jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
  loader = createAliObjectsLoader('https://zos.alipayobjects.com/rmsportal');
}
```

### Priority

Setting `nzPriority` will add the `<link rel="preload">` tag when rendering server-side (SSR), and browsers will treat it as a high priority resource to load. You can see this in [MDN - Preloading](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content), [web.dev - Preloading responsive images](https://web.dev/preload-responsive-images/) to learn more.

Note: usually we only need to set `nzPriority` for the first screen images, so you only need to add it for the first few items in the cyclically generated template, e.g.

```html
@for (product of products; track product)
<nz-image [nzPriority]="$index <= 8"></nz-image>
}
```

```typescript
import { Component } from '@angular/core';

import { NzImageModule as NzExperimentalImageModule } from 'ng-zorro-antd/experimental/image';
import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'nz-demo-experimental-image-preloading',
  imports: [NzImageModule, NzExperimentalImageModule],
  template: `<nz-image [nzSrc]="src" nzWidth="200" nzHeight="200" nzPriority />`
})
export class NzDemoExperimentalImagePreloadingComponent {
  src = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
}
```

### Use Src Loader

Custom `nzSrcLoader` is used to resolve image URLs, or you can also use the built-in image CND provider's Loaders.
<br/>
We recommend always specifying the image size (`nzWidth`, `nzHeight`), which can help improve the key metrics of the web experience [CLS](https://web.dev/cls/), and can also be used with the Loader to optimize the images using the image CND to improve the loading speed.
<br/>
If you want to use a different Loader in a different environment you can do the following.

```ts
import { environment } from 'environments/environment';

import { NzConfig, provideNzConfig } from 'ng-zorro-antd/core/config';
import { createAliObjectsLoader, defaultImageSrcLoader } from 'ng-zorro-antd/experimental/image';

const nzConfig: NzConfig = {
  imageExperimental: {
    nzSrcLoader: environment.production
      ? createAliObjectsLoader('https://zos.alipayobjects.com/rmsportal')
      : defaultImageSrcLoader
  }
};

export const appConfig: ApplicationConfig = {
  providers: [provideNzConfig(nzConfig)]
};
```

```typescript
import { Component } from '@angular/core';

import { createAliObjectsLoader, NzImageModule as NzExperimentalImageModule } from 'ng-zorro-antd/experimental/image';
import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'nz-demo-experimental-image-src-loader',
  imports: [NzImageModule, NzExperimentalImageModule],
  template: `<nz-image [nzSrc]="src" nzWidth="200" nzHeight="200" [nzSrcLoader]="loader" />`
})
export class NzDemoExperimentalImageSrcLoaderComponent {
  src = 'jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
  loader = createAliObjectsLoader('https://zos.alipayobjects.com/rmsportal');
}
```
