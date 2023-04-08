<script setup lang="ts"></script>

<template>
  <!--From https://dev.to/benpai/cute-css-animals-igp-->
  <div class="animal bear">
    <div class="eye1"></div>
    <div class="eye2"></div>
    <div class="mouth"></div>
    <div class="hand1"></div>
    <div class="hand2"></div>
    <label>熊</label>
  </div>

  <div class="animal pig">
    <div class="eye1"></div>
    <div class="eye2"></div>
    <div class="mouth"></div>
    <div class="hand1"></div>
    <div class="hand2"></div>
    <label>豚</label>
  </div>

  <div class="animal panda">
    <div class="eye1"></div>
    <div class="eye2"></div>
    <div class="nose">
      <div class="mouth"></div>
    </div>
    <div class="hand1"></div>
    <div class="hand2"></div>
    <label>パンダ</label>
  </div>

  <div class="animal mouse">
    <div class="eye1"></div>
    <div class="eye2"></div>
    <div class="face"></div>
    <div class="nose">
      <div class="mouth"></div>
    </div>
    <div class="whiskers1"></div>
    <div class="whiskers2"></div>
    <div class="hand1"></div>
    <div class="hand2"></div>
    <label>鼠</label>
  </div>
</template>

<style scoped lang="scss">
body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #f2e86d;
}

/* ========== ANIMAL ========== */
.animal {
  height: 80vh;
  width: 50px;
  min-width: 50px;
  background-color: #000;
  border-radius: 100px 100px 0 0;
  margin: 0 40px;
  position: relative;
}
.animal:before,
.animal:after {
  content: '';
  position: absolute;
  background-color: inherit;
  height: 20px;
  width: 20px;
  border-radius: 100px;
  top: -5px;
}
.animal:before {
  left: -5px;
}
.animal:after {
  right: -5px;
}
.animal *,
.animal *:before,
.animal *:after {
  position: absolute;
}
.animal label {
  font-family: sans-serif;
  display: block;
  text-align: center;
  width: 14px;
  top: 100px;
  left: calc(50% - 7px);
}

/* ========== BEAR ========== */
.animal.bear {
  background-color: #58667c;
  --alt-color: #c7d5ed;
}
.animal.bear .eye1 {
  height: 8px;
  width: 8px;
  background-color: var(--alt-color);
  border-radius: 100px;
  top: 30px;
  left: 10px;
}
.animal.bear .eye1:after {
  content: '';
  height: 4px;
  width: 4px;
  background-color: #000;
  top: 2px;
  right: 2px;
  border-radius: 50px;
}
.animal.bear .eye2 {
  height: 8px;
  width: 8px;
  background-color: var(--alt-color);
  border-radius: 100px;
  top: 30px;
  right: 10px;
}
.animal.bear .eye2:after {
  content: '';
  height: 4px;
  width: 4px;
  background-color: #000;
  top: 2px;
  right: 2px;
  border-radius: 50px;
}
.animal.bear .mouth {
  height: 18px;
  width: 18px;
  background-color: var(--alt-color);
  border-radius: 14px 14px 9px 9px;
  top: 40px;
  left: calc(50% - 9px);
}
.animal.bear .mouth:after {
  content: '';
  height: 6px;
  width: 6px;
  background-color: #000;
  top: 3px;
  left: calc(50% - 3px);
  border-radius: 50px;
}
.animal.bear .hand1 {
  height: 16px;
  width: 8px;
  border-radius: 100px 100px 0 0;
  top: 65px;
  left: 7px;
  border: 2px solid #000;
  border-bottom: 0;
  transform: rotate(110deg);
}
.animal.bear .hand2 {
  height: 16px;
  width: 8px;
  border-radius: 100px 100px 0 0;
  top: 65px;
  right: 7px;
  border: 2px solid #000;
  border-bottom: 0;
  transform: rotate(-110deg);
}

/* ========== PIG ========== */
.animal.pig {
  background-color: #ffb3cc;
  --alt-color: #ff3377;
}
.animal.pig .eye1 {
  height: 8px;
  width: 8px;
  background-color: #555;
  border-radius: 100px;
  top: 30px;
  left: 8px;
}
.animal.pig .eye2 {
  height: 8px;
  width: 8px;
  background-color: #555;
  border-radius: 100px;
  top: 30px;
  right: 8px;
}
.animal.pig .mouth {
  height: 12px;
  width: 18px;
  background-color: var(--alt-color);
  border-radius: 14px 14px 10px 10px;
  top: 40px;
  left: calc(50% - 9px);
}
.animal.pig .mouth:after {
  content: '';
  height: 5px;
  width: 3px;
  background-color: #555;
  top: 4px;
  left: 5px;
  border-radius: 50px;
}
.animal.pig .mouth:before {
  content: '';
  height: 5px;
  width: 3px;
  background-color: #555;
  top: 4px;
  right: 5px;
  border-radius: 50px;
}
.animal.pig .hand1 {
  height: 16px;
  width: 8px;
  top: 65px;
  left: 7px;
  border: 2px solid #333;
  border-bottom: 0;
  transform: rotate(110deg);
  background: linear-gradient(to top, transparent, transparent 50%, var(--alt-color) 50%);
}
.animal.pig .hand2 {
  height: 16px;
  width: 8px;
  top: 65px;
  right: 7px;
  border: 2px solid #333;
  border-bottom: 0;
  transform: rotate(-110deg);
  background: linear-gradient(to top, transparent, transparent 50%, var(--alt-color) 50%);
}
.animal.pig .hand1:before,
.animal.pig .hand2:before {
  content: '';
  height: 0;
  width: 0;
  top: -2px;
  left: -2px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 7px solid #333;
}
.animal.pig .hand1:after,
.animal.pig .hand2:after {
  content: '';
  height: 0;
  width: 0;
  top: -5px;
  left: -2px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 7px solid #ffb3cc;
}

