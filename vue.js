let app = new Vue ({
    el: '#app',
    data:{
        userActive:0,
        newMessages:'',
        contacts: [
            {
            name: 'Spider-Man',
            avatar: 'img/1090806.png',
            visible: true,
            messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
            },
            {
            name: 'Super-Man',
            avatar: 'img/1674292.png',
            visible: true,
            messages: 
                    [
                       {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                       },
                       {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                       },
                       {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                       }
                    ],
            },

            {
            name: 'Deadpool',
            avatar: 'img/1674298.png',
            visible: true,
            messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
            },

            {
            name: 'Morpheus',
            avatar: 'img/771371.png',
            visible: true,
            messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
            },

        ],
       
    },
     methods: {
            pippo: function(index){
                console.log('ciao');
            
            }, 
            sendMessage: function(message){
                this.contacts[this.userActive].messages.push(
   
                    {
                        text: message,
                        status: 'sent'
                }
                )
                this.newMessage = "";
                setTimeout(() => {
                    this.contacts[this.userActive].messages.push(
                        {
                            text: 'Ok',
                            status: 'received'
                        }
                    )
                },1000)

            },
   
        },           
})