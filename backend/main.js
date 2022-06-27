var app = new Vue({
    el: '#app',
    data: {
        users: [
            { id: 1, nAccount: "1111", key: "1234", balance: 100000 , block: 0},
            { id: 2, nAccount: "2222", key: "1234", balance: 100000 , block: 0},
            { id: 3, nAccount: "3333", key: "1234", balance: 100000 , block: 0},
            { id: 4, nAccount: "4444", key: "1234", balance: 100000 , block: 0},
            { id: 5, nAccount: "5555", key: "1234", balance: 100000 , block: 0},
        ],
        numberAccount: "",
        numberKey: "",
        block: 0,
        incorrect: 1,
        watch: 0,
        oWatch:0,
        valueConsign: ""
    },
    methods: {
        enterAccount(number) {
            this.numberAccount += number
        },
        enterKey(number) {
            this.numberKey += number
        },
        pressCancel: function () {
            this.numberAccount = ""
            this.numberKey = ""
        },
        pressEdit: function () {
            let number = this.numberKey;
            let numberEdit = number.substring(0, number.length - 1);
            this.numberKey = numberEdit
        },   
        correctKey: function () {
            const searchAccount = this.users.find(element => element.nAccount == this.numberAccount);
            const searchKey = this.users.find(element => element.key == this.numberKey);
            if (this.incorrect == 3) {
                alert("Clave bloqueada")
                searchKey.block = 3
            } else 
            if(!searchAccount){
                alert("La cuenta no existe")
            } else 
            if(!searchKey){
                alert("Clave incorrecta")
                this.incorrect++
            }
            if(searchAccount && searchKey && searchKey.block != 3){
                this.watch = 1
            }            
        },
        watchConsign: function () {
            this.oWatch=1
        },
        watchRetire: function () {
            this.oWatch=2
        },
        out: function () {
            this.watch = 0
            this.numberAccount = ""
            this.numberKey = ""
        },
        consign: function () {
            const searchAccount = this.users.find(element => element.nAccount == this.numberAccount);
            searchAccount.balance += parseInt(this.valueConsign)
            alert(`${searchAccount.balance}`)
            this.valueConsign = ""
        }

    },
    computed: {

    }
})