"use client";

import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";

export default function Home() {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="modal-body-text">Sziasztok Eszti vagyok és azt szereném, hogy itt jelenjenek meg a modelljeim.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>

          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
