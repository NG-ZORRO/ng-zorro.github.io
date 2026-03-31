---
category: Components
type: Data Entry
title: Code Editor
cols: 1
experimental: true
description: Code Editor based on monaco-editor.
---

## When To Use

When you want to use monaco editor in Angular.

### Import Style

```less
@import 'node_modules/ng-zorro-antd/code-editor/style/entry.less';
```

## API

Install `monaco-editor` in your project first:

```sh
npm install monaco-editor
```

### Dynamic Loading

If you would like to load monaco dynamically (which means you load resources of monaco editor right before you would like to use it), you will need to register assets of monaco editor itself. You can do that by adding these lines in `angular.json` file:

```diff
"assets": [
+ {
+   "glob": "**/*",
+   "input": "./node_modules/monaco-editor/min/vs",
+   "output": "/assets/vs/"
+ }
],
```

If you deploy resources of monaco editor on CDN, you won't need to modify `angular.json`. Instead, you must configure the `assetsRoot` property via `NzConfigService`. For example, you put resources of monaco editor on https://mycdn.com/assets/vs, you should provide `{ assets: 'https://mycdn.com/assets/vs' }`.

> If you are going to use static loading (which we will explain in detail at the bottom of this page), you don't need to modify angular.json file.

### Static Loading

Sometimes you need to load AMD module dynamically. But since monaco editor's loader patches `window[require]`, you can not use AMD loader like requireJS. In this situation you need to enable static loading.

With help of [monaco-editor-webpack-plugin](https://github.com/microsoft/monaco-editor-webpack-plugin) by Microsoft, you can do that in a convenient way.

1. Provide the value of `NZ_CONFIG` in `app.config.ts` and set `useStaticLoading` in the `codeEditor` property to `true`.
2. Create a `webpack.partial.js` file, and config monaco-editor-webpack-loader.
3. Use custom webpack loader like [ngx-build-plus](https://github.com/manfredsteyer/ngx-build-plus) to load this webpack config.

If you use static loading, you should not add assets of monaco editor to your project by modifying `angular.json` file.

### nz-code-editor

| Parameter               | Description                                                                                                                                        | Type                                               | Default  |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | -------- |
| `[nzEditorMode]`        | Mode of monaco editor                                                                                                                              | `normal`\|`diff`                                   | `normal` |
| `[nzLoading]`           | Show the loading spin                                                                                                                              | `boolean`                                          | `false`  |
| `[nzOriginalText]`      | The content of the left editor in `diff` mode                                                                                                      | `boolean`                                          | `false`  |
| `[nzFullControl]`       | Enable full control mode. User should manage `TextModel` manually in this mode                                                                     | `boolean`                                          | `false`  |
| `[nzEditorOption]`      | [Please refer to the doc of monaco editor](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditorconstructionoptions.html) | `IEditorConstructionOptions`                       | `{}`     |
| `[nzToolkit]`           | A placeholder for adding some quick actions                                                                                                        | `TemplateRef<void>`                                | -        |
| `(nzEditorInitialized)` | The event that a code editor is initialized                                                                                                        | `IStandaloneCodeEditor` \| `IStandaloneDiffEditor` | -        |

#### Methods

| Method     | Description                             |
| ---------- | --------------------------------------- |
| `layout()` | Force monaco editor to re-render itself |

### Global Configuration

You can set the default configuration of the `CodeEditor` component through the `set` method of `NzConfigService`.

#### CodeEditorConfig

| Parameter             | Description                                                                                                                                                                                                                                                 | Type                         | Default |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------- |
| `assetsRoot`          | Where should the component load resource of monaco editor                                                                                                                                                                                                   | `string` \| `SafeUrl`        | -       |
| `defaultEditorOption` | Default options. [Please refer to the doc of monaco editor](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorConstructionOptions.html)                                                                                          | `IEditorConstructionOptions` | `{}`    |
| `onLoad`              | The hook invoked when the resource of monaco editor is loaded. At this moment and afterwards the global variable `monaco` is usable (`window.MonacoEnvironment = { globalAPI: true }` is required if monaco-editor's version is greater or equal to 0.22.0) | `() => void`                 | -       |
| `onFirstEditorInit`   | The hook invoked when the first monaco editor is initialized                                                                                                                                                                                                | `() => void`                 | -       |
| `onInit`              | The hook invoked every time a monaco editor is initialized                                                                                                                                                                                                  | `() => void`                 | -       |
| `useStaticLoading`    | Load monaco editor statically                                                                                                                                                                                                                               | `boolean`                    | `false` |

---

## Examples

### Basic

The simplest usage.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

@Component({
  selector: 'nz-demo-code-editor-basic',
  imports: [FormsModule, NzCodeEditorModule],
  template: ` <nz-code-editor class="editor" [ngModel]="code" [nzEditorOption]="{ language: 'typescript' }" /> `,
  styles: `
    .editor {
      height: 200px;
    }
  `
})
export class NzDemoCodeEditorBasicComponent {
  code = `import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor'

@Component({})
export class SomeComponent {}`;
}
```

### Complex

A more complex demo with loading effect and toolkit.

```typescript
import { Component, DOCUMENT, inject, Renderer2, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCodeEditorComponent, NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTooltipDirective, NzTooltipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'nz-demo-code-editor-complex',
  imports: [FormsModule, NzCodeEditorModule, NzIconModule, NzTypographyModule, NzSwitchModule, NzTooltipModule],
  template: `
    <p nz-paragraph style="margin-bottom: 8px;">
      Loading
      <nz-switch [(ngModel)]="loading" />
    </p>
    <nz-code-editor
      class="editor"
      [class.full-screen]="fullScreen"
      [ngModel]="code"
      [nzLoading]="loading"
      [nzToolkit]="toolkit"
      [nzEditorOption]="{ language: 'javascript' }"
    />
    <ng-template #toolkit>
      <nz-icon
        [class.active]="fullScreen"
        nz-tooltip
        nzTooltipTitle="Toggle Fullscreen"
        [nzType]="fullScreen ? 'fullscreen-exit' : 'fullscreen'"
        (click)="toggleFullScreen()"
      />
    </ng-template>
  `,
  styles: `
    .editor {
      height: 200px;
    }

    .full-screen {
      position: fixed;
      z-index: 999;
      height: 100vh;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
    }
  `
})
export class NzDemoCodeEditorComplexComponent {
  @ViewChild(NzCodeEditorComponent, { static: false }) editorComponent?: NzCodeEditorComponent;
  @ViewChild(NzTooltipDirective, { static: false }) tooltip?: NzTooltipDirective;

  loading = true;
  fullScreen = false;
  code = `function flatten(arr) {
  if (!(arr instanceof Array)) {
    throw new Error('The parameter must be an array.');
  }

  function partial(arr_) {
    return arr_.reduce((previous, current) => {
      if (current instanceof Array) {
        previous.push(...partial(current));
        return previous;
      } else {
        previous.push(current);
        return previous;
      }
    }, []);
  }

  return partial(arr);
}

console.log(flatten(['1', 2, [[3]]]))`;
  private document: Document = inject(DOCUMENT);
  private renderer: Renderer2 = inject(Renderer2);

  toggleFullScreen(): void {
    this.fullScreen = !this.fullScreen;
    this.renderer.setStyle(this.document.body, 'overflow-y', this.fullScreen ? 'hidden' : null);
    this.editorComponent?.layout();
    this.tooltip?.hide();
  }
}
```

### Change Config

You can change default options and options of existing editors at runtime.

```typescript
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'nz-demo-code-editor-config',
  imports: [FormsModule, NzCodeEditorModule, NzIconModule, NzSwitchModule, NzTypographyModule],
  template: `
    <p nz-paragraph style="margin-bottom: 8px;">
      Change Theme
      <nz-switch
        [ngModel]="dark"
        (ngModelChange)="onDarkModeChange($event)"
        [nzUnCheckedChildren]="unchecked"
        [nzCheckedChildren]="checked"
      />
    </p>
    <ng-template #unchecked>
      <nz-icon nzType="bulb" />
    </ng-template>
    <ng-template #checked>
      <nz-icon nzType="poweroff" />
    </ng-template>
    <nz-code-editor style="height: 200px" [ngModel]="code" [nzEditorOption]="{ language: 'markdown' }" />
  `
})
export class NzDemoCodeEditorConfigComponent {
  private nzConfigService = inject(NzConfigService);

