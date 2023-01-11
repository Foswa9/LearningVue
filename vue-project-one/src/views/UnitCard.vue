<script>

import frenchSourceData from '../../Data/french.json'

// export default { 
//     data() {
//         return {
//             data: frenchSourceData
//         }
//     }
// }


export default {
    data() {
        return { 
            data: frenchSourceData,
            currentId: this.$route.params.id
        }
    }
}

</script>
<template>
    <!-- <div v-for="unit in data" :key="unit.baseId">
      <router-link :to="{ name: 'unit', params:{ baseId: unit.baseId} }"> </router-link>
      <p>Hey how are you m     </p>
    </div> -->
    <div class="unit-showcase-parent" >
        <div id="unit-selector">
            <div><img src="../../images/Knight-Icon.webp" alt="" width="40px"></div>
            <div><img src="../../images/Generic-MAA-Icon.webp" alt="" width="40px"></div>
            <div><img src="../../images/Generic-Spearmen-Icon.webp" alt="" width="40px"></div>
            <div><img src="../../images/Generic-Archer-Icon.webp" alt="" width="40px"></div>
            <div><img src="../../images/Arbaletrier-Icon.webp" alt="" width="40px"></div>
            <div><img src="../../images/Handcannoneer-Icon.webp" alt="" width="40px"></div>
            <div><img src="../../images/Horseman-Icon.webp" alt="" width="40px"></div>
            
        </div>
        <div id="unit-description-parent">
            <div id="unit-description">
                <div><img src="images/Knight-Icon.webp" alt=""></div>
                <div><p>This is the generic template</p></div>
                <div><p>Heavy melee cavalry</p></div>   
                <div><p>French</p></div>
            </div>
            <div>
                <div>Gain bonus damage for 5 seconds after charging. Effective against most units.<br>+ Heavy armor<br>+ Strong in melee combat<br>- Countered by Spearmen and Crossbowmen</div>
            </div>
        </div>
        <div id="unit-role">
            <div><p>Royal knights are flexible<br>Early game ,Feudal/age2,it can be used for raiding<br><br>
            If you go royale institute and fast castle you could unlock royal bloodlines while your enemy is in feudal and do alot of damage
            as they do not have crossbows<br><br>
            With royal bloodlines they are very strong and can even beat spearmen at equal numbers</p></div>
        </div>
    </div>
    <div v-for="unit in data" :key="unit.baseId">
          <router-link :to="{ name: 'unit', params:{ baseId: unit.baseId} }"> </router-link>
    </div>

</template>
<style scoped>


</style>