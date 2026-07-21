---
category: Components
subtitle: 上传
type: 数据录入
title: Upload
cover: 'https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg'
description: 文件选择上传和拖拽上传控件。
---

## 何时使用

上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

- 当需要上传一个或一些文件时。
- 当需要展现上传的进度时。
- 当需要使用拖拽交互时。

## API

> 服务端上传接口实现可以参考 [jQuery-File-Upload](https://github.com/blueimp/jQuery-File-Upload/wiki)。

### nz-upload

| 参数                        | 说明                                                                                                                            | 类型                                                                                             | 默认值       |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------ |
| `[nzId]`                    | 组件内部 input 的 id 值                                                                                                         | `string`                                                                                         | -            |
| `[nzAccept]`                | 接受上传的文件类型, 详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)  | `string`                                                                                         | -            |
| `[nzAction]`                | 必选参数, 上传的地址                                                                                                            | `string \| ((file: NzUploadFile) => string \| Observable<string>)`                               | -            |
| `[nzDirectory]`             | 支持上传文件夹（[caniuse](https://caniuse.com/#feat=input-file-directory)）                                                     | `boolean`                                                                                        | `false`      |
| `[nzBeforeUpload]`          | 上传文件之前的钩子，参数为上传的文件，若返回 `false` 则停止上传。注意：**IE9** 不支持该方法；注意：务必使用 `=>` 定义处理方法。 | `(file: NzUploadFile, fileList: NzUploadFile[]) => boolean \| Observable<boolean>`               | -            |
| `[nzCustomRequest]`         | 通过覆盖默认的上传行为，可以自定义自己的上传实现；注意：务必使用 `=>` 定义处理方法。                                            | `(item) => Subscription`                                                                         | -            |
| `[nzData]`                  | 上传所需参数或返回上传参数的方法；注意：务必使用 `=>` 定义处理方法。                                                            | `Object \| ((file: NzUploadFile) => Object \| Observable<{}>)`                                   | -            |
| `[nzDisabled]`              | 是否禁用                                                                                                                        | `boolean`                                                                                        | `false`      |
| `[nzFileList]`              | 文件列表，双向绑定                                                                                                              | `NzUploadFile[]`                                                                                 | -            |
| `[nzLimit]`                 | 限制单次最多上传数量，`nzMultiple` 打开时有效；`0` 表示不限                                                                     | `number`                                                                                         | `0`          |
| `[nzMaxCount]`              | 限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件                                                                       | `number\|undefined`                                                                              | `undefined`  |
| `[nzSize]`                  | 限制文件大小，单位：KB；`0` 表示不限                                                                                            | `number`                                                                                         | `0`          |
| `[nzFileType]`              | 限制文件类型，例如：`image/png,image/jpeg,image/gif,image/bmp`                                                                  | `string`                                                                                         | -            |
| `[nzFilter]`                | 自定义过滤器                                                                                                                    | `UploadFilter[]`                                                                                 | -            |
| `[nzHeaders]`               | 设置上传的请求头部，IE10 以上有效；注意：务必使用 `=>` 定义处理方法。                                                           | `Object \| ((file: NzUploadFile) => Object \| Observable<{}>)`                                   | -            |
| `[nzListType]`              | 上传列表的内建样式，支持三种基本样式 `text`, `picture` 和 `picture-card`                                                        | `'text' \| 'picture' \| 'picture-card'`                                                          | `'text'`     |
| `[nzMultiple]`              | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件。                                                                | `boolean`                                                                                        | `false`      |
| `[nzName]`                  | 发到后台的文件参数名                                                                                                            | `string`                                                                                         | `'file'`     |
| `[nzShowUploadList]`        | 是否展示 uploadList, 可设为一个对象，用于单独设定 `showPreviewIcon`，`showRemoveIcon` 和 `showDownloadIcon`                     | `boolean \| { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean }` | `true`       |
| `[nzShowButton]`            | 是否展示上传按钮                                                                                                                | `boolean`                                                                                        | `true`       |
| `[nzWithCredentials]`       | 上传请求时是否携带 cookie                                                                                                       | `boolean`                                                                                        | `false`      |
| `[nzOpenFileDialogOnClick]` | 点击打开文件对话框                                                                                                              | `boolean`                                                                                        | `true`       |
| `[nzPreview]`               | 点击文件链接或预览图标时的回调；注意：务必使用 `=>` 定义处理方法。                                                              | `(file: NzUploadFile) => void`                                                                   | -            |
| `[nzPreviewFile]`           | 自定义文件预览逻辑；注意：务必使用 `=>` 定义处理方法。                                                                          | `(file: NzUploadFile) => Observable<dataURL: string>`                                            | -            |
| `[nzPreviewIsImage]`        | 自定义预览文件是否有效图像，一般用于图像 URL 为非标准格式；注意：务必使用 `=>` 定义处理方法。                                   | `(file: NzUploadFile) => boolean`                                                                | -            |
| `[nzRemove]`                | 点击移除文件时的回调，返回值为 false 时不移除。支持返回 `Observable` 对象；注意：务必使用 `=>` 定义处理方法。                   | `(file: NzUploadFile) => boolean \| Observable<boolean>`                                         | -            |
| `(nzChange)`                | 上传文件改变时的状态                                                                                                            | `EventEmitter<NzUploadChangeParam>`                                                              | -            |
| `[nzDownload]`              | 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页                                                           | `(file: NzUploadFile) => void`                                                                   | 跳转新标签页 |
| ~~`[nzTransformFile]`~~     | ~~在上传之前转换文件。支持返回一个 Observable 对象~~                                                                            | ~~`(file: NzUploadFile) => NzUploadTransformFileType`~~                                          | -            |
| `[nzIconRender]`            | 自定义显示 icon                                                                                                                 | `TemplateRef<{ $implicit: NzUploadFile }>`                                                       | -            |
| `[nzFileListRender]`        | 自定义显示整个列表                                                                                                              | `TemplateRef<{ $implicit: NzUploadFile[] }>`                                                     | -            |

#### nzChange

> 开始、上传进度、完成、失败都会调用这个函数。

文件状态改变的回调，返回为：

```js
{
  file: { /* ... */ },
  fileList: [ /* ... */ ],
  event: { /* ... */ },
}
```

1. `file` 当前操作的文件对象。

   ```js
   {
      uid: 'uid',      // 文件唯一标识
      name: 'xx.png'   // 文件名
      status: 'done', // 状态有：uploading done error removed
      response: '{"status": "success"}', // 服务端响应内容
      linkProps: '{"download": "image"}', // 下载链接额外的 HTML 属性
   }
   ```

2. `fileList` 当前的文件列表。
3. `event` 上传中的服务端响应内容，包含了上传进度等信息，高级浏览器支持。

#### nzCustomRequest

默认使用 HTML5 方式上传（即：使用 `HttpClient`），允许覆盖默认行为实现定制需求，例如直接与阿里云交互等。

`nzCustomRequest` 回调传递以下参数：

- `onProgress: (event: { percent: number }): void`
- `onError: (event: Error): void`
- `onSuccess: (body: Object, xhr?: Object): void`
- `data: Object`
- `filename: String`
- `file: File`
- `withCredentials: Boolean`
- `action: String`
- `headers: Object`

---

## 代码示例

### 用户头像

点击上传用户头像，并使用 `nzBeforeUpload` 限制用户上传的图片格式和大小。

> `nzBeforeUpload` 的返回值可以是一个 Observable 以支持也支持异步检查。

```typescript
import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'nz-demo-upload-avatar',
  imports: [NzIconModule, NzUploadModule],
  template: `
    <nz-upload
      class="avatar-uploader"
      nzAction="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      nzName="avatar"
      nzListType="picture-card"
      [nzShowUploadList]="false"
      [nzBeforeUpload]="beforeUpload"
      (nzChange)="handleChange($event)"
    >
      @if (!avatarUrl) {
        <nz-icon class="upload-icon" [nzType]="loading ? 'loading' : 'plus'" />
        <div class="ant-upload-text">Upload</div>
      } @else {
        <img [src]="avatarUrl" style="width: 100%" />
      }
    </nz-upload>
  `,
  styles: `
    :host ::ng-deep .avatar-uploader > .ant-upload {
      width: 128px;
      height: 128px;
    }
  `
})
export class NzDemoUploadAvatarComponent {
  loading = false;
  avatarUrl?: string;

  constructor(private messageService: NzMessageService) {}

  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.messageService.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.messageService.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.messageService.error('Network error');
        this.loading = false;
        break;
    }
  }
}
```

### 点击上传

经典款式，用户点击按钮弹出文件选择框。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'nz-demo-upload-basic',
  imports: [NzButtonModule, NzIconModule, NzUploadModule],
  template: `
    <nz-upload
      nzAction="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      [nzHeaders]="{ authorization: 'authorization-text' }"
      (nzChange)="handleChange($event)"
    >
      <button nz-button>
        <nz-icon nzType="upload" />
        Click to Upload
      </button>
    </nz-upload>
  `
})
export class NzDemoUploadBasicComponent {
  constructor(private messageService: NzMessageService) {}

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.messageService.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.messageService.error(`${info.file.name} file upload failed.`);
    }
  }
}
```

### 已上传的文件列表

使用 `nzFileList` 设置已上传的内容。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'nz-demo-upload-default-file-list',
  imports: [NzButtonModule, NzIconModule, NzUploadModule],
  template: `
    <nz-upload nzAction="https://www.mocky.io/v2/5cc8019d300000980a055e76" [nzFileList]="fileList">
      <button nz-button>
        <nz-icon nzType="upload" />
        Upload
      </button>
    </nz-upload>
  `
})
export class NzDemoUploadDefaultFileListComponent {
  fileList: NzUploadFile[] = [
    {
      uid: '1',
      name: 'xxx.png',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/xxx.png'
    },
    {
      uid: '2',
      name: 'yyy.png',
      status: 'done',
      url: 'http://www.baidu.com/yyy.png'
    },
    {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/zzz.png'
    }
  ];
}
```

