<template>
  <div class="ui secondary menu">
    <div class="ui container">
      <div class="left menu">
        <router-link class="item" to="/">
          <img
            class="ui small image"
            src="../assets/Logo-panela.New.png"
            alt="Ecommerce"
          />
        </router-link>
        <template v-for="category in categories" :key="category.id">
          <router-link class="item" :to="category.slug">
            {{ category.title }}
          </router-link>
        </template>
      </div>
      <div class="right menu">
        <router-link class="item" to="/login" v-if="!token">
          Iniciar Sesion
        </router-link>

        <template v-if="token">
          <div class="ui link list">
            <a class="item"
              ><router-link to="/abount" class="ite">Conocenos</router-link></a
            >
            <a class="item"
              ><router-link to="/Story">Algo de historia</router-link></a
            >
            <a class="item"><router-link to="/abount">Procesos</router-link></a>
            <a class="item"
              ><router-link to="/abount">Otros productos</router-link></a
            >
          </div>
          <span class="ui item cart">
            <i class="shopping cart icon" @click="openCart"></i>
          </span>
          <span class="ui item lagout" @click="logout">
            <i class="sign-out icon"></i>
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { getTokenApi, deleteTokenApi } from "../api/token";
import { getCategoriesApi } from "../api/category";

export default {
  name: "menu",

  setup() {
    let categories = ref(null);
    const token = getTokenApi();
    const store = useStore();

    onMounted(async () => {
      const response = await getCategoriesApi();
      categories.value = response;
    });

    const logout = () => {
      deleteTokenApi();
      location.replace("/");
    };

    const openCart = () => {
      store.commit("setShowCart", true);
    };

    return {
      token,
      logout,
      categories,
      openCart,
    };
  },
};
</script>

<style lang="scss" scoped>
.ui.menu.secondary {
  background-image: url("../assets/header-img.jpg");
  .item {
    color: #ffffff;
    font-size: 14px;
    &:hover {
      color: #1fa1f1;
    }
  }
  .menu.left {
    width: 50%;
    .ui.image {
      background-repeat: no-repeat;
      width: 210px;
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
  .ui.link.list {
    .ite {
      color: #ffffff;
      &:hover {
        color: #1fa1f1;
      }
    }
  }
}
</style>
