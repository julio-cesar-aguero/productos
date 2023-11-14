<template>
    <div style="margin: 2em 2em">
        <div id="logo">
            <h1>Rod Select</h1>
        </div>
        <lista-top>
            <div>
                <div>TOP 10 productos mas vendidos</div>
                <b-table striped hover :items="items" :fields="fields"></b-table>
            </div>
        </lista-top>
        
        <div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // Note `isActive` is left out and will not appear in the rendered table
            fields: ['first_name', 'last_name', 'age'],
            items: [
                { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
                { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
            ]
        }
    }
}
</script>
<style scoped>
#logo {
    bacckground-color: blue;
    width: 100%;
}

#logo h1 {
    color: rgb(236, 236, 236);
    background-color: rgba(0, 0, 0, 0.552);
    padding: 1em;
    text-align: left;

}
</style>