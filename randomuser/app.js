const app = Vue.createApp ({
    data() {
        return {
            firstName: 'lala',
            lastName: 'lfdg',
            email: 'dsfa@gmail.com',
            gender: 'male',
            userPicture: 'https://pbs.twimg.com/media/DzeLmXZU0AA1OtZ?format=jpg'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api');
            var datas = await res.json();
            console.log(datas.results[0].name.first);




            this.firstName = datas.results[0].name.first;
            this.lastName = datas.results[0].name.last;
            this.email = datas.results[0].email;
            this.gender = datas.results[0].gender;
            this.userPicture = datas.results[0].picture.large//ame.first;'https://i1.sndcdn.com/avatars-000339084123-nag0p1-t500x500.jpg'
        }
    }
})

app.mount('#app');