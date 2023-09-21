import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
    onAdd: (item: Item) => void;
    onRem: () => void;
}

export const InputArea = ({ onAdd, onRem }: Props) => {
    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2023, 10, 25),
            category: 'food',
            title: 'Item de teste',
            value: 665.85
        }

        onAdd(newItem);
    }

    const handleRemEvent = () => {
        onRem();
    }

    return (
        <C.Container>
            <C.AddButtom onClick={handleAddEvent}>
                Adicionar
            </C.AddButtom>

            <C.RemButtom onClick={handleRemEvent}>
                Remover
            </C.RemButtom>
        </C.Container>
    );
}