### 文件夹上传

支持上传一个文件夹里的所有文件。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'nz-demo-upload-directory',
  imports: [NzButtonModule, NzIconModule, NzUploadModule],
  template: `
    <nz-upload nzAction="https://www.mocky.io/v2/5cc8019d300000980a055e76" nzDirectory>
      <button nz-button>
        <nz-icon nzType="upload" />
        Upload Directory
      </button>
    </nz-upload>
  `
})
export class NzDemoUploadDirectoryComponent {}
```

### 拖拽上传

把文件拖入指定区域，完成上传，同样支持点击上传。

设置 `nzMultiple` 后，在 `IE10+` 可以一次上传多个文件。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'nz-demo-upload-drag',
  imports: [NzButtonModule, NzIconModule, NzUploadModule],
  template: `
    <nz-upload
      nzType="drag"
      [nzMultiple]="true"
      nzAction="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      (nzChange)="handleChange($event)"
    >
      <p class="ant-upload-drag-icon">
        <nz-icon nzType="inbox" />
      </p>
      <p class="ant-upload-text">Click or drag file to this area to upload</p>
      <p class="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files
      </p>
    </nz-upload>
  `
})
export class NzDemoUploadDragComponent {
  constructor(private messageService: NzMessageService) {}

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.messageService.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.messageService.error(`${file.name} file upload failed.`);
    }
  }
}
```

