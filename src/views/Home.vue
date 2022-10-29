<template>
    <section v-if="!isLoading" class="section container">
        <infinite-scroll @infinite-scroll="loadPokemons">
            <div class="columns is-multiline is-centered is-mobile">
                <div v-for="(pokemon, index) in pokemons" :key="pokemon.name"
                    class="column is-6-mobile is-4-tablet is-3-desktop is-2-widescreen ">
                    <router-link :to="{ name: 'details', params: { id: index + 1 } }">
                        <PokeCard :name="pokemon.name" :id="index + 1" />
                    </router-link>
                </div>
            </div>
        </infinite-scroll>
    </section>
    <div class="loading-container" v-else>
        <Loading />
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import InfiniteScroll from "infinite-loading-vue3";
import { getPokemons } from '../api';
import PokeCard from '../components/PokeCard.vue';
import Loading from '../components/Loading.vue';

const pokemons = ref([]);
const isLoading = ref(true);
let page = 0;
let isAllLoad = false

const loadPokemons = async () => {
    if (isAllLoad) return;
    const res = await getPokemons(page);
    page++;
    isLoading.value = false;
    if (!res.next) {
        console.log(1)
        isAllLoad = true
        return
    }
    pokemons.value = [...pokemons.value, ...res.results];

}

onMounted(async () => {
    loadPokemons(page);
})
</script>
<style scoped>
.loading-container {
    height: calc(100vh - 52px);
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #fff; */
}
</style>