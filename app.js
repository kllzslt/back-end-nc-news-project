const cors = require('cors');
const express = require("express");
//const { readFile } = require("fs/promises");
const {
	getArticles,
	getArticlesById,
	getCommentsByArticleId,
	patchArticle,
	postComment,
} = require("./controllers/articles.controllers");
const { getTopics } = require("./controllers/news.controllers");
const errors = require("./controllers/errors");
const { getUsers } = require("./controllers/users.controllers");
const { removeCommentById } = require("./controllers/comments.controllers");
const { getEndpointsHome, getEndpointsApi} = require("./controllers/api.controller")
const app = express();

app.use(cors());

app.use(express.json());

//HOME
app.get("/", getEndpointsHome);

//API
app.get("/api", getEndpointsApi);

//TOPICS
app.get("/api/topics", getTopics);

//ARTICLES
app.get("/api/articles", getArticles);
app.get("/api/articles/:article_id", getArticlesById);
app.get("/api/articles/:article_id/comments", getCommentsByArticleId);
app.patch("/api/articles/:article_id", patchArticle);
app.post("/api/articles/:article_id/comments", postComment);

//USERS
app.get("/api/users", getUsers);

//COMMENTS
app.delete("/api/comments/:comment_id", removeCommentById);

app.all("/*", (req, res) => {
	res.status(404).send({ msg: "Path not found." });
});

app.use(errors.psqlErrorHandler);
app.use(errors.customErrorHandler);
app.use(errors.error500Handler);

module.exports = app;