  dark = false;

  code = `**All monaco editor instances on the same page always have the same color. It's a by-design of monaco editor.**

You can refer to [this issue](https://github.com/Microsoft/monaco-editor/issues/338).`;

  onDarkModeChange(dark: boolean): void {
    this.dark = dark;
    const defaultEditorOption = this.nzConfigService.getConfigForComponent('codeEditor')?.defaultEditorOption || {};
    this.nzConfigService.set('codeEditor', {
      defaultEditorOption: {
        ...defaultEditorOption,
        theme: dark ? 'vs-dark' : 'vs'
      }
    });
  }
}
```

### Diff Editor

Use diff editor mode.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

@Component({
  selector: 'nz-demo-code-editor-diff',
  imports: [FormsModule, NzCodeEditorModule],
  template: `
    <nz-code-editor
      class="editor"
      [nzOriginalText]="originalCode"
      nzEditorMode="diff"
      [ngModel]="code"
      [nzEditorOption]="{ language: 'typescript' }"
    />
  `,
  styles: `
    .editor {
      height: 200px;
    }
  `
})
export class NzDemoCodeEditorDiffComponent {
  originalCode = `import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

@Component({})
export class SomeComponent {}`;

  code = `import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

@Component({})
export class SomeComponent {}`;
}
```

### Full Control Mode

Use full control mode and mangage TextModel of monaco editor by yourself.

```typescript
import { Component } from '@angular/core';

import type { editor } from 'monaco-editor';

import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
declare const monaco: any;

@Component({
  selector: 'nz-demo-code-editor-full-control',
  imports: [NzCodeEditorModule],
  template: ` <nz-code-editor class="editor" [nzFullControl]="true" (nzEditorInitialized)="onEditorInit($event)" /> `,
  styles: `
    .editor {
      height: 200px;
    }
  `
})
export class NzDemoCodeEditorFullControlComponent {
  editor?: editor.ICodeEditor | editor.IEditor;

  onEditorInit(e: editor.ICodeEditor | editor.IEditor): void {
    this.editor = e;
    this.editor.setModel(monaco.editor.createModel("console.log('Hello ng-zorro-antd')", 'typescript'));
  }
}
```
