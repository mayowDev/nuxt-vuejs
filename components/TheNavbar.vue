<template >
    <nav  class="nav">
        <ul>
            <li>
                <div class="menu"></div>
                <div class="menu"></div>
                <div class="menu"></div>
            </li>
            <li><h3>Nairobi Sausges</h3> </li>
            <li><img src="../assets/people-icon.png" alt="user-icon"> </li>
        </ul>
    </nav>
  </template>
  
<style lang="scss" >
.nav{
    ul{

        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 45px!important;
        list-style-type: none !important;;
        padding: 0 1rem;
        .menu{
            width: 22px;
            height: 3px;
            background-color: #595959;;
            margin: 4px 0;
            cursor: pointer;
        }
        li>h3{
            font-size: 19px;
            color: #1C1B1F;
            font-stretch: expanded;

        }
    }
}

</style>
