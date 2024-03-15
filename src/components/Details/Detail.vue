<template>
    <div class="">
        <h1>{{ product?.Ten_SP }}</h1>
        <h2>{{ product?.Gia_SP }}</h2>
        <img :src="product?.Anh_SP1" alt="">
        <button @click="sss()">click</button>
    </div>
</template>

<script src="./detail.js"></script>