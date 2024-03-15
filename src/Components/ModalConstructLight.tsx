import Modal from 'react-modal';

interface Props {
    isModalOpen: boolean
    setModalOpen: (value: boolean) => void
}
export const ModalConstructLight = ({isModalOpen, setModalOpen}: Props) => {
  return (
    <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setModalOpen(false)}
          contentLabel="Mensaje de Bienvenida"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              borderRadius: "40px",
              border: 0,
              minHeight: "50%",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              justifyContent: "center",
              width: "70%",
            },
          }}
        >
          <h2 className="text-2xl font-bold">Welcome to my website</h2>
          <p>
            Thanks for visiting! This site is still under{" "}
            <span className="font-bold">construccion...</span>
          </p>
          <h3 className="text-xl font-bold mt-5">Next Steps:</h3>
          <ul className="list-disc pl-5 pt-5">
            <li>
              Improve the projects section by adding a modal to give more
              details of the projects.
            </li>
            <li>
              Work on an attractive design to show the images of my projects.
              <span className="font-bold"> (working on this)</span>
            </li>
            <li>Add completed projects.</li>
            <li>
              Add light theme.
              <span className="font-bold"> (working on this)</span>
            </li>
          </ul>
          <div className="flex justify-center mt-5">
            <button
              className="btn-portfolio flex items-center ml-4 bg-corp border border-corp rounded-md  pr-4  pl-4 pt-1 pb-1 gap-1"
              onClick={() => setModalOpen(false)}
            >
              Cerrar
            </button>
          </div>
        </Modal>
  )
}
