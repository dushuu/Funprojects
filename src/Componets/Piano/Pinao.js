import React,{useEffect} from "react";
import c from './notes/notes_C.mp3'
import B from './notes/notes_B.mp3'
import Bb from './notes/notes_Bb.mp3'
import A from './notes/notes_A.mp3'
import Ab from './notes/notes_Ab.mp3'
import F from './notes/notes_F.mp3'
import E from './notes/notes_E.mp3'
import Eb from './notes/notes_Eb.mp3'
import Gb from './notes/notes_Gb.mp3'
import G from './notes/notes_G.mp3'
import D from './notes/notes_D.mp3'
import Db from './notes/notes_Db.mp3'
import './Pian.css'



const Pinao = () => {
    const play =()=>{
        
const white_keys =['z', 'x', 'c','v', 'b', 'n', 'm']
const black_keys = ['s','d','g','h','j']
const keys = document.querySelectorAll('.key')
const whitekeys = document.querySelectorAll('.key.white')
const blackkeys = document.querySelectorAll('.key.black')

        keys.forEach(key =>{
            key.addEventListener('click',()=> playNotes(key))
        })
        
        document.addEventListener('keydown', e =>{
            if(e.repeat) return
            const key = e.key;
            const whitekeyIndex = white_keys.indexOf(key)
            const blackkeysIndex = black_keys.indexOf(key)
        
            if(whitekeyIndex > -1) playNotes(whitekeys[whitekeyIndex])
            if(blackkeysIndex > -1) playNotes(blackkeys[blackkeysIndex])
          
        })
        
        function playNotes(key){
            const noteAudio = document.getElementById(key.dataset.note)
            noteAudio.currentTime = 0
            noteAudio.play()
            key.classList.add('active')
            noteAudio.addEventListener('ended',()=>{
                key.classList.remove('active')
            }) 

    }
}
useEffect(()=>{
    play()
},[])


  return (
      <> 
     
       <div className="di">
 
      <div className="piano">
        <div className="key white" data-note="C"></div>
        <div className="key black" data-note="Db"></div>
        <div className="key white" data-note="D"></div>
        <div className="key black" data-note="E"></div>
        <div className="key white" data-note="Eb"></div>
        <div className="key white" data-note="F"></div>
        <div className="key black" data-note="Gb"></div>
        <div className="key white" data-note="G"></div>
        <div className="key black" data-note="Ab"></div>
        <div className="key white" data-note="A"></div>
        <div className="key black" data-note="Bb"></div>
        <div className="key white" data-note="B"></div>
      </div>
      <audio id="C" src={c}></audio>
      <audio id="Db" src={Db}></audio>
      <audio id="D" src={D}></audio>
      <audio id="E" src={E}></audio>
      <audio id="Eb" src={Eb}></audio>
      <audio id="F" src={F}></audio>
      <audio id="Gb" src={Gb}></audio>
      <audio id="G" src={G}></audio>
      <audio id="Ab" src={Ab}></audio>
      <audio id="A" src={A}></audio>
      <audio id="Bb" src={Bb}></audio>
      <audio id="B" src={B}></audio>
    </div>
    </>
  );
};

export default Pinao;
