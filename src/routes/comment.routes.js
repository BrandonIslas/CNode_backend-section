const { Router } = require('express');

module.exports = function({ CommentController }){
    const router = Router();
    router.get("/:ideaId", CommentController.getIdeaComments);
    router.get("/:commentId/unique", CommentController.get);
    router.post("/:ideaId",CommentController.createComment)
    router.patch("/:commentId", CommentController.update);
    router.delete("/:commentId", CommentController.delete);
    return router;
}