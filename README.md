# About

`@ngx-tc/base` is an Angular library that provides a set of base functionalities, including interfaces, directives, general CSS styles, and variables, which can be used in combination with other `ngx-tc` libraries to create a unified UI experience.

The main focus of `@ngx-tc/base` is on providing a consistent set of styles and variables that can be used across different `ngx-tc` libraries. This includes things like color palettes, typography, spacing, and layout, as well as other commonly used design elements.

By using `@ngx-tc/base` in conjunction with other libraries, you can ensure that all of your components use a consistent set of styles and variables, which can help to create a more cohesive and visually appealing UI.

In addition to providing a set of base styles and variables, `@ngx-tc/base` also includes a set of pre-built components and utilities that can be used to enhance the functionality of your application. For example, it includes a set of UI components that provide built-in accessibility features and support for different screen sizes and devices.

## Usage

Install `@ngx-tc/base` in your project:

```
npm install @ngx-tc/base
```

Import `TcBaseModule` e.g. in your `app.module.ts`:
```typescript
import { TcBaseModule } from '@ngx-tc/base';

@NgModule({
  imports: [
    ...
      TcBaseModule
  ],
})
export class AppModule {}
```
