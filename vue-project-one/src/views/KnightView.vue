<template>
    <temptlate class="container">
    <div class="unit-showcase-parent" >
        <div id="unit-selector">
            <div><img src="../../images/Knight-Icon.webp" alt="" ></div>
            <div><img src="../../images/Knight-Icon.webp" alt="" width="40px"></div>
            <div><img src="../../images/Knight-Icon.webp" alt="" width="40px"></div>
            <div><img src="../../images/Knight-Icon.webp" alt="" width="40px"></div>
            <div>Hello</div>
            
        </div>
        <div id="unit-description-parent">
            <div id="unit-description">
                <div><img src="images/Knight-Icon.webp" alt=""></div>
                <div><p>Heavy melee cavalry</p></div>   
                <div><p>Royal knight</p></div>
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
</temptlate>
</template>
<style >

.container{
    display: block;
}
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

#unit-role-text{
    max-width: 20px;
}

#unit-role{
    max-width: 300px;
}
#unit-selector{

}
</style>
<script></script>