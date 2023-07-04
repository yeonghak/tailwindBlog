---
title: CSS3字体颜色渐变
date: '2023-07-04'
tags: ['渐变', 'CSS3']
draft: false
summary: 使用CSS3，实现字体颜色渐变
---

```css
a#link {
  background: none;
  padding: 0;
  font-weight: 700;
  color: #d6d6d6;
  font-size: 30px;
  line-height: 40px;
  position: relative;
  -webkit-transition: color 426ms cubic-bezier(0.4, 0.9, 0.3, 1);
  transition: color 426ms cubic-bezier(0.4, 0.9, 0.3, 1);
}
a#link:hover {
  color: #62e3e3;
  font-weight: 700;
  background: linear-gradient(113.58deg, #0ba7df 0%, #62e3e3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
@media all and (-ms-high-contrast: none) {
  *::-ms-backdrop,
  a#link:hover {
    color: #2dbff3;
    background: none;
  }
}
.btnLink {
  text-align: center;
  width: 100%;
  max-width: 256px;
  height: 64px;
  border: 0px solid #22b4da;
  line-height: 64px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  vertical-align: middle;
  padding: 0;
  display: block;
  background-image: linear-gradient(113deg, #00a9e2 0%, #5cdfe3 51%, #00a9e2 100%);
  background-size: 200% auto;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  border-radius: 20px 20px 0 20px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  position: relative;
}
.btnLink:hover {
  background-position: right center;
}
```

![button-css](/static/images/button-css.png)
