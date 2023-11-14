<template>
    <div class="producto">
        <div class="img ">
             <img :src="'http://localhost:3000/images/productos/'+item.folderfile + '/'+item.imgProducto[0]"> 

        </div>
        <div class="title">
            {{ item.name }}
        </div>
        <b-card-text class="card-precio">
            Precio: ${{ item.precio }}
        </b-card-text>
        <div class="container-card-options">
            <div class="modal-producto">
                <ModalVerProducto :index="indice" :producto="item"></ModalVerProducto>
            </div>

            <b-button @click.prevent="agregarCarro(item)" id="button-cart" class="btn">Agregar al carrito</b-button>
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
    props: ["item", "indice"],
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
                description: producto.description,
                cantidad: 1,
                precio: producto.precio,
                preciodeventa: producto.preciodeventa,
                utilidad: producto.utilidad

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

.producto:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: scale(0.9899999);
    background-color: #E7F6F2;
}

.img img {
    width: 100%;
    height: 90%;
    margin-bottom: 0.2em;
}
.title{
    background-color: #a5c9ca19;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    padding: 0.3em;
}
.card-precio {
    font-weight: 600;
    font-size: 1.2em;
    color: #bf033b;
}

.card-stock {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container-card-options {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
}

.container-card-options button {
    margin: 0.5em;
}
#button-cart{
    border: none;
    border-radius: 2px;
    background-color: #395b649a;
    padding: 0.7em;
    color: #E7F6F2;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    
}
#button-cart:hover{
    background-color: #2C3333;
    color: #E7F6F2;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
.modal-producto {
    width: 30%;
    background-color: rgb(45, 46, 46);
    padding: 0.4em;
    margin: 0.2em;
    border-radius: 3px;
    color: azure;
}
</style>
