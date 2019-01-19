// 
// 
// 
window.onload = function () {


  //需求 
  // 1.所有的图片在初始时以动画过渡的效果以规定效果排版好
  // 2.点击右箭头，让下一张图片到最前面，其余依次与自己左边的图更换位置
  // 3.点击左箭头，让上一张图片到最前面，其余依次与自己右边的图更换位置
  // 设置鼠标移入切换页按钮显示，移除隐藏

  // 获取需要的DOM元素
  let slider = document.querySelector('.slider')
  let arrow = document.querySelector('.arrow')
  let prev = document.querySelector('#prev')
  let next = document.querySelector('#next')
  let lis = document.querySelectorAll('.slider li')

  // 设置位置信息对象
  let pos = [{
    // 第一张
    width: '800px',
    top: '100px',
    left: '200px',
    opacity: '1',
    zindex: '3'
  }, {
    // 第二张 顺时针
    width: '600px',
    top: '70px',
    left: '600px',
    opacity: '.8',
    zindex: '2'
  }, {
    // 第三张 顺时针
    width: '400px',
    top: '20px',
    left: '750px',
    opacity: '.2',
    zindex: '1'
  }, {
    // 第四张 顺时针
    width: '400px',
    top: '20px',
    left: '50px',
    opacity: '.2',
    zindex: '1'
  }, {
    // 第五章 顺时针
    width: '600px',
    top: '70px',
    left: '0px',
    opacity: '.8',
    zindex: '2'
  }]

  // 页面加载DOM完成后以动画过渡形式展开图片的位置
  for (let i = 0; i < lis.length; i++) {
    lis[i].style.width = pos[i].width
    lis[i].style.top = pos[i].top
    lis[i].style.left = pos[i].left
    lis[i].style.opacity = pos[i].opacity
    lis[i].style.marginLeft = 0
  }

  // 鼠标移入slider显示功能按钮 
  slider.onmouseover = function () {
    prev.style.opacity = 1
    next.style.opacity = 1
  }

  // 鼠标移出slider隐藏功能按钮
  slider.onmouseout = function () {
    prev.style.opacity = 0
    next.style.opacity = 0
  }
  
  // 设置一个状态值，记录是否在交换位置，默认为false
  let isTrans = false

  // 切换上一张
  prev.onclick = function () {
    if (!isTrans) {
      isTrans = true
      for (let i = lis.length - 1; i >= 0; i--) {
        if (lis[i].style.width == '800px') {
          let index = 4
          for (let j = 0; j < lis.length; j++) {
            if (i < 0) {
              i = 4
            }
            if (index < 0) {
              index = 4
            }
            lis[i].style.width = pos[index].width
            lis[i].style.top = pos[index].top
            lis[i].style.left = pos[index].left
            lis[i].style.opacity = pos[index].opacity
            lis[i].style.zIndex = pos[index].zindex
            i--
            index--
          }
          break
        }
      }
      setTimeout(() => {
        isTrans = false
      }, 1000)
    }
  }

  // 切换下一张
  next.onclick = function () {
    if (!isTrans) {
      // 将状态值设置为true，正在交换位置
      isTrans = true
      for (let i = 0; i < lis.length; i++) {
        // 遍历所有图片盒子(li),若是为最上面的盒子，则获取对应元素
        if (lis[i].style.width == '800px') {
          // 设置默认位置索引值
          let index = 1
          // 遍历所有图片盒子，设置其位置信息
          for (let j = 0; j < lis.length; j++) {
            // 若是大于盒子的总数，则使盒子重置为第一个继续走循环
            if (i >= lis.length) {
              i = 0;
            }
            // 若是位置索引为最后一个，则使位置索引归为第一个继续循环
            if (index == 5) {
              index = 0
            }
            // 设置盒子的对应样式
            lis[i].style.width = pos[index].width
            lis[i].style.top = pos[index].top
            lis[i].style.left = pos[index].left
            lis[i].style.opacity = pos[index].opacity
            lis[i].style.zIndex = pos[index].zindex

            i++
            index++
          }
          // 走完一遍5次后则所有位置更换完成，跳出外层循环
          break
        }
      }
      setTimeout(() => {
        // 交换位置完成，设置状态值为false，未在交换位置
        isTrans = false
      }, 1000)
    }
  }

}