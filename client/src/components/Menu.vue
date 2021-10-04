<template>
  <div class="ui secondary menu">
    <div class="ui container">
      <div class="left menu">
        <router-link class="item" to="/">
          <img
            class="ui small image"
            src="../assets/logo.png"
            alt="Ecommerce"
          />
          <p>Categorias</p>
        </router-link>
      </div>
      <div class="right menu">
        <router-link class="item" to="/login" v-if="!token">
          Iniciar Sesion
        </router-link>

        <template v-if="token">
          <router-link class="item" to="/orders">Pedidos</router-link>
          <span class="ui item cart">
            <i class="shopping cart icon"></i>
          </span>
          <span class="ui item lagout">
            <i class="sign-out icon"></i>
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { getTokenApi } from '../api/token';

export default {
  name: 'menu',

  setup() {
    const token = getTokenApi();

    return {
      token,
    };
  },
};
</script>

<style lang="scss" scoped>
.ui.menu.secondary {
  background-color: #0e82fd;
  .item {
    color: #ffffff;
    &:hover {
      color: #1fa1f1;
    }
  }
  .menu.left {
    width: 50%;
    .ui.image {
      width: 150px;
    }
  }
  .menu.right {
    width: 50%;
    justify-content: flex-end;
    .logout,
    .cart {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
