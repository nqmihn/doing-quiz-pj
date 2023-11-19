import _ from "lodash";
import { useState } from "react";
import Lightbox from "react-awesome-lightbox";
import HOST_IMAGE_URL from "../../constants";
const Question = (props) => {
  const { data, index, handleCheckbox } = props;
  const [showPreviewImage, setShowPreviewImage] = useState(false);
  if (_.isEmpty(data)) {
    return <></>;
  }
  const onCheckBox = (event, answerId, questionId) => {
    handleCheckbox(answerId, questionId);
  };
  return (
    <>
      {data.image ? (
        <div className="question-image">
          <img
            style={{ cursor: "pointer" }}
            onClick={() => setShowPreviewImage(true)}
            src={`${HOST_IMAGE_URL}${data.image}`}
          />
          {showPreviewImage === true && (
            <Lightbox
              image={`${HOST_IMAGE_URL}${data.image}`}
              title={"Question Image"}
              onClose={() => setShowPreviewImage(false)}
            ></Lightbox>
          )}
        </div>
      ) : (
        <div className="question-image"></div>
      )}
      <div className="question">
        Question {index + 1}: {data.description} ?
      </div>
      <div className="answer">
        {data.quizAnswers &&
          data.quizAnswers.length &&
          data.quizAnswers.map((answer, index) => {
            return (
              <div className="answer-item" key={`answer-${index}`}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={answer.isSelected}
                    onChange={(event) => onCheckBox(event, answer.id, data.id)}
                  />
                  <label className="form-check-label">
                    {answer.description}
                  </label>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Question;
