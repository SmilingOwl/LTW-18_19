let storyForm = document.querySelector('#create_story');

function encodeForAjax(data) {
    return Object.keys(data).map(function(k){
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
}

let submit_story = function() {
    event.preventDefault();
    
    let user_id=this.querySelector('input[name=user_id]').value;
    let title=this.querySelector('textarea[name=title]').value;
    let text=this.querySelector('textarea[name=text]').value;
    let img=this.querySelector('textarea[name=image]').value;
    let option_index=this.querySelector('select[name=tasteChoice]').selectedIndex;
    let id_taste_choice=this.querySelector('select[name=tasteChoice]').options[option_index].value;

    let request = new XMLHttpRequest();
    request.addEventListener('load', receive_story);
    request.open('POST', '../actions/add_story.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(encodeForAjax({user_id: user_id, title: title, text: text, img: img, id_taste_choice: id_taste_choice}));
};

let receive_story = function(event) {
    let section = document.querySelector('#stories');
    let first_story = document.querySelector('#stories article:first-child');
    
    let story = JSON.parse(this.responseText);
  
      let new_story = document.createElement('article');
  
      new_story.innerHTML = '<header class="user">' +
        '<h1> <a href="story_item.php?story_id=' + story.story_id + '&user_id=' + story.user_id + '">' + story.title + '</a></h1>' +
        '</header>' +
        '<p>' + story.text + '</p>' +
        '<footer>' +
        '<span class="author">By ' + story.username + '</span>' +
        '<span class="likes">0 <img src="../icons/like_icon.png" alt="likes"></span>' +
        '<span class="dislikes">0 <img src="../icons/dislike_icon.png" alt="dislikes"></span>' +
        '<span class="tasteChoice"> <a href="story_item.html">#' + story.taste + '</a></span>' +
        '<span class="comments">0 <img src="../icons/comment_icon.png" alt="comments"></span>' +
        '<span class="favorites">0 <img src="../icons/saved_icon.png" alt="favorites"></span>' +
        '<input type="hidden" name="story_id" value="' + story.story_id + '">' +
        '</footer>';
  
      section.insertBefore(new_story, first_story);

      let head = document.querySelector('head');
      let script_to_delete = document.querySelector('head script:first-of-type');
      let body = document.querySelector('body');
      body.removeChild(storyForm);
      head.removeChild(script_to_delete);
      let button = document.createElement('span');
      button.className = "add_story";
      button.innerHTML = '<img src="../icons/add_icon.png" alt="Add story">';
      body.insertBefore(button, section);
}
storyForm.addEventListener('submit', submit_story);