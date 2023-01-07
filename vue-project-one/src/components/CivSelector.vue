<template>
    <div class="civSelector-parent">
        <div>
            <RouterLink to="/"><img src="../../images/French.webp" alt="" style="width:40px"></RouterLink>
            
        </div>
        <div><img src="../../images/HRE.png" alt="" style="width:40px"></div>
        <div><img src="../../images/Chinese.webp" alt="" style="width:40px"></div>
        <div><img src="../../images/English.webp" alt="" style="width:40px"></div>
        <div><img src="../../images/Mongolia.webp" alt="" style="width:40px"></div>
        <div>Hello my name is</div>
    </div>
</template>
<style>

.civSelector-parent{
    display: flex;
    background-color: bisque;
    justify-content: center;
}

.civSelector-parent div{
    margin-left: 1%;
    margin-right: 1%;
}
</style>
<script>

export default{
    data() {
        return {
            civName:'China'
        }
    }
}

</script>