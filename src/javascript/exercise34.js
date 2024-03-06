let testJson = {
  client_key: "7302447960577572866",
  event: "comment.update",
  create_time: 1702057843,
  user_openid: "-0007sJl0nXT-pw7dHER2utqlNU_YXdjcqY_",
  content:
    '{"comment_id":7310282655622562565,"video_id":7022496809452932357,"parent_comment_id":0,"comment_type":"comment","comment_action":"set_to_public","timestamp":1702057843566}',
};


if(testJson.content) {

    // Analizar el contenido de la clave "content"
    const content = JSON.parse(testJson.content);
    
    // Acceder al comment_id
    const commentId = content.comment_id;
    
    // Imprimir el comment_id
    console.log(commentId);
}
