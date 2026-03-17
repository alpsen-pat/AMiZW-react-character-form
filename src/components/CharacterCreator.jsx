import { useState } from "react";
import CharacterForm from "./CharacterForm";
import CharacterPreview from "./CharacterPreview";
import SavePanel from "./SavePanel";

const initialForm = {
    name: "",
    race: "",
    classType: "",
    level: 1,
    weapon: "",
    description: "",
    isPremium: false,
    stats: {
        strength: 0,
        agility: 0,
        intelligence: 0,
    },
};

function cloneData(data) {
    return JSON.parse(JSON.stringify(data));
}

function CharacterCreator() {
    const [formData, setFormData] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [savedCharacter, setSavedCharacter] = useState(null);

    const handleChange = (e) => {
        // TODO:
        // 1. pobierz name, value, type, checked z e.target
        // 2. jeśli pole zaczyna się od "stats." to zaktualizuj formData.stats
        // 3. w innym przypadku zaktualizuj zwykłe pole formularza
    };

    const validate = () => {
        const newErrors = {};

        // TODO:
        // - nick min. 3 znaki
        // - rasa wymagana
        // - klasa wymagana
        // - poziom 1-60
        // - broń wymagana
        // - opis min. 10 znaków
        // - suma statystyk max 15

        return newErrors;
    };

    const handleSave = (e) => {
        e.preventDefault();

        // TODO:
        // 1. uruchom validate()
        // 2. zapisz błędy do setErrors(...)
        // 3. jeśli brak błędów, zapisz postać do savedCharacter
    };

    const handleLoadSaved = () => {
        // TODO:
        // jeśli istnieje savedCharacter,
        // wczytaj go z powrotem do formData
    };

    const handleDeleteSaved = () => {
        // TODO:
        // usuń zapis postaci
    };

    const handleResetForm = () => {
        // TODO:
        // zresetuj formularz do initialForm
        // wyczyść błędy
    };

    return (
        <div className="creator-layout">
            <div className="panel">
                <h1>Kreator postaci RPG</h1>

                <CharacterForm
                    formData={formData}
                    errors={errors}
                    onChange={handleChange}
                    onSubmit={handleSave}
                />

                <SavePanel
                    hasSavedCharacter={!!savedCharacter}
                    onLoadSaved={handleLoadSaved}
                    onDeleteSaved={handleDeleteSaved}
                    onResetForm={handleResetForm}
                />
            </div>

            <div className="panel">
                <CharacterPreview
                    title="Podgląd aktualnego formularza"
                    character={formData}
                />

                <CharacterPreview
                    title="Zapisana postać"
                    character={savedCharacter}
                    emptyMessage="Brak zapisanej postaci."
                />
            </div>
        </div>
    );
}

export default CharacterCreator;