### 完全控制的上传列表

使用 `nzFileList` 对列表进行完全控制，可以实现各种自定义功能，以下演示二种情况：

1. 上传列表数量的限制。

2. 读取远程路径并显示链接。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadChangeParam, NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'nz-demo-upload-file-list',
  imports: [NzButtonModule, NzIconModule, NzUploadModule],
  template: `
    <nz-upload
      nzAction="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      [nzFileList]="fileList"
      (nzChange)="handleChange($event)"
    >
      <button nz-button>
        <nz-icon nzType="upload" />
        Upload
      </button>
    </nz-upload>
  `
})
export class NzDemoUploadFileListComponent {
  fileList: NzUploadFile[] = [
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.baidu.com/xxx.png'
    }
  ];

  handleChange(info: NzUploadChangeParam): void {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    this.fileList = fileList;
  }
}
```

### 限制数量

通过 `nzMaxCount` 限制上传数量。当为 1 时，始终用最新上传的代替当前。

```typescript
import { Component, inject } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadModule, type NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'nz-demo-upload-max-count',
  imports: [NzUploadModule, NzButtonModule, NzFlexModule],
  template: `
    <div nz-flex nzVertical nzGap="2rem">
      <nz-upload
        nzAction="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        [nzHeaders]="{ authorization: 'authorization-text' }"
        [nzMaxCount]="1"
        (nzChange)="handleChange($event)"
      >
        <button nz-button>Upload (Max: 1)</button>
      </nz-upload>
      <nz-upload
        nzAction="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        [nzHeaders]="{ authorization: 'authorization-text' }"
        [nzMaxCount]="3"
        (nzChange)="handleChange($event)"
      >
        <button nz-button>Upload (Max: 3)</button>
      </nz-upload>
    </div>
  `
})
export class NzDemoUploadMaxCountComponent {
  readonly #messageService = inject(NzMessageService);
  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.#messageService.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.#messageService.error(`${info.file.name} file upload failed.`);
    }
  }
}
```

### 照片墙

用户可以上传图片并在列表中显示缩略图。当上传照片数到达限制后，上传按钮消失。

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

@Component({
  selector: 'nz-demo-upload-picture-card',
  imports: [NzIconModule, NzModalModule, NzUploadModule],
  template: `
    <nz-upload
      nzAction="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      nzListType="picture-card"
      [(nzFileList)]="fileList"
      [nzShowButton]="fileList.length < 8"
      [nzPreview]="handlePreview"
    >
      <div>
        <nz-icon nzType="plus" />
        <div style="margin-top: 8px">Upload</div>
      </div>
    </nz-upload>
    <nz-modal
      [nzVisible]="previewVisible"
      [nzContent]="modalContent"
      [nzFooter]="null"
      (nzOnCancel)="previewVisible = false"
    >
      <ng-template #modalContent>
        <img [src]="previewImage" style="width: 100%" />
      </ng-template>
    </nz-modal>
  `
})
export class NzDemoUploadPictureCardComponent {
  fileList: NzUploadFile[] = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error'
    }
  ];
  previewImage: string | undefined = '';
  previewVisible = false;

  handlePreview = async (file: NzUploadFile): Promise<void> => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file.preview;
    this.previewVisible = true;
  };
}
```

