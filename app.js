const one = new Vue({
    el: '#vue-app-one',
    data: {
        title: "Vue App One"
    },
    methods: {
     
       
    },
    computed: {
        greet() {
            return "Hello from app one";
        }

    },
});

const two = new Vue({
    el: '#vue-app-two',
    data: {
        title: "Vue App Two"
    },
    methods: {
        changeTitle() {
            one.title = "title change function called!"
        }
       
    },
    computed: {
        greet() {
            return "App 2 is here!";
        }

    },
});

one.title = "Changed from outside the Vue instance";
two.title = "Changed title two from outside the Vue instance....";