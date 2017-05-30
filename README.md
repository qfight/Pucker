# Pucker
 pucker of the text content when exceed the specified scope  

## 组件的功能

折叠器组件主要实现当文本超过设定的行数的时候，自动折叠，当点击下拉按钮的时候自动展开，再次点击的时候会自动收起；
当文本少于设定行数时候，不会有下拉按钮。

**注意**： 目前只实现水平方向的虚线，如果有需要实现垂直方向的虚线，欢迎PR。

## 安装

```bash
npm install rn-pucker --save
```

## 使用

```js
import Pucker from 'rn-pucker';

let content = "Font Awesome CDN is the easiest way to get Font Awesome on your website or app, " +
            "all with just a single line of code. No downloading or installing!Want to manage and host Font Awesome assets yourself? " +
            "You can download, customize, and use the icons and default styling manually. " +
            "Both CSS and CSS Preprocessor (Sass and Less) formats are included.";
export default ({}) => {
  return (
    <View>
        <Pucker content={content} lineHeight={16} lineNum={2}/>
    </View>
  )
}
```

## 属性
| 名称             | 类型    | 描述    |
|-----------------|--------|---------|
| content         | String | 文本字符串，默认：'black' |
| lineNum         | Number | 折叠器展示的行数，默认：5 |
| lineHeight      | Number | 行高，默认：16|
| style           | Object | 组件样式 |

## License
