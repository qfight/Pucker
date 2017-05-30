# Pucker
 pucker of the text content when exceed the specified scope  

## 1.组件的功能

折叠器组件主要实现当文本超过设定的行数的时候，自动折叠，当点击下拉按钮的时候自动展开，再次点击的时候会自动收起；
当文本少于设定行数时候，不会有下拉按钮。

**注意**： 组件中的arrow是图片，实际应用可以替换为iconfont，欢迎PR。

## 2.安装

```bash
npm install rn-pucker --save
```

## 3.使用

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
### 3.1 超过设定行数，自动折叠:

![first](https://github.com/qfight/Pucker/blob/master/images/upper.png)
### 3.2 点击下拉，自动展开:

![second](https://github.com/qfight/Pucker/blob/master/images/down.png)

## 4.属性
| 名称             | 类型    | 描述    |
|-----------------|--------|---------|
| content         | String | 文本字符串，默认：'black' |
| lineNum         | Number | 折叠器展示的行数，默认：5 |
| lineHeight      | Number | 行高，默认：16|
| style           | Object | 组件样式 |

## 5.License
[MIT License](https://github.com/qfight/Pucker/blob/master/LICENSE)