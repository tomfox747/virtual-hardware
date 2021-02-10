const axios = require('axios');

let buildingId = 3
let roomIds = ['Reception', 'LibraryZone1','LibraryZone2','LibraryZone3','Office','ReadingArea']
let posts = [
    {
        url:'http://localhost:7070/web/data/increment_room_population',
        body:{
            buildingId:buildingId,
            roomId:null
        }
    },
    {
        url:'http://localhost:7070/web/data/decrement_room_population',
        body:{
            buildingId:buildingId,
            roomId:null
        }
    }
]

function post(postObject){
    axios.post(postObject.url,postObject.body)
    .then((res) =>{
        console.log("data posted")
    })
    .catch(err =>{
        console.log(err)
    })
    return
}

function generateRequest(){
    let randRoom = roomIds[Math.floor(Math.random() * roomIds.length)];
    let randPost = Math.floor(Math.random() * posts.length)
    let postObject = posts[randPost]
    postObject.body.roomId = randRoom
    setTimeout(() =>{
        post(postObject)
        generateRequest()
    },500)
}

generateRequest()