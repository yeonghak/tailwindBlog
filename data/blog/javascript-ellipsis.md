---
title: Javascript & jQuery实现长文本省略
date: '2023-07-01'
tags: ['JAVASCRIPT']
draft: false
summary: Javascript & jQuery实现长文本省略
---

```javascript
// 方法1
;(function ($) {
  $.fn.multiEllipsis = function (options) {
    var defaults = $.extend(
      {
        characters: 50,
      },
      options
    )

    return this.each(function () {
      var text = this.textContent

      if (text.length <= defaults.characters) {
        return
      }

      var string = text.slice(0, defaults.characters - 3)
      this.textContent = $.trim(string) + '...'
    })
  }

  $('.multiEllipsis').multiEllipsis()
})(jQuery)

;(function ($) {
  $(document).ready(function () {
    $('.test-300').multiEllipsis({
      characters: 300,
    })
  })
})(jQuery)

// 方法二
// multiline ellipsis
var multis = $('.multiEllipsis')
function multiEllipsis() {
  var x = function (a, i) {
    return a.slice(0, i).join(' ')
  }
  /**
   * requires element to be width/height limited
   * element must be in the DOM and can't be with display none, put it with visibility hidden instead
   * element shall have no sub elements either O:)
   */
  var ellipsisFill = function (e) {
    var d = '...',
      h = e.offsetHeight,
      w = e.innerHTML.split(' '),
      i = 0,
      l = w.length
    e.innerHTML = ''
    while (h >= e.scrollHeight && i <= l) {
      e.innerHTML = x(w, ++i) + d
    }
    if (i > l) {
      e.innerHTML = x(w, i)
    } else {
      e.innerHTML = x(w, --i) + d
    }
  }
  for (var i = 0; i < multis.length; i++) {
    var multi = multis[i]
    //console.log(multi);
    ellipsisFill(multi)
  }
}
if (multis != null) {
  multiEllipsis()
}
```
