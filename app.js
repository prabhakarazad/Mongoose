const mongoose=require('mongoose');
//connection of database 
mongoose.connect("mongodb://localhost:27017/azadbase",{
    useUnifiedTopology: true ,
    useNewUrlParser: true

})
.then(()=>{
    console.log("data base connection successfully...");
})
.catch((err)=>{
    console.log("some errer");
})
//mangoose schema and models

const playlistSchema=new  mongoose.Schema({
    name:String,
    ctype:String,
    videos:Number,
    author:String,
    active:false,
    date:{
        type:Date,
        default:Date.now
    }
});

// models
const Playlist = new mongoose.model("Playlist",playlistSchema);

//insert the document

 const reactPlaylist=new Playlist({
     name:"Reactjs",
     ctype:"front-end",
     videos:40,
     author:"azad",
     active:false
 })
 reactPlaylist.save();
