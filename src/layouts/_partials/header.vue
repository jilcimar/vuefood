<template>
    <header>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-vuefood">
      <div class="container">
        <router-link :to="{name:'home'}" class="navbar-brand">
          <img src="@/assets/imgs/logo-vuefood.png" alt="VueFood" class="logo">
        </router-link>

        <div>
          <ul class="navbar-nav ml-auto">

            <li class="nav-item active">
                <router-link :to="{name:'cart'}" class="nav-link"> 
                    <i class="fas fa-shopping-cart"></i> Carrinho
                </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>