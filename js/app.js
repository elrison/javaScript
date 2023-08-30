const LIST = [{
    id: 1,
    nome: 'Yoda',
    avatar: 'images/yoda.png'
},
{
    id: 2,
    nome: 'C3pO',
    avatar: 'images/c3po.png'
},
{
    id: 3,
    nome: 'Chewbacca',
    avatar: 'images/chewbacca.png'
},
{
    id: 4,
    nome: 'Han Solo',
    avatar: 'images/hansolo.png'
},
{
    id: 5,
    nome: 'Princesa Leia',
    avatar: 'images/leia.png'
},
{
    id: 6,
    nome: 'Luke',
    avatar: 'images/luke.png'
},
{
    id: 7,
    nome: 'R2D2',
    avatar: 'images/r2d2.png'
},
{
    id: 8,
    nome: 'Dart Vader',
    avatar: 'images/vader.png'
}]

const App = new Vue({
    el : '#app',
    data: {
        title: 'Star Wars Lego',
        username: 'Elrison Silva',
        characters: LIST,
        searchName:''
    },
    methods:{
        like(username){
            alert(`O personagem ${ username } recebeu um like!`)
        },
        remove(id){
            const list = this.characters

            const result = list.filter(item => {
                return item.id !== id
            })
            this.characters = result
        },
        search(){
            if (this.searchName === ''){
               return alert('O campo de busca é obrigatório!')
            }

              (this.searchName === '')
            const list = this.characters = LIST
            const result  =  list.filter(item =>{
                return item.nome === this.searchName
            })
            if (result.length <= 0){
                alert('Nenhum registro encontrado')
            }else{
                this.characters = result
            }
           
            
        }
    }
})