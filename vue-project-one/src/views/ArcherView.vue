<script>


</script>
<template>
    
    
    <div class="unit-showcase-parent" >
        <div id="unit-selector">
            
            <div><img src="../../images/Generic-Archer-Icon.webp" alt="" width="40px"></div>
            <div><img src="../../images/Generic-Archer-Icon.webp" alt="" width="40px"></div>
            <div><img src="../../images/Generic-Archer-Icon.webp" alt="" width="40px"></div>
            <div><img src="../../images/Generic-Archer-Icon.webp" alt="" width="40px"></div> 
            <!-- <div>
                <router-link to="/MAA"><img src="images/Generic-Archer-Icon.webp" width="40px"></router-link>

            </div> -->
            
            <!-- <div>
                <router-link to="/MAA"><img src="images/Generic-Archer-Icon.webp" width="40px"></router-link>
            </div>  -->
            
        </div>
        <div id="unit-description-parent">
            <div id="unit-description">
                <div><img src="images/Generic-Archer-Icon.webp" alt=""></div>
                <div><p>Archer</p></div>
                <div><p>Light Ranged Infantry</p></div>   
                <div><p>French</p></div>
            </div>
            <div>
                <div>Cheap ranged infantry with good damage vs. unarmored targets.<br>+ High rate of fire<br>- Weak against armored targets<br>- Countered by Horsemen</div>
            </div>
        </div>
        <div id="unit-role">
            <div><p>Royal knights are flexible<br>Early game ,Feudal/age2,it can be used for raiding<br><br>
            If you go royale institute and fast castle you could unlock royal bloodlines while your enemy is in feudal and do alot of damage
            as they do not have crossbows<br><br>
            With royal bloodlines they are very strong and can even beat spearmen at equal numbers</p></div>
        </div>
    </div>
</template>
<style >


.unit-showcase-parent{
    display: flex;
    justify-content: center;
}

.unit-showcase-parent div{
    margin: 20px;
    background-color: brown;
}
#unit-description-parent{
    display: flex;
    flex-direction: column;
}
#unit-description{
    display: flex;
    
}

#unit-description-parent div{
    background-color: aquamarine;
}

#unit-role{
    max-width: 600px;
}




</style>
