<script></script>
<template>
    <div class="parent">
        <div class="special-unit-parent">
            <div class="special-unit-text">
                <p>Special Units</p>
            </div>
            <div class="special-unit-icons">

                <div>
                    <img src="../../images/Arbaletrier-Icon.webp" style="width:50px">
                </div>
                <div>
                    <img src="../../images/French-RoyalKnight-Icon.webp" style="width:50px">
                </div>
                <div>
                    <img src="../../images/French-Cannon-Icon.webp" style="width:50px">
                </div>
            </div>
        </div>
        <div class="unit-showcase-parent" >
            <div id="unit-selector">
                <div>
                    <RouterLink to="/Knight">
                        <img  src="../../images/French-RoyalKnight-Icon.webp" alt="" style="width:40px" >
                    </RouterLink>
                </div>

                <div>
                    <RouterLink to="/MAA">
                        <img src="../../images/Generic-MAA-Icon.webp" alt="" style="width:40px">
                    </RouterLink>
                </div>
                <div>
                    <RouterLink to="/spearmen">
                        <img src="../../images/Generic-Spearmen-Icon.webp" alt="" style="width:40px">
                    </RouterLink>
                </div>
                <div>
                    <RouterLink to="/Archer">
                        <img src="../../images/Generic-Archer-Icon.webp" alt="" style="width:40px">
                    </RouterLink>
                    
                </div>
                <div>
                    <RouterLink to="/arbaletrier">
                        <img src="../../images/Arbaletrier-Icon.webp" alt="" style="width:40px">
                    </RouterLink>
                </div>
                <div><img src="../../images/Handcannoneer-Icon.webp" alt="" style="width:40px"></div>
                <div><img src="../../images/Horseman-Icon.webp" alt="" style="width:40px"></div>
                
            </div>
        <div id="unit-description-parent">
            <div id="unit-description">
                <div><img src="images/French-RoyalKnight-Icon.webp" alt=""></div>
                <div><p>Royal knight</p></div>
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
    </div>
    
</template>
<style >

.parent{
    justify-content: center;
    align-items: center;
    display: flex;
}
.special-unit-parent{
    display: flex;
    flex-direction: column;
    background-color: blueviolet;
}
.unit-showcase-parent{
    display: flex;
    justify-content: center;
}

.unit-showcase-parent div{
    margin: 20px;
    
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

#unit-selector {
    max-width: 200px;
    display: flex;
    flex-direction: column;
}
#unit-selector div{
    padding: 10px;
    margin: 10px;
    
}


</style>
