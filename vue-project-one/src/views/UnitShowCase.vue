<script>
import frenchSourceData from '../../Data/french.json'

export default {
    data() {
        return { 
            data: frenchSourceData,
            currentBaseId: this.$route.params.id
        }
    }
} 

</script>


<template>
    <div >
        <h1>Good evening Emporer: {{ data.description }} </h1>
        <p>How are you</p>
    </div>
    
    
</template>
<style></style>