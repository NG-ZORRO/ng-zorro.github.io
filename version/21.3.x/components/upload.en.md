---
category: Components
type: Data Entry
title: Upload
cover: 'https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg'
description: Used to select and upload files or drag and drop files.
---

## When To Use

Uploading is publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload tool.

- When you need to upload one or more files.
- When you need to show the process of uploading.
- When you need to upload files by dragging and dropping.

## API

> You can consult [jQuery-File-Upload](https://github.com/blueimp/jQuery-File-Upload/wiki) about how to implement server-side upload interface.

### nz-upload

| Property                    | Description                                                                                                                                                                                                      | Type                                                                                             | Default         |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | --------------- |
| `[nzId]`                    | input id attribute inside the component                                                                                                                                                                          | `string`                                                                                         | -               |
| `[nzAccept]`                | File types that can be accepted. See [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)                                                                       | `string`                                                                                         | -               |
| `[nzAction]`                | Required. Uploading URL                                                                                                                                                                                          | `string \| ((file: NzUploadFile) => string \| Observable<string>)`                               | -               |
| `[nzDirectory]`             | support uploading the whole directory ([caniuse](https://caniuse.com/#feat=input-file-directory))                                                                                                                | `boolean`                                                                                        | `false`         |
| `[nzBeforeUpload]`          | Hook function, which will be executed before uploading. Uploading will be stopped with `false` or an Observable. **Warning: this function is not supported in IE9**. NOTICE: Must use `=>` to define the method. | `(file: NzUploadFile, fileList: NzUploadFile[]) => boolean \| Observable<boolean>`               | -               |
| `[nzCustomRequest]`         | Override for the default XHR behavior allowing for additional customization and the ability to implement your own XMLHttpRequest. NOTICE: Must use `=>` to define the method.                                    | `(item) => Subscription`                                                                         | -               |
| `[nzData]`                  | Uploading params or function which can return uploading params. NOTICE: Must use `=>` to define the method.                                                                                                      | `Object \| ((file: NzUploadFile) => Object \| Observable<{}>)`                                   | -               |
| `[nzDisabled]`              | disable upload button                                                                                                                                                                                            | `boolean`                                                                                        | `false`         |
| `[nzFileList]`              | List of files, two-way data-binding                                                                                                                                                                              | `NzUploadFile[]`                                                                                 | -               |
| `[nzLimit]`                 | limit single upload count when `nzMultiple` has opened. `0` unlimited                                                                                                                                            | `number`                                                                                         | `0`             |
| `[nzMaxCount]`              | Limit the file displayed in uploaded files list. Will replace current one when maxCount is 1 unlimited                                                                                                           | `number\|undefined`                                                                              | `undefined`     |
| `[nzSize]`                  | limit file size (KB). `0` unlimited                                                                                                                                                                              | `number`                                                                                         | `0`             |
| `[nzFileType]`              | limit file type, e.g: `image/png,image/jpeg,image/gif,image/bmp`                                                                                                                                                 | `string`                                                                                         | -               |
| `[nzFilter]`                | Custom filter when choose file                                                                                                                                                                                   | `UploadFilter[]`                                                                                 | -               |
| `[nzHeaders]`               | Set request headers, valid above IE10. NOTICE: Must use `=>` to define the method.                                                                                                                               | `Object \| ((file: NzUploadFile) => Object \| Observable<{}>)`                                   | -               |
| `[nzListType]`              | Built-in stylesheets, support for three types: `text`, `picture` or `picture-card`                                                                                                                               | `'text' \| 'picture' \| 'picture-card'`                                                          | `'text'`        |
| `[nzMultiple]`              | Whether to support selected multiple files. `IE10+` supported. You can select multiple files with CTRL holding down while multiple is set to be true                                                             | `boolean`                                                                                        | `false`         |
| `[nzName]`                  | The name of the uploading file                                                                                                                                                                                   | `string`                                                                                         | `'file'`        |
| `[nzShowUploadList]`        | Whether to show the default upload list, could be an object to specify `showPreviewIcon`, `showRemoveIcon` and `showDownloadIcon` individually                                                                   | `boolean \| { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean }` | `true`          |
| `[nzShowButton]`            | Show upload button                                                                                                                                                                                               | `boolean`                                                                                        | `true`          |
| `[nzWithCredentials]`       | ajax upload with cookie sent                                                                                                                                                                                     | `boolean`                                                                                        | `false`         |
| `[nzOpenFileDialogOnClick]` | click open file dialog                                                                                                                                                                                           | `boolean`                                                                                        | `true`          |
| `[nzPreview]`               | A callback function will be executed when the file link or preview icon is clicked. NOTICE: Must use `=>` to define the method.                                                                                  | `(file: NzUploadFile) => void`                                                                   | -               |
| `[nzPreviewFile]`           | Customize preview file logic. NOTICE: Must use `=>` to define the method.                                                                                                                                        | `(file: NzUploadFile) => Observable<dataURL: string>`                                            | -               |
| `[nzPreviewIsImage]`        | Customize the preview file is an image, generally used when the image URL is in a non-standard format. NOTICE: Must use `=>` to define the method.                                                               | `(file: NzUploadFile) => boolean`                                                                | -               |
| `[nzRemove]`                | A callback function will be executed when the removing file button is clicked, remove event will be prevented when the return value is `false` or an Observable. NOTICE: Must use `=>` to define the method.     | `(file: NzUploadFile) => boolean \| Observable<boolean>`                                         | -               |
| `(nzChange)`                | A callback function, can be executed when uploading state is changing                                                                                                                                            | `EventEmitter<NzUploadChangeParam>`                                                              | -               |
| `[nzDownload]`              | Click the method to download the file, pass the method to perform the method logic, do not pass the default jump to the new TAB.                                                                                 | `(file: NzUploadFile) => void`                                                                   | Jump to new TAB |
| ~~`[nzTransformFile]`~~     | ~~Customize transform file before request~~                                                                                                                                                                      | ~~`(file: NzUploadFile) => NzUploadTransformFileType`~~                                          | -               |
| `[nzIconRender]`            | Custom show icon                                                                                                                                                                                                 | `TemplateRef<{ $implicit: NzUploadFile }>`                                                       | -               |
| `[nzFileListRender]`        | Custom file list                                                                                                                                                                                                 | `TemplateRef<{ $implicit: NzUploadFile[] }>`                                                     | -               |

#### nzChange

> The function will be called when uploading is in progress, completed or failed

When uploading state changes, it returns:

```js
{
  file: { /* ... */ },
  fileList: [ /* ... */ ],
  event: { /* ... */ },
}
```

1. `file` File object for the current operation.

   ```js
   {
      uid: 'uid',      // unique identifier
      name: 'xx.png'   // file name
      status: 'done', // options: uploading, done, error, removed
      response: '{"status": "success"}', // response from server
      linkProps: '{"download": "image"}', // additional html props of file link
   }
   ```

2. `fileList` current list of files
3. `event` response from server, including uploading progress, supported by advanced browsers.

#### nzCustomRequest

Allows for advanced customization by overriding default behavior in `HttpClient`. Provide your own XMLHttpRequest calls to interface with custom backend processes or interact with AWS S3 service through the `aws-sdk` package.

`nzCustomRequest` callback is passed an object with:

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

## Examples

### Avatar

Click to upload user's avatar, and validate size and format of picture with `nzBeforeUpload`.

> The return value of function `nzBeforeUpload` can be a Observable to check asynchronously.

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

### Upload by clicking

Classic mode. File selection dialog pops up when upload button is clicked.

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

### Default Files

Use `nzFileList` for uploaded files when page init.

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

### Upload directory

You can select and upload a whole directory.

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

### Drag and Drop

You can drag files to a specific area, to upload. Alternatively, you can also upload by selecting.

We can upload serveral files at once in modern browsers by giving the input the `nzMultiple` attribute.

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

### Complete control over file list

You can gain full control over filelist by configuring `nzFileList`. You can accomplish all kinds of customed functions. The following shows two circumstances:

1. limit the number of uploaded files.

2. read from response and show file link.

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

### Max Count

Limit files with `nzMaxCount`. Will replace current one when `nzMaxCount` is 1

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

### Pictures Wall

After users upload picture, the thumbnail will be shown in list. The upload button will disappear when count meets limitation.

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

### Pictures with list style

If uploaded file is a picture, the thumbnail can be shown. `IE8/9` do not support local thumbnail show. Please use `thumbUrl` instead.

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

### Upload png file only

`nzBeforeUpload` only prevent upload behavior when return `false` or `Promise.reject()` or an `Observable` throw an error.

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

### Customize preview file

Customize local preview. Can handle with non-image format files such as video.

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

### Transform file before request

> The old `nzTransformFile` input has been deprecated.

Use `nzBeforeUpload` to transform file before requesting it, for example to add a watermark.

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

### Upload manually

Upload files manually after `nzBeforeUpload` returns `false`.

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

### Aliyun OSS

Use Aliyun OSS upload example.

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
