<template>
    <div class="producto" >
        <div class="img ">
            <img :src="'http://localhost:5010/img/productos/'+item.folderfile+'/'+ item.imgProducto[0]">
        </div>
        <div class="title">
            {{ item.name }}
        </div>

        <b-card-text class="card-precio">
            Precio: ${{ item.precio }}
        </b-card-text>
        <div class="card-stock">
            <h5>Disponible:</h5> 
            <input class="form-control w-25 m-2 p-2 text-center" type="text" placeholder="1" disabled/>
        </div>
        <div class="container-card-options">
            <div class="modal-producto">
                <ModalVerProducto :index="indice" :producto="item"></ModalVerProducto>
            </div>
            <b-button @click.prevent="agregarCarro(item)" variant="primary">Agregar al carrito</b-button>
        </div>


    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Carrito from "../components/Carrito.vue";
import ModalverProducto from "../components/Modal-verProducto.vue"
import ModalVerProducto from "../components/Modal-verProducto.vue";
export default {
    computed: {
        ...mapState(["token", "productos", "carro", "user"]),
    },
    props: ["item","indice"],
    componets: {
        ModalverProducto,
    },
    methods: {
        ...mapActions([
            "datosProtegidos",
            "agregarCarrito",
            "quitarCarro",
            "aumentarCarritoAction",
            "disminuirCarritoAction",
        ]),
        agregarCarro(producto) {
            const articulo = {
                id: producto._id,
                name: producto.name,
                cantidad: 1,
                precio: producto.precio,
            };
            this.agregarCarrito(articulo);
        },
    },
    components: { ModalVerProducto }
}

</script>

<style scoped>
.producto {
    width: 100%;
    height: 90%;
    position: relative;
    background-color: #f8efed10;
    border: 1px solid rgba(0, 0, 0, 0.158);
    border-radius: 10px;
    margin: 1em 0;
    padding: 0 0 0.4em;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    transition: all 600ms;
}
.producto:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: scale(0.9899999);
    background-color: #f8efed;
}

.img img {
    width: 100%;
    height: 90%;
    margin-bottom: 0.5em;
}

.card-precio {
    font-weight: 600;
    font-size: 1.2em;
    color: #bf033b;
}
.card-stock{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.container-card-options {
    display: flex;
    flex-direction: column;
    padding: 1em;
}

.container-card-options button {
    margin: 0.1em;
}
.modal-producto{
    width: 30%;
    background-color: rgb(45, 46, 46);
    padding: 0.4em;
    margin: 0.2em;
    border-radius: 3px;
    color: azure;
}
</style>
