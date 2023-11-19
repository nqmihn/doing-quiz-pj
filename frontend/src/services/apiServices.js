import axios from "../utils/axios-customize";
// ok
const postCreateUser = (email, password, username, role, image) => {
  const form = new FormData();
  form.append("email", email);
  form.append("password", password);
  form.append("username", username);
  form.append("role", role);
  form.append("image", image);
  return axios.post("api/v1/users", form, {
    headers: {
      folder_type: "users",
    },
  });
};
// ok
const getAllUser = () => {
  return axios.get("api/v1/users/all");
};
// ok
const putUpdateUser = (id, username, role, image) => {
  const form = new FormData();
  form.append("id", id);
  form.append("username", username);
  form.append("role", role);
  form.append("image", image);
  return axios.put("api/v1/users", form, {
    headers: {
      folder_type: "users",
    },
  });
};
// ok
const deleteUser = (userId) => {
  return axios.delete("api/v1/users", { data: { id: userId } });
};
// ok
const getUserWithPaginate = (page, limit) => {
  return axios.get(`api/v1/users?page=${page}&limit=${limit}`);
};
// ok
const postLogin = (email, password) => {
  return axios.post("/api/v1/auth/login", {
    username: email,
    password,
    delay: 1000,
  });
};
// ok
const postRegister = (email, password, username) => {
  return axios.post("/api/v1/auth/register", { email, password, username });
};
// ok
const getQuizByUser = () => {
  return axios.get("/api/v1/user-quiz/quiz-by-user");
};
// ok
const getQuestionById = (id) => {
  return axios.get(`/api/v1/question/questions-by-quiz?quizId=${id}`);
};
// ok
const postSubmitQuiz = (data) => {
  return axios.post(`/api/v1/answer/quiz-submit`, { ...data });
};
// ok
const postCreateNewQuiz = (description, name, difficulty, quizImage) => {
  const form = new FormData();
  form.append("description", description);
  form.append("name", name);
  form.append("difficulty", difficulty);
  form.append("quizImage", quizImage);
  return axios.post(`/api/v1/quizzes`, form, {
    headers: {
      folder_type: "quizzes",
    },
  });
};
// ok
const getAllQuizForAdmin = () => {
  return axios.get(`/api/v1/quizzes/all`);
};
// ok
const deleteQuizById = (id) => {
  return axios.delete(`api/v1/quizzes/${id}`);
};
// ok
const updateQuizById = (id, description, name, difficulty, quizImage) => {
  const form = new FormData();
  form.append("id", id);
  form.append("description", description);
  form.append("name", name);
  form.append("difficulty", difficulty);
  form.append("quizImage", quizImage);
  return axios.put(`/api/v1/quizzes`, form, {
    headers: {
      folder_type: "quizzes",
    },
  });
};
// ok
const postCreateNewQuestion = (quizId, description, questionImage) => {
  const form = new FormData();
  form.append("quizId", quizId);
  form.append("description", description);
  form.append("questionImage", questionImage);
  return axios.post(`/api/v1/question`, form, {
    headers: {
      folder_type: "questions",
    },
  });
};
// ok
const postCreateNewAnswer = (description, correct_answer, question_id) => {
  return axios.post(`/api/v1/answer`, {
    description,
    correctAnswer: correct_answer,
    questionId: question_id,
  });
};
// ok
const postAssignQuiz = (quizId, userId) => {
  return axios.post("/api/v1/user-quiz/assign", { quizId, userId });
};
// ok
const getQuizWithQA = (quizId) => {
  return axios.get(`/api/v1/quizzes/quiz-with-qa/${quizId}`);
};
// ok
const postUpsertQA = (data) => {
  return axios.post(`/api/v1/question/upsert-qa`, { ...data });
};
// ok
const postUpsertFileQa = (image) => {
  const form = new FormData();
  form.append("image", image);
  return axios.post(`/api/v1/question/update-file-qa`, form, {
    headers: {
      folder_type: "questions",
    },
  });
};
// ok
const logout = () => {
  return axios.post("/api/v1/auth/logout");
};
const getOverview = () => {
  return axios.get("/api/v1/overview");
};
export {
  postCreateUser,
  getAllUser,
  putUpdateUser,
  deleteUser,
  getUserWithPaginate,
  postLogin,
  postRegister,
  getQuizByUser,
  getQuestionById,
  postSubmitQuiz,
  postCreateNewQuiz,
  getAllQuizForAdmin,
  deleteQuizById,
  updateQuizById,
  postCreateNewQuestion,
  postCreateNewAnswer,
  postAssignQuiz,
  getQuizWithQA,
  postUpsertQA,
  postUpsertFileQa,
  logout,
  getOverview,
};
