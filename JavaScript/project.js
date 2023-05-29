let previous_content_id = null;
let riddle_answer_id = null;
let riddle_displayed = false;
let removeContentById = (id)=>{
    if(id)
    {
        let content_type = id.substring(0,id.length-2);
        document.getElementById(id).classList.remove(content_type+'-show');
        document.getElementById(id).classList.add(content_type+'-hidden');
        if(content_type === 'riddle')
        {
            riddle_displayed = false;
        }
    }
    if(riddle_answer_id)
    { 
        document.getElementById(riddle_answer_id).classList.remove('riddle-answer-show');
        document.getElementById(riddle_answer_id).classList.add('riddle-answer-hidden');
        riddle_answer_id = null;
    }
}
let addContentById = (content_type, idx)=>{
    let id = content_type+'-'+idx;
    if(content_type !== 'riddle-answer')
    {
        removeContentById(previous_content_id);
    }
    document.getElementById(id).classList.remove(content_type+'-hidden');
    document.getElementById(id).classList.add(content_type+'-show');
    return id;
}
document.getElementById('meme-btn').addEventListener('click',()=>{
    previous_content_id = addContentById('meme',Math.floor(Math.random() * 5) + 1);
})
document.getElementById('joke-btn').addEventListener('click',()=>{
    previous_content_id = addContentById('joke',Math.floor(Math.random() * 5) + 1);
})
document.getElementById('quote-btn').addEventListener('click',()=>{
    previous_content_id = addContentById('quote',Math.floor(Math.random() * 5) + 1);
})
document.getElementById('riddle-btn').addEventListener('click',()=>{
    previous_content_id = addContentById('riddle',Math.floor(Math.random() * 5) + 1);
    riddle_displayed = true;
})
document.getElementById('riddle-answer-btn').addEventListener('click',()=>{
    if(!riddle_displayed)
    {
        alert("Answer cannot be displayed without the riddle.");
        return;
    }
    if(riddle_answer_id)
    {
        alert("Riddle Answer has already been displayed.");
        return;
    }
    riddle_answer_id = addContentById('riddle-answer',previous_content_id[previous_content_id.length-1]);
})