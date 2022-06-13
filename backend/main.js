var app = new Vue({
    el: '#app',
    data: {
        numberAccount: "",
        numberKey: ""
    },
    methods: {
        enterAccount(number) {
            this.numberAccount += number
        },
        enterKey(number) {
            this.numberKey += number
        },
        pressCancel: function () {
            this.numberKey = ""
        },
        pressEdit: function () {
            let number = this.numberKey;
            let numberEdit = number.substring(0, number.length - 1);
            this.numberKey = numberEdit
        }
    },
    computed: {

    }
})