### 图片列表样式

上传文件为图片，可展示本地缩略图。`IE8/9` 不支持浏览器本地缩略图展示（[Ref](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)），可以写 `thumbUrl` 属性来代替。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'nz-demo-upload-picture-style',
  imports: [NzButtonModule, NzIconModule, NzUploadModule],
  template: `
    <nz-upload
      nzAction="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
      nzListType="picture"
      [(nzFileList)]="fileList"
    >
      <button nz-button>
        <nz-icon nzType="upload" />
        Upload
      </button>
    </nz-upload>
  `
})
export class NzDemoUploadPictureStyleComponent {
  fileList: NzUploadFile[] = [
    {
      uid: '0',
      name: 'xxx.png',
      status: 'uploading',
      percent: 33
    },
    {
      uid: '-1',
      name: 'yyy.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-2',
      name: 'zzz.png',
      status: 'error'
    }
  ];
}
```

### 只上传 png 图片

`nzBeforeUpload` 仅在返回 `false` 或 `Promise.reject()` 或 `Observable` 抛出错误时阻止上传行为。

```typescript
import { Component, inject } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadModule, type NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'nz-demo-upload-png-only',
  imports: [NzButtonModule, NzIconModule, NzUploadModule],
  template: `
    <nz-upload [nzBeforeUpload]="beforeUpload">
      <button nz-button>
        <nz-icon nzType="upload" />
        Upload only png
      </button>
    </nz-upload>
  `
})
export class NzDemoUploadPngOnlyComponent {
  readonly #messageService = inject(NzMessageService);
  beforeUpload = (file: NzUploadFile): boolean => {
    const isPng = file.type === 'image/png';
    if (!isPng) {
      this.#messageService.error('You can only upload png file!');
    }
    return isPng;
  };
}
```

### 自定义预览

自定义本地预览，用于处理非图片格式文件（例如视频文件）。

```typescript
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'nz-demo-upload-preview-file',
  imports: [NzButtonModule, NzIconModule, NzUploadModule],
  template: `
    <nz-upload
      nzAction="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      nzListType="picture"
      [nzPreviewFile]="previewFile"
    >
      <button nz-button>
        <nz-icon nzType="upload" />
        Upload
      </button>
    </nz-upload>
  `
})
export class NzDemoUploadPreviewFileComponent {
  constructor(private http: HttpClient) {}

