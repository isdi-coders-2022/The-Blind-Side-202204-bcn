import { useState } from "react";
import Button from "../Button/Button";
import useApi from "../../store/hooks/useApi";

const FormComponent = ({ favouritedCharacters }) => {
  const { addCharacter, loadLocalApiCharacter } = useApi();

  const formSubmit = (event) => {
    event.preventDefault();
    if (
      Object.values(newCharacter).findIndex(
        (value) => value.replace(/\s/g, "") === ""
      ) !== -1
    )
      return;

    addCharacter(newCharacter);
    setnewCharacterName("");
    setnewCharacterStatus("");
    setnewCharacterSpecies("");
    setnewCharacterGender("");

    loadLocalApiCharacter();
  };

  const [newCharacterName, setnewCharacterName] = useState("");
  const [newCharacterStatus, setnewCharacterStatus] = useState("");
  const [newCharacterSpecies, setnewCharacterSpecies] = useState("");
  const [newCharacterGender, setnewCharacterGender] = useState("");

  const newCharacter = {
    id: `created${favouritedCharacters.length}`,
    name: newCharacterName,
    status: newCharacterStatus,
    species: newCharacterSpecies,
    gender: newCharacterGender,
    image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
  };

  return (
    <form className="addCharacterForm" onSubmit={formSubmit} autoComplete="off">
      <label htmlFor="name">
        Character name
        <input
          required
          id="name"
          autoFocus
          type={"text"}
          placeholder={"Name"}
          value={newCharacterName}
          onChange={(event) => setnewCharacterName(event.target.value)}
        />
      </label>
      <label htmlFor="status">
        Status
        <input
          required
          id="status"
          type={"text"}
          placeholder={"Status"}
          value={newCharacterStatus}
          onChange={(event) => setnewCharacterStatus(event.target.value)}
        />
      </label>
      <label htmlFor="species">
        Species
        <input
          required
          id="species"
          type={"text"}
          placeholder={"Species"}
          value={newCharacterSpecies}
          onChange={(event) => setnewCharacterSpecies(event.target.value)}
        />
      </label>

      <label htmlFor="gender">
        Gender
        <input
          required
          id="gender"
          type={"text"}
          placeholder={"Gender"}
          value={newCharacterGender}
          onChange={(event) => setnewCharacterGender(event.target.value)}
        />
      </label>
      <Button nameClass={"form-submit"} text={"Create"}></Button>
    </form>
  );
};

export default FormComponent;
