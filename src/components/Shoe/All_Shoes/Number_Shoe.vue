<template>
  <ul class="page-numbers nav-pagination links text-center">
    <li>
      <span aria-current="page" class="page-number current">1</span>
    </li>
    <li>
      <a class="page-number" href="#">2</a>
    </li>
    <li>
      <a class="page-number" href="#">3</a>
    </li>
    <li>
      <a class="page-number" href="#">4</a>
    </li>
    <li><span class="page-number dots">…</span></li>
    <li>
      <a class="page-number" href="#">822</a>
    </li>
    <li>
      <a class="page-number" href="#">823</a>
    </li>
    <li>
      <a class="page-number" href="#">824</a>
    </li>
    <li>
      <a class="next page-number" href="#"><i class="fa-solid fa-angle-right"></i></a>
    </li>
  </ul>
</template>

<style>
ul.links {
  width: 100%;
  font-size: 0.85em;
  margin: 5px 0;
  display: flex;
  justify-content: center;
}

.text-center {
  text-align: center;
}

ul.links li {
  margin-left: inherit;
  margin: 0 0.4em;
}
.nav-pagination > li > a,
.nav-pagination > li > span {
  border: 2px solid;
  border-radius: 99px;
  border-color: #000000;
  display: block;
  font-size: 1.1em;
  font-weight: bolder;
  height: 2.25em;
  line-height: 2em;
  min-width: 2.25em;
  padding: 0 7px;
  text-align: center;
  transition: all 0.3s;
  vertical-align: top;
  width: auto;
}

li > .current {
  background-color: #000000;
  border-color: #000000;
  color: #ffffff;
}
.pagination > li > .current,
.nav-pagination > li > a:hover,
.nav-pagination > li > span:hover {
  background-color: #000000;
  border-color: #000000;
  color: #fff;
}
</style>