/* ========== PANDA ========== */
.animal.panda {
  background-color: #fff;
  --alt-color: #000;
}
.animal.panda .eye1 {
  height: 12px;
  width: 8px;
  background-color: var(--alt-color);
  border-radius: 50% 50% 40% 40%;
  top: 30px;
  left: 10px;
  transform: rotate(30deg);
}
.animal.panda .eye2 {
  height: 12px;
  width: 8px;
  background-color: var(--alt-color);
  border-radius: 50% 50% 40% 40%;
  top: 30px;
  right: 10px;
  transform: rotate(-30deg);
}
.animal.panda .nose {
  height: 4px;
  width: 4px;
  background-color: var(--alt-color);
  top: 42px;
  left: calc(50% - 2px);
  transform: rotate(45deg);
}
.animal.panda .nose:before {
  content: '';
  height: 4px;
  width: 4px;
  background-color: inherit;
  left: -2px;
  top: 0;
  border-radius: 100px;
}
.animal.panda .nose:after {
  content: '';
  height: 4px;
  width: 4px;
  background-color: inherit;
  left: 0;
  top: -2px;
  border-radius: 100px;
}
.animal.panda .mouth {
  height: 4px;
  width: 4px;
  top: 0;
  left: 0;
}
.animal.panda .mouth:before {
  content: 'c';
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 14px;
  top: -1px;
  left: -1px;
  transform: rotate(180deg);
}
.animal.panda .mouth:after {
  content: 'c';
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 14px;
  top: -5px;
  left: 1px;
  transform: rotate(260deg);
}
.animal.panda .hand1 {
  height: 18px;
  width: 10px;
  border-radius: 100px 100px 70px 70px;
  top: 65px;
  left: 7px;
  background-color: var(--alt-color);
  transform: rotate(110deg);
}
.animal.panda .hand2 {
  height: 18px;
  width: 10px;
  border-radius: 100px 100px 70px 70px;
  top: 65px;
  right: 7px;
  background-color: var(--alt-color);
  transform: rotate(-110deg);
}

/* ========== MOUSE ========== */
.animal.mouse {
  background-color: #c4bcbc;
  --alt-color: #efe8e8;
  --line-color: #4f3e3e;
}
.animal.mouse .eye1 {
  height: 6px;
  width: 6px;
  background-color: var(--line-color);
  border-radius: 100px;
  top: 30px;
  left: 10px;
}
.animal.mouse .eye2 {
  height: 6px;
  width: 6px;
  background-color: var(--line-color);
  border-radius: 100px;
  top: 30px;
  right: 10px;
}
.animal.mouse .nose {
  height: 4px;
  width: 4px;
  background-color: var(--line-color);
  top: 40px;
  left: calc(50% - 2px);
  transform: rotate(45deg);
}
.animal.mouse .nose:before {
  content: '';
  height: 4px;
  width: 4px;
  background-color: inherit;
  left: -2px;
  top: 0;
  border-radius: 100px;
}
.animal.mouse .nose:after {
  content: '';
  height: 4px;
  width: 4px;
  background-color: inherit;
  left: 0;
  top: -2px;
  border-radius: 100px;
}
.animal.mouse .mouth {
  height: 4px;
  width: 4px;
  top: 0;
  left: 0;
  color: var(--line-color);
}
.animal.mouse .mouth:before {
  content: 'c';
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 14px;
  top: -1px;
  left: -1px;
  transform: rotate(180deg);
}
.animal.mouse .mouth:after {
  content: 'c';
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 14px;
  top: -5px;
  left: 1px;
  transform: rotate(260deg);
}
.animal.mouse .face {
  height: 27px;
  width: 12px;
  background-color: var(--alt-color);
  border-radius: 100px;
  top: 20px;
  left: calc(50% - 6px);
}
.animal.mouse .face:after {
  content: '';
  height: 12px;
  width: 40px;
  background-color: inherit;
  border-radius: 100px;
  top: calc(100% - 5px);
  left: -14px;
}
.animal.mouse .face:before {
  content: '';
  height: 16px;
  width: 16px;
  background-color: inherit;
  top: 15px;
  left: -2px;
  transform: rotate(45deg);
}
.animal.mouse .whiskers1 {
  height: 2px;
  width: 14px;
  background-color: var(--line-color);
  top: 43px;
  left: 2px;
  transform: rotate(6deg);
}
.animal.mouse .whiskers1:after {
  content: '';
  height: inherit;
  width: inherit;
  background-color: inherit;
  top: 5px;
  left: 0;
  transform: rotate(-12deg);
}
.animal.mouse .whiskers2 {
  height: 2px;
  width: 14px;
  background-color: var(--line-color);
  top: 43px;
  right: 2px;
  transform: rotate(-6deg);
}
.animal.mouse .whiskers2:after {
  content: '';
  height: inherit;
  width: inherit;
  background-color: inherit;
  top: 5px;
  right: 0;
  transform: rotate(12deg);
}
.animal.mouse .hand1 {
  height: 16px;
  width: 8px;
  top: 65px;
  left: 7px;
  border: 2px solid #333;
  border-bottom: 0;
  transform: rotate(110deg);
  border-radius: 100px 100px 0 0;
  background: linear-gradient(to top, transparent, transparent 50%, var(--alt-color) 50%);
}
.animal.mouse .hand2 {
  height: 16px;
  width: 8px;
  top: 65px;
  right: 7px;
  border: 2px solid #333;
  border-bottom: 0;
  transform: rotate(-110deg);
  border-radius: 100px 100px 0 0;
  background: linear-gradient(to top, transparent, transparent 50%, var(--alt-color) 50%);
}
</style>
