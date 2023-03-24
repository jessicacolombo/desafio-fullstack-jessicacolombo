import { useContext } from "react";
import { ContactsContext } from "../../contexts/contactsContext";
import { ContainerModal, ModalContent } from "../../styles/modal";

export const ModalAddContact = () => {
  const { setOpenModal } = useContext(ContactsContext);

  return (
    <ContainerModal onClick={() => setOpenModal(false)}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <div className="modal__header">
          <h2>Novo contato: </h2>
          <button onClick={() => setOpenModal(false)}>X</button>
        </div>
        <form
        // onSubmit={handleSubmit(onSubmit)}
        >
          <label>
            Nome:
            <input
              type="text"
              placeholder="Insira o nome do contato que deseja cadastrar"
              id="name"
              // {...register("name")}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              placeholder="Insira o email do contato que deseja cadastrar"
              id="email"
              // {...register("email")}
            />
          </label>
          <label>
            Telefone:
            <input
              type="email"
              placeholder="Insira o telefone do contato que deseja cadastrar"
              id="cellphone"
              // {...register("cellphone")}
            />
          </label>

          <button type="submit">Adicionar</button>
        </form>
      </ModalContent>
    </ContainerModal>
  );
};
