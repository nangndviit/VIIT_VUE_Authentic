<template>
    <div class="menu_list_blogs">
      <ul class="menu_blogs">
        <li class="menu_item"><a>Adidas</a></li>
        <li class="menu_item"><a>Nike</a></li>
        <li class="menu_item"><a>Jordan</a></li>
        <li class="menu_item"><a>Giày Bóng Rổ</a></li>
        <li class="menu_item"><a>Đồ Hiệu</a></li>
        <li class="menu_item"><a>Legit Check</a></li>
        <li class="menu_item"><a>Hướng Dẫn</a></li>
      </ul>
    </div>
  </template>
  
  <style>
  .menu_list_blogs {
    display: block;
    max-width: 100%;
    padding-top: 20px;
  }
  
  .menu_blogs {
    color: #0a0a0a;
    display: flex;
    grid-area: auto;
    line-height: 25.6px;
    margin: 0px 0px 21px -20px;
    overflow: auto;
  }
  
  .menu_item {
    background-color: #323232;
    border-radius: 12px;
    color: #ffffffc9;
    display: inline-block;
    grid-area: auto;
    line-height: 25.6px;
    margin: 0px 5px;
    padding: 10px 20px;
  }
  
  .menu_item a {
    white-space: nowrap;
  }
  
  /* Ẩn thanh cuộn cho Firefox và Edge */
  .menu_blogs::-webkit-scrollbar {
    display: none;
  }
  </style>
  