  previewFile = (file: NzUploadFile): Observable<string> => {
    console.log('Your upload file:', file);
    return this.http
      .post<{ thumbnail: string }>(`https://next.json-generator.com/api/json/get/4ytyBoLK8`, {
        body: file
      })
      .pipe(map(res => res.thumbnail));
  };
}
```

### 上传前转换文件

> 旧的 `nzTransformFile` 属性已被弃用.

使用 `nzBeforeUpload` 在请求之前转换文件，例如添加水印。

```typescript
import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'nz-demo-upload-transform-file',
  imports: [NzButtonModule, NzIconModule, NzUploadModule],
  template: `
    <nz-upload nzAction="https://www.mocky.io/v2/5cc8019d300000980a055e76" [nzBeforeUpload]="transformFile">
      <button nz-button>
        <nz-icon nzType="upload" />
        Upload
      </button>
    </nz-upload>
  `
})
export class NzDemoUploadTransformFileComponent {
  transformFile = (file: NzUploadFile): Observable<Blob> =>
    new Observable((observer: Observer<Blob>) => {
      const reader = new FileReader();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      reader.readAsDataURL(file as any);
      reader.onload = () => {
        const canvas = document.createElement('canvas');
        const img = document.createElement('img');
        img.src = reader.result as string;
        img.onload = () => {
          const ctx = canvas.getContext('2d')!;
          ctx.drawImage(img, 0, 0);
          ctx.fillStyle = 'red';
          ctx.textBaseline = 'middle';
          ctx.fillText('Ant Design', 20, 20);
          canvas.toBlob(blob => {
            observer.next(blob!);
            observer.complete();
          });
        };
      };
    });
}
```

### 手动上传

`nzBeforeUpload` 返回 `false` 后，手动上传文件。

```typescript
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'nz-demo-upload-upload-manually',
  imports: [NzButtonModule, NzIconModule, NzUploadModule],
  template: `
    <nz-upload [(nzFileList)]="fileList" [nzBeforeUpload]="beforeUpload">
      <button nz-button>
        <nz-icon nzType="upload" />
        Select File
      </button>
    </nz-upload>
    <br />
    <br />
    <button
      nz-button
      nzType="primary"
      [nzLoading]="uploading"
      (click)="handleUpload()"
      [disabled]="fileList.length === 0"
    >
      {{ uploading ? 'Uploading' : 'Start Upload' }}
    </button>
  `
})
export class NzDemoUploadUploadManuallyComponent {
  uploading = false;
  fileList: NzUploadFile[] = [];

  constructor(
    private http: HttpClient,
    private messageService: NzMessageService
  ) {}

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  handleUpload(): void {
    const formData = new FormData();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });
    this.uploading = true;
    // You can use any AJAX library you like
    const req = new HttpRequest('POST', 'https://www.mocky.io/v2/5cc8019d300000980a055e76', formData, {
      // reportProgress: true
    });
    this.http
      .request(req)
      .pipe(filter(e => e instanceof HttpResponse))
      .subscribe({
        next: () => {
          this.uploading = false;
          this.fileList = [];
          this.messageService.success('upload successfully.');
        },
        error: () => {
          this.uploading = false;
          this.messageService.error('upload failed.');
        }
      });
  }
}
```

### 阿里云 OSS

使用阿里云 OSS 上传示例.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadChangeParam, NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'nz-demo-upload-upload-with-aliyun-oss',
  imports: [NzButtonModule, NzIconModule, NzUploadModule],
  template: `
    <nz-upload
      nzName="file"
      [(nzFileList)]="files"
      [nzTransformFile]="transformFile"
      [nzData]="getExtraData"
      [nzAction]="mockOSSData.host"
      (nzChange)="onChange($event)"
    >
      Photos:
      <button nz-button>
        <nz-icon nzType="upload" />
        Click to Upload
      </button>
    </nz-upload>
  `
})
export class NzDemoUploadUploadWithAliyunOssComponent {
  files: NzUploadFile[] = [];
  mockOSSData = {
    dir: 'user-dir/',
    expire: '1577811661',
    host: '//www.mocky.io/v2/5cc8019d300000980a055e76',
    accessId: 'c2hhb2RhaG9uZw==',
    policy: 'eGl4aWhhaGFrdWt1ZGFkYQ==',
    signature: 'ZGFob25nc2hhbw=='
  };

  transformFile = (file: NzUploadFile): NzUploadFile => {
    const suffix = file.name.slice(file.name.lastIndexOf('.'));
    const filename = Date.now() + suffix;
    file.url = this.mockOSSData.dir + filename;
    return file;
  };

  getExtraData = (file: NzUploadFile): {} => {
    const { accessId, policy, signature } = this.mockOSSData;

    return {
      key: file.url,
      OSSAccessKeyId: accessId,
      policy,
      Signature: signature
    };
  };

  onChange(e: NzUploadChangeParam): void {
    console.log('Aliyun OSS:', e.fileList);
  }
}
```
