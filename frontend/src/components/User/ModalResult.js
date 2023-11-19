import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModelResult(props) {
  const { show, setShow, dataResult } = props;

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} size="xl" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Kết quả</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Tổng điểm: {dataResult.countTotal}</div>
          <div>Số câu đúng: {dataResult.countCorrect}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Hiện đáp án
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModelResult;
